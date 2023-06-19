import { describe, it, vi, expect } from 'vitest';
import { User } from './setTimeout';

describe('setTimeout', () => {
  it('should fetch User data', () => {
    vi.useFakeTimers();
    const user = new User('1');
    const callback = vi.fn();

    user.fetchData(callback, 100);
    // vi.advanceTimersByTime(100);
    // vi.advanceTimersToNextTimer();

    const userA = new User('1');
    const callbackA = vi.fn();
    userA.fetchData(callbackA, 100);

    vi.runAllTimers();
    expect(callback).toBeCalledWith('Data for user with id: 1');
  });
});
