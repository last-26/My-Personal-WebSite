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
- `public/script.js` — All JavaScript (~1600 lines)

### script.js organization
1. **Firebase config & init** (lines ~1–21): App initialization, database reference
2. **Translation dictionary** (lines ~24–248): EN/TR strings keyed by `data-tr` attribute values
3. **Language & theme system** (lines ~250–310): `updateCVButtons()`, dark mode toggle, persistence
4. **Core UI functions** (lines ~313–406): `updateLanguage()`, scroll reveal, count-up stats, nav scroll, scroll progress, active nav
5. **Project card enhancements** (IIFE, lines ~408–468): Tag categorization, expand/collapse descriptions
6. **Lightning system** (IIFE, lines ~470–786): Edge lightning bolts with card attraction, scroll-triggered bolts, ambient loop
7. **CV tracking** (lines ~796–895): View/download events per language (EN/TR) stored at `cv_analytics/`
8. **Visitor counter** (lines ~897–1100): Unique ID (localStorage), daily/total counters, weekly chart (Chart.js)
9. **Project click counters** (lines ~1101–1192): Atomic Firebase transactions per project link
10. **User behavior tracking** (lines ~1193–1279): Section visibility (Intersection Observer), page view counts, device metadata
11. **Admin dashboard** (lines ~1302–1428): Analytics dashboard with secret access
12. **Utility functions** (lines ~1429–1503): Email copy, toast notifications, navbar auto-hide
13. **DOM ready init** (lines ~1505–1531): Main initialization sequence
14. **Certificate modals** (lines ~1535–1620): Certificate, company logo, and English cert modal functions

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

### Visual effects
- **Lightning system**: Ambient edge lightning bolts on `<canvas id="lightningCanvas">`, attracted to cards, scroll-triggered
- **Cyberpunk edges**: CSS gradient lines on left/right screen edges with animation
- **Noise overlay**: Subtle noise texture via `.noise-overlay`
- **Scroll animations**: Elements fade/slide in via `.scroll-reveal` class + Intersection Observer

## Key Conventions

- Assets excluded from git (see `.gitignore`): CV PDFs, certificate images (`TEI_*.png`, `c1.jpg`, `b2.jpg`)
- Firebase project ID: `last-26`; database region: `europe-west1`
- All section IDs match nav anchor hrefs: `#hero`, `#about`, `#education`, `#experience`, `#projects`, `#skills`, `#contact`
