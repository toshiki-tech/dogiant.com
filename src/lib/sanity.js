import { createClient } from '@sanity/client'

// Replace these with your actual Sanity project settings
export const sanityClient = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID || 'your-project-id',
  dataset:   import.meta.env.VITE_SANITY_DATASET   || 'production',
  apiVersion: '2024-01-01',
  useCdn: true,
})

// ── Queries ──────────────────────────────────────────────

export const postsQuery = `
  *[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    publishedAt,
    excerpt,
    tags
  }
`

export const postBySlugQuery = `
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    publishedAt,
    excerpt,
    body,
    tags,
    "seo": {
      "title": title,
      "description": excerpt
    }
  }
`

export const projectsQuery = `
  *[_type == "project"] | order(_createdAt desc) {
    _id,
    name,
    description,
    link,
    featured
  }
`

export const featuredProjectsQuery = `
  *[_type == "project" && featured == true] | order(_createdAt desc) {
    _id,
    name,
    description,
    link,
    featured
  }
`
