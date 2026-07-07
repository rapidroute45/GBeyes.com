const DRIVERS = [
  { name: 'Ahmed K.', status: 'Live', eta: '12 min', badge: 'success' },
  { name: 'Sara M.', status: 'En route', eta: '24 min', badge: 'primary' },
  { name: 'Omar R.', status: 'At stop', eta: '5 min', badge: 'warning' },
];

export function TrackingMock() {
  return (
    <div className="mock-window">
      <div className="mock-titlebar">
        <span className="mock-dot mock-dot--red" />
        <span className="mock-dot mock-dot--yellow" />
        <span className="mock-dot mock-dot--green" />
        <span className="mock-titlebar-label">Driver Tracking</span>
      </div>
      <div className="mock-body">
        <div className="row g-2">
          <div className="col-7">
            <div className="mock-map">
              <span className="mock-map-pin top-50 start-25" />
              <span className="mock-map-pin top-25 start-50" />
              <span className="mock-map-pin top-75 start-75" />
            </div>
          </div>
          <div className="col-5">
            <p className="small fw-semibold text-navy mb-2">Live Drivers</p>
            {DRIVERS.map((driver) => (
              <div className="gb-card p-2 mb-2" key={driver.name}>
                <div className="d-flex justify-content-between align-items-start">
                  <span className="small fw-semibold">{driver.name}</span>
                  <span className={`badge bg-${driver.badge}-subtle text-${driver.badge}`}>
                    {driver.status}
                  </span>
                </div>
                <span className="text-muted small">ETA: {driver.eta}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
