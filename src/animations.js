import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Respect prefers-reduced-motion
export const canAnimate = () =>
  !window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export { gsap };
