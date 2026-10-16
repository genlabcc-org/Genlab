import React from 'react';

export default function MetricsSection() {
  const metrics = [
    {
      value: '12',
      unit: 'Years',
      desc: 'Crafting digital products\nglobally',
      highlight: false
    },
    {
      value: '87',
      unit: 'Projects',
      desc: 'Across 6 continents\nin 6 core domains',
      highlight: true // Green active card
    },
    {
      value: '3+',
      unit: 'Years',
      desc: 'Average period of\nwork cooperation',
      highlight: false
    },
    {
      value: '6k',
      unit: 'Hours',
      desc: 'In UX research and\nprototyping UI solutions',
      highlight: false
    }
  ];

  return (
    <section className="metrics-section">
      <div className="metrics-grid">
        {metrics.map((m, index) => (
          <div
            key={index}
            className={`metric-card ${m.highlight ? 'metric-card-highlight' : ''}`}
          >
            <div className="metric-header">
              <span className="metric-value">{m.value}</span>
              <span className="metric-unit">{m.unit}</span>
            </div>
            <p className="metric-desc">{m.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
