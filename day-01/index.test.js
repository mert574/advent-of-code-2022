import { part1, part2 } from "./index"
import readInput from "../lib/readInput";

describe('Day 1: Calorie Counting', () => {
  const example = readInput("example.txt")
  const input = readInput("input.txt")

  describe('Part 1: How many total Calories is that Elf carrying?', () => {
    it('works with the example', () => expect(part1(example)).toBe(24_000));

    it('works with the real input', () => expect(part1(input)).toBe(67_622));
  });

  describe('Part 2: How many Calories are those Elves carrying in total?', () => {
    it('works with the example', () => expect(part2(example)).toBe(45_000));

    it('works with the real input', () => expect(part2(input)).toBe(201_491));
  })
});
