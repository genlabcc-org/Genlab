import React from 'react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-section" id="footer">
      <div className="footer-inner">
        {/* Huge Heading */}
        <div className="footer-heading-mask">
          <h2 className="footer-heading">Get in touch</h2>
        </div>

        {/* Mission and Subtext */}
        <p className="footer-mission">
          I build products that move people, and move the business.{' '}
          <a href="mailto:hello@kstoimenov.com" className="footer-write-link">
            Prefer to write? Send a note.
          </a>
        </p>

        {/* Contact CTA */}
        <div className="footer-cta-wrap">
          <a
            href="mailto:hello@kstoimenov.com"
            className="footer-contact-btn"
            aria-label="Contact — send an email"
          >
            <span>Contact</span>
            <img src="/assets/footer-contact-arrow.svg" alt="" className="footer-arrow-icon" />
          </a>
        </div>

        {/* Social Links Cards */}
        <div className="footer-social-row">
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social-card"
          >
            <span>LinkedIn</span>
            <span className="social-arrow">↗</span>
          </a>

          <a
            href="https://x.com"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social-card"
          >
            <span>Twitter / X</span>
            <span className="social-arrow">↗</span>
          </a>

          <a
            href="https://dribbble.com"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social-card"
          >
            <span>Dribbble</span>
            <span className="social-arrow">↗</span>
          </a>
        </div>

        {/* Bottom Credits & Back to Top */}
        <div className="footer-bottom-bar">
          <div className="footer-copy">
            <span>© {new Date().getFullYear()} Krasimir Stoimenov. All rights reserved.</span>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="footer-back-to-top"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <span className="top-arrow">↑</span>
          </button>
        </div>
      </div>
    </footer>
  );
}
