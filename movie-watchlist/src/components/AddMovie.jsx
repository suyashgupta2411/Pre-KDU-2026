import { useState } from "react";
import "../styles/addMovie.css";

export default function AddMovie({ movies, setMovies }) {
  const [name, setName] = useState("");
  const [rating, setRating] = useState("1");

  const addMovie = () => {
    const trimmedName = name.trim();

    if (!trimmedName) {
      alert("Movie name cannot be empty");
      return;
    }

    const alreadyExists = movies.some(
      m => m.name.toLowerCase() === trimmedName.toLowerCase()
    );

    if (alreadyExists) {
      alert("Movie already exists in watchlist");
      return;
    }

    setMovies(prev => [
      ...prev,
      {
        id: Date.now(),
        name: trimmedName,
        rating,
        watched: false
      }
    ]);

    setName("");
    setRating("1");
  };

  return (
    <div className="add-movie">
      <input
        placeholder="Movie name"
        value={name}
        onChange={e => setName(e.target.value)}
      />

      <select value={rating} onChange={e => setRating(e.target.value)}>
        {[1, 2, 3, 4, 5].map(n => (
          <option key={n} value={n}>{n} ⭐</option>
        ))}
      </select>

      <button onClick={addMovie}>Add</button>
    </div>
  );
}
