import dashboardScreenshot from '@/assets/screenshots/dashboard.png';
import routesScreenshot from '@/assets/screenshots/routes.png';
import trackingScreenshot from '@/assets/screenshots/tracking.png';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { ScreenshotCard } from '@/components/home/ScreenshotCard';

const SCREENSHOTS = [
  { title: 'Dashboard', src: dashboardScreenshot, alt: 'GBeyes dispatch manager dashboard', delayClass: '' },
  { title: 'Route Management', src: routesScreenshot, alt: 'GBeyes route management screen', delayClass: 'reveal-delay-1' },
  { title: 'Driver Tracking', src: trackingScreenshot, alt: 'GBeyes live driver tracking map', delayClass: 'reveal-delay-2' },
];

export function ScreenshotsSection() {
  return (
    <section className="section-py screenshots-section">
      <div className="section-container section-container--screenshots">
        <SectionHeader
          eyebrow="Product Preview"
          title="See the platform in action"
          subtitle="Real dispatch screens from the GBeyes operations portal — built for managers and operations teams."
          centered
        />
        <div className="screenshots-grid">
          {SCREENSHOTS.map(({ title, src, alt, delayClass }) => (
            <ScreenshotCard key={title} title={title} src={src} alt={alt} delayClass={delayClass} />
          ))}
        </div>
      </div>
    </section>
  );
}
