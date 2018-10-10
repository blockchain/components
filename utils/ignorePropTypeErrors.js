const originalConsoleError = console.error

console.error = (message) => {
  if (!/(Failed prop type)/.test(message)) {
    originalConsoleError(message)
  }
}
