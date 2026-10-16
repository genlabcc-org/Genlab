import React from 'react';

export default function ShowreelSection() {
  return (
    <section className="showreel-section">
      {/* Marquee Header */}
      <div className="showreel-marquee">
        <div className="showreel-track">
          <div className="showreel-group">
            <span className="marquee-sans">Play Real</span>
            <span className="marquee-display">Play Real</span>
            <span className="marquee-sans">Play Real</span>
            <span className="marquee-display">Play Real</span>
          </div>
          <div className="showreel-group" aria-hidden="true">
            <span className="marquee-sans">Play Real</span>
            <span className="marquee-display">Play Real</span>
            <span className="marquee-sans">Play Real</span>
            <span className="marquee-display">Play Real</span>
          </div>
        </div>
      </div>

      {/* Billboard Stage with Circular Play Button */}
      <div className="showreel-stage">
        <img
          src="/assets/real-billboard.jpg"
          alt="Showreel billboard"
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
