import { describe, it, expect, vi } from 'vitest';
import { delay, fetchUserData } from './index';

describe('Promise', () => {
  it('normal', async () => {
    const result = await fetchUserData();
    expect(result).toBe('1');
  });

  it('delay', async () => {
    vi.useFakeTimers();
    // const result = await delay(1000);
    const result = delay(1000);
    vi.advanceTimersToNextTimer();
    expect(result).resolves.toBe('ok');
  });
});
