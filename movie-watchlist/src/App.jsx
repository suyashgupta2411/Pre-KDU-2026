import { useState } from "react";
import "./styles/global.css";

import AddMovie from "./components/AddMovie";
import MovieList from "./components/MovieList";
import SearchBar from "./components/SearchBar";
import ThemeToggle from "./components/ThemeToggle";
import RatingFilter from "./components/RatingFilter";

export default function App() {
 
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [ratingFilter, setRatingFilter] = useState(null);
  const [theme, setTheme] = useState("light");

 
  const filteredMovies = movies.filter(movie => {
    const matchesSearch = movie.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesRating =
      ratingFilter === null || movie.rating === String(ratingFilter);

    return matchesSearch && matchesRating;
  });

  return (
    <div className="app">
    
      <ThemeToggle theme={theme} setTheme={setTheme} />

      <h1>🎬 Movie Watchlist</h1>

       <AddMovie movies={movies} setMovies={setMovies} />
      <SearchBar search={search} setSearch={setSearch} />

      {/* Search by rating */}
      <RatingFilter
        ratingFilter={ratingFilter}
        setRatingFilter={setRatingFilter}
      />

      {/* Add movie */}
     

      {/* Movie list */}
      <MovieList
        movies={filteredMovies}
        allMovies={movies}
        setMovies={setMovies}
      />
    </div>
  );
}
