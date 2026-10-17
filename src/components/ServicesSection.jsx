import React, { useState, useRef } from 'react';

const SunIcon = () => (
  <svg viewBox="0 0 40 40" className="cap-glyph-svg" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="20" cy="20" r="7" stroke="currentColor" strokeWidth="2.5" />
    {Array.from({ length: 16 }).map((_, i) => {
      const angle = (i * 360) / 16;
      return (
        <line
          key={i}
          x1="20"
          y1="8.5"
          x2="20"
          y2="3"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          transform={`rotate(${angle} 20 20)`}
        />
      );
    })}
  </svg>
);

const FlowerIcon = () => (
  <svg viewBox="0 0 40 40" className="cap-glyph-svg" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 5 C20 12 13 19 5 20 C13 21 20 28 20 35 C20 28 27 21 35 20 C27 19 20 12 20 5 Z" />
    <circle cx="10" cy="10" r="3.5" />
    <circle cx="30" cy="10" r="3.5" />
    <circle cx="10" cy="30" r="3.5" />
    <circle cx="30" cy="30" r="3.5" />
  </svg>
);

const StarIcon = () => (
  <svg viewBox="0 0 40 40" className="cap-glyph-svg" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 2 C20 12.5 13 18.5 2 20 C13 21.5 20 27.5 20 38 C20 27.5 27 21.5 38 20 C27 18.5 20 12.5 20 2 Z" />
  </svg>
);

const EyeIcon = () => (
  <svg viewBox="0 0 44 40" className="cap-glyph-svg" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M2 20 C10 8 34 8 42 20 C34 32 10 32 2 20 Z"
      fill="currentColor"
    />
    <circle cx="22" cy="20" r="5" fill="#121212" />
  </svg>
);

const AsteriskIcon = () => (
  <svg viewBox="0 0 40 40" className="cap-glyph-svg" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    {[0, 45, 90, 135].map((angle) => (
      <rect
        key={angle}
        x="17"
        y="4"
        width="6"
        height="32"
        rx="3"
        transform={`rotate(${angle} 20 20)`}
      />
    ))}
  </svg>
);

export default function ServicesSection() {
  const [activeIdx, setActiveIdx] = useState(null);
  const rowsRef = useRef([]);

  const capabilities = [
    {
      left: 'Product',
      title: 'PRODUCT DESIGN',
      icon: <SunIcon />,
      right: 'Design'
    },
    {
      left: 'Digital',
      title: 'DIGITAL STRATEGY',
      icon: <FlowerIcon />,
      right: 'Strategy'
    },
    {
      left: 'Web',
      title: 'WEB DESIGN',
      icon: <StarIcon />,
      right: 'Design'
    },
    {
      left: 'Brand',
      title: 'BRAND IDENTITY',
      icon: <EyeIcon />,
      right: 'Identity'
    },
    {
      left: 'Service',
      title: 'SERVICE DESIGN',
      icon: <AsteriskIcon />,
      right: 'Design'
    }
  ];

  const handleContainerMouseMove = (e) => {
    const mouseY = e.clientY;
    let closestIndex = null;
    let minDistance = 75; // proximity threshold in pixels

    rowsRef.current.forEach((el, index) => {
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const centerY = rect.top + rect.height / 2;
      const distance = Math.abs(mouseY - centerY);

      if (distance < minDistance) {
        minDistance = distance;
        closestIndex = index;
      }
    });

    setActiveIdx(closestIndex);
  };

  const handleContainerMouseLeave = () => {
    setActiveIdx(null);
  };

  return (
    <section className="services-section" id="services">
      <div className="services-header">
        <h2 className="services-title">
          <em>Capabilities</em>+ for modern businesses
        </h2>
        <p className="services-desc">
          We're a Gen Z team of strategists, designers and AI builders. We take products from rough concept to market-validated platforms that scale.
        </p>
      </div>

      <div
        className="services-list"
        onMouseMove={handleContainerMouseMove}
        onMouseLeave={handleContainerMouseLeave}
      >
        {capabilities.map((item, idx) => {
          const isActive = activeIdx === idx;
          return (
            <div
              key={idx}
              ref={(el) => (rowsRef.current[idx] = el)}
              className={`services-row ${isActive ? 'is-active' : ''}`}
              onMouseEnter={() => setActiveIdx(idx)}
            >
              {/* Left Label */}
              <span className="cap-side-label cap-left">{item.left}</span>

              {/* Center Typography & Rotating Glyph */}
              <div className="cap-center-wrap">
                <span className="cap-icon-glyph">{item.icon}</span>
                <span className="cap-name-bold">{item.title}</span>
              </div>

              {/* Right Label */}
              <span className="cap-side-label cap-right">{item.right}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
