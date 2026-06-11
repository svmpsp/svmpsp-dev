# 0001. Record architecture decisions

- **Status:** Accepted
- **Date:** 2026-06-11
- **Deciders:** Sivam Pasupathipillai

## Context

This repository is the personal website of Sivam Pasupathipillai — a SvelteKit
app combining a portfolio, a Prisma/SQLite-backed blog, and an authenticated
admin interface. It is primarily maintained by a single developer, often with
the help of coding agents. Decisions about framework, datastore, tooling, and
deployment have already been made implicitly, but the _reasoning_ behind them
lives only in the author's head and scattered config files. Without a durable
record, future contributors (human or agent) risk re-litigating settled choices
or breaking invariants they did not know existed.

## Decision

We will record significant architectural and process decisions as Architecture
Decision Records (ADRs) stored in `specs/adr/`, one Markdown file per decision,
numbered monotonically (`NNNN-kebab-title.md`) and following the template in
`specs/adr/template.md`. Each ADR captures the context, the decision in active
voice, and its consequences.

## Consequences

- New significant decisions get a short written rationale that outlives any
  individual contributor.
- The cost is small, ongoing discipline: when a real decision is made, write or
  update an ADR.
- ADRs are immutable history — superseding a decision means adding a new ADR and
  marking the old one `Superseded`, not editing it in place.
- Downstream SDD skills treat `specs/` (this directory + the content map) as a
  binding constraint, so keeping ADRs accurate directly improves agent output.

## Alternatives considered

- **No formal record (status quo):** zero overhead, but rationale keeps getting
  lost and rediscovered. Rejected.
- **A single `DECISIONS.md` log:** simpler to start, but grows unwieldy and
  makes per-decision status (Proposed/Accepted/Superseded) awkward. Rejected in
  favor of one file per decision.
