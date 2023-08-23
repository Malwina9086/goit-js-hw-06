"use strict";
const categoriesList = document.querySelectorAll("#categories li.item");
const categoriesQuantity = categoriesList.length;

console.log(`Number of categories: ${categoriesQuantity}`);

categoriesList.forEach((category) => {
  const categoryTitle = category.querySelector("h2");
  const categoryItem = categoryTitle.textContent;

  const itemList = category.querySelectorAll("ul li");
  const itemQuantity = itemList.length;

  console.log(`Category: ${categoryItem}`);
  console.log(`Elements: ${itemQuantity}`);
});
