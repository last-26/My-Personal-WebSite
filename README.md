# Personal Portfolio Website

A modern, cyberpunk-themed portfolio website for an AI/ML Engineer — built with pure HTML, CSS, and vanilla JavaScript. No frameworks, no build tools.

**Live:** [https://last-26.web.app](https://last-26.web.app)

---

## Features

### Design & Visuals
- **Dark / Light theme** with CSS custom properties and smooth transitions — preference saved to localStorage
- **Lightning system** — ambient edge bolts on canvas, attracted to cards, scroll-triggered with branches and glow
- **Cursor particle trail** — electric ember streaks that follow mouse movement, with micro-sparks jumping to nearby card edges
- **Cyberpunk edge lines** — animated gradient lines on screen edges
- **Glassmorphism** cards, gradient orbs, noise overlay, floating hero particles
- **Scroll-reveal animations** — elements fade/slide in via Intersection Observer

### Content Sections
| # | Section | Highlights |
|---|---------|------------|
| 01 | **Hero** | Typewriter effect, animated gradient orbs, CTA buttons |
| 02 | **About** | Bento-grid layout with animated stat counters |
| 03 | **Education** | Degree & language certification cards with certificate modals |
| 04 | **Experience** | Vertical roadmap timeline with company logo modals |
| 05 | **Projects** | 9 project cards — expandable descriptions, colored tech tags, click counters |
| 06 | **Skills** | Terminal-style UI with 6 categorized skill blocks and level badges |
| 07 | **Contact** | Email copy-to-clipboard with toast notification, social links |

### Multi-Language Support
- Instant switching between **English** and **Turkish** (210+ translation keys)
- All translatable elements use `data-tr` attributes
- Language preference persisted to localStorage
- CV buttons dynamically switch between EN/TR versions

### Firebase Analytics
- **Visitor tracking** — unique visitor IDs, daily/total counters, 7-day bar chart (Chart.js)
- **CV analytics** — view/download events per language with timestamps and metadata
- **Project click counters** — atomic Firebase transactions per project link
- **User behavior** — section views, page view counts, device metadata via Intersection Observer
- **Admin dashboard** — accessible via `#admin` hash

### Interactive Details
- Sticky navbar with scroll hide/show and active section highlighting
- Scroll progress bar
- Certificate, company logo, and English cert modals (ESC to close)
- Project tech tags auto-categorized and color-coded (AI, Backend, Frontend, DevOps, Cloud)
- Card spark/lightning-hit pulse effects on hover proximity

## Tech Stack

| Layer | Technologies |
|-------|-------------|
| **Frontend** | HTML5, CSS3, Vanilla JavaScript |
| **Hosting & Database** | Firebase Hosting, Firebase Realtime Database |
| **Libraries** | Chart.js (visitor chart), Font Awesome 6.5 (icons) |
| **Fonts** | Space Grotesk, JetBrains Mono |

## Project Structure

```
public/
  index.html      # Single-page HTML (~730 lines)
  styles.css      # All styling, themes, animations (~1880 lines)
  script.js       # All logic, analytics, effects (~1620 lines)
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

No build step — files are served directly from `/public/`.

---

# Kisisel Portfolyo Web Sitesi

AI/ML Muhendisi icin modern, cyberpunk temali portfolyo web sitesi — saf HTML, CSS ve vanilla JavaScript ile yapildi. Framework yok, build araci yok.

**Canli:** [https://last-26.web.app](https://last-26.web.app)

---

## Ozellikler

### Tasarim ve Gorseller
- **Karanlik / Aydinlik tema** — CSS degiskenleri ve yumusak gecislerle, tercih localStorage'da saklanir
- **Yildirim sistemi** — canvas uzerinde kenar yildirimlari, kartlara cekim, scroll tetiklemeli dallanma ve parlama
- **Imleç parcacik izi** — mouse hareketini takip eden elektrik kivilcim cizgileri, yakin kartlara sicrayan mikro sparklar
- **Cyberpunk kenar cizgileri** — ekran kenarlarinda animasyonlu gradyan cizgiler
- **Glassmorphism** kartlar, gradyan küreler, noise kaplama, hero parcaciklari
- **Scroll-reveal animasyonlari** — Intersection Observer ile elemanlar gorunurken kayarak belirir

### Icerik Bolumleri
| # | Bolum | Detaylar |
|---|-------|----------|
| 01 | **Hero** | Daktilo efekti, animasyonlu gradyan küreler, CTA butonlari |
| 02 | **Hakkimda** | Bento-grid duzeni, animasyonlu istatistik sayaclari |
| 03 | **Egitim** | Diploma ve dil sertifikasi kartlari, sertifika modallari |
| 04 | **Deneyim** | Dikey yol haritasi zaman cizgisi, sirket logo modallari |
| 05 | **Projeler** | 9 proje karti — acilir aciklamalar, renkli teknoloji etiketleri, tiklanma sayaclari |
| 06 | **Yetenekler** | Terminal tarzi arayuz, 6 kategorize beceri blogu ve seviye rozetleri |
| 07 | **Iletisim** | E-posta panoya kopyalama ve toast bildirimi, sosyal linkler |

### Coklu Dil Destegi
- **Ingilizce** ve **Turkce** arasinda aninda gecis (210+ ceviri anahtari)
- Tum cevrilebilir elemanlar `data-tr` nitelikleri kullanir
- Dil tercihi localStorage'da saklanir
- CV butonlari EN/TR versiyonlari arasinda dinamik gecis yapar

### Firebase Analitik
- **Ziyaretci takibi** — benzersiz ziyaretci ID'leri, gunluk/toplam sayaclar, 7 gunluk grafik (Chart.js)
- **CV analitigi** — dil bazinda goruntuleme/indirme olaylari, zaman damgasi ve metadata
- **Proje tiklama sayaclari** — proje basi atomik Firebase islemleri
- **Kullanici davranisi** — bolum goruntulenmeleri, sayfa goruntulenme sayilari, cihaz metadatasi
- **Yonetici paneli** — `#admin` hash ile erisilebilir

## Teknoloji Yigini

| Katman | Teknolojiler |
|--------|-------------|
| **Frontend** | HTML5, CSS3, Vanilla JavaScript |
| **Hosting ve Veritabani** | Firebase Hosting, Firebase Realtime Database |
| **Kutuphaneler** | Chart.js (ziyaretci grafigi), Font Awesome 6.5 (ikonlar) |
| **Fontlar** | Space Grotesk, JetBrains Mono |

## Baslarken

```bash
# Yerel sunucu (Firebase CLI gerekli)
firebase serve

# Firebase Hosting'e deploy
firebase deploy
```

Build adimi yok — dosyalar dogrudan `/public/` klasorunden sunulur.
