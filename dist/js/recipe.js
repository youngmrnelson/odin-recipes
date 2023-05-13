// Recipes Object
function Recipe(recipeName, calories) {
  this.recipeName = recipeName;
  this.calories = calories;
  this.info = function () {
    // console.log(recipeName);
  };
}

const recipe = new Recipe('Salad', 113);
recipe.info();

// console.log(Object.getPrototypeOf(recipe) === Recipe.prototype);
