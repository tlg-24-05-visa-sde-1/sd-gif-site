export function fetchData(apiExtension, createGif) {
  let url = `https://api.giphy.com/v1/gifs/search?api_key=a9i7Ojgpo90Dfl67L65z1rp7zmopaExU&q=${apiExtension}&limit=10&offset=0&rating=g&lang=en&bundle=messaging_non_clips`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data.data);
      for (let i = 0; i < data.data.length; i++) {
        // make each gif into a card
        let gifCard = createGif(data.data[i]);
        // append each card to the div container
        document.querySelector(".gif-container").appendChild(gifCard);
      }
    });
}
