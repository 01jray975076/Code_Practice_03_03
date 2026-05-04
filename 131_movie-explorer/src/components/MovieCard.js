export function MovieCard(movie) {
    return `
    <div class="movie-card" data-id="${movie.imdbID}">
    <h3>${movie.Title}</h3>
    <p>${movie.Year}</p>
    </div>
    `;
}