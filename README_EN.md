
# 🌿 AgriNexus World - Global Smart Agriculture Platform

![AgriNexus](https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Agriculture_in_South_Korea.jpg/800px-Agriculture_in_South_Korea.jpg)

[![Firebase](https://img.shields.io/badge/Firebase-enabled-orange)](https://firebase.google.com/)
[![OpenAI](https://img.shields.io/badge/OpenAI-integrated-green)](https://openai.com/)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](#license)

AgriNexus World is a unified global smart agriculture platform integrating:
contracts, PDF reports, AI-driven insights, seed recommendation, layout simulation,
real-time Firebase logging, and a global policy navigator.

---

## ✅ Key Features

- 📄 Contract Generator (PDF output)
- 📑 Report Generator (PDF export)
- 🤖 OpenAI Integration (prompt + response)
- 🌾 Seed Recommender (by country + season)
- 🌱 SmartFarm Planner (area + automation)
- 📊 Chart.js for visual price tracking
- 📥 Firebase log + data saving
- 🧠 Admin log viewer (Realtime DB)
- 🌍 Global Portal for policy & fund exploration

---

## 🔗 How to Use

1. Setup Firebase and get your config key  
2. Replace in:
   - `firebase_log_input.html`
   - `firebase.html`
   - `admin.html`

3. Deploy via GitHub Pages or Netlify

---

## 🌐 i18n Language Toggle (Basic)

In index.html or index_en.html, use a selector:

```html
<select onchange="changeLang(this.value)">
  <option value='en'>EN</option>
  <option value='ko'>KR</option>
</select>
<script>
function changeLang(lang) {
  window.location.href = lang === 'en' ? 'index_en.html' : 'index.html';
}
</script>
```

---

## 📫 Contact

contact@agrinexus.world | © 2025 AgriNexus World
