
# GPT 기반 승인 로그 요약 자동화
import json
from openai import OpenAI

log_data = [{"user": "관리자A", "action": "센서 승인", "result": "성공", "timestamp": "2025-05-17"}]
prompt = f"다음 승인 로그로 보고서 작성해줘:\n{json.dumps(log_data)}"
response = OpenAI().chat.completions.create(
    model="gpt-4",
    messages=[{"role": "user", "content": prompt}]
)
print(response.choices[0].message.content)
