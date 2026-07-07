import { useReveal } from '@/hooks/useReveal';

export function WhyChooseCard({ icon, title, description, delayClass = '' }) {
  const { ref, className } = useReveal();

  return (
    <div ref={ref} className={`${className} ${delayClass}`}>
      <div className="gb-card why-card card-hover h-100">
        <div className="why-icon">
          <i className={`bi ${icon}`} aria-hidden="true" />
        </div>
        <h3 className="h6 fw-bold mb-2 text-navy">
          {title}
        </h3>
        <p className="text-muted small mb-0 lh-lg">{description}</p>
      </div>
    </div>
  );
}
