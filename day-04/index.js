import "../lib/array.js"
import { isThisJest } from "../lib/misc.js"
import readInput from "../lib/readInput.js"

function prepareData(input) {
  return input.split("\n")
    .map(it => it.split(","))
    // split into individual range slots
    .map(pairs => pairs.map(range => range.split("-").map(Number)))
}

export function part1(input) {
  function isFullyOverlapping([ start1, end1 ], [start2, end2]) {
    const first = start1 >= start2 && end1 <= end2
    const second = start2 >= start1 && end2 <= end1
    return first || second
  }

  return prepareData(input)
    .filter(([pair1, pair2]) => isFullyOverlapping(pair1, pair2))
    .length
}

export function part2(input) {
  function isPartiallyOverlapping([ start1, end1 ], [start2, end2]) {
    const first = start1 >= start2 && start1 <= end2
    const second = start2 >= start1 && start2 <= end1
    return first || second
  }

  return prepareData(input)
    .filter(([pair1, pair2]) => isPartiallyOverlapping(pair1, pair2))
    .length
}

if (!isThisJest()) {
  const example = readInput("./day-04/example.txt")
  const input = readInput("./day-04/input.txt")

  console.log("--- Day 4: Camp Cleanup ---")
  console.table({
    Part1: { Example: part1(example), Input: part1(input) },
    Part2: { Example: part2(example), Input: part2(input) },
  })
}