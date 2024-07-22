//imports
import { fetchData } from "./js-modules/fetch-data.js";
import { createGif } from "./js-modules/create-gif.js";
import { displayCategory } from "./js-modules/display-category.js";
import { clearContainer } from "./js-modules/clear-container.js";

// display trending gifs
fetchData("trending", createGif);

// add event listener to category buttons
document.querySelector(".btn-categories").addEventListener("click", (event) => {
  // if a button is clicked
  if (event.target.classList.contains("btn")) {
    // collect category
    let category = event.target.textContent.toLowerCase();
    // display only that category of gifs
    displayCategory(category, clearContainer, fetchData, createGif);
  }
});

// add event listener to search bar submit button
document.querySelector(".search-bar").addEventListener("click", (event) => {
  event.preventDefault();
  // if submit button was clicked
  if (event.target.classList.contains("search-btn")) {
    // collect category
    let category = document.getElementById("gifCategory").value.toLowerCase();
    // display only that category of gifs
    displayCategory(category, clearContainer, fetchData, createGif);
  }
});
