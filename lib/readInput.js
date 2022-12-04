import fs from "fs";

function getCurrentTestFilePath() {
  if (!expect) {
    return null
  }
  const cwd = expect.getState().testPath
  return cwd.split("/").slice(0, -1).join("/")
}

export default function readInput(file = "input.txt") {
  const cwd = getCurrentTestFilePath()
  return fs.readFileSync(cwd + "/" +file, "utf-8")
}
