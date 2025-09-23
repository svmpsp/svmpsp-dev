import { test, expect } from 'vitest';
import { formatName, validateEmail } from './utils';

test('formatName formats first and last name correctly', () => {
  expect(formatName('John', 'Doe')).toBe('John Doe');
});

test('formatName handles empty strings', () => {
  expect(formatName('', 'Doe')).toBe('Doe');
  expect(formatName('John', '')).toBe('John');
  expect(formatName('', '')).toBe('');
});

test('formatName trims whitespace', () => {
  expect(formatName(' John ', ' Doe ')).toBe('John   Doe');
});

test('validateEmail validates correct email addresses', () => {
  expect(validateEmail('test@example.com')).toBe(true);
  expect(validateEmail('user.name@domain.co.uk')).toBe(true);
  expect(validateEmail('test+tag@example.org')).toBe(true);
});

test('validateEmail rejects invalid email addresses', () => {
  expect(validateEmail('invalid-email')).toBe(false);
  expect(validateEmail('test@')).toBe(false);
  expect(validateEmail('@example.com')).toBe(false);
  expect(validateEmail('test@.com')).toBe(false);
  expect(validateEmail('')).toBe(false);
});
