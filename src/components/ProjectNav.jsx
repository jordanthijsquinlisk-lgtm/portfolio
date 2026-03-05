import { Link } from 'react-router-dom';

export default function ProjectNav({ prev, next }) {
  return (
    <div className="project-nav">
      {prev ? (
        <Link to={prev.href} className="project-nav__link project-nav__link--prev">
          <svg viewBox="0 0 16 16" style={{ width: 14, height: 14, stroke: 'currentColor', fill: 'none', strokeWidth: 1.8 }}>
            <path d="M10 3L5 8l5 5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <div className="project-nav__text">
            <span className="project-nav__label">Previous</span>
            <span className="project-nav__title">{prev.title}</span>
          </div>
        </Link>
      ) : <div />}
      {next ? (
        <Link to={next.href} className="project-nav__link project-nav__link--next">
          <div className="project-nav__text project-nav__text--right">
            <span className="project-nav__label">Next</span>
            <span className="project-nav__title">{next.title}</span>
          </div>
          <svg viewBox="0 0 16 16" style={{ width: 14, height: 14, stroke: 'currentColor', fill: 'none', strokeWidth: 1.8 }}>
            <path d="M6 3l5 5-5 5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
      ) : <div />}
    </div>
  );
}
