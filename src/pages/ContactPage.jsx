import { SectionHeader } from '@/components/ui/SectionHeader';
import { ContactForm, ContactInfo } from '@/components/contact/ContactForm';

export function ContactPage() {
  return (
    <>
      <section className="page-hero pb-0">
        <div className="section-container">
          <SectionHeader
            eyebrow="Get in Touch"
            title="Contact us"
            subtitle="Request a demo or speak with our team about your dispatch operations."
            centered
          />
        </div>
      </section>

      <section className="section-py pt-4">
        <div className="section-container">
          <div className="row g-4 g-lg-5">
            <div className="col-lg-7">
              <ContactForm />
            </div>
            <div className="col-lg-5">
              <ContactInfo />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
