import { NavLink } from 'react-router-dom';
import { COMPANY_NAME, PORTAL_URL } from '@/constants/links';
import { GradientButton } from '@/components/ui/GradientButton';
import logo from '@/assets/logo.png';

const NAV_ITEMS = [
  { to: '/', label: 'Home', end: true },
  { to: '/features', label: 'Features' },
];

export function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg site-navbar sticky-top">
      <div className="section-container d-flex flex-wrap align-items-center justify-content-between w-100">
        <NavLink className="navbar-brand d-flex align-items-center gap-2" to="/" aria-label={COMPANY_NAME}>
          <img src={logo} alt="" className="navbar-brand-logo" width={40} height={40} />
          <span className="visually-hidden">{COMPANY_NAME}</span>
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
              className="text-center"
            >
              Login
            </GradientButton>
          </div>
        </div>
      </div>
    </nav>
  );
}
