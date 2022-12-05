import fs from "fs"
import path from "path"

function getCurrentTestFilePath() {
  if (!global.expect) {
    return null
  }

  const cwd = global.expect.getState().testPath
  return path.dirname(cwd)
}

export default function readInput(file = "input.txt") {
  const cwd = getCurrentTestFilePath() || '.'
  return fs.readFileSync(path.resolve(cwd, file), "utf-8")
}