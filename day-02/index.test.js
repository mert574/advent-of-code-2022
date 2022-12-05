import { part1, part2 } from "./index"
import readInput from "../lib/readInput.js"

describe("Day 2: Rock Paper Scissors", () => {
  const example = readInput("example.txt")
  const input = readInput("input.txt")

  describe("Part 1: Second column is what you should play", () => {
    it("works with the example", () => expect(part1(example)).toBe(15))

    it("works with the real input", () => expect(part1(input)).toBe(11_666))
  })

  describe("Part 2: Second column is how the round needs to end", () => {
    it("works with the example", () => expect(part2(example)).toBe(12))

    it("works with the real input", () => expect(part2(input)).toBe(12_767))
  })
})