// Order Tracking Component
function initializeOrderTracking() {
    const ordersContainer = document.getElementById('ordersContainer');
    
    if (!ordersContainer) return;
    
    // Sample order data
    const orders = [
        {
            id: 1,
            title: 'Logo Design for My Startup',
            seller: 'John Designer',
            sellerAvatar: 'https://randomuser.me/api/portraits/men/32.jpg',
            price: 150,
            status: 'in-progress',
            statusText: 'In Progress',
            deliveryDate: 'Dec 15, 2023',
            timeline: [
                { step: 1, title: 'Order Placed', description: 'You placed the order', date: 'Nov 28', completed: true },
                { step: 2, title: 'Initial Draft', description: 'Seller sent the first draft', date: 'Dec 2', completed: true },
                { step: 3, title: 'Revisions', description: 'You requested revisions', date: 'Dec 5', completed: true },
                { step: 4, title: 'Final Delivery', description: 'Awaiting final delivery', date: 'Dec 15', completed: false, active: true },
                { step: 5, title: 'Completed', description: 'Order will be marked complete', date: 'Dec 16', completed: false }
            ]
        },
        {
            id: 2,
            title: 'Website Development',
            seller: 'Sarah Developer',
            sellerAvatar: 'https://randomuser.me/api/portraits/women/44.jpg',
            price: 500,
            status: 'pending',
            statusText: 'Pending Start',
            deliveryDate: 'Jan 10, 2024',
            timeline: [
                { step: 1, title: 'Order Placed', description: 'You placed the order', date: 'Dec 10', completed: true },
                { step: 2, title: 'Requirements Review', description: 'Seller is reviewing requirements', date: 'Dec 12', completed: false, active: true },
                { step: 3, title: 'Development', description: 'Website development starts', date: 'Dec 20', completed: false },
                { step: 4, title: 'Testing', description: 'Quality assurance testing', date: 'Jan 5', completed: false },
                { step: 5, title: 'Delivery', description: 'Final delivery', date: 'Jan 10', completed: false }
            ]
        },
        {
            id: 3,
            title: 'Blog Content Writing',
            seller: 'Michael Writer',
            sellerAvatar: 'https://randomuser.me/api/portraits/men/67.jpg',
            price: 75,
            status: 'completed',
            statusText: 'Completed',
            deliveryDate: 'Nov 25, 2023',
            timeline: [
                { step: 1, title: 'Order Placed', description: 'You placed the order', date: 'Nov 10', completed: true },
                { step: 2, title: 'First Draft', description: 'Seller sent the first draft', date: 'Nov 15', completed: true },
                { step: 3, title: 'Revisions', description: 'Revisions completed', date: 'Nov 20', completed: true },
                { step: 4, title: 'Final Delivery', description: 'Final content delivered', date: 'Nov 22', completed: true },
                { step: 5, title: 'Completed', description: 'Order marked complete', date: 'Nov 25', completed: true }
            ]
        }
    ];
    
    // Clear container
    ordersContainer.innerHTML = '';
    
    // Create and append order cards
    orders.forEach(order => {
        const orderCard = createOrderCard(order);
        ordersContainer.appendChild(orderCard);
    });
}

// Create an order card element
function createOrderCard(order) {
    const orderCard = document.createElement('div');
    orderCard.className = 'order-card';
    
    // Create timeline HTML
    const timelineHTML = order.timeline.map(step => {
        let stepClass = 'timeline-step';
        if (step.completed) stepClass += ' completed';
        if (step.active) stepClass += ' active';
        
        return `
            <div class="${stepClass}">
                <div class="step-icon">${step.step}</div>
                <div class="step-info">
                    <h5>${step.title}</h5>
                    <p>${step.description}</p>
                    <small>${step.date}</small>
                </div>
            </div>
        `;
    }).join('');
    
    orderCard.innerHTML = `
        <div class="order-header">
            <h3 class="order-title">${order.title}</h3>
            <div class="order-status status-${order.status}">${order.statusText}</div>
        </div>
        
        <div class="order-seller">
            <img src="${order.sellerAvatar}" alt="${order.seller}">
            <div class="order-seller-info">
                <h4>${order.seller}</h4>
                <p>Delivery by: ${order.deliveryDate}</p>
            </div>
        </div>
        
        <div class="order-timeline">
            ${timelineHTML}
        </div>
        
        <div class="order-footer">
            <div class="order-price">$${order.price}</div>
            <div class="order-actions">
                <button class="btn btn-outline" onclick="viewOrderDetails(${order.id})">View Details</button>
                <button class="btn btn-primary" onclick="contactSellerAboutOrder(${order.id})">Message Seller</button>
            </div>
        </div>
    `;
    
    return orderCard;
}

// View order details
function viewOrderDetails(orderId) {
    alert(`Viewing details for order #${orderId}`);
    // In a real app, you would navigate to an order details page
}

// Contact seller about order
function contactSellerAboutOrder(orderId) {
    alert(`Contacting seller about order #${orderId}`);
    // In a real app, you would open a messaging interface
}