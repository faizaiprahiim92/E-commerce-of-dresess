// Navbar Toggle for Mobile View
const navbar = document.getElementById('navbar');
const toggleMenu = () => {
    navbar.classList.toggle('active');
};

// Add event listener for menu toggle (if applicable)
document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.querySelector('.menu-toggle');
    if (menuButton) {
        menuButton.addEventListener('click', toggleMenu);
    }
});

// Add "Shop Now" button functionality
const shopNowButton = document.querySelector('.onclick');
if (shopNowButton) {
    shopNowButton.addEventListener('click', () => {
        window.location.href = 'shop.html'; // Redirect to shop page
    });
}

// Newsletter Signup
const newsletterButton = document.querySelector('.form button');
if (newsletterButton) {
    newsletterButton.addEventListener('click', () => {
        const emailInput = document.querySelector('.form input');
        const email = emailInput.value.trim();

        if (email) {
            alert(`Thank you for signing up, ${email}!`);
            emailInput.value = ''; // Clear input field
        } else {
            alert('Please enter a valid email address.');
        }
    });
}

// Add-to-cart Functionality (Placeholder)
const cartButtons = document.querySelectorAll('.fal.fa-shopping-cart');
cartButtons.forEach(button => {
    button.addEventListener('click', () => {
        alert('Item added to your cart!');
    });
});

// Scroll to Top Button (Optional)
const scrollToTopButton = document.createElement('button');
scrollToTopButton.innerText = '↑ Top';
scrollToTopButton.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    display: none;
    padding: 10px 15px;
    background-color: #000;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
`;

document.body.appendChild(scrollToTopButton);

scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        scrollToTopButton.style.display = 'block';
    } else {
        scrollToTopButton.style.display = 'none';
    }
});

//navbar//
const bar =document.getElementById('bar');

const close =document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar){
    bar.addEventListener('click', () =>{
        nav.classList.add('active');
    })
}

if (close){
    close.addEventListener('click', () =>{
        nav.classList.remove('active');
    })
}