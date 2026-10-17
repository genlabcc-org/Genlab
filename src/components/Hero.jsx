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

      {/* Top Centered GenLab Logo */}
      <a href="#home" className="hero-logo-wrap" aria-label="GenLab Home">
        <svg viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '48px', height: '48px' }}>
          <path d="M14.6512 0C14.6512 1.85035 13.8794 3.62491 12.5055 4.9333C11.1317 6.2417 9.26845 6.97674 7.32558 6.97674C5.38272 6.97674 3.51943 6.2417 2.14561 4.9333C0.7718 3.62491 2.93364e-07 1.85035 0 1.05346e-06L14.6512 0Z" fill="#ffffff"/>
          <path d="M1.78814e-07 14.6512C1.78814e-07 12.8008 0.771801 11.0263 2.14561 9.71786C3.51943 8.40947 5.38272 7.67442 7.32558 7.67442C9.26845 7.67442 11.1317 8.40947 12.5055 9.71786C13.8794 11.0263 14.6512 12.8008 14.6512 14.6512L1.78814e-07 14.6512Z" fill="#ffffff"/>
          <path d="M15.3488 1.78814e-07C17.1992 1.78814e-07 18.9737 0.771801 20.2821 2.14561C21.5905 3.51943 22.3256 5.38272 22.3256 7.32558C22.3256 9.26845 21.5905 11.1317 20.2821 12.5055C18.9737 13.8794 17.1992 14.6512 15.3488 14.6512L15.3488 1.78814e-07Z" fill="#ffffff"/>
          <path d="M30 14.6512C28.1497 14.6512 26.3751 13.8794 25.0667 12.5055C23.7583 11.1317 23.0233 9.26845 23.0233 7.32558C23.0233 5.38272 23.7583 3.51943 25.0667 2.14561C26.3751 0.771801 28.1497 2.93364e-07 30 0V14.6512Z" fill="#ffffff"/>
          <path d="M0 15.3488C1.85035 15.3488 3.62491 16.1206 4.9333 17.4945C6.2417 18.8683 6.97674 20.7316 6.97674 22.6744C6.97674 24.6173 6.2417 26.4806 4.9333 27.8544C3.62491 29.2282 1.85035 30 1.05346e-06 30L0 15.3488Z" fill="#ffffff"/>
          <path d="M14.6512 30C12.8008 30 11.0263 29.2282 9.71786 27.8544C8.40946 26.4806 7.67442 24.6173 7.67442 22.6744C7.67442 20.7316 8.40946 18.8683 9.71786 17.4945C11.0263 16.1206 12.8008 15.3488 14.6512 15.3488L14.6512 30Z" fill="#ffffff"/>
          <path d="M30 15.3488C30 17.1992 29.2282 18.9737 27.8544 20.2821C26.4806 21.5905 24.6173 22.3256 22.6744 22.3256C20.7316 22.3256 18.8683 21.5905 17.4945 20.2821C16.1206 18.9737 15.3488 17.1992 15.3488 15.3488L30 15.3488Z" fill="#ffffff"/>
          <path d="M15.3488 30C15.3488 28.1497 16.1206 26.3751 17.4944 25.0667C18.8683 23.7583 20.7316 23.0233 22.6744 23.0233C24.6173 23.0233 26.4806 23.7583 27.8544 25.0667C29.2282 26.3751 30 28.1497 30 30H15.3488Z" fill="#ffffff"/>
        </svg>
      </a>

      {/* Hero Headline Typography - Animated in Order */}
      <div className="hero-headline-wrap">
        {/* Line 1 */}
        <div className="hero-row row-1">
          <h1 className="hero-text-sans">
            <SplitText text="World's First Gen Z" startDelay={100} staggerMs={28} />
          </h1>
        </div>

        {/* Line 2 */}
        <div className="hero-row row-2">
          <span className="hero-text-display">
            <SplitText text="& AI Studio" startDelay={450} staggerMs={35} />
          </span>
        </div>

        {/* Line 3 */}
        <div className="hero-row row-3">
          <span className="hero-text-sans">
            <SplitText text="autonomous growth for" startDelay={800} staggerMs={28} />
          </span>
        </div>

        {/* Line 4 */}
        <div className="hero-row row-4">
          <span className="hero-text-display">
            <ScrambleText text="genlab" delay={1150} duration={1100} />
          </span>
          <a
            href="https://chat.whatsapp.com/L0n2kNQfSbR3lwhmN5mNVJ"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-cta-pill cta-pop-in"
            aria-label="Join with us"
          >
            <span>Join with us</span>
          </a>
        </div>
      </div>

      {/* Two Informational Subtitles */}
      <div className="hero-taglines-wrap taglines-blur-in">
        <p className="hero-tagline-col tagline-left">
          A Gen Z team of strategists,<br />
          designers and AI builders
        </p>

        <p className="hero-tagline-col tagline-right">
          From India to the world ❤️<br />
          Turning ideas into real solutions
        </p>
      </div>

    </section>
  );
}
