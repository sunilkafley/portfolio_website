import { test } from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import vm from 'node:vm'
import ts from 'typescript'

// A deterministic timer/state harness for the hook's scheduling contract.
// Browser checks cover the real React rendering, focus and scrolling behavior.
function harness(reduced = false) {
  let state = null
  let now = 0
  let next = 0
  let cleanup
  let mediaListener
  const timers = new Map()
  const media = {
    matches: reduced,
    addEventListener: (_event, callback) => { mediaListener = callback },
    removeEventListener: () => { mediaListener = undefined },
  }
  const schedule = (callback, ms, repeat = false) => {
    const id = ++next
    timers.set(id, { callback, time: now + ms, ms, repeat })
    return id
  }
  const exports = {}
  const source = readFileSync(new URL('../src/components/ui/useResponseStream.ts', import.meta.url), 'utf8')
  vm.runInNewContext(ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS } }).outputText, {
    exports, Intl,
    require: () => ({
      useState: () => [state, update => { state = typeof update === 'function' ? update(state) : update }],
      useRef: value => ({ current: value }),
      useCallback: callback => callback,
      useEffect: effect => { cleanup = effect() },
    }),
    window: { matchMedia: () => media },
    setTimeout: (callback, ms) => schedule(callback, ms),
    setInterval: (callback, ms) => schedule(callback, ms, true),
    clearTimeout: id => timers.delete(id),
    clearInterval: id => timers.delete(id),
  })
  const hook = exports.default()
  return {
    hook,
    get state() { return state },
    get pending() { return timers.size },
    unmount() { cleanup() },
    reduce() { media.matches = true; mediaListener() },
    advance(ms) {
      const end = now + ms
      while (true) {
        const entry = [...timers].sort((a, b) => a[1].time - b[1].time)[0]
        if (!entry || entry[1].time > end) break
        const [id, timer] = entry
        now = timer.time
        if (timer.repeat) timer.time += timer.ms
        else timers.delete(id)
        timer.callback()
      }
      now = end
    },
  }
}

test('400ms indicator, 32 graphemes/second, Unicode and multiline completion', () => {
  const h = harness()
  const text = 'A👩🏽‍💻e\u0301\n— hello!'
  h.hook.start(1, text)
  assert.equal(h.state.typing, true)
  h.advance(399)
  assert.equal(h.state.count, 0)
  h.advance(1)
  assert.equal(h.state.typing, false)
  h.advance(1000 / 32 * 3)
  assert.equal(h.state.characters.slice(0, h.state.count).join(''), 'A👩🏽‍💻e\u0301')
  assert.equal(h.state.characters.join(''), text)
  h.advance(1000)
  assert.equal(h.state, null)
  assert.equal(h.pending, 0)
})

test('replacement, skip/close and unmount leave no scheduled work', () => {
  const h = harness()
  h.hook.start(1, 'A'.repeat(200))
  h.advance(450)
  h.hook.start(2, 'B'.repeat(200))
  assert.equal(h.pending, 1)
  h.advance(500)
  assert.equal(h.state.id, 2)
  assert.equal(h.state.characters[0], 'B')
  h.hook.finish()
  assert.equal(h.state, null)
  assert.equal(h.pending, 0)
  h.hook.start(3, 'C'.repeat(200))
  h.unmount()
  assert.equal(h.pending, 0)
})

test('reduced motion skips all timers and can finish an active stream', () => {
  const immediate = harness(true)
  immediate.hook.start(1, 'Immediate')
  assert.equal(immediate.state, null)
  assert.equal(immediate.pending, 0)
  const changed = harness()
  changed.hook.start(2, 'Long answer')
  changed.advance(500)
  changed.reduce()
  assert.equal(changed.state, null)
  assert.equal(changed.pending, 0)
})
