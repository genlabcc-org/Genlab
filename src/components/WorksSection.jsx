import React from 'react';

export default function WorksSection() {
  return (
    <section className="works-section" id="works">
      <div className="works-inner">
        {/* Project Header */}
        <div className="works-header">
          <div className="works-header-left">
            <span className="works-tag">Cyber security</span>
            <h2 className="works-title">Acronis Cyber Protect</h2>
          </div>
          <a href="#work" className="works-link-view">
            <span>View project</span>
            <span className="works-arrow">↗</span>
          </a>
        </div>

        {/* Media Grid */}
        <div className="works-media-grid">
          {/* Main Large Showcase */}
          <div className="works-media-main">
            <img
              src="/assets/works/acronis-main.avif"
              alt="Acronis Cyber Protect showcase"
              className="works-img"
              loading="lazy"
            />
          </div>

          {/* Side Media */}
          <div className="works-media-side">
            <img
              src="/assets/works/acronis-side.avif"
              alt="Acronis side details"
              className="works-img"
              loading="lazy"
            />
          </div>

          {/* Gallery Lower Two */}
          <div className="works-media-bottom-left">
            <img
              src="/assets/works/acronis-g1.avif"
              alt="Acronis gallery 1"
              className="works-img"
              loading="lazy"
            />
          </div>

          <div className="works-media-bottom-right">
            <img
              src="/assets/works/acronis-g2.avif"
              alt="Acronis gallery 2"
              className="works-img"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
