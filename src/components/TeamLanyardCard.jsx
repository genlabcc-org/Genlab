import React, { useState, useEffect, useRef } from 'react';
import Lanyard from './Lanyard';
import { getBadgeTextures } from '../utils/badgeCanvas';

export default function TeamLanyardCard({ member, priority = false }) {
  const [inView, setInView] = useState(priority);
  const [textures, setTextures] = useState(null);
  const cardRef = useRef(null);

  useEffect(() => {
    if (priority) {
      setInView(true);
      return;
    }

    const el = cardRef.current;
    if (!el || typeof IntersectionObserver === 'undefined') {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: '350px 0px 350px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [priority]);

  useEffect(() => {
    if (!inView) return;
    let active = true;
    getBadgeTextures(member).then((res) => {
      if (active) setTextures(res);
    });
    return () => {
      active = false;
    };
  }, [inView, member]);

  return (
    <div className="reference-grid-cell" ref={cardRef}>
      <div className="cell-lanyard-stage">
        {!textures && (
          <div className="cell-lanyard-placeholder" aria-hidden="true">
            <div className="cell-lanyard-shimmer" />
          </div>
        )}
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
            size={0.72}
            strapLength={0.3}
            strapWidth={0.62}
            gravity={1.0}
            damping={0.45}
            elasticity={0.5}
            breeze={0.06}
            interactive={true}
            intro={false}
          />
        )}
      </div>

      {/* Tiered Pedestal Base Display matching reference image */}
      <div className="cell-pedestal-base">
        <span className="pedestal-role">{member.role}</span>
        <span className="pedestal-name">{member.name}</span>
      </div>
    </div>
  );
}
