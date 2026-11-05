import React, { useState, useEffect, useRef } from 'react';
import Lanyard from './Lanyard';
import { getBadgeTextures } from '../utils/badgeCanvas';

export default function TeamLanyardCard({ member, priority = false }) {
  const [inView, setInView] = useState(priority);
  const [hasEnteredView, setHasEnteredView] = useState(priority);
  const [textures, setTextures] = useState(null);
  const cardRef = useRef(null);

  useEffect(() => {
    const el = cardRef.current;
    if (!el || typeof IntersectionObserver === 'undefined') {
      setInView(true);
      setHasEnteredView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
        if (entry.isIntersecting) {
          setHasEnteredView(true);
        }
      },
      { rootMargin: '300px 0px 300px 0px', threshold: 0.01 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasEnteredView && !priority) return;
    let active = true;
    getBadgeTextures(member).then((res) => {
      if (active) setTextures(res);
    });
    return () => {
      active = false;
    };
  }, [hasEnteredView, priority, member]);

  return (
    <div className="reference-grid-cell" ref={cardRef}>
      {/* Radiant Blur Glow Backdrop */}
      <div className="cell-radiant-glow" aria-hidden="true" />

      <div className="cell-lanyard-stage">
        {inView && textures ? (
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
            strapLength={0.18}
            strapWidth={0.85}
            gravity={1.0}
            damping={0.45}
            elasticity={0.5}
            breeze={0}
            interactive={false}
            intro={false}
            canSpin={false}
          />
        ) : (
          <div className="cell-lanyard-placeholder cell-radiant-blur" aria-hidden="true">
            <div className="cell-radiant-blur-glow" />
            <span className="cell-lanyard-preview-clamp" />
            <span className="cell-lanyard-preview-ring" />
            <img
              src={member.cardImage}
              alt={member.name}
              className="cell-lanyard-static-preview"
              loading={priority ? 'eager' : 'lazy'}
              decoding="async"
              width="416"
              height="650"
            />
          </div>
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
