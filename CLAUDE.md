# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

"大道之行也" (dogiant) — a personal site / blog combining a React + Vite frontend with an embedded Sanity Studio CMS. Content (posts, projects) is authored in Sanity and rendered on the public site. UI copy is primarily Chinese.

Sanity project ID is `jl8li4r9`, dataset `production` (hardcoded in `sanity.config.js`; also overridable via `VITE_SANITY_PROJECT_ID` / `VITE_SANITY_DATASET`).

## Commands

```bash
npm run dev        # Vite dev server (public site + embedded Studio at /studio)
npm run build      # Production build → dist/
npm run preview    # Preview the built dist/
npm run lint       # ESLint (flat config, eslint.config.js)
```

There is a **separate** `studio/` workspace (standalone Sanity Studio v3) with its own `package.json`:

```bash
cd studio
npm run dev        # sanity dev (standalone studio dev server)
npm run deploy     # sanity deploy (publish hosted studio)
```

Note the version split: root uses Sanity v5 + React 19 (embedded studio via `<Studio>` from `sanity` package); the `studio/` workspace pins Sanity v3 + React 18 and is a standalone studio. Don't assume changes in one propagate to the other.

## Architecture

### Two routes, three modes
`src/App.jsx` defines three routes:
- `/` → `HomePage` — single-page composition of `Nav`, `Hero`, `About`, `ArticleList`, `ProjectList`, `Links`, `Footer`.
- `/post/:slug` → `PostPage` — renders a Sanity post body via `@portabletext/react`.
- `/studio/*` → `StudioPage` — mounts the full Sanity Studio inline using the root `sanity.config.js`. `basePath: '/studio'` in that config is what makes the embedded studio work under the React Router route.

### Sanity client + demo-data fallback
`src/lib/sanity.js` exports the `@sanity/client` instance and GROQ queries (`postsQuery`, `postBySlugQuery`, `projectsQuery`, `featuredProjectsQuery`).

Components that fetch from Sanity (`ArticleList`, `ProjectList`, `PostPage`) check `import.meta.env.VITE_SANITY_PROJECT_ID` against `'your-project-id'` — if unset or placeholder, they render `demoPosts` / `demoProjects` from `src/lib/demoData.js` instead of calling Sanity. When editing these components, preserve the demo fallback path so the site renders without env vars.

### Duplicated schemas — be careful
Schema definitions exist in **two places** and must be kept in sync:
- `sanity/schemas/{post,project}.js` — consumed by root `sanity.config.js` (the embedded studio at `/studio`).
- `studio/schemas/{post,project}.js` — consumed by the standalone studio in `studio/`.

The two copies have drifted slightly in formatting and minor labels. If you change a schema field, update both files.

### Styling
- Tailwind v4 via `@tailwindcss/vite` (configured in `vite.config.js`, imported with `@import "tailwindcss"` at top of `src/index.css`). No `tailwind.config.js` — config is CSS-driven.
- Heavy use of **CSS custom properties** defined in `:root` of `src/index.css` (`--ink`, `--paper`, `--accent`, `--font-serif`, `--ease-out`, etc.). Components reference these via inline `style={{ color: 'var(--ink)' }}` rather than Tailwind utilities.
- `@tailwindcss/typography` is installed but the post body uses a custom `.prose-custom` class + a `ptComponents` map in `PostPage.jsx` (not the `prose` plugin classes).
- Scroll-triggered fade-in animations come from `src/lib/reveal.jsx` (`<Reveal>` + `useInView`, IntersectionObserver-based). Wrap visual sections in `<Reveal delay={…}>` for the established stagger pattern.

### Routing detail
`BrowserRouter` is used (not Hash). Anchor links like `/#notes` in `PostPage` rely on `scroll-behavior: smooth` from `html` in `index.css` plus React Router's default scroll behavior — don't switch to `HashRouter` without updating those anchors.

## Conventions

- JSX only (no TypeScript). ESLint flat config allows unused vars matching `^[A-Z_]` (component imports, constants).
- Components mix inline `style={{…}}` objects with Tailwind utility classes; both are acceptable in this codebase.
- Chinese is used in user-facing copy, comments, and Sanity schema field titles — keep that convention when editing.
