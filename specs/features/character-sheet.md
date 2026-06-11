# Feature: "Character Sheet" revamp of Experience & Skills

- **Status:** Implemented (see [ADR-0007](../adr/0007-character-sheet-avatar-rendering.md))
- **Date:** 2026-06-11
- **Author:** Sivam Pasupathipillai (planned with sdd-plan)

## Goal / user story

As a visitor (recruiter, peer, or curious friend), I land on the Experience &
Skills section and instead of a plain timeline + skills table I see a playful
**videogame character panel** for Sivam — a cartoony wizard avatar with his real
features, an RPG identity line (Level/Class), and tabbed panels for **Stats**
(power levels) and **Quests** (career history). It is fun, still conveys real
skills and experience, loads fast, stays light on the browser, and works on
mobile. It is also a sandbox for learning CSS/SVG animation — and is architected
so the avatar can later evolve from a static illustration to a sprite sheet or a
3D model.

## Grounding

**From the specs:**

- [ADR-0004](../adr/0004-sveltekit-with-node-adapter.md) — SvelteKit 2 / Svelte 5,
  `adapter-node`, SSR. Anything heavy runs in the client bundle on the visitor's
  device → the reason we choose the lightest avatar path.
- [ADR-0002](../adr/0002-dev-tools-and-testing.md) — Vitest + happy-dom,
  Prettier, ESLint; pre-commit runs `build`. New components get colocated
  `*.test.ts` and must build clean.
- [content-map.md](../content-map.md) — section lives in
  `src/routes/+page.svelte` (Experience & Skills); reusable components in
  `src/lib/components/` (`Timeline`, `TimelineItem`, `SkillBadge`, `Section`,
  `Stat`). Assets in `src/lib/assets/`.

**From the planning interview:**

1. **v1 = 2D illustrated wizard avatar** (Sivam's features: dark skin, glasses),
   animated with CSS/SVG. Start simple, evolve later. Avatar image produced by a
   **free GenAI image service** (external), with a placeholder until ready.
2. **Replace the whole Experience & Skills section** with a tabbed character
   panel.
3. Tabs: **Stats** (RPG attributes with funny values — INT/WIS/CHA/LUCK/Empathy
   132… — plus a grounded leveled-skill list) and **Quests** (career history,
   from the current timeline data).
4. **Class = "AI Specialist"**; **Level = age** (born 3 Feb 1990 → 36, computed
   dynamically).

## Scope

**In:**

- New `CharacterSheet` feature component (tabbed panel) replacing the Experience
  & Skills section body.
- Avatar pane: illustration + CSS idle animation (gentle bob, periodic
  blink/parallax), `prefers-reduced-motion` respected.
- **Stats tab**: core RPG attributes (playful) + real skills as leveled bars
  (sourced from today's `SkillBadge` data).
- **Quests tab**: career roles as a "quest log" (reusing the current
  `timelineItems` data, restyled).
- A single data module so stats/quests/identity are declarative and easy to edit.
- Pluggable avatar "renderer" boundary so a sprite sheet / three.js renderer can
  replace the v1 image later without touching stats logic.
- Colocated tests; responsive/mobile layout; `pnpm build` passes.

**Non-goals (v1):**

- No sprite-sheet animation, no three.js/WebGL, no 360 view (explicitly deferred
  — the architecture leaves room).
- No DB/Prisma changes (this is static portfolio content, not blog data).
- No generation of the actual avatar art inside the repo — that is an external
  GenAI step; code ships with a documented placeholder.

## Approach

A new `src/lib/components/character/` folder:

- `CharacterSheet.svelte` — orchestrator: avatar pane + identity header + tab
  switcher. Owns tab state (Svelte 5 runes).
- `Avatar.svelte` — the swappable renderer. v1 renders an `<img>`/inline SVG with
  CSS keyframe idle animation. Stable props (e.g. `pose`/`mood`) so later
  renderers honor the same interface.
- `StatsPanel.svelte` — RPG attributes grid + leveled skill bars (reuse/wrap
  `SkillBadge` or supersede it with a bar style).
- `QuestsPanel.svelte` — quest-log styling of roles; reuses
  `Timeline`/`TimelineItem` internally or replaces them.
- `character.ts` (data) — identity (`name`, `class: 'AI Specialist'`,
  `birthDate: 1990-02-03`, derived `level`), `attributes`, `skills`, `quests`.
  Level/age computed like the existing `yearsOfExperience` pattern in
  `+page.svelte`.

**Performance:** no new runtime deps for v1; avatar image lazy-loaded
(`loading="lazy"`, sized to avoid layout shift); animations are GPU-friendly
`transform`/`opacity` only; everything SSR-rendered so first paint is not
JS-blocked.

`+page.svelte` Experience section swaps its body for `<CharacterSheet />`;
obsolete inline skills-table markup/CSS removed. `Timeline`/`SkillBadge` kept
only if reused by the panels.

**Spec upkeep:** update `content-map.md` (new `components/character/` entry;
revised section description). No ADR is strictly required — no Accepted decision
is being reversed — but a lightweight ADR recording the "no-new-deps, CSS-only
avatar with a pluggable renderer" rationale is worth adding for when the 3D
version tempts later.

## Steps

1. Create `src/lib/components/character/character.ts` with identity (incl.
   dynamic `level` from birth date), `attributes`, `skills`, `quests` (migrate
   `timelineItems` + badge data).
2. Build `Avatar.svelte` — placeholder illustration + CSS idle animation;
   reduced-motion guard; documented prop interface for future renderers.
3. Build `StatsPanel.svelte` (attributes grid + leveled skill bars) and
   `QuestsPanel.svelte` (quest log).
4. Build `CharacterSheet.svelte` — avatar + identity header (`Lv 36 · AI
Specialist`) + tab switcher wiring the two panels; mobile-responsive (panels
   stack, tabs become a segmented control).
5. Swap the Experience section in `+page.svelte` to `<CharacterSheet />`; remove
   dead skills-table markup/CSS; prune now-unused components if any.
6. Add colocated tests (`CharacterSheet.test.ts`, panel tests) — renders, tab
   switching, level computation.
7. `pnpm format`, `pnpm lint`, `pnpm typecheck`, `pnpm test`, `pnpm build` all
   green.
8. Update `specs/content-map.md` (and optionally add the new ADR).
9. **External (Sivam):** generate the wizard illustration via a free GenAI
   service and drop it into `src/lib/assets/`; code wires the path and leaves a
   documented prompt suggestion until then.

## Assumed defaults

- **Tabs = Stats + Quests only** (no separate "Bio" tab — the About section
  above already covers bio).
- **Header** shows `Sivam Pasupathipillai` + `Lvl 36 · AI Specialist`; no fantasy
  epithet unless desired.
- **Skill scale**: keep the existing 1–10 numbers as "levels"; the joke
  "Empathy 132" style values live only among the playful RPG attributes, not the
  grounded skill list.
- **Default tab on load** = Stats.
- **Animation v1** = idle bob + occasional blink + subtle pointer parallax;
  CSS-driven, no heavy continuous JS loop.

## Acceptance criteria

- The Experience & Skills section renders a tabbed character panel: avatar +
  `Lv {age} · AI Specialist` identity, with Stats and Quests tabs that switch.
- "Level" computes dynamically from birth date 1990-02-03 (36 in 2026).
- Stats tab shows playful RPG attributes plus the real leveled skills; Quests tab
  shows the career roles.
- Works and is legible on mobile; respects `prefers-reduced-motion`.
- No new runtime dependencies; avatar asset lazy-loaded with a placeholder.
- `pnpm format:check`, `pnpm typecheck`, `pnpm test`, `pnpm build` pass.
- `specs/content-map.md` updated to reflect the new component and section.
