import { useParams, Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

export default function NowPlaying({ theme, setTheme }) {
  const params = useParams();
  const title = params.title ? decodeURIComponent(params.title) : "Unknown";

  return (
    <div className="app">
      <ThemeToggle theme={theme} setTheme={setTheme} />
      <h1>Now Playing: {title}</h1>
      <p>Playing {title}...</p>
      <Link to="/premium">← Back</Link>
    </div>
  );
}
