/* =========================================
   1. SHOPPING CART LOGIC
   ========================================= */
const addButtons = document.querySelectorAll('.add-btn');
const cartCountSpan = document.getElementById('cart-count');
const cartIcon = document.querySelector('.cart-icon-container'); 
const cartModal = document.getElementById('cart-modal'); 
const closeCartBtn = document.querySelector('.close-cart'); 
const cartItemsContainer = document.getElementById('cart-items');
const cartTotalElement = document.getElementById('cart-total-price');
const checkoutBtn = document.querySelector('.checkout-btn'); 

let cart = JSON.parse(localStorage.getItem('syenadaCart')) || [];
updateCartUI();

// Event Listener: Add Item
if (addButtons.length > 0) {
    addButtons.forEach(button => {
        button.addEventListener('click', () => {
            const productName = button.getAttribute('data-name');
            const productPrice = button.getAttribute('data-price');
            const product = { name: productName, price: parseFloat(productPrice) };
            addToCart(product);
        });
    });
}

function addToCart(product) {
    cart.push(product);
    saveCart();
    alert(`${product.name} added to cart!`);
}

function saveCart() {
    localStorage.setItem('syenadaCart', JSON.stringify(cart));
    updateCartUI();
}

function updateCartUI() {
    if (cartCountSpan) cartCountSpan.innerText = cart.length;
}

// Open Cart Modal
if (cartIcon) {
    cartIcon.addEventListener('click', () => {
        renderCartItems(); 
        cartModal.style.display = "block"; 
    });
}

// Close Cart Modal
if (closeCartBtn) {
    closeCartBtn.addEventListener('click', () => {
        cartModal.style.display = "none";
    });
}

// Render Items in Cart
function renderCartItems() {
    cartItemsContainer.innerHTML = ''; 
    let total = 0;
    
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p style="text-align:center; color:#666;">Your cart is empty.</p>';
        if(checkoutBtn) checkoutBtn.style.display = "none"; 
    } else {
        if(checkoutBtn) checkoutBtn.style.display = "block"; 
        cart.forEach((item, index) => {
            total += item.price;
            const itemDiv = document.createElement('div');
            itemDiv.classList.add('cart-item');
            itemDiv.innerHTML = `
                <div><strong>${item.name}</strong><br>RM ${item.price.toFixed(2)}</div>
                <button class="remove-btn" onclick="removeItem(${index})">Remove</button>
            `;
            cartItemsContainer.appendChild(itemDiv);
        });
    }
    if (cartTotalElement) cartTotalElement.innerText = total.toFixed(2);
}

window.removeItem = function(index) {
    cart.splice(index, 1); 
    saveCart(); 
    renderCartItems(); 
};

// Checkout Logic
if (checkoutBtn) {
    checkoutBtn.addEventListener('click', () => {
        if (cart.length === 0) {
            alert("Your cart is empty!");
            return;
        }
        alert("Thank you for your purchase! Your order has been placed successfully.");
        cart = []; 
        saveCart(); 
        renderCartItems(); 
        cartModal.style.display = "none";
    });
}

/*2. LOGIN / PROFILE*/
const profileIcon = document.querySelector('.fa-user');
const loginModal = document.getElementById('login-modal');
const closeLoginBtn = document.querySelector('.close-login');
const loginForm = document.getElementById('login-form');

if (profileIcon) {
    profileIcon.addEventListener('click', () => {
        loginModal.style.display = "block";
    });
}

if (closeLoginBtn) {
    closeLoginBtn.addEventListener('click', () => {
        loginModal.style.display = "none";
    });
}

if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault(); 
        const email = document.getElementById('login-email').value;
        alert(`Welcome back, ${email}! You are now logged in.`);
        loginModal.style.display = "none";
        profileIcon.style.color = "#8bc34a"; 
    });
}

/*3. GLOBAL CLOSE (CLICK OUTSIDE) */
window.addEventListener('click', (event) => {
    if (event.target == cartModal) cartModal.style.display = "none";
    if (event.target == loginModal) loginModal.style.display = "none";
});

/* 4. HERO SLIDER (Home Page Only) */
const heroBg = document.querySelector('.hero');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

if (heroBg && prevBtn && nextBtn) {
    const images = [
        'photo1.jpeg',
        'photo2.jpeg',
        'photo3.jpeg',
    ];
    let currentIndex = 0;
    function updateBackground() { heroBg.style.backgroundImage = `url('${images[currentIndex]}')`; }
    updateBackground();
    nextBtn.addEventListener('click', () => {
        currentIndex++; if (currentIndex >= images.length) currentIndex = 0;
        updateBackground();
    });
    prevBtn.addEventListener('click', () => {
        currentIndex--; if (currentIndex < 0) currentIndex = images.length - 1;
        updateBackground();
    });
}

/* 5. NEWSLETTER LOGIC*/
const newsletterInput = document.querySelector('.newsletter-input');
const newsletterBtn = document.querySelector('.btn-submit');

if (newsletterBtn && newsletterInput) {
    newsletterBtn.addEventListener('click', () => {
        const email = newsletterInput.value.trim();
        if (email === "") {
            alert("Please enter your email address.");
            return;
        }
        if (!email.includes("@") || !email.includes(".")) {
            alert("Please enter a valid email address.");
            return;
        }
        alert(`Thank you for subscribing, ${email}!\nUse code WELCOME15 for 15% off your next order.`);
        newsletterInput.value = ""; 
    });

    newsletterInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            newsletterBtn.click();
        }
    });
}