
const functions = require("firebase-functions");
const admin = require("firebase-admin");
const fetch = require("node-fetch");
admin.initializeApp();

exports.gptChat = functions.https.onRequest(async (req, res) => {
  const { user, messages } = req.body;
  const countRef = admin.database().ref("callCount/" + user);
  const snap = await countRef.once("value");
  const count = snap.val() || 0;
  if (count >= 5) return res.json({ reply: "⚠️ 하루 요청 횟수를 초과했습니다." });

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Authorization": "Bearer sk-Your-OpenAI-Key",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages
    })
  });
  const data = await response.json();
  const reply = data.choices?.[0]?.message?.content || "❌ GPT 응답 실패";

  await admin.database().ref("gptLogs").push({ user, prompt: messages[messages.length-2]?.content, reply, time: Date.now() });
  await countRef.set(count + 1);
  res.json({ reply });
});
