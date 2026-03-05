import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap, canAnimate } from '../animations';
import { ArrowRight } from './Icons';

export default function MetricCard({ icon, number, title, description, borderRight = true, href }) {
  const [hovered, setHovered] = useState(false);
  const cardRef = useRef(null);

  function handleMouseEnter() {
    setHovered(true);
    if (canAnimate()) {
      gsap.to(cardRef.current, { y: -4, duration: 0.25, ease: 'power2.out' });
    }
  }

  function handleMouseLeave() {
    setHovered(false);
    if (canAnimate()) {
      gsap.to(cardRef.current, { y: 0, scale: 1, filter: 'brightness(1)', duration: 0.4, ease: 'elastic.out(1, 0.5)' });
    }
  }

  function handleMouseDown() {
    if (canAnimate()) {
      gsap.to(cardRef.current, { scale: 0.96, filter: 'brightness(0.85)', duration: 0.1, ease: 'power2.in' });
    }
  }

  function handleMouseUp() {
    if (canAnimate()) {
      gsap.to(cardRef.current, { scale: 1, filter: 'brightness(1)', duration: 0.6, ease: 'elastic.out(1, 0.5)' });
    }
  }

  const inner = (
    <>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: 30,
      }}>
        <div style={{ width: 32, height: 32, flexShrink: 0, opacity: 0.85 }}>
          {icon}
        </div>
        <span className="metric-card__number" style={{
          fontFamily: 'var(--font-display)',
          fontSize: 40,
          fontWeight: 400,
          lineHeight: 1.1,
          letterSpacing: '-0.02em',
          fontStyle: 'italic',
          textAlign: 'right',
        }}>
          {number}
        </span>
      </div>
      <div>
        <h3 style={{
          fontFamily: 'var(--font-body)',
          fontSize: 15,
          fontWeight: 600,
          marginBottom: 8,
          letterSpacing: '0.04em',
          textTransform: 'uppercase',
        }}>
          {title}
        </h3>
        <p style={{
          fontFamily: 'var(--font-body)',
          fontSize: 14,
          opacity: 0.75,
          lineHeight: 1.5,
          fontWeight: 300,
        }}>
          {description}
        </p>
      </div>
      {href && (
        <div style={{
          marginTop: 20,
          display: 'flex',
          alignItems: 'center',
          gap: 6,
          opacity: hovered ? 0.9 : 0.4,
          transition: 'opacity 0.2s ease',
        }}>
          <span style={{
            fontFamily: 'var(--font-body)',
            fontSize: 11,
            fontWeight: 600,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
          }}>
            View project
          </span>
          <ArrowRight style={{ width: 12, height: 12 }} />
        </div>
      )}
    </>
  );

  const sharedStyle = {
    padding: '40px',
    borderRight: borderRight ? '1px solid var(--color-line)' : 'none',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    position: 'relative',
    transition: 'background-color 0.3s ease',
    backgroundColor: hovered ? 'rgba(0, 76, 193, 0.06)' : 'transparent',
    minHeight: 200,
    textDecoration: 'none',
    color: 'var(--color-text)',
    willChange: 'transform',
  };

  const handlers = {
    ref: cardRef,
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
    onMouseDown: handleMouseDown,
    onMouseUp: handleMouseUp,
  };

  if (href) {
    return (
      <Link
        to={href}
        className="metric-card"
        {...handlers}
        style={{ ...sharedStyle, cursor: 'pointer' }}
      >
        {inner}
      </Link>
    );
  }

  return (
    <article
      className="metric-card"
      {...handlers}
      style={{ ...sharedStyle, cursor: 'default' }}
    >
      {inner}
    </article>
  );
}
