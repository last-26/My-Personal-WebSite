# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio website for an AI/ML Engineer. Pure static site (HTML/CSS/vanilla JS) deployed to Firebase Hosting at `https://last-26.web.app`. No build tools, no framework, no package manager. Visual style is editorial + terminal: Instrument Serif display type, 12-column magazine grids, asymmetric bento sections, cyberpunk accents (purple + teal).

## Development & Deployment

```bash
firebase serve              # Local dev server (requires Firebase CLI)
firebase deploy             # Deploy to Firebase Hosting (project: last-26)
firebase emulators:start    # Start local emulators for Firebase services
```

Files are served directly from `/public/`. No build step required. Cache-busting via `?v=N` query on `styles.css` / `script.js` in `index.html` — bump these whenever either file changes.

## Architecture

### Single-page application structure
- `public/index.html` — All HTML sections in one file (~1110 lines)
- `public/styles.css` — Design tokens, themes, per-section styles, animations (~3810 lines)
- `public/script.js` — Translations, analytics, interaction logic, live BTC chart (~2440 lines)

### Design tokens
The top of `styles.css` defines a `:root` token block: `--surface-0..3`, `--text-hi/mid/lo/muted`, `--border-*`, accent palette (`--accent` purple, `--accent-2` teal, plus pink/orange/sky/lavender), `--space-1..12` 4pt scale, `--radius-*`, easings (`--ease-out`, `--ease-in-out`, `--ease-spring`), durations, fluid type scale (`--fs-hero` uses `clamp(3.4rem, 9.4vw, 9rem)` etc.), font stacks (`--font-sans`, `--font-mono`, `--font-display`). `body.light-mode` overrides the subset that needs theming. Prefer reading tokens over hard-coded colors.

### Section anatomy
- **Hero** (`#hero`): asymmetric split — left column = editorial title stack + typewriter + description + CTAs; right column = meta strip with role / location / live visitor chip / weekly chart disclosure panel
- **About** (`#about`): asymmetric bento with a main AI block (left span 8), 3 stat cards (right span 4), full-width tech marquee (span 12)
- **Education** (`#education`): 2 cards with year-marker timeline indicator, colored badge variants (`[data-tr="education.badge.bsc"]` purple, `[data-tr="education.badge.lang"]` teal)
- **Experience** (`#experience`): sticky-date roadmap with 3 items; each card expands to reveal `.roadmap-achievements` and `.roadmap-metrics`; scroll-tracked progress dot on the center timeline
- **Projects** (`#projects`): 12-column magazine grid, 4 tiers:
  - `.card-showcase` — span 12, SMTbot WIP card with live BTC panel
  - `.card-featured` — span 6 (FinSenti, NextHire)
  - `.card-standard` — span 4 (AWS AI Doc QA, SwiftLink, SAMETEI)
  - `.card-mini-featured` — span 6 (HIREAI, Bitcoin Automation)
  - `.card-archive` — span 6 compact (Fruit Ripeness, Global News Hub)
- **Skills** (`#skills`): terminal UI with 6 `.term-block`s — each is `$ cat <file>.txt` + pill output. Left→right type-wipe reveal, CRT scanline overlay, hover focus-dim on other blocks, animated `::before` proficiency bar on `.pill[data-level]`. A `.term-summary` block at the bottom renders `$ wc -l *.txt` with auto-counted stats (total skills, advanced count, files, compiled status).
- **Contact** (`#contact`): editorial "Let's build something." statement, large copyable email, mini social links
- **Footer** (`.footer-v2`): signature + back-to-top + 4-column grid (brand/status, nav, social, live clock) + bottom chip row

### script.js organization
1. **Translation dictionary** (lines ~25–340): EN/TR strings keyed by `data-tr` attribute values. 250+ keys including `skills.summary.*`, `footer.*`, `projects.smtbot.*`.
2. **Firebase initialization** — Analytics + Realtime Database
3. **Visitor tracking** — unique ID (localStorage `portfolioVisitorId`), daily/total counters, section view tracking
4. **CV analytics** — view/download per language stored at `cv_analytics/`
5. **Project click counters** — atomic Firebase transactions per project link via `incrementProjectCounter`
6. **UI logic** — theme toggle (mutates icon class, not innerHTML — keeps `.tt-ring`/`.tt-halo` wrappers intact), language switcher, scroll animations, particles, typewriter, weekly chart
7. **Interaction IIFEs** (end of file):
   - `initTerminalTyping` — Intersection Observer adds `.term-animated` to stagger the type-wipe
   - `initSkillsSummary` — auto-counts pills, runs count-up animation on the summary block when it scrolls in
   - `initSMTbotLiveBTC` — polls Binance `/klines` (20s) + `/ticker/24hr` (5s), renders SVG line chart, positions HTML high/low labels via `%` offsets, flashes price on change
   - `initFooterClock` — ticks `#footerTime` every 1s

### Multi-language system
- Language (`en`/`tr`) stored in `localStorage.preferredLang`
- All translatable elements have `data-tr="key"` attributes
- Switching language calls `updateLanguage(lang)` which walks `[data-tr]` elements and swaps `innerHTML`
- Navbar shows circular SVG flags with a sliding gradient pill indicator. Active flag pops with saturation + shadow; inactive is desaturated.

### Theme system
- CSS custom properties on `:root` — overridden by `.light-mode` on `<body>`
- Default: dark mode; preference persisted to `localStorage.theme`
- Toggle button (`#themeToggle`) has three children: `.tt-ring` (rotating conic orbit), `.tt-halo` (bloom), `.tt-core` (sun/moon icon). **Don't** `themeToggle.innerHTML = ...` — it wipes the wrappers. Swap `fa-sun` / `fa-moon` classes on the `<i>` instead.
- Light mode has a block of "effect amplifiers" (search `LIGHT-MODE EFFECT AMPLIFIERS` in `styles.css`): bolder orbs, `mix-blend-mode: multiply` on the cursor/lightning canvases, stronger card shadows, amplified gradient meshes.

### Firebase Realtime Database structure
- `visitors/total` and `visitors/daily/{date}` and `visitors/daily/{date}/{visitorId}`
- `cv_analytics/total/cv_{action}_{language}`, `cv_analytics/daily/…`, `cv_analytics/users/{visitorId}/…`
- `projects/{projectId}` — click counters per project
- `analytics/behavior/{visitorId}`, `analytics/sections/{sectionName}/{visitorId}`

## Key Conventions

- **Don't break analytics contracts**: every Firebase path, every `localStorage` key, every ID/class that JS hooks into is sacred. See the "Preservation Manifest" section of `.claude/plans/portfolio-redesign-brief-eager-minsky.md` for the full list if in doubt.
- **Assets excluded from git** (see `.gitignore`): CV PDFs, certificate images (`TEI_*.png`, `c1.jpg`, `b2.jpg`), `.claude/` local settings
- **Firebase project ID**: `last-26`; database region: `europe-west1`
- **Section IDs match nav hrefs**: `#hero`, `#about`, `#education`, `#experience`, `#projects`, `#skills`, `#contact`
- **Inline JS onclick handlers** (from HTML) must stay globally accessible: `copyEmail`, `showCertificateModal`, `closeCertificateModal`, `showLogoModal`, `closeLogoModal`, `showEnglishCertModal`, `closeEnglishCertModal`
- **When editing either `styles.css` or `script.js`, bump the `?v=N` on the corresponding `<link>` / `<script>` tag** in `index.html` so clients pick up the change
- **Live external data**: SMTbot chart calls Binance public REST. Rate-limit budget is ~18 weight/min out of 1200 — don't drop the polling interval below 5s for the ticker without reconsidering.
