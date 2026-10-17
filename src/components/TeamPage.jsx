import React from 'react';
import { TEAM_MEMBERS } from '../data/teamMembers';
import TeamLanyardCard from './TeamLanyardCard';

export default function TeamPage({ onBackToPortfolio }) {
  return (
    <div className="reference-team-page">
      {/* Subtle Floating Back Button */}
      <button
        type="button"
        onClick={onBackToPortfolio}
        className="reference-back-btn"
        aria-label="Back to Portfolio"
      >
        <span>← Back</span>
      </button>

      {/* Header section matching prompt */}
      <div className="reference-team-header">
        <h1 className="reference-team-title">Meet the crew.</h1>
        <p className="reference-team-subtitle">Team spirit you can feel.</p>
      </div>

      {/* 3-Column Grid of 3D Lanyard ID Cards */}
      <div className="reference-team-grid">
        {TEAM_MEMBERS.map((member, index) => (
          <TeamLanyardCard
            key={`${member.id}_v6`}
            member={member}
            priority={index < 3}
          />
        ))}
      </div>
    </div>
  );
}
