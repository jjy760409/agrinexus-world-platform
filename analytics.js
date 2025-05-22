
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll("a").forEach(el => {
    el.addEventListener("click", () => {
      const clicks = JSON.parse(localStorage.getItem("click_logs") || "[]");
      clicks.push({ href: el.href, time: new Date().toISOString() });
      localStorage.setItem("click_logs", JSON.stringify(clicks));
    });
  });
});
