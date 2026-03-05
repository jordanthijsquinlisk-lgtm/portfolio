import { useEffect, useRef } from 'react';
import { gsap, canAnimate } from '../animations';

export default function SplashScreen({ onDone, onExit }) {
  const overlayRef = useRef(null);
  const gradientWrapRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    if (!canAnimate()) {
      onExit();
      onDone();
      return;
    }

    // Start gradient fully clipped — hidden below the bottom edge
    gsap.set(gradientWrapRef.current, { clipPath: 'inset(100% 0 0 0)' });

    const tl = gsap.timeline();

    tl.to(gradientWrapRef.current, {
        clipPath: 'inset(0% 0 0 0)',
        duration: 1.8,
        ease: 'power2.inOut',
        delay: 0.4,
      })
      .to(contentRef.current, {
        opacity: 0,
        duration: 0.5,
        ease: 'power2.in',
      }, '-=0.5')
      .add(() => onExit())
      .to(overlayRef.current, {
        opacity: 0,
        duration: 0.8,
        ease: 'power2.inOut',
        onComplete: onDone,
      }, '+=0.1');

    return () => tl.kill();
  }, [onDone, onExit]);

  return (
    <div
      ref={overlayRef}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 100,
        background: 'var(--color-primary)',
        pointerEvents: 'none',
      }}
    >
      {/* CSS gradient — rises from the bottom via clip-path */}
      <div
        ref={gradientWrapRef}
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
          background: `
            radial-gradient(ellipse 110% 65% at 5% 105%, #004CC1 0%, rgba(0,76,193,0.65) 22%, rgba(0,76,193,0.18) 48%, transparent 68%),
            radial-gradient(ellipse 65% 45% at 102% -5%, rgba(0,76,193,0.14) 0%, transparent 52%),
            #FFF8EB
          `,
        }}
      />

      {/* Logo + name — fades as gradient fills the screen */}
      <div
        ref={contentRef}
        style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 32,
          zIndex: 1,
        }}
      >
        <img
          src="/logo.svg"
          alt=""
          style={{ width: 120, height: 120, objectFit: 'contain' }}
        />
        <span style={{
          fontFamily: 'var(--font-display)',
          fontSize: 64,
          fontStyle: 'italic',
          fontWeight: 400,
          color: 'var(--color-text)',
          letterSpacing: '-0.02em',
        }}>
          Jordan Quinlisk
        </span>
      </div>
    </div>
  );
}
