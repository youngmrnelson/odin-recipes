import Recipe from './recipes';

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

  // DOM Variables - Recipes of the Day
  recipesOfTheDayContainer = document.getElementById('recipes-of-the-day');

  // DOM Variables - Recipe Library
  openLibraryBtn = document.querySelector('.btn-library');

  createRecipeBtn = document.querySelector('.btn-create-recipe');

  recipeDetailsEl = document.querySelector('.recipe-search-details');

  recipeLibraryEl = document.querySelector('.recipe-search-library');

  recipesContainerEl = document.querySelector('.recipes-container');

  recipeSearchFormEl = document.getElementById('recipe-form');

  recipeNameEl = document.getElementById('name');

  recipeCaloriesEl = document.getElementById('calories');

  recipeIngredientsEl = document.getElementById('ingredients');

  submitRecipesBtn = document.getElementById('submit');

  // Global Variables
  #myRecipes = [];

  constructor() {
    this.stepImages.forEach((img) => this.observer.observe(img));
    this.#getRecipesOfTheDay();
    this.#getRecipesOfTheDay();
    this.#getRecipesOfTheDay();
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
    this.submitRecipesBtn.addEventListener(
      'click',
      this.#submitRecipe.bind(this)
    );
    this.openLibraryBtn.addEventListener('click', this.#openLibrary.bind(this));
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

  // Recipe of the Day Functions
  async #getRecipesOfTheDay() {
    try {
      // API Key
      const apiKey = '15bbf13471dc4f97abbef21174b3dd7b';
      // Recipe Data
      const res = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${apiKey}`,
        { method: 'GET' }
      );
      const { recipes } = await res.json();
      this.#renderRecipeOfTheDay(recipes[0]);
    } catch (error) {
      console.log(error);
    }
  }

  #renderRecipeOfTheDay = (recipe) => {
    const html = `
        <figure class="recipe p-2 n-auto-mobile">
        <img
            src="${recipe.image}"
            alt="${recipe.title}"
            class="img recipe-img"
        />
        <article class="recipe-title-container">
            <p class="recipe-title py-0">${recipe.title}</p>
            <p class="recipe-stat py-0">
            <span class="recipe-stat-alt">${recipe.healthScore}</span> Health Score
            </p>
            <p class="recipe-stat py-0">
            <span class="recipe-stat-alt">${recipe.extendedIngredients.length}</span> Ingredients
            </p>
            <a href="${recipe.sourceUrl}" target="_blank" class="recipe-link py-0"
            >Full Recipe</a
            >
        </article>
        <button
            class="btn btn-main btn-add-recipe p-1"
            aria-label="Add recipe to library"
        >
            +
        </button>
        </figure>
    `;
    this.recipesOfTheDayContainer.insertAdjacentHTML('beforeend', html);
  };

  // Recipe Form Functions
  #toggleRecipeForm() {
    this.recipeSearchFormEl.classList.toggle('hidden');
    this.recipeNameEl.value = '';
    this.recipeCaloriesEl.value = '';
    this.recipeIngredientsEl.value = '';
  }

  #createRecipe() {
    const recipeName = this.recipeNameEl.value;
    const calories = this.recipeCaloriesEl.value;
    const ingredients = this.recipeIngredientsEl.value;
    const newRecipe = new Recipe(recipeName, calories, ingredients);
    this.#myRecipes.push(newRecipe);
  }

  #createRecipeCard() {
    while (this.recipesContainerEl.firstChild) {
      this.recipesContainerEl.removeChild(this.recipesContainerEl.firstChild);
    }
    this.#myRecipes.forEach((recipe, index) => {
      const html = `
      <!-- Recipe Card -->
            <figure class="recipe p-2">
              <img
                src="images/recipes/recipe-of-day-1.jpg"
                alt=""
                class="img recipe-img"
              />
              <article class="recipe-title-container">
                <p class="recipe-title py-0">${recipe.recipeName}</p>
                <p class="recipe-stat py-0">
                  <span class="recipe-stat-alt">${recipe.calories}</span> Calories
                </p>
                <p class="recipe-stat py-0">
                  <span class="recipe-stat-alt">${recipe.ingredients}</span> Ingredients
                </p>
                <button class="btn recipe-link py-0">Full Recipe</button>
                <button class="btn p-main btn-delete py-0">
                  Delete Recipe
                </button>
              </article>
            </figure>
      `;
      this.recipesContainerEl.insertAdjacentHTML('afterbegin', html);

      const deleteBtns = document.querySelectorAll('.btn-delete');
      deleteBtns.forEach((deleteBtn) => {
        deleteBtn.addEventListener('click', () => {
          this.#deleteRecipe(index);
        });
      });
    });
  }

  #deleteRecipe(index) {
    this.#myRecipes.splice(index, 1);
    this.#createRecipeCard();
  }

  #submitRecipe(e) {
    e.preventDefault();
    this.#createRecipe();
    this.#createRecipeCard();
    this.#toggleRecipeForm();
  }

  #openLibrary() {
    this.recipeDetailsEl.classList.toggle('hidden');
    this.recipeLibraryEl.classList.toggle('hidden');
  }
}

export default new App();
