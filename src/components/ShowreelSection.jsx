import React from 'react';

export default function ShowreelSection() {
  return (
    <section className="showreel-section">
      {/* Marquee Header */}
      <div className="showreel-marquee">
        <div className="showreel-track">
          <div className="showreel-group">
            <span className="marquee-sans">GenLab Reel</span>
            <span className="marquee-display">AI Powerhouse</span>
            <span className="marquee-sans">GenLab Reel</span>
            <span className="marquee-display">AI Powerhouse</span>
          </div>
          <div className="showreel-group" aria-hidden="true">
            <span className="marquee-sans">GenLab Reel</span>
            <span className="marquee-display">AI Powerhouse</span>
            <span className="marquee-sans">GenLab Reel</span>
            <span className="marquee-display">AI Powerhouse</span>
          </div>
        </div>
      </div>

      {/* Billboard Stage with Circular Play Button */}
      <div className="showreel-stage">
        <img
          src="/genlab/images/hero-products.jpg"
          alt="GenLab Showcase"
          className="showreel-billboard-img"
        />
        <div className="showreel-overlay" />
        
        <button type="button" className="showreel-play-btn" aria-label="Play showreel">
          <svg viewBox="0 0 24 24" fill="none" className="play-triangle-icon">
            <polygon points="6,3 20,12 6,21" fill="#121212" />
          </svg>
        </button>
      </div>
    </section>
  );
}
