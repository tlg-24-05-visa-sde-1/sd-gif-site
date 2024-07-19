export function createGif(gif) {
  let newGif = document.createElement("div");
  newGif.className = "gif";
  newGif.innerHTML = `
      <img class="gif-img" src=${gif.images.original.url} alt=${gif.alt_text}/>
      `;
  return newGif;
}
