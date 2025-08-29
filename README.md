# BFHL API (Vercel Serverless)

**Endpoint:** POST `/bfhl`

## Deploy (Fastest)
1. Create a new GitHub repo and push this folder.
2. Go to https://vercel.com → New Project → Import the repo → Deploy.
3. After deploy, set **Environment Variables** in Vercel (optional but recommended):
   - `FULL_NAME` (e.g., `aravind_m`)
   - `DOB_DDMMYYYY` (e.g., `17091999`)
   - `EMAIL`
   - `ROLL_NUMBER`
4. Visit `https://<your-project>.vercel.app/bfhl` with a POST request.

## Test
```bash
curl -X POST https://<your-project>.vercel.app/bfhl     -H "Content-Type: application/json"     -d '{"data":["a","1","334","4","R","$"]}'
```

## Notes
- Returns `odd_numbers`, `even_numbers`, `alphabets` (uppercased), `special_characters`, `sum` (as string), and `concat_string` (reverse order with alternating caps).
- Response always includes: `is_success`, `user_id`, `email`, `roll_number`.
