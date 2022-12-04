import fs from "fs";
import path from "path";

function getCurrentTestFilePath() {
  if (!global.expect) {
    return null
  }

  const cwd = global.expect.getState().testPath
  return cwd.split("/").slice(0, -1).join("/")
}

export default function readInput(file = "input.txt") {
  const cwd = getCurrentTestFilePath() || path.resolve()
  return fs.readFileSync(cwd + "/" +file, "utf-8")
}