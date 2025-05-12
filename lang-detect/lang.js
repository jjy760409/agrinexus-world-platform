
const LANG = {
  ko: { title: "환영합니다", message: "AgriNexus에 오신 것을 환영합니다!" },
  en: { title: "Welcome", message: "Welcome to AgriNexus!" },
  zh: { title: "欢迎", message: "欢迎使用 AgriNexus!" },
  ja: { title: "ようこそ", message: "AgriNexusへようこそ！" }
};

window.onload = () => {
  const lang = (navigator.language || 'en').substring(0, 2);
  const set = LANG[lang] || LANG.en;
  document.getElementById("lang-title").innerText = set.title;
  document.getElementById("lang-message").innerText = set.message;
};
