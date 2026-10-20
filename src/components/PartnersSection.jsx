import React from 'react';

export default function PartnersSection() {
  const partners = [
    { name: 'GenStrat.ai', path: '/genlab/logos/industry/genstrat.webp' },
    { name: 'Barbarik AI', path: '/genlab/logos/industry/barbarik.webp' },
    { name: 'nivas', path: '/genlab/logos/industry/nivas.webp' },
    { name: 'Hytes IT', path: '/genlab/logos/industry/hytes.webp' },
    { name: 'ACTIV healthcare', path: '/genlab/logos/industry/activ.webp' },
    { name: 'WolfPAC', path: '/genlab/logos/industry/wolfpac.webp' },
    { name: 'TPI', path: '/genlab/logos/industry/tpi.webp' },
    { name: 'Periscope', path: '/genlab/logos/industry/periscope.webp' },
    { name: 'Invenza Engineering', path: '/genlab/logos/industry/invenza.webp' }
  ];

  return (
    <section className="partners-section" id="partners">
      <div className="partners-inner">
        <div className="partners-header">
          <h2 className="partners-title">
            Valuable<br />
            <em>Partners</em>
          </h2>
          <p className="partners-desc">
            Trusted across academia, institutions, and enterprise clients.
          </p>
        </div>

        <div className="partners-grid">
          {partners.map((p, idx) => (
            <div key={idx} className="partner-cell">
              <img
                src={p.path}
                alt={p.name}
                className="partner-logo"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
