import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import '../pages/Contact.css';

const Contact: React.FC = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = `Contact from ${formData.name}${formData.organization ? ` - ${formData.organization}` : ''}`;
    const bodyText = `Name: ${formData.name}
Email: ${formData.email}
Organization: ${formData.organization}

Message:
${formData.message}`;

    const mailto = `mailto:bowenzhang99@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyText)}`;
    window.location.href = mailto;
    setSubmitted(true);
  };

  const handleBookCall = () => {
    window.open('https://calendly.com/bowenzhang99', '_blank');
  };

  return (
    <div className="contact-container">
      {/* Back to Home button row (in normal flow so it’s always visible) */}
      <div className="back-row">
        <motion.button
          className="back-home-button"
          onClick={() => navigate('/')}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.35 }}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
        >
          ← Back to Home
        </motion.button>
      </div>

      <motion.div
        className="contact-hero"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1>Let's Connect</h1>
        <p>Ready to transform your grant application process? Get in touch with us today.</p>
      </motion.div>

      <div className="contact-content">
        <motion.div
          className="contact-options"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="option-card">
            <div className="option-icon">📧</div>
            <h3>Send us a Message</h3>
            <p>Fill out the form and we'll get back to you within 24 hours</p>
          </div>

          <div className="option-card highlight">
            <div className="option-icon">📅</div>
            <h3>Book a Strategy Call</h3>
            <p>Schedule a free 30-minute consultation to discuss your grant needs</p>
            <button onClick={handleBookCall} className="book-call-button">
              Book Your Free Call
            </button>
          </div>

          <div className="option-card">
            <div className="option-icon">✉️</div>
            <h3>Email Us Directly</h3>
            <p>Prefer email? Reach out to us at:</p>
            <a href="mailto:bowenzhang99@gmail.com" className="email-link">
              bowenzhang99@gmail.com
            </a>
          </div>
        </motion.div>

        <motion.div
          className="contact-form-wrapper"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {submitted ? (
            <div className="thank-you-message">
              <div className="success-icon">✓</div>
              <h3>Thank you for reaching out!</h3>
              <p>
                Your email client should have opened. If not, please email us directly at
                {' '}
                <a className="email-link" href="mailto:bowenzhang99@gmail.com">bowenzhang99@gmail.com</a>
              </p>
              <button onClick={() => setSubmitted(false)} className="reset-button">
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="contact-form">
              <h2>Send Us a Message</h2>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="John Doe"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="organization">Organization</label>
                <input
                  type="text"
                  id="organization"
                  value={formData.organization}
                  onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                  placeholder="Your Organization Name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about your grant application needs..."
                  rows={6}
                  required
                />
              </div>

              <button type="submit" className="submit-button">
                Send Message
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;