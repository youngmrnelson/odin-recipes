class App {
  // DOM Variables
  button = document.querySelector('.nav-btn');

  linksContainer = document.querySelector('.nav-links');

  links = document.querySelectorAll('.nav-link');

  icons = document.querySelectorAll('i');

  constructor() {
    // Event Listeners
    this.button.addEventListener('click', this.#toggleMenu.bind(this));
    this.icons.forEach((icon) => {
      // Add fade effect to hovered icon
      if (!icon.parentElement.classList.contains('nav-link')) {
        icon.parentElement.addEventListener('mouseover', this.#addFadeEffect);
      }
      // Remove fade effect from icon
      icon.parentElement.addEventListener('mouseout', this.#removeFadeEffect);
    });
  }

  #toggleMenu() {
    this.linksContainer.classList.toggle('nav-links-active');
    this.links.forEach((link) => link.classList.toggle('nav-link-active'));
  }

  #addFadeEffect() {
    this.classList.add('fa-fade');
  }

  #removeFadeEffect() {
    this.classList.remove('fa-fade');
  }
}

export default new App();
