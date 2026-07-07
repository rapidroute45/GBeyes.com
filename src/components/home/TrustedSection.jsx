import { SectionHeader } from '@/components/ui/SectionHeader';
import { TrustCard } from '@/components/ui/TrustCard';

const TRUST_ITEMS = [
  'Route Management',
  'Driver Tracking',
  'Warehouse Management',
  'Team Management',
  'Live Notifications',
  'Analytics Dashboard',
];

const DELAYS = ['', 'reveal-delay-1', 'reveal-delay-2', 'reveal-delay-1', 'reveal-delay-2', 'reveal-delay-3'];

export function TrustedSection() {
  return (
    <section className="section-py bg-surface">
      <div className="section-container">
        <SectionHeader
          eyebrow="Capabilities"
          title="Everything you need to run dispatch"
          subtitle="A complete platform trusted by logistics teams to coordinate field operations at scale."
          centered
        />
        <div className="row g-3 g-md-4">
          {TRUST_ITEMS.map((label, index) => (
            <div className="col-6 col-md-4" key={label}>
              <TrustCard label={label} delayClass={DELAYS[index]} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
