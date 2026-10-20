import React, { useState } from 'react';

export default function WorksSection({ showIntro = true }) {
  const [activeCategory, setActiveCategory] = useState('all');

  const anikaImages = [
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

  const faywalkImages = [
    {
      src: '/assets/works/genlab-ai-forge/fay walk 1.png',
      alt: 'Faywalk online store displayed on a laptop',
      className: 'works-media-main',
    },
    {
      src: '/assets/works/genlab-ai-forge/faywalk2.png',
      alt: 'Faywalk mobile shopping experience on iPhone',
      className: 'works-media-side',
    },
    {
      src: '/assets/works/genlab-ai-forge/faywwalk 5.png',
      alt: 'Faywalk product detail page on iPad',
      className: 'works-media-bottom-left',
    },
    {
      src: '/assets/works/genlab-ai-forge/faywalk 3.png',
      alt: 'Faywalk commerce analytics dashboard on laptop',
      className: 'works-media-bottom-center',
    },
    {
      src: '/assets/works/genlab-ai-forge/faywalk 4.png',
      alt: 'Faywalk product catalog management on laptop',
      className: 'works-media-bottom-right',
    },
  ];

  const projects = [
    {
      id: 'anika',
      title: 'Anika',
      category: 'ecommerce',
      tag: 'E-commerce',
      subtitle: 'Luxury Fine Jewelry & Curated Fashion Store',
      description: 'High-conversion online shopping experience with interactive collection showcases, seamless mobile catalog, and analytics.',
      link: 'https://www.anikafashion.in/',
      linkLabel: 'View project',
      type: 'grid',
      images: anikaImages,
    },
    {
      id: 'faywalk',
      title: 'Faywalk',
      category: 'ecommerce',
      tag: 'E-commerce',
      subtitle: 'Premium Apparel & Knitted Garments E-Commerce',
      description: 'High-performance digital store built for Faywalk, featuring full responsive catalog, fast product lookup, and commerce analytics.',
      link: 'https://www.faywalk.com/',
      linkLabel: 'View project',
      type: 'grid',
      images: faywalkImages,
    },
    {
      id: 'uid',
      title: 'UID',
      category: 'website',
      tag: 'Website · Design Institute',
      subtitle: 'Uncommon Institute of Design',
      description: 'Educational academy platform for Gen Z designers, visual engineers, and creators. Practical design-driven curriculum and community hub.',
      link: 'https://uid.mark9.cc/',
      linkLabel: 'Visit website',
      urlDisplay: 'uid.mark9.cc',
      type: 'browser',
      image: '/assets/works/uid-main.jpg',
      alt: 'Uncommon Institute of Design website showcase',
    },
    {
      id: 'invensa',
      title: 'Invensa',
      category: 'website',
      tag: 'Website · Enterprise Intelligence',
      subtitle: 'Invensa Corporate Platform',
      description: 'Intelligent corporate platform pairing thoughtful design with real-time supply chain analytics and financial data visualizations.',
      link: 'https://mark9.cc',
      linkLabel: 'Visit website',
      urlDisplay: 'invensa.cc',
      type: 'browser',
      image: '/assets/works/invensa-main.jpg',
      alt: 'Invensa platform website showcase',
    },
    {
      id: 'mark9',
      title: 'MARK9',
      category: 'website',
      tag: 'Website · Design Studio',
      subtitle: 'Branding, Design & Marketing Studio in Nagercoil',
      description: 'Iconic branding and creative studio website crafted with bold typography, high-impact visual identity portfolios, and editorial layouts.',
      link: 'https://mark9.cc/',
      linkLabel: 'Visit website',
      urlDisplay: 'mark9.cc',
      type: 'browser',
      image: '/assets/works/mark9-main.jpg',
      alt: 'MARK9 Branding & Design Studio website showcase',
    },
  ];

  const filteredProjects = projects.filter((p) => {
    if (activeCategory === 'all') return true;
    return p.category === activeCategory;
  });

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
              Work <em>we're</em>
              <br />
              <em>proud</em> of <span aria-hidden="true">→</span>
            </h2>
            <p className="works-intro-description">
              A few products we're proud of. Real problems, shipped solutions.
            </p>
          </div>
          <span className="works-intro-scroll">Scroll to explore</span>
        </div>
      )}

      {/* Product Filter & Jump Bar */}
      <div className="works-filter-nav">
        <div className="works-filter-pills" role="tablist" aria-label="Filter products by category">
          <button
            type="button"
            className={`works-filter-btn ${activeCategory === 'all' ? 'is-active' : ''}`}
            onClick={() => setActiveCategory('all')}
          >
            <span>All Works</span>
            <span className="filter-count">5</span>
          </button>
          <button
            type="button"
            className={`works-filter-btn ${activeCategory === 'ecommerce' ? 'is-active' : ''}`}
            onClick={() => setActiveCategory('ecommerce')}
          >
            <span>E-Commerce</span>
            <span className="filter-count">2</span>
          </button>
          <button
            type="button"
            className={`works-filter-btn ${activeCategory === 'website' ? 'is-active' : ''}`}
            onClick={() => setActiveCategory('website')}
          >
            <span>Websites</span>
            <span className="filter-count">3</span>
          </button>
        </div>

        {/* Quick jump anchor links */}
        <div className="works-jump-links" aria-label="Quick jump to project">
          {filteredProjects.map((p) => (
            <a key={p.id} href={`#${p.id}`} className="works-jump-pill">
              {p.title}
            </a>
          ))}
        </div>
      </div>

      {/* Render Product List */}
      <div className="works-list">
        {filteredProjects.map((project) => (
          <div className="works-inner" id={project.id} key={project.id}>
            <div className="works-header">
              <div className="works-header-left">
                <span className="works-tag">{project.tag}</span>
                <h2 className="works-title">{project.title}</h2>
                {project.subtitle && (
                  <p className="works-subtitle">{project.subtitle}</p>
                )}
                {project.description && (
                  <p className="works-description-text">{project.description}</p>
                )}
              </div>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="works-link-view"
                >
                  <span>{project.linkLabel}</span>
                  <span className="works-arrow">↗</span>
                </a>
              )}
            </div>

            {/* E-Commerce Media Grid (Anika & Faywalk) */}
            {project.type === 'grid' && (
              <div className="works-media-grid">
                {project.images.map(({ src, alt, className }) => (
                  <div className={`works-media-card ${className}`} key={src}>
                    <img src={src} alt={alt} className="works-img" loading="lazy" />
                  </div>
                ))}
              </div>
            )}

            {/* Website Browser Window Showcase (UID, Invensa, MARK9) */}
            {project.type === 'browser' && (
              <div className="works-browser-frame">
                <div className="works-browser-bar">
                  <div className="works-browser-dots">
                    <span className="browser-dot dot-red" />
                    <span className="browser-dot dot-yellow" />
                    <span className="browser-dot dot-green" />
                  </div>
                  <div className="works-browser-url">
                    <span className="browser-lock">🔒</span>
                    <span>https://{project.urlDisplay}</span>
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="works-browser-visit-btn"
                  >
                    <span>Launch</span>
                    <span aria-hidden="true">↗</span>
                  </a>
                </div>
                <div className="works-browser-content">
                  <img
                    src={project.image}
                    alt={project.alt}
                    className="works-browser-img"
                    loading="lazy"
                  />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
