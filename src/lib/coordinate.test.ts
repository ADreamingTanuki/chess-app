import { expect, test } from 'vitest'
import Coordinate from "./coordinate";

test('Coordinate.fromString(): valid coordinate parses data correctly', () => {
  const c = Coordinate.fromString("A8");
  expect(c.string).toBe('a8');
  expect(c.column).toBe(0);
  expect(c.row).toBe(7);
});

test('Coordinate.fromString(): input must be a two-character string, with a letter first and number second', () => { 
  expect(() => Coordinate.fromString("5a").string).toThrow();
  expect(() => Coordinate.fromString("ac").string).toThrow();
  expect(() => Coordinate.fromString("45").string).toThrow();
  expect(() => Coordinate.fromString("a5b").string).toThrow();
  expect(() => Coordinate.fromString("c:6").string).toThrow();
  expect(() => Coordinate.fromString("c-6").string).toThrow();
  expect(() => Coordinate.fromString("c 6").string).toThrow();
});

test('Coordinate.fromString(): input row must be a valid value [1~8]', async () => { 
  expect(Coordinate.fromString("a5").string).toBe("a5");
  expect(() => Coordinate.fromString("a9")).toThrow();
});

test('Coordinate.fromString(): input column must be a valid value [A~H]', async () => {
  expect(Coordinate.fromString("e4").string).toBe("e4");
  expect(() => Coordinate.fromString("x5")).toThrow();
});

test('Coordinate.fromNumbers(): function works as expected', () => {
  expect(Coordinate.fromNumbers(0,0).string).toBe("a1");
  expect(Coordinate.fromNumbers(0,7).string).toBe("h1");
  expect(Coordinate.fromNumbers(7,0).string).toBe("a8");
  expect(Coordinate.fromNumbers(7,7).string).toBe("h8");
});

test('Coordinate.fromNumbers(): function will not accept any out of bounds values', async () => {
  expect(() => Coordinate.fromNumbers(-1,3).string).toThrow();
});

test('Coordinate.fromNumbers(): function will not accept any floating point values', async () => {
  expect(() => Coordinate.fromNumbers(0.5, 5.3)).toThrow();
  expect(() => Coordinate.fromNumbers(0.5, 7)).toThrow();
  expect(() => Coordinate.fromNumbers(1, 4.2)).toThrow();
});



test('Coordinate.colour(): function works as expected', () => {
  expect(Coordinate.fromString("a1").colour()).toBe('black');
  expect(Coordinate.fromString("h8").colour()).toBe('black');
  expect(Coordinate.fromString("e2").colour()).toBe('white');
  expect(Coordinate.fromString("d5").colour()).toBe('white');
});
