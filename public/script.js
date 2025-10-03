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
        "hero.btn.cv.view": "CV Görüntüle",
        "hero.btn.cv.download": "CV İndir",
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
        "projects.bitcoin.title": "₿ Bitcoin Teknik Analiz Otomasyonu",
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
        "projects.student.title": "🎓 Öğrenci Yönetim Sistemi",
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
        "visitor.header": "Ziyaretçiler",
        "visitor.total": "TOPLAM",
        "visitor.daily": "GÜNLÜK",
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
        "hero.btn.cv.view": "View CV",
        "hero.btn.cv.download": "Download CV",
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
        "projects.bitcoin.title": "₿ Bitcoin Technical Analysis Automation",
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
        "projects.student.title": "🎓 Student Management System",
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
        "visitor.header": "Visitors",
        "visitor.total": "TOTAL",
        "visitor.daily": "DAILY",
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
            updateCVButtons(lang);
            
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

// Dark Mode Toggle
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

// Check for saved theme preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    body.classList.add('dark-mode');
    themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
}

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    
    if (body.classList.contains('dark-mode')) {
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        localStorage.setItem('theme', 'dark');
    } else {
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        localStorage.setItem('theme', 'light');
    }
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
            timestamp: Date.now(),
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
                timestamp: Date.now(),
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
        console.error('Visitor counter error:', error);
        counterElement.textContent = 'Error';
        dailyCounterElement.textContent = 'Error';
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