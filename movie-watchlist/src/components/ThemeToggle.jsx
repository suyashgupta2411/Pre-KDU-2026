import { useEffect } from "react";
import "../styles/ThemeToggle.css";

export default function ThemeToggle({ theme, setTheme }) {
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <button
      className="theme-toggle"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      aria-label="Toggle theme"
    >
      {theme === "light" ? "🌙" : "☀"}
    </button>
  );
}
