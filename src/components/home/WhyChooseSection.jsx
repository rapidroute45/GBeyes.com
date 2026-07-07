import { SectionHeader } from '@/components/ui/SectionHeader';
import { WhyChooseCard } from '@/components/ui/WhyChooseCard';

const ITEMS = [
  {
    icon: 'bi-shield-lock-fill',
    title: 'Enterprise Security',
    description: 'Role-based access, encrypted sessions, and audit-ready infrastructure for your operations.',
  },
  {
    icon: 'bi-lightning-charge-fill',
    title: 'Fast Performance',
    description: 'Optimized for high-volume dispatch with real-time updates and sub-second response times.',
  },
  {
    icon: 'bi-cloud-fill',
    title: 'Cloud Based',
    description: 'Access your dispatch console from anywhere with a secure, always-available cloud platform.',
  },
  {
    icon: 'bi-clock-fill',
    title: '24/7 Availability',
    description: 'Reliable uptime for round-the-clock logistics with monitoring and proactive support.',
  },
];

const DELAYS = ['', 'reveal-delay-1', 'reveal-delay-2', 'reveal-delay-3'];

export function WhyChooseSection() {
  return (
    <section className="section-py bg-surface">
      <div className="section-container">
        <SectionHeader
          eyebrow="Why GB Eyes"
          title="Why choose us"
          subtitle="Built for enterprise logistics teams who need reliability, speed, and clarity."
          centered
        />
        <div className="row g-4">
          {ITEMS.map((item, index) => (
            <div className="col-sm-6 col-lg-3" key={item.title}>
              <WhyChooseCard {...item} delayClass={DELAYS[index]} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
