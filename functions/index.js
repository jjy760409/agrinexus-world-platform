
const functions = require('firebase-functions');
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');
const axios = require('axios');
admin.initializeApp();

const gmailEmail = functions.config().gmail.email;
const gmailPassword = functions.config().gmail.password;
const slackWebhook = functions.config().slack.webhook;
const twilioSid = functions.config().twilio.sid;
const twilioAuth = functions.config().twilio.token;
const twilioFrom = functions.config().twilio.from;
const twilioTo = functions.config().twilio.to;

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: { user: gmailEmail, pass: gmailPassword }
});

exports.sendContractNotification = functions.database
  .ref('/contracts/{contractId}')
  .onCreate(async (snapshot, context) => {
    const data = snapshot.val();
    const email = data.email;
    const contractId = context.params.contractId;
    const content = data.content;

    const mailOptions = {
      from: gmailEmail,
      to: email,
      subject: `AgriNexus 계약서 발송: ${contractId}`,
      text: `계약서가 성공적으로 생성되었습니다. 계약번호: ${contractId}`
    };

    await transporter.sendMail(mailOptions);

    // Slack 알림
    await axios.post(slackWebhook, {
      text: `📢 새 계약서 생성됨: ${contractId} (수신자: ${email})`
    });

    // Twilio SMS 발송
    await axios.post(`https://api.twilio.com/2010-04-01/Accounts/${twilioSid}/Messages.json`, new URLSearchParams({
      From: twilioFrom,
      To: twilioTo,
      Body: `AgriNexus 계약서 ${contractId} 생성 완료`
    }), {
      auth: { username: twilioSid, password: twilioAuth },
      headers: { "Content-Type": "application/x-www-form-urlencoded" }
    });
});
