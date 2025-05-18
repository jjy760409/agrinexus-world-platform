
const functions = require("firebase-functions");
const admin = require("firebase-admin");
const fetch = require("node-fetch");
admin.initializeApp();

exports.gptPolicy = functions.https.onRequest(async (req, res) => {
  const prompt = req.body.prompt;
  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Authorization": "Bearer sk-Your-API-Key",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: prompt }]
    })
  });
  const data = await response.json();
  const reply = data.choices?.[0]?.message?.content;
  res.json({ reply });
});

exports.sendSlack = functions.https.onRequest(async (req, res) => {
  const msg = req.body.message;
  await fetch("https://hooks.slack.com/services/your/slack/webhook", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text: msg })
  });
  res.send("Slack 메시지 전송 완료");
});

exports.login = functions.https.onRequest(async (req, res) => {
  res.send("Firebase 로그인 성공 (시뮬레이션)");
});
