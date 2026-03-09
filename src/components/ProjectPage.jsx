import { useRef, useLayoutEffect, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { gsap, canAnimate } from '../animations';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useTransition } from '../context/TransitionContext';
import ProjectNav from './ProjectNav';
import { ArrowLeft, ArrowRight, ArrowExternal } from './Icons';
import '../pages/ResiPage.css';

function MetaRow({ label, value, href }) {
  return (
    <div className="meta-row">
      <span className="meta-label">{label}</span>
      <span className="meta-value">
        {href
          ? (
            <a href={href} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}>
              View <ArrowExternal style={{ width: 11, height: 11 }} />
            </a>
          )
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
  const containerRef  = useRef(null);
  const scrollBodyRef = useRef(null);
  const { navigateTo } = useTransition() ?? {};

  function scrollBodyTop() {
    scrollBodyRef.current?.scrollTo({ top: 0, behavior: 'instant' });
    window.scrollTo({ top: 0, behavior: 'instant' });
  }

  function handleBack(e) {
    e.preventDefault();
    navigateTo?.('/');
  }

  // Entrance animation (unchanged)
  useLayoutEffect(() => {
    if (!canAnimate()) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.from(containerRef.current, { y: 40, opacity: 0, duration: 0.7 })
        .from('.resi-nav',    { y: -60, opacity: 0, duration: 0.5 }, '-=0.35')
        .from('.proj-eyebrow',{ y: 14,  opacity: 0, duration: 0.4 }, '-=0.2')
        .from('.proj-title',  { y: 30,  opacity: 0, duration: 0.55 }, '-=0.25')
        .from('.proj-lead',   { y: 16,  opacity: 0, duration: 0.45 }, '-=0.3')
        .from('.gallery-item',{ y: 24,  opacity: 0, duration: 0.5, stagger: 0.08 }, '-=0.2')
        .from('.proj-body',   { y: 16,  opacity: 0, duration: 0.4 }, '-=0.15')
        .from('.meta-row',    { y: 12,  opacity: 0, duration: 0.35, stagger: 0.06 }, '-=0.2');
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Scroll parallax on hero title (runs after entrance)
  useEffect(() => {
    if (!canAnimate()) return;

    const ctx = gsap.context(() => {
      gsap.to('.proj-title', {
        y: 50,
        ease: 'none',
        scrollTrigger: {
          trigger: '.proj-hero',
          start: 'top top',
          end: 'bottom top',
          scrub: 1.5,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="resi-container" ref={containerRef}>

      {/* Nav */}
      <header className="resi-nav">
        <Link to="/" className="resi-back" onClick={handleBack}>
          <ArrowLeft style={{ width: 14, height: 14 }} />
          Back
        </Link>
        <div className="resi-nav__logo">
          <img src="/logo.svg" alt="Jordan Quinlisk" style={{ width: 28, height: 28, objectFit: 'contain', flexShrink: 0 }} />
          <span>Jordan Quinlisk</span>
        </div>
        <div className="resi-nav__tag">{tag}</div>
      </header>

      {/* Scrollable content area */}
      <div className="proj-scroll-body" ref={scrollBodyRef}>

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

        {/* Desktop project nav */}
        <ProjectNav prev={prev} next={next} />

        {/* Footer */}
        <footer className="resi-footer">
          <span>© 2025 Jordan Quinlisk</span>
          <Link to="/" className="resi-footer__back" onClick={handleBack} style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
            <ArrowLeft style={{ width: 12, height: 12 }} /> All projects
          </Link>
        </footer>

      </div>

      {/* Mobile bottom nav */}
      {(prev || next) && (
        <nav className="project-nav-mobile">
          {prev ? (
            <Link
              to={prev.href}
              className="proj-nav-mob__link"
              onClick={(e) => { e.preventDefault(); scrollBodyTop(); navigateTo?.(prev.href); }}
            >
              <ArrowLeft style={{ width: 12, height: 12, flexShrink: 0 }} />
              <div className="proj-nav-mob__text">
                <span className="proj-nav-mob__label">Previous</span>
                <span className="proj-nav-mob__title">{prev.title}</span>
              </div>
            </Link>
          ) : <div />}
          {next ? (
            <Link
              to={next.href}
              className="proj-nav-mob__link proj-nav-mob__link--right"
              onClick={(e) => { e.preventDefault(); scrollBodyTop(); navigateTo?.(next.href); }}
            >
              <div className="proj-nav-mob__text proj-nav-mob__text--right">
                <span className="proj-nav-mob__label">Next</span>
                <span className="proj-nav-mob__title">{next.title}</span>
              </div>
              <ArrowRight style={{ width: 12, height: 12, flexShrink: 0 }} />
            </Link>
          ) : <div />}
        </nav>
      )}

    </div>
  );
}
