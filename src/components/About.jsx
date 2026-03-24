import React from 'react'
import { Reveal } from '../lib/reveal'

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container-wide">
        {/* Section label */}
        <Reveal>
          <p className="section-label" style={{ marginBottom: '3rem' }}>
            关于 / About
          </p>
        </Reveal>

        {/* Profile block */}
        <div style={{ maxWidth: '800px' }}>
          {/* Text */}
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
              在东京工作，写代码谋生，也写点文字自娱自乐。
              <br /><br />
              我不太喜欢自我介绍——那总像在简历里填空。
              <br />与其定义自己，不如去留意一些容易被忽略的东西：城市里斑驳的光影，公园里偶尔的安静，代码里沉默的逻辑。
              <br /><br />
              这个网站更像我的外部大脑。
              <br />我把观察放在这里，把实验放在这里，也把那些还没想清楚的念头，暂时安放在这里。
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
              {['东京工作', '日语学习', '日常观察', '产品研发'].map(
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

      <style>{`
        @media (max-width: 480px) {
          #about .profile-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
