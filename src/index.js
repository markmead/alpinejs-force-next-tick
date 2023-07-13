export default function (Alpine) {
  Alpine.magic('forceNextTick', () => (methodCallback) => {
    const hasCallback = methodCallback && typeof methodCallback === 'function'

    if (hasCallback) {
      return requestAnimationFrame(() => requestAnimationFrame(methodCallback))
    }

    return new Promise((newPromise) =>
      requestAnimationFrame(() => requestAnimationFrame(newPromise))
    )
  })
}
