/* eslint-disable import/extensions */
// Styles
import './scss/main.scss';
import App from './js/app.js';

// 15bbf13471dc4f97abbef21174b3dd7b
const getRecipesOfTheDay = async function () {
  // API Key
  const apiKey = '15bbf13471dc4f97abbef21174b3dd7b';
  // Recipe Data
  const res =  await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${apiKey}`, { method: 'GET' });
  const { recipes } = await res.json();
  console.log(recipes[0]);
};

getRecipesOfTheDay();
