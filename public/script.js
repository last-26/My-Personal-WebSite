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
        "about.intro": "<span class='kw'>Yapay Zeka</span>, <span class='kw'>NLP</span> ve <span class='kw'>Büyük Dil Modelleri</span> alanlarında uzmanlaşmış, sonuç odaklı bir Bilgisayar Mühendisiyim.",
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
        "experience.icictas.title": "Yazılım Geliştirme Stajyeri",
        "experience.icictas.company": "<a href='https://www.ictasnukleer.com.tr' target='_blank' class='company-link'>IC İçtaş Nükleer ve Endüstriyel Tesisler İnşaat A.Ş.</a>",
        "experience.icictas.date": "Oca 2026",
        "experience.icictas.desc": "Akkuyu Nükleer Santral sahasından gelen verileri analiz etmek için React.js, FastAPI ve PostgreSQL kullanarak uçtan uca İSG Takip Paneli geliştirdim. Backend tarafında Passlib ve JWT ile güvenli kimlik doğrulama sistemleri kurarken, SQLAlchemy ORM ile veritabanı yönetimini optimize ettim. Ayrıca yüksek kardinaliteli verilerde B-tree indeksleme stratejileri uygulayarak sorgu performansını artırdım ve Material UI ile yöneticiler için gerçek zamanlı analitik dashboard'lar tasarladım.",
        "experience.tei.title": "Data Science & AI Stajyeri",
        "experience.tei.company": "<a href='https://www.tei.com.tr' target='_blank' class='company-link company-tei'>TEI – TUSAŞ Motor Sanayii A.Ş. | Eskişehir</a>",
        "experience.tei.date": "Ağu – Eyl 2025",
        "experience.tei.desc": "TEI bünyesinde izole ağlarda güvenli veri iletimi ve sistem mimarileri üzerine Ar-Ge çalışmaları yürüttüm. İnsan Kaynakları departmanı için LLM tabanlı 'SAMETEI' yapay zeka asistanının prototipleme sürecini yöneterek OpenRouter ve Local LLM entegrasyonlarını gerçekleştirdim. Ayrıca n8n ile finansal metrikleri analiz eden otonom iş akışları ve Playwright kullanarak e-ticaret süreçlerini otomatize eden RPA çözümleri geliştirdim.",
        "experience.powintec.title": "Part-Time Yazılım Geliştirici (Remote)",
        "experience.powintec.company": "Powintec Engineering | Wireless Charging of Small Electric Vehicles",
        "experience.powintec.date": "Tem 2023 – Tem 2025",
        "experience.powintec.desc": "Kablosuz şarj sistemlerinden gelen hizalama, sıcaklık ve verimlilik verilerini anlık olarak izlemek amacıyla React.js, TailwindCSS ve WebSockets tabanlı bir yönetim paneli hazırladım. WebSocket üzerinden gelen yoğun veri akışının UI performansını etkilememesi için state yönetimini optimize ederek milisaniye düzeyinde gecikme ile veri işleme sağladım. Donanım bağlantı kopmalarına karşı hata yönetim mekanizmaları geliştirerek sistem kararlılığını artırdım.",
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
        "projects.nexthire.subtitle": "AI Destekli İş Başvuru Ajanı",
        "projects.nexthire.description": "LangGraph tabanlı çok adımlı AI agent sistemi. CV yükle, iş ilanı yapıştır — agent otomatik olarak ATS skoru hesaplar, eksik yetkinlikleri belirler, kişiselleştirilmiş ön yazı oluşturur ve başvuruyu kanban panosuna ekler. Multi-model routing ile maliyet-performans optimizasyonu sağlar.",
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
        "projects.trendyol.title": "Trendyol Otomasyon",
        "projects.trendyol.subtitle": "E-ticaret Sipariş Otomasyonu",
        "projects.trendyol.description": "Playwright kullanarak Trendyol Yemek platformu için geliştirilmiş otomatik sipariş sistemi. Süreçleri hızlandıran ve hata oranını minimize eden akıllı otomasyon çözümü.",
        "projects.fruit.title": "Meyve Olgunluk Tespiti",
        "projects.fruit.subtitle": "Makine Öğrenmesi & Computer Vision",
        "projects.fruit.description": "Görüntü işleme ve 5 farklı ML algoritması (SVM, Random Forest, Gradient Boosting, Logistic Regression, Ensemble) kullanarak meyve olgunluğunu tespit eden pattern recognition projesi.",
        "projects.news.subtitle": "Modern Haber Toplayıcı Platform",
        "projects.news.description": "ASP.NET ile geliştirilmiş modern haber toplayıcı. RSS feed'lerini akıllı kategorizasyon ile çeker ve düzenli bir şekilde kullanıcılara sunar.",
        "projects.link": "GitHub'da Görüntüle",
        "projects.link.gitlab": "GitLab'da Görüntüle",
        "contact.title": "İletişim",
        "contact.email.copied": "Email kopyalandı!",
        "visitor.header": "Ziyaretçiler",
        "visitor.total": "TOPLAM",
        "visitor.daily": "GÜNLÜK",
        "visitor.weekly": "SON 7 GÜN",
        "visitor.reset.note": "Veriler 16 Mart 2026 tarihinde sıfırlanmıştır.",
        "footer.tagline": "AI/ML & Cloud çözümleri ile geleceği inşa ediyorum.",
        "footer.nav.title": "Sayfalar",
        "footer.social.title": "Bağlantılar",
        "footer.copyright": "© 2026 Samet Soysal. Tüm hakları saklıdır.",
        "footer.made": "Tutkuyla kodlanmıştır ❤️"
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
        "about.intro": "A results-driven Computer Engineer specializing in <span class='kw'>Artificial Intelligence</span>, <span class='kw'>NLP</span> & <span class='kw'>Large Language Models</span>.",
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
        "experience.icictas.title": "Software Development Intern",
        "experience.icictas.company": "<a href='https://www.ictasnukleer.com.tr/en/' target='_blank' class='company-link'>IC Ictas Nuclear and Industrial Facilities Construction Inc.</a>",
        "experience.icictas.date": "Jan 2026",
        "experience.icictas.desc": "I developed an end-to-end OHS Tracking Panel using React.js, FastAPI, and PostgreSQL to analyze data from the Akkuyu Nuclear Power Plant site. I implemented secure authentication systems using Passlib and JWT on the backend, while optimizing database management with SQLAlchemy ORM. Additionally, I improved query performance by applying B-tree indexing strategies on high-cardinality data and designed real-time analytical dashboards for managers using Material UI.",
        "experience.tei.title": "Data Science & AI Intern",
        "experience.tei.company": "<a href='https://www.tei.com.tr/en' target='_blank' class='company-link company-tei'>TEI – TUSAS Engine Industries Inc. | Eskisehir, Turkey</a>",
        "experience.tei.date": "Aug – Sep 2025",
        "experience.tei.desc": "I conducted R&D on secure data transmission and system architectures in isolated networks at TEI. I managed the prototyping process of 'SAMETEI', an LLM-based AI assistant for the HR department, integrating OpenRouter and Local LLMs. Furthermore, I developed autonomous workflows for financial metric analysis using n8n and created RPA solutions using Playwright to automate e-commerce processes.",
        "experience.powintec.title": "Part-Time Software Developer (Remote)",
        "experience.powintec.company": "Powintec Engineering | Wireless Charging of Small Electric Vehicles",
        "experience.powintec.date": "Jul 2023 – Jul 2025",
        "experience.powintec.desc": "I built a management dashboard based on React.js, TailwindCSS, and WebSockets to monitor alignment, temperature, and efficiency data from wireless charging systems in real-time. I optimized state management to handle intense WebSocket data streams without compromising UI performance, ensuring low-latency data processing. I also improved system stability by developing error handling mechanisms against hardware connection drops.",
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
        "projects.nexthire.subtitle": "AI-Powered Job Application Agent",
        "projects.nexthire.description": "Multi-step AI agent system built with LangGraph. Upload your CV, paste a job posting — the agent automatically calculates ATS score, identifies skill gaps, generates a personalized cover letter, and adds the application to a kanban board. Optimizes cost-performance with multi-model routing.",
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
        "projects.trendyol.title": "Trendyol Automation",
        "projects.trendyol.subtitle": "E-commerce Order Automation",
        "projects.trendyol.description": "Automated ordering system developed for Trendyol Yemek platform using Playwright. Smart automation solution that accelerates processes and minimizes error rates.",
        "projects.fruit.title": "Fruit Ripeness Detection",
        "projects.fruit.subtitle": "Machine Learning & Computer Vision",
        "projects.fruit.description": "Pattern recognition project that detects fruit ripeness using image processing and 5 different ML algorithms (SVM, Random Forest, Gradient Boosting, Logistic Regression, Ensemble).",
        "projects.news.subtitle": "Modern News Aggregator Platform",
        "projects.news.description": "Modern news aggregator developed with ASP.NET. Pulls RSS feeds with smart categorization and presents them in an organized manner.",
        "projects.link": "View on GitHub",
        "projects.link.gitlab": "View on GitLab",
        "contact.title": "Contact",
        "contact.email.copied": "Email copied!",
        "visitor.header": "Visitors",
        "visitor.total": "TOTAL",
        "visitor.daily": "DAILY",
        "visitor.weekly": "LAST 7 DAYS",
        "visitor.reset.note": "Data was reset on March 16, 2026.",
        "footer.tagline": "Building the future with AI/ML & Cloud solutions.",
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
    const nav = document.getElementById('mainNav');
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
// Lightning System
// ============================================
(function() {
    const lCanvas = document.getElementById('lightningCanvas');
    if (!lCanvas) return;
    const lCtx = lCanvas.getContext('2d');
    const isMobile = window.innerWidth < 768;

    // --- Config ---
    const COLORS_DARK = [
        { r:124, g:58, b:237 },
        { r:45, g:212, b:191 }
    ];
    const COLORS_LIGHT = [
        { r:109, g:40, b:217 },
        { r:13, g:125, b:114 }
    ];
    const EDGE_ZONE = 60;

    // --- State ---
    let bolts = [];
    let cachedCards = [];
    let scrollSpeed = 0;
    let lastScrollY = window.scrollY;
    let lastScrollTime = Date.now();
    let scrollDir = 1;
    let lRunning = false;
    let lRafId = null;

    // --- Helpers ---
    function isLight() { return document.body.classList.contains('light-mode'); }
    function getColors() { return isLight() ? COLORS_LIGHT : COLORS_DARK; }
    function opMult() { return isLight() ? 0.5 : 1.0; }
    function pickColor() { const c = getColors(); return c[Math.random() > 0.5 ? 0 : 1]; }
    function rgba(c, a) { return `rgba(${c.r},${c.g},${c.b},${a})`; }

    // --- Resize ---
    function resize() {
        lCanvas.width = window.innerWidth;
        lCanvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    // --- Card cache ---
    function cacheCards() {
        const els = document.querySelectorAll(
            '.bento-card,.project-card,.roadmap-card,.education-card,.contact-item'
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

        return {
            points, branches, color, attractTarget,
            birth: performance.now(),
            fadeInDur: 100 + Math.random() * 100,
            fadeOutDur: 300 + Math.random() * 200,
            opacity: 0, phase: 'in', done: false
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

        // Check if there is any data to show (to avoid empty chart)
        if (dataPoints.some(count => count > 0)) {
            chartContainer.style.display = 'block';
            setTimeout(() => chartContainer.classList.add('show'), 150);

            renderWeeklyChart(ctx.getContext('2d'), labels, dataPoints);
        }

    } catch (error) {
        console.error('Weekly visitor chart error:', error);
    }
}

function renderWeeklyChart(ctx, labels, data) {
    // Determine colors based on current theme
    const isLightMode = document.body.classList.contains('light-mode');
    
    // Theme colors
    const textColor = isLightMode ? '#36322f' : '#94a3b8';
    const gridColor = isLightMode ? 'rgba(0,0,0,0.06)' : 'rgba(255,255,255,0.05)';
    const barGradientStart = isLightMode ? '#6d28d9' : '#2dd4bf';
    const barGradientEnd = isLightMode ? '#8b5cf6' : '#14b8a6';

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
                    backgroundColor: isLightMode ? '#ffffff' : 'rgba(15,23,42,0.9)',
                    titleColor: isLightMode ? '#1a1816' : '#f8fafc',
                    bodyColor: isLightMode ? '#6d28d9' : '#2dd4bf',
                    borderColor: isLightMode ? 'rgba(0,0,0,0.08)' : 'rgba(255,255,255,0.1)',
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