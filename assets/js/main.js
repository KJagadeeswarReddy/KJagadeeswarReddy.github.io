// This is a simple script to add a class to the navigation item when clicked
// You might want to replace this with your own JavaScript code

let navItems = document.querySelectorAll('nav ul li a');

navItems.forEach(item => {
    item.addEventListener('click', function() {
        navItems.forEach(item => item.classList.remove('active'));
        this.classList.add('active');
    });
});