
# 🌿 AgriNexus World - 통합 스마트 농업 플랫폼

AgriNexus World는 계약 생성, 보고서 자동화, 스마트팜 설계, 종자 추천, OpenAI 응답 생성,
Firebase 기반 실시간 로그 저장 및 관리자 페이지를 갖춘 **글로벌 농업 자동화 플랫폼**입니다.

## ✅ 주요 기능 구성

| 기능 | 설명 |
|------|------|
| `contract.html` | 계약자명, 기간, 내용 입력 → 계약서 PDF 생성  
| `report.html` | 보고서 제목/작성자/내용 → PDF 저장  
| `ai.html` | 프롬프트 입력 → OpenAI GPT 응답 출력  
| `smartfarm.html` | 면적/작물/자동화 수준 입력 → 설계안 생성  
| `seeds.html` | 국가 + 계절 → 종자 추천 결과 표시  
| `chart.html` | 쌀 가격 시세 Chart.js 기반 실시간 시각화  
| `firebase.html` | 사용자 입력 Firebase에 저장  
| `firebase_log_input.html` | 사용자 메시지 저장용 입력창  
| `admin.html` | Firebase 로그 실시간 관리자 뷰어  
| `index.html` | 전체 메뉴 포털 + 실시간 로그 차트 자동화 포함

---

## 🔧 Firebase 설정 방법

1. Firebase 콘솔 → 프로젝트 생성 + Web 앱 등록  
2. `firebaseConfig` 정보 복사:
```js
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  ...
};
```
3. 아래 3개 파일에 붙여넣기:
- `firebase_log_input.html`
- `firebase.html`
- `admin.html`

---

## 🚀 배포 방법

1. GitHub Pages 업로드  
2. Netlify 드래그&드롭 배포  
3. 커스텀 도메인 연결 가능 (`agrinexus.world` 등)

---

## 📬 문의

프로젝트 문의: contact@agrinexus.world  
라이선스: 개인 상업용 사용 가능 / 배포시 출처 표기 권장
