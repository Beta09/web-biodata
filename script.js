// DOM Elements
const settingsModal = document.getElementById('settings-modal');
const settingsLink = document.getElementById('settings-link');
const loginForm = document.getElementById('login-form');
const settingsForm = document.getElementById('settings-form');
const loginBtn = document.getElementById('login-btn');
const logoutBtn = document.getElementById('logout-btn');
const saveBtn = document.getElementById('save-btn');
const errorMessage = document.getElementById('error-message');

// Content elements to update
const firstNameElement = document.querySelector('.first-name');
const lastNameElement = document.querySelector('.last-name');
const heroDescriptionElement = document.querySelector('.hero-description');
const learnMoreBtn = document.getElementById('learn-more-btn');
const aboutSubtitleElement = document.querySelector('.sub-title');
const aboutDescriptionElement = document.querySelector('.about-description');
const statElements = document.querySelectorAll('.stat-box');
const followBtns = [
    document.getElementById('tiktok-btn'),
    document.getElementById('instagram-btn'),
    document.getElementById('strava-btn')
];

// Admin credentials
const ADMIN_USER = 'admin';
const ADMIN_PASS = 'adm2009';

// Show settings modal
settingsLink.addEventListener('click', (e) => {
    e.preventDefault();
    settingsModal.style.display = 'flex';
});

// Login functionality
loginBtn.addEventListener('click', () => {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    if (username === ADMIN_USER && password === ADMIN_PASS) {
        // Hide login form and show settings form
        loginForm.style.display = 'none';
        settingsForm.style.display = 'block';
        
        // Load current content into form fields
        loadCurrentContent();
        
        // Clear error message
        errorMessage.textContent = '';
        document.getElementById('username').value = '';
        document.getElementById('password').value = '';
    } else {
        errorMessage.textContent = 'Invalid username or password';
    }
});

// Logout functionality
logoutBtn.addEventListener('click', () => {
    // Show login form and hide settings form
    loginForm.style.display = 'block';
    settingsForm.style.display = 'none';
});

// Save changes functionality
saveBtn.addEventListener('click', () => {
    // Get form values
    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const heroDesc = document.getElementById('hero-description').value;
    const learnMoreLabel = document.getElementById('learn-more-label').value;
    const aboutSubtitle = document.getElementById('about-subtitle').value;
    const aboutDesc = document.getElementById('about-description').value;
    const stat1Value = document.getElementById('stat1-value').value;
    const stat1Label = document.getElementById('stat1-label').value;
    const stat2Value = document.getElementById('stat2-value').value;
    const stat2Label = document.getElementById('stat2-label').value;
    const stat3Value = document.getElementById('stat3-value').value;
    const stat3Label = document.getElementById('stat3-label').value;
    const stat4Value = document.getElementById('stat4-value').value;
    const stat4Label = document.getElementById('stat4-label').value;
    const tiktokUrl = document.getElementById('tiktok-url').value;
    const instagramUrl = document.getElementById('instagram-url').value;
    const stravaUrl = document.getElementById('strava-url').value;
    
    // Update content on the page
    firstNameElement.textContent = firstName;
    lastNameElement.textContent = lastName;
    heroDescriptionElement.textContent = heroDesc;
    learnMoreBtn.textContent = learnMoreLabel;
    aboutSubtitleElement.textContent = aboutSubtitle;
    aboutDescriptionElement.textContent = aboutDesc;
    
    // Update statistics
    statElements[0].querySelector('h3').textContent = stat1Value;
    statElements[0].querySelector('p').textContent = stat1Label;
    statElements[1].querySelector('h3').textContent = stat2Value;
    statElements[1].querySelector('p').textContent = stat2Label;
    statElements[2].querySelector('h3').textContent = stat3Value;
    statElements[2].querySelector('p').textContent = stat3Label;
    statElements[3].querySelector('h3').textContent = stat4Value;
    statElements[3].querySelector('p').textContent = stat4Label;
    
        // Store URLs in data attributes and use onclick to navigate
    followBtns[0].dataset.url = tiktokUrl;
    followBtns[1].dataset.url = instagramUrl;
    followBtns[2].dataset.url = stravaUrl;
    
    // Update onclick handlers
    followBtns[0].onclick = () => window.open(tiktokUrl, '_blank');
    followBtns[1].onclick = () => window.open(instagramUrl, '_blank');
    followBtns[2].onclick = () => window.open(stravaUrl, '_blank');
    
    // Show success message
    alert('Changes saved successfully!');
});

// Initially set default URLs for social media buttons
document.addEventListener('DOMContentLoaded', () => {
    // Set default social media URLs (these can be changed by admin)
    followBtns[0].dataset.url = 'https://www.tiktok.com/@default';  // TikTok
    followBtns[1].dataset.url = 'https://www.instagram.com/default';  // Instagram
    followBtns[2].dataset.url = 'https://www.strava.com/default';  // Strava
    
    // Set initial onclick handlers
    followBtns[0].onclick = () => window.open(followBtns[0].dataset.url, '_blank');
    followBtns[1].onclick = () => window.open(followBtns[1].dataset.url, '_blank');
    followBtns[2].onclick = () => window.open(followBtns[2].dataset.url, '_blank');
});

// Load current content into form fields
function loadCurrentContent() {
    // Set form values to current content
    document.getElementById('first-name').value = firstNameElement.textContent;
    document.getElementById('last-name').value = lastNameElement.textContent;
    document.getElementById('hero-description').value = heroDescriptionElement.textContent;
    document.getElementById('learn-more-label').value = learnMoreBtn.textContent;
    document.getElementById('about-subtitle').value = aboutSubtitleElement.textContent;
    document.getElementById('about-description').value = aboutDescriptionElement.textContent;
    
    // Set stat values
    document.getElementById('stat1-value').value = statElements[0].querySelector('h3').textContent;
    document.getElementById('stat1-label').value = statElements[0].querySelector('p').textContent;
    document.getElementById('stat2-value').value = statElements[1].querySelector('h3').textContent;
    document.getElementById('stat2-label').value = statElements[1].querySelector('p').textContent;
    document.getElementById('stat3-value').value = statElements[2].querySelector('h3').textContent;
    document.getElementById('stat3-label').value = statElements[2].querySelector('p').textContent;
    document.getElementById('stat4-value').value = statElements[3].querySelector('h3').textContent;
    document.getElementById('stat4-label').value = statElements[3].querySelector('p').textContent;
    
    // For social links, we'll keep placeholder URLs for now
    // In a real implementation, you'd want to store these in localStorage or a backend
}

// Close modal when clicking outside of it
window.addEventListener('click', (e) => {
    if (e.target === settingsModal) {
        settingsModal.style.display = 'none';
    }
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && settingsModal.style.display === 'flex') {
        settingsModal.style.display = 'none';
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId !== '#settings') {  // Don't interfere with settings link
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,  // Account for fixed header
                    behavior: 'smooth'
                });
            }
        }
    });
});

// Simple animation for stats on scroll
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.stat-box').forEach(stat => {
    stat.style.opacity = '0';
    stat.style.transform = 'translateY(20px)';
    stat.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(stat);
});