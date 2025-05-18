
// Slack 메시지 전송 샘플 (PDF 링크 포함)
const axios = require('axios');
const webhookUrl = "https://hooks.slack.com/services/your/webhook/url";
axios.post(webhookUrl, {
  blocks: [
    {
      type: "section",
      text: { type: "mrkdwn", text: "*📄 PDF 보고서 전송 완료!*" }
    },
    {
      type: "image",
      image_url: "https://yourdomain.com/preview.png",
      alt_text: "PDF 미리보기"
    },
    {
      type: "actions",
      elements: [{ type: "button", text: { type: "plain_text", text: "PDF 열기" }, url: "https://yourdomain.com/report.pdf" }]
    }
  ]
});
