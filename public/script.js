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
        "nav.experience": "Deneyim",
        "nav.skills": "Yetenekler",
        "nav.projects": "Projeler",
        "nav.contact": "İletişim",
        "hero.badge": "AI/ML Mühendisi & Full-Stack Developer",
        "hero.subtitle": "Artificial Intelligence | Machine Learning | NLP Specialist",
        "hero.description": "RAG sistemleri, OCR teknolojileri ve çok modelli AI çözümleri geliştiriyorum. Kurumsal projelerde production-ready yapay zeka sistemleri tasarlama ve entegrasyon konularında uzmanım.",
        "hero.btn.projects": "Projelerim",
        "hero.btn.github": "GitHub Profilim",
        "hero.btn.contact": "İletişim",
        "about.title": "Hakkımda",
        "about.description": "Eskişehir Osmangazi Üniversitesi Bilgisayar Mühendisliği son sınıf öğrencisiyim (Mezuniyet: Şubat 2026). Yapay Zeka, Makine Öğrenmesi ve Doğal Dil İşleme alanlarında güçlü teknik uzmanlığa sahibim. RAG sistemleri, embedding teknolojileri, vektör veritabanları ve OCR tabanlı çözümler geliştirdim. Python, RESTful API entegrasyonları ve çok modelli orkestrasyon konularında production-ready AI çözümleri geliştirme deneyimim bulunmaktadır. Kurumsal projelerde verimliliği artıran ölçeklenebilir ve yenilikçi yapay zeka sistemleri tasarlama konusunda uzmanlaştım.",
        "about.stats.years": "Yıl Deneyim",
        "about.stats.projects": "Tamamlanan Proje",
        "about.stats.technologies": "Teknoloji",
        "experience.title": "Deneyim",
        "experience.certificate": "Sertifika",
        "experience.tei.title": "Yapay Zeka Stajyeri",
        "experience.tei.company": "TEI - TUSAŞ Motor Sanayii A.Ş. | IT - Data Analytics & AI",
        "experience.tei.date": "Ağustos 2025 - Eylül 2025",
        "experience.tei.achievement1": "Çok modelli destekli chatbot altyapıları tasarladım (LibreChat entegrasyonu)",
        "experience.tei.achievement2": "CV analiz ve değerlendirme sistemlerinin geliştirilmesine katkı sağladım",
        "experience.tei.achievement3": "Qwen2.5-VL modeli kullanarak tablolardan ve formlardan veri çıkarabilen OCR sistemi geliştirdim",
        "experience.tei.achievement4": "Bilgi erişim süreçlerini hızlandırmak için RAG tabanlı doküman sorgulama prototipi oluşturdum",
        "experience.tei.achievement5": "n8n gibi otomasyon araçları kullanarak IT süreç akışlarını hızlandırdım ve manuel görevleri minimize ettim",
        "experience.tei.achievement6": "Playwright kullanarak Trendyol Yemek üzerinden otomatik yemek sipariş veren web scraping tabanlı uygulama geliştirdim",
        "experience.powintec.title": "Software Developer (Remote)",
        "experience.powintec.company": "Powintec Engineering | Wireless Charging of Small Electric Vehicles",
        "experience.powintec.date": "Temmuz 2023 - Temmuz 2025",
        "experience.powintec.achievement1": "Küçük elektrikli araçları hedefleyen kablosuz şarj projesi için mobil uygulamalar ve frontend arayüzleri geliştirdim",
        "experience.powintec.achievement2": "Kullanıcı deneyimini ve işlevselliği geliştirmek için çapraz fonksiyonel ekiplerle işbirliği yaptım",
        "experience.powintec.achievement3": "Sürdürülebilir teknoloji inovasyonuna odaklanan bir startup ortamına katkıda bulundum",
        "skills.title": "Yetenekler",
        "skills.ai.title": "Yapay Zeka & Makine Öğrenmesi",
        "skills.nlp.title": "NLP & Semantik Teknolojiler",
        "skills.rag.title": "RAG & Vektör Veritabanları",
        "skills.ocr.title": "Görüntü İşleme & OCR",
        "skills.backend.title": "Backend & API Geliştirme",
        "skills.frontend.title": "Frontend Geliştirme",
        "skills.database.title": "Veritabanı Teknolojileri",
        "skills.tools.title": "Araçlar & DevOps",
        "skills.languages.title": "Diller",
        "skills.languages.turkish": "Türkçe (Ana Dil)",
        "skills.languages.english": "İngilizce (B2 - Profesyonel Yeterlilik)",
        "projects.title": "Projeler",
        "projects.badge.corporate": "KURUMSAL",
        "projects.badge.graduation": "MEZUN. PROJESİ",
        "projects.badge.automation": "OTOMASYON",
        "projects.sametei.subtitle": "AI Destekli İK Doküman Yönetim Platformu",
        "projects.sametei.description": "LibreChat çerçevesi üzerine inşa edilmiş, insan kaynakları doküman yönetimini yapay zeka ile otomatikleştiren kurumsal ölçekte platform. İK ekiplerinin doküman işleme süresini %70 azalttı.",
        "projects.hireai.subtitle": "AI Destekli CV & Portföy Analiz Platformu",
        "projects.hireai.description": "ATS tabanlı CV analiz ve optimizasyon platformu. CV'leri iş tanımlarına göre analiz eder, ATS uyumlu skorlar ve iyileştirme önerileri sunar. İK ekiplerinin ön eleme süresini %50 azalttı.",
        "projects.bitcoin.subtitle": "AI Destekli Kripto Para Analiz & Raporlama Sistemi",
        "projects.bitcoin.description": "n8n workflow automation ile geliştirilmiş Bitcoin teknik analiz sistemi. Binance API'den otomatik veri toplayarak 15+ teknik gösterge analizi yapar (SMA, EMA, RSI, MACD, Bollinger Bands, VWAP, ATR). DeepSeek R1 AI modeli ile piyasa yorumları oluşturur ve profesyonel HTML raporlarını her 4 saatte bir otomatik olarak email ile gönderir.",
        "projects.trendyol.subtitle": "E-ticaret Sipariş Otomasyonu",
        "projects.trendyol.description": "Playwright kullanarak Trendyol Yemek platformu için geliştirilmiş otomatik sipariş sistemi. Süreçleri hızlandıran ve hata oranını minimize eden akıllı otomasyon çözümü.",
        "projects.fruit.subtitle": "Makine Öğrenmesi & Computer Vision",
        "projects.fruit.description": "Görüntü işleme ve 5 farklı ML algoritması (SVM, Random Forest, Gradient Boosting, Logistic Regression, Ensemble) kullanarak meyve olgunluğunu tespit eden pattern recognition projesi.",
        "projects.news.subtitle": "Modern Haber Toplayıcı Platform",
        "projects.news.description": "ASP.NET ile geliştirilmiş modern haber toplayıcı. RSS feed'lerini akıllı kategorizasyon ile çeker ve düzenli bir şekilde kullanıcılara sunar.",
        "projects.student.subtitle": "Advanced Programming Projesi",
        "projects.student.description": "C# Windows Forms ve SQL Server ile geliştirilmiş kapsamlı öğrenci bilgi yönetim sistemi. CRUD işlemleri ve tam veritabanı entegrasyonu.",
        "projects.smarthome.subtitle": "Akıllı Ev Kontrol Uygulaması",
        "projects.smarthome.description": "Flutter ve Dart kullanılarak geliştirilmiş akıllı ev kontrol mobil uygulaması. Modern UI ve kullanıcı dostu arayüz tasarımı.",
        "projects.discord.subtitle": "Basit ve Etkili Müzik Botu",
        "projects.discord.description": "Discord için Python ile geliştirilmiş kullanımı kolay müzik botu. Temiz kod yapısı ve kullanıcı dostu komutlar.",
        "projects.link": "GitHub'da Görüntüle",
        "projects.link.gitlab": "GitLab'da Görüntüle",
        "contact.title": "İletişim",
        "contact.location": "Konum",
        "contact.location.value": "Eskişehir, Türkiye",
        "contact.education": "Eğitim",
        "contact.education.value": "ESOGU - Bilgisayar Mühendisliği",
        "contact.email.copied": "Email kopyalandı!",
        "visitor.label": "Ziyaretçi",
        "footer.copyright": "© 2025 Samet Soysal. Tüm hakları saklıdır.",
        "footer.made": "Tutkuyla kodlanmıştır ❤️"
    },
    en: {
        "nav.brand": "SAMET SOYSAL",
        "nav.subtitle": "AI/ML Engineer",
        "nav.about": "About",
        "nav.experience": "Experience",
        "nav.skills": "Skills",
        "nav.projects": "Projects",
        "nav.contact": "Contact",
        "hero.badge": "AI/ML Engineer & Full-Stack Developer",
        "hero.subtitle": "Artificial Intelligence | Machine Learning | NLP Specialist",
        "hero.description": "I develop RAG systems, OCR technologies, and multi-model AI solutions. I specialize in designing and integrating production-ready artificial intelligence systems in corporate projects.",
        "hero.btn.projects": "My Projects",
        "hero.btn.github": "My GitHub Profile",
        "hero.btn.contact": "Contact",
        "about.title": "About Me",
        "about.description": "I am currently pursuing my Bachelor's degree in Computer Engineering at Eskişehir Osmangazi University (Expected graduation: February 2026). I have strong technical expertise in Artificial Intelligence, Machine Learning, and Natural Language Processing. I have developed RAG systems, embedding technologies, vector databases, and OCR-based solutions. I have experience in developing production-ready AI solutions in Python, RESTful API integrations, and multi-model orchestration. I specialize in designing scalable and innovative AI systems that increase efficiency in corporate projects.",
        "about.stats.years": "Years of Experience",
        "about.stats.projects": "Completed Projects",
        "about.stats.technologies": "Technologies",
        "experience.title": "Experience",
        "experience.certificate": "Certificate",
        "experience.tei.title": "Artificial Intelligence Intern",
        "experience.tei.company": "TEI - TUSAŞ Motor Sanayii A.Ş. | IT - Data Analytics & AI",
        "experience.tei.date": "August 2025 - September 2025",
        "experience.tei.achievement1": "Designed multi-model supported chatbot infrastructures (LibreChat integration)",
        "experience.tei.achievement2": "Contributed to the development of CV analysis and evaluation systems",
        "experience.tei.achievement3": "Developed OCR system capable of extracting data from tables and forms using Qwen2.5-VL model",
        "experience.tei.achievement4": "Created RAG-based document querying prototype to accelerate information access processes",
        "experience.tei.achievement5": "Accelerated IT process workflows and minimized manual tasks using automation tools like n8n",
        "experience.tei.achievement6": "Developed a web scraping-based application using Playwright that autonomously orders food through Trendyol Yemek",
        "experience.powintec.title": "Software Developer (Remote)",
        "experience.powintec.company": "Powintec Engineering | Wireless Charging of Small Electric Vehicles",
        "experience.powintec.date": "July 2023 - July 2025",
        "experience.powintec.achievement1": "Developed mobile applications and frontend interfaces for a wireless charging project targeting small electric vehicles",
        "experience.powintec.achievement2": "Collaborated with cross-functional teams to improve user experience and functionality",
        "experience.powintec.achievement3": "Contributed to a startup environment focused on sustainable technology innovation",
        "skills.title": "Skills",
        "skills.ai.title": "Artificial Intelligence & Machine Learning",
        "skills.nlp.title": "NLP & Semantic Technologies",
        "skills.rag.title": "RAG & Vector Databases",
        "skills.ocr.title": "Image Processing & OCR",
        "skills.backend.title": "Backend & API Development",
        "skills.frontend.title": "Frontend Development",
        "skills.database.title": "Database Technologies",
        "skills.tools.title": "Tools & DevOps",
        "skills.languages.title": "Languages",
        "skills.languages.turkish": "Turkish (Native)",
        "skills.languages.english": "English (B2 - Professional Proficiency)",
        "projects.title": "Projects",
        "projects.badge.corporate": "CORPORATE",
        "projects.badge.graduation": "CAPSTONE",
        "projects.badge.automation": "AUTOMATION",
        "projects.sametei.subtitle": "AI-Powered HR Document Management Platform",
        "projects.sametei.description": "Built on LibreChat framework, a corporate-scale platform that automates human resources document management with artificial intelligence. Reduced HR teams' document processing time by 70%.",
        "projects.hireai.subtitle": "AI-Powered CV & Portfolio Analysis Platform",
        "projects.hireai.description": "ATS-based CV analysis and optimization platform. Analyzes CVs according to job descriptions and provides ATS-compliant scores and improvement suggestions. Reduced HR teams' pre-screening time by 50%.",
        "projects.bitcoin.subtitle": "AI-Powered Cryptocurrency Analysis & Reporting System",
        "projects.bitcoin.description": "Bitcoin technical analysis system built with n8n workflow automation. Automatically collects data from Binance API and performs 15+ technical indicator analysis (SMA, EMA, RSI, MACD, Bollinger Bands, VWAP, ATR). Generates market insights with DeepSeek R1 AI model and automatically sends professional HTML reports via email every 4 hours.",
        "projects.trendyol.subtitle": "E-commerce Order Automation",
        "projects.trendyol.description": "Automated ordering system developed for Trendyol Yemek platform using Playwright. Smart automation solution that accelerates processes and minimizes error rates.",
        "projects.fruit.subtitle": "Machine Learning & Computer Vision",
        "projects.fruit.description": "Pattern recognition project that detects fruit ripeness using image processing and 5 different ML algorithms (SVM, Random Forest, Gradient Boosting, Logistic Regression, Ensemble).",
        "projects.news.subtitle": "Modern News Aggregator Platform",
        "projects.news.description": "Modern news aggregator developed with ASP.NET. Pulls RSS feeds with smart categorization and presents them in an organized manner.",
        "projects.student.subtitle": "Advanced Programming Project",
        "projects.student.description": "Comprehensive student information management system developed with C# Windows Forms and SQL Server. CRUD operations and full database integration.",
        "projects.smarthome.subtitle": "Smart Home Control Application",
        "projects.smarthome.description": "Smart home control mobile application developed using Flutter and Dart. Modern UI and user-friendly interface design.",
        "projects.discord.subtitle": "Simple and Effective Music Bot",
        "projects.discord.description": "Easy-to-use music bot developed in Python for Discord. Clean code structure and user-friendly commands.",
        "projects.link": "View on GitHub",
        "projects.link.gitlab": "View on GitLab",
        "contact.title": "Contact",
        "contact.location": "Location",
        "contact.location.value": "Eskişehir, Turkey",
        "contact.education": "Education",
        "contact.education.value": "ESOGU - Computer Engineering",
        "contact.email.copied": "Email copied!",
        "visitor.label": "Visitors",
        "footer.copyright": "© 2025 Samet Soysal. All rights reserved.",
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
            
            // Update active button
            document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');

            // Update HTML lang attribute
            document.documentElement.lang = lang;
            
            // Save preference
            localStorage.setItem('preferredLang', lang);
        }
    });
});

// Update language function
function updateLanguage(lang) {
    document.querySelectorAll('[data-tr]').forEach(element => {
        const key = element.getAttribute('data-tr');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
}

// Scroll reveal animation
const scrollReveal = () => {
    const reveals = document.querySelectorAll('.scroll-reveal');
    reveals.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('active');
        }
    });
};

window.addEventListener('scroll', scrollReveal);
scrollReveal(); // Initial check

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
// VISITOR COUNTER - Firebase Realtime Database
// ============================================
async function initVisitorCounter() {
    const counterElement = document.querySelector('#visitorCount span');
    if (!counterElement) return;

    // Check if Firebase is available
    if (!database) {
        console.warn('Firebase not available, using fallback counter');
        fallbackVisitorCounter();
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
                timestamp: Date.now(),
                userAgent: navigator.userAgent,
                language: navigator.language
            });
        }

        // Animate counter
        animateCounter(counterElement, 0, currentCount, 2000);

        // Real-time updates
        countRef.on('value', (snapshot) => {
            const newCount = snapshot.val() || 0;
            counterElement.textContent = newCount.toLocaleString();
        });

    } catch (error) {
        console.error('Visitor counter error:', error);
        // Fallback to localStorage
        fallbackVisitorCounter();
    }
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
            console.warn('Firebase not available, using fallback project counter');
            const fallbackCount = localStorage.getItem(`project-${projectId}`) || Math.floor(Math.random() * 20) + 5;
            const countSpan = badge.querySelector('.click-count');
            countSpan.textContent = fallbackCount;
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
            console.warn('Firebase not available, using fallback increment');
            const fallbackCount = parseInt(localStorage.getItem(`project-${projectId}`)) || 0;
            localStorage.setItem(`project-${projectId}`, fallbackCount + 1);
            const countSpan = badge.querySelector('.click-count');
            countSpan.textContent = (fallbackCount + 1).toLocaleString();
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
        
        const behaviorData = {
            firstVisit: localStorage.getItem('firstVisit') || Date.now(),
            lastVisit: Date.now(),
            pageViews: (parseInt(localStorage.getItem('pageViews')) || 0) + 1,
            screenResolution: `${screen.width}x${screen.height}`,
            language: navigator.language,
            timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
            referrer: document.referrer || 'direct'
        };

        localStorage.setItem('pageViews', behaviorData.pageViews);
        if (!localStorage.getItem('firstVisit')) {
            localStorage.setItem('firstVisit', behaviorData.firstVisit);
        }

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
            timestamp: Date.now(),
            duration: 0
        });

    } catch (error) {
        console.error('Section tracking error:', error);
    }
}

// ============================================
// FALLBACK FUNCTIONS (if Firebase fails)
// ============================================
function fallbackVisitorCounter() {
    const counterElement = document.querySelector('#visitorCount span');
    if (!counterElement) return;

    let visitorCount = localStorage.getItem('portfolioVisitorCount');
    
    if (!visitorCount) {
        visitorCount = Math.floor(Math.random() * 300) + 500;
        localStorage.setItem('portfolioVisitorCount', visitorCount);
    }
    
    visitorCount = parseInt(visitorCount) + 1;
    localStorage.setItem('portfolioVisitorCount', visitorCount);
    
    animateCounter(counterElement, 0, visitorCount, 2000);
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
            <button onclick="hideAdminDashboard()">Close</button>
        </div>
    `;
    
    document.body.appendChild(dashboard);
    loadAdminStats();
}

async function loadAdminStats() {
    // Check if Firebase is available
    if (!database) {
        document.getElementById('total-visitors').textContent = 'Firebase not configured';
        return;
    }

    try {
        // Load total visitors
        const totalRef = database.ref('visitors/total');
        totalRef.on('value', (snapshot) => {
            const total = snapshot.val() || 0;
            document.getElementById('total-visitors').textContent = total;
        });

        // Load today's visitors
        const today = new Date().toDateString();
        const todayRef = database.ref(`visitors/daily/${today}`);
        todayRef.on('value', (snapshot) => {
            const todayData = snapshot.val() || {};
            const todayCount = Object.keys(todayData).length;
            document.getElementById('today-visitors').textContent = todayCount;
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
            
            document.getElementById('popular-project').textContent = 
                `${popularProject.name} (${popularProject.count} views)`;
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

// ============================================
// EXPERIENCE SLIDER
// ============================================
let currentExperience = 1;
const totalExperiences = 2;

window.changeExperience = function(direction) {
    const items = document.querySelectorAll('.timeline-item');
    const indicators = document.querySelectorAll('.experience-indicators .indicator');
    
    // Update current experience
    currentExperience += direction;
    
    // Loop around
    if (currentExperience > totalExperiences) {
        currentExperience = 1;
    } else if (currentExperience < 1) {
        currentExperience = totalExperiences;
    }
    
    // Update items visibility
    items.forEach(item => {
        const itemNumber = parseInt(item.getAttribute('data-experience'));
        if (itemNumber === currentExperience) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
    
    // Update indicators
    indicators.forEach((indicator, index) => {
        if (index + 1 === currentExperience) {
            indicator.classList.add('active');
        } else {
            indicator.classList.remove('active');
        }
    });
}

window.goToExperience = function(experienceNumber) {
    const items = document.querySelectorAll('.timeline-item');
    const indicators = document.querySelectorAll('.experience-indicators .indicator');
    
    // Update current experience
    currentExperience = experienceNumber;
    
    // Update items visibility
    items.forEach(item => {
        const itemNumber = parseInt(item.getAttribute('data-experience'));
        if (itemNumber === experienceNumber) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
    
    // Update indicators
    indicators.forEach((indicator, index) => {
        if (index + 1 === experienceNumber) {
            indicator.classList.add('active');
        } else {
            indicator.classList.remove('active');
        }
    });
}

// ============================================
// CERTIFICATE MODAL
// ============================================
function showCertificateModal() {
    const modal = document.getElementById('certificateModal');
    if (modal) {
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
    }
});

// Expose close function to window for onclick
window.closeCertificate = closeCertificateModal;