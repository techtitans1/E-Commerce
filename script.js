// ==================== Data ====================
const categories = [
    { id: 1, name: 'Fruits', items: '120+ items', image: 'https://images.unsplash.com/photo-1619566636858-adf3ef46400b?w=100' },
    { id: 2, name: 'Vegetables', items: '200+ items', image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=100' },
    { id: 3, name: 'Dairy', items: '80+ items', image: 'https://images.unsplash.com/photo-1628088062854-d1870b4553da?w=100' },
    { id: 4, name: 'Bakery', items: '60+ items', image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=100' },
    { id: 5, name: 'Beverages', items: '150+ items', image: 'https://images.unsplash.com/photo-1625772299848-391b6a87d7b3?w=100' },
    { id: 6, name: 'Snacks', items: '180+ items', image: 'https://images.unsplash.com/photo-1621939514649-280e2ee25f60?w=100' },
    { id: 7, name: 'Meat & Fish', items: '90+ items', image: 'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=100' },
    { id: 8, name: 'Personal Care', items: '100+ items', image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=100' }
];

const products = [
    { id: 1, name: 'Fresh Red Apples', category: 'Fruits', weight: '1 kg', price: 149, originalPrice: 199, rating: 4.5, reviews: 128, image: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=200', badge: '25% OFF' },
    { id: 2, name: 'Organic Bananas', category: 'Fruits', weight: '6 pcs', price: 49, originalPrice: 65, rating: 4.7, reviews: 256, image: 'https://images.unsplash.com/photo-1603833665858-e61d17a86224?w=200', badge: 'Best Seller' },
    { id: 3, name: 'Fresh Milk', category: 'Dairy', weight: '1 L', price: 62, originalPrice: 68, rating: 4.8, reviews: 512, image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?w=200', badge: '' },
    { id: 4, name: 'Brown Eggs', category: 'Dairy', weight: '12 pcs', price: 89, originalPrice: 120, rating: 4.6, reviews: 189, image: 'https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?w=200', badge: '26% OFF' },
    { id: 5, name: 'Fresh Tomatoes', category: 'Vegetables', weight: '500 g', price: 35, originalPrice: 45, rating: 4.4, reviews: 167, image: 'https://images.unsplash.com/photo-1546470427-e26264be0b0c?w=200', badge: '' },
    { id: 6, name: 'Green Capsicum', category: 'Vegetables', weight: '250 g', price: 42, originalPrice: 55, rating: 4.3, reviews: 98, image: 'https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?w=200', badge: 'Fresh' },
    { id: 7, name: 'Whole Wheat Bread', category: 'Bakery', weight: '400 g', price: 45, originalPrice: 55, rating: 4.5, reviews: 234, image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=200', badge: '' },
    { id: 8, name: 'Greek Yogurt', category: 'Dairy', weight: '400 g', price: 120, originalPrice: 150, rating: 4.7, reviews: 145, image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=200', badge: '20% OFF' }
];

const freshArrivals = [
    { id: 9, name: 'Avocado', category: 'Fruits', weight: '2 pcs', price: 199, originalPrice: 249, rating: 4.6, reviews: 78, image: 'https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?w=200', badge: 'New' },
    { id: 10, name: 'Blueberries', category: 'Fruits', weight: '125 g', price: 249, originalPrice: 299, rating: 4.8, reviews: 56, image: 'https://images.unsplash.com/photo-1498557850523-fd3d118b962e?w=200', badge: 'New' },
    { id: 11, name: 'Almond Butter', category: 'Snacks', weight: '200 g', price: 399, originalPrice: 499, rating: 4.5, reviews: 45, image: 'https://images.unsplash.com/photo-1612187290535-4c4a444a8a0a?w=200', badge: 'New' },
    { id: 12, name: 'Organic Honey', category: 'Beverages', weight: '500 g', price: 349, originalPrice: 450, rating: 4.9, reviews: 189, image: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=200', badge: 'Organic' },
    { id: 13, name: 'Quinoa', category: 'Grains', weight: '500 g', price: 299, originalPrice: 399, rating: 4.4, reviews: 67, image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=200', badge: 'New' },
    { id: 14, name: 'Chia Seeds', category: 'Grains', weight: '250 g', price: 199, originalPrice: 249, rating: 4.7, reviews: 123, image: 'https://images.unsplash.com/photo-1541990748842-cb5e6ddd0b85?w=200', badge: 'Superfood' }
];

// Cart Data
let cart = [];

// ==================== DOM Elements ====================
const categoriesGrid = document.getElementById('categoriesGrid');
const bestSellersGrid = document.getElementById('bestSellersGrid');
const freshArrivalsGrid = document.getElementById('freshArrivalsGrid');
const cartSidebar = document.getElementById('cartSidebar');
const cartItems = document.getElementById('cartItems');
const cartBadge = document.getElementById('cartBadge');
const cartTotal = document.getElementById('cartTotal');
const overlay = document.getElementById('overlay');
const toast = document.getElementById('toast');
const toastMessage = document.getElementById('toastMessage');
const locationModal = document.getElementById('locationModal');

// ==================== Initialize ====================
document.addEventListener('DOMContentLoaded', () => {
    renderCategories();
    renderProducts(bestSellersGrid, products);
    renderProducts(freshArrivalsGrid, freshArrivals);
    initBannerSlider();
    initEventListeners();
    startDealTimer();
});

// ==================== Render Functions ====================
function renderCategories() {
    categoriesGrid.innerHTML = categories.map(category => `
        <div class="category-card" data-id="${category.id}">
            <img src="${category.image}" alt="${category.name}">
            <h4>${category.name}</h4>
            <span>${category.items}</span>
        </div>
    `).join('');
}

function renderProducts(container, productList) {
    container.innerHTML = productList.map(product => `
        <div class="product-card" data-id="${product.id}">
            ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ''}
            <div class="product-wishlist" data-id="${product.id}">
                <i class="far fa-heart"></i>
            </div>
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="product-info">
                <span class="product-category">${product.category}</span>
                <h4 class="product-name">${product.name}</h4>
                <p class="product-weight">${product.weight}</p>
                <div class="product-rating">
                    ${generateStars(product.rating)}
                    <span>(${product.reviews})</span>
                </div>
                <div class="product-footer">
                    <div class="product-price">
                        <span class="current-price">₹${product.price}</span>
                        <span class="original-price">₹${product.originalPrice}</span>
                    </div>
                    <button class="add-to-cart" data-id="${product.id}">
                        <i class="fas fa-plus"></i>
                    </button>
                </div>
            </div>
        </div>
    `).join('');

    // Add event listeners
    container.querySelectorAll('.add-to-cart').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const productId = parseInt(btn.dataset.id);
            addToCart(productId);
        });
    });

    container.querySelectorAll('.product-wishlist').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            btn.classList.toggle('active');
            btn.innerHTML = btn.classList.contains('active') 
                ? '<i class="fas fa-heart"></i>' 
                : '<i class="far fa-heart"></i>';
            showToast(btn.classList.contains('active') ? 'Added to wishlist!' : 'Removed from wishlist!');
        });
    });
}

function generateStars(rating) {
    let stars = '';
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 0; i < fullStars; i++) {
        stars += '<i class="fas fa-star"></i>';
    }
    if (hasHalfStar) {
        stars += '<i class="fas fa-star-half-alt"></i>';
    }
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
        stars += '<i class="far fa-star"></i>';
    }
    return stars;
}

// ==================== Cart Functions ====================
function addToCart(productId) {
    const allProducts = [...products, ...freshArrivals];
    const product = allProducts.find(p => p.id === productId);
    
    if (!product) return;
    
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    
    updateCart();
    showToast('Added to cart!');
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCart();
    showToast('Removed from cart!');
}

function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(productId);
        } else {
            updateCart();
        }
    }
}

function updateCart() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    cartBadge.textContent = totalItems;
    document.querySelector('.cart-badge-mobile').textContent = totalItems;
    cartTotal.textContent = `₹${totalPrice}`;
    
    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="empty-cart">
                <i class="fas fa-shopping-cart"></i>
                <h4>Your cart is empty</h4>
                <p>Add items to get started</p>
            </div>
        `;
    } else {
        cartItems.innerHTML = cart.map(item => `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}">
                <div class="cart-item-info">
                    <h4>${item.name}</h4>
                    <p>${item.weight}</p>
                    <div class="cart-item-controls">
                        <div class="quantity-controls">
                            <button onclick="updateQuantity(${item.id}, -1)">-</button>
                            <span>${item.quantity}</span>
                            <button onclick="updateQuantity(${item.id}, 1)">+</button>
                        </div>
                        <span class="cart-item-price">₹${item.price * item.quantity}</span>
                        <button class="remove-item" onclick="removeFromCart(${item.id})">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                </div>
            </div>
        `).join('');
    }
}

// ==================== Banner Slider ====================
let currentSlide = 0;
const slides = document.querySelectorAll('.banner-slide');
const dots = document.querySelectorAll('.dot');

function initBannerSlider() {
    setInterval(() => {
        nextSlide();
    }, 5000);
    
    document.getElementById('prevSlide').addEventListener('click', prevSlide);
    document.getElementById('nextSlide').addEventListener('click', nextSlide);
    
    dots.forEach(dot => {
        dot.addEventListener('click', () => {
            goToSlide(parseInt(dot.dataset.slide));
        });
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    updateSlider();
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    updateSlider();
}

function goToSlide(index) {
    currentSlide = index;
    updateSlider();
}

function updateSlider() {
    slides.forEach((slide, index) => {
        slide.classList.toggle('active', index === currentSlide);
    });
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSlide);
    });
}

// ==================== Deal Timer ====================
function startDealTimer() {
    let hours = 5;
    let minutes = 32;
    let seconds = 48;
    
    setInterval(() => {
        seconds--;
        if (seconds < 0) {
            seconds = 59;
            minutes--;
            if (minutes < 0) {
                minutes = 59;
                hours--;
                if (hours < 0) {
                    hours = 23;
                }
            }
        }
        
        document.getElementById('hours').textContent = String(hours).padStart(2, '0');
        document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
        document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
    }, 1000);
}

// ==================== Event Listeners ====================
function initEventListeners() {
    // Cart
    document.getElementById('cartBtn').addEventListener('click', openCart);
    document.querySelector('.cart-icon-mobile').addEventListener('click', openCart);
    document.getElementById('closeCart').addEventListener('click', closeCart);
    overlay.addEventListener('click', closeAll);
    
    // Location Modal
    document.getElementById('locationBtn').addEventListener('click', openLocationModal);
    document.getElementById('closeLocationModal').addEventListener('click', closeLocationModal);
    
    // Search
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', debounce(handleSearch, 300));
    
    // Voice Search
    document.getElementById('voiceBtn').addEventListener('click', startVoiceSearch);
    
    // Mobile Search
    document.getElementById('mobileSearchBtn').addEventListener('click', () => {
        // Toggle mobile search
        showToast('Search feature');
    });
    
    // Category Cards
    document.querySelectorAll('.category-card').forEach(card => {
        card.addEventListener('click', () => {
            showToast(`Browsing ${card.querySelector('h4').textContent}`);
        });
    });
    
    // Shop Now Button
    document.querySelectorAll('.shop-now-btn, .offer-btn, .grab-deal-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            showToast('Redirecting to products...');
        });
    });
    
    // Checkout
    document.querySelector('.checkout-btn').addEventListener('click', () => {
        if (cart.length > 0) {
            showToast('Proceeding to checkout...');
        } else {
            showToast('Your cart is empty!');
        }
    });
}

function openCart() {
    cartSidebar.classList.add('active');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeCart() {
    cartSidebar.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
}

function openLocationModal() {
    locationModal.classList.add('active');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeLocationModal() {
    locationModal.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
}

function closeAll() {
    closeCart();
    closeLocationModal();
}

function handleSearch(e) {
    const query = e.target.value.toLowerCase();
    if (query.length > 0) {
        showToast(`Searching for "${query}"...`);
    }
}

function startVoiceSearch() {
    if ('webkitSpeechRecognition' in window) {
        const recognition = new webkitSpeechRecognition();
        recognition.continuous = false;
        recognition.interimResults = false;
        
        recognition.onstart = () => {
            showToast('Listening...');
        };
        
        recognition.onresult = (event) => {
            const transcript = event.results[0][0].transcript;
            document.getElementById('searchInput').value = transcript;
            showToast(`Searching for "${transcript}"...`);
        };
        
        recognition.onerror = () => {
            showToast('Voice search not available');
        };
        
        recognition.start();
    } else {
        showToast('Voice search not supported in this browser');
    }
}

function showToast(message) {
    toastMessage.textContent = message;
    toast.classList.add('active');
    
    setTimeout(() => {
        toast.classList.remove('active');
    }, 3000);
}

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Make functions globally available
window.updateQuantity = updateQuantity;
window.removeFromCart = removeFromCart;
