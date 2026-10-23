import React, { useState } from "react";
import styles from "./ConnectSection.module.css";

const ArrowIcon = ({ stroke = "black", strokeWidth = 2 }) => (
  <svg
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    stroke={stroke}
    strokeWidth={strokeWidth}
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ width: "18px", height: "18px" }}
  >
    <path d="M2 12h18" />
    <path d="M18 8l4 4-4 4" />
  </svg>
);

const ConnectSection = () => {
  // 1️⃣ Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    reason: "",
    project: "",
    consent: false,
    website: "",
  });

  // 2️⃣ Error state
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(""); // "", "loading", "success", "error"
  const [submissionMessage, setSubmissionMessage] = useState("");

  // 3️⃣ Handle input changes + clear field error
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    // Update form data
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    // Clear error for this field as user types/selects
    setErrors((prev) => ({
      ...prev,
      [name]: undefined,
    }));
  };

  // 4️⃣ Validation function
  const validate = (data) => {
    const newErrors = {};

    // Name: required + letters only
    if (!data.name.trim()) newErrors.name = "Name is required";
    else if (!/^[A-Za-z\s]+$/.test(data.name))
      newErrors.name = "Name can only contain letters";

    // Email: required + format
    if (!data.email.trim()) newErrors.email = "Email is required";
    else if (!/^\S+@\S+\.\S+$/.test(data.email))
      newErrors.email = "Invalid email address";

    // Reason: required
    if (!data.reason) newErrors.reason = "Please select a reason";

    // Consent: required
    if (!data.consent) newErrors.consent = "You must give consent to submit";

    // Phone: required + validated
    if (!data.phone.trim()) newErrors.phone = "Phone number is required";
    else if (!/^[0-9+\-\s()]{7,20}$/.test(data.phone))
      newErrors.phone = "Invalid phone number";

    return newErrors;
  };

  // 5️⃣ Handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (status === "loading") return;

    const validationErrors = validate(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

const GOOGLE_SHEET_URL = "https://script.google.com/macros/s/AKfycbwOvKCREKQP0AKEG17-p_tCPzZ3cvTcUBszLNFetBAOdLrMWlHwKxFX1p5pLTs4F9vW/exec";

    setErrors({});
    setStatus("loading");

    const formattedDate = new Date().toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
      dateStyle: "medium",
      timeStyle: "short",
    });

    const reasonMap = {
      careers: "business enquiry",
      internships: "internship enquiry",
      training_programs_courses: "courses enquiry",
      incubation_support: "careers enquiry",
    };
    const reasonLabel = reasonMap[formData.reason] || formData.reason;
    const projectText = formData.project.trim();
    const reasonTag = `[${reasonLabel}]`;
    const combinedMessage = projectText ? `${reasonTag} ${projectText}` : reasonTag;

    const payload = {
      Timestamp: formattedDate,
      timestamp: formattedDate,
      Name: formData.name.trim(),
      name: formData.name.trim(),
      Email: formData.email.trim(),
      email: formData.email.trim(),
      Phone: formData.phone.trim().startsWith("+") ? formData.phone.trim() : `+91${formData.phone.trim()}`,
      phone: formData.phone.trim().startsWith("+") ? formData.phone.trim() : `+91${formData.phone.trim()}`,
      Reason: reasonLabel,
      reason: reasonLabel,
      Experience: "N/A",
      experience: "N/A",
      Message: combinedMessage,
      message: combinedMessage,
      Project: projectText,
      project: projectText,
      Details: projectText,
      details: projectText,
    };

    try {
      const queryParams = new URLSearchParams();
      Object.entries(payload).forEach(([k, v]) => {
        queryParams.append(k, v);
      });

      const gasRequest = fetch(`${GOOGLE_SHEET_URL}?${queryParams.toString()}`, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify(payload),
        signal: AbortSignal.timeout(6000),
      });

      fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, formType: "contact" }),
      }).catch((err) => console.warn("Background /api/contact notice:", err));

      try {
        await gasRequest;
      } catch (gasErr) {
        console.warn("Direct Google Sheet submission status:", gasErr.message);
      }

      setStatus("success");
      setSubmissionMessage("Form submitted successfully!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        reason: "",
        project: "",
        consent: false,
        website: "",
      });

      setTimeout(() => {
        setStatus("");
        setSubmissionMessage("");
      }, 4000);
    } catch (error) {
      setStatus("error");
      setSubmissionMessage(error.message || "We couldn't send your message right now. Please try again.");
      setTimeout(() => {
        setStatus("");
        setSubmissionMessage("");
      }, 4000);
    }
  };

  return (
    <section id="connect" className={styles.connectSection}>
      <div className={styles.left}>
        <h2 className={styles.heading}>
          LET’S <br /> CONNECT
        </h2>
      </div>

      <div className={styles.right}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.honeypot} aria-hidden="true">
            <label htmlFor="contact-website">Leave this field empty</label>
            <input
              id="contact-website"
              type="text"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              value={formData.website}
              onChange={handleChange}
            />
          </div>

          <div className={styles.row}>
            <div>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                className={errors.name ? styles.inputError : ""}
              />
              {errors.name && (
                <span className={styles.fieldError}>{errors.name}</span>
              )}
            </div>

            <div>
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className={errors.email ? styles.inputError : ""}
              />
              {errors.email && (
                <span className={styles.fieldError}>{errors.email}</span>
              )}
            </div>
          </div>

          <div className={styles.row}>
            <div>
              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className={errors.phone ? styles.inputError : ""}
              />
              {errors.phone && (
                <span className={styles.fieldError}>{errors.phone}</span>
              )}
            </div>

            <div>
              <select
                name="reason"
                value={formData.reason}
                onChange={handleChange}
                className={`${styles.select} ${errors.reason ? styles.inputError : ""
                  }`}
              >
                <option value="" disabled>Reason</option>
                <option value="careers">business enquiry</option>
                <option value="internships">internship enquiry</option>
                <option value="training_programs_courses">courses enquiry</option>
                <option value="incubation_support">careers enquiry</option>


              </select>
              {errors.reason && (
                <span className={styles.fieldError}>{errors.reason}</span>
              )}
            </div>
          </div>

          <div>
            <textarea
              name="project"
              placeholder="Share details about your request"
              rows={5}
              value={formData.project}
              onChange={handleChange}
            ></textarea>
          </div>

          <label className={styles.customCheckbox}>
            <input
              type="checkbox"
              name="consent"
              checked={formData.consent}
              onChange={handleChange}
            />
            <span
              className={`${styles.checkmark} ${errors.consent ? styles.inputError : ""
                }`}
            ></span>
            <span className={styles.checkboxText}>
              I consent to GenLab collecting and processing my information to
              respond to my request and for future communication.
            </span>
          </label>

          <button
            type="submit"
            className={styles.submitBtn}
            disabled={status === "loading"}
          >
            <span>
              {status === "loading"
                ? "Submitting..."
                : status === "success"
                  ? "Submitted ✓"
                  : status === "error"
                    ? "Failed ✕"
                    : "SUBMIT"}
            </span>
            <div className={styles.arrow}>
              <ArrowIcon />
            </div>
          </button>
          {submissionMessage && (
            <p
              className={status === "error" ? styles.submitError : styles.submitMessage}
              role={status === "error" ? "alert" : "status"}
              aria-live="polite"
            >
              {submissionMessage}
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default ConnectSection;