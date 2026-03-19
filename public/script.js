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
        "nav.brand": "SAMET SOYSAL",
        "nav.subtitle": "AI/ML Mühendisi",
        "nav.about": "Hakkımda",
        "nav.education": "Eğitim",
        "nav.experience": "Deneyim",
        "nav.skills": "Yetenekler",
        "nav.projects": "Projeler",
        "nav.contact": "İletişim",
        "hero.badge": "AI/ML Mühendisi & Full-Stack Developer",
        "hero.subtitle.prefix": "Uzmanlık alanım:",
        "hero.subtitle": "Artificial Intelligence | Machine Learning | NLP Specialist",
        "hero.description": "RAG sistemleri, OCR teknolojileri ve çok modelli AI çözümleri geliştiriyorum. Kurumsal projelerde production-ready yapay zeka sistemleri tasarlama ve entegrasyon konularında uzmanım.",
        "hero.btn.projects": "Projelerim",
        "hero.btn.github": "GitHub Profilim",
        "hero.btn.contact": "İletişim",
        "hero.btn.cv.view": "CV Görüntüle",
        "hero.btn.cv.download": "CV İndir",
        "about.title": "Hakkımda",
        "about.description": "Eskişehir Osmangazi Üniversitesi Bilgisayar Mühendisliği mezunuyum. Yapay Zeka, NLP ve Büyük Dil Modelleri (LLM) alanlarında uzmanlaşmış, sonuç odaklı bir Bilgisayar Mühendisiyim. Uçtan uca AI mimarileri, yüksek performanslı RAG pipeline'ları ve Multi-LLM orkestrasyonları tasarlama konusunda kanıtlanmış deneyime sahibim. Temel gücüm, karmaşık makine öğrenmesi modellerini ölçeklenebilir full-stack geliştirme (React, FastAPI, PostgreSQL) ile birleştirerek milisaniye düzeyinde gecikme ve %95+ doğruluk oranıyla veri odaklı çözümler sunmaktır.",
        "about.stats.years": "Yıl Deneyim",
        "about.stats.projects": "Tamamlanan Proje",
        "about.stats.technologies": "Teknoloji",
        "education.title": "Eğitim",
        "education.degree": "Bilgisayar Mühendisliği Lisans",
        "education.school": "Eskişehir Osmangazi Üniversitesi",
        "education.detail": "Yapay Zeka, Makine Öğrenmesi ve Doğal Dil İşleme alanlarında uzmanlaşma. Mezuniyet projesi: HIREAI — AI destekli CV analiz platformu.",
        "education.cert.title": "İngilizce Dil Okulları",
        "education.cert.school": "American Cultural Language Schools",
        "education.cert.date": "2022 - 2024",
        "education.cert.detail": "Okuma, yazma, dinleme ve konuşma (Spoken Interaction & Production) alanlarında profesyonel yeterlilik eğitimi ve sertifikasyonu.",
        "education.cert.c1.btn": "C1 Sertifikası",
        "education.cert.b2.btn": "B2 Sertifikası",
        "experience.title": "Deneyim",
        "experience.certificate": "Sertifika",
        "experience.icictas.title": "Yazılım Geliştirme Stajyeri",
        "experience.icictas.company": "<a href='https://www.ictasnukleer.com.tr' target='_blank' class='company-link'>IC İçtaş Nükleer ve Endüstriyel Tesisler İnşaat A.Ş.</a>",
        "experience.icictas.date": "Ocak 2026",
        "experience.icictas.desc": "Akkuyu Nükleer Santral sahasından gelen verileri analiz etmek için React.js, FastAPI ve PostgreSQL kullanarak uçtan uca İSG Takip Paneli geliştirdim. Backend tarafında Passlib ve JWT ile güvenli kimlik doğrulama sistemleri kurarken, SQLAlchemy ORM ile veritabanı yönetimini optimize ettim. Ayrıca yüksek kardinaliteli verilerde B-tree indeksleme stratejileri uygulayarak sorgu performansını artırdım ve Material UI ile yöneticiler için gerçek zamanlı analitik dashboard'lar tasarladım.",
        "experience.tei.title": "Data Science & AI Stajyeri",
        "experience.tei.company": "<a href='https://www.tei.com.tr' target='_blank' class='company-link company-tei'>TEI – TUSAŞ Motor Sanayii A.Ş. | Eskişehir</a>",
        "experience.tei.date": "Eylül 2025\n↓\nAğustos 2025",
        "experience.tei.desc": "TEI bünyesinde izole ağlarda güvenli veri iletimi ve sistem mimarileri üzerine Ar-Ge çalışmaları yürüttüm. İnsan Kaynakları departmanı için LLM tabanlı 'SAMETEI' yapay zeka asistanının prototipleme sürecini yöneterek OpenRouter ve Local LLM entegrasyonlarını gerçekleştirdim. Ayrıca n8n ile finansal metrikleri analiz eden otonom iş akışları ve Playwright kullanarak e-ticaret süreçlerini otomatize eden RPA çözümleri geliştirdim.",
        "experience.powintec.title": "Part-Time Yazılım Geliştirici (Remote)",
        "experience.powintec.company": "Powintec Engineering | Wireless Charging of Small Electric Vehicles",
        "experience.powintec.date": "Temmuz 2025\n↓\nTemmuz 2023",
        "experience.powintec.desc": "Kablosuz şarj sistemlerinden gelen hizalama, sıcaklık ve verimlilik verilerini anlık olarak izlemek amacıyla React.js, TailwindCSS ve WebSockets tabanlı bir yönetim paneli hazırladım. WebSocket üzerinden gelen yoğun veri akışının UI performansını etkilememesi için state yönetimini optimize ederek milisaniye düzeyinde gecikme ile veri işleme sağladım. Donanım bağlantı kopmalarına karşı hata yönetim mekanizmaları geliştirerek sistem kararlılığını artırdım.",
        "skills.title": "Yetenekler",
        "skills.ai.title": "AI & Data Science",
        "skills.cv.title": "Computer Vision & OCR",
        "skills.backend.title": "Backend & Infrastructure",
        "skills.frontend.title": "Frontend & Araçlar",
        "skills.automation.title": "Otomasyon & DevOps",
        "skills.languages.title": "Diller",
        "skills.languages.turkish": "Türkçe (Ana Dil)",
        "skills.languages.english": "İngilizce (B2 - Profesyonel Yeterlilik)",
        "projects.title": "Projeler",
        "projects.badge.corporate": "KURUMSAL",
        "projects.badge.graduation": "MEZUN. PROJESİ",
        "projects.badge.automation": "OTOMASYON",
        "projects.badge.cloud": "BULUT",
        "projects.awsai.subtitle": "AWS ile Akıllı Doküman Soru-Cevap Sistemi",
        "projects.awsai.description": "AWS bulut servisleri üzerine inşa edilmiş serverless doküman soru-cevap sistemi. PDF dokümanları S3'e yüklenir, Textract ile otomatik metin çıkarımı yapılır ve Bedrock üzerindeki Claude AI modeli ile doğal dilde sorulara yanıt verilir. API Gateway, Lambda, DynamoDB, SNS ve CDK ile tamamen Infrastructure as Code olarak tasarlanmıştır.",
        "projects.sametei.subtitle": "AI Destekli İK Doküman Yönetim Platformu",
        "projects.sametei.description": "LibreChat çerçevesi üzerine inşa edilmiş, insan kaynakları doküman yönetimini yapay zeka ile otomatikleştiren kurumsal ölçekte platform. İK ekiplerinin doküman işleme süresini %70 azalttı.",
        "projects.hireai.subtitle": "AI Destekli CV & Portföy Analiz Platformu",
        "projects.hireai.description": "ATS tabanlı CV analiz ve optimizasyon platformu. CV'leri iş tanımlarına göre analiz eder, ATS uyumlu skorlar ve iyileştirme önerileri sunar. İK ekiplerinin ön eleme süresini %50 azalttı.",
        "projects.bitcoin.title": "Bitcoin Teknik Analiz Otomasyonu",
        "projects.bitcoin.subtitle": "AI Destekli Kripto Para Analiz & Raporlama Sistemi",
        "projects.bitcoin.description": "n8n workflow automation ile geliştirilmiş Bitcoin teknik analiz sistemi. Binance API'den otomatik veri toplayarak 15+ teknik gösterge analizi yapar (SMA, EMA, RSI, MACD, Bollinger Bands, VWAP, ATR). DeepSeek R1 AI modeli ile piyasa yorumları oluşturur ve profesyonel HTML raporlarını her 4 saatte bir otomatik olarak email ile gönderir.",
        "projects.trendyol.title": "🛒 Trendyol Otomasyon",
        "projects.trendyol.subtitle": "E-ticaret Sipariş Otomasyonu",
        "projects.trendyol.description": "Playwright kullanarak Trendyol Yemek platformu için geliştirilmiş otomatik sipariş sistemi. Süreçleri hızlandıran ve hata oranını minimize eden akıllı otomasyon çözümü.",
        "projects.fruit.title": "🍎 Meyve Olgunluk Tespiti",
        "projects.fruit.subtitle": "Makine Öğrenmesi & Computer Vision",
        "projects.fruit.description": "Görüntü işleme ve 5 farklı ML algoritması (SVM, Random Forest, Gradient Boosting, Logistic Regression, Ensemble) kullanarak meyve olgunluğunu tespit eden pattern recognition projesi.",
        "projects.news.subtitle": "Modern Haber Toplayıcı Platform",
        "projects.news.description": "ASP.NET ile geliştirilmiş modern haber toplayıcı. RSS feed'lerini akıllı kategorizasyon ile çeker ve düzenli bir şekilde kullanıcılara sunar.",
        "projects.portfolio.title": "💼 My Personal WebSite",
        "projects.portfolio.subtitle": "Modern Portföy Web Sitesi",
        "projects.portfolio.description": "Firebase Realtime Database entegrasyonlu modern portföy web sitesi. Çok dilli destek, ziyaretçi sayacı ve glassmorphism tasarım ile responsive kullanıcı deneyimi sunar.",
        "projects.link": "GitHub'da Görüntüle",
        "projects.link.gitlab": "GitLab'da Görüntüle",
        "contact.title": "İletişim",
        "contact.location": "Konum",
        "contact.location.value": "Eskişehir, Türkiye",
        "contact.education": "Eğitim",
        "contact.education.value": "ESOGU - Bilgisayar Mühendisliği",
        "contact.email.copied": "Email kopyalandı!",
        "visitor.header": "Ziyaretçiler",
        "visitor.total": "TOPLAM",
        "visitor.daily": "GÜNLÜK",
        "visitor.weekly": "SON 7 GÜN",
        "visitor.reset.note": "Veriler 16 Mart 2026 tarihinde sıfırlanmıştır.",
        "footer.tagline": "AI/ML çözümleri ile geleceği inşa ediyorum.",
        "footer.nav.title": "Sayfalar",
        "footer.social.title": "Bağlantılar",
        "footer.copyright": "© 2026 Samet Soysal. Tüm hakları saklıdır.",
        "footer.made": "Tutkuyla kodlanmıştır ❤️"
    },
    en: {
        "nav.brand": "SAMET SOYSAL",
        "nav.subtitle": "AI/ML Engineer",
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
        "about.description": "I am a results-driven Computer Engineer graduated from Eskişehir Osmangazi University, specializing in Artificial Intelligence, NLP, and Large Language Models (LLMs). I have a proven track record of designing end-to-end AI architectures, high-performance RAG pipelines, and Multi-LLM orchestrations. My core strength lies in bridging the gap between complex machine learning models and scalable full-stack development (React, FastAPI, PostgreSQL) to deliver data-driven solutions with millisecond-level latency and over 95% accuracy.",
        "about.stats.years": "Years of Experience",
        "about.stats.projects": "Completed Projects",
        "about.stats.technologies": "Technologies",
        "education.title": "Education",
        "education.degree": "BSc in Computer Engineering",
        "education.school": "Eskisehir Osmangazi University",
        "education.detail": "Specializing in Artificial Intelligence, Machine Learning and NLP. Capstone project: HIREAI — AI-powered CV analysis platform.",
        "education.cert.title": "English Language Schools",
        "education.cert.school": "American Cultural Language Schools",
        "education.cert.date": "2022 - 2024",
        "education.cert.detail": "Professional proficiency training and certification in reading, writing, listening, and spoken interaction/production.",
        "education.cert.c1.btn": "C1 Certificate",
        "education.cert.b2.btn": "B2 Certificate",
        "experience.title": "Experience",
        "experience.certificate": "Certificate",
        "experience.icictas.title": "Software Development Intern",
        "experience.icictas.company": "<a href='https://www.ictasnukleer.com.tr/en/' target='_blank' class='company-link'>IC Ictas Nuclear and Industrial Facilities Construction Inc.</a>",
        "experience.icictas.date": "January 2026",
        "experience.icictas.desc": "I developed an end-to-end OHS Tracking Panel using React.js, FastAPI, and PostgreSQL to analyze data from the Akkuyu Nuclear Power Plant site. I implemented secure authentication systems using Passlib and JWT on the backend, while optimizing database management with SQLAlchemy ORM. Additionally, I improved query performance by applying B-tree indexing strategies on high-cardinality data and designed real-time analytical dashboards for managers using Material UI.",
        "experience.tei.title": "Data Science & AI Intern",
        "experience.tei.company": "<a href='https://www.tei.com.tr/en' target='_blank' class='company-link company-tei'>TEI – TUSAS Engine Industries Inc. | Eskisehir, Turkey</a>",
        "experience.tei.date": "September 2025\n↓\nAugust 2025",
        "experience.tei.desc": "I conducted R&D on secure data transmission and system architectures in isolated networks at TEI. I managed the prototyping process of 'SAMETEI', an LLM-based AI assistant for the HR department, integrating OpenRouter and Local LLMs. Furthermore, I developed autonomous workflows for financial metric analysis using n8n and created RPA solutions using Playwright to automate e-commerce processes.",
        "experience.powintec.title": "Part-Time Software Developer (Remote)",
        "experience.powintec.company": "Powintec Engineering | Wireless Charging of Small Electric Vehicles",
        "experience.powintec.date": "July 2025\n↓\nJuly 2023",
        "experience.powintec.desc": "I built a management dashboard based on React.js, TailwindCSS, and WebSockets to monitor alignment, temperature, and efficiency data from wireless charging systems in real-time. I optimized state management to handle intense WebSocket data streams without compromising UI performance, ensuring low-latency data processing. I also improved system stability by developing error handling mechanisms against hardware connection drops.",
        "skills.title": "Skills",
        "skills.ai.title": "AI & Data Science",
        "skills.cv.title": "Computer Vision & OCR",
        "skills.backend.title": "Backend & Infrastructure",
        "skills.frontend.title": "Frontend & Tools",
        "skills.automation.title": "Automation & DevOps",
        "skills.languages.title": "Languages",
        "skills.languages.turkish": "Turkish (Native)",
        "skills.languages.english": "English (B2 - Professional Proficiency)",
        "projects.title": "Projects",
        "projects.badge.corporate": "CORPORATE",
        "projects.badge.graduation": "CAPSTONE",
        "projects.badge.automation": "AUTOMATION",
        "projects.badge.cloud": "CLOUD",
        "projects.awsai.subtitle": "Intelligent Document Q&A System on AWS",
        "projects.awsai.description": "Serverless document question-answering system built on AWS cloud services. PDFs are uploaded to S3, text is automatically extracted via Textract, and Claude AI model on Bedrock answers natural language questions. Fully designed as Infrastructure as Code with API Gateway, Lambda, DynamoDB, SNS, and CDK.",
        "projects.sametei.subtitle": "AI-Powered HR Document Management Platform",
        "projects.sametei.description": "Built on LibreChat framework, a corporate-scale platform that automates human resources document management with artificial intelligence. Reduced HR teams' document processing time by 70%.",
        "projects.hireai.subtitle": "AI-Powered CV & Portfolio Analysis Platform",
        "projects.hireai.description": "ATS-based CV analysis and optimization platform. Analyzes CVs according to job descriptions and provides ATS-compliant scores and improvement suggestions. Reduced HR teams' pre-screening time by 50%.",
        "projects.bitcoin.title": "Bitcoin Technical Analysis Automation",
        "projects.bitcoin.subtitle": "AI-Powered Cryptocurrency Analysis & Reporting System",
        "projects.bitcoin.description": "Bitcoin technical analysis system built with n8n workflow automation. Automatically collects data from Binance API and performs 15+ technical indicator analysis (SMA, EMA, RSI, MACD, Bollinger Bands, VWAP, ATR). Generates market insights with DeepSeek R1 AI model and automatically sends professional HTML reports via email every 4 hours.",
        "projects.trendyol.title": "🛒 Trendyol Automation",
        "projects.trendyol.subtitle": "E-commerce Order Automation",
        "projects.trendyol.description": "Automated ordering system developed for Trendyol Yemek platform using Playwright. Smart automation solution that accelerates processes and minimizes error rates.",
        "projects.fruit.title": "🍎 Fruit Ripeness Detection",
        "projects.fruit.subtitle": "Machine Learning & Computer Vision",
        "projects.fruit.description": "Pattern recognition project that detects fruit ripeness using image processing and 5 different ML algorithms (SVM, Random Forest, Gradient Boosting, Logistic Regression, Ensemble).",
        "projects.news.subtitle": "Modern News Aggregator Platform",
        "projects.news.description": "Modern news aggregator developed with ASP.NET. Pulls RSS feeds with smart categorization and presents them in an organized manner.",
        "projects.portfolio.title": "💼 My Personal WebSite",
        "projects.portfolio.subtitle": "Modern Portfolio Website",
        "projects.portfolio.description": "Modern portfolio website with Firebase Realtime Database integration. Offers responsive user experience with multi-language support, visitor counter, and glassmorphism design.",
        "projects.link": "View on GitHub",
        "projects.link.gitlab": "View on GitLab",
        "contact.title": "Contact",
        "contact.location": "Location",
        "contact.location.value": "Eskişehir, Turkey",
        "contact.education": "Education",
        "contact.education.value": "ESOGU - Computer Engineering",
        "contact.email.copied": "Email copied!",
        "visitor.header": "Visitors",
        "visitor.total": "TOTAL",
        "visitor.daily": "DAILY",
        "visitor.weekly": "LAST 7 DAYS",
        "visitor.reset.note": "Data was reset on March 16, 2026.",
        "footer.tagline": "Building the future with AI/ML solutions.",
        "footer.nav.title": "Pages",
        "footer.social.title": "Connect",
        "footer.copyright": "© 2026 Samet Soysal. All rights reserved.",
        "footer.made": "Coded with passion ❤️"
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
    body.classList.toggle('light-mode');
    
    if (body.classList.contains('light-mode')) {
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        localStorage.setItem('theme', 'light');
    } else {
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        localStorage.setItem('theme', 'dark');
    }

    // Update weekly chart theme if it exists
    if (weeklyChartInstance && weeklyChartInstance.data.datasets[0].data.length > 0) {
        renderWeeklyChart(document.getElementById('weeklyVisitorChart').getContext('2d'), weeklyChartInstance.data.labels, weeklyChartInstance.data.datasets[0].data);
    }
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

// Nav scroll effect
const navScrollFn = () => {
    const nav = document.getElementById('mainNav');
    if (nav) {
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    }
};

window.addEventListener('scroll', () => {
    scrollRevealFn();
    navScrollFn();
});
scrollRevealFn();
navScrollFn();

// Cursor glow effect
const cursorGlow = document.getElementById('cursorGlow');
if (cursorGlow) {
    document.addEventListener('mousemove', (e) => {
        cursorGlow.style.left = e.clientX + 'px';
        cursorGlow.style.top = e.clientY + 'px';
    });
}

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

        // Check if there is any data to show (to avoid empty chart)
        if (dataPoints.some(count => count > 0)) {
            chartContainer.style.display = 'block';
            setTimeout(() => chartContainer.classList.add('show'), 100);
            
            renderWeeklyChart(ctx.getContext('2d'), labels, dataPoints);
        }

    } catch (error) {
        console.error('Weekly visitor chart error:', error);
    }
}

function renderWeeklyChart(ctx, labels, data) {
    // Determine colors based on current theme
    const isLightMode = document.body.classList.contains('light-mode');
    
    // Theme colors matching CSS variables
    const textColor = isLightMode ? '#64748b' : '#94a3b8'; // var(--text-3)
    const gridColor = isLightMode ? 'rgba(0,0,0,0.05)' : 'rgba(255,255,255,0.05)';
    const barGradientStart = '#2dd4bf'; // var(--accent)
    const barGradientEnd = '#14b8a6'; // var(--accent-2)

    // Create gradient
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
                    backgroundColor: isLightMode ? 'rgba(255,255,255,0.9)' : 'rgba(15,23,42,0.9)',
                    titleColor: isLightMode ? '#0f172a' : '#f8fafc',
                    bodyColor: barGradientStart,
                    borderColor: isLightMode ? 'rgba(0,0,0,0.1)' : 'rgba(255,255,255,0.1)',
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
        
        // Add click counter badge
        const projectBody = card.querySelector('.project-body');
        if (!projectBody) return;
        
        const badge = document.createElement('div');
        badge.className = 'project-click-badge';
        badge.innerHTML = '<i class="fas fa-eye"></i> <span class="click-count">0</span>';
        projectBody.appendChild(badge);
        
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

// Close modal on ESC key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeCertificateModal();
        closeEnglishCertModal();
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