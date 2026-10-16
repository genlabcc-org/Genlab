import React from 'react';

export default function WorksCtaSection() {
  return (
    <section className="works-cta-section">
      <div className="works-cta-inner">
        <div className="works-cta-line">
          <span className="cta-sans">Want to see</span>
          <img src="/assets/cta-eye.svg" alt="" className="cta-eye-icon" />
        </div>
        <div className="works-cta-line">
          <span className="cta-serif">how I</span>
          <span className="cta-switch-badge">
            <span className="cta-avatar-dot" />
            <span className="cta-switch-label">work?</span>
          </span>
        </div>
      </div>
    </section>
  );
}
