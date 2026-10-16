import React, { useState, useEffect } from 'react';
import HeroShader from './HeroShader';

function SplitText({ text, startDelay = 0, staggerMs = 30 }) {
  return (
    <span className="split-text-line">
      {text.split('').map((char, index) => (
        <span key={index} className="char-mask">
          <span
            className="char-rise"
            style={{ animationDelay: `${startDelay + index * staggerMs}ms` }}
          >
            {char === ' ' ? '\u00A0' : char}
          </span>
        </span>
      ))}
    </span>
  );
}

function ScrambleText({ text, delay = 950, duration = 1100 }) {
  const [currentText, setCurrentText] = useState('');
  const chars = 'abcdefghijklmnopqrstuvwxyz';

  useEffect(() => {
    let timeoutId;
    let animFrame;
    let startTimestamp;

    timeoutId = setTimeout(() => {
      startTimestamp = performance.now();

      const tick = (now) => {
        const elapsed = now - startTimestamp;
        const progress = Math.min(1, elapsed / duration);
        const revealedCount = Math.floor(progress * text.length);

        let output = text.slice(0, revealedCount);
        for (let i = revealedCount; i < text.length; i++) {
          output += chars[Math.floor(Math.random() * chars.length)];
        }

        setCurrentText(output);

        if (progress < 1) {
          animFrame = requestAnimationFrame(tick);
        } else {
          setCurrentText(text);
        }
      };

      animFrame = requestAnimationFrame(tick);
    }, delay);

    return () => {
      clearTimeout(timeoutId);
      cancelAnimationFrame(animFrame);
    };
  }, [text, delay, duration]);

  return (
    <span className="scramble-span">
      {currentText || '\u00A0'.repeat(text.length)}
    </span>
  );
}

export default function Hero() {
  return (
    <section className="hero-container" id="home">
      {/* Interactive WebGL Fluted Glass Fluid Shader */}
      <HeroShader />

      {/* Atmospheric Mist & Gradient Fade at bottom */}
      <div className="hero-bottom-fade" aria-hidden="true" />
      <div className="hero-bottom-highlight" aria-hidden="true" />

      {/* Top Centered Logo */}
      <a href="#home" className="hero-logo-wrap" aria-label="Home">
        <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M56.6385 1.4777C59.1351 1.08934 60.5851 3.72204 59.1301 6.00157L46.2438 26.1905C45.8608 26.7905 45.8608 27.5179 46.2438 27.9988L59.1301 44.1786C60.5851 46.0055 59.1351 49.0893 56.6385 49.4777L4.06616 57.6556C2.37277 57.919 1 56.7433 1 55.0295V13.2356C1 11.5218 2.37277 9.91903 4.06616 9.65561L56.6385 1.4777ZM6.65323 12.8411C5.80653 12.9728 5.12015 13.7742 5.12015 14.631V53.9038L19.9718 51.5935V12.3208C19.9718 11.4639 19.2855 10.876 18.4388 11.0078L6.65323 12.8411Z"
            fill="white"
          />
        </svg>
      </a>

      {/* Hero Headline Typography - Animated in Order */}
      <div className="hero-headline-wrap">
        {/* Line 1: From Wireframes (character rise) */}
        <div className="hero-row row-1">
          <h1 className="hero-text-sans">
            <SplitText text="From Wireframes" startDelay={100} staggerMs={28} />
          </h1>
        </div>

        {/* Line 2: to Wow's (indented, character rise) */}
        <div className="hero-row row-2">
          <span className="hero-text-display">
            <SplitText text="to Wow’s" startDelay={450} staggerMs={35} />
          </span>
        </div>

        {/* Line 3: elevating UX to the (character rise) */}
        <div className="hero-row row-3">
          <span className="hero-text-sans">
            <SplitText text="elevating UX to the" startDelay={800} staggerMs={28} />
          </span>
        </div>

        {/* Line 4: remarkable (scramble text) + Book a call (pop-in) */}
        <div className="hero-row row-4">
          <span className="hero-text-display">
            <ScrambleText text="remarkable" delay={1150} duration={1100} />
          </span>
          <a
            href="#talk"
            className="hero-cta-pill cta-pop-in"
            aria-label="Book a call"
          >
            <span>Book a call</span>
          </a>
        </div>
      </div>

      {/* Two Informational Subtitles */}
      <div className="hero-taglines-wrap taglines-blur-in">
        <p className="hero-tagline-col tagline-left">
          Product strategy and design, done<br />
          by the person you actually talk to
        </p>

        <p className="hero-tagline-col tagline-right">
          For founders who need it<br />
          shipped, not workshopped
        </p>
      </div>

    </section>
  );
}
