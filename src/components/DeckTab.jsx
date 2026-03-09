import './DeckTab.css';

/* ─────────────────────────────────────────────────────────────────────────────
   All text marked PLACEHOLDER — replace with real content before sharing.
───────────────────────────────────────────────────────────────────────────── */

export default function DeckTab() {
  return (
    <div className="deck">

      {/* ── Section 1: Who I Am ─────────────────────────────────────────────── */}
      <section className="deck-section deck-who">
        <p className="deck-eyebrow">Who I Am</p>
        <div className="deck-who__grid">

          <div className="deck-who__left">
            {/* PLACEHOLDER: Personal intro — human-first, not corporate */}
            <p className="deck-body">
              I'm a web and AI experience designer based in Eindhoven, Netherlands — originally
              from Colorado. I work at the intersection of design craft, product thinking, and
              creative automation, with a bias toward building the things I design.
            </p>
            {/* PLACEHOLDER: Design values */}
            <div className="deck-values">
              <p className="deck-label">Design values</p>
              <ul className="deck-values__list">
                <li>Clarity over cleverness</li>
                <li>Systems thinking from day one</li>
                <li>Build to learn, not to present</li>
                <li>Good design earns trust — fast</li>
              </ul>
            </div>
          </div>

          <div className="deck-who__right">
            {/* PLACEHOLDER: Fun facts */}
            <div className="deck-facts">
              <p className="deck-label">A few things about me</p>
              <ul className="deck-facts__list">
                <li><span className="deck-fact-marker">—</span> [Fun fact #1 — replace with something personal]</li>
                <li><span className="deck-fact-marker">—</span> [Fun fact #2 — replace with something personal]</li>
                <li><span className="deck-fact-marker">—</span> [Fun fact #3 — replace with something personal]</li>
                <li><span className="deck-fact-marker">—</span> American born, Netherlands-based since [year]</li>
              </ul>
            </div>
            {/* PLACEHOLDER: Experience timeline */}
            <div className="deck-xp">
              <p className="deck-label">Experience</p>
              <div className="deck-xp__row">
                <span className="deck-xp__year">2022 — Now</span>
                <span className="deck-xp__role">Web &amp; AI Designer — Resi</span>
              </div>
              <div className="deck-xp__row">
                <span className="deck-xp__year">[Year — Year]</span>
                <span className="deck-xp__role">[Previous role — Company]</span>
              </div>
              <div className="deck-xp__row">
                <span className="deck-xp__year">[Year — Year]</span>
                <span className="deck-xp__role">[Previous role — Company]</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── Section 2: Case Study — Resi ──────────────────────────────────── */}
      <section className="deck-section deck-case">
        <div className="deck-case__header">
          <div>
            <p className="deck-eyebrow">Case Study 01</p>
            <h2 className="deck-case__title">Resi</h2>
          </div>
          <div className="deck-case__meta">
            <div className="deck-meta-item">
              <span className="deck-label">Year</span>
              <span className="deck-meta-value">2022 — Ongoing</span>
            </div>
            <div className="deck-meta-item">
              <span className="deck-label">Role</span>
              <span className="deck-meta-value">Designer &amp; Developer</span>
            </div>
            <div className="deck-meta-item">
              <span className="deck-label">Team</span>
              {/* PLACEHOLDER: Team size/composition */}
              <span className="deck-meta-value">[Team — e.g. Solo, or with X people]</span>
            </div>
          </div>
        </div>

        <div className="deck-case__body">
          <div className="deck-phase">
            <p className="deck-eyebrow">Research</p>
            {/* PLACEHOLDER: Research phase narrative */}
            <p className="deck-body">
              [Describe the research phase — what problem were you investigating, who did you
              talk to, what did you discover? What shaped the direction before you started
              building?]
            </p>
          </div>
          <div className="deck-phase">
            <p className="deck-eyebrow">Build</p>
            {/* PLACEHOLDER: Build phase narrative */}
            <p className="deck-body">
              [Describe the build phase — what did you actually create, what decisions did you
              make along the way, what trade-offs did you navigate, and how did it come
              together?]
            </p>
          </div>
        </div>

        <div className="deck-case__impact">
          <div className="deck-impact-cell">
            <p className="deck-label">What I did</p>
            {/* PLACEHOLDER */}
            <p className="deck-impact-value">[Key output or deliverable]</p>
          </div>
          <div className="deck-impact-cell">
            <p className="deck-label">Timeline</p>
            {/* PLACEHOLDER */}
            <p className="deck-impact-value">[e.g. 3 months, ongoing]</p>
          </div>
          <div className="deck-impact-cell">
            <p className="deck-label">Impact</p>
            {/* PLACEHOLDER */}
            <p className="deck-impact-value">[Measurable result or outcome]</p>
          </div>
        </div>
      </section>

      {/* ── Section 3: Case Study — Pinpoint ──────────────────────────────── */}
      <section className="deck-section deck-case">
        <div className="deck-case__header">
          <div>
            <p className="deck-eyebrow">Case Study 02</p>
            <h2 className="deck-case__title">Pinpoint</h2>
          </div>
          <div className="deck-case__meta">
            <div className="deck-meta-item">
              <span className="deck-label">Year</span>
              <span className="deck-meta-value">2023</span>
            </div>
            <div className="deck-meta-item">
              <span className="deck-label">Role</span>
              <span className="deck-meta-value">Designer &amp; Developer</span>
            </div>
            <div className="deck-meta-item">
              <span className="deck-label">Team</span>
              {/* PLACEHOLDER */}
              <span className="deck-meta-value">[Team — e.g. Solo internal project]</span>
            </div>
          </div>
        </div>

        <div className="deck-case__body">
          <div className="deck-phase">
            <p className="deck-eyebrow">Research</p>
            {/* PLACEHOLDER */}
            <p className="deck-body">
              [Describe how you identified the problem — feedback loops were broken, context
              was lost in screenshots and Slack. What did you observe, and what made you
              decide to build rather than just flag it?]
            </p>
          </div>
          <div className="deck-phase">
            <p className="deck-eyebrow">Build</p>
            {/* PLACEHOLDER */}
            <p className="deck-body">
              [Describe building the widget — the annotation layer, the Teamwork Desk API
              integration, the internal pitch. What worked, what surprised you, and how did
              it get adopted?]
            </p>
          </div>
        </div>

        <div className="deck-case__impact">
          <div className="deck-impact-cell">
            <p className="deck-label">What I did</p>
            {/* PLACEHOLDER */}
            <p className="deck-impact-value">[Key output or deliverable]</p>
          </div>
          <div className="deck-impact-cell">
            <p className="deck-label">Timeline</p>
            {/* PLACEHOLDER */}
            <p className="deck-impact-value">[e.g. 6 weeks]</p>
          </div>
          <div className="deck-impact-cell">
            <p className="deck-label">Impact</p>
            {/* PLACEHOLDER */}
            <p className="deck-impact-value">[e.g. Adopted into design review process]</p>
          </div>
        </div>
      </section>

      {/* ── Section 4: Side Project ────────────────────────────────────────── */}
      <section className="deck-section deck-side">
        <p className="deck-eyebrow">Outside the Job Description</p>
        <div className="deck-side__callout">
          <div className="deck-side__content">
            <h3 className="deck-side__title">Thursday Tea</h3>
            {/* PLACEHOLDER */}
            <p className="deck-body">
              A weekly standup tool I built entirely on my own initiative for the Resi team.
              Departments submit updates via a simple form; the presenter walks through them
              live on a fullscreen board. It replaced a messy slide deck process and became
              a fixture of the weekly rhythm.
            </p>
            {/* PLACEHOLDER: What this reveals about working style */}
            <p className="deck-body" style={{ opacity: 0.6, marginTop: 12 }}>
              [Add a sentence on what this shows about you — e.g. comfort with ambiguity,
              self-direction, shipping without a brief.]
            </p>
          </div>
          <div className="deck-side__tags">
            {/* PLACEHOLDER: Adjust tags to reflect reality */}
            {['Self-directed', 'No brief', 'Shipped in production', 'Still in use'].map(tag => (
              <span key={tag} className="deck-tag">{tag}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 5: Why Me ──────────────────────────────────────────────── */}
      <section className="deck-section deck-why">
        <p className="deck-eyebrow">Why Me</p>

        {/* 5a: Skills from others */}
        <div className="deck-why__part">
          <p className="deck-label">Skills — as told by others</p>
          <div className="deck-skills">
            {/* PLACEHOLDER: Replace with skills others have actually named */}
            {[
              'Systems thinking',
              'End-to-end ownership',
              'Fast iteration',
              'Design + code fluency',
              'Clear communication',
              'AI tooling',
              'Internal pitching',
              'Cross-functional collaboration',
            ].map(skill => (
              <span key={skill} className="deck-skill-tag">{skill}</span>
            ))}
          </div>
        </div>

        {/* 5b: Testimonials */}
        <div className="deck-why__part">
          <p className="deck-label">What coworkers say</p>
          <div className="deck-testimonials">
            <blockquote className="deck-testimonial">
              {/* PLACEHOLDER: Real quote */}
              <p className="deck-testimonial__quote">
                "[Replace with a real quote from a coworker or manager about your work,
                approach, or impact.]"
              </p>
              <footer className="deck-testimonial__attr">
                — [Name], [Role] at [Company]
              </footer>
            </blockquote>
            <blockquote className="deck-testimonial">
              {/* PLACEHOLDER: Real quote */}
              <p className="deck-testimonial__quote">
                "[Replace with a second quote — ideally from someone with a different
                perspective, e.g. a developer or product manager.]"
              </p>
              <footer className="deck-testimonial__attr">
                — [Name], [Role] at [Company]
              </footer>
            </blockquote>
          </div>
        </div>

        {/* 5c: Questions */}
        <div className="deck-why__part deck-why__questions">
          <p className="deck-label">I'd love to ask you</p>
          <ul className="deck-questions">
            {/* PLACEHOLDER: Replace with questions you'd genuinely ask */}
            <li className="deck-question">What does great design culture look like at your company?</li>
            <li className="deck-question">Where does design have the most leverage in your current product?</li>
            <li className="deck-question">What does the first 90 days look like for someone in this role?</li>
          </ul>
        </div>

      </section>

    </div>
  );
}
