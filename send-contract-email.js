
// Node.js + Express + Nodemailer (send-contract-email.js)

const express = require('express');
const multer = require('multer');
const nodemailer = require('nodemailer');
const cors = require('cors');
const app = express();
const upload = multer();

app.use(cors());
app.use(express.json());

app.post('/send-contract-email', upload.single('pdf'), async (req, res) => {
  const email = req.body.email;
  const contractId = req.body.contractId;
  const file = req.file;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'your@gmail.com',
      pass: 'your_gmail_app_password'
    }
  });

  const mailOptions = {
    from: 'your@gmail.com',
    to: email,
    subject: `AgriNexus 계약서 [${contractId}]`,
    text: '첨부된 계약서를 확인해주세요.',
    attachments: [{
      filename: contractId + ".pdf",
      content: file.buffer
    }]
  };

  try {
    await transporter.sendMail(mailOptions);
    res.json({ status: '이메일 전송 성공' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ status: '이메일 전송 실패', error: err });
  }
});

app.listen(3000, () => console.log("✅ 서버 실행됨: http://localhost:3000"));
