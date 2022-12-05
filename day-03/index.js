import "../lib/array.js"
import { charCodeOf, isThisJest } from "../lib/misc.js"
import readInput from "../lib/readInput.js"

export function part1(input) {
  return input.split("\n")
    // split into two
    .map((it) => [it.slice(0, it.length / 2), it.slice(-it.length / 2)])
    // get intersection of characters
    .flatMap(([bag1, bag2]) => bag1.split("").intersection(bag2).uniq())
    // get char codes and normalize them by subtracting "a"
    .map(char => charCodeOf(char) - charCodeOf("a") + 1)
    // now [A-Z] is between (-31)-(-6) and [a-z] between 1-26. need to fix [A-Z]
    .map(score => score > 0 ? score : (score + 58))
    .sum()
}

export function part2(input) {
  return input.split("\n")
    .splitIntoChunks(3)
    // find the items that are in all bags of the group
    .flatMap(([bag1, bag2, bag3]) => bag1.split("").intersection(bag2).intersection(bag3).uniq())
    // get char codes and normalize them by subtracting "a"
    .map(char => charCodeOf(char) - charCodeOf("a") + 1)
    // now [a-z] between 1-26 and [A-Z] is between (-31)-(-6). need to fix [A-Z]
    .map(score => score > 0 ? score : (score + 58))
    .sum()
}

if (!isThisJest()) {
  const example = readInput("./day-03/example.txt")
  const input = readInput("./day-03/input.txt")

  console.log("--- Day 3: Rucksack Reorganization ---")
  console.table({
    Part1: { Example: part1(example), Input: part1(input) },
    Part2: { Example: part2(example), Input: part2(input) },
  })
}