import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/movieItem.css";

export default function PremiumMovie({ title }) {
  const [time, setTime] = useState(10);
  const [running, setRunning] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!running) return;
    if (time <= 0) {
      setRunning(false);
      return;
    }

    const id = setInterval(() => {
      setTime((t) => t - 1);
    }, 1000);

    return () => clearInterval(id);
  }, [running, time]);

  return (
    <div className="movie">
      <div className="movie-info">
        <span className="movie-name">{title}</span>
        <span className="rating">{time}s</span>
      </div>

      <div className="actions">
        {time > 0 ? (
          <>
            <button
              className="icon-btn tick"
              onClick={() => setRunning(true)}
              disabled={running}
            >
              ☑️
            </button>
            <button
              className="icon-btn delete"
              onClick={() => {
                setRunning(false);
                setTime(10);
              }}
            >
              🚫
            </button>
          </>
        ) : (
          <button
            className="icon-btn tick active"
            onClick={() => navigate(`/now-playing/${encodeURIComponent(title)}`)}
          >
            Watch
          </button>
        )}
      </div>
    </div>
  );
}
