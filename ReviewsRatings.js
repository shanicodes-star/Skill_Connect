// Reviews & Ratings Component
function initializeReviewsRatings() {
    const reviewsContainer = document.getElementById('reviewsContainer');
    
    if (!reviewsContainer) return;
    
    // Sample review data
    const reviews = [
        {
            id: 1,
            reviewerName: 'Robert Brown',
            reviewerAvatar: 'https://randomuser.me/api/portraits/men/82.jpg',
            reviewerTitle: 'CEO, TechStart Inc.',
            rating: 5.0,
            content: 'Absolutely fantastic work! The logo design exceeded my expectations. Communication was excellent throughout the project.',
            gig: 'Logo Design for Tech Startup',
            date: '2 weeks ago'
        },
        {
            id: 2,
            reviewerName: 'Jennifer Lee',
            reviewerAvatar: 'https://randomuser.me/api/portraits/women/33.jpg',
            reviewerTitle: 'Marketing Director',
            rating: 4.5,
            content: 'Great website development service. The final product was exactly what we needed. Would definitely work with again.',
            gig: 'Corporate Website Development',
            date: '1 month ago'
        },
        {
            id: 3,
            reviewerName: 'Thomas Wilson',
            reviewerAvatar: 'https://randomuser.me/api/portraits/men/91.jpg',
            reviewerTitle: 'Small Business Owner',
            rating: 5.0,
            content: 'The content writing service was exceptional. Articles were well-researched and engaging. Helped boost our website traffic significantly.',
            gig: 'Blog Content Writing',
            date: '3 days ago'
        },
        {
            id: 4,
            reviewerName: 'Amanda Garcia',
            reviewerAvatar: 'https://randomuser.me/api/portraits/women/56.jpg',
            reviewerTitle: 'YouTuber',
            rating: 4.8,
            content: 'Excellent video editing skills! Turned my raw footage into a professional-looking video. Quick delivery and great communication.',
            gig: 'YouTube Video Editing',
            date: '2 months ago'
        },
        {
            id: 5,
            reviewerName: 'James Taylor',
            reviewerAvatar: 'https://randomuser.me/api/portraits/men/22.jpg',
            reviewerTitle: 'Startup Founder',
            rating: 4.9,
            content: 'Social media marketing campaign was a huge success. Our engagement increased by 300% in just one month. Highly recommended!',
            gig: 'Social Media Marketing',
            date: '1 week ago'
        },
        {
            id: 6,
            reviewerName: 'Sophia Martinez',
            reviewerAvatar: 'https://randomuser.me/api/portraits/women/65.jpg',
            reviewerTitle: 'App Developer',
            rating: 5.0,
            content: 'The UI/UX design was exactly what we needed for our mobile app. Professional, creative, and user-friendly design.',
            gig: 'Mobile App UI/UX Design',
            date: '3 weeks ago'
        }
    ];
    
    // Clear container
    reviewsContainer.innerHTML = '';
    
    // Create and append review cards
    reviews.forEach(review => {
        const reviewCard = createReviewCard(review);
        reviewsContainer.appendChild(reviewCard);
    });
}

// Create a review card element
function createReviewCard(review) {
    const reviewCard = document.createElement('div');
    reviewCard.className = 'review-card';
    
    reviewCard.innerHTML = `
        <div class="review-header">
            <div class="reviewer-info">
                <img src="${review.reviewerAvatar}" alt="${review.reviewerName}" class="reviewer-avatar">
                <div class="reviewer-details">
                    <h4>${review.reviewerName}</h4>
                    <p>${review.reviewerTitle}</p>
                </div>
            </div>
            <div class="review-rating">
                ${review.rating} <i class="fas fa-star"></i>
            </div>
        </div>
        <div class="review-content">
            <p>"${review.content}"</p>
        </div>
        <div class="review-footer">
            <div class="review-gig">Service: ${review.gig}</div>
            <div class="review-date">${review.date}</div>
        </div>
    `;
    
    return reviewCard;
}