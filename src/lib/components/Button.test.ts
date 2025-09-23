import { render, screen } from '@testing-library/svelte';
import { test, expect } from 'vitest';
import Button from './Button.svelte';

test('Button renders as button element', () => {
  render(Button);
  expect(screen.getByRole('button')).toBeInTheDocument();
});

test('Button renders primary variant by default', () => {
  render(Button);
  const button = screen.getByRole('button');
  expect(button).toHaveClass('btn-primary');
});

test('Button renders secondary variant when specified', () => {
  render(Button, { props: { variant: 'secondary' } });
  const button = screen.getByRole('button');
  expect(button).toHaveClass('btn-secondary');
});

test('Button renders as link when href is provided', () => {
  render(Button, { props: { href: '/test' } });
  const link = screen.getByRole('link');
  expect(link).toBeInTheDocument();
  expect(link).toHaveAttribute('href', '/test');
});

test('Button can be disabled', () => {
  render(Button, { props: { disabled: true } });
  const button = screen.getByRole('button');
  expect(button).toBeDisabled();
});
