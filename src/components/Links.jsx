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
          ].map((link, i) => (
            <Reveal key={link.label} delay={i * 100}>
              <div className="link-card-root">
                <div
                  className="card"
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '1.5rem',
                    padding: '2rem',
                    textAlign: 'center'
                  }}
                >
                  <div
                    style={{
                      width: '100%',
                      maxWidth: '180px',
                      aspectRatio: '1/1',
                      overflow: 'hidden',
                      borderRadius: '4px',
                      border: '1px solid var(--border)'
                    }}
                  >
                    <img 
                      src={link.qr} 
                      alt={link.label} 
                      style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} 
                    />
                  </div>
                  
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                      <span style={{ width: '18px', height: '18px', color: 'var(--ink-muted)' }}>{link.icon}</span>
                      <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.125rem', color: 'var(--ink)' }}>
                        {link.label}
                      </h3>
                    </div>
                    <p style={{ fontSize: '0.8125rem', color: 'var(--ink-muted)' }}>
                      {link.desc}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
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
