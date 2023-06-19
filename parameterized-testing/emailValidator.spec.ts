import { describe, it, expect } from 'vitest';
import { emailValidator } from './emailValidator';

describe('emailValidator', () => {
  // it('should return true for valid email', () => {
  //   const email = 'valid-email@example.com';
  //   expect(emailValidator(email)).toBe(true);
  // });

  // it('should return false for valid email', () => {
  //   const email = 'invalid.email@example.com';
  //   expect(emailValidator(email)).toBe(false);
  // });

  it.each([
    ['valid-email@example.com', true],
    ['invalid.email@example', false],
  ])('should return $s when email is $s', (email, expected) => {
    expect(emailValidator(email)).toBe(expected);
  });
});
