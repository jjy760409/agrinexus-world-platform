
window.addEventListener('DOMContentLoaded', () => {
  const hour = new Date().getHours();
  const root = document.documentElement;

  if (hour >= 19 || hour < 6) {
    root.setAttribute('data-theme', 'night');
    document.getElementById('greeting').textContent = "좋은 저녁입니다, AgriNexus World";
    document.getElementById('suggestion').textContent = "야간 모드가 적용되었습니다.";
  } else if (hour >= 6 && hour < 12) {
    document.getElementById('greeting').textContent = "좋은 아침입니다, AgriNexus World";
    document.getElementById('suggestion').textContent = "오늘의 스마트 농업을 시작하세요.";
  } else {
    document.getElementById('greeting').textContent = "안녕하세요, AgriNexus World";
    document.getElementById('suggestion').textContent = "지속 가능한 자동화 농업을 만나보세요.";
  }
});
