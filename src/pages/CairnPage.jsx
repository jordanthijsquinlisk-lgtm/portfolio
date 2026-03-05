import { useRef, useLayoutEffect } from 'react';
import { Link } from 'react-router-dom';
import { gsap, canAnimate } from '../animations';
import './ResiPage.css';

function ImageCell({ label, accent }) {
  return (
    <div className="bento-image" style={{ '--accent': accent }}>
      <div className="bento-image__inner" />
      <span className="bento-image__label">{label}</span>
    </div>
  );
}

function BentoCell({ className, children, style }) {
  const cellRef = useRef(null);

  function handleMouseEnter() {
    if (canAnimate()) {
      gsap.to(cellRef.current, { y: -4, duration: 0.25, ease: 'power2.out' });
    }
  }

  function handleMouseLeave() {
    if (canAnimate()) {
      gsap.to(cellRef.current, { y: 0, duration: 0.4, ease: 'elastic.out(1, 0.5)' });
    }
  }

  return (
    <div
      ref={cellRef}
      className={`bento-cell ${className || ''}`}
      style={style}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </div>
  );
}

export default function CairnPage() {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    if (!canAnimate()) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.from('.resi-container', { y: 40, opacity: 0, duration: 0.7 })
        .from('.resi-nav', { y: -60, opacity: 0, duration: 0.5 }, '-=0.35')
        .from('.resi-eyebrow', { y: 14, opacity: 0, duration: 0.4 }, '-=0.2')
        .from('.resi-title', { y: 30, opacity: 0, duration: 0.55 }, '-=0.25')
        .from('.resi-blurb', { y: 16, opacity: 0, duration: 0.45 }, '-=0.3')
        .from('.bento-cell', { y: 24, opacity: 0, duration: 0.5, stagger: 0.06 }, '-=0.2');
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="resi-container" ref={containerRef}>

      <header className="resi-nav">
        <Link to="/" className="resi-back">
          <svg viewBox="0 0 16 16" style={{ width: 14, height: 14, stroke: 'currentColor', fill: 'none', strokeWidth: 1.8 }}>
            <path d="M10 3L5 8l5 5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Back
        </Link>
        <div className="resi-nav__logo">
          <img src="/logo.svg" alt="Jordan Quinlisk" style={{ width: 22, height: 22, objectFit: 'contain', flexShrink: 0 }} />
          <span>Jordan Quinlisk</span>
        </div>
        <div className="resi-nav__tag">Side Project</div>
      </header>

      <section className="resi-hero">
        <div className="resi-hero__left">
          <p className="resi-eyebrow">2024</p>
          <h1 className="resi-title">Cairn</h1>
        </div>
        <div className="resi-hero__right">
          <p className="resi-blurb">
            A social photo diary app where friends share moments in a quiet, structured
            grid — no likes, no algorithms, just a running record of what you've seen
            and done. Built with Next.js and Supabase, deployed on Vercel.
          </p>
        </div>
      </section>

      <section className="resi-bento">

        <BentoCell className="bento-cell--hero">
          <ImageCell label="Feed view" accent="rgba(60,90,130,0.5)" />
        </BentoCell>

        <BentoCell className="bento-cell--info">
          <div className="info-block">
            <p className="info-label">Role</p>
            <p className="info-value">Designer &amp; Developer</p>
          </div>
          <div className="info-block">
            <p className="info-label">Stack</p>
            <p className="info-value">Next.js, Supabase, TypeScript, Tailwind CSS</p>
          </div>
          <div className="info-block">
            <p className="info-label">Scope</p>
            <p className="info-value">Full-stack app, auth, image upload, social feed</p>
          </div>
          <div className="info-block">
            <p className="info-label">Year</p>
            <p className="info-value">2024</p>
          </div>
        </BentoCell>

        <BentoCell className="bento-cell--img-sm">
          <ImageCell label="Profile view" accent="rgba(40,70,110,0.5)" />
        </BentoCell>

        <BentoCell className="bento-cell--img-sm">
          <ImageCell label="Upload flow" accent="rgba(50,80,120,0.55)" />
        </BentoCell>

        <BentoCell className="bento-cell--copy">
          <p className="copy-heading">What I built</p>
          <p className="copy-body">
            Cairn is a reaction to social media that's too loud. I designed and built a
            mobile-optimised app where you post one photo at a time — no captions required,
            no engagement metrics. Posts live in a chronological bento grid on each
            user's profile. Auth, image storage, and the social graph are all handled
            through Supabase, with the frontend built in Next.js and deployed to Vercel.
          </p>
        </BentoCell>

        <BentoCell className="bento-cell--img-sm">
          <ImageCell label="Mobile view" accent="rgba(30,60,100,0.6)" />
        </BentoCell>

        <BentoCell className="bento-cell--links">
          <p className="info-label" style={{ marginBottom: 20 }}>Links</p>
          <div className="links-list">
            <a href="#" className="project-link">
              <span>Live app</span>
              <svg viewBox="0 0 16 16" style={{ width: 12, height: 12, stroke: 'currentColor', fill: 'none', strokeWidth: 1.8 }}>
                <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a href="#" className="project-link">
              <span>GitHub</span>
              <svg viewBox="0 0 16 16" style={{ width: 12, height: 12, stroke: 'currentColor', fill: 'none', strokeWidth: 1.8 }}>
                <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </BentoCell>

      </section>

      <footer className="resi-footer">
        <span>&#169; 2025 Jordan Quinlisk</span>
        <Link to="/" className="resi-footer__back">← All projects</Link>
      </footer>

    </div>
  );
}
