
import React from 'react';

export default function Dashboard() {
  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">📊 AgriNexus 통합 대시보드</h1>
      <div className="grid grid-cols-2 gap-4">
        <div className="border p-4 rounded shadow">총 승인 요청: 42건</div>
        <div className="border p-4 rounded shadow">성공률: 88%</div>
        <div className="border p-4 rounded shadow">Slack 응답 성공: 100%</div>
        <div className="border p-4 rounded shadow">보고서 자동 발송: 37건</div>
      </div>
    </div>
  );
}
