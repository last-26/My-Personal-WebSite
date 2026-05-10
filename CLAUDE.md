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

### Typography hierarchy
- **Hero title** (`.hero-grid-split .hero-title`, styles.css:618): explicit `'Cormorant Garamond', 'PT Serif', Georgia, serif` override — does NOT use `--font-display`. Verified rendering width ≈ 564px for "SAMET SOYSAL" at 80px (Cormorant), vs 420px if it were Instrument.
- **Mid display** (`.about-quote`, `.contact-statement`, footer `// end_of_session.txt` sign-off): `--font-display` → Instrument Serif.
- **Body / UI text**: `--font-sans` → Space Grotesk.
- **Mono / terminal eyebrows / chips / numeric eyebrows**: `--font-mono` → JetBrains Mono.

### Section anatomy
- **Hero** (`#hero`): v4 split layout — left column = Cormorant masthead (`hero-title-name` + `.hero-title-period` accent) + italic role line (`.hero-role` AI / ML pills + Engineer noun) + typewriter subtitle + description + 3 CTAs (Projects / GitHub / Contact) + demoted `.cv-row` mono text-link (View · Download). Right column = `.hero-photo-aside` circular profile photo with shield/lock overlays + accent gradient ring. Behind both columns: ambient `<img class="hero-background">` (local-only asset, see "Assets excluded from git"), with dark gradient overlay via `.hero::after` for text legibility
- **About** (`#about`): asymmetric bento with a main AI block (left span 8), 3 stat cards (right span 4), full-width tech marquee (span 12)
- **Education** (`#education`): 2 cards with year-marker timeline indicator, colored badge variants (`[data-tr="education.badge.bsc"]` purple, `[data-tr="education.badge.lang"]` teal)
- **Experience** (`#experience`): sticky-date roadmap with 3 items; each card expands to reveal `.roadmap-achievements` and `.roadmap-metrics`; scroll-tracked progress dot on the center timeline
- **Projects** (`#projects`): 12-column magazine grid. Sub-grouping eyebrows separate post-graduate vs academic milestones. Tiers:
  - `.card-showcase` — span 12, SMTbot WIP card with live BTC panel
  - `.card-featured` — span 6 (FinSenti, NextHire)
  - `.card-standard` — span 4 (AWS AI Doc QA, SwiftLink, SAMETEI)
  - `.card-mini-featured` — span 6 (HIREAI only currently; rule retained for future re-adds)
  - `.card-archive` — span 6 compact (currently no DOM cards; rule retained defensively)
- **Skills** (`#skills`): "Tech Stack" panel — single `.stack-grid` (`role="list"`) with 25 `.stack-cell`s arranged 5×5. Each cell is `.stack-icon` (mostly `cdn.simpleicons.org` images; a few Font Awesome variants tagged `.stack-icon-fa`) + `.stack-name`. Categories grouped per row (HTML-commented): AI/ML core → AI tooling + vision → Backend & data → Cloud & ops → Frontend.
- **Contact** (`#contact`): editorial "Let's build something." statement, large copyable email, mini social links. Section pill stays as just "06" (opted out of the labeled-pill pattern; see "Section pill format" below)
- **Footer** (`.footer-v2`): signature + back-to-top + 4-column grid (brand/status, nav, social, live clock) + bottom chip row

### script.js organization
1. **Translation dictionary** (lines ~25–340): EN/TR strings keyed by `data-tr` attribute values. 250+ keys including `skills.summary.*`, `footer.*`, `projects.smtbot.*`.
2. **Firebase initialization** — Analytics + Realtime Database
3. **Visitor tracking** — unique ID (localStorage `portfolioVisitorId`), daily/total counters, section view tracking
4. **CV analytics** — view/download per language stored at `cv_analytics/`
5. **Project click counters** — atomic Firebase transactions per project link via `incrementProjectCounter`
6. **UI logic** — theme toggle (mutates icon class, not innerHTML — keeps `.tt-ring`/`.tt-halo` wrappers intact), language switcher, scroll animations, particles, typewriter, weekly chart
7. **Interaction IIFEs** (end of file):
   - `initHeroMicro` — hero micro-interactions
   - `initRoadmapExpand` — expand/collapse experience cards (achievements/metrics)
   - `initRoadmapProgress` — scroll-tracked progress dot on the experience timeline
   - `initSMTbotLiveBTC` — polls Binance `/klines` (20s) + `/ticker/24hr` (5s), renders SVG line chart, positions HTML high/low labels via `%` offsets, flashes price on change
   - `initFooterClock` — ticks `#footerTime` every 1s
   - `initSeeProjectCursor` — custom hover cursor ("Read the case →" / "Vakayı oku →") that follows the pointer over `.card-featured` and `.card-mini-featured`. rAF-throttled `mousemove` with cleanup on `mouseout`, ESC + `visibilitychange` force-hide, lazy-injected DOM. Showcase card excluded (live BTC chart needs its hover surface). Disabled under `(prefers-reduced-motion: reduce)` and `(hover: none)` via early-exit + CSS fallback

### Multi-language system
- Language (`en`/`tr`) stored in `localStorage.preferredLang`
- All translatable elements have `data-tr="key"` attributes
- Switching language calls `updateLanguage(lang)` which walks `[data-tr]` elements and swaps `innerHTML`
- Navbar shows circular SVG flags with a sliding gradient pill indicator. Active flag pops with saturation + shadow; inactive is desaturated.

### Hybrid design system patterns (Wave 2)
Additive design tokens declared in the `:root` "Wave 2" block:
- `--radius-card: 16px` — mid-tier card radius (`.card-featured`, `.card-mini-featured`, `.card-standard`)
- `--text-soft: var(--text-muted)` — H2 two-tone helper alias
- `--pill-bg` / `--pill-border` — accent-tinted section pill values, both modes (single source of truth for `.section-tag`)
- `--rhythm-section: clamp(96px, 12vw, 160px)` — between-section vertical rhythm
- `--z-cursor: 9999` — custom hover cursor stacking (above noise overlay z:9998, below modals z:10000)

Three-tier card radius hierarchy:
- Showcase (20px / `--radius-lg`): `.card-showcase`
- Mid (16px / `--radius-card`): `.card-featured`, `.card-mini-featured`, `.card-standard`, `.education-card`
- Compact (12px / `--radius-md`): `.card-archive`, `.roadmap-card`

Section pill format ("Variant A" labeled chip):
- 5 sections (about, education, experience, projects, skills) render as `01 · About` — numeric span + `.section-tag-sep` + `.section-tag-label` (canonical short name, mirrors nav). Translation keys: `section.{slug}.label`.
- Contact opts out — its `.section-tag` stays as just "06" (bespoke gradient italic heading carries the section weight instead).

Two-tone H2 helper (`.h2-main` / `.h2-soft`):
- All 5 in-scope section H2s wrap into `<span class="h2-main">{main}</span> <em class="h2-soft">{soft}</em>` template. `.h2-soft` styled gray italic Instrument Serif via `--text-soft` + `--font-display`.
- Soft slots are intentionally empty strings ("") in the dictionary — refactor landed structurally; user fills the soft copy in a later commit. Whitespace between spans is injected only when soft is populated, via `.h2-main + .h2-soft:not(:empty)::before { content: " "; }`.
- Contact is opt-out (its existing inline gradient italic span is preserved; do NOT migrate it to `.h2-soft`).

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

- **Don't break analytics contracts**: every Firebase path, every `localStorage` key, every ID/class that JS hooks into is sacred. The full list is enumerated in the "Firebase Realtime Database structure" subsection above, plus the inline `onclick` handlers, `#cvViewBtn` / `#cvDownloadBtn` IDs (CV analytics), and the theme-toggle child wrappers (`.tt-ring` / `.tt-halo` / `.tt-core`).
- **Assets excluded from git** (see `.gitignore`): CV PDFs, certificate images (`TEI_*.png`, `c1.jpg`, `b2.jpg`), profile photo (`pp.jpg`), hero background (`public/background.png`), `.claude/` local settings. Firebase Hosting picks up everything in `public/` regardless of `.gitignore`, so locally-only assets still ship via `firebase deploy`.
- **Firebase project ID**: `last-26`; database region: `europe-west1`
- **Section IDs match nav hrefs**: `#hero`, `#about`, `#education`, `#experience`, `#projects`, `#skills`, `#contact`
- **Inline JS onclick handlers** (from HTML) must stay globally accessible: `copyEmail`, `showCertificateModal`, `closeCertificateModal`, `showLogoModal`, `closeLogoModal`, `showEnglishCertModal`, `closeEnglishCertModal`
- **When editing either `styles.css` or `script.js`, bump the `?v=N` on the corresponding `<link>` / `<script>` tag** in `index.html` so clients pick up the change
- **Live external data**: SMTbot chart calls Binance public REST. Rate-limit budget is ~18 weight/min out of 1200 — don't drop the polling interval below 5s for the ticker without reconsidering.
