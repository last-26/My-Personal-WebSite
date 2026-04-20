// Portfolio Website JavaScript - Samet Soysal

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
        "nav.about": "Hakkımda",
        "nav.education": "Eğitim",
        "nav.experience": "Deneyim",
        "nav.skills": "Yetenekler",
        "nav.projects": "Projeler",
        "nav.contact": "İletişim",
        "hero.badge": "AI/ML Mühendisi & Full-Stack Developer",
        "hero.subtitle.prefix": "Uzmanlık alanım:",
        "hero.subtitle": "Yapay Zeka | Makine Öğrenmesi | NLP Uzmanı",
        "hero.description": "RAG sistemleri, OCR teknolojileri ve çok modelli AI çözümleri geliştiriyorum. Kurumsal projelerde production-ready yapay zeka sistemleri tasarlama ve entegrasyon konularında uzmanım.",
        "hero.btn.projects": "Projelerim",
        "hero.btn.github": "GitHub Profilim",
        "hero.btn.contact": "İletişim",
        "hero.btn.cv.view": "CV Görüntüle",
        "hero.btn.cv.download": "CV İndir",
        "about.title": "Hakkımda",
        "about.intro": "Uçtan uca <span class='kw'>AI sistemleri</span> tasarlıyorum — veriden modele, prototipten üretime, <span class='kw'>ölçeklenebilir</span> ve ölçülebilir.",
        "about.description": "Eskişehir Osmangazi Üniversitesi Bilgisayar Mühendisliği mezunuyum. Uçtan uca <span class='kw'>AI mimarileri</span>, yüksek performanslı <span class='kw'>RAG pipeline</span>'ları ve <span class='kw'>Multi-LLM</span> orkestrasyonları tasarlama konusunda kanıtlanmış deneyime sahibim. Temel gücüm, karmaşık makine öğrenmesi modellerini ölçeklenebilir <span class='kw'>full-stack</span> geliştirme (<span class='kw'>React</span>, <span class='kw'>FastAPI</span>, <span class='kw'>PostgreSQL</span>) ile birleştirerek milisaniye düzeyinde gecikme ve <span class='kw'>%95+ doğruluk</span> oranıyla veri odaklı çözümler sunmaktır.",
        "about.stats.years": "Yıl Deneyim",
        "about.stats.projects": "Tamamlanan Proje",
        "about.stats.technologies": "Teknoloji",
        "education.title": "Eğitim",
        "education.degree": "Bilgisayar Mühendisliği Lisans",
        "education.school": "Eskişehir Osmangazi Üniversitesi",
        "education.date": "2020 - 2026",
        "education.detail": "Yapay Zeka, Makine Öğrenmesi ve Doğal Dil İşleme alanlarında uzmanlaşma. Mezuniyet projesi: HIREAI — AI destekli CV analiz platformu.",
        "education.cert.title": "İngilizce Dil Okulları",
        "education.cert.school": "American Cultural Language Schools",
        "education.cert.date": "2022 - 2024",
        "education.cert.detail": "Okuma, yazma, dinleme ve konuşma (Spoken Interaction & Production) alanlarında profesyonel yeterlilik eğitimi ve sertifikasyonu.",
        "education.cert.c1.btn": "C1 Sertifikası",
        "education.cert.b2.btn": "B2 Sertifikası",
        "experience.title": "Deneyim",
        "experience.certificate": "Sertifika",
        "experience.more": "Daha fazla göster",
        "experience.less": "Daha az göster",
        "experience.achievementsLabel": "ÖNEMLİ KAZANIMLAR",
        "experience.icictas.title": "Yazılım Geliştirme Stajyeri",
        "experience.icictas.company": "<a href='https://www.ictasnukleer.com.tr' target='_blank' class='company-link'>IC İçtaş Nükleer ve Endüstriyel Tesisler İnşaat A.Ş.</a>",
        "experience.icictas.date": "Oca 2026",
        "experience.icictas.desc": "Akkuyu Nükleer Santral sahasından gelen verileri analiz etmek için React.js, FastAPI ve PostgreSQL kullanarak uçtan uca İSG Takip Paneli geliştirdim. Backend tarafında Passlib ve JWT ile güvenli kimlik doğrulama sistemleri kurarken, SQLAlchemy ORM ile veritabanı yönetimini optimize ettim. Ayrıca yüksek kardinaliteli verilerde B-tree indeksleme stratejileri uygulayarak sorgu performansını artırdım ve Material UI ile yöneticiler için gerçek zamanlı analitik dashboard'lar tasarladım.",
        "experience.icictas.metrics.1": "Full-stack stack",
        "experience.icictas.metrics.2": "Gerçek zamanlı dashboard",
        "experience.icictas.metrics.3": "B-tree indeksleme",
        "experience.icictas.achievements.1": "Akkuyu Nükleer sahası için React + FastAPI ile uçtan uca İSG Takip Paneli geliştirdim.",
        "experience.icictas.achievements.2": "Passlib ve JWT tabanlı güvenli kimlik doğrulama akışı kurdum.",
        "experience.icictas.achievements.3": "SQLAlchemy ORM ile yazılmış sorgularda B-tree indeksleme uygulayarak performansı önemli ölçüde artırdım.",
        "experience.icictas.achievements.4": "Material UI ile yöneticiler için gerçek zamanlı analitik dashboard'lar tasarladım.",
        "experience.tei.title": "Data Science & AI Stajyeri",
        "experience.tei.company": "<a href='https://www.tei.com.tr' target='_blank' class='company-link company-tei'>TEI – TUSAŞ Motor Sanayii A.Ş. | Eskişehir</a>",
        "experience.tei.date": "Ağu – Eyl 2025",
        "experience.tei.desc": "TEI bünyesinde izole ağlarda güvenli veri iletimi ve sistem mimarileri üzerine Ar-Ge çalışmaları yürüttüm. İnsan Kaynakları departmanı için LLM tabanlı 'SAMETEI' yapay zeka asistanının prototipleme sürecini yöneterek OpenRouter ve Local LLM entegrasyonlarını gerçekleştirdim. Ayrıca n8n ile finansal metrikleri analiz eden otonom iş akışları ve Playwright kullanarak e-ticaret süreçlerini otomatize eden RPA çözümleri geliştirdim.",
        "experience.tei.metrics.1": "Multi-LLM prototip",
        "experience.tei.metrics.2": "n8n otomasyonları",
        "experience.tei.metrics.3": "İzole ağ Ar-Ge",
        "experience.tei.achievements.1": "LLM tabanlı 'SAMETEI' İK asistanı prototipini OpenRouter + Local LLM entegrasyonuyla yönettim.",
        "experience.tei.achievements.2": "n8n ile finansal metrikleri analiz eden otonom iş akışları geliştirdim.",
        "experience.tei.achievements.3": "Playwright ile e-ticaret süreçlerini otomatize eden RPA çözümleri kurdum.",
        "experience.tei.achievements.4": "İzole ağlarda güvenli veri iletimi üzerine Ar-Ge notları hazırladım.",
        "experience.powintec.title": "Part-Time Yazılım Geliştirici (Remote)",
        "experience.powintec.company": "Powintec Engineering | Wireless Charging of Small Electric Vehicles",
        "experience.powintec.date": "Tem 2023 – Tem 2025",
        "experience.powintec.desc": "Kablosuz şarj sistemlerinden gelen hizalama, sıcaklık ve verimlilik verilerini anlık olarak izlemek amacıyla React.js, TailwindCSS ve WebSockets tabanlı bir yönetim paneli hazırladım. WebSocket üzerinden gelen yoğun veri akışının UI performansını etkilememesi için state yönetimini optimize ederek milisaniye düzeyinde gecikme ile veri işleme sağladım. Donanım bağlantı kopmalarına karşı hata yönetim mekanizmaları geliştirerek sistem kararlılığını artırdım.",
        "experience.powintec.metrics.1": "Kablosuz şarj UI",
        "experience.powintec.metrics.2": "WebSocket stream",
        "experience.powintec.metrics.3": "< ms latency",
        "experience.powintec.achievements.1": "React + TailwindCSS + WebSocket tabanlı kablosuz şarj izleme paneli hazırladım.",
        "experience.powintec.achievements.2": "Yüksek frekanslı WebSocket verisinde state yönetimini optimize ederek UI jank'ini giderdim.",
        "experience.powintec.achievements.3": "Donanım bağlantı kopmalarına karşı hata yönetim mekanizmaları geliştirdim.",
        "skills.title": "Yetenekler",
        "skills.terminal.title": "samet@portfolyo:~/yetenekler",
        "skills.languages.turkish": "Türkçe (Ana Dil)",
        "skills.languages.english": "İngilizce (B2 - Profesyonel Yeterlilik)",
        "projects.title": "Projeler",
        "projects.badge.corporate": "KURUMSAL",
        "projects.badge.graduation": "MEZUN. PROJESİ",
        "projects.badge.automation": "OTOMASYON",
        "projects.badge.cloud": "BULUT",
        "projects.badge.devops": "DEVOPS",
        "projects.badge.agent": "AI AJAN",
        "projects.badge.mlops": "MLOPS",
        "projects.badge.rl": "RL / TRADING",
        "projects.status.live": "Canlı",
        "projects.status.archive": "Arşiv",
        "projects.status.wip": "Aktif geliştirme",
        "projects.wip": "Şu an üzerinde çalışıyorum",
        "projects.smtbot.subtitle": "Reinforcement Learning Trading Bot'u",
        "projects.smtbot.description": "Kişisel trading deneyimimi pekiştirmeli öğrenme ile birleştiren uçtan uca bir bot. PPO + Stable Baselines3 ajanları Pine Script sinyallerinden özellik mühendisliği yapılmış veriler üzerinde eğitiliyor, walk-forward optimization ile out-of-sample dönemlerde doğrulanıyor ve MCP server aracılığıyla canlı sinyallere bağlanıyor. Kendi tecrübemi içselleştirmiş, ölçülebilir ve risk kontrollü bir otonom trader üretmeyi hedefliyor.",
        "projects.smtbot.metric": "PPO · Stable Baselines3 · Walk-Forward Optimization",
        "projects.finsenti.subtitle": "Finansal Duygu Analizi MLOps Pipeline'ı",
        "projects.finsenti.description": "Finansal metin duygu analizi için uçtan uca MLOps pipeline'ı. FinBERT ve distilBERT modellerini LoRA adaptörleri ile fine-tune eder, deneyleri MLflow ile takip eder ve tahminleri FastAPI + Next.js ile sunar. FinBERT + LoRA modeli %91.1 doğruluk ve 0.90 F1 skoru elde etti.",
        "projects.finsenti.metric": "%91.1 doğruluk · FinBERT + LoRA",
        "projects.nexthire.subtitle": "AI Destekli İş Başvuru Ajanı",
        "projects.nexthire.description": "LangGraph tabanlı çok adımlı AI agent sistemi. CV yükle, iş ilanı yapıştır — agent otomatik olarak ATS skoru hesaplar, eksik yetkinlikleri belirler, kişiselleştirilmiş ön yazı oluşturur ve başvuruyu kanban panosuna ekler. Multi-model routing ile maliyet-performans optimizasyonu sağlar.",
        "projects.nexthire.metric": "LangGraph · Çoklu-model yönlendirme",
        "projects.awsai.subtitle": "AWS ile Akıllı Doküman Soru-Cevap Sistemi",
        "projects.awsai.description": "AWS bulut servisleri üzerine inşa edilmiş serverless doküman soru-cevap sistemi. PDF dokümanları S3'e yüklenir, Textract ile otomatik metin çıkarımı yapılır ve Bedrock üzerindeki Claude AI modeli ile doğal dilde sorulara yanıt verilir. API Gateway, Lambda, DynamoDB, SNS ve CDK ile tamamen Infrastructure as Code olarak tasarlanmıştır.",
        "projects.swiftlink.subtitle": "Hızlı & Modern URL Kısaltma Servisi",
        "projects.swiftlink.description": "FastAPI ile geliştirilmiş, Docker ile konteynerize edilmiş ve GitHub Actions CI/CD pipeline'ı ile otomatik test edilen modern URL kısaltma uygulaması. Kısaltılmış linkler için tıklama analitiği ve gerçek zamanlı istatistikler sunar.",
        "projects.sametei.subtitle": "AI Destekli İK Doküman Yönetim Platformu",
        "projects.sametei.description": "LibreChat çerçevesi üzerine inşa edilmiş, insan kaynakları doküman yönetimini yapay zeka ile otomatikleştiren kurumsal ölçekte platform. İK ekiplerinin doküman işleme süresini %70 azalttı.",
        "projects.hireai.subtitle": "AI Destekli CV & Portföy Analiz Platformu",
        "projects.hireai.description": "ATS tabanlı CV analiz ve optimizasyon platformu. CV'leri iş tanımlarına göre analiz eder, ATS uyumlu skorlar ve iyileştirme önerileri sunar. İK ekiplerinin ön eleme süresini %50 azalttı.",
        "projects.bitcoin.title": "Bitcoin Teknik Analiz Otomasyonu",
        "projects.bitcoin.subtitle": "AI Destekli Kripto Para Analiz & Raporlama Sistemi",
        "projects.bitcoin.description": "n8n workflow automation ile geliştirilmiş Bitcoin teknik analiz sistemi. Binance API'den otomatik veri toplayarak 15+ teknik gösterge analizi yapar (SMA, EMA, RSI, MACD, Bollinger Bands, VWAP, ATR). DeepSeek R1 AI modeli ile piyasa yorumları oluşturur ve profesyonel HTML raporlarını her 4 saatte bir otomatik olarak email ile gönderir.",
        "projects.fruit.title": "Meyve Olgunluk Tespiti",
        "projects.fruit.subtitle": "Makine Öğrenmesi & Computer Vision",
        "projects.fruit.description": "Görüntü işleme ve 5 farklı ML algoritması (SVM, Random Forest, Gradient Boosting, Logistic Regression, Ensemble) kullanarak meyve olgunluğunu tespit eden pattern recognition projesi.",
        "projects.news.subtitle": "Modern Haber Toplayıcı Platform",
        "projects.news.description": "ASP.NET ile geliştirilmiş modern haber toplayıcı. RSS feed'lerini akıllı kategorizasyon ile çeker ve düzenli bir şekilde kullanıcılara sunar.",
        "projects.link": "GitHub'da Görüntüle",
        "projects.link.gitlab": "GitLab'da Görüntüle",
        "contact.title": "İletişim",
        "contact.eyebrow": "İLETİŞİME GEÇ",
        "contact.statement.line1": "Birlikte bir şey",
        "contact.statement.line2": "inşa edelim.",
        "contact.lead": "Yeni fırsatlara ve işbirliklerine her zaman açığım. Hızla dönüş yaparım.",
        "contact.copy": "kopyala",
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
        "skills.terminal.status": "bağlı",
        "visitor.header": "Ziyaretçi",
        "visitor.total": "toplam",
        "visitor.daily": "bugün",
        "visitor.weekly": "SON 7 GÜN",
        "visitor.weekly.cta": "7 günlük dağılımı gör",
        "visitor.reset.note": "Veriler 16 Mart 2026 tarihinde sıfırlanmıştır.",
        "footer.tagline": "AI/ML & Cloud çözümleri ile geleceği inşa ediyorum.",
        "footer.signature": "Görüşmek üzere.",
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
        "nav.about": "About",
        "nav.education": "Education",
        "nav.experience": "Experience",
        "nav.skills": "Skills",
        "nav.projects": "Projects",
        "nav.contact": "Contact",
        "hero.badge": "AI/ML Engineer & Full-Stack Developer",
        "hero.subtitle.prefix": "I specialize in",
        "hero.subtitle": "Artificial Intelligence | Machine Learning | NLP Specialist",
        "hero.description": "I develop RAG systems, OCR technologies, and multi-model AI solutions. I specialize in designing and integrating production-ready artificial intelligence systems in corporate projects.",
        "hero.btn.projects": "My Projects",
        "hero.btn.github": "My GitHub Profile",
        "hero.btn.contact": "Contact",
        "hero.btn.cv.view": "View CV",
        "hero.btn.cv.download": "Download CV",
        "about.title": "About Me",
        "about.intro": "I design end-to-end <span class='kw'>AI systems</span> — from data to model, prototype to production, <span class='kw'>scalable</span> and measurable.",
        "about.description": "Graduated from Eskişehir Osmangazi University with a BSc in Computer Engineering. I have a proven track record of designing end-to-end <span class='kw'>AI architectures</span>, high-performance <span class='kw'>RAG pipelines</span>, and <span class='kw'>Multi-LLM</span> orchestrations. My core strength lies in bridging complex machine learning models with scalable <span class='kw'>full-stack</span> development (<span class='kw'>React</span>, <span class='kw'>FastAPI</span>, <span class='kw'>PostgreSQL</span>) to deliver data-driven solutions with millisecond-level latency and over <span class='kw'>95% accuracy</span>.",
        "about.stats.years": "Years of Experience",
        "about.stats.projects": "Completed Projects",
        "about.stats.technologies": "Technologies",
        "education.title": "Education",
        "education.degree": "BSc in Computer Engineering",
        "education.school": "Eskisehir Osmangazi University",
        "education.date": "2020 - 2026",
        "education.detail": "Specializing in Artificial Intelligence, Machine Learning and NLP. Capstone project: HIREAI — AI-powered CV analysis platform.",
        "education.cert.title": "English Language Schools",
        "education.cert.school": "American Cultural Language Schools",
        "education.cert.date": "2022 - 2024",
        "education.cert.detail": "Professional proficiency training and certification in reading, writing, listening, and spoken interaction/production.",
        "education.cert.c1.btn": "C1 Certificate",
        "education.cert.b2.btn": "B2 Certificate",
        "experience.title": "Experience",
        "experience.certificate": "Certificate",
        "experience.more": "Show more",
        "experience.less": "Show less",
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
        "experience.tei.company": "<a href='https://www.tei.com.tr/en' target='_blank' class='company-link company-tei'>TEI – TUSAS Engine Industries Inc. | Eskisehir, Turkey</a>",
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
        "skills.title": "Skills",
        "skills.terminal.title": "samet@portfolio:~/skills",
        "skills.languages.turkish": "Turkish (Native)",
        "skills.languages.english": "English (B2 - Professional Proficiency)",
        "projects.title": "Projects",
        "projects.badge.corporate": "CORPORATE",
        "projects.badge.graduation": "CAPSTONE",
        "projects.badge.automation": "AUTOMATION",
        "projects.badge.cloud": "CLOUD",
        "projects.badge.devops": "DEVOPS",
        "projects.badge.agent": "AI AGENT",
        "projects.badge.mlops": "MLOPS",
        "projects.badge.rl": "RL / TRADING",
        "projects.status.live": "Live",
        "projects.status.archive": "Archive",
        "projects.status.wip": "In active development",
        "projects.wip": "Currently building",
        "projects.smtbot.subtitle": "Reinforcement Learning Trading Bot",
        "projects.smtbot.description": "An end-to-end trading bot that fuses my own discretionary experience with reinforcement learning. PPO agents on Stable Baselines3 train on features engineered from Pine Script signals, get validated across out-of-sample walk-forward windows, and stream live decisions through an MCP server. The goal: a measurable, risk-aware autonomous trader that has internalized the way I read markets.",
        "projects.smtbot.metric": "PPO · Stable Baselines3 · Walk-Forward Optimization",
        "projects.finsenti.subtitle": "Financial Sentiment Analysis MLOps Pipeline",
        "projects.finsenti.description": "End-to-end MLOps pipeline for financial sentiment analysis. Fine-tunes FinBERT and distilBERT with LoRA adapters, tracks experiments with MLflow, and serves predictions via FastAPI + Next.js. FinBERT + LoRA model achieved 91.1% accuracy and 0.90 F1 score.",
        "projects.finsenti.metric": "91.1% accuracy · FinBERT + LoRA",
        "projects.nexthire.subtitle": "AI-Powered Job Application Agent",
        "projects.nexthire.description": "Multi-step AI agent system built with LangGraph. Upload your CV, paste a job posting — the agent automatically calculates ATS score, identifies skill gaps, generates a personalized cover letter, and adds the application to a kanban board. Optimizes cost-performance with multi-model routing.",
        "projects.nexthire.metric": "LangGraph · Multi-model routing",
        "projects.awsai.subtitle": "Intelligent Document Q&A System on AWS",
        "projects.awsai.description": "Serverless document question-answering system built on AWS cloud services. PDFs are uploaded to S3, text is automatically extracted via Textract, and Claude AI model on Bedrock answers natural language questions. Fully designed as Infrastructure as Code with API Gateway, Lambda, DynamoDB, SNS, and CDK.",
        "projects.swiftlink.subtitle": "Fast & Modern URL Shortener Service",
        "projects.swiftlink.description": "Modern URL shortener application built with FastAPI, containerized with Docker, and automatically tested via GitHub Actions CI/CD pipeline. Provides click analytics and real-time statistics for shortened links.",
        "projects.sametei.subtitle": "AI-Powered HR Document Management Platform",
        "projects.sametei.description": "Built on LibreChat framework, a corporate-scale platform that automates human resources document management with artificial intelligence. Reduced HR teams' document processing time by 70%.",
        "projects.hireai.subtitle": "AI-Powered CV & Portfolio Analysis Platform",
        "projects.hireai.description": "ATS-based CV analysis and optimization platform. Analyzes CVs according to job descriptions and provides ATS-compliant scores and improvement suggestions. Reduced HR teams' pre-screening time by 50%.",
        "projects.bitcoin.title": "Bitcoin Technical Analysis Automation",
        "projects.bitcoin.subtitle": "AI-Powered Cryptocurrency Analysis & Reporting System",
        "projects.bitcoin.description": "Bitcoin technical analysis system built with n8n workflow automation. Automatically collects data from Binance API and performs 15+ technical indicator analysis (SMA, EMA, RSI, MACD, Bollinger Bands, VWAP, ATR). Generates market insights with DeepSeek R1 AI model and automatically sends professional HTML reports via email every 4 hours.",
        "projects.fruit.title": "Fruit Ripeness Detection",
        "projects.fruit.subtitle": "Machine Learning & Computer Vision",
        "projects.fruit.description": "Pattern recognition project that detects fruit ripeness using image processing and 5 different ML algorithms (SVM, Random Forest, Gradient Boosting, Logistic Regression, Ensemble).",
        "projects.news.subtitle": "Modern News Aggregator Platform",
        "projects.news.description": "Modern news aggregator developed with ASP.NET. Pulls RSS feeds with smart categorization and presents them in an organized manner.",
        "projects.link": "View on GitHub",
        "projects.link.gitlab": "View on GitLab",
        "contact.title": "Contact",
        "contact.eyebrow": "GET IN TOUCH",
        "contact.statement.line1": "Let's build",
        "contact.statement.line2": "something together.",
        "contact.lead": "I'm always open to new opportunities and collaborations. I get back to you fast.",
        "contact.copy": "copy",
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
        "about.specs.basedInVal": "Eskisehir, Türkiye",
        "about.specs.openTo": "OPEN TO",
        "about.specs.openToVal": "Full-time · Contract · Remote",
        "about.specs.focus": "FOCUS",
        "about.specs.focusVal": "AI · ML · LLM · Production",
        "education.badge.bsc": "BSc",
        "education.badge.lang": "LANG",
        "skills.terminal.status": "connected",
        "visitor.header": "Visitors",
        "visitor.total": "total",
        "visitor.daily": "today",
        "visitor.weekly": "LAST 7 DAYS",
        "visitor.weekly.cta": "View 7-day breakdown",
        "visitor.reset.note": "Data was reset on March 16, 2026.",
        "footer.tagline": "Building the future with AI/ML & Cloud solutions.",
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

            // Update active button
            document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');

            // Update sliding indicator
            const switcher = document.querySelector('.lang-switcher');
            if (switcher) switcher.setAttribute('data-active', lang);

            // Update HTML lang attribute
            document.documentElement.lang = lang;

            // Save preference
            localStorage.setItem('preferredLang', lang);

            // Update chart labels if it exists
            if (typeof initWeeklyVisitorChart === 'function') {
                initWeeklyVisitorChart();
            }
        }
    });
});

// Update CV buttons based on language
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

// Check for saved theme preference - Default: Dark Mode
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light') {
    body.classList.add('light-mode');
    themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
} else {
    body.classList.remove('light-mode');
    themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    if (!savedTheme) {
        localStorage.setItem('theme', 'dark');
    }
}

themeToggle.addEventListener('click', () => {
    // Animate icon out
    const icon = themeToggle.querySelector('i');
    icon.style.transform = 'rotate(360deg) scale(0)';

    setTimeout(() => {
        body.classList.toggle('light-mode');

        if (body.classList.contains('light-mode')) {
            themeToggle.innerHTML = '<i class="fas fa-moon" style="transform:scale(0)"></i>';
            localStorage.setItem('theme', 'light');
        } else {
            themeToggle.innerHTML = '<i class="fas fa-sun" style="transform:scale(0)"></i>';
            localStorage.setItem('theme', 'dark');
        }

        // Animate icon in
        requestAnimationFrame(() => {
            const newIcon = themeToggle.querySelector('i');
            newIcon.style.transition = 'transform .4s cubic-bezier(.34,1.56,.64,1)';
            requestAnimationFrame(() => {
                newIcon.style.transform = 'rotate(0deg) scale(1)';
            });
        });

        // Update weekly chart theme if it exists
        if (weeklyChartInstance && weeklyChartInstance.data.datasets[0].data.length > 0) {
            renderWeeklyChart(document.getElementById('weeklyVisitorChart').getContext('2d'), weeklyChartInstance.data.labels, weeklyChartInstance.data.datasets[0].data);
        }
    }, 250);
});

// Update language function
function updateLanguage(lang) {
    document.querySelectorAll('[data-tr]').forEach(element => {
        const key = element.getAttribute('data-tr');
        if (translations[lang] && translations[lang][key]) {
            element.innerHTML = translations[lang][key];
        }
    });
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

// Stat count-up animation
const statCountedUp = new Set();
const countUpStats = () => {
    document.querySelectorAll('.stat-value[data-count]').forEach(el => {
        if (statCountedUp.has(el)) return;
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            statCountedUp.add(el);
            const target = parseInt(el.getAttribute('data-count'));
            let current = 0;
            const step = Math.max(1, Math.floor(target / 30));
            const timer = setInterval(() => {
                current += step;
                if (current >= target) {
                    current = target;
                    clearInterval(timer);
                }
                el.textContent = current + '+';
            }, 40);
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

    // --- Staggered tag animation delay ---
    document.querySelectorAll('.project-card').forEach(card => {
        card.querySelectorAll('.card-tags span').forEach((tag, i) => {
            tag.style.transitionDelay = (i * 20) + 'ms';
        });
        // Reset delay on mouse leave
        card.addEventListener('mouseleave', () => {
            card.querySelectorAll('.card-tags span').forEach(tag => {
                tag.style.transitionDelay = '0ms';
            });
            // Re-set after transition completes for next hover
            setTimeout(() => {
                card.querySelectorAll('.card-tags span').forEach((tag, i) => {
                    tag.style.transitionDelay = (i * 20) + 'ms';
                });
            }, 400);
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
    if (!cCanvas || !lCanvas) return;
    const cCtx = cCanvas.getContext('2d');
    const lCtx = lCanvas.getContext('2d');
    const isMobile = window.innerWidth < 768;

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
    }
    resize();
    window.addEventListener('resize', resize);

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
        if (isMobile || Date.now() - lastMouseMove > 500) return;
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
        const segLen = 15 + Math.random() * 15;
        const totalSegs = 8 + Math.floor(Math.random() * 10);
        let sx = side === 'left' ? Math.random() * EDGE_ZONE : W - Math.random() * EDGE_ZONE;
        let sy = direction === 1 ? Math.random() * H * 0.3 : H - Math.random() * H * 0.3;

        // Card attraction
        let attractTarget = null;
        if (!isMobile && cachedCards.length > 0 && Math.random() < 0.55) {
            const cands = cachedCards.filter(c =>
                side === 'left' ? c.left < W * 0.4 : c.right > W * 0.6
            );
            if (cands.length) attractTarget = cands[Math.floor(Math.random() * cands.length)];
        }

        // Lightning rod: is mouse near this edge?
        let rodTarget = null;
        if (!isMobile) {
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
        for (let i = 0; i < totalSegs; i++) {
            let dx = (Math.random() - 0.5) * 40;
            let dy = direction * segLen;
            if (attractTarget && i > totalSegs * 0.3) {
                const tx = side === 'left' ? attractTarget.left - 10 : attractTarget.right + 10;
                const ty = (attractTarget.top + attractTarget.bottom) / 2;
                const prog = (i - totalSegs * 0.3) / (totalSegs * 0.7);
                dx += (tx - cx) * prog * 0.6 * 0.15;
                dy += (ty - cy) * prog * 0.6 * 0.1;
            }
            cx += dx; cy += dy;
            if (side === 'left') cx = Math.max(-5, Math.min(cx, W * 0.25));
            else cx = Math.max(W * 0.75, Math.min(cx, W + 5));
            points.push({ x: cx, y: cy });
        }

        // Normal branches
        const branches = [];
        for (let i = 2; i < points.length - 1; i++) {
            if (Math.random() < 0.3) {
                const bp = points[i];
                const bPts = [{ x: bp.x, y: bp.y }];
                let bx = bp.x, by = bp.y;
                const n = 3 + Math.floor(Math.random() * 3);
                for (let j = 0; j < n; j++) {
                    bx += (Math.random() - 0.5) * 25;
                    by += direction * (8 + Math.random() * 12);
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
            birth: performance.now(),
            fadeInDur: 100 + Math.random() * 100,
            fadeOutDur: 300 + Math.random() * 200,
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

        // Ambient glow
        if (bolt.phase === 'in' || bolt.opacity > 0.5) {
            const mid = bolt.points[Math.floor(bolt.points.length / 2)];
            const g = lCtx.createRadialGradient(mid.x, mid.y, 0, mid.x, mid.y, 120);
            g.addColorStop(0, rgba(c, 0.08 * a));
            g.addColorStop(1, rgba(c, 0));
            lCtx.fillStyle = g;
            lCtx.fillRect(mid.x - 120, mid.y - 120, 240, 240);
        }

        lCtx.save();
        lCtx.lineCap = 'round'; lCtx.lineJoin = 'round';

        // Main bolt
        lCtx.shadowColor = rgba(c, 0.7 * a);
        lCtx.shadowBlur = 18;
        lCtx.strokeStyle = rgba(c, 0.9 * a);
        lCtx.lineWidth = 2.5;
        lCtx.beginPath();
        lCtx.moveTo(bolt.points[0].x, bolt.points[0].y);
        for (let i = 1; i < bolt.points.length; i++) lCtx.lineTo(bolt.points[i].x, bolt.points[i].y);
        lCtx.stroke();

        // White core
        lCtx.shadowBlur = 8;
        lCtx.strokeStyle = `rgba(255,255,255,${0.5 * a})`;
        lCtx.lineWidth = 1;
        lCtx.beginPath();
        lCtx.moveTo(bolt.points[0].x, bolt.points[0].y);
        for (let i = 1; i < bolt.points.length; i++) lCtx.lineTo(bolt.points[i].x, bolt.points[i].y);
        lCtx.stroke();

        // Branches
        lCtx.shadowBlur = 10;
        lCtx.shadowColor = rgba(c, 0.5 * a);
        lCtx.strokeStyle = rgba(c, 0.6 * a);
        lCtx.lineWidth = 1.2;
        bolt.branches.forEach(br => {
            lCtx.beginPath();
            lCtx.moveTo(br[0].x, br[0].y);
            for (let i = 1; i < br.length; i++) lCtx.lineTo(br[i].x, br[i].y);
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

    function spawnBolt(side, dirHint) {
        bolts.push(generateBolt(
            side || (Math.random() > 0.5 ? 'left' : 'right'),
            dirHint || (Math.random() > 0.5 ? 1 : -1)
        ));
        ensureLRun();
    }

    // --- Ambient loop ---
    function ambientLoop() {
        const delay = isMobile ? 4000 + Math.random() * 6000 : 2000 + Math.random() * 3000;
        setTimeout(() => { spawnBolt(); ambientLoop(); }, delay);
    }
    setTimeout(() => { spawnBolt('left'); spawnBolt('right'); }, 1000);
    ambientLoop();

    // --- Scroll-triggered bolts ---
    if (!isMobile) {
        let scrollCD = 0;
        setInterval(() => {
            if (scrollSpeed < 2) return;
            const now = Date.now();
            if (now < scrollCD) return;
            scrollCD = now + Math.max(200, 1200 - scrollSpeed * 40);
            const s = Math.random() > 0.5 ? 'left' : 'right';
            spawnBolt(s, scrollDir);
            if (scrollSpeed > 15) spawnBolt(s === 'left' ? 'right' : 'left', scrollDir);
        }, 100);
    }
})();

// Initialize language on page load
const savedLang = localStorage.getItem('preferredLang') || 'en';
if (savedLang !== 'en') {
    currentLang = savedLang;
    updateLanguage(savedLang);
    document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
    document.querySelector(`[data-lang="${savedLang}"]`).classList.add('active');
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
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
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
    
    // Add tracking event listeners with preventDefault
    cvViewBtn.addEventListener('click', async (e) => {
        e.preventDefault(); // Prevent default link behavior
        const cvFile = cvViewBtn.href;
        
        console.log('🔵 CV View button clicked, language:', currentLang);
        
        // Track the action
        await trackCVAction('view', currentLang);
        
        // Open CV in new tab after tracking
        window.open(cvFile, '_blank');
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
// VISITOR COUNTER - Firebase Realtime Database
// ============================================
async function initVisitorCounter() {
    const counterElement = document.querySelector('#visitorCount');
    const dailyCounterElement = document.querySelector('#dailyVisitorCount');
    
    if (!counterElement || !dailyCounterElement) return;

    // Check if Firebase is available
    if (!database) {
        console.error('Firebase not available');
        counterElement.textContent = '--';
        dailyCounterElement.textContent = '--';
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

        // Initialize Weekly Chart
        setTimeout(initWeeklyVisitorChart, 1000); // Small delay to let other counters finish

    } catch (error) {
        console.error('Visitor counter error:', error);
        counterElement.textContent = 'Error';
        dailyCounterElement.textContent = 'Error';
    }
}

let weeklyChartInstance = null;

async function initWeeklyVisitorChart() {
    if (!database) return;
    
    const chartContainer = document.getElementById('weeklyChartContainer');
    const ctx = document.getElementById('weeklyVisitorChart');
    if (!chartContainer || !ctx) return;

    try {
        const labels = [];
        const dataPoints = [];
        
        // Generate last 7 days dates (oldest to newest)
        for (let i = 6; i >= 0; i--) {
            const date = new Date();
            date.setDate(date.getDate() - i);
            const dateString = date.toDateString();
            
            // Format label as ShortDay (e.g., 'Mon' in EN, 'Pzt' in TR)
            const daysTR = ['Paz', 'Pzt', 'Sal', 'Çar', 'Per', 'Cum', 'Cmt'];
            const daysEN = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
            const label = currentLang === 'tr' ? daysTR[date.getDay()] : daysEN[date.getDay()];
            labels.push(label);
            
            // Fetch daily count
            const dailyRef = database.ref(`visitors/daily/${dateString}`);
            const snapshot = await dailyRef.once('value');
            const dailyData = snapshot.val() || {};
            const count = Object.keys(dailyData).length;
            dataPoints.push(count);
        }

        // Render the chart inline if we have data. Hide the container if not.
        if (dataPoints.some(count => count > 0)) {
            renderWeeklyChart(ctx.getContext('2d'), labels, dataPoints);
            chartContainer.classList.add('show');
        } else {
            chartContainer.style.display = 'none';
        }

    } catch (error) {
        console.error('Weekly visitor chart error:', error);
    }
}

function renderWeeklyChart(ctx, labels, data) {
    // Determine colors based on current theme
    const isLightMode = document.body.classList.contains('light-mode');
    
    // Theme colors
    const textColor = isLightMode ? '#24211e' : '#a8acbe';
    const gridColor = isLightMode ? 'rgba(0,0,0,0.06)' : 'rgba(255,255,255,0.05)';
    const barGradientStart = isLightMode ? '#7c3aed' : '#2dd4bf';
    const barGradientEnd = isLightMode ? '#2dd4bf' : '#7c3aed';

    // Create gradient (vertical → bar top to bottom)
    const gradient = ctx.createLinearGradient(0, 0, 0, 80);
    gradient.addColorStop(0, barGradientStart);
    gradient.addColorStop(1, barGradientEnd);

    Chart.defaults.font.family = "'JetBrains Mono', monospace";
    
    if (weeklyChartInstance) {
        weeklyChartInstance.destroy();
    }

    weeklyChartInstance = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                data: data,
                backgroundColor: gradient,
                borderRadius: 4,
                borderSkipped: false,
                barThickness: 12
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false },
                tooltip: {
                    backgroundColor: isLightMode ? '#14110e' : 'rgba(15,23,42,0.9)',
                    titleColor: isLightMode ? '#ffffff' : '#f8fafc',
                    bodyColor: isLightMode ? '#ffffff' : '#2dd4bf',
                    borderColor: isLightMode ? 'rgba(255,255,255,0.12)' : 'rgba(255,255,255,0.1)',
                    borderWidth: 1,
                    padding: 8,
                    displayColors: false,
                    callbacks: {
                        title: () => null, // Hide title
                        label: (context) => {
                            const label = currentLang === 'tr' ? 'ziyaretçi' : 'visitors';
                            return `${context.raw} ${label}`;
                        }
                    }
                }
            },
            scales: {
                x: {
                    grid: { display: false, drawBorder: false },
                    ticks: {
                        color: textColor,
                        font: { size: 9 },
                        padding: 0
                    }
                },
                y: {
                    display: false,
                    beginAtZero: true
                }
            },
            animation: {
                duration: 1500,
                easing: 'easeOutQuart'
            }
        }
    });
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
    }
}

function closeCertificateModal() {
    const modal = document.getElementById('certificateModal');
    if (modal) {
        modal.classList.remove('show');
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
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
    }
}

window.closeLogoModal = function() {
    const modal = document.getElementById('logoModal');
    if (modal) {
        modal.classList.remove('show');
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

// Close modal on ESC key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeCertificateModal();
        closeEnglishCertModal();
        closeLogoModal();
    }
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
    }
}

window.closeEnglishCertModal = function() {
    const modal = document.getElementById('englishCertModal');
    if (modal) {
        modal.classList.remove('show');
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

// Expose close function to window for onclick
window.closeCertificate = closeCertificateModal;

// ============================================
// Turn 1 — Hero microinteractions
// ============================================
(function initHeroMicro(){
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // --- Local time (Istanbul) ---
    const localTimeEl = document.getElementById('localTime');
    if (localTimeEl){
        const fmt = new Intl.DateTimeFormat('en-GB',{
            hour:'2-digit',minute:'2-digit',hour12:false,timeZone:'Europe/Istanbul'
        });
        const tick = () => { localTimeEl.textContent = fmt.format(new Date()) + ' GMT+3'; };
        tick(); setInterval(tick, 30000);
    }

    if (reduced) return;

    // --- Magnetic buttons ---
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
            if (dist > 90) return;
            if (raf) cancelAnimationFrame(raf);
            raf = requestAnimationFrame(() => {
                el.style.transform = `translate(${dx*0.22}px, ${dy*0.22}px)`;
            });
        };
        const onLeave = () => {
            if (raf) cancelAnimationFrame(raf);
            el.style.transform = '';
        };
        el.addEventListener('mousemove', onMove);
        el.addEventListener('mouseleave', onLeave);
    });

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

// ============================================
// Turn 2 — Terminal typing reveal
// ============================================
(function initTerminalTyping(){
    const blocks = document.querySelectorAll('#skills .term-block');
    if (!blocks.length) return;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    blocks.forEach((b, i) => {
        b.setAttribute('data-type-ready','');
        b.style.setProperty('--type-delay', `${i * 0.18}s`);
    });

    if (reduced){
        blocks.forEach(b => b.classList.add('term-animated'));
        return;
    }

    if (!('IntersectionObserver' in window)){
        blocks.forEach(b => b.classList.add('term-animated'));
        return;
    }

    const io = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('term-animated');
            io.unobserve(entry.target);
        });
    }, { threshold: 0.2, rootMargin: '0px 0px -80px 0px' });

    blocks.forEach(b => io.observe(b));
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