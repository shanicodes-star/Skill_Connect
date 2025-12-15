// Seller Profiles Component
function initializeSellerProfiles() {
    const sellersContainer = document.getElementById('sellersContainer');
    
    if (!sellersContainer) return;
    
    // Sample seller data
    const sellers = [
        {
            id: 1,
            name: 'Alex Johnson',
            title: 'Senior Graphic Designer',
            avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
            rating: 4.9,
            completedJobs: 247,
            responseRate: 98,
            deliveryTime: '2 days'
        },
        {
            id: 2,
            name: 'Sarah Williams',
            title: 'Full Stack Developer',
            avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
            rating: 5.0,
            completedJobs: 189,
            responseRate: 100,
            deliveryTime: '5 days'
        },
        {
            id: 3,
            name: 'Michael Chen',
            title: 'Content Writer & SEO Expert',
            avatar: 'https://randomuser.me/api/portraits/men/67.jpg',
            rating: 4.8,
            completedJobs: 312,
            responseRate: 95,
            deliveryTime: '1 day'
        },
        {
            id: 4,
            name: 'Lisa Rodriguez',
            title: 'Digital Marketing Specialist',
            avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
            rating: 4.9,
            completedJobs: 156,
            responseRate: 99,
            deliveryTime: '3 days'
        },
        {
            id: 5,
            name: 'David Miller',
            title: 'Video Editor & Animator',
            avatar: 'https://randomuser.me/api/portraits/men/75.jpg',
            rating: 4.7,
            completedJobs: 421,
            responseRate: 97,
            deliveryTime: '4 days'
        },
        {
            id: 6,
            name: 'Emma Wilson',
            title: 'UI/UX Designer',
            avatar: 'https://randomuser.me/api/portraits/women/26.jpg',
            rating: 5.0,
            completedJobs: 178,
            responseRate: 100,
            deliveryTime: '6 days'
        }
    ];
    
    // Clear container
    sellersContainer.innerHTML = '';
    
    // Create and append seller cards
    sellers.forEach(seller => {
        const sellerCard = createSellerCard(seller);
        sellersContainer.appendChild(sellerCard);
    });
}

// Create a seller card element
function createSellerCard(seller) {
    const sellerCard = document.createElement('div');
    sellerCard.className = 'seller-card';
    
    sellerCard.innerHTML = `
        <img src="${seller.avatar}" alt="${seller.name}" class="seller-avatar">
        <h3 class="seller-name">${seller.name}</h3>
        <p class="seller-title">${seller.title}</p>
        <div class="seller-rating">
            ${createStarRating(seller.rating)}
            <span class="rating-value">${seller.rating}</span>
        </div>
        <div class="seller-stats">
            <div class="stat">
                <div class="stat-value">${seller.completedJobs}</div>
                <div class="stat-label">Jobs Done</div>
            </div>
            <div class="stat">
                <div class="stat-value">${seller.responseRate}%</div>
                <div class="stat-label">Response Rate</div>
            </div>
            <div class="stat">
                <div class="stat-value">${seller.deliveryTime}</div>
                <div class="stat-label">Avg. Delivery</div>
            </div>
        </div>
        <button class="btn btn-outline" onclick="viewSellerProfile(${seller.id})">View Profile</button>
        <button class="btn btn-primary" onclick="contactSeller(${seller.id})">Contact</button>
    `;
    
    return sellerCard;
}

// View seller profile
function viewSellerProfile(sellerId) {
    alert(`Viewing profile for seller #${sellerId}`);
    // In a real app, you would navigate to a seller profile page
}

// Contact seller
function contactSeller(sellerId) {
    alert(`Contacting seller #${sellerId}`);
    // In a real app, you would open a messaging interface
}