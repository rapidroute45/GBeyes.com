const ROUTES = [
  { name: 'North Loop A', driver: 'Ahmed K.', team: 'Team Alpha', status: 'Active', badge: 'success' },
  { name: 'Downtown Express', driver: 'Sara M.', team: 'Team Beta', status: 'Pending', badge: 'warning' },
  { name: 'West Side Run', driver: 'Unassigned', team: 'Team Gamma', status: 'Draft', badge: 'secondary' },
];

export function RoutesMock() {
  return (
    <div className="mock-window">
      <div className="mock-titlebar">
        <span className="mock-dot mock-dot--red" />
        <span className="mock-dot mock-dot--yellow" />
        <span className="mock-dot mock-dot--green" />
        <span className="mock-titlebar-label">Route Management</span>
      </div>
      <div className="mock-body">
        <div className="input-group input-group-sm mb-3">
          <span className="input-group-text bg-white border-end-0">
            <i className="bi bi-search text-muted" />
          </span>
          <input
            type="search"
            className="form-control border-start-0"
            placeholder="Search routes, drivers, teams…"
            readOnly
            aria-label="Search routes"
          />
        </div>

        <div className="table-responsive">
          <table className="table table-sm table-hover mb-0 small">
            <thead>
              <tr>
                <th>Route</th>
                <th>Driver</th>
                <th>Team</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {ROUTES.map((route) => (
                <tr key={route.name}>
                  <td className="fw-semibold">{route.name}</td>
                  <td>{route.driver}</td>
                  <td>{route.team}</td>
                  <td>
                    <span className={`badge bg-${route.badge}-subtle text-${route.badge}`}>
                      {route.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
