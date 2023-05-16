/* eslint-disable node/no-unsupported-features/es-syntax */
// DOM Variables
const navIcons = document.querySelectorAll('i');

navIcons.forEach((icon) => {
  // Add fade effect to icon icons
  if (!icon.parentElement.classList.contains('nav-link')) {
    icon.parentElement.addEventListener('mouseover', () => {
      icon.classList.add('fa-fade');
    });
  }
  // Remove fade effect on icon
  icon.parentElement.addEventListener('mouseout', () => {
    icon.classList.remove('fa-fade');
  });
});

class NavigationUI {
  constructor() {
    // DOM Variables
    this.button = document.querySelector('.nav-btn');
    this.linksContainer = document.querySelector('.nav-links');
    this.links = document.querySelectorAll('.nav-link');
    this.icons = document.querySelectorAll('i');
    // Event Listeners
    this.button.addEventListener('click', this.toggleMenu.bind(this));
  }

  toggleMenu() {
    this.linksContainer.classList.toggle('nav-links-active');
    this.links.forEach((link) => link.classList.toggle('nav-link-active'));
  }
}

export default new NavigationUI();
