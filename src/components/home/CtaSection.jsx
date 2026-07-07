import { PORTAL_URL } from '@/constants/links';
import { useReveal } from '@/hooks/useReveal';

export function CtaSection() {
  const { ref, className } = useReveal();

  return (
    <section className="section-py">
      <div className="section-container">
        <div ref={ref} className={`cta-band ${className}`}>
          <h2 className="cta-title">Ready to transform your dispatch operations?</h2>
          <p className="cta-sub">
            Join leading logistics teams using GB Eyes to manage routes, drivers, and deliveries
            from one intelligent platform.
          </p>
          <div className="d-flex flex-wrap justify-content-center gap-3">
            <a
              href={PORTAL_URL}
              className="btn-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              Login Portal
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
