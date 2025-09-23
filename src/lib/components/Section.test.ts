import { render, screen } from '@testing-library/svelte';
import { test, expect } from 'vitest';
import Section from './Section.svelte';

test('Section renders section element', () => {
  const { container } = render(Section);
  expect(container.querySelector('section')).toBeInTheDocument();
});

test('Section has default background class', () => {
  const { container } = render(Section);
  expect(container.querySelector('.section-default')).toBeInTheDocument();
});

test('Section applies light background when specified', () => {
  const { container } = render(Section, {
    props: { background: 'light' },
  });
  expect(container.querySelector('.section-light')).toBeInTheDocument();
});

test('Section applies dark background when specified', () => {
  const { container } = render(Section, {
    props: { background: 'dark' },
  });
  expect(container.querySelector('.section-dark')).toBeInTheDocument();
});

test('Section has normal padding by default', () => {
  const { container } = render(Section);
  expect(container.querySelector('.section-normal')).toBeInTheDocument();
});

test('Section applies large padding when specified', () => {
  const { container } = render(Section, {
    props: { padding: 'large' },
  });
  expect(container.querySelector('.section-large')).toBeInTheDocument();
});

test('Section applies id when provided', () => {
  const { container } = render(Section, {
    props: { id: 'test-section' },
  });
  const section = container.querySelector('section');
  expect(section).toHaveAttribute('id', 'test-section');
});

test('Section has container wrapper', () => {
  const { container } = render(Section);
  expect(container.querySelector('.container')).toBeInTheDocument();
});
