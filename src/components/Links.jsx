import React from 'react'
import { Reveal } from '../lib/reveal'

export default function Links() {
  return (
    <section id="links" className="section">
      <div className="container-wide">
        <Reveal>
          <p className="section-label" style={{ marginBottom: '3rem' }}>
            联系 / Links
          </p>
        </Reveal>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
            gap: '1.5rem',
            maxWidth: '100%'
          }}
        >
          {[
            {
              label: '公众号',
              desc: '长文 / 深度思考',
              qr: '/assets/contact/wechat-official.jpg',
              icon: <WechatIcon />,
            },
            {
              label: '视频号',
              desc: '短视频 / 生活观察',
              qr: '/assets/contact/wechat-channels.jpg',
              icon: <VideoIcon />,
            },
            {
              label: 'GitHub',
              desc: '开源 / 代码',
              href: 'https://github.com/toshiki-tech',
              icon: <GithubIcon />,
            },
          ].map((link, i) => (
            <Reveal key={link.label} delay={i * 100}>
              <div 
                style={{ 
                  position: 'relative',
                  height: '100%' 
                }}
                className="link-card-root"
              >
                {link.href ? (
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'none', display: 'block', height: '100%' }}
                  >
                    <LinkCard link={link} />
                  </a>
                ) : (
                  <div style={{ cursor: 'pointer', height: '100%' }}>
                    <LinkCard link={link} />
                  </div>
                )}

                {link.qr && (
                  <div 
                    className="qr-popover"
                    style={{
                      position: 'absolute',
                      bottom: 'calc(100% + 1.5rem)',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: '200px',
                      background: 'white',
                      padding: '1rem',
                      border: '1px solid var(--border)',
                      boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)',
                      pointerEvents: 'none',
                      opacity: 0,
                      visibility: 'hidden',
                      transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                      zIndex: 2000,
                    }}
                  >
                    <img 
                      src={link.qr} 
                      alt={link.label} 
                      style={{ width: '100%', height: 'auto', display: 'block' }} 
                    />
                    <p style={{ 
                      fontSize: '0.7rem', 
                      textAlign: 'center', 
                      marginTop: '0.75rem',
                      color: 'var(--ink-muted)',
                      fontWeight: 500
                    }}>
                      扫一扫关注
                    </p>
                  </div>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <style>{`
        .link-card-root:hover .qr-popover {
          opacity: 1;
          visibility: visible;
          transform: translateX(-50%) translateY(-10px);
        }
        #links .container-wide {
          overflow: visible !important;
        }
      `}</style>
    </section>
  )
}

function LinkCard({ link }) {
  return (
    <div
      className="card"
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        padding: '1.5rem',
        height: '100%',
      }}
    >
      <div
        style={{
          width: '36px',
          height: '36px',
          color: 'var(--ink-muted)',
        }}
      >
        {link.icon}
      </div>
      <div>
        <p
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '1rem',
            color: 'var(--ink)',
            marginBottom: '0.25rem',
          }}
        >
          {link.label}
        </p>
        <p
          style={{
            fontSize: '0.8rem',
            color: 'var(--ink-muted)',
          }}
        >
          {link.desc}
        </p>
      </div>
    </div>
  )
}

function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" width="36" height="36">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
  )
}

function VideoIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" width="36" height="36">
      <polygon points="5 3 19 12 5 21 5 3" />
    </svg>
  )
}

function WechatIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" width="36" height="36">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  )
}
