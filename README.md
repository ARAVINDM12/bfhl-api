# 📌 BFHL API – VIT Full Stack Placement Task

This project is a **REST API** built as part of the VIT Full Stack placement drive.  
It processes an input array and returns categorized outputs such as numbers, alphabets, special characters, sum, and a concatenated string.  

---

## 🚀 Features
- **Route:** `POST /bfhl`
- **Hosted on:** [Vercel]([https://vercel.com](https://bfhl-api-pearl.vercel.app/bfhl))
- **Codebase:** Public on GitHub  

### ✅ Core Logic
- Splits numbers into **odd_numbers** and **even_numbers** (returned as strings).  
- Extracts **alphabets** (converted to uppercase).  
- Extracts **special_characters**.  
- Returns **sum of numbers** (as a string).  
- Builds **concat_string** → reverse of all alphabets with alternating caps.  
- Always includes:
  - `is_success`
  - `user_id` → `aravind_m_12122003`  
  - `email` → `aravind.m2022a@vitstudent.ac.in`  
  - `roll_number` → `22BCT0024`  

---

## 🛠️ Tech Stack
- **Language:** JavaScript (Node.js)  
- **Framework:** Vercel Serverless Functions (lightweight Express-style API)  
- **Hosting:** Vercel (auto-deploy from GitHub)  
- **Version Control:** Git + GitHub  

---

## 📡 Hosted API
🔗 **Endpoint:**  
`https://bfhl-api-pearl.vercel.app/bfhl`  


## 🧪 Test Cases
### Example Request
```json
{
  "data": ["a","1","334","4","R","$"]
}

### RESPONSE
{
  "is_success": true,
  "user_id": "aravind_m_12122003",
  "email": "aravind.m2022a@vitstudent.ac.in",
  "roll_number": "22BCT0024",
  "odd_numbers": ["1"],
  "even_numbers": ["334","4"],
  "alphabets": ["A","R"],
  "special_characters": ["$"],
  "sum": "339",
  "concat_string": "Ra"
}

