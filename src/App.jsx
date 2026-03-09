import { useState, useRef, useLayoutEffect, useCallback } from 'react';
import { Routes, Route } from 'react-router-dom';
import { gsap, canAnimate } from './animations';
import './App.css';
import MetricCard from './components/MetricCard';
import SplashScreen from './components/SplashScreen';
import ResiPage from './pages/ResiPage';
import PinpointPage from './pages/PinpointPage';
import StandupPage from './pages/StandupPage';
import ReimaginePage from './pages/ReimaginePage';
import { IconResi, IconPinpoint, IconStandup, IconReimagine } from './components/Icons';

const projects = [
  {
    number: 'Resi',
    title: 'Web Design',
    description: 'Marketing websites for apartment properties — built end-to-end in YOOtheme Pro & WordPress.',
    href: '/resi',
    icon: <IconResi />,
  },
  {
    number: 'Pinpoint',
    title: 'Product / Tool',
    description: 'Click-to-annotate feedback widget integrating with Teamwork Desk — built and pitched internally.',
    href: '/pinpoint',
    icon: <IconPinpoint />,
  },
  {
    number: 'Thursday Tea',
    title: 'Internal Tool',
    description: 'Weekly standup board for Resi — departments submit updates, presenter walks through them fullscreen.',
    href: '/standup',
    icon: <IconStandup />,
  },
  {
    number: 'Reimagine',
    title: 'AI Tool',
    description: 'AI image editor for property photos, deployed to Google Cloud Run inside the Resi AI Toolbox.',
    href: '/reimagine',
    icon: <IconReimagine />,
  },
];

const TABS = [
  { id: 'about',    label: 'About'    },
  { id: 'projects', label: 'Projects' },
  { id: 'contact',  label: 'Contact'  },
];

// Module-level flag: persists across route navigations, resets on hard refresh
let splashShown = false;

function HomePage() {
  const [activeTab, setActiveTab]   = useState('about');
  const [splashDone, setSplashDone] = useState(splashShown);
  const [form, setForm]             = useState({ name: '', email: '', message: '' });
  const shellRef                    = useRef(null);

  // Hide shell before first paint so splash is the only thing visible
  useLayoutEffect(() => {
    if (!splashShown && canAnimate()) {
      gsap.set(shellRef.current, { opacity: 0, y: 40 });
    }
  }, []);

  // Kick off card entrance as splash starts fading
  const handleSplashExit = useCallback(() => {
    if (!canAnimate()) return;
    gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
      tl.to(shellRef.current, { y: 0, opacity: 1, duration: 0.65 })
        .from('.tabs-strip', { y: -20, opacity: 0, duration: 0.4 }, '-=0.35')
        .from('.eyebrow',    { y: 16, opacity: 0, duration: 0.45 }, '-=0.2')
        .from('.h1-line',    { y: 28, opacity: 0, duration: 0.55, stagger: 0.08 }, '-=0.15')
        .from('.hero-sub',   { y: 16, opacity: 0, duration: 0.45 }, '-=0.25');
    }, shellRef);
  }, []);

  const handleSplashDone = useCallback(() => {
    splashShown = true;
    setSplashDone(true);
  }, []);

  function handleFormSubmit(e) {
    e.preventDefault();
    const { name, email, message } = form;
    window.location.href =
      `mailto:hello@jordanquinlisk.com` +
      `?subject=${encodeURIComponent(`Portfolio enquiry from ${name}`)}` +
      `&body=${encodeURIComponent(`${message}\n\nFrom: ${email}`)}`;
  }

  return (
    <>
      {!splashDone && <SplashScreen onExit={handleSplashExit} onDone={handleSplashDone} />}

      <div className="portfolio-shell" ref={shellRef}>

        {/* ── Tab bar ──────────────────────────────────────────── */}
        <div className="tabs-area">
          <img src="/logo.svg" alt="Jordan Quinlisk" className="tabs-brand" />
          <div className="tabs-strip">
            {TABS.map(tab => (
              <button
                key={tab.id}
                className={`portfolio-tab${activeTab === tab.id ? ' active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* ── Card ─────────────────────────────────────────────── */}
        <div className="presentation-container">

          {/* About ─────────────────────────────────────────────── */}
          <div className={`tab-panel${activeTab === 'about' ? ' active' : ''}`}>
            <section className="hero-section">
              <div className="about-left">
                <p className="eyebrow">Web &amp; AI Experience Designer</p>
                <h1>
                  <span className="h1-line">Designing</span>
                  <span className="h1-line">Systems,</span>
                  <span className="h1-line">Building</span>
                  <span className="h1-line">Tools.</span>
                </h1>
              </div>
              <div className="about-right">
                <p className="hero-sub">
                  I design marketing websites and digital experiences — and build the AI tools
                  that make them faster to ship. American born, based in the Netherlands, working
                  at the intersection of web design, product thinking, and creative automation.
                </p>
                <p className="about-availability">
                  <span className="availability-dot" />
                  Available for freelance
                </p>
              </div>
            </section>
            <footer className="footer-strip">
              <span>© 2025 Jordan Quinlisk</span>
              <span>Based in the Netherlands</span>
            </footer>
          </div>

          {/* Projects ───────────────────────────────────────────── */}
          <div className={`tab-panel${activeTab === 'projects' ? ' active' : ''}`}>
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
          </div>

          {/* Contact ────────────────────────────────────────────── */}
          <div className={`tab-panel${activeTab === 'contact' ? ' active' : ''}`}>
            <section className="contact-panel">
              <div className="contact-left">
                <div>
                  <p className="eyebrow">Get in touch</p>
                  <h2 className="contact-heading">Let's work<br />together.</h2>
                </div>
                <div className="contact-links">
                  <a href="mailto:hello@jordanquinlisk.com" className="contact-link">
                    <span className="contact-link__label">Email</span>
                    <span className="contact-link__value">hello@jordanquinlisk.com</span>
                  </a>
                  <a href="https://linkedin.com/in/jordanquinlisk" target="_blank" rel="noopener noreferrer" className="contact-link">
                    <span className="contact-link__label">LinkedIn</span>
                    <span className="contact-link__value">/in/jordanquinlisk</span>
                  </a>
                  <a href="https://github.com/jordanquinlisk" target="_blank" rel="noopener noreferrer" className="contact-link">
                    <span className="contact-link__label">GitHub</span>
                    <span className="contact-link__value">github.com/jordanquinlisk</span>
                  </a>
                </div>
              </div>
              <div className="contact-right">
                <form className="contact-form" onSubmit={handleFormSubmit}>
                  <div className="contact-form__row">
                    <input
                      type="text"
                      placeholder="Your name"
                      className="contact-input"
                      value={form.name}
                      onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                      required
                    />
                    <input
                      type="email"
                      placeholder="Your email"
                      className="contact-input"
                      value={form.email}
                      onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                      required
                    />
                  </div>
                  <textarea
                    placeholder="Your message"
                    className="contact-input contact-input--textarea"
                    rows={7}
                    value={form.message}
                    onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                    required
                  />
                  <button type="submit" className="contact-submit">Send message</button>
                </form>
              </div>
            </section>
          </div>

        </div>
      </div>
    </>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/"          element={<HomePage />}    />
      <Route path="/resi"      element={<ResiPage />}    />
      <Route path="/pinpoint"  element={<PinpointPage />} />
      <Route path="/standup"   element={<StandupPage />} />
      <Route path="/reimagine" element={<ReimaginePage />} />
    </Routes>
  );
}
