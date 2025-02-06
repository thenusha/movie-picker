var omdbUrl = "https://www.omdbapi.com/?apikey=77b3c115&s=movie";
var suggestMovieBtn = document.querySelector("#suggest-movie-btn");
var suggestedMovieEl = document.querySelector("#suggested-movie");

// Function to suggest a random movie
function suggestRandomMovie() {
  fetch(omdbUrl)
    .then(response => response.json())
    .then(data => {
      console.log("API Response:", data); // Debugging: Check API response in console

      if (data.Response === "False") {
        suggestedMovieEl.innerHTML = "Error: " + data.Error;
        return;
      }

      let movies = data.Search;
      if (!movies || movies.length === 0) {
        suggestedMovieEl.innerHTML = "No movies found. Try again!";
        return;
      }

      let randomMovie = movies[Math.floor(Math.random() * movies.length)].Title;

      suggestedMovieEl.innerHTML = "You should watch: <b>" + randomMovie + "</b>";
    })
    .catch(error => {
      console.error("Fetch Error:", error);
      suggestedMovieEl.innerHTML = "An error occurred. Please try again later.";
    });
}

// Event listener for the button
suggestMovieBtn.addEventListener("click", suggestRandomMovie);
