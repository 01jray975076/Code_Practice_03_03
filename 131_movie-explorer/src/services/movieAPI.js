const API_KEY = "a0fb06b5"; // Replace with OMDb or TMDB key
const BASE_URL = "https://www.omdbapi.com/";
export async function searchMovies(query) {
    const res = await fetch(`${BASE_URL}?apikey=${API_KEY}&s=${query}`);
    const data = await res.json();
    return data.Search || [];
}
export async function getMovieDetails(id) {
    const res = await fetch(`${BASE_URL}?apikey=${API_KEY}&i=${id}`);
   console.log("API response:", data);
    return await res.json();
}