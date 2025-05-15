
from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
import os
import smtplib
from email.message import EmailMessage
from datetime import datetime

app = Flask(__name__)
CORS(app)

UPLOAD_FOLDER = './uploads'
os.makedirs(UPLOAD_FOLDER, exist_ok=True)

# 🔐 로그인용 테스트 사용자 (단순 예시용)
USERS = {
    "admin@agrinexus.world": "password123"
}

# 로그인 기능
@app.route('/login', methods=['POST'])
def login():
    data = request.json
    email = data.get("email")
    password = data.get("password")
    if USERS.get(email) == password:
        return jsonify({"status": "success", "message": "로그인 성공"})
    return jsonify({"status": "error", "message": "잘못된 로그인 정보"})

# PDF 업로드 + 기록 저장
@app.route('/upload', methods=['POST'])
def upload_file():
    file = request.files['file']
    email = request.form.get("email")
    if file:
        filename = f"{datetime.now().strftime('%Y%m%d_%H%M%S')}_{file.filename}"
        filepath = os.path.join(UPLOAD_FOLDER, filename)
        file.save(filepath)
        with open("submission_log.txt", "a") as log:
            log.write(f"{filename} | {email}\n")
        return jsonify({"status": "success", "message": "파일 업로드 완료"})
    return jsonify({"status": "error", "message": "파일 없음"})

# 제출 목록 표시
@app.route('/submissions', methods=['GET'])
def list_files():
    try:
        with open("submission_log.txt", "r") as log:
            entries = log.readlines()
        return jsonify({"entries": entries})
    except FileNotFoundError:
        return jsonify({"entries": []})

# 이메일 전송 기능 (테스트용)
@app.route('/send-email', methods=['POST'])
def send_email():
    data = request.json
    recipient = data.get("to")
    subject = data.get("subject")
    content = data.get("body")

    # SMTP 설정 필요: 아래는 Gmail 예시
    try:
        msg = EmailMessage()
        msg.set_content(content)
        msg["Subject"] = subject
        msg["From"] = "your_email@gmail.com"
        msg["To"] = recipient

        with smtplib.SMTP_SSL("smtp.gmail.com", 465) as smtp:
            smtp.login("your_email@gmail.com", "your_app_password")
            smtp.send_message(msg)

        return jsonify({"status": "success", "message": "이메일 전송 완료"})
    except Exception as e:
        return jsonify({"status": "error", "message": str(e)})

if __name__ == '__main__':
    app.run(debug=True)
