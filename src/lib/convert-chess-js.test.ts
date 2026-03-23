import { expect, test } from 'vitest';
import { ConvertChessJS } from './convert-chess-js';
import { PAWN, KNIGHT, BISHOP, ROOK, KING, QUEEN, WHITE, BLACK } from 'chess.js';

test('ConvertChessJS.piece() converts all pieces and throws on invalid input', () => {
  expect(ConvertChessJS.piece(PAWN)).toBe('pawn');
  expect(ConvertChessJS.piece(KNIGHT)).toBe('knight');
  expect(ConvertChessJS.piece(BISHOP)).toBe('bishop');
  expect(ConvertChessJS.piece(ROOK)).toBe('rook');
  expect(ConvertChessJS.piece(KING)).toBe('king');
  expect(ConvertChessJS.piece(QUEEN)).toBe('queen');
  expect(() => ConvertChessJS.piece('invalid')).toThrow(SyntaxError);
});

test('ConvertChessJS.team() converts all teams and throws on invalid input', () => {
  expect(ConvertChessJS.team(WHITE)).toBe('white');
  expect(ConvertChessJS.team(BLACK)).toBe('black');
  expect(() => ConvertChessJS.team('invalid')).toThrow(SyntaxError);
});

