import PremiumMovie from "./PremiumMovie";
import "../styles/movieList.css";

export default function PremiumRentals() {
  const movies = ["ABC", "CDE", "EFG"];

  return (
    <div className="app">
      <h1>Premium Rentals</h1>
      <div className="list">
        {movies.map((m) => (
          <PremiumMovie key={m} title={m} />
        ))}
      </div>
    </div>
  );
}
