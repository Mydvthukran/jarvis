import { useEffect, useRef, useState } from "react";

const MAX_COMMAND_LENGTH = 120;

const initialLines = [
  "Awaiting command...",
  "Scanning devices...",
  "Ready.",
];

function sanitizeCommand(value) {
  return value
    .replace(/[^\x20-\x7E]/g, "")
    .replace(/[<>&"'`]/g, "")
    .slice(0, MAX_COMMAND_LENGTH);
}

export default function CenterPanel() {
  const [lines, setLines] = useState(initialLines);
  const [command, setCommand] = useState("");
  const consoleRef = useRef(null);
  const timeoutsRef = useRef([]);

  useEffect(() => {
    if (!consoleRef.current) return;
    consoleRef.current.scrollTop = consoleRef.current.scrollHeight;
  }, [lines]);

  useEffect(() => {
    return () => {
      timeoutsRef.current.forEach(clearTimeout);
      timeoutsRef.current = [];
    };
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const sanitized = sanitizeCommand(command.trim());
    if (!sanitized) return;
    setLines((prev) => [...prev, `Executing "${sanitized}"`]);
    const timeoutId = setTimeout(() => {
      setLines((prev) => [...prev, `Done: ${sanitized}`]);
    }, 450);
    timeoutsRef.current.push(timeoutId);
    setCommand("");
  };

  return (
    <section className="panel center">
      <h2>Command Console</h2>
      <div className="console" ref={consoleRef}>
        {lines.map((line, index) => (
          <p key={`${index}-${line}`}>
            <span className="prompt">jarvis@local:</span> {line}
          </p>
        ))}
      </div>
      <form className="command-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Type command..."
          autoComplete="off"
          maxLength={MAX_COMMAND_LENGTH}
          value={command}
          onChange={(event) => setCommand(event.target.value)}
        />
        <button type="submit">Run</button>
      </form>
    </section>
  );
}
