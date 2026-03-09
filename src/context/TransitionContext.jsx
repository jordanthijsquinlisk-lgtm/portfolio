import { createContext, useContext, useRef, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { gsap, canAnimate } from '../animations';

const TransitionContext = createContext(null);

export function TransitionProvider({ children }) {
  const overlayRef  = useRef(null);
  const navigate    = useNavigate();
  const location    = useLocation();
  const isFirst     = useRef(true);

  // Fade overlay OUT once the new route has mounted
  useEffect(() => {
    if (isFirst.current) { isFirst.current = false; return; }
    if (!canAnimate()) return;
    const el = overlayRef.current;
    gsap.to(el, {
      opacity: 0,
      duration: 0.38,
      ease: 'power2.out',
      delay: 0.05,
      onComplete: () => { el.style.pointerEvents = 'none'; },
    });
  }, [location.pathname]);

  function navigateTo(path) {
    if (path === location.pathname) return;
    if (!canAnimate()) { navigate(path); return; }

    const el = overlayRef.current;
    el.style.pointerEvents = 'all';
    gsap.to(el, {
      opacity: 1,
      duration: 0.22,
      ease: 'power2.in',
      onComplete: () => navigate(path),
    });
  }

  return (
    <TransitionContext.Provider value={{ navigateTo }}>
      {children}
      <div
        ref={overlayRef}
        aria-hidden="true"
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 98,
          background: 'var(--color-primary)',
          opacity: 0,
          pointerEvents: 'none',
        }}
      />
    </TransitionContext.Provider>
  );
}

export function useTransition() {
  return useContext(TransitionContext);
}
