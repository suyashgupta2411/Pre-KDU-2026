import "../styles/ratingFilter.css";

export default function RatingFilter({ ratingFilter, setRatingFilter }) {
  return (
    <div className="rating-filter">
      {/* ALL BUTTON */}
      <button
        className={ratingFilter === null ? "active" : ""}
        onClick={() => setRatingFilter(null)}
      >
        All
      </button>

      {[1, 2, 3, 4, 5].map(star => (
        <button
          key={star}
          className={ratingFilter === star ? "active" : ""}
          onClick={() =>
            setRatingFilter(prev => (prev === star ? null : star))
          }
          aria-label={`Filter ${star} star`}
        >
          {star} ⭐
        </button>
      ))}
    </div>
  );
}
