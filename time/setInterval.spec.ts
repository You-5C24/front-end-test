import { describe, it, vi, expect } from 'vitest';
import { sayHi } from './setInterval';

describe('setInterval', () => {
  it('should call one', () => {
    vi.useFakeTimers();
    vi.spyOn(console, 'log');
    sayHi();
    // vi.advanceTimersByTime(100);
    vi.advanceTimersToNextTimer();

    expect(console.log).toBeCalledWith('hi');
  });
});
