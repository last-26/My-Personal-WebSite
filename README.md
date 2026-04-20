# Personal Portfolio Website

An editorial, terminal-flavored portfolio for an AI/ML Engineer — pure HTML, CSS, and vanilla JavaScript. No frameworks, no build tools.

**Live:** [https://last-26.web.app](https://last-26.web.app)

---

## Features

### Design System
- **Fluid editorial typography** — Instrument Serif (display), Space Grotesk (body), JetBrains Mono (meta), all scaled with `clamp()`
- **Token-first CSS** — layered surfaces, semantic text hierarchy, 4pt spacing scale, fluid type scale, easing + duration tokens
- **Dark / light theme** via `.light-mode` class — every token flips cleanly, preference saved to localStorage
- **Magazine layout** — 12-column grids, asymmetric bento sections, editorial rhythm

### Visual Effects
- **Lightning system** — canvas edge bolts attracted to cards, scroll-triggered branches with glow
- **Cursor ember streaks** — electric particle trail following the mouse, micro-sparks jumping to nearby card edges
- **Cyberpunk edge lines** — animated gradient lines on screen edges
- **Navbar icons** — circular SVG flags (TR/EN) with gradient indicator; theme toggle with rotating conic orbit ring + bloom halo
- **Light-mode effect amplifiers** — stronger orbs, blend-mode cursor/lightning, amplified card hover shadows
- **Scroll reveals** — staggered fade/slide variants via Intersection Observer
- **Reduced-motion support** — all animations collapse to `0.01s` when `prefers-reduced-motion` is set

### Content Sections
| # | Section | Highlights |
|---|---------|------------|
| 00 | **Hero** | Asymmetric split layout, Instrument Serif title with outline italic line, typewriter subtitle, meta strip with live visitor chip + weekly chart disclosure panel |
| 01 | **About** | Asymmetric bento — main AI/NLP/LLM block, 3 stat cards with sparklines, full-width infinite tech marquee |
| 02 | **Education** | Timeline indicator with year markers, certificate proof chips, colored BSc (purple) + LANG (teal) badges with glow |
| 03 | **Experience** | Sticky-date roadmap, expandable cards with achievement lists + metric chips, logo watermark, scroll-tracking progress dot |
| 04 | **Projects** | 12-column hybrid magazine grid with 4 tiers: live **SMTbot showcase** (span 12, live BTC/USDT chart), featured (span 6), standard (span 4), mini-featured (span 6), archive (span 6) — 10 projects total |
| 05 | **Skills** | Terminal UI with CRT scanline overlay, left→right type-wipe reveal per block, animated proficiency bars, hover focus-dim, `wc -l *.txt` summary block with auto-counted totals |
| 06 | **Contact** | Editorial "Let's build something." statement, Instrument Serif email with copy-to-clipboard + toast |
| — | **Footer** | Editorial signature, live clock, status chip, back-to-top, version + "no frameworks" markers |

### SMTbot Live BTC Chart
The in-progress RL trading project card renders a real-time BTC/USDT panel:
- Polls Binance public REST (`/klines` 30m × 48, `/ticker/24hr` single-symbol) — 20s and 5s cadence
- SVG line chart with draw-in animation, grid overlay, 24h high/low dashed bands with `HH:MM` timestamps, pulsing tip halo, sweep shimmer
- Live stats panel: 24h change (green/red flash), volume, high, low

### Multi-Language
- Instant TR/EN switching (250+ translation keys)
- All translatable elements use `data-tr` attributes — one call to `updateLanguage()` walks the DOM
- Circular SVG flags in navbar with sliding pill indicator; active flag saturation pops
- CV buttons dynamically switch between EN/TR PDFs

### Firebase Analytics
- **Visitor tracking** — unique IDs, daily/total counters, weekly bar chart (Chart.js)
- **CV analytics** — view/download per language with metadata
- **Project click counters** — atomic Firebase transactions per link
- **Section views + behavior** — Intersection Observer reports, device metadata
- **Admin dashboard** — `#admin` hash route

### Interactive Details
- Sticky navbar with scroll hide/show and active section highlighting
- Top scroll-progress bar
- Certificate, company logo, and English-cert modals (ESC to close)
- Project tech tags auto-categorized and color-coded (AI, Backend, Frontend, DevOps, Cloud)
- Magnetic hover on primary CTAs
- `:focus-visible` outlines site-wide

## Tech Stack

| Layer | Technologies |
|-------|-------------|
| **Frontend** | HTML5, CSS3, Vanilla JavaScript |
| **Hosting & Database** | Firebase Hosting, Firebase Realtime Database |
| **Libraries** | Chart.js (visitor chart), Font Awesome 6.5 (icons), Binance public REST (live BTC) |
| **Fonts** | Instrument Serif, Space Grotesk, JetBrains Mono |

## Project Structure

```
public/
  index.html      # Single-page HTML (~1110 lines)
  styles.css      # All styling, themes, animations, design tokens (~3810 lines)
  script.js       # All logic, analytics, effects, live BTC chart (~2440 lines)
firebase.json     # Firebase Hosting config
.firebaserc       # Firebase project binding (last-26)
```

## Getting Started

```bash
# Serve locally (requires Firebase CLI)
firebase serve

# Deploy to Firebase Hosting
firebase deploy
```

No build step — files are served directly from `/public/`. Cache-busting is handled via `?v=N` query strings on `styles.css` and `script.js`.

---

# Kisisel Portfolyo Web Sitesi

AI/ML Muhendisi icin editoryal, terminal hissiyatli portfolyo — saf HTML, CSS ve vanilla JavaScript ile yapildi. Framework yok, build araci yok.

**Canli:** [https://last-26.web.app](https://last-26.web.app)

---

## Ozellikler

### Tasarim Sistemi
- **Akiskan editoryal tipografi** — Instrument Serif (display), Space Grotesk (govde), JetBrains Mono (meta), tum boyutlar `clamp()` ile
- **Token-oncelikli CSS** — katmanli yuzeyler, anlamsal metin hiyerarsisi, 4pt bosluk olcegi, easing + sure token'lari
- **Karanlik / aydinlik tema** — `.light-mode` sinifi, tum token'lar temiz gecer, tercih localStorage'da
- **Magazin duzeni** — 12 sutunlu grid'ler, asimetrik bento, editoryal ritim

### Gorsel Efektler
- **Yildirim sistemi** — canvas uzerinde kenar yildirimlari kartlara cekilir, scroll tetikli dallanma
- **Imlec kivilcim izi** — fare hareketini takip eden elektrik cizgileri, yakin kartlara sicrayan mikro kivilcimlar
- **Cyberpunk kenar cizgileri** — ekran kenarlarinda animasyonlu gradyan cizgiler
- **Navbar ikonlari** — dairesel SVG bayraklar (TR/EN) + gradyan gosterge; tema toggle donen konik orbit halkasi + halo
- **Aydinlik tema efekt guclendirici** — daha belirgin kureler, blend-mode cursor/lightning, guclu hover golgeleri
- **Scroll-reveal** — Intersection Observer ile kademeli fade/slide varyantlari
- **Reduced-motion destegi** — `prefers-reduced-motion` aktifse tum animasyonlar `0.01s`'ye dusurulur

### Icerik Bolumleri
| # | Bolum | Detaylar |
|---|-------|----------|
| 00 | **Hero** | Asimetrik bolunmus duzen, outline italik ikinci satir, daktilo alt yazisi, canli ziyaretci chip'i ve haftalik grafik panel |
| 01 | **Hakkimda** | Asimetrik bento — AI/NLP/LLM ana blok, 3 istatistik karti, sonsuz kayan teknoloji seridi |
| 02 | **Egitim** | Yil isaretli zaman cubugu, sertifika chip'leri, BSc (mor) + LANG (yesil-mavi) rozetleri parlama efektiyle |
| 03 | **Deneyim** | Sabit tarih (sticky), acilabilir kartlar, metric chip'leri, logo watermark, scroll-takipli ilerleme noktasi |
| 04 | **Projeler** | 12 sutunlu magazin grid, 4 seviye: canli **SMTbot showcase** (span 12, canli BTC/USDT grafik), featured (span 6), standard (span 4), mini-featured (span 6), archive (span 6) — toplam 10 proje |
| 05 | **Yetenekler** | CRT scanline kaplamali terminal, blok basina soldan-saga yazi animasyonu, animasyonlu yetkinlik cubuklari, hover focus-dim, `wc -l *.txt` ozet bloku otomatik sayilan toplamlarla |
| 06 | **Iletisim** | Editoryal "Birlikte bir sey insa edelim." ifadesi, Instrument Serif e-posta + panoya kopyala + toast |
| — | **Footer** | Editoryal imza, canli saat, durum chip'i, basa don, versiyon + "no frameworks" etiketleri |

### SMTbot Canli BTC Grafik
Hala gelistirilmekte olan RL trading projesi icin canli BTC/USDT paneli:
- Binance public REST API'yi cagirir (`/klines` 30m × 48, `/ticker/24hr` tekli sembol) — 20s ve 5s araliklarla
- SVG cizgi grafigi: cizim animasyonu, grid overlay, 24s yuksek/dusuk bantlari `HH:MM` zaman damgalariyla, atim halosu, isil isil tarama
- Canli istatistik paneli: 24s degisim (yesil/kirmizi flash), hacim, yuksek, dusuk

### Coklu Dil
- Aninda TR/EN gecisi (250+ ceviri anahtari)
- `data-tr` nitelikleri — `updateLanguage()` tek fonksiyonla DOM'u dolasir
- Navbar'da dairesel SVG bayraklar, kayan pill gosterge; aktif bayrak doygunlukla one cikar
- CV butonlari EN/TR PDF'leri arasinda dinamik gecer

### Firebase Analitik
- **Ziyaretci takibi** — benzersiz ID, gunluk/toplam, haftalik grafik (Chart.js)
- **CV analitigi** — dil bazinda goruntuleme/indirme, zaman damgasi ve metadata
- **Proje tiklama sayaclari** — atomik Firebase islemleri
- **Bolum goruntuleme + davranis** — Intersection Observer raporlari, cihaz metadatasi
- **Yonetici paneli** — `#admin` hash rotasi

## Teknoloji Yigini

| Katman | Teknolojiler |
|--------|-------------|
| **Frontend** | HTML5, CSS3, Vanilla JavaScript |
| **Hosting ve Veritabani** | Firebase Hosting, Firebase Realtime Database |
| **Kutuphaneler** | Chart.js (ziyaretci grafigi), Font Awesome 6.5, Binance public REST (canli BTC) |
| **Fontlar** | Instrument Serif, Space Grotesk, JetBrains Mono |

## Baslarken

```bash
# Yerel sunucu (Firebase CLI gerekli)
firebase serve

# Firebase Hosting'e deploy
firebase deploy
```

Build adimi yok — dosyalar dogrudan `/public/` klasorunden sunulur. Cache temizleme `styles.css` ve `script.js` icin `?v=N` query string ile yapilir.
