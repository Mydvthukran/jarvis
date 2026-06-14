import { metrics } from "../data/dashboardData.js";

export default function LeftPanel() {
  return (
    <section className="panel left">
      <div className="ring-card">
        <div className="ring ring-outer">
          <div className="ring ring-mid">
            <div className="ring ring-inner">
              <span className="core"></span>
            </div>
          </div>
        </div>
      </div>
      <div className="metrics">
        {metrics.map((metric) => (
          <div className="metric" key={metric.label}>
            <h3>{metric.label}</h3>
            <p>{metric.value}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
