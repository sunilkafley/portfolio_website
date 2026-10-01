import {
  Navigate,
  Route,
  Routes,
} from "react-router"

import ScrollToTop from "./components/routing/ScrollToTop"

import Home from "./pages/Home"
import Projects from "./pages/Projects"

function App() {
  return (
    <>
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  )
}

export default App
