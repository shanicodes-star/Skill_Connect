// Messaging UI Component
function initializeMessagingUI() {
    const messagingContainer = document.getElementById('messagingContainer');
    
    if (!messagingContainer) return;
    
    // Sample conversation data
    const conversations = [
        {
            id: 1,
            sellerName: 'John Designer',
            sellerAvatar: 'https://randomuser.me/api/portraits/men/32.jpg',
            lastMessage: 'Sure, I can make those changes for you.',
            timestamp: '10:45 AM',
            unread: true
        },
        {
            id: 2,
            sellerName: 'Sarah Developer',
            sellerAvatar: 'https://randomuser.me/api/portraits/women/44.jpg',
            lastMessage: 'The website is ready for review.',
            timestamp: 'Yesterday',
            unread: false
        },
        {
            id: 3,
            sellerName: 'Michael Writer',
            sellerAvatar: 'https://randomuser.me/api/portraits/men/67.jpg',
            lastMessage: 'I\'ve sent the first draft of the article.',
            timestamp: '2 days ago',
            unread: false
        },
        {
            id: 4,
            sellerName: 'Lisa Marketer',
            sellerAvatar: 'https://randomuser.me/api/portraits/women/68.jpg',
            lastMessage: 'Your social media campaign is performing well.',
            timestamp: '3 days ago',
            unread: true
        }
    ];
    
    // Create messaging UI
    messagingContainer.innerHTML = `
        <div class="messaging-container">
            <div class="conversations-sidebar">
                <div class="conversations-header">
                    <h3>Messages</h3>
                </div>
                <ul class="conversation-list" id="conversationList">
                    ${conversations.map(conversation => `
                        <li class="conversation-item" data-id="${conversation.id}">
                            <img src="${conversation.sellerAvatar}" alt="${conversation.sellerName}" class="conversation-avatar">
                            <div class="conversation-info">
                                <h4>${conversation.sellerName} ${conversation.unread ? '<span class="unread-badge"></span>' : ''}</h4>
                                <p>${conversation.lastMessage}</p>
                            </div>
                            <div class="conversation-time">${conversation.timestamp}</div>
                        </li>
                    `).join('')}
                </ul>
            </div>
            
            <div class="chat-main">
                <div class="chat-header">
                    <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="John Designer" class="chat-header-avatar">
                    <div class="chat-header-info">
                        <h4>John Designer</h4>
                        <p>Usually responds within 1 hour</p>
                    </div>
                </div>
                
                <div class="chat-messages" id="chatMessages">
                    <!-- Messages will be loaded here -->
                </div>
                
                <div class="chat-input">
                    <textarea placeholder="Type your message here..." rows="3"></textarea>
                    <button>Send</button>
                </div>
            </div>
        </div>
    `;
}