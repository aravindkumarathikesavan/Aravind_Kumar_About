import { useState } from 'react';

const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxk4yXecKTsXm-cuuqHhWB9qx7mlEcPirkpfunRyk6WINql1kF25T5UBVRPtPlxsc2a3g/exec';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState({ sending: false, success: false, error: '' });

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async e => {
    e.preventDefault();
    setStatus({ sending: true, success: false, error: '' });

    try {
      await fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8',
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          subject: form.subject,
          message: form.message,
        }),
      });

      setStatus({ sending: false, success: true, error: '' });
      setForm({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus(s => ({ ...s, success: false })), 6000);
    } catch {
      setStatus({
        sending: false,
        success: false,
        error: 'Unable to send message right now. Please try again or email directly.',
      });
    }
  };

  return (
    <section id="contact" className="section contact-section">
      {/* Background orbs */}
      <div className="contact-orb-1" />
      <div className="contact-orb-2" />

      <div className="container">
        <div className="section-header" style={{ textAlign: 'center', alignItems: 'center', display: 'flex', flexDirection: 'column' }}>
          <span className="section-tag">📬 Get In Touch</span>
          <h2 className="section-title">Contact Me</h2>
          <p className="section-subtitle" style={{ textAlign: 'center' }}>
            Open for new opportunities, freelance projects or just a friendly chat. Drop a message!
          </p>
          <div className="grad-line" style={{ margin: '0 auto 48px' }} />
        </div>

        <div className="contact-grid">
          {/* Info panel */}
          <div className="contact-info">
            <div className="contact-info-card card">
              <h3>Let's Connect!</h3>
              <p>I'm currently open to full-time roles and freelance opportunities in web development.</p>

              <div className="info-items">
                <a href="tel:7358494847" className="info-item">
                  <div className="info-icon" style={{ background: 'rgba(108,99,255,0.15)', border: '1px solid rgba(108,99,255,0.3)' }}>📱</div>
                  <div>
                    <span className="info-label">Phone</span>
                    <span className="info-value">7358494847</span>
                  </div>
                </a>
                <a href="mailto:aravindkumarathikesavan@gmail.com" className="info-item">
                  <div className="info-icon" style={{ background: 'rgba(0,212,170,0.15)', border: '1px solid rgba(0,212,170,0.3)' }}>📧</div>
                  <div>
                    <span className="info-label">Email</span>
                    <span className="info-value">aravindkumarathikesavan@gmail.com</span>
                  </div>
                </a>
                <div className="info-item">
                  <div className="info-icon" style={{ background: 'rgba(255,107,107,0.15)', border: '1px solid rgba(255,107,107,0.3)' }}>📍</div>
                  <div>
                    <span className="info-label">Location</span>
                    <span className="info-value">Villupuram, Tamil Nadu, India</span>
                  </div>
                </div>
              </div>

              <div className="availability">
                <span className="avail-dot" />
                Available for new opportunities
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="contact-form-wrap">
            <form className="contact-form card" onSubmit={handleSubmit}>
              {status.success && (
                <div className="success-banner">
                  🎉 Message sent successfully! I'll get back to you soon.
                </div>
              )}
              {status.error && (
                <div className="success-banner" style={{ background: 'rgba(255,107,107,0.1)', borderColor: 'rgba(255,107,107,0.3)', color: '#ff6b6b' }}>
                  ⚠️ {status.error}
                </div>
              )}

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input
                    id="name" name="name" type="text"
                    placeholder="John Doe"
                    value={form.name} onChange={handleChange} required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    id="email" name="email" type="email"
                    placeholder="john@example.com"
                    value={form.email} onChange={handleChange} required
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  id="subject" name="subject" type="text"
                  placeholder="Job opportunity / Project inquiry..."
                  value={form.subject} onChange={handleChange} required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message" name="message" rows={5}
                  placeholder="Tell me about the opportunity or project..."
                  value={form.message} onChange={handleChange} required
                />
              </div>
              <button
                type="submit"
                className="btn-primary submit-btn"
                id="submit-contact"
                disabled={status.sending}
                style={{ opacity: status.sending ? 0.7 : 1, cursor: status.sending ? 'wait' : 'pointer' }}
              >
                {status.sending ? 'Sending Message... ⏳' : 'Send Message ✉️'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
