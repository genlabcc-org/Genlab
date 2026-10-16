import React from 'react';

export default function ServicesSection() {
  return (
    <section className="services-section" id="services">
      <div className="services-header">
        <h2 className="services-title">
          <em>Services</em>+ for better digital products
        </h2>
        <p className="services-desc">
          Six disciplines, one person on the hook for the outcome. I take products from rough idea to something people actually use, without the agency overhead.
        </p>
      </div>

      <div className="services-list">
        {['Product design', 'Digital strategy', 'Web design', 'Brand identity', 'Service design'].map((item, idx) => (
          <div key={idx} className="services-row">
            <span className="services-name">{item}</span>
            <span className="services-arrow">→</span>
          </div>
        ))}
      </div>
    </section>
  );
}
