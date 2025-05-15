
# 🌿 AgriNexus World - 글로벌 스마트 농업 자동화 플랫폼

![AgriNexus Banner](https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Agriculture_in_South_Korea.jpg/800px-Agriculture_in_South_Korea.jpg)

[![Firebase](https://img.shields.io/badge/Firebase-enabled-orange)](https://firebase.google.com/)
[![OpenAI](https://img.shields.io/badge/OpenAI-integrated-green)](https://openai.com/)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](#license)

AgriNexus World는 스마트 계약, AI 보고서 자동 생성, 종자 추천,  
글로벌 정책 기회 탐색, 실시간 데이터 수집, 사용자 로그 저장 등을 하나의 플랫폼에 통합한  
**스마트 농업 글로벌 자동화 시스템**입니다.

---

## ✅ 주요 기능 요약

| 기능 | 설명 |
|------|------|
| 📄 계약서 생성기 | 사용자 입력 기반 PDF 생성  
| 📑 보고서 생성기 | 요약 작성 → PDF 리포트 출력  
| 🤖 GPT 생성기 | OpenAI 프롬프트 입력 → 응답 출력  
| 🌾 종자 추천기 | 국가/계절 기반 AI 종자 추천  
| 🌱 스마트팜 설계기 | 면적/기후 입력 → 설계안 출력  
| 📊 실시간 차트 | Firebase 로그 기반 Chart.js 시각화  
| 🔔 사용자 로그 저장 | Firebase DB 연동  
| 🛠 관리자 대시보드 | 사용자 기록 실시간 뷰  
| 🌍 글로벌 정책 포털 | 정책 자동 수집 + 리포트 생성기 포함

---

## 🔗 API 연동 구성

### Firebase Realtime Database

- 사용자 로그 저장 → logs/
- 관리자는 실시간 확인 가능

### OpenAI GPT-3.5/4 API

- `ai.html`에 프롬프트 입력
- API 키 기반 응답 출력

### 글로벌 정책 자동 수집 (향후 연결)

- `global_portal.html`에 구조 반영
- Open data source 예시:
  - [UN SDG](https://unstats.un.org/sdgs/)
  - [FAO](https://www.fao.org/statistics/en/)
  - [OECD Data](https://data.oecd.org)

---

## 🧭 시작 방법

1. Firebase + Web App 설정
2. config 복사 → `admin.html`, `firebase.html`, `firebase_log_input.html`에 삽입
3. index.html 열면 전체 포털 접속 가능

---

## 📬 문의 및 기여

- 이메일: contact@agrinexus.world
- GitHub: [AgriNexusWorld Platform](https://github.com/your-repo-link)
