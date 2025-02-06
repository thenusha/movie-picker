var imdburl = "https://imdb-api.com/en/API/Top250Movies/k_3hg8o4xp";
var suggestMovieBtn = document.querySelector("#suggest-movie-btn");
var suggestedMovieEl = document.querySelector("#suggested-movie");

// Function to generate a random number
function getRandomNumber() {
  return Math.floor(Math.random() * 249);
}

// Function to suggest a random movie title
function suggestRandomMovie() {
  fetch(imdburl)
    .then((response) => response.json())
    .then((data) => {
      let randomMovie = data.items[getRandomNumber()].title;
      suggestedMovieEl.innerHTML =
        "You should watch: <b>" + randomMovie + "</b>";
    })
    .catch((error) => console.error("Error fetching movie:", error));
}

// Event listener for the button click
suggestMovieBtn.addEventListener("click", suggestRandomMovie);
