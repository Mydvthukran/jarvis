const clock = document.getElementById("clock");
const consoleEl = document.getElementById("console");
const form = document.getElementById("commandForm");
const input = document.getElementById("commandInput");
const MAX_COMMAND_LENGTH = 120;

function tick() {
  const now = new Date();
  clock.textContent = now.toLocaleTimeString();
}

function appendLine(text) {
  const p = document.createElement("p");
  const prompt = document.createElement("span");
  prompt.className = "prompt";
  prompt.textContent = "jarvis@local:";
  p.appendChild(prompt);
  p.appendChild(document.createTextNode(` ${text}`));
  consoleEl.appendChild(p);
  consoleEl.scrollTop = consoleEl.scrollHeight;
}

function sanitizeCommand(value) {
  return value.replace(/[^\x20-\x7E]/g, "").slice(0, MAX_COMMAND_LENGTH);
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const cmd = sanitizeCommand(input.value.trim());
  if (!cmd) return;
  appendLine(`Executing "${cmd}"`);
  setTimeout(() => appendLine(`Done: ${cmd}`), 450);
  input.value = "";
});

tick();
setInterval(tick, 1000);
