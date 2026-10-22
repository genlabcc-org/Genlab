import React, { useState } from 'react';
import './GetInTouchForm.css';

const CONTACT_ENDPOINT =
  'https://script.google.com/macros/s/AKfycbwl1wb6wU5k5mbHNDgda3hbs3oxjvU6DsqURubOftGDKxhytevFRiuGBHYiSLfVCa0E/exec';

export default function GetInTouchForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    reason: '',
    experience: '',
    project: '',
    consent: false
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(''); // '' | 'loading' | 'success' | 'error'

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handlePhoneChange = (e) => {
    const cleaned = e.target.value.replace(/\D/g, '').slice(0, 10);
    setFormData((prev) => ({ ...prev, phone: cleaned }));
    if (errors.phone) {
      setErrors((prev) => ({ ...prev, phone: undefined }));
    }
  };

  const validate = (data) => {
    const errs = {};
    if (!data.name.trim()) {
      errs.name = 'Name is required';
    } else if (!/^[A-Za-z\s]+$/.test(data.name)) {
      errs.name = 'Name can only contain letters';
    }

    if (!data.email.trim()) {
      errs.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(data.email)) {
      errs.email = 'Invalid email address';
    }

    if (!data.phone.trim()) {
      errs.phone = 'Phone number is required';
    } else if (!/^\d{10}$/.test(data.phone)) {
      errs.phone = 'Enter a valid 10-digit mobile number';
    }

    if (!data.reason) {
      errs.reason = 'Please select a reason';
    }

    if (data.reason === 'careers' && !data.experience) {
      errs.experience = 'Please select experience';
    }

    if (!data.consent) {
      errs.consent = 'You must give consent to submit';
    }

    return errs;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (status === 'loading') return;

    const validationErrors = validate(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setStatus('loading');

    const minDelay = new Promise((resolve) => setTimeout(resolve, 1500));

    try {
      const params = new URLSearchParams({
        name: formData.name.trim(),
        email: formData.email.trim(),
        phone: `+91${formData.phone.trim()}`,
        reason: formData.reason,
        experience: formData.experience || '',
        project: formData.project.trim(),
        consent: String(formData.consent),
        formType: 'contact'
      });

      await fetch(CONTACT_ENDPOINT, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: params.toString()
      });

      await minDelay;
      setStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        reason: '',
        experience: '',
        project: '',
        consent: false
      });

      setTimeout(() => setStatus(''), 4000);
    } catch (err) {
      console.error('Submission error:', err);
      await minDelay;
      setStatus('error');
      setTimeout(() => setStatus(''), 4000);
    }
  };

  return (
    <div className="contact-form-container">
      <form onSubmit={handleSubmit} className="contact-form" noValidate>
        {/* Row 1: Name & Email Address */}
        <div className="contact-form-row">
          <div className="contact-field-group">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className={`contact-input ${errors.name ? 'has-error' : ''}`}
            />
            {errors.name && <span className="contact-error-msg">{errors.name}</span>}
          </div>

          <div className="contact-field-group">
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className={`contact-input ${errors.email ? 'has-error' : ''}`}
            />
            {errors.email && <span className="contact-error-msg">{errors.email}</span>}
          </div>
        </div>

        {/* Row 2: Phone (+91) & Reason */}
        <div className="contact-form-row">
          <div className="contact-field-group">
            <div
              className={`contact-phone-wrapper ${errors.phone ? 'has-error' : ''}`}
            >
              <span className="contact-country-code">+91</span>
              <input
                type="tel"
                name="phone"
                placeholder="99945 35120"
                value={formData.phone}
                onChange={handlePhoneChange}
                className="contact-input contact-phone-input"
              />
            </div>
            {errors.phone && <span className="contact-error-msg">{errors.phone}</span>}
          </div>

          <div className="contact-field-group">
            <select
              name="reason"
              value={formData.reason}
              onChange={handleChange}
              className={`contact-select ${errors.reason ? 'has-error' : ''}`}
            >
              <option value="" disabled>
                Reason
              </option>
              <option value="careers">Career enquiry</option>
              <option value="business">Business enquiry</option>
            </select>
            {errors.reason && <span className="contact-error-msg">{errors.reason}</span>}
          </div>
        </div>

        {/* Optional Row if Careers selected: Experience */}
        {formData.reason === 'careers' && (
          <div className="contact-field-group">
            <select
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              className={`contact-select ${errors.experience ? 'has-error' : ''}`}
            >
              <option value="" disabled>
                Experience
              </option>
              <option value="0">0 years (Fresher)</option>
              <option value="1-2">1 to 2 years</option>
              <option value="2+">More than 2 years</option>
            </select>
            {errors.experience && (
              <span className="contact-error-msg">{errors.experience}</span>
            )}
          </div>
        )}

        {/* Row 3: Share details about your request */}
        <div className="contact-field-group">
          <textarea
            name="project"
            placeholder="Share details about your request"
            rows={4}
            value={formData.project}
            onChange={handleChange}
            className="contact-textarea"
          />
        </div>

        {/* Row 4: Consent Checkbox */}
        <div className="contact-field-group">
          <label className="contact-checkbox-label">
            <input
              type="checkbox"
              name="consent"
              checked={formData.consent}
              onChange={handleChange}
              className="contact-checkbox-input"
            />
            <span
              className={`contact-checkmark ${errors.consent ? 'has-error' : ''}`}
            >
              <svg className="contact-checkmark-icon" viewBox="0 0 12 12">
                <polyline points="1.5 6 4.5 9 10.5 3" />
              </svg>
            </span>
            <span className="contact-checkbox-text">
              I consent to GenLab collecting and processing my information to respond
              to my request and for future communication.
            </span>
          </label>
          {errors.consent && (
            <span className="contact-error-msg" style={{ marginLeft: '34px' }}>
              {errors.consent}
            </span>
          )}
        </div>

        {/* Row 5: Submit Button */}
        <button
          type="submit"
          disabled={status === 'loading'}
          className={`contact-submit-btn ${status === 'success' ? 'is-success' : ''}`}
        >
          <span>
            {status === 'loading'
              ? 'Submitting...'
              : status === 'success'
              ? 'Submitted ✓'
              : status === 'error'
              ? 'Failed ✕'
              : 'SUBMIT'}
          </span>
          <div className="contact-submit-arrow">
            <svg
              className="contact-arrow-svg"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M2 12h18" />
              <path d="M18 8l4 4-4 4" />
            </svg>
          </div>
        </button>
      </form>
    </div>
  );
}
