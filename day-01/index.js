import "../lib/array.js"
import { isThisJest } from "../lib/misc.js"
import readInput from "../lib/readInput.js"

function sumOfCaloriesOfElves(input) {
  return input.split("\n\n").map(it => it.split("\n").map(Number).sum())
}

export function part1(input) {
  return sumOfCaloriesOfElves(input)
    .sortDesc()
    .first()
}

export function part2(input) {
  return sumOfCaloriesOfElves(input)
    .sortDesc()
    .slice(0, 3)
    .sum()
}

if (!isThisJest()) {
  const example = readInput("./day-01/example.txt")
  const input = readInput("./day-01/input.txt")

  console.log("--- Day 1: Calorie Counting ---")
  console.table({
    Part1: { Example: part1(example), Input: part1(input) },
    Part2: { Example: part2(example), Input: part2(input) },
  })
}