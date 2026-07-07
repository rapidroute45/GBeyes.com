import { useReveal } from '@/hooks/useReveal';

export function TrustCard({ label, delayClass = '' }) {
  const { ref, className } = useReveal();

  return (
    <div ref={ref} className={`${className} ${delayClass}`}>
      <div className="gb-card trust-card card-hover h-100">
        <i className="bi bi-check-circle-fill trust-check" aria-hidden="true" />
        <span className="trust-label">{label}</span>
      </div>
    </div>
  );
}
