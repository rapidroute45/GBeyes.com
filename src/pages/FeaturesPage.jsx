import { FeaturesPageHero, FeaturesGrid } from '@/components/features/FeaturesGrid';

export function FeaturesPage() {
  return (
    <>
      <FeaturesPageHero />
      <section className="section-py pt-0">
        <div className="section-container">
          <FeaturesGrid />
        </div>
      </section>
    </>
  );
}
