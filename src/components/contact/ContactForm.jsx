import { useState } from 'react';
import { SUPPORT_EMAIL, SUPPORT_PHONE, LOCATION } from '@/constants/links';

const INITIAL_FORM = { name: '', email: '', company: '', message: '' };

function validateForm(values) {
  const errors = {};
  if (!values.name.trim()) errors.name = 'Name is required.';
  if (!values.email.trim()) {
    errors.email = 'Email is required.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = 'Enter a valid email address.';
  }
  if (!values.company.trim()) errors.company = 'Company is required.';
  if (!values.message.trim()) errors.message = 'Message is required.';
  return errors;
}

export function ContactForm() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    const nextErrors = validateForm(form);
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }
    setSubmitted(true);
    setForm(INITIAL_FORM);
    setErrors({});
  }

  return (
    <div className="gb-card p-4 p-lg-5 contact-form">
      <h2 className="h4 fw-bold text-navy mb-4">Send us a message</h2>

      {submitted ? (
        <div className="alert alert-success" role="alert">
          Thank you! Your message has been received. We&apos;ll get back to you shortly.
        </div>
      ) : null}

      <form onSubmit={handleSubmit} noValidate>
        <div className="mb-3">
          <label htmlFor="name" className="form-label fw-semibold small">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className={`form-control ${errors.name ? 'is-invalid' : ''}`}
            value={form.name}
            onChange={handleChange}
            placeholder="Your name"
          />
          {errors.name ? <div className="invalid-feedback">{errors.name}</div> : null}
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label fw-semibold small">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className={`form-control ${errors.email ? 'is-invalid' : ''}`}
            value={form.email}
            onChange={handleChange}
            placeholder="you@company.com"
          />
          {errors.email ? <div className="invalid-feedback">{errors.email}</div> : null}
        </div>

        <div className="mb-3">
          <label htmlFor="company" className="form-label fw-semibold small">
            Company
          </label>
          <input
            type="text"
            id="company"
            name="company"
            className={`form-control ${errors.company ? 'is-invalid' : ''}`}
            value={form.company}
            onChange={handleChange}
            placeholder="Company name"
          />
          {errors.company ? <div className="invalid-feedback">{errors.company}</div> : null}
        </div>

        <div className="mb-4">
          <label htmlFor="message" className="form-label fw-semibold small">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            className={`form-control ${errors.message ? 'is-invalid' : ''}`}
            value={form.message}
            onChange={handleChange}
            placeholder="Tell us about your dispatch needs…"
          />
          {errors.message ? <div className="invalid-feedback">{errors.message}</div> : null}
        </div>

        <button type="submit" className="btn-gradient w-100">
          Submit
        </button>
      </form>
    </div>
  );
}

export function ContactInfo() {
  const items = [
    { icon: 'bi-envelope-fill', label: 'Email', value: SUPPORT_EMAIL, href: `mailto:${SUPPORT_EMAIL}` },
    { icon: 'bi-telephone-fill', label: 'Phone', value: SUPPORT_PHONE },
    { icon: 'bi-geo-alt-fill', label: 'Location', value: LOCATION },
  ];

  return (
    <div className="gb-card p-4 p-lg-5 h-100">
      <h2 className="h4 fw-bold text-navy mb-4">Contact information</h2>
      <p className="text-muted mb-4">
        Reach out to our team for demos, support, or partnership inquiries.
      </p>
      {items.map((item) => (
        <div className="contact-info-item" key={item.label}>
          <div className="contact-info-icon">
            <i className={`bi ${item.icon}`} aria-hidden="true" />
          </div>
          <div>
            <p className="small text-muted mb-1">{item.label}</p>
            {item.href ? (
              <a href={item.href} className="fw-semibold text-navy">
                {item.value}
              </a>
            ) : (
              <p className="fw-semibold text-navy mb-0">{item.value}</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
