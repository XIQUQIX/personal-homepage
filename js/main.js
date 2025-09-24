// main.js
export function showTime() {
  const element = document.querySelector("#time");
  if (!element) return;

  setInterval(() => {
    const now = new Date();
    element.textContent = now.toLocaleTimeString();
  }, 1000);
}

// initialize time display
showTime();
