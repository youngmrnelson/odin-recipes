"use strict";

// DOM Variables
const navMenuBtn = document.querySelector('.nav-btn');
const navLinksContainer = document.querySelector('.nav-links');
const navLinksEl = document.querySelectorAll('.nav-link');
const navIcons = document.querySelectorAll('i');

// Event Listeners
navMenuBtn.addEventListener('click', () => {
    navLinksContainer.classList.toggle('nav-links-active');
    navLinksEl.forEach(link => link.classList.toggle('nav-link-active'));
})

navIcons.forEach(icon => {
    // Add fade effect to icon icons
    if(!icon.parentElement.classList.contains('nav-link')) {
        icon.parentElement.addEventListener('mouseover', (e) => {
            icon.classList.add('fa-fade');
        })
    }
    // Remove fade effect on icon 
    icon.parentElement.addEventListener('mouseout', (e) => {
        icon.classList.remove('fa-fade');
    })
})

// Recipes Object
function Recipe(recipeName, calories) {
    this.recipeName = recipeName;
    this.calories = calories;
    this.info = function() {
        console.log(recipeName);
    }
}

const recipe = new Recipe('Salad', 113);
recipe.info();

console.log(Object.getPrototypeOf(recipe) === Recipe.prototype);