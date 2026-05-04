export function renderMovieModal(movie) {
    return `
    <div class="modal">
       <div class="modal-content">
       <button id="closeModal">Close</button>
       <h2>${movie.Title}</h2>
       <p><strong>Year:</strong> ${movie.Year}</p>
       <p><strong>Genre:</strong> ${movie.Genre}</p>
       <p><strong>Plot:</strong> ${movie.Plot}</p>
      </div>
    </div>
    `;
}