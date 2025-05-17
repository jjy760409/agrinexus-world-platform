
const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();

exports.processFeedback = functions.https.onRequest(async (req, res) => {
  const { crop, feedback } = req.body;
  const ref = admin.database().ref("feedbacks").push();
  await ref.set({ crop, feedback, time: req.body.time });

  const summaryRef = admin.database().ref("feedbackSummary/" + crop);
  const current = (await summaryRef.once("value")).val() || 0;
  if (feedback === "정확") {
    await summaryRef.set(current + 1);
  } else {
    await summaryRef.set(current - 1);
  }

  res.json({ status: "피드백 저장 및 학습 반영 완료" });
});
