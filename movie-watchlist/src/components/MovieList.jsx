import MovieItem from "./MovieItem";
import "../styles/movieList.css";

export default function MovieList({ movies, allMovies, setMovies }) {
  if (allMovies.length === 0) {
    return <p className="empty">Your watchlist is empty. Add your first movie!</p>;
  }

  if (movies.length === 0) {
    return <p className="empty">No movies found. Try a different search!</p>;
  }

  return (
    <>
      <p className="count">Movies in Watchlist: {allMovies.length}</p>

      <button className="clear" onClick={() => setMovies([])}>
        Clear All
      </button>

      <div className="list">
        {movies.map(movie => (
          <MovieItem key={movie.id} movie={movie} setMovies={setMovies} />
        ))}
      </div>
    </>
  );
}
