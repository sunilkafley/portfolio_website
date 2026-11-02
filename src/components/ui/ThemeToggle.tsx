import { Moon, Sun } from "lucide-react"
import { useEffect, useState } from "react"

const ThemeToggle = () => {
  const [dark, setDark] = useState(() => !document.documentElement.classList.contains("light-theme"))

  useEffect(() => {
    const sync = () => setDark(!document.documentElement.classList.contains("light-theme"))
    window.addEventListener("portfolio-theme-change", sync)
    return () => window.removeEventListener("portfolio-theme-change", sync)
  }, [])

  const toggleTheme = () => {
    const nextDark = document.documentElement.classList.contains("light-theme")
    document.documentElement.classList.toggle("light-theme", !nextDark)
    document.querySelector('meta[name="theme-color"]')?.setAttribute("content", nextDark ? "#050816" : "#EEF2F7")
    try { localStorage.setItem("portfolio-theme", nextDark ? "dark" : "light") } catch { /* Theme still works for this visit. */ }
    window.dispatchEvent(new Event("portfolio-theme-change"))
  }

  return (
    <button
      onClick={toggleTheme}
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      className="
        w-12
        h-12
        flex
        items-center
        justify-center
        rounded-xl
        bg-(--color-surface)
        transition-all
        duration-300
        hover:scale-105
      "
    >
      {dark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  )
}

export default ThemeToggle
