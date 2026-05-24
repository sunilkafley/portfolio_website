import { Moon, Sun } from "lucide-react"
import { useEffect, useState } from "react"

const ThemeToggle = () => {
  const [dark, setDark] = useState(true)

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.remove("light-theme")
    } else {
      document.documentElement.classList.add("light-theme")
    }
  }, [dark])

  return (
    <button
      onClick={() => setDark(!dark)}
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
