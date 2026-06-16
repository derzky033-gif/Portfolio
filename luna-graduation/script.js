// Get elements
const bookContainer = document.getElementById('bookContainer');
const messageContainer = document.getElementById('messageContainer');
const openBtn = document.getElementById('openBtn');
const closeBtn = document.getElementById('closeBtn');
const celebrateBtn = document.getElementById('celebrateBtn');
const scrollTopBtn = document.getElementById('scrollTopBtn');
const confettiContainer = document.getElementById('confettiContainer');

// Open Book Function
openBtn.addEventListener('click', () => {
    bookContainer.classList.add('hidden');
    messageContainer.classList.remove('hidden');
    messageContainer.scrollTop = 0;
});

// Close Book Function
closeBtn.addEventListener('click', () => {
    messageContainer.classList.add('hidden');
    bookContainer.classList.remove('hidden');
    confettiContainer.innerHTML = '';
});

// Celebrate Function - Create Confetti
function createConfetti() {
    const confettiPieces = 50;
    const colors = ['#7c3aed', '#3b82f6', '#a78bfa', '#60a5fa', '#ec4899', '#fbbf24', '#34d399'];
    
    for (let i = 0; i < confettiPieces; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.animationDuration = (Math.random() * 3 + 2) + 's';
        confetti.style.animationDelay = Math.random() * 0.5 + 's';
        confettiContainer.appendChild(confetti);
        
        setTimeout(() => confetti.remove(), 5000);
    }
}

celebrate Btn.addEventListener('click', () => {
    createConfetti();
    // Trigger celebration animation
    celebrateBtn.style.transform = 'scale(0.95)';
    setTimeout(() => {
        celebrateBtn.style.transform = 'scale(1)';
    }, 100);
});

// Scroll to Top Function
scrollTopBtn.addEventListener('click', () => {
    messageContainer.scrollTop = 0;
});

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
    // Escape to close
    if (e.key === 'Escape' && !messageContainer.classList.contains('hidden')) {
        closeBtn.click();
    }
});

// Add smooth scroll behavior
document.documentElement.style.scrollBehavior = 'smooth';

// Log initialization
console.log('🎓 Luna\'s Graduation Website Loaded! Celebrate! 🎉');