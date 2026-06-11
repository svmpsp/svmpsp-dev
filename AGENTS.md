# AGENTS.md

This repository practices **Spec-Driven Development (SDD)**: the `specs/`
directory is the single source of truth for what this project is, how it is
built, and why it is structured the way it is. Read it before planning or
changing anything, and keep it in sync when you do.

- [`specs/content-map.md`](specs/content-map.md) — what the project is, its
  layout, routes, data model, and the commands to build/test/run it.
- [`specs/adr/`](specs/adr/) — the decisions behind the structure (the _why_):
  tooling and testing ([ADR-0002](specs/adr/0002-dev-tools-and-testing.md)), CI
  and release ([ADR-0003](specs/adr/0003-ci-and-release-workflow.md)), framework
  and datastore choices ([ADR-0004](specs/adr/0004-sveltekit-with-node-adapter.md)–[ADR-0006](specs/adr/0006-markdown-rendering-with-sanitization.md)).

`CLAUDE.md` is a symlink to this file. Keep this file minimal: anything that
belongs in the content map or an ADR lives there, not here.
