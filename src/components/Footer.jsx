import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: '1px solid var(--border)',
        padding: '4rem 0 3rem',
        background: 'var(--paper)',
      }}
    >
      <div className="container-wide">
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            flexWrap: 'wrap',
            gap: '2rem',
          }}
        >
          {/* Quote */}
          <div>
            <p className="footer-quote" style={{ marginBottom: '0.5rem' }}>
              「万物并育而不相害，道并行而不相悖。」
            </p>
            <p
              style={{
                fontSize: '0.7rem',
                color: 'var(--ink-muted)',
                letterSpacing: '0.05em',
              }}
            >
              ——《中庸》
            </p>
          </div>

          {/* Brand + copyright */}
          <div style={{ textAlign: 'right' }}>
            <Link
              to="/"
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '0.875rem',
                color: 'var(--ink-muted)',
                letterSpacing: '0.08em',
                display: 'block',
                marginBottom: '0.25rem',
              }}
            >
              大道之行也
            </Link>
            <p
              style={{
                fontSize: '0.7rem',
                color: 'var(--ink-muted)',
                letterSpacing: '0.05em',
              }}
            >
              © {new Date().getFullYear()} dogiant.com
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
