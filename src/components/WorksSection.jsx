import React from 'react';

export default function WorksSection() {
  return (
    <section className="works-section" id="work">
      <div className="works-inner">
        {/* Project Header */}
        <div className="works-header">
          <div className="works-header-left">
            <span className="works-tag">AI Platform</span>
            <h2 className="works-title">GenLab AI Forge &amp; Voice Agent</h2>
          </div>
          <a
            href="https://chat.whatsapp.com/L0n2kNQfSbR3lwhmN5mNVJ"
            target="_blank"
            rel="noopener noreferrer"
            className="works-link-view"
          >
            <span>View platform</span>
            <span className="works-arrow">↗</span>
          </a>
        </div>

        {/* Media Grid */}
        <div className="works-media-grid">
          {/* Main Large Showcase */}
          <div className="works-media-main">
            <img
              src="/genlab/images/hero-products.jpg"
              alt="GenLab AI Showcase"
              className="works-img"
              loading="lazy"
            />
          </div>

          {/* Side Media */}
          <div className="works-media-side">
            <img
              src="/genlab/hero.png"
              alt="GenLab Voice Platform"
              className="works-img"
              loading="lazy"
            />
          </div>

          {/* Gallery Lower Two */}
          <div className="works-media-bottom-left">
            <img
              src="/genlab/Genlab.png"
              alt="GenLab Ecosystem"
              className="works-img"
              loading="lazy"
            />
          </div>

          <div className="works-media-bottom-right">
            <img
              src="/genlab/images/s1_1.png"
              alt="GenLab Launchpad"
              className="works-img"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
