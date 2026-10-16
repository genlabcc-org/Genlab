import React from 'react';

export default function QuoteSection() {
  return (
    <section className="quote-section">
      <div className="quote-container">
        <div className="quote-line line-top">
          <span>Design to scale</span>
          <img src="/assets/quote-star.svg" alt="" className="quote-star-icon" />
        </div>

        <div className="quote-line line-mid">
          <span className="quote-serif">drive experiences</span>
        </div>

        <div className="quote-line line-bottom">
          <span className="quote-amp">&</span>
          <span>with data</span>
          <img src="/assets/quote-half.svg" alt="" className="quote-half-icon" />
        </div>
      </div>
    </section>
  );
}
