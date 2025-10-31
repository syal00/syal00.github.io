import { describe, test, expect } from '@jest/globals';
import { formatDateRange, isValidEmail, validateString } from '../utils/time-converter';

describe('time-converter utilities', () => {
  test('formatDateRange with end date', () => {
    expect(formatDateRange('Jan 2025', 'Dec 2025')).toBe('Jan 2025 – Dec 2025');
  });

  test('formatDateRange with null end date (Present)', () => {
    expect(formatDateRange('Jan 2025', null)).toBe('Jan 2025 – Present');
  });

  test('isValidEmail validates correct email', () => {
    expect(isValidEmail('test@example.com')).toBe(true);
    expect(isValidEmail('user.name+tag@example.co.uk')).toBe(true);
  });

  test('isValidEmail rejects invalid email', () => {
    expect(isValidEmail('notanemail')).toBe(false);
    expect(isValidEmail('missing@domain')).toBe(false);
    expect(isValidEmail('')).toBe(false);
  });

  test('validateString trims and validates length', () => {
    expect(validateString('  test  ', 1, 10)).toBe('test');
    expect(validateString('a'.repeat(50), 1, 100)).toBe('a'.repeat(50));
    expect(validateString('', 1, 10)).toBe(null);
    expect(validateString('a'.repeat(101), 1, 100)).toBe(null);
  });
});
