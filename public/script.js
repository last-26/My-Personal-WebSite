// Portfolio Website JavaScript - Samet Soysal

// ── Console signature (for the curious devs reading the source) ──
(function consoleSignature(){
    try {
        const big = 'font: 700 32px "Instrument Serif", Georgia, serif; color:#7c3aed; letter-spacing:-.02em;';
        const sub = 'color:#a8acbe; font: 12px "JetBrains Mono", monospace; line-height:1.6;';
        const accent = 'color:#2dd4bf; font: 12px "JetBrains Mono", monospace;';
        console.log('%cSamet Soysal', big);
        console.log('%cAI/ML Engineer — production AI is mostly engineering. The 90/10 rule.', sub);
        console.log('%c→ github.com/last-26   ✉ a.sametsoysal@gmail.com', accent);
        console.log('%cBuilt from scratch in vanilla JS — no frameworks. If you spot a bug, drop a line.', sub);
    } catch (_) { /* console unavailable — silent */ }
})();

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCiEXF0bnQngq7sJlwcbQreyPbYzR4NN1k",
  authDomain: "last-26.firebaseapp.com",
  databaseURL: "https://last-26-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "last-26",
  storageBucket: "last-26.firebasestorage.app",
  messagingSenderId: "258323865023",
  appId: "1:258323865023:web:427c38fd8aa1b1ff97d50a",
  measurementId: "G-NJ781YMWZV"
};

// Initialize Firebase
try {
    firebase.initializeApp(firebaseConfig);
} catch (error) {
    console.warn('Firebase initialization error:', error);
}
const database = firebase.database?.();

// Translations
const translations = {
    tr: {
        "a11y.skip": "Ana içeriğe atla",
        "nav.about": "Hakkımda",
        "nav.education": "Eğitim",
        "nav.experience": "Deneyim",
        "nav.skills": "Yetenekler",
        "nav.projects": "Projeler",
        "nav.contact": "İletişim",
        "section.about.label": "Hakkımda",
        "section.education.label": "Eğitim",
        "section.experience.label": "Deneyim",
        "section.projects.label": "Projeler",
        "section.skills.label": "Yetenekler",
        "hero.badge": "AI/ML Mühendisi & Full-Stack Developer",
        "hero.subtitle.prefix": "Uzmanlık alanım:",
        "hero.subtitle": "Yapay Zeka | Makine Öğrenmesi | NLP Uzmanı",
        "hero.description": "Üretim ortamı için AI sistemleri kuran bir Bilgisayar Mühendisiyim — RAG pipeline'ları, birden fazla LLM'i birlikte çalıştıran orkestrasyonlar ve MCP üzerinden veri katmanına bağlanan ajanlar. Modeli gerçek veri mühendisliğiyle buluşturan, milisaniye gecikmeli uçtan uca sistemler.",
        "hero.btn.projects": "Projelerim",
        "hero.btn.github": "GitHub Profilim",
        "hero.btn.contact": "İletişim",
        "hero.btn.cv.view": "Görüntüle",
        "hero.btn.cv.download": "İndir",
        "cvmodal.title": "Özgeçmiş",
        "cvmodal.newtab": "Yeni sekmede",
        "cvmodal.download": "İndir",
        "about.title.main": "Hakkımda",
        "about.title.soft": "",
        "about.intro": "<span class='kw'>Kod yazmak artık işin küçük bir parçası.</span> Vaktimin çoğu doğru soruyu sormaya, mimariye karar vermeye, &ldquo;bunu daha iyi nasıl yapardık&rdquo; diye durup düşünmeye, kodu incelemeye ve modelin atladığını yakalayan testleri yazmaya gidiyor. <span class='kw'>Daha az yazmak, daha çok düşünmek</span> — asıl mesele, mühendisin bu döngünün neresinde durduğu.",
        "about.origin": "<span class='kw'>Eskişehir Osmangazi Üniversitesi</span> mezunu bir Bilgisayar Mühendisiyim. Mühendislik temelimi makine öğrenmesi, örüntü tanıma ve graf teorisi üzerine attım — sonra odağı, gerçekten kullanıcının eline ulaşan LLM sistemlerine kaydırdım.",
        "about.focus": "Üretim ortamı için AI inşa ediyorum: 300 ms altı gecikmeyle çalışan <span class='kw'>RAG pipeline'ları</span>, bulut ve yerel modelleri birlikte koşturan <span class='kw'>çoklu-LLM orkestrasyonu</span> ve gerçek veri mühendisliğine bağlanan <span class='kw'>MCP tabanlı ajanlar</span>. İşin en ilginç kısmı, modelin veri akışıyla kesiştiği o nokta.",
        "about.impact": "FinSenti'de FinBERT ile <span class='kw'>%91.1 doğruluk</span>; iş başvuru sürecini saatlerden dakikalara indiren LangGraph ajanları (NextHire); SAMETEI'de kurumsal İK doküman süreçlerinde <span class='kw'>%70 hızlanma</span>. Ölçek, mühendislik ve biraz da inat.",
        "about.dossier.role": "Rol",
        "about.dossier.roleVal": "AI/ML Mühendisi",
        "about.dossier.edu": "Eğitim",
        "about.dossier.eduVal": "Eskişehir Osmangazi Üniversitesi · Bilgisayar Mühendisliği (Lisans)",
        "about.dossier.based": "Lokasyon",
        "about.dossier.basedVal": "Eskişehir, Türkiye",
        "about.dossier.recent": "Son deneyim",
        "about.dossier.recentVal": "IC İçtaş · TEI · Powintec",
        "about.dossier.focus": "Odak",
        "about.dossier.focusVal": "RAG · Çok-model · MCP · Vector Search",
        "about.dossier.lang": "Diller",
        "about.dossier.langVal": "Türkçe · İngilizce (C1)",
        "about.dossier.status": "Durum",
        "about.dossier.statusVal": "Yeni fırsatlara açık",
        "about.stats.years": "Yıl Deneyim",
        "about.stats.projects": "Tamamlanan Proje",
        "about.stats.technologies": "Teknoloji",
        "education.title.main": "Eğitim",
        "education.title.soft": "",
        "education.degree": "Bilgisayar Mühendisliği Lisansı",
        "education.school": "Eskişehir Osmangazi Üniversitesi",
        "education.date": "2020 - 2026",
        "education.detail": "Yapay Zeka, Makine Öğrenmesi ve Doğal Dil İşleme alanlarında uzmanlaşma. Mezuniyet projesi: HIREAI — AI destekli CV analiz platformu.",
        "education.cert.title": "İngilizce Dil Okulları",
        "education.cert.school": "American Cultural Language Schools",
        "education.cert.date": "2022 - 2024",
        "education.cert.detail": "Okuma, yazma, dinleme ve konuşma (Spoken Interaction & Production) alanlarında profesyonel yeterlilik eğitimi ve sertifika.",
        "education.cert.c1.btn": "C1 Sertifikası",
        "education.cert.b2.btn": "B2 Sertifikası",
        "education.track.label": "DÖNEM · YIL",
        "education.cert.label": "DOĞRULANMIŞ SERTİFİKALAR",
        "experience.title.main": "Deneyim",
        "experience.title.soft": "",
        "experience.certificate": "Sertifika",
        "experience.more": "Daha fazla göster",
        "experience.less": "Daha az göster",
        "experience.status.active": "AKTİF",
        "experience.status.done": "TAMAMLANDI",
        "experience.achievementsLabel": "ÖNEMLİ KAZANIMLAR",
        "experience.icictas.title": "Yazılım Geliştirme Stajyeri",
        "experience.icictas.company": "<a href='https://www.ictasnukleer.com.tr' target='_blank' class='company-link'>IC İçtaş Nükleer ve Endüstriyel Tesisler İnşaat A.Ş.</a>",
        "experience.icictas.date": "Oca 2026",
        "experience.icictas.desc": "Akkuyu Nükleer Santral sahasından gelen verileri analiz etmek için React.js, FastAPI ve PostgreSQL ile uçtan uca İSG Takip Paneli geliştirdim. Backend tarafında Passlib ve JWT ile güvenli kimlik doğrulama akışı kurdum, SQLAlchemy ORM ile veritabanı yönetimini optimize ettim. Yüksek kardinaliteli verilerde B-tree indeksleme uygulayarak sorgu performansını gözle görülür şekilde artırdım; Material UI ile yöneticiler için gerçek zamanlı analitik panolar tasarladım.",
        "experience.icictas.metrics.1": "Full-stack mimari",
        "experience.icictas.metrics.2": "Gerçek zamanlı pano",
        "experience.icictas.metrics.3": "B-tree indeksleme",
        "experience.icictas.achievements.1": "Akkuyu Nükleer sahası için React + FastAPI ile uçtan uca İSG Takip Paneli geliştirdim.",
        "experience.icictas.achievements.2": "Passlib ve JWT tabanlı güvenli kimlik doğrulama akışı kurdum.",
        "experience.icictas.achievements.3": "SQLAlchemy ORM ile yazılmış sorgularda B-tree indeksleme uygulayarak performansı önemli ölçüde artırdım.",
        "experience.icictas.achievements.4": "Material UI ile yöneticiler için gerçek zamanlı analitik panolar tasarladım.",
        "experience.tei.title": "Data Science & AI Stajyeri",
        "experience.tei.company": "<a href='https://www.tei.com.tr' target='_blank' class='company-link company-tei'>TEI – TUSAŞ Motor Sanayii A.Ş. | Eskişehir</a>",
        "experience.tei.date": "Ağu – Eyl 2025",
        "experience.tei.desc": "TEI'de izole ağlarda güvenli veri iletimi ve sistem mimarileri üzerine Ar-Ge yaptım. İnsan Kaynakları için LLM tabanlı 'SAMETEI' yapay zeka asistanının prototipini yönettim; OpenRouter ve yerel LLM entegrasyonlarını kurdum. Ayrıca n8n ile finansal metrikleri analiz eden otonom iş akışları ve Playwright ile e-ticaret süreçlerini otomatize eden RPA çözümleri geliştirdim.",
        "experience.tei.metrics.1": "Çoklu-LLM prototipi",
        "experience.tei.metrics.2": "n8n otomasyonu",
        "experience.tei.metrics.3": "İzole ağ Ar-Ge",
        "experience.tei.achievements.1": "LLM tabanlı 'SAMETEI' İK asistanı prototipini OpenRouter ve yerel LLM entegrasyonuyla yönettim.",
        "experience.tei.achievements.2": "n8n ile finansal metrikleri analiz eden otonom iş akışları geliştirdim.",
        "experience.tei.achievements.3": "Playwright ile e-ticaret süreçlerini otomatize eden RPA çözümleri kurdum.",
        "experience.tei.achievements.4": "İzole ağlarda güvenli veri iletimi üzerine Ar-Ge notları hazırladım.",
        "experience.powintec.title": "Part-Time Yazılım Geliştirici (Remote)",
        "experience.powintec.company": "Powintec Engineering | Wireless Charging of Small Electric Vehicles",
        "experience.powintec.date": "Tem 2023 – Tem 2025",
        "experience.powintec.desc": "Kablosuz şarj sistemlerinden gelen hizalama, sıcaklık ve verimlilik verilerini anlık izlemek için React.js, TailwindCSS ve WebSockets tabanlı bir yönetim paneli hazırladım. WebSocket'ten gelen yoğun veri akışının arayüz performansını düşürmemesi için state yönetimini optimize ettim; veriyi milisaniye düzeyinde gecikmeyle işledim. Donanım bağlantı kopmalarına karşı hata yönetim mekanizmaları geliştirerek sistem kararlılığını artırdım.",
        "experience.powintec.metrics.1": "Kablosuz şarj arayüzü",
        "experience.powintec.metrics.2": "WebSocket akışı",
        "experience.powintec.metrics.3": "< 1 ms gecikme",
        "experience.powintec.achievements.1": "React + TailwindCSS + WebSocket tabanlı kablosuz şarj izleme paneli hazırladım.",
        "experience.powintec.achievements.2": "Yüksek frekanslı WebSocket verisinde state yönetimini optimize ederek arayüz takılmalarını giderdim.",
        "experience.powintec.achievements.3": "Donanım bağlantı kopmalarına karşı hata yönetim mekanizmaları geliştirdim.",
        "skills.title.main": "Tech Stack",
        "skills.title.soft": "",
        "projects.title.main": "Projeler",
        "projects.title.soft": "",
        "projects.badge.corporate": "KURUMSAL",
        "projects.badge.graduation": "MEZUN. PROJESİ",
        "projects.badge.internship": "STAJ · TEI",
        "projects.group.postgrad": "mezuniyet sonrası",
        "projects.group.academic": "akademik dönem",
        "projects.badge.cloud": "BULUT",
        "projects.badge.devops": "DEVOPS",
        "projects.badge.agent": "AI AJAN",
        "projects.badge.mlops": "MLOPS",
        "projects.badge.rl": "RL / TRADING",
        "projects.status.live": "Canlı",
        "projects.status.archive": "Arşiv",
        "projects.status.wip": "Aktif geliştirme",
        "projects.wip": "Şu an geliştiriliyor",
        "projects.smtbot.subtitle": "Async 7/24 Kripto Vadeli İşlem Scalper Botu — Bybit V5",
        "projects.smtbot.casebtn": "Vakayı oku",
        "case.smtbot.h1": "vaka çalışması.",
        "case.smtbot.cover.problem": "Bybit V5 üzerinde 7/24 çalışan bir kripto vadeli işlem scalper botu. Asıl ilginç olan strateji değil — kırılgan TradingView scraper zincirini native bir WebSocket hattıyla değiştiren iki günlük yeniden yazım ve botun tek bir işlem kararını değiştirmeden bir gecede ~6700× hızlanması.",
        "case.smtbot.cover.status": "Bybit V5 native · ~640 test · ~24 ms döngü",
        "case.smtbot.stat1.k": "Döngü gecikmesi",
        "case.smtbot.stat2.k": "Taranan parite",
        "case.smtbot.stat3.k": "Testler",
        "case.smtbot.stat4.k": "Strateji",
        "case.smtbot.arch.tag": "01 · Mimari",
        "case.smtbot.arch.h": "Bar kapanışından emir gönderimine — olay tabanlı.",
        "case.smtbot.arch.lead": "Bir Bybit V5 WebSocket'i, canlı kline akışlarını parite başına bir buffer'a ve kapanış-bar zamanlayıcısına yayar. Python-yerleşik bir Pine v6 emülatörü indikatörleri süreç-içi hesaplar — orijinal TradingView okumalarıyla bit düzeyinde tıpatıp, ama ~160 s yerine ~24 ms'de. BotRunner, üç giriş yolunu tek bir karar elması üzerinden ardışık çalıştırır; yalnızca TAKE kararı Order Router'a ulaşır. Tüm bu döngünün altında SQLite, async kayıt defteri olarak yatar.",
        "case.smtbot.arch.lane1": "akışlar · 1m kapanış-bar · gap-fill",
        "case.smtbot.arch.lane2": "süreç-içi Pine v6 emülatörü · bit düzeyinde parite",
        "case.smtbot.arch.lane3": "üç giriş yolu · tek karar · tek çıkış doktrini",
        "case.smtbot.arch.lane4": "yalnızca TAKE · append-only kayıt · ayrık pano",
        "case.smtbot.arch.legend.ingest": "Veri girişi",
        "case.smtbot.arch.legend.indicator": "İndikatör katmanı",
        "case.smtbot.arch.legend.decide": "Karar şelalesi",
        "case.smtbot.arch.legend.act": "Yürütme",
        "case.smtbot.arch.legend.journal": "Kayıt defteri",
        "case.smtbot.arch.legend.dash": "Pano (salt-okunur)",
        "case.smtbot.stack.tag": "02 · Yığın",
        "case.smtbot.stack.h": "Bot neyden yapılı?",
        "case.smtbot.stack.lead": "Her bileşen tek bir gerekçeyle seçildi: 7/24 döngüde, sen izlemezken ayakta kalmak zorunda. Gösteriş için framework yok, faydası tartışmalı soyutlama yok.",
        "case.smtbot.stack.streams": "Akışlar",
        "case.smtbot.stack.brain": "Beyin",
        "case.smtbot.stack.execution": "Yürütme",
        "case.smtbot.stack.tooling": "İnce Ayar &amp; Testler",
        "case.smtbot.stack.streams.list": "<li><strong>Bybit V5 WebSocket</strong> <span><em>pybit</em> üzerinden kline.{1,3,5,15}.SYMBOL aboneliği</span></li><li><strong>BybitWSClient</strong> <span>async subscribe + oto-reconnect, GUI bağımlılığı yok</span></li><li><strong>KlineBuffer</strong> <span>parite başına deque; reconnect sırasında gap-fill</span></li><li><strong>CycleScheduler</strong> <span>1m kapanış-bar dağıtımı + heartbeat — olay tabanlı, polling yok</span></li>",
        "case.smtbot.stack.brain.list": "<li><strong>Python 3.11+</strong> <span>tam async (<em>asyncio</em>); bar kapanışından emire kadar olay tabanlı</span></li><li><strong>Pine v6 emülatörü</strong> <span>HA · WaveTrend · MFI · EMA200 · VWAP — süreç-içi, bit düzeyinde parite</span></li><li><strong>evaluate_entry()</strong> <span>ardışık dağıtım: cross_based → pre_cross → ha_reversal</span></li><li><strong>Çıkış doktrini</strong> <span>pozisyona bağlı SL, post-only reduce-only TP, idempotent BE kilidi</span></li><li><strong>pydantic · pyyaml</strong> <span>tipli yapılandırma + env değişkenleri; açılışta şema doğrulaması</span></li><li><strong>FastAPI + uvicorn</strong> <span>salt-okunur kayıt görüntüleyici, 5 s poll, canlı PnL defteri</span></li>",
        "case.smtbot.stack.execution.list": "<li><strong>Bybit V5 REST</strong> <span><em>pybit</em> ile vadeli işlem (V5 endpoint, hedge'e uyumlu)</span></li><li><strong>Order Router</strong> <span>yalnızca TAKE'de yönlendirir — NO_SETUP ve REJECT hatta dahi çıkmaz</span></li><li><strong>UTA + hedge mode</strong> <span>Unified Trading Account, cross-margin USDT/USDC</span></li><li><strong>Limit + SL doktrini</strong> <span>asla market giriş yok — risk stop ile sınırlı, maker rebate tasarımdan</span></li>",
        "case.smtbot.stack.tooling.list": "<li><strong>aiosqlite</strong> <span>append-only async kayıt — işlemler, karar logu, pozisyon snapshot'ları</span></li><li><strong>pytest</strong> <span>~640 vaka; strateji, veri hattı, kayıt defteri, yürütme davranışını sabitler</span></li><li><strong>Optuna (TPE + CMA-ES)</strong> <span>iki aşamalı walk-forward — TPE geniş arama, CMA-ES rafine</span></li><li><strong>Claude Code</strong> <span>AI eş programlama — kod yazar, diff inceler (kararlar Python'da kalır)</span></li><li><strong>stable-baselines3</strong> <span>RL yol haritası (Faz 6) — şu an kural tabanlı VMC</span></li>",
        "case.smtbot.problems.tag": "03 · Problemler",
        "case.smtbot.problems.h": "Üç zor problem.",
        "case.smtbot.p1.h": "Kesim — ve ondan sağ çıkan.",
        "case.smtbot.p1.body": "İlk veri katmanı bir dolaylama zinciriydi: TradingView Desktop → Electron CDP → Node.js MCP daemon → Python köprüsü → hücre-hücre sinyal-tablosu parser'ı. Çalışıyordu, ama botu TV açık bir Windows makinesine bağlıyordu, 15 sembolü <em>~160 saniyede</em> seri tarıyordu ve stratejiyi 5 dakikalık ritimde düşünmeye zorluyordu. İki günlük bir yeniden yazım, tüm zinciri Bybit V5 WebSocket + Python-yerleşik Pine v6 emülatörüyle değiştirdi. Zor olan hız değildi — pariteydi. HA streak sayacındaki tek bir off-by-one ya da WaveTrend'de yanlış bir işaret, her giriş kararını sessizce değiştirirdi. Bir diagnostik script eski ve yeni hattın her sinyal hücresini farkladı: <em>ilk temiz build'de 10/10 bit düzeyinde tıpatıp.</em> Kesim sonrası backtest kohortu, kesim öncesi kohortla <em>işlem başına ±0.01R</em> içinde örtüştü. Hiçbir regresyon yok.",
        "case.smtbot.p2.h": "Üç ardışık giriş yolu, tek skorlama motoru.",
        "case.smtbot.p2.body": "Trend tükendiği anda tetiklenen bir mean-reversion girişi: WaveTrend cross + Heikin Ashi renk değişimi + çok zaman dilimli yumuşak faktör yığını. Birincil yol (<em>cross_based</em>) tetiklenmezse bot eğim tabanlı <em>pre_cross</em> dedektörüne, oradan da hızlı <em>ha_reversal</em> dedektörüne düşer. Her yol <em>aynı</em> skorlama motorunu yön-hizalı sinyaller üzerinde 5dk + 15dk + 3dk zaman dilimlerinde ve bir BTC/ETH bileşik bias'ıyla işletir. Şelale, ilk TAKE'de kısa devre yapar — çift sayım yok, yollar arası çatışma yok.",
        "case.smtbot.p3.h": "Tek çıkış doktrini.",
        "case.smtbot.p3.body": "Tek pozisyon, üç çıkış, Python timer'ı yok. <em>Pozisyona bağlı SL</em> bot tarafında değil Bybit tarafında — proses çökmüş olsa bile tetiklenir. <em>Post-only reduce-only TP limit</em> defterde bekler; dolum olursa taker yerine maker rebate toplanır. <em>İdempotent break-even kilidi</em>, gerçekleşmemiş P&amp;L bir eşiği aşar aşmaz stop'u girişe taşır — ve idempotent demek: kilit zaten stop'u taşıdıysa tekrar çağırmak no-op'tur. Bu özellik reconnect'lerden, çökmelerden, saat sapmasından ve bir doluma çakışan sabah 3 döngüsünden sağ çıkar.",
        "case.smtbot.learnings.tag": "04 · Öğrendiklerim",
        "case.smtbot.learnings.h": "Post-it'e yazacağım üç satır.",
        "case.smtbot.learn1": "<em>Gecikme bir mimari meselesidir, optimizasyon değil.</em> ~6700× hızlanma zinciri ayarlamaktan değil, onu değiştirmekten geldi. Bütçe iki büyüklük mertebesi olduğunda, cevap nadiren daha hızlı bir döngüdür.",
        "case.smtbot.learn2": "<em>Bir grafik motorunu port ediyorsan parite birinci sınıf gerekliliktir.</em> 10/10 bit düzeyinde sinyal diff'i, kesim sonrası backtest kohortunu inandırıcı kılan şeydir. Onsuz her sapma tartışma olur, gerçek değil.",
        "case.smtbot.learn3": "<em>Mimariyi yayımla, parametreleri sakla.</em> Ayarlanmış ağırlıklar — RR çarpanları, yumuşak faktör ağırlıkları, parite başına risk — işin asıl üstünlüğüdür (edge). Onları yayımlamak, özel bir sinyali kalabalık bir sinyale çevirir. Private repoda yaşıyorlar, orada da kalacaklar.",
        "case.smtbot.back": "Portföye dön",
        "projects.smtbot.description": "Bybit V5 üzerinde başsız, olay tabanlı bir trading botu. İki günlük bir yeniden yazım, kırılgan bir TradingView-Desktop scraper zincirini native WebSocket hattı + süreç-içi Pine v6 emülatörüyle değiştirdi — döngü gecikmesini ~160 s'den ~24 ms'ye düşürdü (~6700×). İlk temiz build'de 10/10 bit düzeyinde indikatör paritesi, kesim sonrası backtest kohortu ±0.01R içinde, üç yollu giriş şelalesi ve tek çıkış doktrini. Ayarlanmış ağırlıklar işin asıl üstünlüğü — private repoda kalıyorlar.",
        "projects.smtbot.metric": "~24 ms döngü · 25 parite · ~6700× hızlanma",
        "projects.finsenti.subtitle": "Finansal Duygu Analizi MLOps Pipeline'ı",
        "projects.finsenti.description": "Finansal metinlerde duygu analizi için uçtan uca bir MLOps pipeline'ı. FinBERT ve distilBERT modellerini LoRA adaptörleriyle fine-tune ediyor, deneyleri MLflow ile takip ediyor, tahminleri FastAPI + Next.js üzerinden sunuyor. FinBERT + LoRA modeli %91.1 doğruluk ve 0.90 F1 skoruna ulaştı.",
        "projects.finsenti.metric": "%91.1 doğruluk · FinBERT + LoRA",
        "projects.nexthire.subtitle": "AI Destekli İş Başvuru Ajanı",
        "projects.nexthire.description": "LangGraph tabanlı, çok adımlı bir AI ajan sistemi. CV'yi yükle, iş ilanını yapıştır — ajan otomatik olarak ATS skorunu hesaplar, eksik yetkinlikleri belirler, kişiselleştirilmiş bir ön yazı üretir ve başvuruyu kanban panosuna ekler. Çoklu-model yönlendirmesi ile maliyet-performans dengesini kurar.",
        "projects.nexthire.metric": "LangGraph · Çoklu-model yönlendirmesi",
        "projects.awsai.subtitle": "AWS ile Akıllı Doküman Soru-Cevap Sistemi",
        "projects.awsai.description": "Tamamen serverless doküman soru-cevap sistemi — PDF'ler S3'te, metin Textract'tan, doğal dilde cevaplar Bedrock üzerindeki Claude'dan geliyor. Tüm yığın Infrastructure as Code (CDK) ile yazıldı; AWS konsolunda değil, sürüm kontrolünde yaşıyor. API Gateway + Lambda + DynamoDB + SNS.",
        "projects.swiftlink.subtitle": "Hızlı & Modern URL Kısaltma Servisi",
        "projects.swiftlink.description": "FastAPI ile uçtan uca URL kısaltıcı — Docker ile konteynerize, GitHub Actions ile CI testleri. Tıklama analitiği, gerçek zamanlı istatistikler, özel slug. API'den panoya kadar tüm yığını ben yazdım.",
        "projects.sametei.subtitle": "Kurum İçi Çalışan, RAG Tabanlı İK Asistanı",
        "projects.sametei.description": "Dahili İK prosedürleri için LibreChat tabanlı bir asistan. MongoDB vektör arama, yerel Ollama LLM'leri ve Qwen 2.5-VL OCR'ı sunan bir FastAPI sidecar (Tesseract yedeği ile) üzerine kurulu bir RAG hattı, şirketin kendi politika ve doküman havuzundan kaynak göstererek cevap üretir — halüsinasyon yerine atıflı yanıtlar. OpenAI uyumlu katman, gerektiğinde host edilen modellere yönlendirme yapar; hassas İK verisi kurum ağının dışına çıkmaz. İK ekiplerinin doküman işleme süresini %70 azalttı.",
        "projects.hireai.subtitle": "AI Destekli CV & Portföy Analiz Platformu",
        "projects.hireai.description": "ATS tabanlı CV analizi ve optimizasyon platformu. CV'leri iş tanımlarına göre değerlendirir, ATS uyumlu puanlar ve iyileştirme önerileri sunar. İK ekiplerinin ön eleme süresini %50 azalttı.",
        "projects.link": "GitHub'da Görüntüle",
        "projects.link.gitlab": "GitLab'da Görüntüle",
        "contact.title": "İletişim",
        "contact.eyebrow": "İLETİŞİME GEÇ",
        "contact.status": "Yeni işlere açığım",
        "contact.statement.line1": "Birlikte bir şey",
        "contact.statement.line2": "inşa edelim.",
        "contact.lead": "Yeni fırsatlara ve işbirliklerine açığım. Yazın — bir gün içinde dönerim.",
        "contact.copy": "kopyala",
        "contact.email.label": "E-POSTA",
        "contact.email.copied": "Email kopyalandı!",
        "hero.meta.role": "ROL",
        "hero.meta.location": "KONUM",
        "hero.meta.time": "YEREL SAAT",
        "hero.meta.status": "DURUM",
        "hero.meta.available": "Çalışmaya hazır",
        "hero.scroll": "KAYDIR",
        "about.eyebrow": "KİMİM",
        "about.stats.metayears": "DENEYİM",
        "about.stats.metaprojects": "TAMAMLANAN",
        "about.stats.metatech": "STACK",
        "about.specs.ataGlance": "ÖZET",
        "about.specs.basedIn": "LOKASYON",
        "about.specs.basedInVal": "Eskişehir, Türkiye",
        "about.specs.openTo": "AÇIK OLDUĞUM",
        "about.specs.openToVal": "Tam Zamanlı · Sözleşmeli · Uzaktan",
        "about.specs.focus": "ODAK",
        "about.specs.focusVal": "AI · ML · LLM · Production",
        "education.badge.bsc": "LİSANS",
        "education.badge.lang": "DİL",
        "visitor.header": "Ziyaretçi",
        "visitor.total": "toplam",
        "visitor.daily": "bugün",
        "visitor.weekly": "SON 7 GÜN",
        "visitor.weekly.cta": "7 günlük dağılımı gör",
        "visitor.reset.note": "Veriler 16 Mart 2026 tarihinde sıfırlanmıştır.",
        "footer.tagline": "Sıfırdan vanilla JS ile yazıldı. Framework yok, kısa yol yok, sadece niyet var.",
        "footer.copyright": "© 2026 Samet Soysal. Tüm hakları saklıdır.",
        "footer.made": "Niyetle yazıldı",
        "footer.signature": "Sonraki build'de görüşürüz.",
        "footer.uptop": "Başa dön",
        "footer.status": "Yeni fırsatlara açık",
        "footer.nav.title": "Sayfalar",
        "footer.social.title": "Bağlantılar",
        "footer.meta.title": "Meta",
        "footer.meta.time": "Yerel saat",
        "footer.meta.loc": "Konum",
        "footer.meta.stack": "Stack",
        "footer.meta.host": "Hosting",
        "footer.copyright": "© 2026 Samet Soysal. Tüm hakları saklıdır.",
        "footer.made": "Tutkuyla kodlanmıştır"
    },
    en: {
        "a11y.skip": "Skip to main content",
        "nav.about": "About",
        "nav.education": "Education",
        "nav.experience": "Experience",
        "nav.skills": "Skills",
        "nav.projects": "Projects",
        "nav.contact": "Contact",
        "section.about.label": "About",
        "section.education.label": "Education",
        "section.experience.label": "Experience",
        "section.projects.label": "Projects",
        "section.skills.label": "Skills",
        "hero.badge": "AI/ML Engineer & Full-Stack Developer",
        "hero.subtitle.prefix": "I specialize in",
        "hero.subtitle": "Artificial Intelligence | Machine Learning | NLP Specialist",
        "hero.description": "Computer Engineer building production AI — RAG pipelines, Multi-LLM orchestrations, and MCP-driven agents. End-to-end systems with millisecond retrieval, bridging models with real data engineering.",
        "hero.btn.projects": "My Projects",
        "hero.btn.github": "My GitHub Profile",
        "hero.btn.contact": "Contact",
        "hero.btn.cv.view": "View",
        "hero.btn.cv.download": "Download",
        "cvmodal.title": "Curriculum Vitae",
        "cvmodal.newtab": "New tab",
        "cvmodal.download": "Download",
        "about.title.main": "About Me",
        "about.title.soft": "",
        "about.intro": "<span class='kw'>Writing code is the small part of the job now.</span> The work moved up the stack: asking the sharper question, owning the architecture, the &ldquo;how do we make this better?&rdquo; instinct, the review that catches what looks fine, the test that pins what the model missed. <span class='kw'>Less typing, more thinking</span> — and where the engineer stands in the loop is the real question.",
        "about.origin": "Computer Engineer, graduated from <span class='kw'>Eskişehir Osmangazi University</span>. Built my engineering foundation across machine learning, pattern recognition, and graph theory — then shifted the focus to applied LLM systems where the work actually shipped to users.",
        "about.focus": "I build production AI: <span class='kw'>RAG pipelines</span> at sub-300ms latency, <span class='kw'>Multi-LLM orchestrations</span> with cloud + local fallback, and <span class='kw'>MCP-driven agents</span> that bridge real data engineering. The interesting work happens where the model meets the bus.",
        "about.impact": "FinBERT-driven sentiment with <span class='kw'>91.1% accuracy</span> at FinSenti; LangGraph agents that cut job-application time from hours to minutes (NextHire); <span class='kw'>70% acceleration</span> on enterprise HR document workflows at SAMETEI. Scale + engineering + a bit of stubbornness.",
        "about.dossier.role": "Role",
        "about.dossier.roleVal": "AI/ML Engineer",
        "about.dossier.edu": "Education",
        "about.dossier.eduVal": "Eskişehir Osmangazi University · BSc Computer Engineering",
        "about.dossier.based": "Based",
        "about.dossier.basedVal": "Eskişehir, Türkiye",
        "about.dossier.recent": "Recent",
        "about.dossier.recentVal": "IC İçtaş · TEI · Powintec",
        "about.dossier.focus": "Focus",
        "about.dossier.focusVal": "RAG · Multi-LLM · MCP · Vector Search",
        "about.dossier.lang": "Languages",
        "about.dossier.langVal": "Turkish · English (C1)",
        "about.dossier.status": "Status",
        "about.dossier.statusVal": "Open to opportunities",
        "about.stats.years": "Years of Experience",
        "about.stats.projects": "Shipped Projects",
        "about.stats.technologies": "Technologies",
        "education.title.main": "Education",
        "education.title.soft": "",
        "education.degree": "BSc in Computer Engineering",
        "education.school": "Eskişehir Osmangazi University",
        "education.date": "2020 - 2026",
        "education.detail": "Specializing in Artificial Intelligence, Machine Learning and NLP. Capstone project: HIREAI — AI-powered CV analysis platform.",
        "education.cert.title": "English Language Schools",
        "education.cert.school": "American Cultural Language Schools",
        "education.cert.date": "2022 - 2024",
        "education.cert.detail": "Professional proficiency training and certification in reading, writing, listening, and spoken interaction/production.",
        "education.cert.c1.btn": "C1 Certificate",
        "education.cert.b2.btn": "B2 Certificate",
        "education.track.label": "PERIOD · YEARS",
        "education.cert.label": "VERIFIED CERTIFICATES",
        "experience.title.main": "Experience",
        "experience.title.soft": "",
        "experience.certificate": "Certificate",
        "experience.more": "Show more",
        "experience.less": "Show less",
        "experience.status.active": "ACTIVE",
        "experience.status.done": "COMPLETED",
        "experience.achievementsLabel": "KEY ACHIEVEMENTS",
        "experience.icictas.title": "Software Development Intern",
        "experience.icictas.company": "<a href='https://www.ictasnukleer.com.tr/en/' target='_blank' class='company-link'>IC Ictas Nuclear and Industrial Facilities Construction Inc.</a>",
        "experience.icictas.date": "Jan 2026",
        "experience.icictas.desc": "I developed an end-to-end OHS Tracking Panel using React.js, FastAPI, and PostgreSQL to analyze data from the Akkuyu Nuclear Power Plant site. I implemented secure authentication systems using Passlib and JWT on the backend, while optimizing database management with SQLAlchemy ORM. Additionally, I improved query performance by applying B-tree indexing strategies on high-cardinality data and designed real-time analytical dashboards for managers using Material UI.",
        "experience.icictas.metrics.1": "Full-stack stack",
        "experience.icictas.metrics.2": "Real-time dashboard",
        "experience.icictas.metrics.3": "B-tree indexed",
        "experience.icictas.achievements.1": "Built an end-to-end OHS Tracking Panel for the Akkuyu Nuclear site with React + FastAPI.",
        "experience.icictas.achievements.2": "Implemented secure authentication flow using Passlib and JWT.",
        "experience.icictas.achievements.3": "Optimized SQLAlchemy ORM queries with B-tree indexing for substantial perf gains.",
        "experience.icictas.achievements.4": "Designed real-time analytical dashboards for managers with Material UI.",
        "experience.tei.title": "Data Science & AI Intern",
        "experience.tei.company": "<a href='https://www.tei.com.tr/en' target='_blank' class='company-link company-tei'>TEI – TUSAS Engine Industries Inc. | Eskişehir, Türkiye</a>",
        "experience.tei.date": "Aug – Sep 2025",
        "experience.tei.desc": "I conducted R&D on secure data transmission and system architectures in isolated networks at TEI. I managed the prototyping process of 'SAMETEI', an LLM-based AI assistant for the HR department, integrating OpenRouter and Local LLMs. Furthermore, I developed autonomous workflows for financial metric analysis using n8n and created RPA solutions using Playwright to automate e-commerce processes.",
        "experience.tei.metrics.1": "Multi-LLM prototype",
        "experience.tei.metrics.2": "n8n automations",
        "experience.tei.metrics.3": "Isolated-network R&D",
        "experience.tei.achievements.1": "Led the 'SAMETEI' HR LLM assistant prototype with OpenRouter + Local LLM integration.",
        "experience.tei.achievements.2": "Built autonomous n8n workflows for financial metric analysis.",
        "experience.tei.achievements.3": "Delivered Playwright-based RPA solutions for e-commerce automation.",
        "experience.tei.achievements.4": "Produced R&D notes on secure data transmission in isolated networks.",
        "experience.powintec.title": "Part-Time Software Developer (Remote)",
        "experience.powintec.company": "Powintec Engineering | Wireless Charging of Small Electric Vehicles",
        "experience.powintec.date": "Jul 2023 – Jul 2025",
        "experience.powintec.desc": "I built a management dashboard based on React.js, TailwindCSS, and WebSockets to monitor alignment, temperature, and efficiency data from wireless charging systems in real-time. I optimized state management to handle intense WebSocket data streams without compromising UI performance, ensuring low-latency data processing. I also improved system stability by developing error handling mechanisms against hardware connection drops.",
        "experience.powintec.metrics.1": "Wireless-charging UI",
        "experience.powintec.metrics.2": "WebSocket stream",
        "experience.powintec.metrics.3": "< ms latency",
        "experience.powintec.achievements.1": "Shipped a React + TailwindCSS + WebSocket dashboard for live wireless-charging telemetry.",
        "experience.powintec.achievements.2": "Optimized state management on high-frequency WebSocket traffic, eliminating UI jank.",
        "experience.powintec.achievements.3": "Hardened the app with error-handling mechanisms against hardware disconnects.",
        "skills.title.main": "Tech Stack",
        "skills.title.soft": "",
        "projects.title.main": "Projects",
        "projects.title.soft": "",
        "projects.badge.corporate": "CORPORATE",
        "projects.badge.graduation": "CAPSTONE",
        "projects.badge.internship": "INTERNSHIP · TEI",
        "projects.group.postgrad": "post-graduate work",
        "projects.group.academic": "academic milestones",
        "projects.badge.cloud": "CLOUD",
        "projects.badge.devops": "DEVOPS",
        "projects.badge.agent": "AI AGENT",
        "projects.badge.mlops": "MLOPS",
        "projects.badge.rl": "RL / TRADING",
        "projects.status.live": "Live",
        "projects.status.archive": "Archive",
        "projects.status.wip": "In active development",
        "projects.wip": "Currently building",
        "projects.smtbot.subtitle": "Async 24/7 Crypto Futures Scalper — Bybit V5",
        "projects.smtbot.casebtn": "Read the case",
        "case.smtbot.h1": "case study.",
        "case.smtbot.cover.problem": "A 24/7 crypto futures scalper on Bybit V5. The interesting story isn't the strategy — it's the two-day rewrite that replaced a brittle TradingView scraper chain with a native WebSocket pipeline, and the bot got ~6700× faster overnight without changing a single trade decision.",
        "case.smtbot.cover.status": "Bybit V5 native · ~640 tests · ~24 ms cycle",
        "case.smtbot.stat1.k": "Cycle latency",
        "case.smtbot.stat2.k": "Pairs scanned",
        "case.smtbot.stat3.k": "Tests",
        "case.smtbot.stat4.k": "Strategy",
        "case.smtbot.arch.tag": "01 · Architecture",
        "case.smtbot.arch.h": "Event-driven, from bar boundary to order placement.",
        "case.smtbot.arch.lead": "A Bybit V5 WebSocket fans live kline streams into a per-symbol buffer and a closed-bar scheduler. A Python-native Pine v6 emulator computes the indicators in-process — bit-perfect parity with the original TradingView readings, but at ~24 ms instead of ~160 s. The BotRunner cascades three entry paths through a single decision diamond; only TAKE reaches the Order Router. SQLite is the async journal underneath everything.",
        "case.smtbot.arch.lane1": "streams · 1m closed-bar · gap-fill",
        "case.smtbot.arch.lane2": "in-process Pine v6 emulator · bit-perfect parity",
        "case.smtbot.arch.lane3": "three entry paths · one decision · single exit doctrine",
        "case.smtbot.arch.lane4": "TAKE only · append-only journal · out-of-band dashboard",
        "case.smtbot.arch.legend.ingest": "Data ingress",
        "case.smtbot.arch.legend.indicator": "Indicator layer",
        "case.smtbot.arch.legend.decide": "Decision cascade",
        "case.smtbot.arch.legend.act": "Execute",
        "case.smtbot.arch.legend.journal": "Journal",
        "case.smtbot.arch.legend.dash": "Dashboard (read-only)",
        "case.smtbot.stack.tag": "02 · Stack",
        "case.smtbot.stack.h": "What the bot is made of.",
        "case.smtbot.stack.lead": "Every component picked for one reason: it has to survive a 24/7 loop without you watching it. No frameworks for show, no abstractions that aren't paying for themselves.",
        "case.smtbot.stack.streams": "Streams",
        "case.smtbot.stack.brain": "Brain",
        "case.smtbot.stack.execution": "Execution",
        "case.smtbot.stack.tooling": "Tuning &amp; Tests",
        "case.smtbot.stack.streams.list": "<li><strong>Bybit V5 WebSocket</strong> <span>kline.{1,3,5,15}.SYMBOL subscriptions via <em>pybit</em></span></li><li><strong>BybitWSClient</strong> <span>async subscribe + auto-reconnect, no GUI dependency</span></li><li><strong>KlineBuffer</strong> <span>per-symbol deque with gap-fill on reconnect</span></li><li><strong>CycleScheduler</strong> <span>1m closed-bar dispatch + heartbeat — event-driven, never polling</span></li>",
        "case.smtbot.stack.brain.list": "<li><strong>Python 3.11+</strong> <span>fully async (<em>asyncio</em>), event-driven from bar boundary to order</span></li><li><strong>Pine v6 emulator</strong> <span>HA · WaveTrend · MFI · EMA200 · VWAP — bit-perfect parity, in-process</span></li><li><strong>evaluate_entry()</strong> <span>cascade dispatch: cross_based → pre_cross → ha_reversal</span></li><li><strong>Exit doctrine</strong> <span>position-attached SL, post-only reduce-only TP, idempotent BE lock</span></li><li><strong>pydantic · pyyaml</strong> <span>typed config + env overrides, schema validation at boot</span></li><li><strong>FastAPI + uvicorn</strong> <span>read-only journal viewer, 5 s poll, live PnL ledger</span></li>",
        "case.smtbot.stack.execution.list": "<li><strong>Bybit V5 REST</strong> <span>futures trading via <em>pybit</em> (V5 endpoints, hedge-aware)</span></li><li><strong>Order Router</strong> <span>routes only on TAKE — NO_SETUP and REJECT short-circuit before the wire</span></li><li><strong>UTA + hedge mode</strong> <span>Unified Trading Account, cross-margin USDT/USDC</span></li><li><strong>Limit + SL doctrine</strong> <span>no market entries, ever — risk bounded by the stop, maker rebate by design</span></li>",
        "case.smtbot.stack.tooling.list": "<li><strong>aiosqlite</strong> <span>append-only async journal — trades, decision log, position snapshots</span></li><li><strong>pytest</strong> <span>~640 cases pinning strategy, data pipeline, journal, execution</span></li><li><strong>Optuna (TPE + CMA-ES)</strong> <span>two-stage walk-forward tune — TPE for wide search, CMA-ES for refinement</span></li><li><strong>Claude Code</strong> <span>pair-programming AI — codes, audits diffs (decisions stay in Python)</span></li><li><strong>stable-baselines3</strong> <span>RL roadmap (Phase 6) — current bot is rule-based VMC</span></li>",
        "case.smtbot.problems.tag": "03 · Problems",
        "case.smtbot.problems.h": "Three hard problems.",
        "case.smtbot.p1.h": "The cutover — and what survives it.",
        "case.smtbot.p1.body": "The first data layer was a chain of indirection: TradingView Desktop → Electron CDP → Node.js MCP daemon → Python bridge → cell-by-cell signal-table parser. It worked, but pinned the bot to a Windows machine with TV open, serial-swept 15 symbols in <em>~160 seconds</em>, and forced the strategy to think in 5-minute cadence. A two-day rewrite replaced the entire chain with a Bybit V5 WebSocket + Python-native Pine v6 emulator. The hard part wasn't speed — it was parity. A single off-by-one in the HA streak counter or a wrong sign in WaveTrend would silently change every entry decision. A diagnostic diffed every signal cell between the old and new pipelines: <em>10/10 bit-perfect on the first clean build.</em> Post-cutover backtest cohort matched the pre-cutover cohort within <em>±0.01R per trade.</em> No regression.",
        "case.smtbot.p2.h": "Three cascade entry paths, one scoring engine.",
        "case.smtbot.p2.body": "A mean-reversion entry that fires at the moment a trend exhausts: WaveTrend cross + Heikin Ashi color flip + a multi-timeframe soft factor stack. If the primary path (<em>cross_based</em>) doesn't fire, the bot falls through to a slope-based <em>pre_cross</em> detector, then to a fast <em>ha_reversal</em> detector. Each path feeds the <em>same</em> scoring engine against direction-aligned signals on 5m + 15m + 3m timeframes plus a BTC/ETH composite bias. The cascade short-circuits on the first TAKE — no double-counting, no path-fighting.",
        "case.smtbot.p3.h": "A single exit doctrine.",
        "case.smtbot.p3.body": "One position, three exits, no Python timers. <em>Position-attached SL</em> lives on Bybit, not in the bot — it fires even if the process is dead. <em>Post-only reduce-only TP limit</em> sits in the book, so a fill collects the maker rebate instead of paying taker. An <em>idempotent break-even lock</em> moves the stop to entry the moment unrealized P&amp;L crosses a threshold — and idempotent means: if the lock has already moved the stop, calling it again is a no-op. That property survives reconnects, crashes, clock skew, and the 3am cycle that overlaps a fill.",
        "case.smtbot.learnings.tag": "04 · What I learned",
        "case.smtbot.learnings.h": "Three lines I'd write on a Post-it.",
        "case.smtbot.learn1": "<em>Latency is architecture, not optimization.</em> The ~6700× speedup didn't come from tuning the chain — it came from replacing it. When the budget is two orders of magnitude, the answer is rarely a faster loop.",
        "case.smtbot.learn2": "<em>Parity is a first-class requirement when you port a chart engine.</em> A 10/10 bit-perfect signal diff is what made the post-cutover backtest cohort credible. Without it, every divergence is a discussion instead of a fact.",
        "case.smtbot.learn3": "<em>Publish the architecture, withhold the parameters.</em> The tuned weights — RR multiples, soft factor weights, per-symbol risk — are the edge. Publishing them turns a private signal into a crowded one. They live in the private repo, and they stay there.",
        "case.smtbot.back": "Back to portfolio",
        "projects.smtbot.description": "A headless event-driven trading bot on Bybit V5. A two-day rewrite replaced a brittle TradingView-Desktop scraper chain with a native WebSocket pipeline + in-process Pine v6 emulator — cutting cycle latency from ~160 s to ~24 ms (~6700×). Bit-perfect indicator parity (10/10 first build), backtest cohort within ±0.01R post-cutover, three-path entry cascade with a single exit doctrine. The tuned weights are the edge — they stay in the private repo.",
        "projects.smtbot.metric": "~24 ms cycle · 25 pairs · ~6700× speedup",
        "projects.finsenti.subtitle": "Financial Sentiment Analysis MLOps Pipeline",
        "projects.finsenti.description": "End-to-end MLOps pipeline for financial sentiment analysis. Fine-tunes FinBERT and distilBERT with LoRA adapters, tracks experiments with MLflow, and serves predictions via FastAPI + Next.js. FinBERT + LoRA model achieved 91.1% accuracy and 0.90 F1 score.",
        "projects.finsenti.metric": "91.1% accuracy · FinBERT + LoRA",
        "projects.nexthire.subtitle": "AI-Powered Job Application Agent",
        "projects.nexthire.description": "Multi-step AI agent system built with LangGraph. Upload your CV, paste a job posting — the agent automatically calculates ATS score, identifies skill gaps, generates a personalized cover letter, and adds the application to a kanban board. Optimizes cost-performance with multi-model routing.",
        "projects.nexthire.metric": "LangGraph · Multi-model routing",
        "projects.awsai.subtitle": "Intelligent Document Q&A System on AWS",
        "projects.awsai.description": "Fully serverless document Q&A — PDFs in S3, text via Textract, Claude on Bedrock answers natural-language questions. The whole stack as Infrastructure as Code (CDK), living in version control instead of a console. API Gateway + Lambda + DynamoDB + SNS.",
        "projects.swiftlink.subtitle": "Fast & Modern URL Shortener Service",
        "projects.swiftlink.description": "End-to-end URL shortener built with FastAPI — Docker-containerized, CI-tested via GitHub Actions. Click analytics, real-time stats, custom slugs. Owned the whole stack from API to dashboard.",
        "projects.sametei.subtitle": "On-Prem RAG Assistant for Enterprise HR",
        "projects.sametei.description": "A LibreChat-based assistant for internal HR procedures. A RAG pipeline — MongoDB vector search, local Ollama LLMs, and a FastAPI sidecar serving Qwen 2.5-VL OCR with a Tesseract fallback — answers from the company's own policy and document corpus and returns cited sources instead of hallucinations. An OpenAI-compatible layer routes to hosted models when latency or quality calls for it; sensitive HR data never leaves the network. Cut HR teams' document handling time by 70%.",
        "projects.hireai.subtitle": "AI-Powered CV & Portfolio Analysis Platform",
        "projects.hireai.description": "ATS-based CV analysis and optimization platform. Analyzes CVs according to job descriptions and provides ATS-compliant scores and improvement suggestions. Reduced HR teams' pre-screening time by 50%.",
        "projects.link": "View on GitHub",
        "projects.link.gitlab": "View on GitLab",
        "contact.title": "Contact",
        "contact.eyebrow": "GET IN TOUCH",
        "contact.status": "Available for new work",
        "contact.statement.line1": "Let's build",
        "contact.statement.line2": "something together.",
        "contact.lead": "Open to new opportunities and collaborations. Drop a line — I respond within a day.",
        "contact.copy": "copy",
        "contact.email.label": "EMAIL",
        "contact.email.copied": "Email copied!",
        "hero.meta.role": "ROLE",
        "hero.meta.location": "LOCATION",
        "hero.meta.time": "LOCAL TIME",
        "hero.meta.status": "STATUS",
        "hero.meta.available": "Available for work",
        "hero.scroll": "SCROLL",
        "about.eyebrow": "WHO I AM",
        "about.stats.metayears": "EXPERIENCE",
        "about.stats.metaprojects": "SHIPPED",
        "about.stats.metatech": "STACK",
        "about.specs.ataGlance": "AT A GLANCE",
        "about.specs.basedIn": "BASED IN",
        "about.specs.basedInVal": "Eskişehir, Türkiye",
        "about.specs.openTo": "OPEN TO",
        "about.specs.openToVal": "Full-time · Contract · Remote",
        "about.specs.focus": "FOCUS",
        "about.specs.focusVal": "AI · ML · LLM · Production",
        "education.badge.bsc": "BSc",
        "education.badge.lang": "LANG",
        "visitor.header": "Visitors",
        "visitor.total": "total",
        "visitor.daily": "today",
        "visitor.weekly": "LAST 7 DAYS",
        "visitor.weekly.cta": "View 7-day breakdown",
        "visitor.reset.note": "Data was reset on March 16, 2026.",
        "footer.tagline": "Crafted from scratch in vanilla JS. No frameworks, no shortcuts, all intent.",
        "footer.copyright": "© 2026 Samet Soysal. All rights reserved.",
        "footer.made": "Crafted with intent",
        "footer.signature": "See you on the next build.",
        "footer.uptop": "Back to top",
        "footer.status": "Open to new opportunities",
        "footer.nav.title": "Pages",
        "footer.social.title": "Connect",
        "footer.meta.title": "Meta",
        "footer.meta.time": "Local time",
        "footer.meta.loc": "Location",
        "footer.meta.stack": "Stack",
        "footer.meta.host": "Hosting",
        "footer.copyright": "© 2026 Samet Soysal. All rights reserved.",
        "footer.made": "Coded with passion"
    }
};

// Current language
let currentLang = 'en';

// Language switcher
document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const lang = this.getAttribute('data-lang');
        if (lang !== currentLang) {
            currentLang = lang;
            updateLanguage(lang);
            updateCVButtons(lang);

            // Update active button + aria-current (a11y)
            document.querySelectorAll('.lang-btn').forEach(b => {
                b.classList.remove('active');
                b.setAttribute('aria-current', 'false');
            });
            this.classList.add('active');
            this.setAttribute('aria-current', 'true');

            // Update sliding indicator
            const switcher = document.querySelector('.lang-switcher');
            if (switcher) switcher.setAttribute('data-active', lang);

            // Update HTML lang attribute
            document.documentElement.lang = lang;

            // Announce to screen readers
            const langLive = document.getElementById('langLive');
            if (langLive) {
                langLive.textContent = lang === 'tr' ? 'Dil: Türkçe' : 'Language: English';
            }

            // Save preference
            localStorage.setItem('preferredLang', lang);

            // Update chart labels if it exists
            if (typeof initWeeklyVisitorChart === 'function') {
                initWeeklyVisitorChart();
            }
        }
    });
});

// Update CV buttons based on language — both buttons point at the PDF
function updateCVButtons(lang) {
    const cvViewBtn = document.getElementById('cvViewBtn');
    const cvDownloadBtn = document.getElementById('cvDownloadBtn');

    if (cvViewBtn && cvDownloadBtn) {
        const cvFile = lang === 'tr' ? 'CV_TR.pdf' : 'CV_EN.pdf';
        cvViewBtn.href = cvFile;
        cvDownloadBtn.href = cvFile;
        cvDownloadBtn.download = `Samet_Soysal_CV_${lang.toUpperCase()}.pdf`;
    }
}

// Dark Mode Toggle (dark is default)
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

// Check for saved theme preference - Default: Light Mode
const savedTheme = localStorage.getItem('theme');
const themeIcon = themeToggle.querySelector('i');
function setThemeIcon(light){
    if(!themeIcon) return;
    themeIcon.classList.toggle('fa-moon', light);
    themeIcon.classList.toggle('fa-sun', !light);
}
if (savedTheme === 'dark') {
    body.classList.remove('light-mode');
    setThemeIcon(false);
} else {
    body.classList.add('light-mode');
    setThemeIcon(true);
    if (!savedTheme) {
        localStorage.setItem('theme', 'light');
    }
}

themeToggle.addEventListener('click', () => {
    // Animate icon out
    const icon = themeToggle.querySelector('i');
    if(icon) icon.style.transform = 'rotate(360deg) scale(0)';
    themeToggle.classList.add('is-switching');

    setTimeout(() => {
        body.classList.toggle('light-mode');
        const isLight = body.classList.contains('light-mode');
        setThemeIcon(isLight);
        localStorage.setItem('theme', isLight ? 'light' : 'dark');

        const newIcon = themeToggle.querySelector('i');
        if(newIcon){
            newIcon.style.transform = 'rotate(-180deg) scale(0)';
            requestAnimationFrame(() => {
                newIcon.style.transition = 'transform .5s cubic-bezier(.34,1.56,.64,1)';
                requestAnimationFrame(() => {
                    newIcon.style.transform = 'rotate(0deg) scale(1)';
                });
            });
        }
        setTimeout(()=>themeToggle.classList.remove('is-switching'), 650);
    }, 250);
});

// Update language function — FLIP-lite (fade-swap, no flicker)
function updateLanguage(lang) {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const swap = () => {
        document.querySelectorAll('[data-tr]').forEach(element => {
            const key = element.getAttribute('data-tr');
            if (translations[lang] && translations[lang][key]) {
                element.innerHTML = translations[lang][key];
            }
        });
    };
    if (reduced){
        swap();
        return;
    }
    document.body.classList.add('lang-swapping');
    // Wait for opacity transition to land, then swap
    setTimeout(() => {
        swap();
        requestAnimationFrame(() => {
            requestAnimationFrame(() => document.body.classList.remove('lang-swapping'));
        });
    }, 160);
}

// Scroll reveal animation
const scrollRevealFn = () => {
    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('active');
        }
    });
};

// Stat count-up animation — RAF + easeOutCubic
const statCountedUp = new Set();
const countUpStats = () => {
    document.querySelectorAll('.stat-value[data-count]').forEach(el => {
        if (statCountedUp.has(el)) return;
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            statCountedUp.add(el);
            const target = parseInt(el.getAttribute('data-count'), 10);
            const duration = 1400; // ms
            const start = performance.now();
            const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);
            const tick = (now) => {
                const t = Math.min(1, (now - start) / duration);
                const value = Math.round(target * easeOutCubic(t));
                el.textContent = value + '+';
                if (t < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
        }
    });
};

// Nav scroll effect
const navScrollFn = () => {
    const nav = document.getElementById('navbar') || document.querySelector('nav');
    if (nav) {
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    }
};

// Scroll progress bar
const scrollProgressBar = document.getElementById('scrollProgress');
const updateScrollProgress = () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (docHeight > 0) {
        scrollProgressBar.style.width = (scrollTop / docHeight * 100) + '%';
    }
};

// Active nav link highlight
const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');
const sections = document.querySelectorAll('section[id]');
const updateActiveNav = () => {
    const scrollY = window.scrollY + 200;
    sections.forEach(section => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        const id = section.getAttribute('id');
        const link = document.querySelector(`.nav-links a[href="#${id}"]`);
        if (link) {
            if (scrollY >= top && scrollY < top + height) {
                navLinks.forEach(l => l.classList.remove('active'));
                link.classList.add('active');
            }
        }
    });
};

window.addEventListener('scroll', () => {
    scrollRevealFn();
    navScrollFn();
    updateScrollProgress();
    updateActiveNav();
    countUpStats();
});
scrollRevealFn();
navScrollFn();

// ============================================
// Project Card Enhancements
// ============================================
(function() {
    // --- Tag auto-categorization ---
    const TAG_MAP = {
        ai: ['python','llm','rag','nlp','ocr','scikit-learn','opencv','sentence transformers',
             'classification','feature extraction','langgraph','deepseek r1','technical analysis',
             'aws bedrock','bedrock','machine learning','ai'],
        backend: ['fastapi','flask-restx','docker','postgresql','mongodb','sqlalchemy','pytest',
                  'node.js','asp.net core','sse','librechat ui'],
        frontend: ['react.js','next.js','tailwindcss','bootstrap','typescript'],
        devops: ['github actions','ci/cd','n8n','automation','playwright','web scraping',
                 'binance api','gmail api','rss'],
        cloud: ['aws','aws cdk','lambda','s3','textract','dynamodb','api gateway','sns']
    };
    document.querySelectorAll('.card-tags span').forEach(tag => {
        const t = tag.textContent.trim().toLowerCase();
        let cls = 'tag-ai';
        for (const [cat, keywords] of Object.entries(TAG_MAP)) {
            if (keywords.some(k => t === k || t.includes(k))) { cls = 'tag-' + cat; break; }
        }
        tag.classList.add(cls);
    });

    // --- Staggered tag animation: index only, delay is CSS-driven ---
    document.querySelectorAll('.project-card').forEach(card => {
        card.querySelectorAll('.card-tags span').forEach((tag, i) => {
            tag.style.setProperty('--i', i);
        });
    });

    // --- Expand/collapse descriptions ---
    document.querySelectorAll('.card-expand-btn').forEach(btn => {
        const desc = btn.parentElement.querySelector('.card-desc');
        if (!desc) return;
        // Hide button if text isn't clamped
        requestAnimationFrame(() => {
            if (desc.scrollHeight <= desc.clientHeight + 2) {
                btn.style.display = 'none';
            }
        });
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const expanded = desc.classList.toggle('expanded');
            btn.classList.toggle('active', expanded);
        });
    });
})();

// ============================================
// Unified Cursor Particle + Lightning System
// ============================================
(function() {
    const cCanvas = document.getElementById('cursorCanvas');
    const lCanvas = document.getElementById('lightningCanvas');
    const rCanvas = document.getElementById('rainCanvas');
    const flashEl = document.getElementById('lightningFlash');
    if (!cCanvas || !lCanvas) return;
    const cCtx = cCanvas.getContext('2d');
    const lCtx = lCanvas.getContext('2d');
    const rCtx = rCanvas ? rCanvas.getContext('2d') : null;
    const isMobile = window.innerWidth < 768;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // --- Shared Config ---
    const COLORS_DARK = [
        { r:124, g:58, b:237 },
        { r:45, g:212, b:191 }
    ];
    const COLORS_LIGHT = [
        { r:109, g:40, b:217 },
        { r:13, g:125, b:114 }
    ];
    const EDGE_ZONE = 60;
    const ROD_ZONE = 150;
    const SPARK_RANGE = 60;

    // --- Shared State ---
    let mouse = { x: -1000, y: -1000 };
    let lastMouseMove = 0;
    let particles = [];
    let sparks = [];
    let bolts = [];
    let impactFlashes = [];
    let cachedCards = [];
    let scrollSpeed = 0;
    let lastScrollY = window.scrollY;
    let lastScrollTime = Date.now();
    let scrollDir = 1;
    let chargeUp = { active: false, startTime: 0 };
    const CHARGE_DUR = 300;
    const CHARGE_EASE = 100;
    let lRunning = false;
    let lRafId = null;

    // --- Helpers ---
    function isLight() { return document.body.classList.contains('light-mode'); }
    function getColors() { return isLight() ? COLORS_LIGHT : COLORS_DARK; }
    function opMult() { return isLight() ? 0.5 : 1.0; }
    function pickColor() { const c = getColors(); return c[Math.random() > 0.5 ? 0 : 1]; }
    function rgba(c, a) { return `rgba(${c.r},${c.g},${c.b},${a})`; }
    function hypot(x1, y1, x2, y2) { return Math.hypot(x2 - x1, y2 - y1); }

    // --- Resize ---
    function resize() {
        cCanvas.width = lCanvas.width = window.innerWidth;
        cCanvas.height = lCanvas.height = window.innerHeight;
        if (rCanvas) {
            rCanvas.width = window.innerWidth;
            rCanvas.height = window.innerHeight;
        }
    }
    resize();
    window.addEventListener('resize', resize);

    // --- Lightning screen-flash (briefly illuminates the page on a strike) ---
    let _flashClearId = null;
    function triggerFlash(intensity){
        if (!flashEl || reducedMotion) return;
        // Stronger strikes peak higher; CSS .flash hits opacity:1 in ~35ms then fades over 280ms
        flashEl.style.setProperty('--flash-peak', String(Math.min(1, Math.max(0.25, intensity))));
        flashEl.classList.add('flash');
        if (_flashClearId) clearTimeout(_flashClearId);
        _flashClearId = setTimeout(() => {
            flashEl.classList.remove('flash');
        }, 60 + Math.random() * 70);
    }

    // --- Card cache (shared) ---
    function cacheCards() {
        const els = document.querySelectorAll(
            '.bento-card,.project-card,.roadmap-card,.education-card,.contact-item,.terminal'
        );
        cachedCards = [];
        els.forEach(el => {
            const r = el.getBoundingClientRect();
            if (r.bottom > 0 && r.top < window.innerHeight) {
                cachedCards.push({ el, left: r.left, top: r.top, right: r.right, bottom: r.bottom });
            }
        });
    }
    cacheCards();
    let cacheTimer = null;
    function throttledCache() {
        if (cacheTimer) return;
        cacheTimer = setTimeout(() => { cacheCards(); cacheTimer = null; }, 200);
    }
    window.addEventListener('scroll', throttledCache, { passive: true });
    window.addEventListener('resize', throttledCache);

    // --- Scroll tracking ---
    if (!isMobile) {
        window.addEventListener('scroll', () => {
            const now = Date.now();
            const dy = Math.abs(window.scrollY - lastScrollY);
            const dt = Math.max(now - lastScrollTime, 1);
            scrollDir = window.scrollY > lastScrollY ? 1 : -1;
            scrollSpeed = Math.min(dy / dt * 16, 30);
            lastScrollY = window.scrollY;
            lastScrollTime = now;
        }, { passive: true });
        setInterval(() => {
            if (Date.now() - lastScrollTime > 100) {
                scrollSpeed *= 0.85;
                if (scrollSpeed < 0.5) scrollSpeed = 0;
            }
        }, 50);
    }

    // ========== CURSOR PARTICLES + SPARKS (cCanvas) ==========

    // --- Mouse handler: spawn electric ember particles ---
    document.addEventListener('mousemove', (e) => {
        const prevX = mouse.x, prevY = mouse.y;
        mouse.x = e.clientX;
        mouse.y = e.clientY;
        lastMouseMove = Date.now();

        // Light mode is the calm/professional theme — no electric embers
        if (isLight()) return;

        // Mouse velocity for directional streaks
        const dx = mouse.x - prevX;
        const dy = mouse.y - prevY;
        const speed = Math.sqrt(dx * dx + dy * dy);
        if (speed < 2) return; // only spawn when moving

        const nx = dx / speed;
        const ny = dy / speed;

        // Charge-up check
        const chActive = chargeUp.active &&
            (Date.now() - chargeUp.startTime < CHARGE_DUR + CHARGE_EASE);
        let spawnN = speed > 8 ? 2 : 1, lightBoost = 0;

        if (chActive && !isLight()) {
            const el = Date.now() - chargeUp.startTime;
            let t = el > CHARGE_DUR ? 1 - (el - CHARGE_DUR) / CHARGE_EASE : 1;
            t = Math.max(0, t);
            spawnN = Math.round(1 + 2 * t);
            lightBoost = 15 * t;
        }

        for (let i = 0; i < spawnN; i++) {
            const spread = (Math.random() - 0.5) * 0.8;
            particles.push({
                x: mouse.x + (Math.random() - 0.5) * 4,
                y: mouse.y + (Math.random() - 0.5) * 4,
                vx: -nx * 0.5 + spread,
                vy: -ny * 0.5 + spread + 0.15,
                life: 1,
                decay: 0.02 + Math.random() * 0.02,
                len: 3 + Math.random() * 5,
                hue: Math.random() > 0.5 ? 263 : 174,
                lb: lightBoost,
                nx: nx + (Math.random() - 0.5) * 0.5,
                ny: ny + (Math.random() - 0.5) * 0.5
            });
        }
    });

    // --- Nearest point on card edge ---
    function nearestEdgePt(card, mx, my) {
        const cx = Math.max(card.left, Math.min(mx, card.right));
        const cy = Math.max(card.top, Math.min(my, card.bottom));
        if (mx >= card.left && mx <= card.right && my >= card.top && my <= card.bottom) {
            const d = [
                { x: card.left, y: my, d: mx - card.left },
                { x: card.right, y: my, d: card.right - mx },
                { x: mx, y: card.top, d: my - card.top },
                { x: mx, y: card.bottom, d: card.bottom - my }
            ];
            d.sort((a, b) => a.d - b.d);
            return { x: d[0].x, y: d[0].y };
        }
        return { x: cx, y: cy };
    }

    // --- Generate micro spark ---
    function mkSpark(mx, my, tx, ty) {
        const color = pickColor();
        const segs = 3 + Math.floor(Math.random() * 3);
        const pts = [{ x: mx, y: my }];
        for (let i = 0; i < segs; i++) {
            const p = (i + 1) / segs;
            pts.push({
                x: mx + (tx - mx) * p + (Math.random() - 0.5) * 16,
                y: my + (ty - my) * p + (Math.random() - 0.5) * 16
            });
        }
        pts[pts.length - 1] = {
            x: tx + (Math.random() - 0.5) * 4,
            y: ty + (Math.random() - 0.5) * 4
        };
        return {
            pts, color, birth: performance.now(),
            life: 150 + Math.random() * 100,
            card: null, hitDone: false, done: false
        };
    }

    // --- Spark spawner ---
    let sparkCD = 0;
    function trySpawnSparks() {
        if (isMobile || isLight() || Date.now() - lastMouseMove > 500) return;
        const now = performance.now();
        if (now < sparkCD) return;
        sparkCD = now + 80 + Math.random() * 40;

        const near = [];
        for (const card of cachedCards) {
            const np = nearestEdgePt(card, mouse.x, mouse.y);
            const d = hypot(mouse.x, mouse.y, np.x, np.y);
            if (d < SPARK_RANGE && d > 5) near.push({ card, np, d });
        }
        near.sort((a, b) => a.d - b.d);
        for (const t of near.slice(0, 3)) {
            const s = mkSpark(mouse.x, mouse.y, t.np.x, t.np.y);
            s.card = t.card;
            sparks.push(s);
        }
    }

    // --- Cursor canvas animation (always runs) ---
    function cursorLoop() {
        cCtx.clearRect(0, 0, cCanvas.width, cCanvas.height);
        const om = opMult();

        // Particles — electric embers (line streaks)
        for (let i = particles.length - 1; i >= 0; i--) {
            const p = particles[i];
            p.x += p.vx; p.y += p.vy; p.life -= p.decay;
            if (p.life <= 0) { particles.splice(i, 1); continue; }
            const a = p.life * 0.7;
            const sat = p.hue === 263 ? '73%' : '70%';
            const l = (p.hue === 263 ? 60 : 58) + (p.lb || 0);
            const len = p.len * p.life;
            cCtx.shadowBlur = 5;
            cCtx.shadowColor = `hsla(${p.hue},${sat},${l}%,${a * 0.5})`;
            cCtx.strokeStyle = `hsla(${p.hue},${sat},${l}%,${a})`;
            cCtx.lineWidth = 1.2;
            cCtx.beginPath();
            cCtx.moveTo(p.x, p.y);
            cCtx.lineTo(p.x + p.nx * len, p.y + p.ny * len);
            cCtx.stroke();
        }
        cCtx.shadowBlur = 0;
        if (particles.length > 120) particles.splice(0, particles.length - 120);

        // Spawn sparks
        trySpawnSparks();

        // Sparks
        const now = performance.now();
        for (let i = sparks.length - 1; i >= 0; i--) {
            const s = sparks[i];
            const el = now - s.birth;
            if (el > s.life) { sparks.splice(i, 1); continue; }
            let a = el < s.life - 200 ? 1 : (s.life - el) / 200;
            a *= om;
            const c = s.color;
            cCtx.save();
            cCtx.lineCap = 'round'; cCtx.lineJoin = 'round';
            cCtx.shadowColor = rgba(c, 0.5 * a);
            cCtx.shadowBlur = 10;
            cCtx.strokeStyle = rgba(c, 0.8 * a);
            cCtx.lineWidth = 1 + Math.random() * 0.5;
            cCtx.beginPath();
            cCtx.moveTo(s.pts[0].x, s.pts[0].y);
            for (let j = 1; j < s.pts.length; j++) cCtx.lineTo(s.pts[j].x, s.pts[j].y);
            cCtx.stroke();
            cCtx.restore();
            if (!s.hitDone && el > s.life * 0.6 && s.card) {
                s.hitDone = true;
                s.card.el.classList.add('spark-hit');
                setTimeout(() => s.card.el.classList.remove('spark-hit'), 100);
            }
        }

        // Impact flashes (lightning rod hits)
        for (let i = impactFlashes.length - 1; i >= 0; i--) {
            const f = impactFlashes[i];
            const el = now - f.birth;
            if (el > 150) { impactFlashes.splice(i, 1); continue; }
            const a = (1 - el / 150) * om;
            const g = cCtx.createRadialGradient(f.x, f.y, 0, f.x, f.y, f.r);
            g.addColorStop(0, rgba(f.color, 0.7 * a));
            g.addColorStop(0.4, rgba(f.color, 0.25 * a));
            g.addColorStop(1, rgba(f.color, 0));
            cCtx.fillStyle = g;
            cCtx.beginPath();
            cCtx.arc(f.x, f.y, f.r, 0, Math.PI * 2);
            cCtx.fill();
        }

        requestAnimationFrame(cursorLoop);
    }
    cursorLoop();

    // ========== LIGHTNING SYSTEM (lCanvas) ==========

    // --- Bolt geometry ---
    function generateBolt(side, direction) {
        const W = lCanvas.width, H = lCanvas.height;
        const color = pickColor();
        // Bigger storm-scale bolts: longer segments, more of them
        const segLen = 22 + Math.random() * 22;          // was 15-30 → now 22-44
        const totalSegs = 14 + Math.floor(Math.random() * 14); // was 8-18 → now 14-28
        // Scale factor: a few really tall hero strikes
        const heroStrike = Math.random() < 0.35;
        const scale = heroStrike ? 1.25 + Math.random() * 0.35 : 1;

        let sx, sy;
        if (side === 'top') {
            // From the sky: random horizontal anywhere, just above viewport
            sx = W * (0.15 + Math.random() * 0.7);
            sy = -20 - Math.random() * 80;
        } else if (side === 'left') {
            sx = Math.random() * EDGE_ZONE;
            sy = direction === 1 ? Math.random() * H * 0.3 : H - Math.random() * H * 0.3;
        } else { // right
            sx = W - Math.random() * EDGE_ZONE;
            sy = direction === 1 ? Math.random() * H * 0.3 : H - Math.random() * H * 0.3;
        }

        // Card attraction (only edge-side bolts target cards; top bolts roam free)
        let attractTarget = null;
        if (side !== 'top' && !isMobile && cachedCards.length > 0 && Math.random() < 0.45) {
            const cands = cachedCards.filter(c =>
                side === 'left' ? c.left < W * 0.4 : c.right > W * 0.6
            );
            if (cands.length) attractTarget = cands[Math.floor(Math.random() * cands.length)];
        }

        // Lightning rod: is mouse near this edge?
        let rodTarget = null;
        if (side !== 'top' && !isMobile) {
            const mNearL = side === 'left' && mouse.x < ROD_ZONE;
            const mNearR = side === 'right' && mouse.x > W - ROD_ZONE;
            if (mNearL || mNearR) {
                const eDist = mNearL ? mouse.x : W - mouse.x;
                const prob = 0.3 + 0.6 * (1 - eDist / ROD_ZONE);
                if (Math.random() < prob) rodTarget = { x: mouse.x, y: mouse.y };
            }
        }

        // Build main path
        const points = [{ x: sx, y: sy }];
        let cx = sx, cy = sy;
        const horizSpread = side === 'top' ? 60 : 50;
        for (let i = 0; i < totalSegs; i++) {
            let dx = (Math.random() - 0.5) * horizSpread;
            let dy = (side === 'top' ? 1 : direction) * segLen * scale;
            if (attractTarget && i > totalSegs * 0.3) {
                const tx = side === 'left' ? attractTarget.left - 10 : attractTarget.right + 10;
                const ty = (attractTarget.top + attractTarget.bottom) / 2;
                const prog = (i - totalSegs * 0.3) / (totalSegs * 0.7);
                dx += (tx - cx) * prog * 0.6 * 0.15;
                dy += (ty - cy) * prog * 0.6 * 0.1;
            }
            cx += dx; cy += dy;
            if (side === 'left') cx = Math.max(-5, Math.min(cx, W * 0.3));
            else if (side === 'right') cx = Math.max(W * 0.7, Math.min(cx, W + 5));
            else /* top */ cx = Math.max(20, Math.min(cx, W - 20));
            points.push({ x: cx, y: cy });
        }

        // Normal branches — bigger bolts get more & longer branches
        const branches = [];
        const branchProb = side === 'top' ? 0.42 : 0.32;
        for (let i = 2; i < points.length - 1; i++) {
            if (Math.random() < branchProb) {
                const bp = points[i];
                const bPts = [{ x: bp.x, y: bp.y }];
                let bx = bp.x, by = bp.y;
                const n = 3 + Math.floor(Math.random() * 5);  // was 3-5 → now 3-7
                const bDir = side === 'top' ? 1 : direction;
                for (let j = 0; j < n; j++) {
                    bx += (Math.random() - 0.5) * 32;
                    by += bDir * (10 + Math.random() * 16);
                    bPts.push({ x: bx, y: by });
                }
                branches.push(bPts);
            }
        }

        // Lightning rod branch toward cursor
        if (rodTarget) {
            const startIdx = Math.min(
                Math.floor(totalSegs * 0.4 + Math.random() * totalSegs * 0.4),
                points.length - 1
            );
            const sp = points[startIdx];
            const rPts = [{ x: sp.x, y: sp.y }];
            let rx = sp.x, ry = sp.y;
            const rDist = hypot(rx, ry, rodTarget.x, rodTarget.y);
            const rSegs = Math.max(3, Math.floor(rDist / 20));
            const eDist = side === 'left' ? mouse.x : W - mouse.x;
            const bias = 0.3 + 0.7 * (1 - eDist / ROD_ZONE);
            for (let j = 0; j < rSegs; j++) {
                const p = (j + 1) / rSegs;
                const tx = sp.x + (rodTarget.x - sp.x) * p;
                const ty = sp.y + (rodTarget.y - sp.y) * p;
                rx = tx + (Math.random() - 0.5) * 30 * (1 - bias * p);
                ry = ty + (Math.random() - 0.5) * 20 * (1 - bias * p);
                rPts.push({ x: rx, y: ry });
            }
            branches.push(rPts);
        }

        return {
            points, branches, color, attractTarget, rodTarget, side,
            scale, hero: heroStrike,
            birth: performance.now(),
            fadeInDur: 90 + Math.random() * 110,
            fadeOutDur: 380 + Math.random() * 280,
            opacity: 0, phase: 'in', done: false, rodHitDone: false
        };
    }

    // --- Draw bolt ---
    function drawBolt(bolt, t) {
        const elapsed = t - bolt.birth;
        const om = opMult();

        if (bolt.phase === 'in') {
            bolt.opacity = Math.min(1, elapsed / bolt.fadeInDur);
            if (elapsed >= bolt.fadeInDur) {
                bolt.phase = 'out';
                bolt.fadeStart = t;
                // Strike! Briefly illuminate the page (hero strikes are brighter)
                const baseFlash = bolt.hero ? 0.85 : 0.5;
                triggerFlash(baseFlash + Math.random() * 0.25);
                if (bolt.attractTarget) {
                    bolt.attractTarget.el.classList.add('lightning-hit');
                    setTimeout(() => bolt.attractTarget.el.classList.remove('lightning-hit'), 120);
                }
                if (bolt.rodTarget && !bolt.rodHitDone) {
                    bolt.rodHitDone = true;
                    impactFlashes.push({
                        x: bolt.rodTarget.x, y: bolt.rodTarget.y,
                        color: bolt.color, r: 8 + Math.random() * 4,
                        birth: performance.now()
                    });
                }
                // Charge-up: check if any point near mouse
                for (const pt of bolt.points) {
                    if (hypot(pt.x, pt.y, mouse.x, mouse.y) < 200) {
                        chargeUp.active = true;
                        chargeUp.startTime = Date.now();
                        break;
                    }
                }
            }
        } else if (bolt.phase === 'out') {
            const fe = t - bolt.fadeStart;
            bolt.opacity = Math.max(0, 1 - fe / bolt.fadeOutDur);
            if (bolt.opacity <= 0) { bolt.done = true; return; }
        }

        const a = bolt.opacity * om;
        const c = bolt.color;
        const sc = bolt.scale || 1;

        // Path helper (avoids re-walking the points array for every stroke pass)
        const tracePath = () => {
            lCtx.beginPath();
            lCtx.moveTo(bolt.points[0].x, bolt.points[0].y);
            for (let i = 1; i < bolt.points.length; i++) lCtx.lineTo(bolt.points[i].x, bolt.points[i].y);
        };

        // Ambient glow — bigger radius for hero strikes
        if (bolt.phase === 'in' || bolt.opacity > 0.5) {
            const mid = bolt.points[Math.floor(bolt.points.length / 2)];
            const r = 180 * sc;
            const g = lCtx.createRadialGradient(mid.x, mid.y, 0, mid.x, mid.y, r);
            g.addColorStop(0, rgba(c, 0.16 * a));
            g.addColorStop(0.5, rgba(c, 0.06 * a));
            g.addColorStop(1, rgba(c, 0));
            lCtx.fillStyle = g;
            lCtx.fillRect(mid.x - r, mid.y - r, r * 2, r * 2);
        }

        lCtx.save();
        lCtx.lineCap = 'round'; lCtx.lineJoin = 'round';

        // 1) Outer atmospheric halo — wide, low opacity, big shadow
        lCtx.shadowColor = rgba(c, 0.6 * a);
        lCtx.shadowBlur = 42 * sc;
        lCtx.strokeStyle = rgba(c, 0.18 * a);
        lCtx.lineWidth = 7 * sc;
        tracePath();
        lCtx.stroke();

        // 2) Main bolt body
        lCtx.shadowColor = rgba(c, 0.85 * a);
        lCtx.shadowBlur = 22 * sc;
        lCtx.strokeStyle = rgba(c, 0.95 * a);
        lCtx.lineWidth = 3 * sc;
        tracePath();
        lCtx.stroke();

        // 3) Inner bright core — near-white with tint
        lCtx.shadowBlur = 10 * sc;
        lCtx.strokeStyle = `rgba(255,255,255,${0.75 * a})`;
        lCtx.lineWidth = 1.4 * sc;
        tracePath();
        lCtx.stroke();

        // 4) Crisp white spine (no shadow, sharp)
        lCtx.shadowBlur = 0;
        lCtx.strokeStyle = `rgba(255,255,255,${0.9 * a})`;
        lCtx.lineWidth = 0.6 * sc;
        tracePath();
        lCtx.stroke();

        // Branches — same multi-pass treatment, lighter
        bolt.branches.forEach(br => {
            const traceBranch = () => {
                lCtx.beginPath();
                lCtx.moveTo(br[0].x, br[0].y);
                for (let i = 1; i < br.length; i++) lCtx.lineTo(br[i].x, br[i].y);
            };
            // outer halo
            lCtx.shadowColor = rgba(c, 0.45 * a);
            lCtx.shadowBlur = 18 * sc;
            lCtx.strokeStyle = rgba(c, 0.24 * a);
            lCtx.lineWidth = 3.4 * sc;
            traceBranch();
            lCtx.stroke();
            // body
            lCtx.shadowBlur = 9 * sc;
            lCtx.strokeStyle = rgba(c, 0.72 * a);
            lCtx.lineWidth = 1.4 * sc;
            traceBranch();
            lCtx.stroke();
            // bright core
            lCtx.shadowBlur = 0;
            lCtx.strokeStyle = `rgba(255,255,255,${0.5 * a})`;
            lCtx.lineWidth = 0.7 * sc;
            traceBranch();
            lCtx.stroke();
        });

        lCtx.restore();
    }

    // --- Lightning animation loop (idle-optimized) ---
    function lightningLoop(t) {
        lCtx.clearRect(0, 0, lCanvas.width, lCanvas.height);
        for (let i = bolts.length - 1; i >= 0; i--) {
            drawBolt(bolts[i], t);
            if (bolts[i].done) bolts.splice(i, 1);
        }
        if (bolts.length > 0) {
            lRafId = requestAnimationFrame(lightningLoop);
        } else {
            lRunning = false; lRafId = null;
        }
    }

    function ensureLRun() {
        if (!lRunning) { lRunning = true; lRafId = requestAnimationFrame(lightningLoop); }
    }

    // --- Scroll-zone gating: hero+content=active, footer=quiet ---
    // Bolts are part of the cyberpunk HUD identity — active from page load.
    let boltsActive = true;
    let boltsBoosted = false;
    const projectsEl = document.getElementById('projects');
    const footerEl = document.querySelector('.footer-v3') || document.querySelector('.footer-v2');
    if ('IntersectionObserver' in window) {
        if (projectsEl){
            new IntersectionObserver((entries) => {
                entries.forEach(e => { boltsBoosted = e.intersectionRatio > 0.2; });
            }, { threshold: [0, 0.2] }).observe(projectsEl);
        }
        if (footerEl){
            new IntersectionObserver((entries) => {
                entries.forEach(e => { boltsActive = e.intersectionRatio <= 0.2; });
            }, { threshold: [0, 0.2] }).observe(footerEl);
        }
    }

    // Pick a side weighted toward the top so most strikes feel "from the sky"
    function pickRandomSide() {
        const r = Math.random();
        if (r < 0.55) return 'top';
        return r < 0.78 ? 'left' : 'right';
    }
    function spawnBolt(side, dirHint) {
        // Light mode opts out of the cyberpunk lightning storm
        if (isLight()) return;
        const s = side || pickRandomSide();
        const dir = dirHint || (s === 'top' ? 1 : (Math.random() > 0.7 ? -1 : 1));
        bolts.push(generateBolt(s, dir));
        ensureLRun();
    }
    // Expose for cheat mode boost (read by konami easter egg)
    window.__lightningSpawn = () => spawnBolt();

    // --- Opening kickoff (one welcoming strike from the sky) ---
    setTimeout(() => { if (boltsActive) spawnBolt('top'); }, 1500);

    // --- Ambient loop: long random gaps, occasional double-strike ---
    // No scroll-triggered bolts — the sky decides when it strikes.
    function ambientLoop() {
        const baseMin = isMobile ? 5500 : 3500;
        const baseMax = isMobile ? 13000 : 8000;
        const boostFactor = boltsBoosted ? 0.65 : 1;
        const delay = (baseMin + Math.random() * (baseMax - baseMin)) * boostFactor;
        setTimeout(() => {
            if (boltsActive) {
                spawnBolt();
                // 1-in-4 chance of a quick second strike (storm "rumble")
                if (Math.random() < 0.25) {
                    setTimeout(() => { if (boltsActive) spawnBolt(); }, 180 + Math.random() * 220);
                }
            }
            ambientLoop();
        }, delay);
    }
    ambientLoop();

    // ========== RAIN SYSTEM (rCanvas) — multi-layer parallax storm ==========
    if (rCanvas && rCtx && !reducedMotion) {
        // Three depth layers: distant (slow/thin), mid, foreground (fast/thick).
        // Far drops are tinier and dimmer → near drops are longer and brighter.
        const layers = isMobile ? [
            { count: 18, sMin: 3.0, sMax: 4.4, lMin: 8,  lMax: 16, width: 0.7, alphaBase: 0.18, parallax: 0.5 },
            { count: 22, sMin: 5.0, sMax: 7.0, lMin: 14, lMax: 24, width: 1.0, alphaBase: 0.32, parallax: 0.85 },
        ] : [
            { count: 50, sMin: 2.6, sMax: 4.0, lMin: 8,  lMax: 18, width: 0.55, alphaBase: 0.16, parallax: 0.45 }, // distant
            { count: 60, sMin: 4.6, sMax: 6.6, lMin: 14, lMax: 26, width: 1.0,  alphaBase: 0.30, parallax: 0.75 }, // mid
            { count: 32, sMin: 7.5, sMax: 10.5, lMin: 24, lMax: 40, width: 1.55, alphaBase: 0.46, parallax: 1.0  }, // near
        ];

        let dropsByLayer = [];
        // Global wind: slow base + sinusoidal sway → all drops drift together (feels real)
        let windBase = -0.35;
        let windPhase = Math.random() * Math.PI * 2;

        function makeDrop(L, fillViewport){
            return {
                x: Math.random() * (rCanvas.width + 80) - 40,
                y: fillViewport ? Math.random() * rCanvas.height : -10 - Math.random() * 60,
                len: L.lMin + Math.random() * (L.lMax - L.lMin),
                speed: L.sMin + Math.random() * (L.sMax - L.sMin),
                alpha: L.alphaBase * (0.7 + Math.random() * 0.6),
            };
        }
        function seedAllDrops(){
            dropsByLayer = layers.map(L => {
                const arr = [];
                for (let i = 0; i < L.count; i++) arr.push(makeDrop(L, true));
                return arr;
            });
        }
        seedAllDrops();
        window.addEventListener('resize', seedAllDrops);

        function drawRain(){
            if (!rCanvas.width || !rCanvas.height) {
                requestAnimationFrame(drawRain); return;
            }
            // Light mode is the calm theme — clear the canvas and skip the storm
            if (isLight()) {
                rCtx.clearRect(0, 0, rCanvas.width, rCanvas.height);
                requestAnimationFrame(drawRain);
                return;
            }
            rCtx.clearRect(0, 0, rCanvas.width, rCanvas.height);
            // Wind sway oscillates slowly so drops never look mechanical
            windPhase += 0.0032;
            const wDrift = windBase + Math.sin(windPhase) * 0.22;
            const baseColor = '170,195,228';
            rCtx.lineCap = 'round';

            for (let li = 0; li < layers.length; li++){
                const L = layers[li];
                rCtx.lineWidth = light ? L.width * 0.85 : L.width;
                const drops = dropsByLayer[li];
                for (let i = 0; i < drops.length; i++){
                    const d = drops[i];
                    const dx2 = d.x + wDrift * d.len * 0.55;
                    const dy2 = d.y + d.len;
                    // Motion-blur tail: head is transparent, tail is bright
                    const grad = rCtx.createLinearGradient(d.x, d.y, dx2, dy2);
                    grad.addColorStop(0, `rgba(${baseColor},0)`);
                    grad.addColorStop(0.45, `rgba(${baseColor},${d.alpha * 0.35})`);
                    grad.addColorStop(1, `rgba(${baseColor},${d.alpha})`);
                    rCtx.strokeStyle = grad;
                    rCtx.beginPath();
                    rCtx.moveTo(d.x, d.y);
                    rCtx.lineTo(dx2, dy2);
                    rCtx.stroke();

                    d.x += wDrift * L.parallax;
                    d.y += d.speed;
                    if (d.y > rCanvas.height + 14){
                        d.x = Math.random() * (rCanvas.width + 80) - 40;
                        d.y = -d.len - Math.random() * 20;
                    } else if (d.x < -60 || d.x > rCanvas.width + 60){
                        // Drifted off-side — wrap around
                        d.x = d.x < 0 ? rCanvas.width + 30 : -30;
                    }
                }
            }
            requestAnimationFrame(drawRain);
        }
        drawRain();
    }
})();

// Initialize language on page load
const savedLang = localStorage.getItem('preferredLang') || 'en';
if (savedLang !== 'en') {
    currentLang = savedLang;
    updateLanguage(savedLang);
    document.querySelectorAll('.lang-btn').forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-current', 'false');
    });
    const activeBtn = document.querySelector(`[data-lang="${savedLang}"]`);
    if (activeBtn) {
        activeBtn.classList.add('active');
        activeBtn.setAttribute('aria-current', 'true');
    }
} else {
    updateLanguage('en');
}
document.documentElement.lang = savedLang;

// Set language indicator position
const langSwitcher = document.querySelector('.lang-switcher');
if (langSwitcher) langSwitcher.setAttribute('data-active', savedLang);

// Initialize CV buttons
updateCVButtons(savedLang);

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        // Skip placeholders and links whose href was rewritten to a real URL
        // (e.g. CV modal action links start as href="#" then become CV_EN.pdf)
        if (!href || href === '#' || !href.startsWith('#')) return;
        const target = document.querySelector(href);
        if (!target) return;
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});

// Create floating particles
const particlesContainer = document.getElementById('particles');
if (particlesContainer) {
    for (let i = 0; i < 25; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        const size = Math.random() * 10 + 5;
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 5 + 's';
        particle.style.animationDuration = Math.random() * 10 + 10 + 's';
        particle.style.opacity = Math.random() * 0.5 + 0.2;
        particlesContainer.appendChild(particle);
    }
}

// ============================================
// FIREBASE REAL-TIME ANALYTICS
// ============================================

// ============================================
// CV TRACKING - Firebase Realtime Database
// ============================================

// Initialize CV tracking
function initCVTracking() {
    const cvViewBtn = document.getElementById('cvViewBtn');
    const cvDownloadBtn = document.getElementById('cvDownloadBtn');
    
    if (!cvViewBtn || !cvDownloadBtn) {
        console.warn('❌ CV buttons not found');
        return;
    }
    
    // View → open PDF inside an in-page modal viewer after tracking
    cvViewBtn.addEventListener('click', async (e) => {
        e.preventDefault();
        const cvFile = cvViewBtn.getAttribute('href');

        console.log('🔵 CV View button clicked, language:', currentLang);

        await trackCVAction('view', currentLang);
        openCVModal(cvFile, currentLang);
    });
    
    cvDownloadBtn.addEventListener('click', async (e) => {
        e.preventDefault(); // Prevent default link behavior
        const cvFile = cvDownloadBtn.href;
        const downloadName = cvDownloadBtn.download;
        
        console.log('🔵 CV Download button clicked, language:', currentLang);
        
        // Track the action
        await trackCVAction('download', currentLang);
        
        // Trigger download after tracking
        const link = document.createElement('a');
        link.href = cvFile;
        link.download = downloadName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });
    
    console.log('✅ CV tracking initialized successfully');
}

async function trackCVAction(action, language) {
    console.log(`🔄 Starting CV tracking - Action: ${action}, Language: ${language}`);
    
    // Check if Firebase is available
    if (!database) {
        console.error('❌ Firebase database not available, CV action not tracked');
        return;
    }
    console.log('✅ Firebase database is available');

    try {
        const visitorId = localStorage.getItem('portfolioVisitorId') || 'unknown';
        const cvKey = `cv_${action}_${language}`;
        console.log(`📊 Tracking key: ${cvKey}, Visitor ID: ${visitorId}`);
        
        // Track total count
        console.log('📝 Writing to: cv_analytics/total/' + cvKey);
        const totalRef = database.ref(`cv_analytics/total/${cvKey}`);
        await totalRef.transaction((currentCount) => {
            const newCount = (currentCount || 0) + 1;
            console.log(`📈 Total count updated: ${currentCount || 0} → ${newCount}`);
            return newCount;
        });
        
        // Track by date
        const today = new Date().toDateString();
        console.log('📝 Writing to: cv_analytics/daily/' + today + '/' + cvKey);
        const dailyRef = database.ref(`cv_analytics/daily/${today}/${cvKey}`);
        await dailyRef.transaction((currentCount) => {
            const newCount = (currentCount || 0) + 1;
            console.log(`📅 Daily count updated: ${currentCount || 0} → ${newCount}`);
            return newCount;
        });
        
        // Track individual user action
        console.log('📝 Writing user action to: cv_analytics/users/' + visitorId + '/' + cvKey);
        const userActionRef = database.ref(`cv_analytics/users/${visitorId}/${cvKey}`);
        const actionData = {
            timestamp: firebase.database.ServerValue.TIMESTAMP,
            localTimeString: new Date().toLocaleString('tr-TR', { timeZone: 'Europe/Istanbul' }), // Added readable UTC+3 timestamp
            action: action,
            language: language,
            userAgent: navigator.userAgent,
            referrer: document.referrer || 'direct'
        };
        await userActionRef.push(actionData);
        console.log('👤 User action recorded:', actionData);
        
        console.log(`✅ CV ${action} tracked successfully: ${language.toUpperCase()}`);
        
    } catch (error) {
        console.error('❌ CV tracking error:', error);
        console.error('Error details:', error.message, error.stack);
    }
}

// ============================================
// CV PDF MODAL — in-page popup viewer
// ============================================
let _cvModalEscBound = false;
function _cvModalEscHandler(e){
    if (e.key === 'Escape') closeCVModal();
}
window.openCVModal = function(cvFile, lang) {
    const modal = document.getElementById('cvPdfModal');
    const frame = document.getElementById('cvPdfFrame');
    const filename = document.getElementById('cvPdfFilename');
    const newtab = document.getElementById('cvPdfNewtab');
    const dl = document.getElementById('cvPdfDownload');
    if (!modal || !frame) return;
    // PDF.js viewers honour #zoom=page-width — works in Chromium + Firefox.
    frame.src = cvFile + '#view=FitH';
    if (filename) filename.textContent = cvFile;
    if (newtab) newtab.href = cvFile;
    if (dl) {
        dl.href = cvFile;
        dl.download = `Samet_Soysal_CV_${(lang || 'EN').toUpperCase()}.pdf`;
    }
    modal.classList.add('show');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    if (!_cvModalEscBound) {
        document.addEventListener('keydown', _cvModalEscHandler);
        _cvModalEscBound = true;
    }
};
window.closeCVModal = function() {
    const modal = document.getElementById('cvPdfModal');
    const frame = document.getElementById('cvPdfFrame');
    if (!modal) return;
    modal.classList.remove('show');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    // Stop loading the PDF when closed (releases memory)
    if (frame) frame.src = 'about:blank';
    if (_cvModalEscBound) {
        document.removeEventListener('keydown', _cvModalEscHandler);
        _cvModalEscBound = false;
    }
};

// ============================================
// VISITOR COUNTER - Firebase Realtime Database
// ============================================
async function initVisitorCounter() {
    const counterElement = document.querySelector('#visitorCount');
    const dailyCounterElement = document.querySelector('#dailyVisitorCount');
    
    if (!counterElement || !dailyCounterElement) return;

    // Check if Firebase is available
    if (!database) {
        console.warn('Firebase not available — visitor counter offline');
        markVisitorChipOffline();
        return;
    }

    try {
        // Generate unique visitor ID
        let visitorId = localStorage.getItem('portfolioVisitorId');
        if (!visitorId) {
            visitorId = 'visitor_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
            localStorage.setItem('portfolioVisitorId', visitorId);
        }

        // Get current visitor count
        const countRef = database.ref('visitors/total');
        const snapshot = await countRef.once('value');
        let currentCount = snapshot.val() || 0;

        // Check if this visitor is new today
        const today = new Date().toDateString();
        const dailyRef = database.ref(`visitors/daily/${today}/${visitorId}`);
        const dailySnapshot = await dailyRef.once('value');

        if (!dailySnapshot.exists()) {
            // New visitor for today - increment count
            currentCount++;
            await countRef.set(currentCount);
            await dailyRef.set({
                timestamp: firebase.database.ServerValue.TIMESTAMP,
                localTimeString: new Date().toLocaleString('tr-TR', { timeZone: 'Europe/Istanbul' }), // Added readable UTC+3 timestamp
                userAgent: navigator.userAgent,
                language: navigator.language
            });
        }

        // Get today's visitor count
        const todayRef = database.ref(`visitors/daily/${today}`);
        const todaySnapshot = await todayRef.once('value');
        const todayData = todaySnapshot.val() || {};
        const todayCount = Object.keys(todayData).length;

        // Animate counters
        animateCounter(counterElement, 0, currentCount, 2000);
        animateCounter(dailyCounterElement, 0, todayCount, 2000);

        // Real-time updates for total visitors
        countRef.on('value', (snapshot) => {
            const newCount = snapshot.val() || 0;
            counterElement.textContent = newCount.toLocaleString();
        });

        // Real-time updates for daily visitors
        todayRef.on('value', (snapshot) => {
            const dailyData = snapshot.val() || {};
            const dailyCount = Object.keys(dailyData).length;
            dailyCounterElement.textContent = dailyCount.toLocaleString();
        });

    } catch (error) {
        console.warn('Visitor counter offline:', error && error.message ? error.message : error);
        markVisitorChipOffline();
    }
}

// Mark the visitor chip as offline — subtle inline hint, page stays alive
function markVisitorChipOffline(){
    const chip = document.getElementById('visitorChip');
    if (!chip) return;
    chip.classList.add('chip-offline-state');
    chip.setAttribute('title', 'Stats temporarily unavailable — main content is live.');
    const counterEl = document.getElementById('visitorCount');
    const dailyEl = document.getElementById('dailyVisitorCount');
    if (counterEl) counterEl.textContent = '—';
    if (dailyEl) dailyEl.textContent = '—';
}

// ============================================
// PROJECT CLICK COUNTERS - Firebase Realtime Database
// ============================================
async function initProjectCounters() {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach((card, index) => {
        const titleElement = card.querySelector('h3');
        if (!titleElement) return;
        
        const projectId = titleElement.textContent
            .replace(/[^a-zA-Z0-9]/g, '-')
            .toLowerCase()
            .replace(/-+/g, '-')
            .replace(/^-|-$/g, '');
        
        // Add click counter badge — prefer magazine meta row, fallback to project-body
        const badgeHost = card.querySelector('.card-meta') || card.querySelector('.project-body');
        if (!badgeHost) return;

        const badge = document.createElement('div');
        badge.className = 'project-click-badge';
        badge.innerHTML = '<i class="fas fa-eye"></i> <span class="click-count">0</span>';
        badgeHost.appendChild(badge);
        
        // Initialize project counter in Firebase
        initProjectCounter(projectId, badge);
        
        // Track clicks on project links
        const projectLinks = card.querySelectorAll('.project-link, a[href*="github"], a[href*="gitlab"]');
        projectLinks.forEach(link => {
            link.addEventListener('click', async (e) => {
                await incrementProjectCounter(projectId, badge);
            });
        });
    });
}

async function initProjectCounter(projectId, badge) {
    try {
        // Check if Firebase is available
        if (!database) {
            console.error('Firebase not available');
            const countSpan = badge.querySelector('.click-count');
            countSpan.textContent = '--';
            return;
        }

        const projectRef = database.ref(`projects/${projectId}`);
        const snapshot = await projectRef.once('value');
        let clickCount = snapshot.val() || 0;

        // Update badge
        const countSpan = badge.querySelector('.click-count');
        countSpan.textContent = clickCount.toLocaleString();

        // Real-time updates
        projectRef.on('value', (snapshot) => {
            const newCount = snapshot.val() || 0;
            countSpan.textContent = newCount.toLocaleString();
        });

    } catch (error) {
        console.error(`Project counter error for ${projectId}:`, error);
    }
}

async function incrementProjectCounter(projectId, badge) {
    try {
        // Check if Firebase is available
        if (!database) {
            console.error('Firebase not available');
            return;
        }

        const projectRef = database.ref(`projects/${projectId}`);
        
        // Use transaction to safely increment
        await projectRef.transaction((currentCount) => {
            return (currentCount || 0) + 1;
        });

        // Add pulse effect
        badge.style.animation = 'none';
        setTimeout(() => {
            badge.style.animation = 'pulse 0.5s ease';
        }, 10);

    } catch (error) {
        console.error(`Increment project counter error for ${projectId}:`, error);
    }
}

// ============================================
// ADVANCED ANALYTICS - Track user behavior
// ============================================
async function trackUserBehavior() {
    // Check if Firebase is available
    if (!database) {
        console.warn('Firebase not available, skipping behavior tracking');
        return;
    }

    try {
        const visitorId = localStorage.getItem('portfolioVisitorId') || 'unknown';
        const behaviorRef = database.ref(`analytics/behavior/${visitorId}`);
        
        const currentClientTime = Date.now();
        let firstVisitTime = localStorage.getItem('firstVisit');
        
        if (!firstVisitTime) {
            firstVisitTime = currentClientTime;
            localStorage.setItem('firstVisit', firstVisitTime.toString());
        } else {
            // If it's the old corrupted object string, reset it to current time
            if (firstVisitTime === '[object Object]') {
                firstVisitTime = currentClientTime;
                localStorage.setItem('firstVisit', firstVisitTime.toString());
            } else {
                firstVisitTime = parseInt(firstVisitTime); // Convert string to number
            }
        }

        const behaviorData = {
            firstVisit: firstVisitTime,
            lastVisit: firebase.database.ServerValue.TIMESTAMP,
            lastVisitReadable: new Date().toLocaleString('tr-TR', { timeZone: 'Europe/Istanbul' }), // Added readable UTC+3 timestamp
            pageViews: (parseInt(localStorage.getItem('pageViews')) || 0) + 1,
            screenResolution: `${screen.width}x${screen.height}`,
            language: navigator.language,
            timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
            referrer: document.referrer || 'direct'
        };

        localStorage.setItem('pageViews', behaviorData.pageViews);

        await behaviorRef.set(behaviorData);

        // Track section views
        const sections = ['about', 'experience', 'projects', 'skills', 'contact'];
        sections.forEach(section => {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        trackSectionView(section);
                    }
                });
            }, { threshold: 0.5 });

            const sectionElement = document.getElementById(section);
            if (sectionElement) {
                observer.observe(sectionElement);
            }
        });

    } catch (error) {
        console.error('User behavior tracking error:', error);
    }
}

async function trackSectionView(sectionName) {
    // Check if Firebase is available
    if (!database) return;

    try {
        const visitorId = localStorage.getItem('portfolioVisitorId');
        if (!visitorId) return;

        const sectionRef = database.ref(`analytics/sections/${sectionName}/${visitorId}`);
        await sectionRef.set({
            timestamp: firebase.database.ServerValue.TIMESTAMP,
            duration: 0
        });

    } catch (error) {
        console.error('Section tracking error:', error);
    }
}


// ============================================
// COUNTER ANIMATION HELPER
// ============================================
function animateCounter(element, start, end, duration) {
    if (!element) return;
    
    const range = end - start;
    const increment = range / (duration / 16);
    let current = start;
    
    const timer = setInterval(() => {
        current += increment;
        if ((increment > 0 && current >= end) || (increment < 0 && current <= end)) {
            element.textContent = Math.floor(end).toLocaleString();
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current).toLocaleString();
        }
    }, 16);
}

// ============================================
// ADMIN DASHBOARD (Optional - for your analytics)
// ============================================
function initAdminDashboard() {
    // Only initialize if you're the admin (based on some condition)
    const isAdmin = window.location.hash === '#admin';
    if (isAdmin) {
        showAdminDashboard();
    }
}

function showAdminDashboard() {
    const dashboard = document.createElement('div');
    dashboard.className = 'admin-dashboard';
    dashboard.innerHTML = `
        <div class="dashboard-content">
            <h3>📊 Portfolio Analytics</h3>
            <div id="stats-container">
                <div class="stat-item">
                    <span class="stat-label">Total Visitors:</span>
                    <span id="total-visitors">0</span>
                </div>
                <div class="stat-item">
                    <span class="stat-label">Today's Visitors:</span>
                    <span id="today-visitors">0</span>
                </div>
                <div class="stat-item">
                    <span class="stat-label">Most Popular Project:</span>
                    <span id="popular-project">Loading...</span>
                </div>
            </div>
            <h4 style="margin-top: 20px;">📄 CV Analytics</h4>
            <div id="cv-stats-container">
                <div class="stat-item">
                    <span class="stat-label">CV Views (TR):</span>
                    <span id="cv-view-tr">0</span>
                </div>
                <div class="stat-item">
                    <span class="stat-label">CV Views (EN):</span>
                    <span id="cv-view-en">0</span>
                </div>
                <div class="stat-item">
                    <span class="stat-label">CV Downloads (TR):</span>
                    <span id="cv-download-tr">0</span>
                </div>
                <div class="stat-item">
                    <span class="stat-label">CV Downloads (EN):</span>
                    <span id="cv-download-en">0</span>
                </div>
            </div>
            <button onclick="hideAdminDashboard()">Close</button>
        </div>
    `;
    
    document.body.appendChild(dashboard);
    loadAdminStats();
}

async function loadAdminStats() {
    if (!database) {
        console.error('Firebase not available');
        return;
    }

    try {
        // Load total visitors
        const totalRef = database.ref('visitors/total');
        totalRef.on('value', (snapshot) => {
            const total = snapshot.val() || 0;
            const el = document.getElementById('total-visitors');
            if (el) el.textContent = total;
        });

        // Load today's visitors
        const today = new Date().toDateString();
        const todayRef = database.ref(`visitors/daily/${today}`);
        todayRef.on('value', (snapshot) => {
            const todayData = snapshot.val() || {};
            const todayCount = Object.keys(todayData).length;
            const el = document.getElementById('today-visitors');
            if (el) el.textContent = todayCount;
        });

        // Load popular project
        const projectsRef = database.ref('projects');
        projectsRef.on('value', (snapshot) => {
            const projects = snapshot.val() || {};
            let popularProject = { name: 'None', count: 0 };
            
            Object.entries(projects).forEach(([project, count]) => {
                if (count > popularProject.count) {
                    popularProject = { name: project, count: count };
                }
            });
            
            const el = document.getElementById('popular-project');
            if (el) el.textContent = `${popularProject.name} (${popularProject.count} views)`;
        });

        // Load CV Analytics
        const cvAnalyticsRef = database.ref('cv_analytics/total');
        cvAnalyticsRef.on('value', (snapshot) => {
            const cvData = snapshot.val() || {};
            
            // Update CV Views
            const viewTR = document.getElementById('cv-view-tr');
            const viewEN = document.getElementById('cv-view-en');
            const downloadTR = document.getElementById('cv-download-tr');
            const downloadEN = document.getElementById('cv-download-en');
            
            if (viewTR) viewTR.textContent = (cvData.cv_view_tr || 0).toLocaleString();
            if (viewEN) viewEN.textContent = (cvData.cv_view_en || 0).toLocaleString();
            if (downloadTR) downloadTR.textContent = (cvData.cv_download_tr || 0).toLocaleString();
            if (downloadEN) downloadEN.textContent = (cvData.cv_download_en || 0).toLocaleString();
        });

    } catch (error) {
        console.error('Admin dashboard error:', error);
    }
}

function hideAdminDashboard() {
    const dashboard = document.querySelector('.admin-dashboard');
    if (dashboard) {
        dashboard.remove();
    }
}

// ============================================
// EMAIL COPY FUNCTION
// ============================================
window.copyEmail = function() {
    const email = 'a.sametsoysal@gmail.com';
    
    // Copy to clipboard
    navigator.clipboard.writeText(email).then(() => {
        showToast();
    }).catch(err => {
        console.error('Email kopyalanamadı:', err);
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = email;
        textArea.style.position = 'fixed';
        textArea.style.opacity = '0';
        document.body.appendChild(textArea);
        textArea.select();
        try {
            document.execCommand('copy');
            showToast();
        } catch (err) {
            console.error('Fallback copy failed:', err);
        }
        document.body.removeChild(textArea);
    });
}

// ============================================
// TOAST NOTIFICATION
// ============================================
function showToast() {
    // Remove existing toast if any
    const existingToast = document.querySelector('.toast');
    if (existingToast) {
        existingToast.remove();
    }

    // Create toast element
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = '<i class="fas fa-check-circle"></i><span data-tr="contact.email.copied">' + 
        (currentLang === 'tr' ? 'Email kopyalandı!' : 'Email copied!') + '</span>';
    
    document.body.appendChild(toast);
    
    // Show toast
    setTimeout(() => {
        toast.classList.add('show');
    }, 100);
    
    // Hide and remove toast after 3 seconds
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => {
            toast.remove();
        }, 400);
    }, 3000);
}

// ============================================
// NAVBAR SCROLL EFFECT
// ============================================
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    const nav = document.querySelector('nav');
    
    if (currentScroll > lastScroll && currentScroll > 100) {
        nav.style.transform = 'translateY(-100%)';
    } else {
        nav.style.transform = 'translateY(0)';
    }
    lastScroll = currentScroll;
});

// ============================================
// INITIALIZE ON DOM READY
// ============================================
document.addEventListener('DOMContentLoaded', async () => {
    // Kick off page-load stagger on next frame
    requestAnimationFrame(() => document.body.classList.add('is-loaded'));

    // Initialize all tracking systems
    await initVisitorCounter();
    await initProjectCounters();
    await trackUserBehavior();
    initAdminDashboard();

    // Initialize certificate button
    initCertificateButton();

    // Initialize CV tracking buttons
    initCVTracking();
});

// Add pulse animation to CSS if not exists
const style = document.createElement('style');
style.textContent = `
@keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.1); }
    100% { transform: scale(1); }
}
`;
document.head.appendChild(style);

// Experience section slider functions removed as the layout changed to a vertical roadmap.

// ============================================
// MODAL ACCESSIBILITY — focus trap + return-focus
// ============================================
const modalA11y = (function(){
    let lastFocused = null;
    let activeModal = null;

    function getFocusable(modal){
        return Array.from(modal.querySelectorAll(
            'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"]), input:not([disabled]), textarea:not([disabled])'
        )).filter(el => el.offsetParent !== null);
    }

    function onKey(e){
        if (!activeModal || e.key !== 'Tab') return;
        const items = getFocusable(activeModal);
        if (!items.length) return;
        const first = items[0];
        const last = items[items.length - 1];
        if (e.shiftKey && document.activeElement === first){
            e.preventDefault();
            last.focus();
        } else if (!e.shiftKey && document.activeElement === last){
            e.preventDefault();
            first.focus();
        }
    }

    return {
        activate(modal){
            lastFocused = document.activeElement;
            activeModal = modal;
            modal.setAttribute('aria-modal', 'true');
            if (!modal.hasAttribute('role')) modal.setAttribute('role', 'dialog');
            const items = getFocusable(modal);
            if (items.length){
                requestAnimationFrame(() => items[0].focus());
            }
            document.addEventListener('keydown', onKey);
        },
        deactivate(modal){
            modal.removeAttribute('aria-modal');
            document.removeEventListener('keydown', onKey);
            if (activeModal === modal) activeModal = null;
            const restore = lastFocused;
            lastFocused = null;
            if (restore && typeof restore.focus === 'function'){
                requestAnimationFrame(() => restore.focus());
            }
        },
        isActive(){ return activeModal !== null; }
    };
})();

// ============================================
// CERTIFICATE MODAL
// ============================================
function showCertificateModal() {
    const modal = document.getElementById('certificateModal');
    const modalImg = document.getElementById('certificateImage');
    if (modal && modalImg) {
        modalImg.src = currentLang === 'tr' ? 'TEI_TR.png' : 'TEI_EN.png';
        modal.classList.add('show');
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
        modalA11y.activate(modal);
    }
}

function closeCertificateModal() {
    const modal = document.getElementById('certificateModal');
    if (modal) {
        modal.classList.remove('show');
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
        modalA11y.deactivate(modal);
    }
}

// Initialize certificate button
function initCertificateButton() {
    const certBtn = document.getElementById('certificateBtn');
    if (certBtn) {
        certBtn.addEventListener('click', function(e) {
            e.preventDefault();
            showCertificateModal();
        });
    }
}

// Company Logo Modal Functions
window.showLogoModal = function(imgSrc) {
    const modal = document.getElementById('logoModal');
    const modalImg = document.getElementById('logoModalImage');
    if (modal && modalImg) {
        modalImg.src = imgSrc;
        modal.classList.add('show');
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
        modalA11y.activate(modal);
    }
}

window.closeLogoModal = function() {
    const modal = document.getElementById('logoModal');
    if (modal) {
        modal.classList.remove('show');
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
        modalA11y.deactivate(modal);
    }
}

// Close modal on ESC key — only the visible one
document.addEventListener('keydown', (e) => {
    if (e.key !== 'Escape') return;
    const cert = document.getElementById('certificateModal');
    const logo = document.getElementById('logoModal');
    const eng = document.getElementById('englishCertModal');
    if (cert && cert.classList.contains('show')) closeCertificateModal();
    else if (eng && eng.classList.contains('show')) closeEnglishCertModal();
    else if (logo && logo.classList.contains('show')) closeLogoModal();
});

// English Certificate Modal Functions
window.showEnglishCertModal = function(imgSrc) {
    const modal = document.getElementById('englishCertModal');
    const modalImg = document.getElementById('englishCertImage');
    if (modal && modalImg) {
        modalImg.src = imgSrc;
        modal.classList.add('show');
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
        modalA11y.activate(modal);
    }
}

window.closeEnglishCertModal = function() {
    const modal = document.getElementById('englishCertModal');
    if (modal) {
        modal.classList.remove('show');
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
        modalA11y.deactivate(modal);
    }
}

// Expose close function to window for onclick
window.closeCertificate = closeCertificateModal;

// ============================================
// Turn 1 — Hero microinteractions
// ============================================
(function initHeroMicro(){
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // --- Local time (Istanbul) — 12h AM/PM, GMT+3 label is separate ---
    const localTimeEl = document.getElementById('localTime');
    if (localTimeEl) {
        const fmt = new Intl.DateTimeFormat('en-US', {
            hour: 'numeric', minute: '2-digit', hour12: true, timeZone: 'Europe/Istanbul'
        });
        const tick = () => { localTimeEl.textContent = fmt.format(new Date()); };
        tick();
        setInterval(tick, 30000);
    }

    if (reduced) return;

    // --- Magnetic buttons (eased falloff, hover-only) ---
    const supportsHover = window.matchMedia('(hover: hover)').matches;
    if (supportsHover) {
        const RADIUS = 50;
        const MAX_PULL = 0.32;
        const magnets = document.querySelectorAll('[data-magnetic]');
        magnets.forEach((el) => {
            let raf = null;
            const onMove = (e) => {
                const r = el.getBoundingClientRect();
                const cx = r.left + r.width/2;
                const cy = r.top + r.height/2;
                const dx = e.clientX - cx;
                const dy = e.clientY - cy;
                const dist = Math.hypot(dx, dy);
                if (dist > RADIUS) {
                    if (el.style.transform) el.style.transform = '';
                    return;
                }
                // Eased falloff: 1 at center, 0 at edge
                const t = 1 - (dist / RADIUS);
                const eased = t * t; // quadratic in
                const pull = eased * MAX_PULL;
                if (raf) cancelAnimationFrame(raf);
                raf = requestAnimationFrame(() => {
                    el.style.transform = `translate(${dx * pull}px, ${dy * pull}px)`;
                });
            };
            const onLeave = () => {
                if (raf) cancelAnimationFrame(raf);
                el.style.transform = '';
            };
            el.addEventListener('mousemove', onMove);
            el.addEventListener('mouseleave', onLeave);
        });
    }

    // --- Orb scroll parallax (uses margin-top to avoid clobbering orbDrift transform) ---
    const orbs = document.querySelectorAll('.gradient-orb');
    if (orbs.length){
        const speeds = [-0.14, 0.09, -0.06];
        let orbRaf = null;
        const applyParallax = () => {
            const y = window.scrollY;
            orbs.forEach((orb, i) => {
                const s = speeds[i % speeds.length];
                orb.style.marginTop = `${y * s}px`;
            });
            orbRaf = null;
        };
        window.addEventListener('scroll', () => {
            if (orbRaf) return;
            orbRaf = requestAnimationFrame(applyParallax);
        }, { passive:true });
        applyParallax();
    }
})();

/* ── EXPERIENCE: expand/collapse cards ── */
(function initRoadmapExpand(){
    const buttons = document.querySelectorAll('.roadmap-more-btn');
    if (!buttons.length) return;

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            const card = btn.closest('.roadmap-card');
            if (!card) return;
            const extra = card.querySelector('.roadmap-extra');
            if (!extra) return;
            const isOpen = btn.getAttribute('aria-expanded') === 'true';
            const label = btn.querySelector('span');
            const lang = (typeof currentLang !== 'undefined' ? currentLang : (localStorage.getItem('preferredLang') || 'tr'));
            const dict = (typeof translations !== 'undefined' && translations[lang]) || {};
            if (isOpen){
                extra.setAttribute('hidden','');
                btn.setAttribute('aria-expanded','false');
                if (label) {
                    label.textContent = dict['experience.more'] || (lang === 'tr' ? 'Daha fazla göster' : 'Show more');
                    label.setAttribute('data-tr','experience.more');
                }
            } else {
                extra.removeAttribute('hidden');
                btn.setAttribute('aria-expanded','true');
                if (label) {
                    label.textContent = dict['experience.less'] || (lang === 'tr' ? 'Daha az göster' : 'Show less');
                    label.setAttribute('data-tr','experience.less');
                }
            }
        });
    });
})();

/* ── EXPERIENCE: scroll progress dot on timeline ── */
(function initRoadmapProgress(){
    const dot = document.querySelector('.experience-progress-dot');
    const roadmap = document.querySelector('.experience-roadmap');
    if (!dot || !roadmap) return;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced){ dot.style.display = 'none'; return; }

    let ticking = false;
    const update = () => {
        const rect = roadmap.getBoundingClientRect();
        const vh = window.innerHeight;
        const startOffset = 40;
        const totalTrack = Math.max(0, rect.height - startOffset * 2);

        const viewCenter = vh * 0.45;
        const passed = viewCenter - rect.top - startOffset;
        const ratio = Math.max(0, Math.min(1, passed / totalTrack));

        if (rect.bottom < 0 || rect.top > vh){
            dot.classList.remove('active');
        } else {
            dot.classList.add('active');
            dot.style.top = (startOffset + ratio * totalTrack) + 'px';
        }
        ticking = false;
    };

    const onScroll = () => {
        if (!ticking){
            requestAnimationFrame(update);
            ticking = true;
        }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    update();
})();

/* ═══════════════════════════════════════════════════════════════════
   SMTbot showcase — live BTC/USDT chart + ticker from Binance public API
   ═══════════════════════════════════════════════════════════════════ */
(function initSMTbotLiveBTC(){
    const chartLine = document.querySelector('.showcase-chart-line');
    const chartFill = document.querySelector('.showcase-chart-fill');
    const chartTip  = document.querySelector('.showcase-chart-tip');
    const chartHalo = document.querySelector('.showcase-chart-tip-halo');
    const hiLine    = document.querySelector('.chart-hi-line');
    const loLine    = document.querySelector('.chart-lo-line');
    const hiMarker  = document.querySelector('.chart-hi-marker');
    const loMarker  = document.querySelector('.chart-lo-marker');
    const hiLabel   = document.querySelector('.chart-hi-label');
    const loLabel   = document.querySelector('.chart-lo-label');
    const hiValEl   = document.getElementById('sc-hi-val');
    const loValEl   = document.getElementById('sc-lo-val');
    const hiTimeEl  = document.getElementById('sc-hi-time');
    const loTimeEl  = document.getElementById('sc-lo-time');
    const priceEl   = document.getElementById('sc-btc-price');
    const changeEl  = document.getElementById('sc-btc-change');
    const highEl    = document.getElementById('sc-btc-high');
    const lowEl     = document.getElementById('sc-btc-low');
    const volEl     = document.getElementById('sc-btc-vol');
    if (!chartLine || !priceEl) return;

    // Last 24h @ 30-min resolution: 48 × 30m = 1440 min
    const KLINES = 'https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=30m&limit=48';
    const TICKER = 'https://api.binance.com/api/v3/ticker/24hr?symbol=BTCUSDT';

    const W = 200, H = 100, yTop = 8, yBot = 92;
    let chartMin = 0, chartMax = 1;
    let lastPrice = null;
    let bars = [];              // [{openTime, close, high, low}]
    let hiBarX = 0, loBarX = 0; // viewBox x positions of the extreme bars

    const fmtUSD0 = n => '$' + Number(n).toLocaleString('en-US', { maximumFractionDigits: 0 });
    const fmtPct  = n => (n >= 0 ? '+' : '') + Number(n).toFixed(2) + '%';
    const fmtBigB = n => {
        const v = Number(n);
        if (v >= 1e9) return (v / 1e9).toFixed(2) + 'B';
        if (v >= 1e6) return (v / 1e6).toFixed(1) + 'M';
        if (v >= 1e3) return (v / 1e3).toFixed(1) + 'K';
        return v.toFixed(0);
    };
    const fmtTime = ms => {
        const d = new Date(ms);
        const hh = String(d.getHours()).padStart(2,'0');
        const mm = String(d.getMinutes()).padStart(2,'0');
        return hh + ':' + mm;
    };
    const priceToY = p => {
        const range = (chartMax - chartMin) || 1;
        const clamped = Math.max(chartMin, Math.min(chartMax, p));
        return yBot - ((clamped - chartMin) / range) * (yBot - yTop);
    };
    const setTip = (cx, cy) => {
        if (chartTip){ chartTip.setAttribute('cx', cx); chartTip.setAttribute('cy', cy); }
        if (chartHalo){ chartHalo.setAttribute('cx', cx); chartHalo.setAttribute('cy', cy); }
    };

    function renderLine(){
        if (!bars.length) return;
        const n = bars.length;
        const pts = bars.map((b, i) => {
            const x = (i / (n - 1)) * W;
            const y = priceToY(b.close);
            return x.toFixed(2) + ',' + y.toFixed(2);
        });
        // Extend the line/fill to the live price at x=W so the tip always sits on it
        if (lastPrice !== null){
            pts[pts.length - 1] = W.toFixed(2) + ',' + priceToY(lastPrice).toFixed(2);
        }
        const lineD = 'M' + pts.join(' L');
        const fillD = lineD + ' L' + W + ',' + H + ' L0,' + H + ' Z';
        chartLine.setAttribute('d', lineD);
        if (chartFill) chartFill.setAttribute('d', fillD);

        // H/L lines, markers, labels — using kline-derived 24h extremes
        const hiBar = bars.reduce((a, b) => b.high > a.high ? b : a, bars[0]);
        const loBar = bars.reduce((a, b) => b.low  < a.low  ? b : a, bars[0]);
        const hiIdx = bars.indexOf(hiBar);
        const loIdx = bars.indexOf(loBar);
        hiBarX = (hiIdx / (n - 1)) * W;
        loBarX = (loIdx / (n - 1)) * W;
        const hiY = priceToY(hiBar.high);
        const loY = priceToY(loBar.low);
        if (hiLine){ hiLine.setAttribute('y1', hiY); hiLine.setAttribute('y2', hiY); }
        if (loLine){ loLine.setAttribute('y1', loY); loLine.setAttribute('y2', loY); }
        if (hiMarker){
            hiMarker.setAttribute('cx', hiBarX);
            hiMarker.setAttribute('cy', hiY);
            hiMarker.classList.add('visible');
        }
        if (loMarker){
            loMarker.setAttribute('cx', loBarX);
            loMarker.setAttribute('cy', loY);
            loMarker.classList.add('visible');
        }
        if (hiValEl)  hiValEl.textContent  = fmtUSD0(hiBar.high);
        if (loValEl)  loValEl.textContent  = fmtUSD0(loBar.low);
        if (hiTimeEl) hiTimeEl.textContent = fmtTime(hiBar.openTime);
        if (loTimeEl) loTimeEl.textContent = fmtTime(loBar.openTime);
        if (hiLabel)  hiLabel.style.top = hiY + '%';
        if (loLabel)  loLabel.style.top = loY + '%';

        setTip(W, priceToY(lastPrice ?? bars[n - 1].close));
    }

    async function drawChart(){
        try {
            const res = await fetch(KLINES);
            if (!res.ok) return;
            const data = await res.json();
            if (!data.length) return;
            bars = data.map(k => ({
                openTime: k[0],
                high:  parseFloat(k[2]),
                low:   parseFloat(k[3]),
                close: parseFloat(k[4]),
            }));
            chartMin = Math.min(...bars.map(b => b.low));
            chartMax = Math.max(...bars.map(b => b.high));
            // Include live tick in window so the tip never clips
            if (lastPrice !== null){
                chartMin = Math.min(chartMin, lastPrice);
                chartMax = Math.max(chartMax, lastPrice);
            }
            renderLine();
            // Re-trigger draw-in animation
            chartLine.style.animation = 'none';
            void chartLine.getBoundingClientRect();
            chartLine.style.animation = '';
        } catch (e) { /* silent — keep static fallback */ }
    }

    async function drawTicker(){
        try {
            const res = await fetch(TICKER);
            if (!res.ok) return;
            const d = await res.json();
            const price  = parseFloat(d.lastPrice);
            const change = parseFloat(d.priceChangePercent);
            const high   = parseFloat(d.highPrice);
            const low    = parseFloat(d.lowPrice);
            const vol    = parseFloat(d.quoteVolume);
            if (priceEl){
                priceEl.textContent = fmtUSD0(price);
                if (lastPrice !== null && price !== lastPrice){
                    const dir = price > lastPrice ? 'flash-up' : 'flash-dn';
                    priceEl.classList.remove('flash-up','flash-dn');
                    void priceEl.offsetWidth;
                    priceEl.classList.add(dir);
                }
            }
            if (changeEl){
                changeEl.textContent = fmtPct(change);
                changeEl.classList.toggle('neg', change < 0);
                changeEl.classList.toggle('pos', change >= 0);
            }
            if (highEl) highEl.textContent = fmtUSD0(high);
            if (lowEl)  lowEl.textContent  = fmtUSD0(low);
            if (volEl)  volEl.textContent  = '$' + fmtBigB(vol);
            lastPrice = price;
            // Expand window if live price breaches our kline extents so nothing clips
            if (price > chartMax) chartMax = price;
            if (price < chartMin) chartMin = price;
            if (bars.length) renderLine();
        } catch (e) { /* silent */ }
    }

    drawChart();
    drawTicker();
    setInterval(drawChart, 20_000);
    setInterval(drawTicker, 5_000);
})();

/* Profile photo — block drag, right-click and selection (best-effort copy protection) */
(function lockHeroPhoto(){
    const photo = document.querySelector('.hero-photo-locked');
    if (!photo) return;
    const block = (e) => { e.preventDefault(); return false; };
    photo.addEventListener('contextmenu', block);
    photo.addEventListener('dragstart', block);
    photo.addEventListener('selectstart', block);
    const img = photo.querySelector('img');
    if (img) {
        img.addEventListener('contextmenu', block);
        img.addEventListener('dragstart', block);
        img.addEventListener('mousedown', (e) => { if (e.button === 2) e.preventDefault(); });
    }
})();

/* Footer live local-time ticker */
(function initFooterClock(){
    const el = document.getElementById('footerTime');
    if (!el) return;
    const pad = n => String(n).padStart(2, '0');
    const tick = () => {
        const d = new Date();
        el.textContent = pad(d.getHours()) + ':' + pad(d.getMinutes()) + ':' + pad(d.getSeconds());
    };
    tick();
    setInterval(tick, 1000);
})();

/* Hero name reveal — char-by-char cascade for "SAMET SOYSAL" + period pop.
   Splits the name into individual <span class="char"> elements with a stagger
   index, then unlocks the title's CSS animation override. Reduced-motion users
   keep the static rendering via the CSS guard. */
(function initHeroNameReveal(){
    const titleEl = document.querySelector('.hero-grid-split .hero-title');
    const nameEl  = titleEl && titleEl.querySelector('.hero-title-name');
    if (!titleEl || !nameEl) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const text = nameEl.textContent;
    nameEl.textContent = '';
    let idx = 0;
    const frag = document.createDocumentFragment();
    for (const ch of text){
        const span = document.createElement('span');
        if (ch === ' ') {
            span.className = 'char char-space';
            span.innerHTML = '&nbsp;';
        } else {
            span.className = 'char';
            span.textContent = ch;
        }
        span.style.setProperty('--char-i', idx);
        frag.appendChild(span);
        idx++;
    }
    nameEl.appendChild(frag);

    // Period pops in just after the last character finishes its rise
    const periodDelay = 180 + (idx * 55) + 220; // ms
    titleEl.style.setProperty('--period-delay', periodDelay + 'ms');
    titleEl.classList.add('hero-title-revealed');
})();

/* Custom hover cursor — "Read the case" pill following pointer over project cards
   (Wave 2: Proxio hybrid study). Position uses direct transform so the pill tracks
   the pointer 1:1; scale-in animates via CSS .is-visible toggle. */
(function initSeeProjectCursor(){
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (window.matchMedia('(hover: none)').matches) return;

    // Opt-in: only fires on project cards that explicitly declare data-case-href.
    const SELECTOR = '.project-card[data-case-href]';
    const LABEL_TR = 'Vakayı oku →';
    const LABEL_EN = 'Read the case →';

    let cursorEl = null;
    let innerEl = null;
    let rafId = null;
    let pendingX = 0, pendingY = 0;
    let visible = false;

    function getLabel(card){
        const override = card.dataset.cursorLabel;
        if (override) return override;
        const lang = localStorage.getItem('preferredLang') || 'en';
        return lang === 'tr' ? LABEL_TR : LABEL_EN;
    }

    function ensureCursor(){
        if (cursorEl) return;
        cursorEl = document.createElement('div');
        cursorEl.className = 'see-project-cursor';
        cursorEl.setAttribute('aria-hidden', 'true');
        innerEl = document.createElement('span');
        innerEl.className = 'see-project-cursor-inner';
        cursorEl.appendChild(innerEl);
        document.body.appendChild(cursorEl);
    }

    function show(card){
        ensureCursor();
        innerEl.textContent = getLabel(card);
        cursorEl.classList.add('is-visible');
        visible = true;
    }

    function hide(){
        if (!cursorEl) return;
        cursorEl.classList.remove('is-visible');
        visible = false;
        if (rafId) {
            cancelAnimationFrame(rafId);
            rafId = null;
        }
    }

    document.addEventListener('mouseover', (e) => {
        const card = e.target.closest(SELECTOR);
        if (!card) return;
        show(card);
    });

    document.addEventListener('mouseout', (e) => {
        const card = e.target.closest(SELECTOR);
        if (!card) return;
        const rel = e.relatedTarget;
        if (rel && card.contains(rel)) return;
        if (rel && rel.closest && rel.closest(SELECTOR)) return;
        hide();
    });

    document.addEventListener('mousemove', (e) => {
        if (!visible) return;
        pendingX = e.clientX;
        pendingY = e.clientY;
        if (rafId) return;
        rafId = requestAnimationFrame(() => {
            cursorEl.style.transform = `translate3d(${pendingX}px, ${pendingY}px, 0)`;
            rafId = null;
        });
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') hide();
    });
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) hide();
    });
})();

/* ── EASTER EGG: Konami code ⚡ ── */
(function konamiCode(){
    const seq = ['ArrowUp','ArrowUp','ArrowDown','ArrowDown','ArrowLeft','ArrowRight','ArrowLeft','ArrowRight','b','a'];
    let idx = 0;
    let active = false;
    document.addEventListener('keydown', (e) => {
        const k = e.key.length === 1 ? e.key.toLowerCase() : e.key;
        if (k === seq[idx]) {
            idx++;
            if (idx === seq.length) {
                idx = 0;
                if (active) return;
                active = true;
                triggerCheatMode();
            }
        } else {
            idx = (k === seq[0]) ? 1 : 0;
        }
    });
    function triggerCheatMode(){
        const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        document.body.classList.add('cheat-mode');
        try {
            console.log('%c⚡ Cheat mode: ON', 'color:#2dd4bf; font: 700 16px "JetBrains Mono", monospace; padding:4px;');
            console.log('%cLightning intensified for 8 seconds. Enjoy.', 'color:#a8acbe; font: 12px "JetBrains Mono", monospace;');
        } catch (_) {}
        // Toast (subtle)
        const toast = document.createElement('div');
        toast.className = 'konami-toast';
        toast.textContent = '⚡ cheat mode';
        document.body.appendChild(toast);
        setTimeout(() => toast.classList.add('show'), 20);
        // Boost lightning by spawning extra bolts at intervals
        let boostInterval = null;
        if (!reduced && typeof window.__lightningSpawn === 'function'){
            boostInterval = setInterval(() => window.__lightningSpawn(), 350);
        }
        setTimeout(() => {
            document.body.classList.remove('cheat-mode');
            if (boostInterval) clearInterval(boostInterval);
            toast.classList.remove('show');
            setTimeout(() => toast.remove(), 600);
            active = false;
        }, 8000);
    }
})();

/* ── EASTER EGG: Logo 5× rapid-click → bracket flip + emoji ── */
(function logoClicker(){
    const logo = document.querySelector('.logo');
    if (!logo) return;
    let clicks = 0;
    let timer = null;
    logo.addEventListener('click', (e) => {
        clicks++;
        if (timer) clearTimeout(timer);
        timer = setTimeout(() => { clicks = 0; }, 3000);
        if (clicks >= 5) {
            e.preventDefault();
            clicks = 0;
            triggerBracketFlip();
        }
    });
    function triggerBracketFlip(){
        const brackets = logo.querySelectorAll('.logo-bracket');
        if (!brackets.length) return;
        const originals = Array.from(brackets).map(b => b.textContent);
        brackets[0].textContent = '/>';
        if (brackets[1]) brackets[1].textContent = '<';
        const emoji = document.createElement('span');
        emoji.className = 'logo-egg';
        emoji.textContent = '👀';
        document.body.appendChild(emoji);
        setTimeout(() => emoji.classList.add('show'), 20);
        try {
            console.log('%c👀 You found me. Brackets briefly mirrored.', 'color:#f472b6; font: 12px "JetBrains Mono", monospace;');
        } catch (_) {}
        setTimeout(() => {
            brackets.forEach((b, i) => b.textContent = originals[i]);
            emoji.classList.remove('show');
            setTimeout(() => emoji.remove(), 500);
        }, 1100);
    }
})();

/* ── Hero photo 3D mouse-tilt parallax ── */
(function initHeroPhotoTilt(){
    const photo = document.querySelector('.hero-photo');
    const stage = document.querySelector('.hero-photo-aside');
    if (!photo || !stage) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (!window.matchMedia('(hover: hover)').matches) return;

    const MAX_TILT = 9;   // degrees — keep subtle, editorial feel
    let raf = null;

    const onMove = (e) => {
        const r = stage.getBoundingClientRect();
        const cx = r.left + r.width / 2;
        const cy = r.top + r.height / 2;
        const nx = (e.clientX - cx) / (r.width / 2);
        const ny = (e.clientY - cy) / (r.height / 2);
        const cnx = Math.max(-1, Math.min(1, nx));
        const cny = Math.max(-1, Math.min(1, ny));
        if (raf) cancelAnimationFrame(raf);
        raf = requestAnimationFrame(() => {
            photo.style.setProperty('--tilt-y', `${cnx * MAX_TILT}deg`);
            photo.style.setProperty('--tilt-x', `${-cny * MAX_TILT}deg`);
        });
    };
    const onLeave = () => {
        if (raf) cancelAnimationFrame(raf);
        photo.style.setProperty('--tilt-x', '0deg');
        photo.style.setProperty('--tilt-y', '0deg');
    };

    stage.addEventListener('mousemove', onMove);
    stage.addEventListener('mouseleave', onLeave);
})();