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
      <div className="container-narrow">
        {/* Section header */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            marginBottom: '3rem',
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
            <a
              href="https://mp.weixin.qq.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontSize: '0.75rem',
                letterSpacing: '0.08em',
                color: 'var(--ink-muted)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.35rem',
              }}
            >
              公众号
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
          </Reveal>
        </div>

        {/* Article list */}
        {loading ? (
          <div style={{ padding: '3rem 0', color: 'var(--ink-muted)', fontSize: '0.875rem' }}>
            载入中…
          </div>
        ) : (
          <div>
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
    </section>
  )
}
