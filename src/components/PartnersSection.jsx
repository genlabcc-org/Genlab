import React from 'react';

export default function PartnersSection() {
  const partners = [
    { name: 'VIT', path: '/genlab/logos/academia/vit.webp' },
    { name: 'Arunachala', path: '/genlab/logos/academia/a_arunachala.webp' },
    { name: 'Christ University', path: '/genlab/logos/academia/Christ.webp' },
    { name: 'NICHE', path: '/genlab/logos/academia/Niche.webp' },
    { name: 'DMI', path: '/genlab/logos/academia/dmi.webp' },
    { name: 'FX', path: '/genlab/logos/academia/fx.webp' },
    { name: 'Fatima', path: '/genlab/logos/academia/fatima.webp' },
    { name: 'SCAD', path: '/genlab/logos/academia/scad.webp' },
    { name: 'Partner 1', path: '/genlab/logos/industry/i_1.webp' },
    { name: 'Partner 2', path: '/genlab/logos/industry/i_2.webp' },
    { name: 'Partner 3', path: '/genlab/logos/industry/i_3.webp' },
    { name: 'Partner 4', path: '/genlab/logos/industry/i_4.webp' },
    { name: 'Partner 5', path: '/genlab/logos/industry/i_5.webp' },
    { name: 'Partner 6', path: '/genlab/logos/industry/i_6.webp' },
    { name: 'Partner 7', path: '/genlab/logos/industry/i_7.webp' },
    { name: 'Institution', path: '/genlab/logos/academia/a_3.webp' }
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
                style={{ filter: 'grayscale(1) brightness(1.2)', maxHeight: '42px', objectFit: 'contain' }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
