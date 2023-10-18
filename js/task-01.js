const categories = document.querySelectorAll('.item');
console.log(`Number of categories: ${categories.length}`);

categories.forEach(el => {
    const categoriesName = el.querySelector('h2').textContent;
    const categoriesList = el.querySelector('ul');
    const categoriesListItems = categoriesList.children.length;

    console.log(`Category: ${categoriesName}\nElements: ${categoriesListItems}`);
});