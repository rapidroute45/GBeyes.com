import dashboardScreenshot from '@/assets/screenshots/dashboard.png';
import { COMPANY_NAME } from '@/constants/links';

export function HeroIllustration() {
  return (
    <div className="mock-window hero-float position-relative">
      <div className="mock-titlebar">
        <span className="mock-dot mock-dot--red" />
        <span className="mock-dot mock-dot--yellow" />
        <span className="mock-dot mock-dot--green" />
        <span className="mock-titlebar-label">{COMPANY_NAME} Dashboard</span>
      </div>
      <div className="mock-screenshot">
        <img
          src={dashboardScreenshot}
          alt={`${COMPANY_NAME} operations dashboard`}
          className="mock-screenshot-img"
          loading="eager"
        />
      </div>
    </div>
  );
}
