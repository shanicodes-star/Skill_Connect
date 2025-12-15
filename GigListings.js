// Gig Listings Component
function initializeGigListings() {
    const gigsContainer = document.getElementById('gigsContainer');
    
    if (!gigsContainer) return;
    
    // Sample gig data
    const gigs = [
        {
            id: 1,
            title: 'I will design a modern logo for your brand',
            seller: 'John Designer',
            sellerAvatar: 'https://randomuser.me/api/portraits/men/32.jpg',
            image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
            rating: 4.9,
            ratingCount: 128,
            price: 50,
            category: 'Graphic Design',
            deliveryTime: '3 days'
        },
        {
            id: 2,
            title: 'I will build a responsive WordPress website',
            seller: 'Sarah Developer',
            sellerAvatar: 'https://randomuser.me/api/portraits/women/44.jpg',
            image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
            rating: 5.0,
            ratingCount: 256,
            price: 300,
            category: 'Web Development',
            deliveryTime: '7 days'
        },
        {
            id: 3,
            title: 'I will create engaging content for your blog',
            seller: 'Michael Writer',
            sellerAvatar: 'https://randomuser.me/api/portraits/men/67.jpg',
            image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
            rating: 4.8,
            ratingCount: 89,
            price: 25,
            category: 'Writing & Translation',
            deliveryTime: '2 days'
        },
        {
            id: 4,
            title: 'I will edit your YouTube videos professionally',
            seller: 'Alex Editor',
            sellerAvatar: 'https://randomuser.me/api/portraits/men/75.jpg',
            image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
            rating: 4.7,
            ratingCount: 342,
            price: 80,
            category: 'Video & Animation',
            deliveryTime: '5 days'
        },
        {
            id: 5,
            title: 'I will manage your social media marketing',
            seller: 'Lisa Marketer',
            sellerAvatar: 'https://randomuser.me/api/portraits/women/68.jpg',
            image: 'https://images.unsplash.com/photo-1611605698323-b1e99cfd37ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
            rating: 4.9,
            ratingCount: 176,
            price: 150,
            category: 'Digital Marketing',
            deliveryTime: '30 days'
        },
        {
            id: 6,
            title: 'I will design a mobile app UI/UX prototype',
            seller: 'David Designer',
            sellerAvatar: 'https://randomuser.me/api/portraits/men/86.jpg',
            image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
            rating: 5.0,
            ratingCount: 94,
            price: 200,
            category: 'Graphic Design',
            deliveryTime: '10 days'
        }
    ];
    
    // Clear container
    gigsContainer.innerHTML = '';
    
    // Create and append gig cards
    gigs.forEach(gig => {
        const gigCard = createGigCard(gig);
        gigsContainer.appendChild(gigCard);
    });
}

// Create a gig card element
function createGigCard(gig) {
    const gigCard = document.createElement('div');
    gigCard.className = 'gig-card';
    gigCard.setAttribute('data-category', gig.category);
    
    // Create star rating HTML
    const stars = createStarRating(gig.rating);
    
    gigCard.innerHTML = `
        <img src="${gig.image}" alt="${gig.title}" class="gig-image">
        <div class="gig-content">
            <div class="gig-seller">
                <img src="${gig.sellerAvatar}" alt="${gig.seller}">
                <span>${gig.seller}</span>
            </div>
            <h3 class="gig-title">${gig.title}</h3>
            <div class="gig-rating">
                <div class="stars">${stars}</div>
                <span class="rating-value">${gig.rating}</span>
                <span class="rating-count">(${gig.ratingCount})</span>
            </div>
            <div class="gig-footer">
                <div class="gig-price">$${gig.price}<span> Starting at</span></div>
                <button class="btn btn-primary" onclick="viewGigDetails(${gig.id})">View Details</button>
            </div>
        </div>
    `;
    
    return gigCard;
}

// Create star rating HTML
function createStarRating(rating) {
    let stars = '';
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    
    for (let i = 0; i < 5; i++) {
        if (i < fullStars) {
            stars += '<i class="fas fa-star"></i>';
        } else if (i === fullStars && hasHalfStar) {
            stars += '<i class="fas fa-star-half-alt"></i>';
        } else {
            stars += '<i class="far fa-star"></i>';
        }
    }
    
    return stars;
}

// View gig details
function viewGigDetails(gigId) {
    alert(`Viewing details for gig #${gigId}`);
    // In a real app, you would navigate to a gig details page
}