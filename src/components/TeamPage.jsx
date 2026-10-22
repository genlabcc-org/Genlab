import React from 'react';
import { TEAM_MEMBERS } from '../data/teamMembers';
import TeamLanyardCard from './TeamLanyardCard';
import GenLabLogo from './GenLabLogo';

export default function TeamPage({ onBackToPortfolio }) {
  return (
    <div className="reference-team-page">
      {/* Background Architectural Studio Backdrop (Fixed) */}
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
            <span>OUR TEAM ({TEAM_MEMBERS.length})</span>
            <span className="green-bullet">●</span>
          </div>
          <h1 className="reference-team-title">
            Meet the crew<span className="title-green-dot">.</span>
          </h1>
          <p className="reference-team-subtitle">
            All {TEAM_MEMBERS.length} creators, designers, and AI architects behind GenLab.
          </p>
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

      {/* Full Team Hanging Lanyard Cards Stage */}
      <div className="reference-team-stage">
        <div className="reference-team-grid">
          {TEAM_MEMBERS.map((member, index) => (
            <TeamLanyardCard
              key={member.id}
              member={member}
              priority={index < 3}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

