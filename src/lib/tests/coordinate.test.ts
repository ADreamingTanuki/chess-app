import { expect, test } from 'vitest'
import Coordinate from "../coordinate";

test('valid coordinate returns expected numbers', () => {
  const c = new Coordinate("A8");
  expect(c.getX()).toBe(0);
  expect(c.getY()).toBe(7);
});