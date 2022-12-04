import "../lib/array"

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
