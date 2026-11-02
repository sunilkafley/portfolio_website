import { useCallback, useEffect, useRef, useState } from 'react'

type Stream = { id: number; characters: string[]; count: number; typing: boolean }

export default function useResponseStream() {
  const [stream, setStream] = useState<Stream | null>(null)
  const delay = useRef<ReturnType<typeof setTimeout> | null>(null)
  const ticker = useRef<ReturnType<typeof setInterval> | null>(null)
  const clearTimers = useCallback(() => {
    if (delay.current !== null) clearTimeout(delay.current)
    if (ticker.current !== null) clearInterval(ticker.current)
    delay.current = null
    ticker.current = null
  }, [])
  const finish = useCallback(() => { clearTimers(); setStream(null) }, [clearTimers])
  const start = useCallback((id: number, text: string) => {
    clearTimers()
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setStream(null)
      return
    }
    // Grapheme clusters preserve emoji, combining marks and surrogate pairs.
    const characters = Array.from(new Intl.Segmenter(undefined, { granularity: 'grapheme' }).segment(text), part => part.segment)
    setStream({ id, characters, count: 0, typing: true })
    delay.current = setTimeout(() => {
      setStream(previous => previous?.id === id ? { ...previous, typing: false } : previous)
      let count = 0
      ticker.current = setInterval(() => {
        count += 1
        if (count >= characters.length) { finish(); return }
        setStream(previous => previous?.id === id ? { ...previous, count } : previous)
      }, 1000 / 32)
    }, 400)
  }, [clearTimers, finish])

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    const changed = () => { if (media.matches) finish() }
    media.addEventListener('change', changed)
    return () => { clearTimers(); media.removeEventListener('change', changed) }
  }, [clearTimers, finish])

  return { stream, start, finish }
}
