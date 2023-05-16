// Styles
import './scss/main.scss';

// DOM Variables
const navMenuBtn = document.querySelector('.nav-btn');
const navLinksContainer = document.querySelector('.nav-links');
const navLinksEl = document.querySelectorAll('.nav-link');
const navIcons = document.querySelectorAll('i');

// Event Listeners
navMenuBtn.addEventListener('click', () => {
  navLinksContainer.classList.toggle('nav-links-active');
  navLinksEl.forEach((link) => link.classList.toggle('nav-link-active'));
});

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

/* eslint-disable no-use-before-define */
// DOM Variables
const recipeFormEl = document.getElementById('recipe-form');
const recipeNameEl = document.getElementById('name');
const recipeCaloriesEl = document.getElementById('calories');
const recipeIngredientsEl = document.getElementById('ingredients');
const recipesContainerEl = document.querySelector('.recipes-container');
const addRecipeBtn = document.querySelector('.add-recipes');
const submitRecipeBtn = document.getElementById('submit');

// Recipe Array
const myRecipes = [];

// Recipes Constructor
class Recipe {
  constructor(recipeName, calories, ingredients) {
    this.recipeName = recipeName;
    this.calories = calories;
    this.ingredients = ingredients;
  }
}

const toggleRecipesForm = () => {
  recipeFormEl.classList.toggle('hidden');
  recipeNameEl.value = '';
  recipeCaloriesEl.value = '';
  recipeIngredientsEl.value = '';
};

const createRecipe = () => {
  const recipeName = recipeNameEl.value;
  const calories = recipeCaloriesEl.value;
  const ingredients = recipeIngredientsEl.value;
  const newRecipe = new Recipe(recipeName, calories, ingredients);
  myRecipes.push(newRecipe);
};

function createRecipeCard() {
  while (recipesContainerEl.firstChild) {
    recipesContainerEl.removeChild(recipesContainerEl.firstChild);
  }
  myRecipes.forEach((recipe, index) => {
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
    recipesContainerEl.insertAdjacentHTML('afterbegin', html);

    const deleteBtns = document.querySelectorAll('.btn-delete');
    deleteBtns.forEach((deleteBtn) => {
      deleteBtn.addEventListener('click', () => {
        deleteRecipe(index);
      });
    });
  });
}

function deleteRecipe(index) {
  myRecipes.splice(index, 1);
  createRecipeCard();
}

function submitRecipe() {
  createRecipe();
  createRecipeCard();
  toggleRecipesForm();
}

// Event Listeners
addRecipeBtn.addEventListener('click', toggleRecipesForm);
submitRecipeBtn.addEventListener('click', (e) => {
  e.preventDefault();
  submitRecipe();
});
