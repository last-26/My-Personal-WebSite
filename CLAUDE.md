# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio website for an AI/ML Engineer. Pure static site (HTML/CSS/vanilla JS) deployed to Firebase Hosting at `https://last-26.web.app`. No build tools, no framework, no package manager.

## Development & Deployment

```bash
firebase serve              # Local dev server (requires Firebase CLI)
firebase deploy             # Deploy to Firebase Hosting (project: last-26)
firebase emulators:start    # Start local emulators for Firebase services
```

Files are served directly from `/public/`. No build step required.

## Architecture

### Single-page application structure
- `public/index.html` — All HTML sections in one file
- `public/styles.css` — All styling including themes, animations, responsive layout
- `public/script.js` — All JavaScript (~1200 lines)

### script.js organization
1. **Translation dictionary** (lines ~25–220): EN/TR strings keyed by `data-tr` attribute values
2. **Firebase initialization**: Analytics + Realtime Database
3. **Visitor tracking**: Unique ID (localStorage), daily/total counters, section view tracking
4. **CV analytics**: View/download tracking per language (EN/TR) stored at `cv_analytics/`
5. **Project click counters**: Atomic Firebase transactions per project link
6. **UI logic**: Theme toggle, language switcher, scroll animations, particles, typewriter effect

### Multi-language system
- Language (`en`/`tr`) stored in `localStorage`
- All translatable elements have `data-tr="key"` attributes
- Switching language calls `applyTranslations()` which walks the DOM and swaps text

### Firebase Realtime Database structure
- `visitors/` — total count, daily counts by date
- `cv_analytics/` — CV view/download events with metadata
- `project_clicks/{project_id}` — click counters per project

### Theme system
- CSS custom properties on `:root` — overridden by `.light-mode` on `<body>`
- Default: dark mode; preference persisted to `localStorage`

## Key Conventions

- Assets excluded from git (see `.gitignore`): CV PDFs, certificate images (`TEI_*.png`, `c1.jpg`, `b2.jpg`)
- Firebase project ID: `last-26`; database region: `europe-west1`
- All section IDs match nav anchor hrefs: `#hero`, `#about`, `#education`, `#experience`, `#projects`, `#skills`, `#contact`
