
const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();

exports.processReport = functions.https.onRequest((req, res) => {
  const { email, summary, time } = req.body;
  const ref = admin.database().ref("reports").push();
  ref.set({ email, summary, time });
  res.json({ status: "저장 완료", id: ref.key });
});
