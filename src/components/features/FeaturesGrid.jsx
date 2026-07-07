import { FEATURES } from '@/constants/features';
import { FeatureCard } from '@/components/ui/FeatureCard';
import { SectionHeader } from '@/components/ui/SectionHeader';

const DELAYS = ['', 'reveal-delay-1', 'reveal-delay-2', 'reveal-delay-1', 'reveal-delay-2', 'reveal-delay-3'];

export function FeaturesGrid() {
  return (
    <div className="row g-4">
      {FEATURES.map((feature, index) => (
        <div className="col-md-6 col-lg-4" key={feature.title}>
          <FeatureCard {...feature} delayClass={DELAYS[index]} />
        </div>
      ))}
    </div>
  );
}

export function FeaturesPageHero() {
  return (
    <section className="page-hero">
      <div className="section-container text-center">
        <SectionHeader
          eyebrow="Platform Features"
          title="Powerful tools for modern dispatch"
          subtitle="Everything your team needs to plan routes, track drivers, and deliver with confidence."
          centered
        />
      </div>
    </section>
  );
}
