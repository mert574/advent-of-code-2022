import "../lib/array"
import { charCodeOf } from "../lib/misc.js"

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
    .groupIntoChunks(3)
    // find the items that are in all bags of the group
    .flatMap(([bag1, bag2, bag3]) => bag1.split("").intersection(bag2).intersection(bag3).uniq())
    // get char codes and normalize them by subtracting "a"
    .map(char => charCodeOf(char) - charCodeOf("a") + 1)
    // now [A-Z] is between (-31)-(-6) and [a-z] between 1-26. need to fix [A-Z]
    .map(score => score > 0 ? score : (score + 58))
    .sum()
}