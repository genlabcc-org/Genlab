import React from 'react';

export default function PartnersSection() {
  const partners = [
    { name: 'Acronis', file: 'acronis.svg' },
    { name: 'Constructor', file: 'constructor.svg' },
    { name: 'Ringier', file: 'ringier.svg' },
    { name: 'Macmillan', file: 'macmillan.svg' },
    { name: 'Endava', file: 'endava.svg' },
    { name: 'Simplebet', file: 'simplebet.svg' },
    { name: 'Jeton', file: 'jeton.svg' },
    { name: 'Lottoland', file: 'lottoland.svg' },
    { name: 'Dojo', file: 'dojo.svg' },
    { name: 'Telus', file: 'telus.svg' },
    { name: 'ClaimCompass', file: 'claimcompass.svg' },
    { name: 'Brandquadergy', file: 'brandquadergy.svg' },
    { name: 'Polygon', file: 'polygon.svg' },
    { name: 'Efes', file: 'efes.svg' },
    { name: 'Jobpal', file: 'jobpal.svg' },
    { name: 'Blogo', file: 'blogo.svg' },
  ];

  return (
    <section className="partners-section">
      <div className="partners-inner">
        <div className="partners-header">
          <h2 className="partners-title">
            Valuable<br />
            <em>Partners</em>
          </h2>
          <p className="partners-desc">
            Trusted by teams from pre-seed start-ups to the Fortune 500.
          </p>
        </div>

        <div className="partners-grid">
          {partners.map((p, idx) => (
            <div key={idx} className="partner-cell">
              <img
                src={`/assets/partners/${p.file}`}
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
