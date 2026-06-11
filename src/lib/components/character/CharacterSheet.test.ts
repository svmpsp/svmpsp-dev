import { render, screen, fireEvent } from '@testing-library/svelte';
import { test, expect } from 'vitest';
import CharacterSheet from './CharacterSheet.svelte';

const character = { name: 'Test Hero', characterClass: 'AI Specialist', birthDate: '1990-02-03' };
const attributeData = [{ label: 'INT', value: 18 }];
const skillData = [{ name: 'Python', level: 9 }];
const questData = [
  { year: 'Today', title: 'Senior Data Scientist', location: 'RedCarbon.ai', active: true },
];

function renderSheet() {
  return render(CharacterSheet, { props: { character, attributeData, skillData, questData } });
}

test('renders the identity header with class and name', () => {
  renderSheet();
  expect(screen.getByText('AI Specialist')).toBeInTheDocument();
  expect(screen.getByText('Test Hero')).toBeInTheDocument();
});

test('derives the level from the birth date', () => {
  const { container } = renderSheet();
  // Identity level is age in whole years; born 1990 → 30-something.
  const level = container.querySelector('.char-level');
  expect(level?.textContent).toMatch(/^Lvl? \d{2}$/);
});

test('shows the Info tab by default', () => {
  renderSheet();
  expect(screen.getByText('Python')).toBeInTheDocument();
  expect(screen.getByText('INT')).toBeInTheDocument();
  expect(screen.queryByText('RedCarbon.ai', { exact: false })).not.toBeInTheDocument();
});

test('switches to the Quests tab on click', async () => {
  renderSheet();
  await fireEvent.click(screen.getByRole('tab', { name: 'Quests' }));
  expect(screen.getByText('Senior Data Scientist')).toBeInTheDocument();
  expect(screen.queryByText('Python')).not.toBeInTheDocument();
});

test('marks the selected tab with aria-selected', async () => {
  renderSheet();
  expect(screen.getByRole('tab', { name: 'Info' })).toHaveAttribute('aria-selected', 'true');
  await fireEvent.click(screen.getByRole('tab', { name: 'Quests' }));
  expect(screen.getByRole('tab', { name: 'Quests' })).toHaveAttribute('aria-selected', 'true');
});
