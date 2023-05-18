class App {
  // Observer
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove('img-shrink');
          entry.target.classList.add('img-grow');
          this.observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.75 }
  );

  // DOM Variables
  button = document.querySelector('.nav-btn');

  linksContainer = document.querySelector('.nav-links');

  links = document.querySelectorAll('.nav-link');

  icons = document.querySelectorAll('i');

  stepImages = document.querySelectorAll('.img-step');

  constructor() {
    this.stepImages.forEach((img) => this.observer.observe(img));
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

  // Navigation Menu Functions
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
