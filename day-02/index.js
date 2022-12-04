import "../lib/array.js"
import { isThisJest } from "../lib/misc.js"
import readInput from "../lib/readInput.js"

// round (0 lost, 3 draw, 6 won)
const outcomeScore = { lose: 0, draw: 3, win: 6 }

// hand (1 Rock, 2 Paper, 3 Scissors)
const handScore = { X: 1, Y: 2, Z: 3 }

function roundOutcome(opponent, player) {
  // A for Rock, B for Paper, and C for Scissors.
  // X for Rock, Y for Paper, and Z for Scissors

  if ({ A: "X", B: "Y", C: "Z" }[opponent] === player) {
    return "draw"
  }
  if ({ A: "Z", B: "X", C: "Y" }[opponent] === player) {
    return "lose"
  }
  return "win"
}

export function part1(input) {
  return input.split("\n")
    .map((it) => it.split(" "))
    .map(([opponent, player]) => handScore[player] + outcomeScore[roundOutcome(opponent, player)])
    .sum()
}

export function part2(input) {
  const outcomeMap = { X: "lose", Y: "draw", Z: "win" }
  const memo = { A: {}, B: {}, C: {} }

  function roundScore(move, outcome) {
    if (!memo[move][outcome]) {
      memo[move][outcome] = ["X", "Y", "Z"].find((it) => roundOutcome(move, it) === outcome)
    }

    return outcomeScore[outcome] + handScore[memo[move][outcome]]
  }

  return input.split("\n")
    .map((it) => it.split(" "))
    .map(([opponent, outcome]) => roundScore(opponent, outcomeMap[outcome]))
    .sum()
}

if (!isThisJest()) {
  const example = readInput("./day-02/example.txt")
  const input = readInput("./day-02/input.txt")

  console.log("--- Day 2: Rock Paper Scissors ---")
  console.table({
    Part1: { Example: part1(example), Input: part1(input) },
    Part2: { Example: part2(example), Input: part2(input) },
  })
}