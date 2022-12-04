import "../lib/array.js"

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