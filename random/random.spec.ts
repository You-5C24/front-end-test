import { describe, it, expect, vi } from 'vitest';
import { generateRandomString } from './random';

describe('Math.random', () => {
  it('should generate random string', () => {
    vi.spyOn(Math, 'random').mockImplementation(() => {
      return 0.1;
    });

    const result = generateRandomString(2);
    expect(result).toBe('cc');
  });
});
