import {
  Navigate,
  Route,
  Routes,
} from "react-router"

import ScrollToTop from "./components/routing/ScrollToTop"

import Home from "./pages/Home"
import Projects from "./pages/Projects"
import PortfolioAssistant from "./components/ui/PortfolioAssistant"
import { useRef, useState } from "react"

function App() {
  const [assistantOpen, setAssistantOpen] = useState(false)
  const assistantOpener = useRef<HTMLButtonElement | null>(null)
  const openAssistant = (button: HTMLButtonElement) => {
    assistantOpener.current = button
    setAssistantOpen(true)
  }
  const closeAssistant = () => {
    setAssistantOpen(false)
    assistantOpener.current?.focus()
  }
  return (
    <>
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home onAskSunil={openAssistant} assistantOpen={assistantOpen} />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <PortfolioAssistant open={assistantOpen} onOpen={openAssistant} onClose={closeAssistant} />
    </>
  )
}

export default App
