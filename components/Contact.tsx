'use client';

import { useState } from 'react';

export default function Contact() {
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleCopy = (text: string, fieldName: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedField(fieldName);
      setTimeout(() => {
        setCopiedField(null);
      }, 2000);
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => {
      setFormSubmitted(false);
    }, 5000);
  };

  return (
    <section className="section contact-section" id="contact">
      <div className="container">
        <div className="section-badge">Get in Touch</div>
        <h2 className="section-title">Ready to Elevate Your QA &amp; Development Standards</h2>
        <p className="section-subtitle">
          Looking for an experienced QA Automation Engineer or SDET who writes clean tests
          and understands developer architecture? Let&apos;s connect!
        </p>

        <div className="contact-grid">
          {/* Contact Information Details */}
          <div className="contact-info-card glass-card">
            <h3>Contact Details</h3>
            <p className="text-muted">
              Feel free to reach out directly via email, phone, or LinkedIn. I usually
              respond within a few hours.
            </p>

            <div className="contact-detail-items">
              <div className="detail-item">
                <div className="detail-icon">
                  <i className="fas fa-envelope"></i>
                </div>
                <div>
                  <span className="detail-label">Email</span>
                  <a href="mailto:kashwin454@yahoo.com" className="detail-value">
                    kashwin454@yahoo.com
                  </a>
                </div>
                <button
                  className="copy-btn"
                  onClick={() => handleCopy('kashwin454@yahoo.com', 'email')}
                  title="Copy Email"
                >
                  {copiedField === 'email' ? (
                    <i className="fas fa-check" style={{ color: '#10b981' }}></i>
                  ) : (
                    <i className="far fa-copy"></i>
                  )}
                </button>
              </div>

              <div className="detail-item">
                <div className="detail-icon">
                  <i className="fas fa-phone"></i>
                </div>
                <div>
                  <span className="detail-label">Phone</span>
                  <a href="tel:+916383799815" className="detail-value">
                    +91 6383799815
                  </a>
                </div>
                <button
                  className="copy-btn"
                  onClick={() => handleCopy('+916383799815', 'phone')}
                  title="Copy Phone"
                >
                  {copiedField === 'phone' ? (
                    <i className="fas fa-check" style={{ color: '#10b981' }}></i>
                  ) : (
                    <i className="far fa-copy"></i>
                  )}
                </button>
              </div>

              <div className="detail-item">
                <div className="detail-icon">
                  <i className="fab fa-linkedin-in"></i>
                </div>
                <div>
                  <span className="detail-label">LinkedIn</span>
                  <a
                    href="https://linkedin.com/in/ashwin-k-221ca009"
                    target="_blank"
                    rel="noreferrer"
                    className="detail-value"
                  >
                    linkedin.com/in/ashwin-k-221ca009
                  </a>
                </div>
                <a
                  href="https://linkedin.com/in/ashwin-k-221ca009"
                  target="_blank"
                  rel="noreferrer"
                  className="copy-btn"
                  title="Open LinkedIn"
                >
                  <i className="fas fa-external-link-alt"></i>
                </a>
              </div>

              <div className="detail-item">
                <div className="detail-icon">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div>
                  <span className="detail-label">Location</span>
                  <span className="detail-value">
                    Tamil Nadu, India (Open to Remote / Relocation)
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Contact Form */}
          <div className="contact-form-card glass-card">
            <h3>Send a Direct Message</h3>
            <form id="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  placeholder="John Doe"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Your Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="john@example.com"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  placeholder="Opportunity: Senior QA / SDET Role"
                  required
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData({ ...formData, subject: e.target.value })
                  }
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Hi Ashwin, we'd love to chat about your test automation experience..."
                  required
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary btn-block">
                <i className="fas fa-paper-plane"></i> Send Message
              </button>
            </form>

            {formSubmitted && (
              <div id="form-toast" className="toast-message show">
                <i className="fas fa-check-circle"></i> Thanks for reaching out! Ashwin will get
                back to you promptly.
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
