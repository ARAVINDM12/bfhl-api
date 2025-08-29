export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(200).json({ is_success: false, message: 'Only POST allowed at /bfhl' });
  }
  try {
    const { data } = req.body || {};
    if (!Array.isArray(data)) {
      return res.status(200).json({ is_success: false, message: 'Invalid payload: expected { "data": [...] }' });
    }

    // Normalize all inputs to strings (handles numbers passed without quotes)
    const asStrings = data.map(v => (typeof v === 'string' ? v : String(v)));

    const isNumber = s => /^-?\d+$/.test(s);
    const isAlpha = s => /^[A-Za-z]+$/.test(s);
    const isAlnum = s => /^[A-Za-z0-9]+$/.test(s);

    const numbers = asStrings.filter(isNumber);
    const odd_numbers = numbers.filter(n => Math.abs(parseInt(n, 10)) % 2 === 1).map(String);
    const even_numbers = numbers.filter(n => parseInt(n, 10) % 2 === 0).map(String);
    const sum = numbers.reduce((acc, n) => acc + parseInt(n, 10), 0).toString();

    const alphabets = asStrings.filter(isAlpha).map(s => s.toUpperCase());

    const special_characters = asStrings.filter(s => !isAlnum(s));

    // Build concat_string from ALL letters found anywhere in the input (per spec)
    const letters = asStrings
      .map(s => (s.match(/[A-Za-z]/g) || []))
      .flat();

    const concat_string = letters
      .reverse()
      .map((ch, i) => (i % 2 === 0 ? ch.toUpperCase() : ch.toLowerCase()))
      .join('');

    // ---- Customize these or set as Vercel Environment Variables ----
    const FULL_NAME = process.env.FULL_NAME || 'aravind_m';  // e.g., 'aravind_m'
    const DOB_DDMMYYYY = process.env.DOB_DDMMYYYY || '12122003';              // e.g., '17091999'
    const EMAIL = process.env.EMAIL || 'aravind.m2022a@vitstudent.ac.in';
    const ROLL_NUMBER = process.env.ROLL_NUMBER || '22BCT0024';
    // ----------------------------------------------------------------

    const user_id = `${FULL_NAME}_${DOB_DDMMYYYY}`;

    return res.status(200).json({
      is_success: true,
      user_id,
      email: EMAIL,
      roll_number: ROLL_NUMBER,
      odd_numbers,
      even_numbers,
      alphabets,
      special_characters,
      sum,
      concat_string
    });
  } catch (err) {
    return res.status(200).json({ is_success: false, message: 'Server error' });
  }
}
