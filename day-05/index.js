import "../lib/array.js"
import { isThisJest } from "../lib/misc.js"
import readInput from "../lib/readInput.js"


const SKIPPED_STACK_SPACE = "    "
function parseInput(input) {
  const stackOfStacks = []

  function pushToStack(index, val) {
    if (!stackOfStacks[index]) {
      stackOfStacks[index] = [val]
    } else {
      stackOfStacks[index].push(val)
    }
  }

  const [stackShape, rawProcedures] = input.split("\n\n").map(it => it.split("\n"))

  stackShape.exceptLastN(1).reverse().forEach(line => {
    let stackNumber = 0

    line.split("[").forEach((it) => {
      if (it === SKIPPED_STACK_SPACE) {
        stackNumber++
        return
      }

      const spl = it.split("]")
      if (spl.length > 1) {
        pushToStack(stackNumber++, spl[0])
        stackNumber += spl[1].split(SKIPPED_STACK_SPACE).length - 1
      }
    })
  })


  const procedures = rawProcedures.map(it => {
    const [rawHowMany, remaining] = it.slice(5).split(" from ")
    const [from, to] = remaining.split(" to ").map(Number)
    const count = Number(rawHowMany)

    return { from, to, count }
  })

  return { stackOfStacks, procedures }
}

export function part1(input) {
  const { stackOfStacks, procedures } = parseInput(input)

  for (const { from, to, count } of procedures) {
    for (let i = 0; i < count; i++) {
      stackOfStacks[to-1].push(stackOfStacks[from-1].pop())
    }
  }

  return stackOfStacks.map(it => it.last()).join("")
}

export function part2(input) {
  const { stackOfStacks, procedures } = parseInput(input)

  for (const { from, to, count } of procedures) {
    const items = stackOfStacks[from-1].splice(-count)
    stackOfStacks[to-1].push(...items)
  }

  return stackOfStacks.map(it => it.last()).join("")
}

if (!isThisJest()) {
  const example = readInput("./day-05/example.txt")
  const input = readInput("./day-05/input.txt")

  console.log("--- Day 5: Supply Stacks ---")
  console.table({
    Part1: { Example: part1(example), Input: part1(input) },
    Part2: { Example: part2(example), Input: part2(input) },
  })
}