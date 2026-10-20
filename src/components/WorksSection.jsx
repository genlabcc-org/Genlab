import React from 'react';

export default function WorksSection({ showIntro = true }) {
  const projects = [
    {
      title: 'Anika',
      tag: 'E-commerce',
      id: 'anika',
      link: 'https://www.anikafashion.in/',
      images: [
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
      ],
    },
    {
      title: 'Faywalk',
      tag: 'Fashion',
      id: 'faywalk',
      images: [
        {
          src: '/assets/works/genlab-ai-forge/fay walk 1.png',
          alt: 'Faywalk project showcase image 1',
          className: 'works-media-main',
        },
        {
          src: '/assets/works/genlab-ai-forge/faywalk2.png',
          alt: 'Faywalk project showcase image 2',
          className: 'works-media-side',
        },
        {
          src: '/assets/works/genlab-ai-forge/faywalk 3.png',
          alt: 'Faywalk project showcase image 3',
          className: 'works-media-bottom-left',
        },
        {
          src: '/assets/works/genlab-ai-forge/faywalk 4.png',
          alt: 'Faywalk project showcase image 4',
          className: 'works-media-bottom-center',
        },
        {
          src: '/assets/works/genlab-ai-forge/faywwalk 5.png',
          alt: 'Faywalk project showcase image 5',
          className: 'works-media-bottom-right',
        },
      ],
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

      {projects.map(({ title, tag, id, link, images }) => (
        <div className="works-inner" id={id} key={id}>
          <div className="works-header">
            <div className="works-header-left">
              <span className="works-tag">{tag}</span>
              <h2 className="works-title">{title}</h2>
            </div>
            {link && (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="works-link-view"
              >
                <span>View project</span>
                <span className="works-arrow">↗</span>
              </a>
            )}
          </div>

          <div className="works-media-grid">
            {images.map(({ src, alt, className }) => (
              <div className={`works-media-card ${className}`} key={src}>
                <img src={src} alt={alt} className="works-img" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
