import { part1, part2 } from "./index"
import readInput from "../lib/readInput.js"

describe("Day 5: Supply Stacks", () => {
  const example = readInput("example.txt")
  const input = readInput("input.txt")

  describe("Part 1: One by one", () => {
    it("works with the example", () => expect(part1(example)).toBe('CMZ'))

    it("works with the real input", () => expect(part1(input)).toBe('FCVRLMVQP'))
  })

  describe("Part 2: Can carry all at once", () => {
    it("works with the example", () => expect(part2(example)).toBe('MCD'))

    it("works with the real input", () => expect(part2(input)).toBe('RWLWGJGFD'))
  })
})