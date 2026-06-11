# Architecture Decision Records

This directory holds **Architecture Decision Records (ADRs)** — short documents
that capture significant architectural or process decisions, along with the
context that forced them and the consequences they create. ADRs explain the
_why_ behind the code so future contributors (human or agent) don't have to
reverse-engineer or re-litigate settled choices.

## What is an ADR?

An ADR records a single decision: the situation (Context), the choice made in
active voice (Decision), what becomes easier or harder (Consequences), and the
options weighed (Alternatives considered). Use [`template.md`](template.md) as
the starting point for new records.

## Numbering convention

- Files are named `NNNN-kebab-title.md`, where `NNNN` is a zero-padded,
  **monotonically increasing** integer (`0001`, `0002`, …).
- Numbers are never reused. The next ADR takes the next free number.

## Lifecycle / status

Each ADR carries a status that moves in one direction:

- **Proposed** — under discussion, not yet adopted.
- **Accepted** — adopted; reflects current practice.
- **Deprecated** — no longer recommended, but not replaced by a specific ADR.
- **Superseded by [ADR-XXXX]** — replaced by a later decision.

ADRs are immutable history: to change a decision, add a **new** ADR and mark the
old one `Superseded` (linking forward). Do not rewrite an accepted ADR in place.

## Index

| ADR                                                  | Title                            | Status   |
| ---------------------------------------------------- | -------------------------------- | -------- |
| [0001](0001-record-architecture-decisions.md)        | Record architecture decisions    | Accepted |
| [0002](0002-dev-tools-and-testing.md)                | Development tooling and testing  | Accepted |
| [0003](0003-ci-and-release-workflow.md)              | CI and release workflow          | Accepted |
| [0004](0004-sveltekit-with-node-adapter.md)          | SvelteKit with the Node adapter  | Accepted |
| [0005](0005-prisma-sqlite-datastore.md)              | Prisma + SQLite datastore        | Accepted |
| [0006](0006-markdown-rendering-with-sanitization.md) | Markdown content w/ sanitization | Accepted |

## Adding a new ADR

1. Copy `template.md` to `NNNN-kebab-title.md` using the next free number.
2. Fill in Status, Date, Deciders, and the four sections.
3. Add a row to the index table above.
4. If it supersedes an earlier ADR, update that ADR's status to
   `Superseded by [ADR-NNNN]`.
