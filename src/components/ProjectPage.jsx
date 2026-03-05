import { useRef, useLayoutEffect } from 'react';
import { Link } from 'react-router-dom';
import { gsap, canAnimate } from '../animations';
import ProjectNav from './ProjectNav';
import '../pages/ResiPage.css';

function MetaRow({ label, value, href }) {
  return (
    <div className="meta-row">
      <span className="meta-label">{label}</span>
      <span className="meta-value">
        {href
          ? <a href={href} target="_blank" rel="noopener noreferrer">View ↗</a>
          : value
        }
      </span>
    </div>
  );
}

export default function ProjectPage({
  tag, year, title, description, body,
  images = [], role, stack, scope,
  links = [], prev, next,
}) {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    if (!canAnimate()) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.from(containerRef.current, { y: 40, opacity: 0, duration: 0.7 })
        .from('.resi-nav', { y: -60, opacity: 0, duration: 0.5 }, '-=0.35')
        .from('.proj-eyebrow', { y: 14, opacity: 0, duration: 0.4 }, '-=0.2')
        .from('.proj-title', { y: 30, opacity: 0, duration: 0.55 }, '-=0.25')
        .from('.proj-lead', { y: 16, opacity: 0, duration: 0.45 }, '-=0.3')
        .from('.gallery-item', { y: 24, opacity: 0, duration: 0.5, stagger: 0.08 }, '-=0.2')
        .from('.proj-body', { y: 16, opacity: 0, duration: 0.4 }, '-=0.15')
        .from('.meta-row', { y: 12, opacity: 0, duration: 0.35, stagger: 0.06 }, '-=0.2');
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="resi-container" ref={containerRef}>

      {/* Nav */}
      <header className="resi-nav">
        <Link to="/" className="resi-back">
          <svg viewBox="0 0 16 16" style={{ width: 14, height: 14, stroke: 'currentColor', fill: 'none', strokeWidth: 1.8 }}>
            <path d="M10 3L5 8l5 5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Back
        </Link>
        <div className="resi-nav__logo">
          <img src="/logo.svg" alt="Jordan Quinlisk" style={{ width: 28, height: 28, objectFit: 'contain', flexShrink: 0 }} />
          <span>Jordan Quinlisk</span>
        </div>
        <div className="resi-nav__tag">{tag}</div>
      </header>

      {/* Hero */}
      <section className="proj-hero">
        <p className="proj-eyebrow">{year}</p>
        <h1 className="proj-title">{title}</h1>
        <p className="proj-lead">{description}</p>
      </section>

      {/* Gallery */}
      {images.length > 0 && (
        <section className="proj-gallery">
          {images.map((img, i) => (
            <div
              key={i}
              className="gallery-item"
              style={{ '--gallery-accent': img.accent }}
            >
              {img.src ? (
                <img
                  src={img.src}
                  alt={img.label}
                  style={{ height: img.height || 360, objectPosition: img.position || 'center' }}
                />
              ) : (
                <div className="gallery-item__placeholder" style={{ height: img.height || 360 }} />
              )}
              <div className="gallery-overlay">
                <span className="gallery-label">{img.label}</span>
              </div>
            </div>
          ))}
        </section>
      )}

      {/* Body */}
      {body && (
        <section className="proj-body">
          <p className="proj-body__heading">What I built</p>
          <p className="proj-body__text">{body}</p>
        </section>
      )}

      {/* Meta */}
      <section className="proj-meta">
        {role  && <MetaRow label="Role"  value={role} />}
        {stack && <MetaRow label="Stack" value={stack} />}
        {scope && <MetaRow label="Scope" value={scope} />}
        {year  && <MetaRow label="Year"  value={year} />}
        {links.map(link => (
          <MetaRow key={link.label} label={link.label} href={link.href} />
        ))}
      </section>

      <ProjectNav prev={prev} next={next} />

      {/* Footer */}
      <footer className="resi-footer">
        <span>© 2025 Jordan Quinlisk</span>
        <Link to="/" className="resi-footer__back">← All projects</Link>
      </footer>

    </div>
  );
}
