import React from 'react';

export default function WorksSection({ showIntro = true }) {
  const projectImages = [
    {
      src: '/assets/works/genlab-ai-forge/anika3.png',
      alt: 'Anika jewelry online store displayed on a laptop',
      className: 'works-media-main',
    },
    {
      src: '/assets/works/genlab-ai-forge/anika2.png',
      alt: 'Anika mobile shopping experience',
      className: 'works-media-side',
    },
    {
      src: '/assets/works/genlab-ai-forge/anika1.png',
      alt: 'Anika jewelry product page on a mobile phone',
      className: 'works-media-bottom-left',
    },
    {
      src: '/assets/works/genlab-ai-forge/anika4.png',
      alt: 'Anika commerce analytics dashboard displayed on a laptop',
      className: 'works-media-bottom-center',
    },
    {
      src: '/assets/works/genlab-ai-forge/anika5.png',
      alt: 'Anika jewelry product catalog displayed on a laptop',
      className: 'works-media-bottom-right',
    },
  ];

  return (
    <section className={`works-section${showIntro ? ' has-intro' : ''}`} id="work">
      {showIntro && (
        <div className="works-intro">
          <img
            className="works-intro-mark"
            src="/genlab/Genlab.png"
            alt="GenLab logo"
          />
          <div className="works-intro-content">
            <h2 className="works-intro-title">
              Curated <em>design</em>
              <br />
              <em>work</em> <span aria-hidden="true">→</span>
              <br />
              that works
            </h2>
            <p className="works-intro-description">
              Real products, shipped for real teams. Case studies, not mood boards.
            </p>
          </div>
          <span className="works-intro-scroll">Scroll to explore</span>
        </div>
      )}

      <div className="works-inner" id="anika">
        <div className="works-header">
          <div className="works-header-left">
            <span className="works-tag">E-commerce</span>
            <h2 className="works-title">Anika</h2>
          </div>
          <a
            href="https://www.anikafashion.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="works-link-view"
          >
            <span>View project</span>
            <span className="works-arrow">↗</span>
          </a>
        </div>

        <div className="works-media-grid">
          {projectImages.map(({ src, alt, className }) => (
            <div className={`works-media-card ${className}`} key={src}>
              <img src={src} alt={alt} className="works-img" loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
