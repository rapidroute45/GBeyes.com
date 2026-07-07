import { useReveal } from '@/hooks/useReveal';

export function ScreenshotCard({ title, src, alt, delayClass = '' }) {
  const { ref, className } = useReveal();

  return (
    <div className={`screenshot-card-col ${className} ${delayClass}`} ref={ref}>
      <div className="gb-card screenshot-card card-hover">
        <div className="screenshot-image-wrap">
          <img src={src} alt={alt} className="screenshot-image" loading="lazy" />
        </div>
        <div className="screenshot-label">{title}</div>
      </div>
    </div>
  );
}
