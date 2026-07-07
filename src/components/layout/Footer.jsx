import { Link } from 'react-router-dom';
import { COMPANY_NAME, PORTAL_URL, TAGLINE } from '@/constants/links';

const FOOTER_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/features', label: 'Features' },
  { to: '/contact', label: 'Contact' },
  { href: PORTAL_URL, label: 'Portal', external: true },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="section-container">
        <div className="row g-4 g-lg-5">
          <div className="col-lg-5">
            <p className="footer-brand mb-2">{COMPANY_NAME}</p>
            <p className="mb-0 small">{TAGLINE}</p>
          </div>

          <div className="col-lg-4">
            <p className="fw-semibold text-white mb-3">Quick Links</p>
            <ul className="list-unstyled mb-0 d-flex flex-column gap-2">
              {FOOTER_LINKS.map((link) => (
                <li key={link.label}>
                  {link.external ? (
                    <a href={link.href} target="_blank" rel="noopener noreferrer">
                      {link.label}
                    </a>
                  ) : (
                    <Link to={link.to}>{link.label}</Link>
                  )}
                </li>
              ))}
              <li>
                <a href="#">Privacy Policy</a>
              </li>
            </ul>
          </div>

          <div className="col-lg-3">
            <p className="fw-semibold text-white mb-3">Product</p>
            <p className="small mb-0">
              Enterprise dispatch platform for modern logistics teams.
            </p>
          </div>
        </div>

        <hr className="border-secondary border-opacity-25 my-4" />

        <p className="small mb-0 text-center text-md-start">
          &copy; {year} {COMPANY_NAME}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
