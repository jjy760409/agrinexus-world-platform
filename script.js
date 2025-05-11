
window.addEventListener('DOMContentLoaded', () => {
  const hour = new Date().getHours();
  const root = document.documentElement;

  if (hour >= 19 || hour < 6) {
    root.setAttribute('data-theme', 'night');
    document.getElementById('greeting').textContent = "🌙 AgriNexus World - 야간 모드";
  } else {
    document.getElementById('greeting').textContent = "🌤 AgriNexus World - 주간 모드";
  }
});
