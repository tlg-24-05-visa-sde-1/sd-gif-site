//imports
import { fetchData } from "./js-modules/fetch-data.js";
import { createGif } from "./js-modules/create-gif.js";
import { displayCategory } from "./js-modules/display-category.js";
import { clearContainer } from "./js-modules/clear-container.js";

// display all products
fetchData("products", createCard);

// add event listener to category buttons
document.querySelector(".btn-categories").addEventListener("click", (event) => {
  // if a button is clicked
  if (event.target.classList.contains("btn")) {
    // collect category
    let category = event.target.textContent.toLowerCase();
    // display only electronics products
    displayCategory(category, clearContainer, fetchData, createCard);
  }
});
