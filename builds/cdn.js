import forceNextTick from '../src/index.js'

document.addEventListener('alpine:init', () =>
  window.Alpine.plugin(forceNextTick)
)
