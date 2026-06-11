# specs/ — Spec-Driven Development

This directory holds the Spec-Driven Development (SDD) artifacts for this
repository. It was bootstrapped by the `sdd-init` skill and is consumed by
downstream SDD skills (e.g. `sdd-plan`, `sdd-make`), which treat its contents
as a **binding constraint** when planning and implementing changes.

## Contents

- **[`content-map.md`](content-map.md)** — a high-signal, navigable index of the
  repository: what it does, where things live, key entry points, how to run
  tests, and where configuration lives. Use it to orient quickly before making
  a change.

- **[`adr/`](adr/)** — Architecture Decision Records. Each ADR captures the
  _context_, _decision_, and _consequences_ of a significant architectural or
  process choice, so the reasoning survives even when the code changes. See
  [`adr/README.md`](adr/README.md) for the numbering convention and index.

## How the two relate

The **content map** tells you _what exists and where_. The **ADRs** tell you
_why it is that way_. Together they let a human or agent ramp up on the repo and
make changes that respect existing decisions instead of re-litigating them.

## Keeping specs in sync

These documents are only useful if they stay accurate. When you change the repo:

- Adding/removing a route, component, script, or top-level directory →
  update `content-map.md`.
- Making or reversing a significant architectural/process decision →
  add a new ADR (or update an existing one's status). Never rewrite history;
  supersede instead.
