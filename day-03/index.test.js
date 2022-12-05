import { part1, part2 } from "./index"
import readInput from "../lib/readInput.js"

describe("Day 3: Rucksack Reorganization", () => {
  const example = readInput("example.txt")
  const input = readInput("input.txt")

  describe("Part 1: Sum of the priorities of the items in both compartments", () => {
    it("works with the example", () => expect(part1(example)).toBe(157))

    it("works with the real input", () => expect(part1(input)).toBe(8105))
  })

  describe("Part 2: Sum of the priorities of the items in 3-Elf groups", () => {
    it("works with the example", () => expect(part2(example)).toBe(70))

    it("works with the real input", () => expect(part2(input)).toBe(2363))
  })
})