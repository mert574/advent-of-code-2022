export function isThisJest() {
  return process.argv.some(it => it.includes("/jest/"))
}

export function charCodeOf(c) {
  return c.charCodeAt(0)
}