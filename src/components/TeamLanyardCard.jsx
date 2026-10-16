import React, { useState, useEffect } from 'react';
import Lanyard from './Lanyard';
import { getBadgeTextures } from '../utils/badgeCanvas';

export default function TeamLanyardCard({ member }) {
  const [textures, setTextures] = useState(null);

  useEffect(() => {
    let active = true;
    getBadgeTextures(member).then((res) => {
      if (active) setTextures(res);
    });
    return () => {
      active = false;
    };
  }, [member]);

  return (
    <div className="reference-grid-cell">
      <div className="cell-lanyard-stage">
        {textures && (
          <Lanyard
            frontImage={textures.frontUrl}
            backImage={textures.backUrl}
            strapImage={textures.strapUrl}
            imageFit="cover"
            cardColor="#ffffff"
            orientation="portrait"
            finish="glossy"
            metal="silver"
            cornerRadius={0.2}
            size={0.7}
            strapLength={0.24}
            strapWidth={0.62}
            gravity={1.0}
            damping={0.45}
            elasticity={0.5}
            breeze={0.08}
            interactive={true}
            intro={false}
          />
        )}
      </div>

      <div className="cell-bottom-info">
        <span className="try-dragging-text">Try dragging</span>
        <span className="cell-member-title">{member.name} · {member.role}</span>
      </div>
    </div>
  );
}
