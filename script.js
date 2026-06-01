const clock = document.getElementById("clock");
const consoleEl = document.getElementById("console");
const form = document.getElementById("commandForm");
const input = document.getElementById("commandInput");

function tick() {
  const now = new Date();
  clock.textContent = now.toLocaleTimeString();
}

function appendLine(text) {
  const p = document.createElement("p");
  p.innerHTML = `<span class="prompt">jarvis@local:</span> ${text}`;
  consoleEl.appendChild(p);
  consoleEl.scrollTop = consoleEl.scrollHeight;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const cmd = input.value.trim();
  if (!cmd) return;
  appendLine(`Executing "${cmd}"`);
  setTimeout(() => appendLine(`Done: ${cmd}`), 450);
  input.value = "";
});

tick();
setInterval(tick, 1000);
