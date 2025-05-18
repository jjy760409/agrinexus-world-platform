
const functions = require("firebase-functions");
const fetch = require("node-fetch");

exports.gpt = functions.https.onRequest(async (req, res) => {
  const prompt = req.body.prompt;
  if (!prompt) return res.status(400).json({ error: "No prompt provided" });

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Authorization": "Bearer sk-Your-Real-OpenAI-Key-Here",
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
