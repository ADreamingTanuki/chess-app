import { expect, test } from 'vitest';
import { coordFromMove } from './chess-game-helpers';

test('coordFromMove works as expected', () => {
  expect(coordFromMove('Nf3').string).toBe('f3');
})