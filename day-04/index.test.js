import { part1, part2 } from "./index"
import readInput from "../lib/readInput.js"

describe("Day 4: Camp Cleanup", () => {
  const example = readInput("example.txt")
  const input = readInput("input.txt")

  describe("Part 1: How many pairs fully contain the other?", () => {
    it("works with the example", () => expect(part1(example)).toBe(2))
    it("works with the real input", () => expect(part1(input)).toBe(532))
  })

  describe("Part 1: How many pairs have any overlapping slots?", () => {
    it("works with the example", () => expect(part2(example)).toBe(4))
    it("works with the real input", () => expect(part2(input)).toBe(854))
  })

})