const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector('#ingredients');
let newArray = [];

const newIngredients = ingredients.forEach(ingredient => {
  const ingr = document.createElement('li');
  ingr.textContent = ingredient;
  ingr.classList.add('ingredients-item');
  newArray.push(ingr);
});

ingredientsList.append(...newArray);