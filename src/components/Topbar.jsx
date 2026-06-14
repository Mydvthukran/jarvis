import { useEffect, useState } from "react";

export default function Topbar() {
  const [time, setTime] = useState(() => new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="panel topbar">
      <div className="brand">
        <span className="dot"></span>
        <h1>JARVIS</h1>
      </div>
      <div className="status-wrap">
        <div className="pill">System: Online</div>
        <div className="pill" id="clock">
          {time.toLocaleTimeString()}
        </div>
      </div>
    </section>
  );
}
