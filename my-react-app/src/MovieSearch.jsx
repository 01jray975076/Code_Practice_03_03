import { useState, useEffect } from "react";
function MovieSearch() {
    const [query, setQuery] = useState("");
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [favorites, setFavorites] = useState([]);
    const [page, setPage] = useState(1);
    const [selectedMovie, setSelectedMovie] = useState(null);
    // Load favorites on startup
    useEffect(() => {
        const saved = localStorage.getItem("favorites");
        if (saved) {
            setFavorites(JSON.parse(saved));
        }
    }, []);
    // Save favorites whenever they change
    useEffect(() => {
        localStorage.setItem("favorites", JSON.stringify(favorites));
    }, [favorites]);
    // Add to favorites
      const addToFavorites = (movie) => {
        // Prevent duplicates
        if (!favorites.some((fav) => fav.imdbID === movie.imdbID)) {
            setFavorites([...favorites, movie]);
        }
    };
 // Remove from favorites
const removeFromFavorites = (id) => {
         setFavorites(favorites.filter((movie) => movie.imdbID !== id));
    };
     const fetchMovieDetails = async (id) => {
        setLoading(true);
        setError("");
        try {
            const apikey = "a0fb06b5";
            const url = `https://www.omdbapi.com/?apikey=${apikey}&i=${id}&plot=full`;
            const res = await fetch(url);
            const data = await res.json();
            if (data.Response === "False") {
                setError("Could not load movie details.");
            } else {
                setSelectedMovie(data);
            }
        } catch (err) {
            setError("Something went wrong loading details")
        }
        setLoading(false)
    };
// Search movies
const searchMovies = async (pageNumber = page) => {
        setLoading(true); // start loading
        setError(""); // clear previous errors
        try {
            if (!query.trim()) {
                setError("Please enter a movie name.");
                setLoading(false);
                return;
            }  {}
    const apikey = "a0fb06b5";
        const url = `https://www.omdbapi.com/?apikey=${apikey}&s=${query}&page=${pageNumber}`;
        const res = await fetch(url);
        const data = await res.json();
            if (data.Response === "False") {
                setError(data.Error || "No results found.");
                setMovies([]);
            } else {
            setMovies(data.Search);
                }
             } catch (err) {
                setError("Something went wrong. Please try again.");
        }            
        setLoading(false); // stop loading
    };
    return (
        <div>
            <h2>Movie Search</h2>
            {/* Search Input */}
            <input
                type="text"
                placeholder="Search for a movie..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key === "Enter") {
                        setPage(1);
                        searchMovies();
                    }
                }}
                style={{
                    padding: "8px",
                    width: "200px",
                    marginRight: "8px",
                    borderRadius: "4px",
                    border: "1px solid #ccc"
                }}
            />
            {/* Search Button */}
            <button onClick={() => {
                setPage(1);
                searchMovies();
            }}
                style={{
                    padding: "8px 12px",
                    borderRadius: "4px",
                    border: "none",
                    background: "#007bff",
                    color: "white",
                    cursor: "pointer"
                }}
            >Search</button>
            {/* Loading Spinner */}
            {loading && (<div style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}>
                <div className="spinner"></div>
            </div>)}
            {/* Error Message */}
            {error && <p style={{ color: "red" }}>{error}</p>}
            {/* No Results */}
            {
                !loading && !error && movies.length === 0 && query.trim() !== "" && (
                    <p>No results found.</p>
                )}
            {/* Movie Results */}
            <div style={{ marginTop: "20px" }}>
                {movies.map((movie) => (
                    <div key={movie.imdbID}
                        style={{
                            border: "1px solid #ccc",
                            borderRadius: "8px",
                            padding: "12px",
                            display: "flex",
                            gap: "12px",
                            alignItems: "center",
                            background: "#fafafa",
                            marginBottom: "12px"
                        }}
                    >
                        {movie.Poster !== "N/A" && (
                            <img src=
                                {movie.Poster}
                                alt={movie.Title}
                                width="80"
                                style={{ borderRadius: "4px" }}
                            />
                        )}
                        <div>
                            <h3 style={{ margin: "0 0 6px 0" }}>{movie.Title}</h3>
                            <p style={{ margin: 0, color: "#555" }}>{movie.Year}</p>
                        </div>
                        <button
                            onClick={() => addToFavorites(movie)}
                            style={{
                                padding: "6px 10px",
                                borderRadius: "4px",
                                border: "none",
                                background: "#28a745",
                                color: "white",
                                cursor: "pointer",
                                marginLeft: "auto",
                            }}
                        >
                            ❤️ Favorite
                        </button>
                        <button
                            onclick={() => fetchMovieDetails(movie.imdbID)}
                            style={{
                                padding: "6px 10px",
                                borderRadius: "4px",
                                border: "none",
                                background: "#6c757",
                                background: "#6c757d",
                                color: "white",
                                cursor: "pointer",
                                marginLeft: "10px"
                            }}
                        >
                            View Details
                        </button>
                    </div>
                ))}
            </div>
            {/* Pagination */}
            {movies.length > 0 && (
                <div style={{ display: "flex", gap: "10px", marginTop: "20px" }}>
                    <button
                        onClick={() => {
                            const newPage = page - 1
                            setPage(newPage);
                            searchMovies(newPage);
                        }}
                        style={{
                            padding: "8px 12px",
                            borderRadius: "4px",
                            border: "none",
                            background: page === 1 ? "#ccc" : "#007bff",
                            color: "white",
                            cursor: page === 1 ? "not-allowed" : "pointer"
                        }}
                    >
                        ◀ Previous
                    </button>

                    <button
                        onClick={() => {
                            const newPage = page + 1;
                            setPage(newPage);
                            searchMovies(newPage);
                        }}
                        style={{
                            padding: "8px 12px",
                            borderRadius: "4px",
                            border: "none",
                            background: "#007bff",
                            color: "white",
                            cursor: "pointer"
                        }}
           
                    >
                        Next ▶
                    </button>
                </div>
            )}
            {/* FAVORITES SECTION SHOULD BE HERE */}
            {favorites.length > 0 && (
                <div style={{ marginTop: "30px" }}>
                    <h2>Your Favorites</h2>
                    {favorites.map((movie) => (
                        <div
                            key={movie.imdbID}
                            style={{
                                border: "1px solid #ccc",
                                borderRadius: "8px",
                                padding: "12px",
                                display: "flex",
                                gap: "12px",
                                alignItems: "center",
                                background: "#fff8el",
                                marginBottom: "12px"
                            }}
                        >
                            {movie.poster !== "N/A" && (
                                <img
                                    src={movie.Poster}
                                    alt={movie.Title}
                                    width="60"
                                    style={{ borderRadius: "4px" }}
                                />
                            )}
                            <div>
                                <h3 style={{ margin: "0 0 6px 0" }}>{movie.Title}</h3>
                                <p style={{ margin: 0, color: "#555" }}>{movie.Year}</p>
                            </div>
                            <button
                                onClick={() => removeFromFavorites(movie.imdbID)}
                                style={{
                                    padding: "6px 10px",
                                    borderRadius: "4px",
                                    border: "none",
                                    background: "#dc3545",
                                    color: "white",
                                    cursor: "pointer",
                                    marginLeft: "auto"
                                }}
                            >
                                Remove
                            </button>
                        </div>
                    ))}
                </div>
            )};
        </div>
    ); 
    {
   selectedMovie && (
            <div
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    background: "rgba(0,0,0,0.7)",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "20px",
                    zIndex: 1000
                }}
            >
                <div
                    style={{
                        background: "white",
                        padding: "20px",
                        borderRadius: "8px",
                        maxWidth: "600px",
                        maxHeight: "80vh",
                        width: "100%",
                        overflowY: "auto"
                    }}
                >
                    <h2>{selectedMovie.Title}</h2>
                    <p><strong>Year:</strong> {selectedMovie.Year}</p>
                    <p><strong>Rated:</strong> {selectedMovie.Rated}</p>
                    <p><strong>Released:</strong> {selectedMovie.Released}</p>
                    <p><strong>Runtime:</strong> {selectedMovie.Runtime}</p>
                    <p><strong>Genre:</strong> {selectedMovie.Genre}</p>
                    <p><strong>Director:</strong> {selectedMovie.Director}</p>
                    <p><strong>Actors:</strong> {selectedMovie.Actors}</p>
                    <p><strong>Plot:</strong> {selectedMovie.Plot}</p>
                    {selectedMovie.Poster !== "N/A" && (
                        <img
                        src={selectedMovie.Poster}
                            alt={selectedMovie.Title}
                            style={{ width: "200px", marginTop: "10px" }}
                        />                        
                    )}
                    <button
                        onClick={() => setSelectedMovie(null)}
                        style={{
                        marginTop: "20px",
                        padding: "8px 12px",
                        boderRadius: "4px",
                        border: "none",
                        background: "#dc3545",
                        color: "white",
                        cursor: "pointer"
                        }}
                    >
                        Close
                    </button>                    
                </div>
            </div>
    )}
}
 
export default MovieSearch;