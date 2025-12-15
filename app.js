// Main Application JavaScript

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initializeGigListings();
    initializeSellerProfiles();
    initializeReviewsRatings();
    initializeMessagingUI();
    initializeOrderTracking();
    
    // Add event listeners
    setupEventListeners();
    
    // Load initial data
    loadInitialData();
});

// Set up event listeners for the application
function setupEventListeners() {
    // Search functionality
    const searchBtn = document.querySelector('.search-btn');
    const searchInput = document.querySelector('.search-input');
    
    if (searchBtn) {
        searchBtn.addEventListener('click', performSearch);
    }
    
    if (searchInput) {
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                performSearch();
            }
        });
    }
    
    // Filter buttons
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            
            // Filter gigs based on category
            const category = this.textContent;
            filterGigsByCategory(category);
        });
    });
    
    // Conversation items
    const conversationItems = document.querySelectorAll('.conversation-item');
    conversationItems.forEach(item => {
        item.addEventListener('click', function() {
            // Remove active class from all items
            conversationItems.forEach(i => i.classList.remove('active'));
            // Add active class to clicked item
            this.classList.add('active');
            
            // Load conversation messages
            const sellerName = this.querySelector('h4').textContent;
            loadConversation(sellerName);
        });
    });
    
    // Send message button
    const sendMessageBtn = document.querySelector('.chat-input button');
    if (sendMessageBtn) {
        sendMessageBtn.addEventListener('click', sendMessage);
    }
}

// Perform search function
function performSearch() {
    const searchTerm = document.querySelector('.search-input').value.trim();
    if (searchTerm) {
        alert(`Searching for: "${searchTerm}"`);
        // In a real app, you would make an API call here
        // For now, we'll just filter the gigs
        filterGigsBySearch(searchTerm);
    }
}

// Filter gigs by category
function filterGigsByCategory(category) {
    const gigCards = document.querySelectorAll('.gig-card');
    
    gigCards.forEach(card => {
        const gigCategory = card.getAttribute('data-category');
        
        if (category === 'All Categories' || gigCategory === category) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// Filter gigs by search term
function filterGigsBySearch(searchTerm) {
    const gigCards = document.querySelectorAll('.gig-card');
    const searchLower = searchTerm.toLowerCase();
    
    gigCards.forEach(card => {
        const gigTitle = card.querySelector('.gig-title').textContent.toLowerCase();
        const gigSeller = card.querySelector('.gig-seller span').textContent.toLowerCase();
        
        if (gigTitle.includes(searchLower) || gigSeller.includes(searchLower)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// Load conversation messages
function loadConversation(sellerName) {
    const chatHeaderName = document.querySelector('.chat-header-info h4');
    const chatMessages = document.querySelector('.chat-messages');
    
    if (chatHeaderName) {
        chatHeaderName.textContent = sellerName;
    }
    
    // Simulate loading messages
    if (chatMessages) {
        chatMessages.innerHTML = '';
        
        // Add sample messages
        const messages = [
            { sender: 'seller', text: `Hi there! Thanks for your interest in my ${sellerName} service.`, time: '10:30 AM' },
            { sender: 'user', text: 'Hello! I saw your portfolio and I\'m interested in your work.', time: '10:35 AM' },
            { sender: 'seller', text: 'Great! Could you tell me more about your project?', time: '10:40 AM' },
            { sender: 'user', text: 'I need a logo for my new startup. Do you have experience with tech companies?', time: '10:45 AM' }
        ];
        
        messages.forEach(msg => {
            const messageDiv = document.createElement('div');
            messageDiv.className = `message ${msg.sender === 'user' ? 'sent' : 'received'}`;
            messageDiv.innerHTML = `
                <div>${msg.text}</div>
                <div class="message-time">${msg.time}</div>
            `;
            chatMessages.appendChild(messageDiv);
        });
        
        // Scroll to bottom
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
}

// Send message function
function sendMessage() {
    const chatInput = document.querySelector('.chat-input textarea');
    const chatMessages = document.querySelector('.chat-messages');
    
    if (chatInput.value.trim()) {
        // Create new message
        const messageDiv = document.createElement('div');
        messageDiv.className = 'message sent';
        
        const now = new Date();
        const timeString = `${now.getHours()}:${now.getMinutes().toString().padStart(2, '0')}`;
        
        messageDiv.innerHTML = `
            <div>${chatInput.value}</div>
            <div class="message-time">${timeString}</div>
        `;
        
        chatMessages.appendChild(messageDiv);
        
        // Clear input
        chatInput.value = '';
        
        // Scroll to bottom
        chatMessages.scrollTop = chatMessages.scrollHeight;
        
        // Simulate reply after 1 second
        setTimeout(() => {
            const replyDiv = document.createElement('div');
            replyDiv.className = 'message received';
            
            const replyTime = new Date(now.getTime() + 1000);
            const replyTimeString = `${replyTime.getHours()}:${replyTime.getMinutes().toString().padStart(2, '0')}`;
            
            replyDiv.innerHTML = `
                <div>Thanks for your message! I'll get back to you with more details soon.</div>
                <div class="message-time">${replyTimeString}</div>
            `;
            
            chatMessages.appendChild(replyDiv);
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }, 1000);
    }
}

// Load initial data
function loadInitialData() {
    // Set first conversation as active
    const firstConversation = document.querySelector('.conversation-item');
    if (firstConversation) {
        firstConversation.classList.add('active');
        
        // Load its messages
        const sellerName = firstConversation.querySelector('h4').textContent;
        loadConversation(sellerName);
    }
}