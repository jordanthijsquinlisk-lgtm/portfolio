import { useState, useRef, useLayoutEffect, useCallback } from 'react';
import { Routes, Route } from 'react-router-dom';
import { gsap, canAnimate } from './animations';
import './App.css';
import MenuButton from './components/MenuButton';
import MenuOverlay from './components/MenuOverlay';
import MetricCard from './components/MetricCard';
import SplashScreen from './components/SplashScreen';
import ResiPage from './pages/ResiPage';
import PinpointPage from './pages/PinpointPage';
import StandupPage from './pages/StandupPage';
import ReimaginePage from './pages/ReimaginePage';

const projects = [
  {
    number: 'Resi',
    title: 'Web Design',
    description: 'Marketing websites for apartment properties — built end-to-end in YOOtheme Pro & WordPress.',
    href: '/resi',
    icon: (
      <>
        <rect x="3" y="7" width="11" height="13" rx="1.5" />
        <rect x="10" y="4" width="11" height="13" rx="1.5" />
      </>
    ),
  },
  {
    number: 'Pinpoint',
    title: 'Product / Tool',
    description: 'Click-to-annotate feedback widget integrating with Teamwork Desk — built and pitched internally.',
    href: '/pinpoint',
    icon: (
      <>
        <line x1="12" y1="2" x2="12" y2="9" strokeLinecap="round" strokeDasharray="2 2" />
        <line x1="12" y1="15" x2="12" y2="22" strokeLinecap="round" strokeDasharray="2 2" />
        <line x1="2" y1="12" x2="9" y2="12" strokeLinecap="round" strokeDasharray="2 2" />
        <line x1="15" y1="12" x2="22" y2="12" strokeLinecap="round" strokeDasharray="2 2" />
        <circle cx="12" cy="12" r="3" style={{ fill: 'var(--color-primary)' }} stroke="none" />
      </>
    ),
  },
  {
    number: 'Thursday Tea',
    title: 'Internal Tool',
    description: 'Weekly standup board for Resi — departments submit updates, presenter walks through them fullscreen.',
    href: '/standup',
    icon: (
      <>
        <rect x="3" y="4" width="18" height="13" rx="1.5" />
        <line x1="7" y1="20" x2="17" y2="20" strokeLinecap="round" />
        <line x1="12" y1="17" x2="12" y2="20" />
      </>
    ),
  },
  {
    number: 'Reimagine',
    title: 'AI Tool',
    description: 'AI image editor for property photos, deployed to Google Cloud Run inside the Resi AI Toolbox.',
    href: '/reimagine',
    icon: (
      <>
        <circle cx="9" cy="12" r="6" />
        <circle cx="15" cy="12" r="6" />
      </>
    ),
  },
];

// Module-level flag: persists across route navigations, resets on hard refresh
let splashShown = false;

function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [splashDone, setSplashDone] = useState(splashShown);
  const containerRef = useRef(null);

  // Hide card before first paint so splash is the only thing visible
  useLayoutEffect(() => {
    if (!splashShown && canAnimate()) {
      gsap.set(containerRef.current, { opacity: 0, y: 40 });
    }
  }, []);

  // Fires when overlay starts fading — kick off card entrance so they overlap
  const handleSplashExit = useCallback(() => {
    if (!canAnimate()) return;

    gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.to(containerRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.65,
        ease: 'power3.out',
      })
        .from('.site-header', { y: -60, opacity: 0, duration: 0.5 }, '-=0.35')
        .from('.eyebrow', { y: 16, opacity: 0, duration: 0.45 }, '-=0.2')
        .from('.h1-line', { y: 28, opacity: 0, duration: 0.55, stagger: 0.08 }, '-=0.15')
        .from('.hero-sub', { y: 16, opacity: 0, duration: 0.45 }, '-=0.25')
        .from('.metric-row > *', { y: 24, opacity: 0, duration: 0.5, stagger: 0.06 }, '-=0.3');
    }, containerRef);
  }, []);

  // Fires when overlay is fully gone — just unmount the SplashScreen
  const handleSplashDone = useCallback(() => {
    splashShown = true;
    setSplashDone(true);
  }, []);

  return (
    <>
      {!splashDone && <SplashScreen onExit={handleSplashExit} onDone={handleSplashDone} />}
      <div className="presentation-container" ref={containerRef}>
        <header className="site-header">
          <div className="logo">
            <img src="/logo.svg" alt="Jordan Quinlisk" className="logo-img" />
            <span>Jordan Quinlisk</span>
          </div>
          <MenuButton open={menuOpen} onToggle={() => setMenuOpen(o => !o)} />
        </header>

        <MenuOverlay open={menuOpen} onClose={() => setMenuOpen(false)} />

        <main className="main-grid">
          <section className="hero-section">
            <div>
              <p className="eyebrow">Web &amp; AI Experience Designer</p>
              <h1>
                <span className="h1-line">Designing</span>
                <span className="h1-line">Systems,</span>
                <span className="h1-line">Building</span>
                <span className="h1-line">Tools.</span>
              </h1>
            </div>
            <p className="hero-sub">
              I design marketing websites and digital experiences — and build the AI tools
              that make them faster to ship. Based in the Netherlands, working at the
              intersection of web design, product thinking, and creative automation.
            </p>
          </section>

          <section className="metrics-grid">
            <div className="metric-row">
              <MetricCard {...projects[0]} borderRight={true} />
              <MetricCard {...projects[1]} borderRight={false} />
            </div>
            <div className="metric-row metric-row--last">
              <MetricCard {...projects[2]} borderRight={true} />
              <MetricCard {...projects[3]} borderRight={false} />
            </div>
          </section>
        </main>

        <footer className="footer-strip">
          <span>&#169; 2025 Jordan Quinlisk</span>
          <span>Available for freelance</span>
        </footer>
      </div>
    </>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/resi" element={<ResiPage />} />
      <Route path="/pinpoint" element={<PinpointPage />} />
      <Route path="/standup" element={<StandupPage />} />
      <Route path="/reimagine" element={<ReimaginePage />} />
    </Routes>
  );
}
