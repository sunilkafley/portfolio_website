import React from "react"
import ReactDOM from "react-dom/client"
import { HelmetProvider } from "react-helmet-async"

import App from "./App"


import "./index.css"

import Lenis from "lenis"

const lenis = new Lenis({
  duration: 1.2,
  smoothWheel: true,
})

function raf(time: number) {
  lenis.raf(time)

  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

ReactDOM.createRoot(
  document.getElementById("root")!
).render(
  <React.StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </React.StrictMode>
)