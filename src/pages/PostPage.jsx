import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { PortableText } from '@portabletext/react'
import { sanityClient, postBySlugQuery } from '../lib/sanity'
import { demoPosts } from '../lib/demoData'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

function formatDate(str) {
  if (!str) return ''
  const d = new Date(str)
  return `${d.getFullYear()} 年 ${d.getMonth() + 1} 月 ${d.getDate()} 日`
}

const ptComponents = {
  block: {
    normal: ({ children }) => <p style={{ marginBottom: '1.5em' }}>{children}</p>,
    h2: ({ children }) => (
      <h2
        style={{
          fontFamily: 'var(--font-serif)',
          fontSize: '1.4rem',
          fontWeight: 400,
          color: 'var(--ink)',
          margin: '2em 0 0.5em',
        }}
      >
        {children}
      </h2>
    ),
    blockquote: ({ children }) => (
      <blockquote
        style={{
          borderLeft: '2px solid var(--accent)',
          margin: '2em 0',
          padding: '0.5em 1.5em',
          color: 'var(--ink-muted)',
          fontStyle: 'italic',
        }}
      >
        {children}
      </blockquote>
    ),
  },
  marks: {
    link: ({ value, children }) => (
      <a
        href={value.href}
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: 'var(--accent)', borderBottom: '1px solid var(--accent-dim)' }}
      >
        {children}
      </a>
    ),
  },
}

export default function PostPage() {
  const { slug } = useParams()
  const [post, setPost] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const projectId = import.meta.env.VITE_SANITY_PROJECT_ID
    if (!projectId || projectId === 'your-project-id') {
      // Use demo post
      const found = demoPosts.find((p) => p.slug?.current === slug)
      setPost(found || null)
      setLoading(false)
      return
    }

    sanityClient
      .fetch(postBySlugQuery, { slug })
      .then((data) => setPost(data))
      .catch(() => setPost(null))
      .finally(() => setLoading(false))
  }, [slug])

  // Update page title
  useEffect(() => {
    if (post?.title) {
      document.title = `${post.title} | 大道之行也`
    }
  }, [post])

  return (
    <>
      <Nav />
      <main style={{ paddingTop: '100px', paddingBottom: '6rem' }}>
        <div className="container-narrow">
          {loading ? (
            <div style={{ padding: '4rem 0', color: 'var(--ink-muted)' }}>载入中…</div>
          ) : !post ? (
            <div style={{ padding: '4rem 0' }}>
              <p style={{ color: 'var(--ink-muted)', marginBottom: '1.5rem' }}>
                找不到这篇文章。
              </p>
              <Link to="/" className="btn-ghost">
                返回首页
              </Link>
            </div>
          ) : (
            <article>
              {/* Back link */}
              <Link
                to="/#notes"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  fontSize: '0.75rem',
                  letterSpacing: '0.08em',
                  color: 'var(--ink-muted)',
                  marginBottom: '3rem',
                }}
              >
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <line x1="19" y1="12" x2="5" y2="12" />
                  <polyline points="12 19 5 12 12 5" />
                </svg>
                所有文章
              </Link>

              {/* Meta */}
              {post.tags?.length > 0 && (
                <div style={{ display: 'flex', gap: '0.4rem', marginBottom: '1.5rem' }}>
                  {post.tags.map((t) => (
                    <span key={t} className="tag">{t}</span>
                  ))}
                </div>
              )}

              {/* Title */}
              <h1
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(1.5rem, 4vw, 2.25rem)',
                  fontWeight: 400,
                  color: 'var(--ink)',
                  lineHeight: 1.4,
                  marginBottom: '1rem',
                }}
              >
                {post.title}
              </h1>

              {/* Date */}
              <time
                dateTime={post.publishedAt}
                style={{
                  display: 'block',
                  fontSize: '0.8rem',
                  color: 'var(--ink-muted)',
                  letterSpacing: '0.05em',
                  marginBottom: '3rem',
                }}
              >
                {formatDate(post.publishedAt)}
              </time>

              {/* Divider */}
              <div className="divider" style={{ marginBottom: '3rem' }} />

              {/* Excerpt (for demo posts without body) */}
              {post.excerpt && !post.body && (
                <div className="prose-custom">
                  <p>{post.excerpt}</p>
                  <blockquote>
                    这篇文章完整版在公众号发布。连接 Sanity CMS 后，文章全文将在此显示。
                  </blockquote>
                </div>
              )}

              {/* Body (Portable Text) */}
              {post.body && (
                <div className="prose-custom">
                  <PortableText value={post.body} components={ptComponents} />
                </div>
              )}
            </article>
          )}
        </div>
      </main>
      <Footer />
    </>
  )
}
