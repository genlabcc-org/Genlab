import React from 'react';

export default function MetricsSection() {
  const metrics = [
    {
      value: '6+',
      unit: 'Years',
      desc: 'Of experience in AI\n& digital solutions',
      highlight: false
    },
    {
      value: '100+',
      unit: 'Projects',
      desc: 'Delivered for startups\nand global brands',
      highlight: false
    },
    {
      value: '10+',
      unit: 'Partners',
      desc: 'Enterprise & academic\npartners scaling',
      highlight: false
    },
    {
      value: '20K+',
      unit: 'Creators',
      desc: 'Skilled in autonomous\nAI workflows',
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
