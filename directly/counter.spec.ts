import { describe, it, expect } from 'vitest';
import { Counter } from './counter';

describe('Counter', () => {
  it('increment', () => {
    const counter = new Counter();

    counter.increment();

    expect(counter.getCount()).toBe(1);
  });
});
