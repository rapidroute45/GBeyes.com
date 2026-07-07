import { useReveal } from '@/hooks/useReveal';

export function SectionHeader({ eyebrow, title, subtitle, centered = false, className = '' }) {
  const { ref, className: revealClass } = useReveal();

  return (
    <div
      ref={ref}
      className={`${revealClass} mb-5 ${centered ? 'text-center mx-auto' : ''} ${className}`}
    >
      {eyebrow ? <span className="section-eyebrow">{eyebrow}</span> : null}
      {title ? <h2 className="section-title mb-3">{title}</h2> : null}
      {subtitle ? (
        <p className={`section-subtitle mb-0 ${centered ? 'mx-auto' : ''}`}>{subtitle}</p>
      ) : null}
    </div>
  );
}
