import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import LogoMark from './LogoMark'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close menu on route change
  useEffect(() => setMenuOpen(false), [location])

  const links = [
    { href: '/#about',    label: '关于' },
    { href: '/#notes',    label: '笔记' },
    { href: '/#projects', label: '项目' },
    { href: '/#links',    label: '联系' },
  ]

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: 'background 0.4s ease, border-color 0.4s ease',
        background: scrolled ? 'rgba(250,250,248,0.92)' : 'transparent',
        borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
      }}
    >
      <div
        className="container-wide"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '60px',
        }}
      >
        <Link
          to="/"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.875rem',
            textDecoration: 'none',
          }}
        >
          <LogoMark size={24} />
          <span
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.75rem',
              fontWeight: 500,
              color: 'var(--ink)',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              opacity: 0.9,
            }}
          >
            DOGIANT
          </span>
        </Link>

        {/* Desktop nav */}
        <nav
          style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}
          className="hidden-mobile"
        >
          {links.map((l) => (
            <a key={l.href} href={l.href} className="nav-link">
              {l.label}
            </a>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen((v) => !v)}
          className="show-mobile"
          aria-label="Toggle menu"
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '0.5rem',
            display: 'none',
          }}
        >
          <span
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '5px',
            }}
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                style={{
                  display: 'block',
                  width: '22px',
                  height: '1px',
                  background: 'var(--ink)',
                  transition: 'transform 0.3s ease, opacity 0.3s ease',
                  transform:
                    menuOpen && i === 0
                      ? 'translateY(6px) rotate(45deg)'
                      : menuOpen && i === 2
                      ? 'translateY(-6px) rotate(-45deg)'
                      : 'none',
                  opacity: menuOpen && i === 1 ? 0 : 1,
                }}
              />
            ))}
          </span>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          style={{
            background: 'var(--paper)',
            borderTop: '1px solid var(--border)',
            padding: '2rem 1.5rem',
          }}
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="nav-link"
              style={{
                display: 'block',
                padding: '0.875rem 0',
                borderBottom: '1px solid var(--border)',
                fontSize: '1rem',
                letterSpacing: '0.06em',
                color: 'var(--ink-soft)',
              }}
            >
              {l.label}
            </a>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 640px) {
          .hidden-mobile { display: none !important; }
          .show-mobile   { display: flex !important; }
        }
      `}</style>
    </header>
  )
}
