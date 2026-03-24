import React from 'react'

export default function Hero() {
  return (
    <section
      style={{
        minHeight: '100dvh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background grain texture */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            radial-gradient(circle at 20% 50%, rgba(61,90,153,0.04) 0%, transparent 60%),
            radial-gradient(circle at 80% 20%, rgba(200,169,110,0.03) 0%, transparent 50%)
          `,
          pointerEvents: 'none',
        }}
      />

      {/* Subtle horizontal rule */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          bottom: '15%',
          left: 0,
          right: 0,
          height: '1px',
          background: 'var(--border)',
        }}
      />

      <div className="container-wide" style={{ width: '100%' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr auto',
            alignItems: 'end',
            gap: '4rem',
          }}
        >
          {/* Left: main copy */}
          <div>
            <div className="animate-fade-up delay-200" style={{ display: 'flex', alignItems: 'baseline' }}>
              <h1
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(2.5rem, 8vw, 6rem)',
                  fontWeight: 300,
                  letterSpacing: '0.12em',
                  color: 'var(--ink)',
                  lineHeight: 1.1,
                }}
              >
                大道之行也
              </h1>
            </div>

            {/* Subtitle */}
            <p
              className="hero-subtitle animate-fade-up delay-300"
              style={{ marginTop: '1.5rem', maxWidth: '480px' }}
            >
              在东京写代码，也记录这个时代的细节
            </p>

            {/* CTA buttons */}
            <div
              className="animate-fade-up delay-400"
              style={{
                display: 'flex',
                gap: '0.75rem',
                marginTop: '3rem',
                flexWrap: 'wrap',
              }}
            >
              <a href="/#projects" className="btn-solid">
                作品演示
                <ArrowIcon />
              </a>
            </div>
          </div>

          {/* Right: vertical text decoration */}
          <div
            className="animate-fade-in delay-600"
            aria-hidden
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '1rem',
              opacity: 0.3,
            }}
          >
            <span
              style={{
                writingMode: 'vertical-rl',
                textOrientation: 'upright',
                fontFamily: 'var(--font-serif)',
                fontSize: '0.875rem',
                letterSpacing: '0.3em',
                color: 'var(--ink-muted)',
              }}
            >
              天下为公
            </span>
            <div
              style={{ width: '1px', height: '80px', background: 'var(--border)' }}
            />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="animate-fade-in delay-600"
        style={{
          position: 'absolute',
          bottom: '2.5rem',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.5rem',
          opacity: 0.4,
        }}
      >
        <span
          style={{
            fontSize: '0.65rem',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: 'var(--ink-muted)',
          }}
        >
          scroll
        </span>
        <div
          style={{
            width: '1px',
            height: '40px',
            background: 'var(--ink-muted)',
            animation: 'lineGrow 1.2s cubic-bezier(0.16,1,0.3,1) 1s both',
            transformOrigin: 'top',
          }}
        />
      </div>

      <style>{`
        @media (max-width: 640px) {
          .hero-grid-right { display: none !important; }
        }
      `}</style>
    </section>
  )
}

function VideoIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <polygon points="5 3 19 12 5 21 5 3" />
    </svg>
  )
}

function ReadIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
    </svg>
  )
}

function ArrowIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  )
}
