import { SectionHeader } from '@/components/ui/SectionHeader';
import { ScreenshotCard } from '@/components/home/ScreenshotCard';
import { DashboardMock } from '@/components/mockups/DashboardMock';
import { RoutesMock } from '@/components/mockups/RoutesMock';
import { TrackingMock } from '@/components/mockups/TrackingMock';

const SCREENSHOTS = [
  { title: 'Dashboard', Mock: DashboardMock, delayClass: '' },
  { title: 'Route Management', Mock: RoutesMock, delayClass: 'reveal-delay-1' },
  { title: 'Driver Tracking', Mock: TrackingMock, delayClass: 'reveal-delay-2' },
];

export function ScreenshotsSection() {
  return (
    <section className="section-py">
      <div className="section-container">
        <SectionHeader
          eyebrow="Product Preview"
          title="See the platform in action"
          subtitle="Beautiful, data-rich interfaces designed for dispatch managers and operations teams."
          centered
        />
        <div className="row g-4">
          {SCREENSHOTS.map(({ title, Mock, delayClass }) => (
            <ScreenshotCard key={title} title={title} Mock={Mock} delayClass={delayClass} />
          ))}
        </div>
      </div>
    </section>
  );
}
