import { expect, test } from 'vitest';
import { calcBoardDimensions } from "./board-utils";

test('board dimensions are calculated using width when it is the smaller value', () => {
  expect(calcBoardDimensions(120, 160, 20)).toStrictEqual({
    boardSize: 80,
    cellSize: 10
  });
});

test('board dimensions are calculated using height when it is the smaller value', () => {
  expect(calcBoardDimensions(260, 200, 20)).toStrictEqual({
    boardSize: 160,
    cellSize: 20,
  });
});

