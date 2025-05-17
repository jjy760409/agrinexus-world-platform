
const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();

exports.saveContract = functions.https.onRequest((req, res) => {
  const content = req.body.content;
  const ref = admin.database().ref("contracts").push();
  ref.set({
    content: content,
    timestamp: new Date().toISOString()
  });
  res.json({ status: "OK", id: ref.key });
});
