import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router'
import { MessageCircle, Send, X } from 'lucide-react'
import { getPortfolioAnswer, quickQuestions, type Answer } from '../../data/assistant'
import './PortfolioAssistant.css'

type Message = Answer & { role: 'assistant' | 'user'; id: number }
const welcome: Message = { id: 0, role: 'assistant', text: 'Hi! I’m Sunil’s portfolio assistant. Explore his work, skills and background. Pick a question below or type your own.' }

export default function PortfolioAssistant() {
  const [open, setOpen] = useState(false)
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState<Message[]>([welcome])
  const launcher = useRef<HTMLButtonElement>(null)
  const closeButton = useRef<HTMLButtonElement>(null)
  const conversation = useRef<HTMLDivElement>(null)
  const close = () => { setOpen(false); launcher.current?.focus() }

  useEffect(() => {
    if (open) closeButton.current?.focus()
  }, [open])
  useEffect(() => {
    if (open && conversation.current) conversation.current.scrollTop = conversation.current.scrollHeight
  }, [messages, open])
  useEffect(() => {
    if (!open) return
    const escape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') { event.preventDefault(); setOpen(false); launcher.current?.focus() }
    }
    document.addEventListener('keydown', escape)
    return () => document.removeEventListener('keydown', escape)
  }, [open])

  const ask = (question: string) => {
    const text = question.trim().slice(0, 300)
    if (!text) return
    setMessages(previous => [...previous, { id: previous.length, role: 'user', text }, { id: previous.length + 1, role: 'assistant', ...getPortfolioAnswer(text) }])
    setInput('')
  }

  return <aside className="portfolio-assistant" aria-label="Portfolio assistant">
    {open && <div id="portfolio-assistant-panel" className="assistant-panel" role="dialog" aria-labelledby="assistant-title" aria-describedby="assistant-subtitle">
      <header className="assistant-header">
        <span className="assistant-avatar"><MessageCircle size={22} aria-hidden="true" /></span>
        <div><h2 id="assistant-title">Ask about Sunil</h2><p id="assistant-subtitle">Quick Portfolio Assistant</p></div>
        <button ref={closeButton} className="assistant-icon" onClick={close} aria-label="Close portfolio assistant"><X size={20} /></button>
      </header>
      <div ref={conversation} className="assistant-conversation" role="log" aria-label="Conversation" aria-live="polite" aria-relevant="additions" tabIndex={0} data-lenis-prevent>
        {messages.map(message => <div key={message.id} className={`assistant-message ${message.role}`}>
          <span className="assistant-speaker">{message.role === 'user' ? 'You' : 'Sunil’s assistant'}</span>
          <p>{message.text}</p>
          {message.links && <div className="assistant-links">{message.links.map(link => link.href.startsWith('ask:')
            ? <button key={link.href} onClick={() => ask(link.href.slice(4))}>{link.label}</button>
            : link.href.startsWith('/#') || link.href === '/projects'
              ? <Link key={link.href} to={link.href} onClick={close}>{link.label}</Link>
              : <a key={link.href} href={link.href} target={link.href.startsWith('mailto:') ? undefined : '_blank'} rel="noreferrer">{link.label}{!link.href.startsWith('mailto:') && <span className="sr-only"> (opens in a new tab)</span>}</a>)}</div>}
        </div>)}
      </div>
      <div className="assistant-bottom">
        <div className="assistant-chips" aria-label="Quick questions">{quickQuestions.map(question => <button key={question} onClick={() => ask(question)}>{question}</button>)}</div>
        <form onSubmit={event => { event.preventDefault(); ask(input) }} className="assistant-form">
          <label htmlFor="assistant-question" className="sr-only">Ask about Sunil</label>
          <input id="assistant-question" value={input} onChange={event => setInput(event.target.value)} maxLength={300} placeholder="Ask a portfolio question…" autoComplete="off" />
          <button className="assistant-icon" type="submit" disabled={!input.trim()} aria-label="Send question"><Send size={18} /></button>
        </form>
        <p className="assistant-note">Predefined answers · Portfolio &amp; CV sources</p>
      </div>
    </div>}
    <button ref={launcher} className="assistant-launcher" aria-expanded={open} aria-controls={open ? 'portfolio-assistant-panel' : undefined} aria-haspopup="dialog" onClick={() => open ? close() : setOpen(true)}><MessageCircle size={20} aria-hidden="true" /> Ask Sunil</button>
  </aside>
}
