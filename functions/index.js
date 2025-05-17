
const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();

let lastRecommended = "";

exports.sendCropChangeAlert = functions.database
  .ref("/feedbackSummary")
  .onWrite(async (change, context) => {
    const data = change.after.val();
    const sorted = Object.entries(data).sort((a, b) => b[1] - a[1]);
    const currentBest = sorted[0][0];

    if (currentBest !== lastRecommended) {
      lastRecommended = currentBest;

      const subscribersSnap = await admin.database().ref("subscribers").once("value");
      const emails = Object.values(subscribersSnap.val() || {}).map(d => d.email);

      for (let email of emails) {
        console.log(`📩 알림 발송 대상: ${email} → 추천 작물 변경: ${currentBest}`);
        // 실제 이메일 발송 로직 Mailgun 또는 SendGrid 등 연결 필요
      }
    }

    return null;
});
