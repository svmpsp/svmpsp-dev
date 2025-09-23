import { render, screen } from '@testing-library/svelte';
import { test, expect } from 'vitest';
import Stat from './Stat.svelte';

test('Stat renders value', () => {
  render(Stat, {
    props: { value: '100+', label: 'Projects' },
  });
  expect(screen.getByText('100+')).toBeInTheDocument();
});

test('Stat renders label', () => {
  render(Stat, {
    props: { value: '100+', label: 'Projects' },
  });
  expect(screen.getByText('Projects')).toBeInTheDocument();
});

test('Stat value renders as h3 element', () => {
  render(Stat, {
    props: { value: '100+', label: 'Projects' },
  });
  const heading = screen.getByRole('heading', { level: 3 });
  expect(heading).toHaveTextContent('100+');
});

test('Stat label renders as paragraph element', () => {
  const { container } = render(Stat, {
    props: { value: '100+', label: 'Projects' },
  });
  const paragraph = container.querySelector('p');
  expect(paragraph).toHaveTextContent('Projects');
});

test('Stat has stat class', () => {
  const { container } = render(Stat, {
    props: { value: '100+', label: 'Projects' },
  });
  expect(container.querySelector('.stat')).toBeInTheDocument();
});

test('Stat handles different value formats', () => {
  render(Stat, {
    props: { value: '5 Years', label: 'Experience' },
  });
  expect(screen.getByText('5 Years')).toBeInTheDocument();
  expect(screen.getByText('Experience')).toBeInTheDocument();
});

test('Stat handles special characters in value', () => {
  render(Stat, {
    props: { value: '99%', label: 'Success Rate' },
  });
  expect(screen.getByText('99%')).toBeInTheDocument();
  expect(screen.getByText('Success Rate')).toBeInTheDocument();
});
