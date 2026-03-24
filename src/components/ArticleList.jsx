import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Reveal } from '../lib/reveal'
import { sanityClient, postsQuery } from '../lib/sanity'
import { demoPosts } from '../lib/demoData'

function formatDate(str) {
  if (!str) return ''
  const d = new Date(str)
  return `${d.getFullYear()}.${String(d.getMonth() + 1).padStart(2, '0')}.${String(
    d.getDate()
  ).padStart(2, '0')}`
}

export default function ArticleList() {
  const [posts, setPosts] = useState(demoPosts)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const projectId = import.meta.env.VITE_SANITY_PROJECT_ID
    if (!projectId || projectId === 'your-project-id') return // use demo data

    setLoading(true)
    sanityClient
      .fetch(postsQuery)
      .then((data) => { if (data?.length) setPosts(data) })
      .catch(() => {}) // silently fall back to demo
      .finally(() => setLoading(false))
  }, [])

  return (
    <section id="notes" className="section">
      <div className="container-wide">
        {/* Section header */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            marginBottom: '3rem',
            maxWidth: '100%'
          }}
        >
          <Reveal>
            <div>
              <p className="section-label" style={{ marginBottom: '0.5rem' }}>
                笔记 / Notes
              </p>
              <h2
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.5rem',
                  fontWeight: 400,
                  color: 'var(--ink)',
                }}
              >
                一些文字
              </h2>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div 
              className="note-header-qr-trigger"
              style={{
                fontSize: '0.75rem',
                letterSpacing: '0.08em',
                color: 'var(--ink-muted)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.35rem',
                cursor: 'pointer',
                position: 'relative'
              }}
            >
              扫码关注
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>

              {/* QR Popover for Notes Header */}
              <div 
                className="note-qr-popover"
                style={{
                  position: 'absolute',
                  top: 'calc(100% + 1rem)',
                  right: 0,
                  width: '180px',
                  background: 'white',
                  padding: '1rem',
                  border: '1px solid var(--border)',
                  boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)',
                  pointerEvents: 'none',
                  opacity: 0,
                  visibility: 'hidden',
                  transition: 'all 0.3s var(--ease-out)',
                  zIndex: 2000,
                  textAlign: 'center'
                }}
              >
                <img 
                  src="/assets/contact/wechat-official.jpg" 
                  alt="公众号二维码" 
                  style={{ width: '100%', display: 'block' }} 
                />
                <p style={{ fontSize: '0.65rem', marginTop: '0.5rem', color: 'var(--ink-muted)', letterSpacing: '0.05em' }}>
                  扫码关注公众号
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Article list */}
        {loading ? (
          <div style={{ padding: '3rem 0', color: 'var(--ink-muted)', fontSize: '0.875rem' }}>
            载入中…
          </div>
        ) : (
          <div style={{ maxWidth: '800px' }}>
            {posts.map((post, i) => (
              <Reveal key={post._id} delay={i * 80}>
                <Link
                  to={`/post/${post.slug?.current}`}
                  style={{ display: 'block', textDecoration: 'none' }}
                >
                  <article className="article-item">
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'flex-start',
                        gap: '1rem',
                        marginBottom: '0.5rem',
                      }}
                    >
                      <h3
                        style={{
                          fontFamily: 'var(--font-serif)',
                          fontSize: '1.0625rem',
                          fontWeight: 400,
                          color: 'var(--ink)',
                          lineHeight: 1.5,
                        }}
                      >
                        {post.title}
                      </h3>
                      <time
                        dateTime={post.publishedAt}
                        style={{
                          fontSize: '0.7rem',
                          color: 'var(--ink-muted)',
                          letterSpacing: '0.05em',
                          whiteSpace: 'nowrap',
                          paddingTop: '0.25rem',
                          flexShrink: 0,
                        }}
                      >
                        {formatDate(post.publishedAt)}
                      </time>
                    </div>

                    {post.excerpt && (
                      <p
                        style={{
                          fontSize: '0.875rem',
                          color: 'var(--ink-muted)',
                          lineHeight: 1.8,
                          display: '-webkit-box',
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: 'vertical',
                          overflow: 'hidden',
                        }}
                      >
                        {post.excerpt}
                      </p>
                    )}

                    {post.tags?.length > 0 && (
                      <div
                        style={{
                          display: 'flex',
                          gap: '0.4rem',
                          marginTop: '0.75rem',
                          flexWrap: 'wrap',
                        }}
                      >
                        {post.tags.map((t) => (
                          <span key={t} className="tag">{t}</span>
                        ))}
                      </div>
                    )}
                  </article>
                </Link>
              </Reveal>
            ))}
          </div>
        )}
      </div>
      <style>{`
        .note-header-qr-trigger:hover .note-qr-popover {
          opacity: 1 !important;
          visibility: visible !important;
          transform: translateY(10px) !important;
        }
        #notes .container-wide {
          overflow: visible !important;
        }
      `}</style>
    </section>
  )
}
