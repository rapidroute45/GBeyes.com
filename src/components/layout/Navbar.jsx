import { NavLink } from 'react-router-dom';
import { COMPANY_NAME, PORTAL_URL } from '@/constants/links';
import { GradientButton } from '@/components/ui/GradientButton';

const NAV_ITEMS = [
  { to: '/', label: 'Home', end: true },
  { to: '/features', label: 'Features' },
  { to: '/contact', label: 'Contact' },
];

export function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg site-navbar sticky-top">
      <div className="section-container d-flex flex-wrap align-items-center justify-content-between w-100">
        <NavLink className="navbar-brand" to="/">
          {COMPANY_NAME}
        </NavLink>

        <button
          className="navbar-toggler border-0 shadow-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNav"
          aria-controls="mainNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="bi bi-list fs-3" />
        </button>

        <div className="collapse navbar-collapse" id="mainNav">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0 gap-lg-1">
            {NAV_ITEMS.map((item) => (
              <li className="nav-item" key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.end}
                  className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="d-flex flex-column flex-lg-row gap-2 align-items-stretch align-items-lg-center">
            <GradientButton
              href={PORTAL_URL}
              external
              variant="secondary"
              className="text-center"
            >
              Login
            </GradientButton>
            <GradientButton to="/contact" className="text-center">
              Get Started
            </GradientButton>
          </div>
        </div>
      </div>
    </nav>
  );
}
