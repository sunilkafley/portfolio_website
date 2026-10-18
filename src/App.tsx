import {
  Navigate,
  Route,
  Routes,
} from "react-router"

import ScrollToTop from "./components/routing/ScrollToTop"

import Home from "./pages/Home"
import Projects from "./pages/Projects"
import PortfolioAssistant from "./components/ui/PortfolioAssistant"

function App() {
  return (
    <>
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <PortfolioAssistant />
    </>
  )
}

export default App
