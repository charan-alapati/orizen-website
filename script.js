// Navigation scroll effect
window.addEventListener('scroll', function() {
    const nav = document.getElementById('navbar');
    if (window.scrollY > 100) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// Hero background slideshow
const heroSection = document.querySelector('.hero');

if (heroSection) {
    const heroImages = [
        'images/hero1.jpg',
        'images/hero2.jpg',
        'images/hero3.jpg',
        'images/hero4.jpg',
        'images/hero5.jpg',
        'images/hero6.jpg'
        // add more if you want
    ];

    let heroIndex = 0;

    function updateHeroBackground() {
        heroSection.style.backgroundImage = `url('${heroImages[heroIndex]}')`;
        heroIndex = (heroIndex + 1) % heroImages.length;
    }

    // initial image
    updateHeroBackground();

    // change every 7 seconds
    setInterval(updateHeroBackground, 7000);
}

// Chatbot data and functionality
const chatData = {
    initial: {
        message: "Hello! 👋 Welcome to OriZen. How can I help you today?",
        options: [
            { text: "Language Courses", next: "languages" },
            { text: "Study Abroad", next: "consultancy" },
            { text: "Admission Process", next: "admission" },
            { text: "Contact Details", next: "contact" }
        ]
    },
    languages: {
        message: "We offer courses in German, French, Italian, and English. Which language interests you?",
        options: [
            { text: "German", next: "german" },
            { text: "French", next: "french" },
            { text: "Italian", next: "italian" },
            { text: "English", next: "english" },
            { text: "← Back", next: "initial" }
        ]
    },
    german: {
        message: "Our German courses cover A1 to C2 levels following CEFR standards. Classes are 3-6 months per level with batch sizes of 8-12 students. We also prepare students for Goethe and TestDaF exams. Would you like to know about fees or schedule?",
        options: [
            { text: "Course Fees", next: "fees" },
            { text: "Class Schedule", next: "schedule" },
            { text: "← Back", next: "languages" }
        ]
    },
    french: {
        message: "French courses are available from A1 to C2 levels. Duration is 3-6 months per level. We prepare students for DELF/DALF exams with native French speakers as instructors.",
        options: [
            { text: "Course Fees", next: "fees" },
            { text: "Class Schedule", next: "schedule" },
            { text: "← Back", next: "languages" }
        ]
    },
    italian: {
        message: "Italian language programs cover A1 to B2 levels, 3-5 months each. Learn with passionate instructors and immerse yourself in Italian culture. CILS certification preparation available.",
        options: [
            { text: "Course Fees", next: "fees" },
            { text: "Class Schedule", next: "schedule" },
            { text: "← Back", next: "languages" }
        ]
    },
    english: {
        message: "English proficiency programs include IELTS/TOEFL preparation, Business English, and Academic English. Flexible durations from 2-12 months available.",
        options: [
            { text: "Course Fees", next: "fees" },
            { text: "Class Schedule", next: "schedule" },
            { text: "← Back", next: "languages" }
        ]
    },
    consultancy: {
        message: "We process applications for 10+ European countries including Germany, Austria, Switzerland, UK, Ireland, Netherlands, and more. What would you like to know?",
        options: [
            { text: "Countries Available", next: "countries" },
            { text: "Services Offered", next: "services" },
            { text: "Success Rate", next: "success" },
            { text: "← Back", next: "initial" }
        ]
    },
    countries: {
        message: "We process applications for: Germany 🇩🇪, Austria 🇦🇹, Switzerland 🇨🇭, Latvia 🇱🇻, Netherlands 🇳🇱, Denmark 🇩🇰, UK 🇬🇧, Ireland 🇮🇪, Italy 🇮🇹, and Luxembourg 🇱🇺. Each country has unique benefits!",
        options: [
            { text: "Why Germany?", next: "why-germany" },
            { text: "Application Process", next: "admission" },
            { text: "← Back", next: "consultancy" }
        ]
    },
    services: {
        message: "Our services include: University selection, Application support, Visa assistance, Scholarship guidance, Accommodation help, Pre-departure briefing, Post-landing support, and Career counseling.",
        options: [
            { text: "Visa Process", next: "visa" },
            { text: "Scholarships", next: "scholarships" },
            { text: "← Back", next: "consultancy" }
        ]
    },
    admission: {
        message: "The admission process typically takes 3-6 months. Steps include: 1) Profile evaluation 2) University selection 3) Document preparation 4) Application submission 5) Offer letter 6) Visa application. We guide you through each step!",
        options: [
            { text: "Required Documents", next: "documents" },
            { text: "Timeline", next: "timeline" },
            { text: "← Back", next: "initial" }
        ]
    },
    fees: {
        message: "Course fees vary by language and level. Please contact us at +91 950 22 649 33 for detailed fee structure and any ongoing offers. We also have flexible payment options!",
        options: [
            { text: "Payment Options", next: "payment" },
            { text: "Talk to Counselor", next: "contact" },
            { text: "← Back", next: "languages" }
        ]
    },
    schedule: {
        message: "We offer both weekday and weekend batches. Morning (9 AM - 12 PM), Afternoon (2 PM - 5 PM), and Evening (6 PM - 9 PM) slots available. New batches start every month!",
        options: [
            { text: "Enroll Now", next: "contact" },
            { text: "← Back", next: "languages" }
        ]
    },
    contact: {
        message: "📞 Phone: +91 950 22 649 33\n🌐 Website: www.orizen.co.in\n📍 Location: Vijayawada, Andhra Pradesh\n⏰ Hours: Mon-Sat, 9 AM - 7 PM\n\nFeel free to call or visit us!",
        options: [
            { text: "Start Over", next: "initial" }
        ]
    },
    success: {
        message: "We have successfully placed 1000+ students in top universities across Europe with a 95%+ visa success rate. Our students are currently studying in prestigious institutions worldwide!",
        options: [
            { text: "View Testimonials", next: "testimonials" },
            { text: "← Back", next: "consultancy" }
        ]
    },
    "why-germany": {
        message: "Germany offers: ✓ Low/No tuition fees at public universities ✓ World-class education ✓ Post-study work visa (18 months) ✓ Strong economy ✓ High quality of life ✓ English-taught programs available",
        options: [
            { text: "Application Process", next: "admission" },
            { text: "← Back", next: "countries" }
        ]
    },
    visa: {
        message: "Visa success depends on proper documentation and preparation. We provide: Document checklist, Application form help, Interview training, Follow-up support. Our visa success rate is 95%+!",
        options: [
            { text: "Documents Needed", next: "documents" },
            { text: "← Back", next: "services" }
        ]
    },
    documents: {
        message: "Typical documents required: 1) Academic transcripts 2) Passport 3) Language proficiency proof 4) Financial statements 5) Statement of Purpose 6) Letters of Recommendation 7) CV/Resume\n\nWe help prepare all documents!",
        options: [
            { text: "Get Started", next: "contact" },
            { text: "← Back", next: "admission" }
        ]
    },
    scholarships: {
        message: "Scholarship opportunities include: DAAD (Germany), Erasmus+, Country-specific scholarships, University merit scholarships, and need-based aid. We help identify and apply for suitable scholarships!",
        options: [
            { text: "Eligibility Criteria", next: "scholarship-eligibility" },
            { text: "← Back", next: "services" }
        ]
    },
    payment: {
        message: "We offer flexible payment options: Full payment, Installments, Early bird discounts, Group discounts. Contact us for current offers and payment plans!",
        options: [
            { text: "Current Offers", next: "contact" },
            { text: "← Back", next: "fees" }
        ]
    },
    timeline: {
        message: "Typical timeline: Month 1: Profile evaluation & university selection, Month 2-3: Application preparation & submission, Month 4: Offer letters, Month 5-6: Visa process. Start early for best results!",
        options: [
            { text: "Start My Application", next: "contact" },
            { text: "← Back", next: "admission" }
        ]
    },
    testimonials: {
        message: "Our students have been accepted to: TU Munich, RWTH Aachen, University of Stuttgart, Trinity College Dublin, and many more! Visit our office to meet alumni and hear their success stories.",
        options: [
            { text: "Book Counseling", next: "contact" },
            { text: "← Back", next: "success" }
        ]
    },
    "scholarship-eligibility": {
        message: "Scholarship eligibility varies but generally requires: Good academic record (70%+), Language proficiency, Strong statement of purpose, Sometimes research experience. We assess your eligibility free of charge!",
        options: [
            { text: "Check My Eligibility", next: "contact" },
            { text: "← Back", next: "scholarships" }
        ]
    }
};

let currentChatState = 'initial';
let chatHistory = [];

function toggleChat() {
    const chatbot = document.getElementById('chatbot');
    if (!chatbot) return;
    chatbot.classList.toggle('active');
    if (chatbot.classList.contains('active') && chatHistory.length === 0) {
        initChat();
    }
}

function initChat() {
    currentChatState = 'initial';
    chatHistory = [];
    displayMessage(chatData[currentChatState].message, 'bot');
    displayOptions(chatData[currentChatState].options);
}

function displayMessage(message, sender) {
    const messagesDiv = document.getElementById('chatMessages');
    if (!messagesDiv) return;
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${sender}`;
    messageDiv.textContent = message;
    messagesDiv.appendChild(messageDiv);
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
    chatHistory.push({ message, sender });
}

function displayOptions(options) {
    const optionsDiv = document.getElementById('chatOptions');
    if (!optionsDiv) return;
    optionsDiv.innerHTML = '';
    options.forEach(option => {
        const btn = document.createElement('button');
        btn.className = 'chat-option';
        btn.textContent = option.text;
        btn.onclick = () => handleOption(option);
        optionsDiv.appendChild(btn);
    });
}

function handleOption(option) {
    displayMessage(option.text, 'user');
    currentChatState = option.next;
    setTimeout(() => {
        const state = chatData[currentChatState];
        if (!state) return;
        displayMessage(state.message, 'bot');
        displayOptions(state.options);
    }, 500);
}

// Smooth scroll for internal anchors on same page
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Add simple reveal animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.info-card, .service-card, .country-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'all 0.6s ease';
    observer.observe(el);
});

