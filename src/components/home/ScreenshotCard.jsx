import { useReveal } from '@/hooks/useReveal';

export function ScreenshotCard({ title, Mock, delayClass = '' }) {
  const { ref, className } = useReveal();

  return (
    <div className={`col-lg-4 ${className} ${delayClass}`} ref={ref}>
      <div className="gb-card screenshot-card card-hover h-100">
        <Mock />
        <div className="screenshot-label">{title}</div>
      </div>
    </div>
  );
}
