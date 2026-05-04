import { MovieCard } from "./MovieCard.js";
export function renderMovieList(movies) {
    return movies((m) => MovieCard(m)).join("");
}