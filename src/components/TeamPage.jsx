import React, { useState, useEffect } from 'react';
import { TEAM_MEMBERS } from '../data/teamMembers';
import TeamLanyardCard from './TeamLanyardCard';
import GenLabLogo from './GenLabLogo';

export default function TeamPage({ onBackToPortfolio }) {
  const [pageIndex, setPageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const pageSize = 3;
  const totalPages = Math.ceil(TEAM_MEMBERS.length / pageSize);

  const currentMembers = TEAM_MEMBERS.slice(pageIndex * pageSize, pageIndex * pageSize + pageSize);

  const transitionToPage = React.useCallback((targetIndexOrFn) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setPageIndex(targetIndexOrFn);
      setTimeout(() => {
        setIsTransitioning(false);
      }, 50);
    }, 400);
  }, [isTransitioning]);

  // Automatically change team cards with a generous, smooth 6.5-second delay
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      transitionToPage((prev) => (prev < totalPages - 1 ? prev + 1 : 0));
    }, 6500);

    return () => clearInterval(timer);
  }, [totalPages, isPaused, transitionToPage]);

  const handlePrev = () => {
    transitionToPage((prev) => (prev > 0 ? prev - 1 : totalPages - 1));
  };

  const handleNext = () => {
    transitionToPage((prev) => (prev < totalPages - 1 ? prev + 1 : 0));
  };

  return (
    <div className="reference-team-page">
      {/* Background Architectural Studio Backdrop */}
      <div className="team-studio-backdrop" aria-hidden="true" />
      <div className="team-studio-overlay" aria-hidden="true" />

      {/* Frosted Glass Window Brand Watermark */}
      <div className="studio-glass-watermark" aria-hidden="true">
        <GenLabLogo size={130} color="rgba(255, 255, 255, 0.08)" />
      </div>

      {/* Top Centered GenLab Brand Logo - Click to return to Home */}
      <button
        type="button"
        onClick={onBackToPortfolio}
        className="team-top-logo-btn"
        aria-label="GenLab Home - Back to Home"
        title="GenLab - Back to Home"
      >
        <GenLabLogo size={46} color="#ffffff" className="team-center-logo-svg" />
      </button>

      {/* Reference Header Grid */}
      <div className="reference-team-header">
        {/* Left: Our Team + Meet the crew */}
        <div className="header-col-left">
          <div className="our-team-badge">
            <GenLabLogo size={14} color="#c2e600" className="badge-logo-glyph" />
            <span>OUR TEAM</span>
            <span className="green-bullet">●</span>
          </div>
          <h1 className="reference-team-title">
            Meet the crew<span className="title-green-dot">.</span>
          </h1>
          <p className="reference-team-subtitle">Team spirit you can feel.</p>
        </div>

        {/* Center Wall Logo Watermark using official GenLab SVG */}
        <div
          className="header-wall-brand is-clickable"
          onClick={onBackToPortfolio}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === 'Enter' && onBackToPortfolio()}
          aria-label="Back to Home"
          title="Back to Home"
        >
          <div className="wall-logo-glyph">
            <GenLabLogo size={42} color="currentColor" className="wall-pinwheel-svg" />
          </div>
          <div className="wall-brand-title">
            <span>GenLab</span>
            <span className="wall-star">✦</span>
          </div>
          <span className="wall-brand-subtitle">The Gen Z Creators' Space</span>
        </div>

        {/* Right: Green Rule & Mission Blurb */}
        <div className="header-col-right">
          <div className="right-green-bar" />
          <p className="mission-statement">
            A Gen Z team of strategists,<br />
            designers and AI builders<br />
            turning ideas into real solutions.
          </p>
        </div>
      </div>

      {/* 3-Column Hanging Lanyard Cards Stage */}
      <div
        className="reference-team-stage"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className={`reference-team-grid ${isTransitioning ? 'is-fading-out' : 'is-fading-in'}`}>
          {currentMembers.map((member, index) => (
            <TeamLanyardCard
              key={`${member.id}_p${pageIndex}`}
              member={member}
              priority={index < 3}
            />
          ))}
        </div>

        {/* Carousel Pagination Controls to explore all 11 teammates */}
        {totalPages > 1 && (
          <div className="team-carousel-controls">
            <button
              type="button"
              className="team-nav-arrow"
              onClick={handlePrev}
              aria-label="Previous team members"
              title="Previous team members"
            >
              ←
            </button>

            <div className="team-page-indicator">
              <span className="current-page">{String(pageIndex + 1).padStart(2, '0')}</span>
              <span className="page-slash">/</span>
              <span className="total-pages">{String(totalPages).padStart(2, '0')}</span>
            </div>

            <button
              type="button"
              className="team-nav-arrow"
              onClick={handleNext}
              aria-label="Next team members"
              title="Next team members"
            >
              →
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
