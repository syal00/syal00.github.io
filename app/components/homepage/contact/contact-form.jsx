'use client';

import { useState, useRef, useEffect } from 'react';
import { toast } from 'react-toastify';
import { validateString, isValidEmail } from '../../../../utils/time-converter';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    company: '', // Honeypot
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  const msgCountRef = useRef(null);

  useEffect(() => {
    updateCount();
  }, [formData.message]);

  const updateCount = () => {
    if (msgCountRef.current) {
      const len = formData.message.length;
      msgCountRef.current.textContent = `${len}/2000`;
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const setInvalid = (fieldName, invalid, message) => {
    const field = document.getElementById(fieldName);
    if (field) {
      field.setAttribute('aria-invalid', invalid ? 'true' : 'false');
    }
    setErrors((prev) => ({
      ...prev,
      [fieldName]: invalid ? message : '',
    }));
  };

  const validateForm = () => {
    let bad = false;

    if (!formData.name.trim()) {
      setInvalid('name', true, 'Please enter your name.');
      bad = true;
    } else {
      const name = validateString(formData.name, 2, 80);
      if (!name) {
        setInvalid('name', true, 'Name must be between 2 and 80 characters.');
        bad = true;
      } else {
        setInvalid('name', false, '');
      }
    }

    if (!isValidEmail(formData.email)) {
      setInvalid('email', true, 'Please enter a valid email.');
      bad = true;
    } else {
      setInvalid('email', false, '');
    }

    if (!formData.message.trim()) {
      setInvalid('message', true, 'Please write a short message.');
      bad = true;
    } else {
      const message = validateString(formData.message, 10, 2000);
      if (!message) {
        setInvalid('message', true, 'Message must be between 10 and 2000 characters.');
        bad = true;
      } else {
        setInvalid('message', false, '');
      }
    }

    return !bad;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Honeypot check
    if (formData.company) {
      toast.error('Spam detected');
      return;
    }

    if (!validateForm()) {
      toast.error('Please fix the errors in the form');
      return;
    }

    setIsSubmitting(true);

    try {
      // For static export, show success message with email instruction
      const statusEl = document.querySelector('.form-status');
      if (statusEl) {
        statusEl.textContent = 'Thanks! Your message has been prepared. Use the Email button on the left to contact me directly.';
        statusEl.setAttribute('role', 'status');
        statusEl.setAttribute('aria-live', 'polite');
      }
      
      // Create mailto link with pre-filled message
      const mailtoLink = `mailto:syal0005@algonquinlive.com?subject=Contact from Portfolio&body=Name: ${encodeURIComponent(formData.name.trim())}%0AEmail: ${encodeURIComponent(formData.email.trim())}%0A%0AMessage:%0A${encodeURIComponent(formData.message.trim())}`;
      
      toast.success('Message prepared! Opening email...');
      
      // Open email client
      window.location.href = mailtoLink;
      
      handleReset();
    } catch (error) {
      const errorMessage = 'An error occurred. Please try again.';
      toast.error(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormData({ name: '', email: '', message: '', company: '' });
    setErrors({});
    updateCount();
    const statusEl = document.querySelector('.form-status');
    if (statusEl) {
      statusEl.textContent = '';
    }
    // Reset aria-invalid
    ['name', 'email', 'message'].forEach((id) => {
      const el = document.getElementById(id);
      if (el) el.setAttribute('aria-invalid', 'false');
    });
  };

  return (
    <form
      id="contact-form"
      className="contact-form"
      onSubmit={handleSubmit}
      method="POST"
      noValidate
    >
      <h3 className="form-title">Send a Message</h3>
      <p className="form-sub">Tell me about your project or just say hello.</p>

      {/* Honeypot (anti-spam) */}
      <input
        type="text"
        name="company"
        value={formData.company}
        onChange={handleChange}
        tabIndex={-1}
        autoComplete="off"
        className="hp-field"
        aria-hidden="true"
      />

      <div className="field">
        <label htmlFor="name">
          Name <span aria-hidden="true">*</span>
        </label>
        <input
          id="name"
          name="name"
          type="text"
          inputMode="text"
          autoComplete="name"
          placeholder="Your full name"
          value={formData.name}
          onChange={handleChange}
          required
          maxLength={80}
          aria-invalid={errors.name ? 'true' : 'false'}
          aria-describedby={errors.name ? 'name-hint' : undefined}
          disabled={isSubmitting}
        />
        <p className={`field-hint ${errors.name ? 'error' : ''}`} id="name-hint">
          {errors.name || 'Max 80 characters.'}
        </p>
      </div>

      <div className="field">
        <label htmlFor="email">
          Email <span aria-hidden="true">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          inputMode="email"
          autoComplete="email"
          placeholder="your.email@example.com"
          value={formData.email}
          onChange={handleChange}
          required
          aria-invalid={errors.email ? 'true' : 'false'}
          aria-describedby={errors.email ? 'email-hint' : undefined}
          disabled={isSubmitting}
        />
        <p className={`field-hint ${errors.email ? 'error' : ''}`} id="email-hint">
          {errors.email || "I'll only use this to reply to you."}
        </p>
      </div>

      <div className="field">
        <label htmlFor="message">
          Message <span aria-hidden="true">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          placeholder="Write your message…"
          value={formData.message}
          onChange={handleChange}
          required
          maxLength={2000}
          aria-invalid={errors.message ? 'true' : 'false'}
          aria-describedby="msg-count"
          disabled={isSubmitting}
        />
        <div className="count-row">
          <span id="msg-count" ref={msgCountRef}>0/2000</span>
        </div>
      </div>

      <div className="form-actions">
        <button type="submit" className="btn" disabled={isSubmitting}>
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
        <button type="button" className="btn ghost" onClick={handleReset} disabled={isSubmitting}>
          Reset
        </button>
      </div>

      {/* Live status region for a11y */}
      <p className="form-status" role="status" aria-live="polite"></p>
    </form>
  );
}