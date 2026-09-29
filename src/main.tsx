import React from "react"
import ReactDOM from "react-dom/client"
import { HelmetProvider } from "react-helmet-async"
import { BrowserRouter } from "react-router"

import App from "./App"

import "@fontsource-variable/inter/wght.css"
import "@fontsource-variable/sora/wght.css"
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
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
)
