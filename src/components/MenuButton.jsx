import { useRef } from 'react';
import { gsap, canAnimate } from '../animations';

export default function MenuButton({ open, onToggle }) {
  const btnRef = useRef(null);

  function handleMouseDown() {
    if (canAnimate()) {
      gsap.to(btnRef.current, { scale: 0.88, duration: 0.1, ease: 'power2.in' });
    }
  }

  function handleMouseUp() {
    if (canAnimate()) {
      gsap.to(btnRef.current, { scale: 1, duration: 0.5, ease: 'elastic.out(1, 0.4)' });
    }
    onToggle();
  }

  function handleMouseLeave() {
    if (canAnimate()) {
      gsap.to(btnRef.current, { scale: 1, duration: 0.3, ease: 'power2.out' });
    }
  }

  return (
    <button
      ref={btnRef}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
      aria-label="Toggle menu"
      style={{
        width: 32,
        height: 20,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        cursor: 'pointer',
        background: 'none',
        border: 'none',
        padding: 0,
        flexShrink: 0,
        zIndex: 10,
        position: 'relative',
        willChange: 'transform',
      }}
    >
      <span style={{
        display: 'block',
        width: '100%',
        height: 2,
        background: 'var(--color-text)',
        borderRadius: 2,
        transformOrigin: 'center',
        transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
        transform: open ? 'translateY(9px) rotate(45deg)' : 'none',
      }} />
      <span style={{
        display: 'block',
        width: '100%',
        height: 2,
        background: 'var(--color-text)',
        borderRadius: 2,
        transition: 'opacity 0.2s ease',
        opacity: open ? 0 : 1,
      }} />
      <span style={{
        display: 'block',
        width: '100%',
        height: 2,
        background: 'var(--color-text)',
        borderRadius: 2,
        transformOrigin: 'center',
        transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
        transform: open ? 'translateY(-9px) rotate(-45deg)' : 'none',
      }} />
    </button>
  );
}
