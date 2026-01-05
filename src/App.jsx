import { useState } from "react";
import "./styles/global.css";

import AddMovie from "./components/AddMovie";
import MovieList from "./components/MovieList";
import SearchBar from "./components/SearchBar";
import ThemeToggle from "./components/ThemeToggle";
import RatingFilter from "./components/RatingFilter";
import PremiumRentals from "./components/PremiumRentals";
import NowPlaying from "./components/NowPlaying";
import { Routes, Route, Link } from "react-router-dom";

function Home({ theme, setTheme, movies, setMovies }) {
  const [search, setSearch] = useState("");
  const [ratingFilter, setRatingFilter] = useState(null);

  const filteredMovies = movies.filter((movie) => {
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

      <RatingFilter
        ratingFilter={ratingFilter}
        setRatingFilter={setRatingFilter}
      />

      <MovieList
        movies={filteredMovies}
        allMovies={movies}
        setMovies={setMovies}
      />
    </div>
  );
}

export default function App() {
  const [theme, setTheme] = useState("light");
  const [movies, setMovies] = useState([]);

  return (
    <div>
      <nav>
        <ThemeToggle theme={theme} setTheme={setTheme} />
        <Link to="/" style={{ marginRight: 12 }}>
          Home
        </Link>
        <Link to="/premium">Premium Rentals</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home theme={theme} setTheme={setTheme} movies={movies} setMovies={setMovies} />} />
        <Route path="/premium" element={<PremiumRentals />} />
        <Route path="/now-playing/:title" element={<NowPlaying theme={theme} setTheme={setTheme} />} />
      </Routes>
    </div>
  );
}
