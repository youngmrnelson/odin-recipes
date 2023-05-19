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

  // DOM Variables - Navigation
  linkBtn = document.querySelector('.nav-btn');

  linksContainer = document.querySelector('.nav-links');

  links = document.querySelectorAll('.nav-link');

  icons = document.querySelectorAll('i');

  stepImages = document.querySelectorAll('.img-step');

  // DOM Variables - Recipe Library
  openLibraryBtn = document.querySelector('btn-library');

  createRecipeBtn = document.querySelector('.btn-create-recipe');

  recipeDetailsEl = document.querySelector('.recipe-search-details');

  recipeLibraryEl = document.querySelector('.recipe-search-library');

  recipeSearchFormEl = document.getElementById('recipe-form');

  recipeNameEl = document.getElementById('name');

  recipeCaloriesEl = document.getElementById('calories');

  recipeIngredientsEl = document.getElementById('ingredients');

  submitRecipesBtn = document.getElementById('submit');

  // Global Variables
  myRecipes = [];

  constructor() {
    this.stepImages.forEach((img) => this.observer.observe(img));
    // Event Listeners - Navigation / Icons
    this.linkBtn.addEventListener('click', this.#toggleMenu.bind(this));
    this.icons.forEach((icon) => {
      // Add fade effect to hovered icon
      if (!icon.parentElement.classList.contains('nav-link')) {
        icon.parentElement.addEventListener('mouseover', this.#addFadeEffect);
      }
      // Remove fade effect from icon
      icon.parentElement.addEventListener('mouseout', this.#removeFadeEffect);
    });
    // Event Listeners - Recipe Library
    this.createRecipeBtn.addEventListener(
      'click',
      this.#toggleRecipeForm.bind(this)
    );
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

  // Recipe Form Functions
  #toggleRecipeForm() {
    this.recipeSearchFormEl.classList.toggle('hidden');
    this.recipeNameEl.value = '';
    this.recipeCaloriesEl.value = '';
    this.recipeIngredientsEl.value = '';
  }

  #createRecipe() {}
}

export default new App();
