import React, { useState, useEffect } from 'react';

const anikaImages = [
  {
    src: '/assets/works/genlab-ai-forge/anika3.webp',
    alt: 'Anika jewelry online store displayed on a laptop',
    className: 'works-media-main',
  },
  {
    src: '/assets/works/genlab-ai-forge/anika2.webp',
    alt: 'Anika mobile shopping experience',
    className: 'works-media-side',
  },
  {
    src: '/assets/works/genlab-ai-forge/anika1.webp',
    alt: 'Anika jewelry product page on a mobile phone',
    className: 'works-media-bottom-left',
  },
  {
    src: '/assets/works/genlab-ai-forge/anika4.webp',
    alt: 'Anika commerce analytics dashboard displayed on a laptop',
    className: 'works-media-bottom-center',
  },
  {
    src: '/assets/works/genlab-ai-forge/anika5.webp',
    alt: 'Anika jewelry product catalog displayed on a laptop',
    className: 'works-media-bottom-right',
  },
];

const faywalkImages = [
  {
    src: '/assets/works/genlab-ai-forge/fay-walk-1.webp',
    alt: 'Faywalk online store displayed on a laptop',
    className: 'works-media-main',
  },
  {
    src: '/assets/works/genlab-ai-forge/faywalk2.webp',
    alt: 'Faywalk mobile shopping experience on iPhone',
    className: 'works-media-side',
  },
  {
    src: '/assets/works/genlab-ai-forge/faywwalk-5.webp',
    alt: 'Faywalk product detail page on iPad',
    className: 'works-media-bottom-left',
  },
  {
    src: '/assets/works/genlab-ai-forge/faywalk-3.webp',
    alt: 'Faywalk commerce analytics dashboard on laptop',
    className: 'works-media-bottom-center',
  },
  {
    src: '/assets/works/genlab-ai-forge/faywalk-4.webp',
    alt: 'Faywalk product catalog management on laptop',
    className: 'works-media-bottom-right',
  },
];

const uidImages = [
  {
    src: '/assets/works/genlab-ai-forge/uid-laptop.webp',
    alt: 'Uncommon Institute of Design website on laptop',
    className: 'works-media-main',
  },
  {
    src: '/assets/works/genlab-ai-forge/uid-mobile.webp',
    alt: 'UID design engineer curriculum on iPhone',
    className: 'works-media-side',
  },
];

const invenzaImages = [
  {
    src: '/assets/works/genlab-ai-forge/invenza-laptop.webp',
    alt: 'Invenza Engineering industrial platform on laptop',
    className: 'works-media-main',
  },
  {
    src: '/assets/works/genlab-ai-forge/invenza-mobile.webp',
    alt: 'Invenza industrial projects delivered on mobile',
    className: 'works-media-side',
  },
];

const mark9Images = [
  {
    src: '/assets/works/genlab-ai-forge/mark9-laptop.webp',
    alt: 'MARK9 Branding & Design Studio portfolio on laptop',
    className: 'works-media-main',
  },
  {
    src: '/assets/works/genlab-ai-forge/mark9-mobile.webp',
    alt: 'MARK9 design collection mobile showcase',
    className: 'works-media-side',
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
    type: 'grid',
    images: uidImages,
  },
  {
    id: 'invensa',
    title: 'Invenza',
    category: 'website',
    tag: 'Website · Enterprise Intelligence',
    subtitle: 'Invensa Corporate Platform',
    description: 'Intelligent corporate platform pairing thoughtful design with real-time supply chain analytics and financial data visualizations.',
    link: 'https://mark9.cc',
    linkLabel: 'Visit website',
    urlDisplay: 'invensa.cc',
    type: 'grid',
    images: invenzaImages,
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
    type: 'grid',
    images: mark9Images,
  },
];

export default function WorksSection({ showIntro = true, showFilterNav = true, limit, onNavigate }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeLightbox, setActiveLightbox] = useState(null);

  useEffect(() => {
    if (!activeLightbox) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setActiveLightbox(null);
      if (e.key === 'ArrowRight') {
        setActiveLightbox((prev) => prev ? {
          ...prev,
          currentIndex: (prev.currentIndex + 1) % prev.images.length,
        } : null);
      }
      if (e.key === 'ArrowLeft') {
        setActiveLightbox((prev) => prev ? {
          ...prev,
          currentIndex: (prev.currentIndex - 1 + prev.images.length) % prev.images.length,
        } : null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeLightbox]);

  const displayedProjects = limit ? projects.slice(0, limit) : projects;

  const filteredProjects = displayedProjects.filter((p) => {
    if (activeCategory === 'all') return true;
    return p.category === activeCategory;
  });

  const countAll = displayedProjects.length;
  const countEcommerce = displayedProjects.filter((p) => p.category === 'ecommerce').length;
  const countWebsite = displayedProjects.filter((p) => p.category === 'website').length;

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

      {showFilterNav && (
        <div className="works-filter-nav">
          <div className="works-filter-pills" role="tablist" aria-label="Filter products by category">
            <button
              type="button"
              className={`works-filter-btn ${activeCategory === 'all' ? 'is-active' : ''}`}
              onClick={() => setActiveCategory('all')}
            >
              <span>All Works</span>
              <span className="filter-count">{countAll}</span>
            </button>
            <button
              type="button"
              className={`works-filter-btn ${activeCategory === 'ecommerce' ? 'is-active' : ''}`}
              onClick={() => setActiveCategory('ecommerce')}
            >
              <span>E-Commerce</span>
              <span className="filter-count">{countEcommerce}</span>
            </button>
            <button
              type="button"
              className={`works-filter-btn ${activeCategory === 'website' ? 'is-active' : ''}`}
              onClick={() => setActiveCategory('website')}
            >
              <span>Websites</span>
              <span className="filter-count">{countWebsite}</span>
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
      )}

      {/* Render Product List */}
      <div className="works-list">
        {filteredProjects.map((project) => (
          <div className="works-inner" id={project.id} key={project.id}>
            <div className="works-header">
              <span className="works-tag">{project.tag}</span>
              <div className="works-title-row">
                <h2 className="works-title">{project.title}</h2>
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
              {project.subtitle && (
                <p className="works-subtitle">{project.subtitle}</p>
              )}
              {project.description && (
                <p className="works-description-text">{project.description}</p>
              )}
            </div>

            {/* Media Grid */}
            {project.type === 'grid' && (
              <div className="works-media-grid">
                {project.images.map(({ src, alt, className }, idx) => (
                  <div
                    className={`works-media-card ${className}`}
                    key={src}
                    onClick={() => {
                      const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768;
                      const lightboxImages = isMobile ? project.images.slice(0, 2) : project.images;
                      setActiveLightbox({
                        images: lightboxImages,
                        currentIndex: Math.min(idx, lightboxImages.length - 1),
                        projectTitle: project.title,
                      });
                    }}
                    role="button"
                    tabIndex={0}
                    title="Click to view full image"
                    aria-label={`View full image of ${alt}`}
                  >
                    <img src={src} alt={alt} className="works-img" loading="lazy" decoding="async" />
                    <span className="works-media-zoom-hint" aria-hidden="true">
                      <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="11" cy="11" r="7" />
                        <line x1="21" y1="21" x2="16.65" y2="16.65" />
                        <line x1="11" y1="8" x2="11" y2="14" />
                        <line x1="8" y1="11" x2="14" y2="11" />
                      </svg>
                    </span>
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

        {limit && displayedProjects.length < projects.length && (
          <div className="works-view-all-wrap">
            <a
              href="/work"
              className="works-view-all-btn"
              onClick={(e) => {
                if (onNavigate) {
                  e.preventDefault();
                  onNavigate('work');
                }
              }}
            >
              <span>Explore all {projects.length} projects</span>
              <span aria-hidden="true">→</span>
            </a>
          </div>
        )}
      </div>

      {/* Full Image Lightbox Modal */}
      {activeLightbox && (
        <div
          className="works-lightbox-overlay"
          onClick={() => setActiveLightbox(null)}
          role="dialog"
          aria-modal="true"
        >
          <div className="works-lightbox-modal" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="works-lightbox-close"
              onClick={() => setActiveLightbox(null)}
              aria-label="Close full image view"
            >
              ✕
            </button>

            {activeLightbox.images.length > 1 && (
              <>
                <button
                  type="button"
                  className="works-lightbox-nav prev"
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveLightbox((prev) => ({
                      ...prev,
                      currentIndex: (prev.currentIndex - 1 + prev.images.length) % prev.images.length,
                    }));
                  }}
                  aria-label="Previous image"
                >
                  ‹
                </button>
                <button
                  type="button"
                  className="works-lightbox-nav next"
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveLightbox((prev) => ({
                      ...prev,
                      currentIndex: (prev.currentIndex + 1) % prev.images.length,
                    }));
                  }}
                  aria-label="Next image"
                >
                  ›
                </button>
              </>
            )}

            <div className="works-lightbox-img-wrap">
              <img
                src={activeLightbox.images[activeLightbox.currentIndex].src}
                alt={activeLightbox.images[activeLightbox.currentIndex].alt}
                className="works-lightbox-img"
              />
            </div>

            <div className="works-lightbox-footer">
              <span className="works-lightbox-title">
                <strong>{activeLightbox.projectTitle}</strong> · {activeLightbox.images[activeLightbox.currentIndex].alt}
              </span>
              {activeLightbox.images.length > 1 && (
                <span className="works-lightbox-counter">
                  {activeLightbox.currentIndex + 1} / {activeLightbox.images.length}
                </span>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
