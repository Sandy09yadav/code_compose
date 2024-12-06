// NAVBAR JS START

// Select the hamburger and nav items
const hamburger = document.getElementById('hamburger');
const navItems = document.querySelector('.nav-items');
const rightNavItems = document.querySelector('.right-navItems');

// Toggle the 'active' class on click of the hamburger menu
hamburger.addEventListener('click', () => {
  navItems.classList.toggle('active');
  rightNavItems.classList.toggle('active');
});

// NAVBAR JS END


// Get all buttons and images
const buttons = document.querySelectorAll('.filter-btn');
const images = document.querySelectorAll('.property-item');

// Function to filter the images based on category
function filterImages(category) {
    images.forEach(image => {
        const imageCategory = image.querySelector('img').getAttribute('data-category');
        if (category === 'all' || imageCategory === category) {
            image.style.display = 'block'; // Show the image
        } else {
            image.style.display = 'none'; // Hide the image
        }
    });
}

// Add event listeners to filter buttons
buttons.forEach(button => {
    button.addEventListener('click', function() {
        const category = this.getAttribute('data-category');

        // Toggle active class on buttons
        buttons.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');

        // Filter images based on the selected category
        filterImages(category);
    });
});

// On page load, display all images by default
document.addEventListener('DOMContentLoaded', () => {
    filterImages('all'); // Show all images on page load
});


