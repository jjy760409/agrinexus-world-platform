
from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
from werkzeug.security import generate_password_hash, check_password_hash
import os, jwt, datetime
from functools import wraps

app = Flask(__name__)
CORS(app)

UPLOAD_FOLDER = './uploads'
os.makedirs(UPLOAD_FOLDER, exist_ok=True)
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
app.config['SECRET_KEY'] = 'supersecretkey'

USERS = {
    "admin@agrinexus.world": generate_password_hash("password123")
}

def token_required(f):
    @wraps(f)
    def decorated(*args, **kwargs):
        token = request.headers.get('Authorization')
        if not token:
            return jsonify({'message': '토큰이 없습니다!'}), 403
        try:
            jwt.decode(token.split(" ")[1], app.config['SECRET_KEY'], algorithms=["HS256"])
        except:
            return jsonify({'message': '토큰이 유효하지 않습니다!'}), 403
        return f(*args, **kwargs)
    return decorated

@app.route('/login', methods=['POST'])
def login():
    data = request.json
    email = data.get("email")
    password = data.get("password")
    if email in USERS and check_password_hash(USERS[email], password):
        token = jwt.encode({
            'user': email,
            'exp': datetime.datetime.utcnow() + datetime.timedelta(hours=12)
        }, app.config['SECRET_KEY'], algorithm="HS256")
        return jsonify({"token": token})
    return jsonify({"message": "로그인 실패"}), 401

@app.route('/upload', methods=['POST'])
def upload_file():
    file = request.files['file']
    email = request.form.get("email")
    if file:
        filename = f"{datetime.datetime.now().strftime('%Y%m%d_%H%M%S')}_{file.filename}"
        filepath = os.path.join(UPLOAD_FOLDER, filename)
        file.save(filepath)
        with open("submission_log.txt", "a") as log:
            log.write(f"{datetime.datetime.now().isoformat()} | {email} | {filename}\n")
        return jsonify({"status": "success", "filename": filename})
    return jsonify({"status": "error", "message": "파일 없음"})

@app.route('/submissions', methods=['GET'])
@token_required
def list_submissions():
    entries = []
    try:
        with open("submission_log.txt", "r") as log:
            for line in log:
                date, email, filename = line.strip().split(" | ")
                entries.append({
                    "date": date,
                    "email": email,
                    "filename": filename,
                    "download_url": f"/download/{filename}"
                })
    except FileNotFoundError:
        pass
    return jsonify(entries)

@app.route('/download/<filename>', methods=['GET'])
def download_file(filename):
    return send_from_directory(app.config['UPLOAD_FOLDER'], filename, as_attachment=True)

@app.route('/stats', methods=['GET'])
@token_required
def stats():
    stats = {}
    try:
        with open("submission_log.txt", "r") as log:
            for line in log:
                date, _, filename = line.strip().split(" | ")
                day = date.split("T")[0]
                key = "contract" if "contract" in filename else "report"
                stats.setdefault(day, {"contract": 0, "report": 0})
                stats[day][key] += 1
    except FileNotFoundError:
        pass
    return jsonify(stats)

if __name__ == '__main__':
    app.run(debug=True)
