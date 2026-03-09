import { Link } from 'react-router-dom';
import { useTransition } from '../context/TransitionContext';
import { ArrowLeft, ArrowRight } from './Icons';

function scrollTop() {
  window.scrollTo({ top: 0, behavior: 'instant' });
}

export default function ProjectNav({ prev, next }) {
  const { navigateTo } = useTransition() ?? {};

  function handleNav(e, href) {
    e.preventDefault();
    scrollTop();
    navigateTo?.(href);
  }

  return (
    <div className="project-nav">
      {prev ? (
        <Link
          to={prev.href}
          className="project-nav__link project-nav__link--prev"
          onClick={(e) => handleNav(e, prev.href)}
        >
          <ArrowLeft style={{ width: 14, height: 14 }} />
          <div className="project-nav__text">
            <span className="project-nav__label">Previous</span>
            <span className="project-nav__title">{prev.title}</span>
          </div>
        </Link>
      ) : <div />}
      {next ? (
        <Link
          to={next.href}
          className="project-nav__link project-nav__link--next"
          onClick={(e) => handleNav(e, next.href)}
        >
          <div className="project-nav__text project-nav__text--right">
            <span className="project-nav__label">Next</span>
            <span className="project-nav__title">{next.title}</span>
          </div>
          <ArrowRight style={{ width: 14, height: 14 }} />
        </Link>
      ) : <div />}
    </div>
  );
}
