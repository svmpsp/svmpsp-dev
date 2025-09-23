import { render, screen } from '@testing-library/svelte';
import { test, expect } from 'vitest';
import SkillBadge from './SkillBadge.svelte';

test('SkillBadge renders skill name', () => {
  render(SkillBadge, {
    props: { skill: 'JavaScript' },
  });
  expect(screen.getByText('JavaScript')).toBeInTheDocument();
});

test('SkillBadge renders 10 proficiency squares', () => {
  const { container } = render(SkillBadge, {
    props: { skill: 'JavaScript', proficiency: 5 },
  });
  const squares = container.querySelectorAll('.square');
  expect(squares).toHaveLength(10);
});

test('SkillBadge fills correct number of squares based on proficiency', () => {
  const { container } = render(SkillBadge, {
    props: { skill: 'JavaScript', proficiency: 7 },
  });
  const filledSquares = container.querySelectorAll('.square.filled');
  expect(filledSquares).toHaveLength(7);
});

test('SkillBadge uses primary variant by default', () => {
  const { container } = render(SkillBadge, {
    props: { skill: 'JavaScript', proficiency: 5 },
  });
  const filledSquares = container.querySelectorAll('.square.filled.square-primary');
  expect(filledSquares).toHaveLength(5);
});

test('SkillBadge applies secondary variant when specified', () => {
  const { container } = render(SkillBadge, {
    props: { skill: 'JavaScript', proficiency: 3, variant: 'secondary' },
  });
  const filledSquares = container.querySelectorAll('.square.filled.square-secondary');
  expect(filledSquares).toHaveLength(3);
});

test('SkillBadge clamps proficiency to minimum of 1', () => {
  const { container } = render(SkillBadge, {
    props: { skill: 'JavaScript', proficiency: -5 },
  });
  const filledSquares = container.querySelectorAll('.square.filled');
  expect(filledSquares).toHaveLength(1);
});

test('SkillBadge clamps proficiency to maximum of 10', () => {
  const { container } = render(SkillBadge, {
    props: { skill: 'JavaScript', proficiency: 15 },
  });
  const filledSquares = container.querySelectorAll('.square.filled');
  expect(filledSquares).toHaveLength(10);
});

test('SkillBadge uses default proficiency of 5', () => {
  const { container } = render(SkillBadge, {
    props: { skill: 'JavaScript' },
  });
  const filledSquares = container.querySelectorAll('.square.filled');
  expect(filledSquares).toHaveLength(5);
});

test('SkillBadge has skill-badge class', () => {
  const { container } = render(SkillBadge, {
    props: { skill: 'JavaScript' },
  });
  expect(container.querySelector('.skill-badge')).toBeInTheDocument();
});
