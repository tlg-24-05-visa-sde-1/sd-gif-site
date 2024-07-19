export function createGif(gif) {
  let newGif = document.createElement("div");
  newGif.className = "gif";
  newGif.innerHTML = `
      <img class="gif-img" src=${gif.gif.url} alt=${gif.gif.alt_text}/>
      `;
  return newGif;
}
