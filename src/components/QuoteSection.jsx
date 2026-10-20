import React from 'react';

export default function QuoteSection() {
  return (
    <section className="quote-section">
      {/* Ambient Radiant Blur Glow Backdrop */}
      <div className="quote-radiant-glow" aria-hidden="true" />

      <div className="quote-container">
        <div className="quote-line line-top">
          <span>Build to scale</span>
          <img src="/assets/quote-star.svg" alt="" className="quote-star-icon" />
        </div>

        <div className="quote-line line-mid">
          <span className="quote-serif">empower creators</span>
        </div>

        <div className="quote-line line-bottom">
          <span className="quote-amp">&amp;</span>
          <span>with Gen Z AI</span>
          <img src="/assets/quote-half.svg" alt="" className="quote-half-icon" />
        </div>
      </div>
    </section>
  );
}
