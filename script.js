// User progress data
let userStats = {
    completedSimulations: 0,
    correctAnswers: 0,
    totalAnswers: 0,
    currentStreak: 0,
    level: 1,
    xp: 0
};

// Simulation data with 3 simulations per difficulty level
const simulations = {
    // EASY LEVEL
    'email-banking': {
        title: 'Banking Email Phish',
        content: `
            <div class="phishing-email">
                <div class="email-header">
                    <div class="email-from">From: security@bankofamerica-alerts.com</div>
                    <div class="email-subject">Subject: URGENT: Your Account Has Been Compromised</div>
                </div>
                <div class="email-body">
                    <p>Dear Valued Customer,</p>
                    <p>We have detected unusual activity on your account. For your security, we have temporarily suspended your account access.</p>
                    <p>To restore full access to your account, please verify your identity immediately by clicking the link below:</p>
                    <p><a href="#" class="suspicious-link">https://bankofamerica-secure-verification.net/login</a></p>
                    <p>Failure to verify within 24 hours will result in permanent account closure.</p>
                    <p>Thank you for banking with us.</p>
                    <p>Bank of America Security Team</p>
                </div>
            </div>
        `,
        question: 'What makes this email suspicious?',
        options: [
            'The sender domain doesn\'t match the official bank domain',
            'The urgent threatening language creates false pressure',
            'Banks don\'t ask for verification via email links',
            'All of the above'
        ],
        correct: 3,
        explanation: 'This email shows multiple red flags: suspicious sender domain (bankofamerica-alerts.com vs bankofamerica.com), urgent threatening language, and requesting sensitive verification via email - all classic phishing indicators.'
    },
    'social-lottery': {
        title: 'Social Media Lottery',
        content: `
            <div class="social-post">
                <h3>🎉 CONGRATULATIONS! 🎉</h3>
                <p><strong>Facebook Official Lottery</strong></p>
                <p>You have been selected as a winner in our monthly Facebook lottery draw!</p>
                <p><strong>Prize: $50,000 USD</strong></p>
                <p>To claim your prize, please provide:</p>
                <ul>
                    <li>Full name and address</li>
                    <li>Phone number</li>
                    <li>Copy of ID</li>
                    <li>Bank account details for transfer</li>
                </ul>
                <p>Contact our claims agent: claims@facebook-lottery.com</p>
                <p><strong>Claim within 48 hours or prize will be forfeited!</strong></p>
            </div>
        `,
        question: 'Why is this social media lottery post a scam?',
        options: [
            'Facebook doesn\'t run official lotteries',
            'Legitimate companies don\'t ask for bank details via email',
            'The urgent deadline creates false pressure to act quickly',
            'All of the above'
        ],
        correct: 3,
        explanation: 'This is a classic lottery scam. Facebook doesn\'t run lotteries, legitimate companies never ask for bank details via email, and the urgent deadline is designed to prevent you from thinking critically about the request.'
    },
    'email-invoice': {
        title: 'Fake Invoice Email',
        content: `
            <div class="invoice-email">
                <div class="email-header">
                    <div class="email-from">From: billing@paypal-invoices.net</div>
                    <div class="email-subject">Subject: Payment Required - Invoice #PP-2024-8291</div>
                </div>
                <div class="email-body">
                    <p>Hello,</p>
                    <p>You have an outstanding invoice that requires immediate payment:</p>
                    <p><strong>Invoice #:</strong> PP-2024-8291<br>
                    <strong>Amount:</strong> $299.99<br>
                    <strong>Service:</strong> Website Design Services<br>
                    <strong>Due Date:</strong> Overdue</p>
                    <p>Please pay immediately to avoid additional fees and legal action.</p>
                    <p><a href="#" class="suspicious-link">Click here to pay now via PayPal</a></p>
                    <p>If you believe this is an error, reply to this email immediately.</p>
                    <p>PayPal Billing Department</p>
                </div>
            </div>
        `,
        question: 'What indicates this invoice email is fraudulent?',
        options: [
            'The sender domain is not the official PayPal domain',
            'Legitimate invoices don\'t threaten legal action',
            'You didn\'t order any website design services',
            'All of the above'
        ],
        correct: 3,
        explanation: 'Multiple red flags: fake domain (paypal-invoices.net vs paypal.com), threatening language about legal action, and services you never ordered. Always verify invoices through official channels.'
    },

    // MEDIUM LEVEL
    'sms-delivery': {
        title: 'Package Delivery SMS',
        content: `
            <div class="sms-message">
                <p><strong>SMS from: UPS-Delivery</strong></p>
                <p>Package delivery failed due to incorrect address. Your package is being returned to sender.</p>
                <p>Update your address and reschedule delivery: http://ups-track.net/RE3847291</p>
                <p>Package will be returned in 24 hours if not rescheduled.</p>
                <p>Reply STOP to opt out</p>
            </div>
        `,
        question: 'What should you do with this text message?',
        options: [
            'Click the link immediately to reschedule delivery',
            'Reply STOP to opt out of future messages',
            'Verify through the official UPS website or app instead',
            'Call the phone number to confirm'
        ],
        correct: 2,
        explanation: 'Never click suspicious links in text messages. Always verify delivery information through official websites or apps. The domain "ups-track.net" is not UPS\'s official domain (ups.com).'
    },
    'website-login': {
        title: 'Fake Login Page',
        content: `
            <div class="fake-website">
                <div class="fake-header">
                    <h2>facebook</h2>
                </div>
                <div class="fake-body">
                    <h3>Log into Facebook</h3>
                    <form>
                        <input type="email" placeholder="Email address or phone number" class="fake-input">
                        <input type="password" placeholder="Password" class="fake-input">
                        <button type="button" class="fake-button">Log In</button>
                    </form>
                    <p style="text-align: center; margin: 16px 0;"><a href="#" class="fake-link">Forgotten account?</a></p>
                    <hr style="margin: 16px 0;">
                    <p style="text-align: center;"><button style="background: #42b883; color: white; border: none; padding: 12px 24px; border-radius: 4px;">Create new account</button></p>
                    <p style="font-size: 12px; color: #666; margin-top: 16px;"><strong>URL: https://facebook-login-secure.net/login</strong></p>
                </div>
            </div>
        `,
        question: 'How can you tell this Facebook login page is fake?',
        options: [
            'The URL domain is not facebook.com',
            'The design looks slightly different from the real Facebook',
            'It appeared after clicking a suspicious link',
            'All of the above'
        ],
        correct: 3,
        explanation: 'This fake login page has several red flags: wrong domain name (facebook-login-secure.net instead of facebook.com), reached via suspicious link, and subtle design differences. Always check the URL before entering credentials.'
    },
    'support-call': {
        title: 'Tech Support Scam',
        content: `
            <div class="scam-popup">
                <h2>⚠️ SECURITY ALERT ⚠️</h2>
                <h3>Your Computer Has Been Infected!</h3>
                <p>Multiple viruses detected on your system!</p>
                <p>Your personal data is at risk!</p>
                <div class="popup-content">
                    <p><strong>Threats Found:</strong></p>
                    <ul>
                        <li>Trojan.Win32.Generic</li>
                        <li>Malware.Suspicious.Activity</li>
                        <li>Adware.Browser.Hijacker</li>
                    </ul>
                </div>
                <p class="popup-phone">Call immediately: 1-800-555-SCAM</p>
                <p>Microsoft Certified Technicians Available 24/7</p>
                <p style="font-size: 12px;">Do not shut down your computer or you may lose all data!</p>
            </div>
        `,
        question: 'What should you do when you see this popup?',
        options: [
            'Call the number immediately to fix the problem',
            'Close the popup and run your legitimate antivirus software',
            'Shut down your computer as instructed',
            'Click OK to scan for viruses'
        ],
        correct: 1,
        explanation: 'This is a fake tech support scam popup. Close it immediately and run your legitimate antivirus. Real antivirus software doesn\'t display popups with phone numbers, and Microsoft doesn\'t provide unsolicited phone support.'
    },

    // HARD LEVEL
    'email-ceo': {
        title: 'CEO Impersonation',
        content: `
            <div class="phishing-email">
                <div class="email-header">
                    <div class="email-from">From: john.smith@company.com</div>
                    <div class="email-subject">Subject: Urgent Wire Transfer Required</div>
                </div>
                <div class="email-body">
                    <p>Hi,</p>
                    <p>I'm currently in meetings with potential investors and need you to process an urgent wire transfer.</p>
                    <p><strong>Amount:</strong> $45,000<br>
                    <strong>Recipient:</strong> Global Ventures LLC<br>
                    <strong>Account:</strong> 4847291847 (Routing: 021000021)</p>
                    <p>This is time-sensitive for a major deal. Please process immediately and confirm once complete.</p>
                    <p>I'll be in meetings all day, so handle this discreetly. Don't mention this to anyone else yet.</p>
                    <p>Best regards,<br>John Smith<br>CEO</p>
                </div>
            </div>
        `,
        question: 'What makes this CEO email suspicious?',
        options: [
            'CEOs typically don\'t handle wire transfers personally',
            'The request bypasses normal financial approval processes',
            'The tone is unusually informal and urgent',
            'All of the above'
        ],
        correct: 3,
        explanation: 'This is a Business Email Compromise (BEC) attack. Red flags include bypassing normal procedures, unusual urgency, informal tone, requesting secrecy, and the CEO claiming unavailability to verify the request.'
    },
    'spear-phishing': {
        title: 'Spear Phishing Attack',
        content: `
            <div class="phishing-email">
                <div class="email-header">
                    <div class="email-from">From: hr@yourcompany.com</div>
                    <div class="email-subject">Subject: Action Required: Update Your Benefits for 2024</div>
                </div>
                <div class="email-body">
                    <p>Dear Sarah,</p>
                    <p>As we discussed in last week's meeting about the new healthcare options, please update your benefits selection for 2024.</p>
                    <p>Your current selection:</p>
                    <ul>
                        <li>Health Plan: Premium PPO</li>
                        <li>Dental: Basic Coverage</li>
                        <li>401k Contribution: 6%</li>
                    </ul>
                    <p>Please log in to make any changes before the December 15th deadline:</p>
                    <p><a href="#" class="suspicious-link">https://benefits.yourcompany-portal.net/login</a></p>
                    <p>Contact me if you have any questions about the new options we reviewed.</p>
                    <p>Best regards,<br>Jennifer Martinez<br>HR Benefits Coordinator</p>
                </div>
            </div>
        `,
        question: 'Why is this personalized email still dangerous?',
        options: [
            'The URL domain doesn\'t match the company\'s official domain',
            'Personal details can be gathered from social media or data breaches',
            'Legitimate HR communications use official company portals',
            'All of the above'
        ],
        correct: 3,
        explanation: 'This spear phishing attack uses personal information to appear legitimate, but the domain is fake (yourcompany-portal.net vs your actual company domain). Attackers gather personal details from social media, data breaches, and public sources to make attacks convincing.'
    },
    'website-clone': {
        title: 'Perfect Website Clone',
        content: `
            <div class="bank-website">
                <div class="bank-header">
                    <div>
                        <h2>🏦 National Bank</h2>
                    </div>
                    <nav class="bank-nav">
                        <a href="#">Personal</a>
                        <a href="#">Business</a>
                        <a href="#">Loans</a>
                        <a href="#">Investment</a>
                    </nav>
                </div>
                <div class="bank-body">
                    <div class="login-form">
                        <h3>Secure Online Banking</h3>
                        <form>
                            <input type="text" placeholder="User ID" class="fake-input">
                            <input type="password" placeholder="Password" class="fake-input">
                            <button type="button" class="fake-button">Sign In</button>
                        </form>
                        <p style="font-size: 12px; margin-top: 16px;">
                            <strong>URL: https://nationaI-bank-secure.com/login</strong><br>
                            <span style="color: #666;">Notice: This site uses 256-bit SSL encryption</span>
                        </p>
                    </div>
                    <div style="margin-top: 30px; padding: 16px; background: #f0f8ff; border-radius: 4px;">
                        <h4>🔒 Security Notice</h4>
                        <p>We've upgraded our security system. Please log in to verify your account and avoid temporary restrictions.</p>
                    </div>
                </div>
            </div>
        `,
        question: 'What subtle clue reveals this bank website is fake?',
        options: [
            'The URL uses a capital "I" instead of lowercase "l" in "national"',
            'Real banks don\'t ask users to verify accounts after "upgrades"',
            'The design and security messaging looks too perfect',
            'All of the above'
        ],
        correct: 3,
        explanation: 'This sophisticated attack uses multiple deception techniques: homograph attack (nationaI vs national), fake security messaging, and an urgent call-to-action. The URL uses a capital "I" that looks like lowercase "l" - always carefully examine URLs character by character.'
    }
};

let currentSimulation = null;
let currentQuestion = null;

// Initialize the app
document.addEventListener('DOMContentLoaded', function() {
    loadUserStats();
    updateDashboard();
    setupEventListeners();
});

function setupEventListeners() {
    // Tab navigation
    document.querySelectorAll('.nav-tab').forEach(tab => {
        tab.addEventListener('click', function() {
            const targetTab = this.getAttribute('data-tab');
            showTab(targetTab);
        });
    });

    // Simulation cards
    document.querySelectorAll('.simulation-card').forEach(card => {
        card.addEventListener('click', function() {
            const simulationId = this.getAttribute('data-simulation');
            startSimulation(simulationId);
        });
    });

    // Modal close events
    document.getElementById('simulationModal').addEventListener('click', function(e) {
        if (e.target === this) {
            closeModal();
        }
    });

    // Close button
    document.getElementById('closeModalBtn').addEventListener('click', closeModal);

    // Reset progress button (FIXED)
    document.getElementById('resetProgressBtn').addEventListener('click', resetProgress);

    // Submit answer button
    document.getElementById('submitAnswer').addEventListener('click', submitAnswer);

    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && document.getElementById('simulationModal').style.display === 'block') {
            closeModal();
        }
    });
}

function showTab(tabName) {
    // Update active tab
    document.querySelectorAll('.nav-tab').forEach(tab => {
        tab.classList.remove('active');
    });
    document.querySelector(`[data-tab="${tabName}"]`).classList.add('active');

    // Show content section
    document.querySelectorAll('.content-section').forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById(tabName).classList.add('active');

    if (tabName === 'profile') {
        updateProfile();
    }
}

function startSimulation(simulationId) {
    currentSimulation = simulations[simulationId];
    if (!currentSimulation) return;

    document.getElementById('modalTitle').textContent = currentSimulation.title;
    document.getElementById('simulationContent').innerHTML = currentSimulation.content;
    document.getElementById('simProgress').style.width = '50%';
    document.getElementById('quizSection').style.display = 'none';
    
    // Show the modal
    document.getElementById('simulationModal').style.display = 'block';
    document.body.style.overflow = 'hidden';

    // Show quiz after a delay
    setTimeout(() => {
        showQuiz();
    }, 3000);
}

function showQuiz() {
    if (!currentSimulation) return;

    document.getElementById('simProgress').style.width = '75%';
    document.getElementById('quizSection').style.display = 'block';
    document.getElementById('questionText').textContent = currentSimulation.question;

    const optionsContainer = document.getElementById('optionsContainer');
    optionsContainer.innerHTML = '';

    currentSimulation.options.forEach((option, index) => {
        const optionDiv = document.createElement('div');
        optionDiv.className = 'option';
        optionDiv.textContent = option;
        optionDiv.setAttribute('data-index', index);
        
        optionDiv.addEventListener('click', function() {
            // Remove previous selection
            document.querySelectorAll('.option').forEach(opt => {
                opt.classList.remove('selected');
            });
            
            // Select this option
            this.classList.add('selected');
            currentQuestion = index;
            document.getElementById('submitAnswer').disabled = false;
        });

        optionsContainer.appendChild(optionDiv);
    });

    // Reset quiz state
    document.getElementById('submitAnswer').disabled = true;
    document.getElementById('submitAnswer').style.display = 'block';
    document.getElementById('feedback').style.display = 'none';
    currentQuestion = null;
}

function submitAnswer() {
    if (currentQuestion === null || !currentSimulation) return;

    const isCorrect = currentQuestion === currentSimulation.correct;
    const feedback = document.getElementById('feedback');
    
    // Update user stats
    userStats.totalAnswers++;
    if (isCorrect) {
        userStats.correctAnswers++;
        userStats.currentStreak++;
        userStats.xp += 100;
    } else {
        userStats.currentStreak = 0;
        userStats.xp += 25;
    }

    // Show feedback
    feedback.style.display = 'block';
    feedback.className = `feedback ${isCorrect ? 'correct' : 'incorrect'}`;
    feedback.innerHTML = `
        <h4>${isCorrect ? '✅ Correct!' : '❌ Incorrect'}</h4>
        <p>${currentSimulation.explanation}</p>
    `;

    // Update option colors
    document.querySelectorAll('.option').forEach((option, index) => {
        if (index === currentSimulation.correct) {
            option.classList.add('correct');
        } else if (index === currentQuestion && !isCorrect) {
            option.classList.add('incorrect');
        }
        option.style.pointerEvents = 'none';
    });

    // Complete simulation
    document.getElementById('simProgress').style.width = '100%';
    document.getElementById('submitAnswer').style.display = 'none';
    
    userStats.completedSimulations++;
    
    // Level up logic
    if (userStats.xp >= userStats.level * 500) {
        userStats.level++;
        showLevelUpNotification();
    }

    saveUserStats();
    updateDashboard();

    // Auto close after delay
    setTimeout(() => {
        closeModal();
    }, 5000);
}

function showLevelUpNotification() {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: linear-gradient(45deg, var(--primary-blue), var(--primary-blue-dark));
        color: white;
        padding: 20px 40px;
        border-radius: 12px;
        font-size: 1.5rem;
        font-weight: bold;
        z-index: 10001;
        text-align: center;
        box-shadow: 0 20px 40px rgba(0, 212, 255, 0.3);
        animation: levelUpPulse 0.5s ease-in-out;
    `;
    notification.innerHTML = `🎉 Level Up!<br>You are now Level ${userStats.level}!`;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

function closeModal() {
    document.getElementById('simulationModal').style.display = 'none';
    document.body.style.overflow = 'auto';
    currentSimulation = null;
    currentQuestion = null;
}

function updateDashboard() {
    document.getElementById('completedSims').textContent = userStats.completedSimulations;
    
    const accuracy = userStats.totalAnswers > 0 
        ? Math.round((userStats.correctAnswers / userStats.totalAnswers) * 100) 
        : 0;
    document.getElementById('accuracyRate').textContent = accuracy + '%';
    
    document.getElementById('currentStreak').textContent = userStats.currentStreak;
    
    let skillLevel = 'Beginner';
    if (userStats.level >= 10) skillLevel = 'Expert';
    else if (userStats.level >= 5) skillLevel = 'Advanced';
    else if (userStats.level >= 3) skillLevel = 'Intermediate';
    
    document.getElementById('skillLevel').textContent = skillLevel;
}

function updateProfile() {
    document.getElementById('profileLevel').textContent = userStats.level;
    document.getElementById('profileXP').textContent = userStats.xp;
    
    const badges = Math.floor(userStats.completedSimulations / 2);
    document.getElementById('profileBadges').textContent = badges;
    
    const nextLevelXP = userStats.level * 500;
    const currentLevelXP = (userStats.level - 1) * 500;
    const progress = userStats.xp > currentLevelXP ? 
        ((userStats.xp - currentLevelXP) / (nextLevelXP - currentLevelXP)) * 100 : 0;
    document.getElementById('levelProgress').style.width = Math.min(progress, 100) + '%';
}

function resetProgress() {
    if (confirm('Are you sure you want to reset all progress? This cannot be undone.')) {
        userStats = {
            completedSimulations: 0,
            correctAnswers: 0,
            totalAnswers: 0,
            currentStreak: 0,
            level: 1,
            xp: 0
        };
        saveUserStats();
        updateDashboard();
        updateProfile();
        alert('Progress has been reset successfully!');
    }
}

function saveUserStats() {
    // In a real app, this would save to a backend or localStorage
    localStorage.setItem('phishguard-stats', JSON.stringify(userStats));
    console.log('User stats saved:', userStats);
}

function loadUserStats() {
    // In a real app, this would load from a backend or localStorage
    const saved = localStorage.getItem('phishguard-stats');
    if (saved) {
        userStats = JSON.parse(saved);
    }
    console.log('User stats loaded:', userStats);
}

// Add interactive elements to suspicious links
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('suspicious-link')) {
        e.preventDefault();
        alert('🚨 Good catch! You clicked on a suspicious link. In a real phishing attack, this could compromise your security. Always verify URLs before clicking!');
    }
});