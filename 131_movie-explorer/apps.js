import { searchMovies, getMovieDetails } from "./src/services/movieAPI.js";
import { renderMovieList } from "./src/components/MovieList.js";
import { renderMovieModal } from "./src/components/MovieModal.js";
import { debounce } from "./src/utils/debounce.js";
const searchInput = document.getElementById("searchInput");
const movieList = document.getElementById("movieList");
const modalContainer = document.getElementById("modalContainer");
console.log("script loaded");
async function handleSearch(query) {
    if (!query) {
        movieList.innerHTML = "";
        return;
    }
    const movies = await searchMovies(query);
    movieList.innerHTML = renderMovieList(movies);
}
async function handleMovieClick(id) {
    const movie = await getMovieDetails(id);
    modalContainer.innerHTML = renderMovieModal(movie);
    document.getElementById("closeModal").onclick = () => {
        modalContainer.innerHTML = "";
    };
}
searchInput.addEventListener(
    "input",
    debounce((e) => handleSearch(e.target.value), 500)
);
document.addEventListener("click", (e) => {
    if (e.target.classList.contains("movie-card")) {
        handleMovieClick(e.target.dataset.id);
    }
});