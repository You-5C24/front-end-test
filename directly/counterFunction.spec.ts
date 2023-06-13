import { describe, it, expect, afterEach } from 'vitest';
import { increment, getCount, reset } from './counterFunction';

describe('counter function', () => {
  afterEach(() => {
    // 拆卸
    reset();
  });

  it('increment', () => {
    increment();

    expect(getCount()).toBe(1);
  });
});
