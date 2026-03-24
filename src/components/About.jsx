import React from 'react'
import { Reveal } from '../lib/reveal'

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container-narrow">
        {/* Section label */}
        <Reveal>
          <p className="section-label" style={{ marginBottom: '3rem' }}>
            关于 / About
          </p>
        </Reveal>

        {/* Profile block */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'auto 1fr',
            gap: '3rem',
            alignItems: 'start',
          }}
        >
          {/* Avatar placeholder — minimal circle */}
          <Reveal delay={100}>
            <div
              style={{
                width: '56px',
                height: '56px',
                borderRadius: '50%',
                background: 'var(--paper-alt)',
                border: '1px solid var(--border)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.25rem',
                  color: 'var(--ink-muted)',
                }}
              >
                俊
              </span>
            </div>
          </Reveal>

          {/* Text */}
          <div>
            <Reveal delay={150}>
              <h2
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.5rem',
                  fontWeight: 400,
                  color: 'var(--ink)',
                  marginBottom: '1.5rem',
                }}
              >
                身在棋局，心观棋盘
              </h2>
            </Reveal>

            <Reveal delay={200}>
              <p
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1rem',
                  lineHeight: 2,
                  color: 'var(--ink-soft)',
                  marginBottom: '1.5rem',
                }}
              >
                在东京工作，写代码谋生，也写文字为乐。
                <br /><br />
                我不太喜欢自我介绍——那总像在简历里填空。我更愿意说，我是一个对"细节"着迷的人：地铁里的光线，代码里的逻辑，城市里偶尔的安静。
                <br /><br />
                这个网站是我的外部大脑。我把观察放在这里，把实验放在这里，把还没想清楚的想法也放在这里。
              </p>
            </Reveal>

            <Reveal delay={280}>
              <p
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '0.875rem',
                  color: 'var(--ink-muted)',
                  fontStyle: 'italic',
                  borderLeft: '2px solid var(--accent)',
                  paddingLeft: '1rem',
                  lineHeight: 1.8,
                }}
              >
                「大道之行也，天下为公。」
                <br />
                <span style={{ fontSize: '0.75rem', letterSpacing: '0.05em' }}>
                  ——《礼记·礼运》
                </span>
              </p>
            </Reveal>

            {/* Tags */}
            <Reveal delay={350}>
              <div
                style={{
                  display: 'flex',
                  gap: '0.5rem',
                  flexWrap: 'wrap',
                  marginTop: '2rem',
                }}
              >
                {['东京', 'React / Node.js', '产品设计', '语言学习', '日常观察'].map(
                  (t) => (
                    <span key={t} className="tag">
                      {t}
                    </span>
                  )
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 480px) {
          #about .profile-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
