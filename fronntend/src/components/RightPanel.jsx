import { modules } from "../data/dashboardData.js";

export default function RightPanel() {
  return (
    <section className="panel right">
      <h2>Modules</h2>
      <ul className="module-list">
        {modules.map((module) => (
          <li key={module.name}>
            {module.name} <span>{module.status}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
