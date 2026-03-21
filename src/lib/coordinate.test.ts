import { expect, test } from 'vitest'
import Coordinate from "./coordinate";

test('valid coordinate parses data correctly', () => {
  const c = new Coordinate("A8");
  expect(c.string).toBe('a8');
  expect(c.column).toBe(0)
  expect(c.row).toBe(7);;
});

test('input must be a two-character string, with a letter first and number second', () => { 
  expect(() => new Coordinate("5a").string).toThrow();
  expect(() => new Coordinate("ac").string).toThrow();
  expect(() => new Coordinate("45").string).toThrow();
  expect(() => new Coordinate("a5b").string).toThrow();
  expect(() => new Coordinate("c:6").string).toThrow();
  expect(() => new Coordinate("c-6").string).toThrow();
  expect(() => new Coordinate("c 6").string).toThrow();
});

test('input row must be a valid value [1~8]', async () => { 
  expect(new Coordinate("a5").string).toBe("a5");
  expect(() => new Coordinate("a9")).toThrow();
});

test('input column must be a valid value [A~H]', async () => {
  expect(new Coordinate("e4").string).toBe("e4");
  expect(() => new Coordinate("x5")).toThrow();
});

test('colour function works as expected', async () => {
  expect(new Coordinate("a1").colour()).toBe('black');
  expect(new Coordinate("h8").colour()).toBe('black');
  expect(new Coordinate("e2").colour()).toBe('white');
  expect(new Coordinate("d5").colour()).toBe('white');
});