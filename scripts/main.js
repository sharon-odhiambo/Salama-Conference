// Create Hamburger Section
const hamburgerIcon = document.querySelector('.hamburger-menu');
const exitButton = document.querySelector('.exit-btn');
const upperSection = document.querySelector('.overlay');
const mobileMenu = document.querySelector('.navbar-items');
const menuItems = document.querySelectorAll('.menu-items');
// Open Mobile Menu
hamburgerIcon.addEventListener('click', () => {
  mobileMenu.style.display = 'block';
  exitButton.style.display = 'block';
  upperSection.style.display = 'block';
  hamburgerIcon.style.display = 'none';
});
// Close Mobile Menu
exitButton.addEventListener('click', () => {
  hamburgerIcon.style.display = 'block';
  mobileMenu.style.display = 'none';
  exitButton.style.display = 'none';
  upperSection.style.display = 'none';
});
// Close Menu Items
menuItems.forEach((menuItem) => {
  menuItem.addEventListener('click', () => {
    upperSection.style.display = 'none';
    exitButton.style.display = 'none';
    mobileMenu.style.display = 'none';
    hamburgerIcon.style.display = 'block';
  });
});