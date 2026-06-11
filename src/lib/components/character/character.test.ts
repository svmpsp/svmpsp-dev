import { test, expect } from 'vitest';
import { computeLevel, identity, attributes, skills, quests } from './character';

test('computeLevel returns age in whole years before the birthday', () => {
  // Born 1990-02-03; on 2026-01-15 the birthday has not passed yet → 35.
  expect(computeLevel('1990-02-03', new Date('2026-01-15'))).toBe(35);
});

test('computeLevel counts the year once the birthday has passed', () => {
  expect(computeLevel('1990-02-03', new Date('2026-06-11'))).toBe(36);
});

test('computeLevel handles the birthday itself as having passed', () => {
  expect(computeLevel('1990-02-03', new Date('2026-02-03'))).toBe(36);
});

test('identity exposes the AI Specialist class', () => {
  expect(identity.characterClass).toBe('AI Specialist');
  expect(identity.name).toBe('Sivam Pasupathipillai');
});

test('skill levels stay within the 1-10 scale', () => {
  for (const skill of skills) {
    expect(skill.level).toBeGreaterThanOrEqual(1);
    expect(skill.level).toBeLessThanOrEqual(10);
  }
});

test('data collections are non-empty', () => {
  expect(attributes.length).toBeGreaterThan(0);
  expect(skills.length).toBeGreaterThan(0);
  expect(quests.length).toBeGreaterThan(0);
});

test('exactly one quest is marked active', () => {
  expect(quests.filter((q) => q.active).length).toBe(1);
});
