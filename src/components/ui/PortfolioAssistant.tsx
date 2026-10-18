import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router'
import { MessageCircle, Send, X } from 'lucide-react'
import { getPortfolioAnswer, quickQuestions, type Answer } from '../../data/assistant'
import './PortfolioAssistant.css'
import useResponseStream from './useResponseStream'

type Message = Answer & { role: 'assistant' | 'user'; id: number }
const welcome: Message = { id: 0, role: 'assistant', text: 'Hi! I’m Sunil’s portfolio assistant. Explore his work, skills and background. Pick a question below or type your own.' }

export default function PortfolioAssistant({ open, onOpen, onClose }: { open: boolean; onOpen: (button: HTMLButtonElement) => void; onClose: () => void }) {
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState<Message[]>([welcome])
  const { stream, start, finish } = useResponseStream()
  const [announcement, setAnnouncement] = useState('')
  const nextId = useRef(1)
  const nearBottom = useRef(true)
  const closeButton = useRef<HTMLButtonElement>(null)
  const conversation = useRef<HTMLDivElement>(null)
  const close = () => { finish(); onClose() }

  useEffect(() => {
    if (open) closeButton.current?.focus()
  }, [open])
  useEffect(() => {
    if (open && nearBottom.current && conversation.current) conversation.current.scrollTop = conversation.current.scrollHeight
  }, [messages, open, stream])
  useEffect(() => {
    if (!open) return
    const escape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') { event.preventDefault(); finish(); onClose() }
    }
    document.addEventListener('keydown', escape)
    return () => document.removeEventListener('keydown', escape)
  }, [open, finish, onClose])

  const ask = (question: string) => {
    const text = Array.from(question.trim()).slice(0, 300).join('')
    if (!text) return
    const answer = getPortfolioAnswer(text)
    const userId = nextId.current++
    const answerId = nextId.current++
    setMessages(previous => [...previous, { id: userId, role: 'user', text }, { id: answerId, role: 'assistant', ...answer }])
    setAnnouncement(answer.text)
    start(answerId, answer.text)
    setInput('')
  }

  return <aside className="portfolio-assistant" aria-label="Portfolio assistant">
    {open && <div id="portfolio-assistant-panel" className="assistant-panel" role="dialog" aria-labelledby="assistant-title" aria-describedby="assistant-subtitle">
      <header className="assistant-header">
        <span className="assistant-avatar"><MessageCircle size={22} aria-hidden="true" /></span>
        <div><h2 id="assistant-title">Ask about Sunil</h2><p id="assistant-subtitle">Quick Portfolio Assistant</p></div>
        <button ref={closeButton} className="assistant-icon" onClick={close} aria-label="Close portfolio assistant"><X size={20} /></button>
      </header>
      <div ref={conversation} className="assistant-conversation" role="log" aria-label="Conversation" aria-live="off" onScroll={event => { const el = event.currentTarget; nearBottom.current = el.scrollHeight - el.scrollTop - el.clientHeight < 64 }} tabIndex={0} data-lenis-prevent>
        {messages.map(message => <div key={message.id} className={`assistant-message ${message.role}`}>
          <span className="assistant-speaker">{message.role === 'user' ? 'You' : 'Sunil’s assistant'}</span>
          {stream?.id === message.id ? <>
            <span className="sr-only">{message.text}</span>
            <div aria-hidden="true">{stream.typing ? <span className="assistant-typing"><i /><i /><i /></span> : <p>{stream.characters.slice(0, stream.count).join('')}<span className="assistant-cursor">▍</span></p>}</div>
          </> : <p>{message.text}</p>}
          {stream?.id !== message.id && message.links && <div className="assistant-links">{message.links.map(link => link.href.startsWith('ask:')
            ? <button key={link.href} onClick={() => ask(link.href.slice(4))}>{link.label}</button>
            : link.href.startsWith('/#') || link.href === '/projects'
              ? <Link key={link.href} to={link.href} onClick={close}>{link.label}</Link>
              : <a key={link.href} href={link.href} target={link.href.startsWith('mailto:') ? undefined : '_blank'} rel="noreferrer">{link.label}{!link.href.startsWith('mailto:') && <span className="sr-only"> (opens in a new tab)</span>}</a>)}</div>}
        </div>)}
      </div>
      <div className="assistant-bottom">
        {stream && <button className="assistant-skip" onClick={finish}>Skip animation</button>}
        <div className="assistant-chips" aria-label="Quick questions">{quickQuestions.map(question => <button key={question} onClick={() => ask(question)}>{question}</button>)}</div>
        <form onSubmit={event => { event.preventDefault(); ask(input) }} className="assistant-form">
          <label htmlFor="assistant-question" className="sr-only">Ask about Sunil</label>
          <input id="assistant-question" value={input} onChange={event => setInput(event.target.value)} maxLength={300} placeholder="Ask a portfolio question…" autoComplete="off" />
          <button className="assistant-icon" type="submit" disabled={!input.trim()} aria-label="Send question"><Send size={18} /></button>
        </form>
        <p className="assistant-note">Predefined answers · Portfolio &amp; CV sources</p>
      </div>
    </div>}
    <div className="sr-only" role="status" aria-live="polite" aria-atomic="true">{announcement}</div>
    <button className="assistant-launcher" aria-label="Ask Sunil" aria-expanded={open} aria-controls={open ? 'portfolio-assistant-panel' : undefined} aria-haspopup="dialog" onClick={event => open ? close() : onOpen(event.currentTarget)}><MessageCircle size={20} aria-hidden="true" /><span>Ask Sunil</span></button>
  </aside>
}
