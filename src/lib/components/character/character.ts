// Declarative data for the "character sheet" revamp of the Experience & Skills
// section. Keep this the single source of truth for the panel: identity, the
// playful RPG attributes, the grounded skill levels, and the career quest log.

export interface Attribute {
  /** Short RPG-style label, e.g. "INT" or "Empathy". */
  label: string;
  /** Playful value. Free scale on purpose — these are for fun. */
  value: number;
}

export interface Skill {
  name: string;
  /** Grounded proficiency on the same 1-10 scale the old SkillBadge used. */
  level: number;
}

export interface Quest {
  year: string;
  title: string;
  location: string;
  /** The current role — highlighted as the active quest. */
  active?: boolean;
}

export interface Identity {
  name: string;
  characterClass: string;
  /** ISO date (YYYY-MM-DD); the character "level" is derived from it. */
  birthDate: string;
}

export const identity: Identity = {
  name: 'Sivam Pasupathipillai',
  characterClass: 'AI Specialist',
  birthDate: '1990-02-03',
};

/**
 * Character "level" = age in whole years, computed from a birth date so it
 * stays correct over time (mirrors the dynamic yearsOfExperience on the page).
 */
export function computeLevel(birthDate: string, now: Date = new Date()): number {
  const born = new Date(birthDate);
  let level = now.getFullYear() - born.getFullYear();
  const monthDiff = now.getMonth() - born.getMonth();
  const dayDiff = now.getDate() - born.getDate();
  if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
    level -= 1;
  }
  return level;
}

// Playful header attributes — values are jokes, not a real scale.
export const attributes: Attribute[] = [
  { label: 'INT', value: 18 },
  { label: 'WIS', value: 16 },
  { label: 'CHA', value: 14 },
  { label: 'LUCK', value: 7 },
  { label: 'Empathy', value: 20 },
  { label: 'Caffeine', value: 17 },
];

// Grounded skills (1-10), migrated from the old SkillBadge table.
export const skills: Skill[] = [
  { name: 'Software Engineering', level: 9 },
  { name: 'Machine Learning', level: 9 },
  { name: 'Python', level: 9 },
  { name: 'Deep Learning', level: 8 },
  { name: 'Distributed Computing', level: 8 },
  { name: 'TypeScript', level: 8 },
  { name: 'Docker | Kubernetes', level: 8 },
  { name: 'Cloud Computing', level: 7 },
  { name: 'Big Data Management', level: 7 },
  { name: 'ML Ops', level: 7 },
  { name: 'Java', level: 7 },
  { name: 'C++', level: 6 },
];

// Career history as a quest log, migrated from the old Timeline data.
export const quests: Quest[] = [
  {
    year: 'Today',
    title: 'Senior Data Scientist',
    location: 'RedCarbon.ai',
    active: true,
  },
  { year: '2019-23', title: 'Data Scientist', location: 'WithSecure Inc.' },
  { year: '2016-20', title: 'PhD Candidate', location: 'University of Trento' },
  { year: '2015-16', title: 'Software Consultant', location: 'Mind-Mercatis Srl' },
  {
    year: '2012-14',
    title: 'MSc Computer Engineering',
    location: 'Politecnico di Milano & BarcelonaTech',
  },
];
