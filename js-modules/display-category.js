export function displayCategory(
  category,
  clearContainer,
  fetchData,
  createGif
) {
  // clear product container using .remove()
  clearContainer();

  // display products of a certain category
  fetchData(category, createGif);
}
