# 0007. Character-sheet avatar rendering

- **Status:** Accepted
- **Date:** 2026-06-11
- **Deciders:** Sivam Pasupathipillai

## Context

The Experience & Skills section was revamped into a videogame-style "character
sheet" (avatar + Level/Class header, Stats tab, Quests tab) — see
[`specs/features/character-sheet.md`](../features/character-sheet.md). The
section needed an avatar with a fun, game-like feel. Three rendering approaches
were on the table: a 2D illustration animated with CSS, a 2D animated sprite
sheet, or a rotatable 3D model (three.js + WebGL).

The site is SSR'd via `adapter-node` ([ADR-0004](0004-sveltekit-with-node-adapter.md)),
so anything heavy ships in the client bundle and runs on the visitor's device.
The maintainer's stated constraints were: fast page load, light on browser/CPU,
must work on mobile, and the avatar art should be producible by free GenAI image
services. The same toolchain and testing rules apply ([ADR-0002](0002-dev-tools-and-testing.md)).

## Decision

We will render the avatar as a **2D illustration animated with CSS** for v1, and
isolate it behind a **swappable renderer boundary** (`Avatar.svelte`, with a
stable `src`/`alt` prop interface). The character-sheet logic (`CharacterSheet`,
`StatsPanel`, `QuestsPanel`) and its declarative data (`character.ts`) know
nothing about how the avatar is drawn.

- **No new runtime dependencies** for the character sheet.
- The avatar image is **lazy-loaded** with fixed `width`/`height` to avoid layout
  shift; a committed SVG placeholder (`src/lib/assets/wizard-placeholder.svg`)
  ships until a GenAI-generated portrait replaces it.
- Animations use GPU-friendly `transform`/`translate`/`opacity` only and are
  gated behind `prefers-reduced-motion`.

## Consequences

- Smallest possible payload and the best mobile/battery behavior; the section
  adds no JS framework weight beyond Svelte itself.
- A future upgrade (sprite sheet, or a three.js 3D "WoW character select" view)
  can replace `Avatar.svelte` without touching the stats/quests logic or data —
  but that upgrade is the moment to revisit this ADR, since three.js/WebGL would
  reintroduce the bundle-size and battery costs deliberately avoided here.
- The avatar art is an external, manual step (GenAI generation); until done, the
  placeholder is what visitors see.

## Alternatives considered

- **2D animated sprite sheet:** retro game feel, still light, but requires
  producing a consistent multi-frame sprite of the subject — which free GenAI
  image tools do not reliably generate. Deferred behind the renderer boundary.
- **3D model with 360 view (three.js + GLTF):** highest wow-factor and learning
  value, but ~150KB+ gzipped of three.js plus model assets and WebGL CPU/battery
  cost on mobile — in direct tension with the load/perf constraints. Deferred;
  the renderer boundary keeps it possible later.
