// Portfolio Website JavaScript - Samet Soysal

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
        "experience.tei.title": "Yapay Zeka Stajyeri",
        "experience.tei.company": "TEI - TUSAŞ Motor Sanayii A.Ş. | IT - Data Analytics & AI",
        "experience.tei.date": "Ağustos 2025 - Eylül 2025",
        "experience.tei.achievement1": "Çok modelli destekli chatbot altyapıları tasarladım (LibreChat entegrasyonu)",
        "experience.tei.achievement2": "CV analiz ve değerlendirme sistemlerinin geliştirilmesine katkı sağladım",
        "experience.tei.achievement3": "Qwen2.5-VL modeli kullanarak tablolardan ve formlardan veri çıkarabilen OCR sistemi geliştirdim",
        "experience.tei.achievement4": "Bilgi erişim süreçlerini hızlandırmak için RAG tabanlı doküman sorgulama prototipi oluşturdum",
        "experience.tei.achievement5": "n8n gibi otomasyon araçları kullanarak IT süreç akışlarını hızlandırdım ve manuel görevleri minimize ettim",
        "experience.tei.achievement6": "Playwright kullanarak Trendyol Yemek üzerinden otomatik yemek sipariş veren web scraping tabanlı uygulama geliştirdim",
        "skills.title": "Yetenekler",
        "skills.ai.title": "Yapay Zeka & Makine Öğrenmesi",
        "skills.nlp.title": "NLP & Semantik Teknolojiler",
        "skills.rag.title": "RAG & Vektör Veritabanları",
        "skills.ocr.title": "Görüntü İşleme & OCR",
        "skills.backend.title": "Backend & API Geliştirme",
        "skills.frontend.title": "Frontend Geliştirme",
        "skills.database.title": "Veritabanı Teknolojileri",
        "skills.tools.title": "Araçlar & DevOps",
        "projects.title": "Projeler",
        "projects.badge.corporate": "KURUMSAL",
        "projects.badge.graduation": "MEZUN. PROJESİ",
        "projects.sametei.subtitle": "AI Destekli İK Doküman Yönetim Platformu",
        "projects.sametei.description": "LibreChat çerçevesi üzerine inşa edilmiş, insan kaynakları doküman yönetimini yapay zeka ile otomatikleştiren kurumsal ölçekte platform. İK ekiplerinin doküman işleme süresini %70 azalttı.",
        "projects.hireai.subtitle": "AI Destekli CV & Portföy Analiz Platformu",
        "projects.hireai.description": "ATS tabanlı CV analiz ve optimizasyon platformu. CV'leri iş tanımlarına göre analiz eder, ATS uyumlu skorlar ve iyileştirme önerileri sunar. İK ekiplerinin ön eleme süresini %50 azalttı.",
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
        "experience.tei.title": "Artificial Intelligence Intern",
        "experience.tei.company": "TEI - TUSAŞ Motor Sanayii A.Ş. | IT - Data Analytics & AI",
        "experience.tei.date": "August 2025 - September 2025",
        "experience.tei.achievement1": "Designed multi-model supported chatbot infrastructures (LibreChat integration)",
        "experience.tei.achievement2": "Contributed to the development of CV analysis and evaluation systems",
        "experience.tei.achievement3": "Developed OCR system capable of extracting data from tables and forms using Qwen2.5-VL model",
        "experience.tei.achievement4": "Created RAG-based document querying prototype to accelerate information access processes",
        "experience.tei.achievement5": "Accelerated IT process workflows and minimized manual tasks using automation tools like n8n",
        "experience.tei.achievement6": "Developed a web scraping-based application using Playwright that autonomously orders food through Trendyol Yemek",
        "skills.title": "Skills",
        "skills.ai.title": "Artificial Intelligence & Machine Learning",
        "skills.nlp.title": "NLP & Semantic Technologies",
        "skills.rag.title": "RAG & Vector Databases",
        "skills.ocr.title": "Image Processing & OCR",
        "skills.backend.title": "Backend & API Development",
        "skills.frontend.title": "Frontend Development",
        "skills.database.title": "Database Technologies",
        "skills.tools.title": "Tools & DevOps",
        "projects.title": "Projects",
        "projects.badge.corporate": "CORPORATE",
        "projects.badge.graduation": "CAPSTONE",
        "projects.sametei.subtitle": "AI-Powered HR Document Management Platform",
        "projects.sametei.description": "Built on LibreChat framework, a corporate-scale platform that automates human resources document management with artificial intelligence. Reduced HR teams' document processing time by 70%.",
        "projects.hireai.subtitle": "AI-Powered CV & Portfolio Analysis Platform",
        "projects.hireai.description": "ATS-based CV analysis and optimization platform. Analyzes CVs according to job descriptions and provides ATS-compliant scores and improvement suggestions. Reduced HR teams' pre-screening time by 50%.",
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

// Real Visitor Counter with CountAPI
async function initVisitorCounter() {
    try {
        // CountAPI endpoint for this website
        const response = await fetch('https://api.countapi.xyz/hit/last26-portfolio/visits');
        const data = await response.json();
        
        // Animate counter
        const counterElement = document.querySelector('#visitorCount span');
        let current = 0;
        const target = data.value || 0;
        const duration = 2000; // 2 seconds
        const increment = target / (duration / 16); // 60fps
        
        const updateCounter = () => {
            current += increment;
            if (current < target) {
                counterElement.textContent = Math.floor(current).toLocaleString();
                requestAnimationFrame(updateCounter);
            } else {
                counterElement.textContent = target.toLocaleString();
            }
        };
        
        requestAnimationFrame(updateCounter);
    } catch (error) {
        console.error('Visitor counter error:', error);
        document.querySelector('#visitorCount span').textContent = '...';
    }
}

// Initialize visitor counter on page load
initVisitorCounter();

// Project Click Counter
async function initProjectCounters() {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach((card, index) => {
        const projectId = card.querySelector('h3').textContent.replace(/[^a-zA-Z0-9]/g, '-').toLowerCase();
        
        // Add click counter badge
        const badge = document.createElement('div');
        badge.className = 'project-click-badge';
        badge.innerHTML = '<i class="fas fa-mouse-pointer"></i> <span class="click-count">0</span>';
        card.querySelector('.project-body').appendChild(badge);
        
        // Fetch current count
        fetchProjectCount(projectId, badge);
        
        // Track clicks on project links
        const projectLink = card.querySelector('.project-link, a[href*="github"]');
        if (projectLink) {
            projectLink.addEventListener('click', () => {
                incrementProjectCount(projectId, badge);
            });
        }
    });
}

async function fetchProjectCount(projectId, badge) {
    try {
        const response = await fetch(`https://api.countapi.xyz/get/last26-portfolio/${projectId}`);
        const data = await response.json();
        const count = data.value || 0;
        badge.querySelector('.click-count').textContent = count;
    } catch (error) {
        badge.querySelector('.click-count').textContent = '0';
    }
}

async function incrementProjectCount(projectId, badge) {
    try {
        const response = await fetch(`https://api.countapi.xyz/hit/last26-portfolio/${projectId}`);
        const data = await response.json();
        badge.querySelector('.click-count').textContent = data.value || 0;
    } catch (error) {
        console.error('Project counter error:', error);
    }
}

// Initialize project counters on page load
initProjectCounters();

// Copy email function
function copyEmail() {
    const email = 'a.sametsoysal@gmail.com';
    
    // Copy to clipboard
    navigator.clipboard.writeText(email).then(() => {
        showToast();
    }).catch(err => {
        console.error('Email kopyalanamadı:', err);
    });
}

// Show toast notification
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

// Add navbar scroll effect
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
