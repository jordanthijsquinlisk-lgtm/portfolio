// Hand-drawn etching-style SVG icons
// Inspired by 19th-century engraving illustration — blue ink, cross-hatching, organic lines

// ── Navigation ────────────────────────────────────────────────────────────────

export function ArrowRight({ style }) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ width: '100%', height: '100%', ...style }}
    >
      {/* Shaft — subtly curved */}
      <path d="M2.5 8.2 C6 7.6 9.5 7.6 13.5 8" strokeWidth="1.4" />
      {/* Head */}
      <path d="M9.8 4.8 C11 6 13 7.4 13.5 8 C13 8.6 11 10 9.8 11.2" strokeWidth="1.4" />
      {/* Etching accent */}
      <line x1="11.5" y1="6.3" x2="12.5" y2="7.5" strokeWidth="0.7" opacity="0.5" />
    </svg>
  );
}

export function ArrowLeft({ style }) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ width: '100%', height: '100%', ...style }}
    >
      {/* Shaft */}
      <path d="M13.5 7.8 C10 7.5 6 7.5 2.5 8" strokeWidth="1.4" />
      {/* Head */}
      <path d="M6.2 4.8 C5 6 3 7.4 2.5 8 C3 8.6 5 10 6.2 11.2" strokeWidth="1.4" />
      {/* Etching accent */}
      <line x1="4.5" y1="6.3" x2="3.5" y2="7.5" strokeWidth="0.7" opacity="0.5" />
    </svg>
  );
}

export function ArrowExternal({ style }) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ width: '100%', height: '100%', ...style }}
    >
      {/* Diagonal shaft */}
      <path d="M4.5 11.5 L11.5 4.5" strokeWidth="1.3" />
      {/* Corner L bracket */}
      <path d="M7.5 4.3 L12 4.3 L12 8.8" strokeWidth="1.3" />
      {/* Accent */}
      <line x1="7" y1="8.5" x2="8.2" y2="7.3" strokeWidth="0.7" opacity="0.5" />
    </svg>
  );
}

export function IconClose({ style }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      style={{ width: '100%', height: '100%', ...style }}
    >
      {/* NW→SE diagonal — slightly curved */}
      <path d="M5.5 5.5 C8 8.5 10.5 10.5 12 12 C13.5 13.5 16 16.5 18.5 18.5" strokeWidth="1.8" />
      {/* NE→SW diagonal */}
      <path d="M18.5 5.5 C16 8.5 13.5 10.5 12 12 C10.5 13.5 8 16.5 5.5 18.5" strokeWidth="1.8" />
      {/* Hatching near centre */}
      <line x1="9.5" y1="9.2" x2="10.8" y2="10.5" strokeWidth="0.75" opacity="0.45" />
      <line x1="13.5" y1="13.7" x2="14.8" y2="15" strokeWidth="0.75" opacity="0.45" />
    </svg>
  );
}

// ── Project Icons ─────────────────────────────────────────────────────────────

export function IconResi({ style }) {
  // Two overlapping pages with horizontal ruling lines
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ width: '100%', height: '100%', ...style }}
    >
      {/* Back page */}
      <path d="M9.5 3.2 Q9.8 2.8 10.3 2.8 L20.8 2.8 Q21.3 2.8 21.3 3.3 L21.3 15.2 Q21.3 15.8 20.7 15.8 L10.2 15.8 Q9.5 15.8 9.5 15.2 Z" strokeWidth="1.2" />
      <line x1="11.5" y1="5.8"  x2="19.2" y2="5.8"  strokeWidth="0.7" opacity="0.45" />
      <line x1="11.5" y1="8"    x2="19.2" y2="8"    strokeWidth="0.7" opacity="0.45" />
      <line x1="11.5" y1="10.2" x2="19.2" y2="10.2" strokeWidth="0.7" opacity="0.45" />
      <line x1="11.5" y1="12.4" x2="17"   y2="12.4" strokeWidth="0.7" opacity="0.45" />
      {/* Front page */}
      <path d="M2.7 7.8 Q3 7.4 3.5 7.4 L14 7.4 Q14.5 7.4 14.5 7.9 L14.5 20.7 Q14.5 21.3 13.9 21.3 L3.3 21.3 Q2.7 21.3 2.7 20.7 Z" strokeWidth="1.2" />
      <line x1="4.5" y1="10.7" x2="12.7" y2="10.7" strokeWidth="0.7" opacity="0.45" />
      <line x1="4.5" y1="12.9" x2="12.7" y2="12.9" strokeWidth="0.7" opacity="0.45" />
      <line x1="4.5" y1="15.1" x2="12.7" y2="15.1" strokeWidth="0.7" opacity="0.45" />
      <line x1="4.5" y1="17.3" x2="9.5"  y2="17.3" strokeWidth="0.7" opacity="0.45" />
    </svg>
  );
}

export function IconPinpoint({ style }) {
  // Crosshair target with concentric rings and etching hatching
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      style={{ width: '100%', height: '100%', ...style }}
    >
      {/* Outer ring — slightly imperfect path for hand-drawn feel */}
      <path d="M12 2.5 C17.2 2.4 21.6 6.8 21.5 12 C21.5 17.3 17.1 21.5 12 21.5 C6.8 21.5 2.4 17.1 2.5 12 C2.5 6.9 6.9 2.5 12 2.5" strokeWidth="1.3" />
      {/* Inner ring */}
      <path d="M12 7.5 C14.8 7.6 16.5 9.6 16.5 12 C16.4 14.5 14.3 16.5 12 16.5 C9.5 16.5 7.5 14.4 7.5 12 C7.5 9.5 9.6 7.5 12 7.5" strokeWidth="1.1" />
      {/* Centre dot */}
      <circle cx="12" cy="12" r="1.5" strokeWidth="1" />
      {/* Crosshair dashes */}
      <line x1="12" y1="2.2"  x2="12" y2="7.2"  strokeWidth="0.9" strokeDasharray="1.5 1.5" />
      <line x1="12" y1="16.8" x2="12" y2="21.8" strokeWidth="0.9" strokeDasharray="1.5 1.5" />
      <line x1="2.2"  y1="12" x2="7.2"  y2="12" strokeWidth="0.9" strokeDasharray="1.5 1.5" />
      <line x1="16.8" y1="12" x2="21.8" y2="12" strokeWidth="0.9" strokeDasharray="1.5 1.5" />
      {/* Hatching between rings */}
      <line x1="5.5"  y1="8.5"  x2="7.2"  y2="6.8"  strokeWidth="0.7" opacity="0.45" />
      <line x1="16.5" y1="17"   x2="18.2" y2="15.3" strokeWidth="0.7" opacity="0.45" />
      <line x1="15.5" y1="7.2"  x2="17.2" y2="5.5"  strokeWidth="0.7" opacity="0.45" />
    </svg>
  );
}

export function IconStandup({ style }) {
  // Tea cup with steam — Thursday Tea
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ width: '100%', height: '100%', ...style }}
    >
      {/* Steam wisps */}
      <path d="M8.5 5 C8.2 4.2 8.8 3.5 8.4 2.5" strokeWidth="0.9" opacity="0.65" />
      <path d="M12 4.5 C11.7 3.7 12.3 3 11.9 2" strokeWidth="0.9" opacity="0.65" />
      <path d="M15.5 5 C15.2 4.2 15.8 3.5 15.4 2.5" strokeWidth="0.9" opacity="0.65" />
      {/* Cup body */}
      <path d="M5.5 7 Q5.2 6.5 5.8 6.5 L18.2 6.5 Q18.8 6.5 18.5 7 L17 17 Q16.9 17.5 16.3 17.5 L7.7 17.5 Q7.1 17.5 7 17 Z" strokeWidth="1.3" />
      {/* Handle */}
      <path d="M18.5 9.5 C20.8 9.5 21.5 11 21.5 12.5 C21.5 14 20.8 15 18.5 15" strokeWidth="1.2" />
      {/* Saucer */}
      <path d="M3.5 19 Q3.5 18.5 4 18.5 L20 18.5 Q20.5 18.5 20.5 19 L20 20.5 Q20 21 19.5 21 L4.5 21 Q4 21 4 20.5 Z" strokeWidth="1.1" />
      {/* Hatching on cup */}
      <line x1="8.5" y1="10"   x2="15.8" y2="10"   strokeWidth="0.7" opacity="0.4" />
      <line x1="8.3" y1="12.2" x2="15.6" y2="12.2" strokeWidth="0.7" opacity="0.4" />
      <line x1="8"   y1="14.4" x2="15.3" y2="14.4" strokeWidth="0.7" opacity="0.4" />
    </svg>
  );
}

export function IconReimagine({ style }) {
  // Two overlapping circles (Venn) with hatching in the lens — AI / creative
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      style={{ width: '100%', height: '100%', ...style }}
    >
      {/* Left circle */}
      <circle cx="9.5" cy="12" r="7" strokeWidth="1.3" />
      {/* Right circle */}
      <circle cx="14.5" cy="12" r="7" strokeWidth="1.3" />
      {/* Diagonal hatching in overlap lens */}
      <line x1="10.2" y1="6.8"  x2="12"   y2="8.6"  strokeWidth="0.7" opacity="0.45" />
      <line x1="9.5"  y1="9"    x2="13"   y2="12.5" strokeWidth="0.7" opacity="0.45" />
      <line x1="9.5"  y1="11.5" x2="12.5" y2="14.5" strokeWidth="0.7" opacity="0.45" />
      <line x1="10"   y1="14"   x2="12"   y2="16"   strokeWidth="0.7" opacity="0.45" />
      <line x1="11.8" y1="7.2"  x2="14.5" y2="9.9"  strokeWidth="0.7" opacity="0.45" />
      <line x1="11.5" y1="10"   x2="14.5" y2="13"   strokeWidth="0.7" opacity="0.45" />
      <line x1="11.8" y1="13"   x2="14"   y2="15.2" strokeWidth="0.7" opacity="0.45" />
    </svg>
  );
}
