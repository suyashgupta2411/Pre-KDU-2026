import "../styles/movieItem.css";

export default function MovieItem({ movie, setMovies }) {

  const toggleWatched = () => {
    setMovies(prev =>
      prev.map(m =>
        m.id === movie.id ? { ...m, watched: !m.watched } : m
      )
    );
  };

  const deleteMovie = () => {
    setMovies(prev => prev.filter(m => m.id !== movie.id));
  };

  return (
    <div className="movie">
      <div className={`movie-info ${movie.watched ? "watched" : ""}`}>
        <span className="movie-name">{movie.name}</span>
        <span className="rating">{movie.rating} ⭐</span>
      </div>

      <div className="actions">
        <button
          className={`icon-btn tick ${movie.watched ? "active" : ""}`}
          onClick={toggleWatched}
          aria-label="Mark watched"
        >
          ✓
        </button>

        <button
          className="icon-btn delete"
          onClick={deleteMovie}
          aria-label="Delete movie"
        >
          ✕
        </button>
      </div>
    </div>
  );
}
