import { it, vi, expect } from 'vitest';
import { doubleUserAge, doubleHeight } from './user';

vi.mock('./window.ts', () => {
  return {
    innerHeightFn: () => 200,
  };
});

it('double user age', () => {
  vi.stubGlobal('ylt', { age: 18 });

  const r = doubleUserAge();

  expect(r).toBe(36);
});

it('double inner height', () => {
  const r = doubleHeight();
  expect(r).toBe(400);
});
