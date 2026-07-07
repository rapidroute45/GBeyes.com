export function HeroIllustration() {
  return (
    <div className="mock-window hero-float position-relative">
      <div className="mock-titlebar">
        <span className="mock-dot mock-dot--red" />
        <span className="mock-dot mock-dot--yellow" />
        <span className="mock-dot mock-dot--green" />
        <span className="mock-titlebar-label">GB Eyes Dashboard</span>
      </div>
      <div className="mock-body">
        <div className="row g-2 mb-2">
          <div className="col-4">
            <div className="mock-stat">
              <div className="mock-stat-value">128</div>
              <div className="mock-stat-label">Routes</div>
            </div>
          </div>
          <div className="col-4">
            <div className="mock-stat">
              <div className="mock-stat-value">42</div>
              <div className="mock-stat-label">Drivers</div>
            </div>
          </div>
          <div className="col-4">
            <div className="mock-stat">
              <div className="mock-stat-value">96%</div>
              <div className="mock-stat-label">On-time</div>
            </div>
          </div>
        </div>
        <div className="mock-chart mb-2">
          <div className="mock-bar h-50" />
          <div className="mock-bar h-75" />
          <div className="mock-bar h-50" />
          <div className="mock-bar h-100" />
          <div className="mock-bar h-50" />
          <div className="mock-bar h-75" />
        </div>
        <div className="d-flex flex-wrap gap-2">
          <span className="badge bg-success-subtle text-success">Active</span>
          <span className="badge bg-warning-subtle text-warning">Pending</span>
          <span className="badge bg-primary-subtle text-primary">In progress</span>
        </div>
      </div>
    </div>
  );
}
