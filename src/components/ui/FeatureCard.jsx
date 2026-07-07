import { useReveal } from '@/hooks/useReveal';

export function FeatureCard({ icon, title, description, delayClass = '' }) {
  const { ref, className } = useReveal();

  return (
    <div ref={ref} className={`${className} ${delayClass}`}>
      <div className="gb-card gb-card-feature card-hover h-100">
        <div className="feature-icon">
          <i className={`bi ${icon}`} aria-hidden="true" />
        </div>
        <h3 className="h5 fw-bold mb-2 text-navy">
          {title}
        </h3>
        <p className="text-muted mb-0 small lh-lg">{description}</p>
      </div>
    </div>
  );
}
