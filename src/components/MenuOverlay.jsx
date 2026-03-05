import { IconClose } from './Icons';

export default function MenuOverlay({ open, onClose }) {
  return (
    <>
      {/* Backdrop — click to close */}
      <div
        onClick={onClose}
        style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(0, 20, 80, 0.35)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          opacity: open ? 1 : 0,
          pointerEvents: open ? 'auto' : 'none',
          transition: 'opacity 0.35s ease',
          zIndex: 4,
          borderRadius: 'inherit',
          cursor: 'pointer',
        }}
      />

      {/* Slide-in panel from right */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Contact menu"
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          bottom: 0,
          width: 'min(420px, 100%)',
          background: 'rgba(0, 20, 90, 0.97)',
          backdropFilter: 'blur(20px)',
          transform: open ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.45s cubic-bezier(0.16, 1, 0.3, 1)',
          zIndex: 5,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '40px',
          borderLeft: '1px solid rgba(255,255,255,0.08)',
          borderRadius: '0 40px 40px 0',
        }}
      >
        {/* Header: logo + close button */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <img
              src="/logo.svg"
              alt="Jordan Quinlisk"
              style={{
                width: 28,
                height: 28,
                objectFit: 'contain',
                filter: 'invert(1) brightness(2)',
                flexShrink: 0,
              }}
            />
            <span style={{
              fontFamily: 'var(--font-body)',
              fontSize: 16,
              fontWeight: 400,
              color: 'white',
              letterSpacing: '0.01em',
            }}>
              Jordan Quinlisk
            </span>
          </div>

          {/* Close button */}
          <button
            onClick={onClose}
            aria-label="Close menu"
            style={{
              background: 'none',
              border: 'none',
              padding: 8,
              cursor: 'pointer',
              color: 'white',
              opacity: 0.6,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 8,
              transition: 'opacity 0.15s ease',
              flexShrink: 0,
            }}
            onMouseEnter={e => e.currentTarget.style.opacity = '1'}
            onMouseLeave={e => e.currentTarget.style.opacity = '0.6'}
          >
            <IconClose style={{ width: 20, height: 20 }} />
          </button>
        </div>

        {/* Contact info */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
          <div>
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: 10,
              fontWeight: 600,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              opacity: 0.4,
              marginBottom: 16,
              color: 'white',
            }}>
              Get in touch
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <ContactRow label="Email" value="hello@example.com" href="mailto:hello@example.com" />
              <ContactRow label="Phone" value="+31 (0) 00 000 0000" href="tel:+310000000000" />
            </div>
          </div>

          <div>
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: 10,
              fontWeight: 600,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              opacity: 0.4,
              marginBottom: 16,
              color: 'white',
            }}>
              Social
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <ContactRow label="LinkedIn" value="linkedin.com/in/yourhandle" href="#" />
              <ContactRow label="GitHub" value="github.com/yourhandle" href="#" />
              <ContactRow label="X / Twitter" value="@yourhandle" href="#" />
            </div>
          </div>
        </div>

        {/* Footer note */}
        <p style={{
          fontFamily: 'var(--font-body)',
          fontSize: 12,
          opacity: 0.35,
          fontWeight: 300,
          color: 'white',
        }}>
          American born, based in the Netherlands
        </p>
      </div>
    </>
  );
}

function ContactRow({ label, value, href }) {
  return (
    <a
      href={href}
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'baseline',
        gap: 16,
        textDecoration: 'none',
        color: 'white',
        padding: '12px 0',
        borderBottom: '1px solid rgba(255,255,255,0.08)',
        transition: 'opacity 0.15s ease',
      }}
      onMouseEnter={e => e.currentTarget.style.opacity = '0.6'}
      onMouseLeave={e => e.currentTarget.style.opacity = '1'}
    >
      <span style={{
        fontFamily: 'var(--font-body)',
        fontSize: 11,
        fontWeight: 600,
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
        opacity: 0.45,
        flexShrink: 0,
      }}>
        {label}
      </span>
      <span style={{
        fontFamily: 'var(--font-display)',
        fontSize: 18,
        fontStyle: 'italic',
        textAlign: 'right',
      }}>
        {value}
      </span>
    </a>
  );
}
