import React, { useEffect, useState } from 'react'
import { Reveal } from '../lib/reveal'
import { sanityClient, projectsQuery } from '../lib/sanity'
import { demoProjects } from '../lib/demoData'

export default function ProjectList() {
  const [projects, setProjects] = useState(demoProjects)

  useEffect(() => {
    const projectId = import.meta.env.VITE_SANITY_PROJECT_ID
    if (!projectId || projectId === 'your-project-id') return

    sanityClient
      .fetch(projectsQuery)
      .then((data) => { if (data?.length) setProjects(data) })
      .catch(() => {})
  }, [])

  const featured = projects.filter((p) => p.featured)
  const others   = projects.filter((p) => !p.featured)

  return (
    <section
      id="projects"
      className="section"
      style={{ background: 'var(--paper-alt)' }}
    >
      <div className="container-wide">
        {/* Header */}
        <Reveal>
          <div style={{ marginBottom: '3rem' }}>
            <p className="section-label" style={{ marginBottom: '0.5rem' }}>
              项目 / Lab
            </p>
            <h2
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.5rem',
                fontWeight: 400,
                color: 'var(--ink)',
              }}
            >
              做过的事
            </h2>
          </div>
        </Reveal>

        {/* Featured projects */}
        {featured.length > 0 && (
          <div style={{ marginBottom: '3rem' }}>
            <Reveal>
              <p
                style={{
                  fontSize: '0.7rem',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: 'var(--ink-muted)',
                  marginBottom: '1.5rem',
                }}
              >
                重点项目
              </p>
            </Reveal>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
                gap: '1.5rem',
              }}
            >
              {featured.map((p, i) => (
                <Reveal key={p._id} delay={i * 100}>
                  <ProjectCard project={p} size="large" />
                </Reveal>
              ))}
            </div>
          </div>
        )}

        {/* Other projects */}
        {others.length > 0 && (
          <div>
            <Reveal>
              <p
                style={{
                  fontSize: '0.7rem',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: 'var(--ink-muted)',
                  marginBottom: '1.5rem',
                }}
              >
                实验 / 小工具
              </p>
            </Reveal>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
                gap: '1rem',
              }}
            >
              {others.map((p, i) => (
                <Reveal key={p._id} delay={i * 80}>
                  <ProjectCard project={p} size="small" />
                </Reveal>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

function ProjectCard({ project, size = 'small' }) {
  const isLarge = size === 'large'

  return (
    <a
      href={project.link || '#'}
      target={project.link && project.link !== '#' ? '_blank' : undefined}
      rel="noopener noreferrer"
      style={{ textDecoration: 'none', display: 'block' }}
    >
      <article
        className="card"
        style={{
          padding: isLarge ? '2rem' : '1.5rem',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          minHeight: isLarge ? '180px' : '140px',
        }}
      >
        <div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              marginBottom: '0.75rem',
            }}
          >
            <h3
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: isLarge ? '1.25rem' : '1rem',
                fontWeight: 400,
                color: 'var(--ink)',
              }}
            >
              {project.name}
            </h3>
            {project.featured && (
              <span
                style={{
                  fontSize: '0.6rem',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'var(--accent)',
                  border: '1px solid var(--accent-dim)',
                  padding: '0.15rem 0.5rem',
                  opacity: 0.8,
                }}
              >
                Featured
              </span>
            )}
          </div>

          <p
            style={{
              fontSize: '0.875rem',
              color: 'var(--ink-muted)',
              lineHeight: 1.7,
            }}
          >
            {project.description}
          </p>
        </div>

        {/* Link indicator */}
        {project.link && project.link !== '#' && (
          <div
            style={{
              marginTop: '1.5rem',
              fontSize: '0.7rem',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'var(--ink-muted)',
              display: 'flex',
              alignItems: 'center',
              gap: '0.35rem',
            }}
          >
            访问
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <line x1="7" y1="17" x2="17" y2="7" />
              <polyline points="7 7 17 7 17 17" />
            </svg>
          </div>
        )}
      </article>
    </a>
  )
}
