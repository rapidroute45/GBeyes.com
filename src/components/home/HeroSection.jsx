import { PORTAL_URL } from '@/constants/links';
import { GradientButton } from '@/components/ui/GradientButton';
import { HeroIllustration } from '@/components/mockups/HeroIllustration';
import { useReveal } from '@/hooks/useReveal';

export function HeroSection() {
  const { ref, className } = useReveal();

  return (
    <section className="section-py-lg position-relative overflow-hidden">
      <div className="hero-glow gradient-glow position-absolute top-0 end-0" />
      <div className="section-container">
        <div className="row align-items-center g-5">
          <div ref={ref} className={`col-lg-6 ${className}`}>
            <span className="section-eyebrow">Enterprise SaaS Platform</span>
            <h1 className="hero-title mb-4">
              Enterprise Dispatch{' '}
              <span className="text-gradient">Management System</span>
            </h1>
            <p className="hero-subtitle mb-4">
              Manage Drivers, Routes, Deliveries, Warehouses and Teams from one
              intelligent platform.
            </p>
            <div className="d-flex flex-wrap gap-3">
              <GradientButton href={PORTAL_URL} external>
                Login Portal
              </GradientButton>
            </div>
          </div>
          <div className="col-lg-6">
            <HeroIllustration />
          </div>
        </div>
      </div>
    </section>
  );
}
