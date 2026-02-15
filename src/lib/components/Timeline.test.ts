import { render, screen } from '@testing-library/svelte';
import { test, expect } from 'vitest';
import Timeline from './Timeline.svelte';

test('Timeline renders with empty items array', () => {
  const { container } = render(Timeline, {
    props: { items: [] },
  });
  expect(container.querySelector('.timeline-container')).toBeInTheDocument();
});

test('Timeline renders timeline items when provided', () => {
  const items = [
    { year: '2023', title: 'Senior Developer', location: 'Tech Corp' },
    { year: '2022', title: 'Developer', location: 'Start Corp' },
  ];

  render(Timeline, { props: { items } });

  expect(screen.getByText('2023')).toBeInTheDocument();
  expect(screen.getByText('Senior Developer')).toBeInTheDocument();
  expect(screen.getByText('Tech Corp')).toBeInTheDocument();
  expect(screen.getByText('2022')).toBeInTheDocument();
  expect(screen.getByText('Developer')).toBeInTheDocument();
  expect(screen.getByText('Start Corp')).toBeInTheDocument();
});

test('Timeline handles active items', () => {
  const items = [
    { year: '2023', title: 'Senior Developer', location: 'Tech Corp', active: true },
    { year: '2022', title: 'Developer', location: 'Start Corp', active: false },
  ];

  render(Timeline, { props: { items } });

  // Check that timeline items are rendered (active state is handled by TimelineItem component)
  expect(screen.getByText('2023')).toBeInTheDocument();
  expect(screen.getByText('2022')).toBeInTheDocument();
});

test('Timeline has timeline-container class', () => {
  const { container } = render(Timeline, {
    props: { items: [] },
  });
  expect(container.querySelector('.timeline-container')).toBeInTheDocument();
});

test('Timeline has timeline class', () => {
  const { container } = render(Timeline, {
    props: { items: [] },
  });
  expect(container.querySelector('.timeline')).toBeInTheDocument();
});

test('Timeline renders single item correctly', () => {
  const items = [{ year: '2023', title: 'Current Role', location: 'Company' }];

  render(Timeline, { props: { items } });

  expect(screen.getByText('2023')).toBeInTheDocument();
  expect(screen.getByText('Current Role')).toBeInTheDocument();
  expect(screen.getByText('Company')).toBeInTheDocument();
});

test('Timeline handles items without active property', () => {
  const items = [{ year: '2023', title: 'Developer', location: 'Tech Corp' }];

  render(Timeline, { props: { items } });

  expect(screen.getByText('2023')).toBeInTheDocument();
  expect(screen.getByText('Developer')).toBeInTheDocument();
  expect(screen.getByText('Tech Corp')).toBeInTheDocument();
});
