import { useEffect } from "react"
import { useLocation } from "react-router"

const ScrollToTop = () => {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      if (hash) {
        const target = document.getElementById(hash.slice(1))

        target?.scrollIntoView()
        return
      }

      window.scrollTo({ top: 0, left: 0 })
    })

    return () => window.cancelAnimationFrame(frame)
  }, [pathname, hash])

  return null
}

export default ScrollToTop
