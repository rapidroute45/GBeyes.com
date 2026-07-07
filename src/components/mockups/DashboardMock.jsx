const STATS = [
  { value: '248', label: 'Total Routes' },
  { value: '64', label: 'Active Drivers' },
  { value: '1,204', label: 'Deliveries' },
  { value: '98.2%', label: 'POD Rate' },
];

const DELIVERIES = [
  { id: 'DLV-8821', customer: 'Metro Retail', status: 'Delivered', badge: 'success' },
  { id: 'DLV-8822', customer: 'City Pharmacy', status: 'In Transit', badge: 'primary' },
  { id: 'DLV-8823', customer: 'Fresh Foods Co', status: 'Pending', badge: 'warning' },
];

export function DashboardMock() {
  return (
    <div className="mock-window">
      <div className="mock-titlebar">
        <span className="mock-dot mock-dot--red" />
        <span className="mock-dot mock-dot--yellow" />
        <span className="mock-dot mock-dot--green" />
        <span className="mock-titlebar-label">Dashboard</span>
      </div>
      <div className="mock-body">
        <div className="row g-2 mb-3">
          {STATS.map((stat) => (
            <div className="col-6" key={stat.label}>
              <div className="mock-stat">
                <div className="mock-stat-value">{stat.value}</div>
                <div className="mock-stat-label">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="row g-2 mb-3">
          <div className="col-6">
            <p className="small fw-semibold text-navy mb-1">Weekly Volume</p>
            <div className="mock-chart">
              <div className="mock-bar h-50" />
              <div className="mock-bar h-75" />
              <div className="mock-bar h-100" />
              <div className="mock-bar h-50" />
              <div className="mock-bar h-75" />
            </div>
          </div>
          <div className="col-6">
            <p className="small fw-semibold text-navy mb-1">On-time %</p>
            <div className="mock-chart">
              <div className="mock-bar h-75" />
              <div className="mock-bar h-100" />
              <div className="mock-bar h-75" />
              <div className="mock-bar h-100" />
              <div className="mock-bar h-75" />
            </div>
          </div>
        </div>

        <p className="small fw-semibold text-navy mb-2">Latest Deliveries</p>
        <div className="table-responsive">
          <table className="table table-sm table-striped mb-0 small">
            <thead>
              <tr>
                <th>ID</th>
                <th>Customer</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {DELIVERIES.map((row) => (
                <tr key={row.id}>
                  <td>{row.id}</td>
                  <td>{row.customer}</td>
                  <td>
                    <span className={`badge bg-${row.badge}-subtle text-${row.badge}`}>
                      {row.status}
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
