# 0002. Development tooling and testing

- **Status:** Accepted
- **Date:** 2026-06-11
- **Deciders:** Sivam Pasupathipillai

## Context

The project is a SvelteKit 2 application written in TypeScript. It needs a
consistent local toolchain (so the single maintainer and any coding agents get
reproducible results), enforced formatting and linting, type safety across
Svelte and TS, and an automated test suite that runs both unit logic and Svelte
component rendering. These choices are reflected in `package.json`, `.mise.toml`,
`.prettierrc`, `eslint.config.js`, `vite.config.ts`, and `.husky/pre-commit`.

## Decision

We will standardize on the following development tooling and testing approach:

- **Language / runtime:** TypeScript (`typescript` ^5.9) on Node **24.12**,
  pinned via `.mise.toml`.
- **Package manager:** **pnpm 10.26**, pinned via both `packageManager` in
  `package.json` and `.mise.toml`. `pnpm-workspace.yaml` is present.
- **Framework:** SvelteKit 2 with Svelte 5, built by Vite 7.
- **Formatter:** **Prettier** (`prettier-plugin-svelte`) with the rules in
  `.prettierrc` (2-space indent, single quotes, semicolons, `printWidth` 100,
  `trailingComma: es5`). Commands: `pnpm format` / `pnpm format:check`.
- **Linter:** **ESLint 9** (flat config in `eslint.config.js`) with
  `typescript-eslint` and `eslint-plugin-svelte`. Command: `pnpm lint`
  (`eslint src`).
- **Type checking:** **svelte-check** against `tsconfig.json`. Command:
  `pnpm typecheck` (runs `svelte-kit sync` first); `pnpm typecheck:watch` for
  watch mode.
- **Test framework:** **Vitest 3** in a `happy-dom` environment, with
  `@testing-library/svelte` and `@testing-library/jest-dom` for component tests
  and `@vitest/coverage-v8` for coverage. Command: `pnpm test`
  (`vitest run --coverage`).
- **Test organization:** tests are colocated with the code they cover, named
  `*.{test,spec}.{js,ts}` (e.g. `src/lib/components/Button.test.ts`,
  `src/lib/server/database.test.ts`).
- **Pre-commit hook:** **Husky** runs `format:check`, `typecheck`, `test`, and
  `build` before each commit (`.husky/pre-commit`).
- **Database tooling:** Prisma CLI; `pnpm prisma db push` applies the schema,
  and `pnpm db:seed` / `pnpm db:admin` run TS scripts via `tsx`.

## Consequences

- Formatting, linting, type, and test failures are caught locally at commit time
  and again in CI ([ADR-0003](0003-ci-and-release-workflow.md)) — the same
  command set runs in both places, so "passes locally" means "passes CI".
- Contributors must have the pinned Node/pnpm versions (mise makes this
  automatic); mismatched versions can produce lockfile or build drift.
- The pre-commit hook is relatively heavy (it includes `build`), trading commit
  speed for confidence.

## Alternatives considered

- **npm or yarn instead of pnpm:** pnpm's content-addressed store is faster and
  disk-efficient; the lockfile is already committed. Rejected.
- **Jest instead of Vitest:** Vitest integrates natively with the Vite/SvelteKit
  toolchain and shares its config. Rejected.
- **jsdom instead of happy-dom:** happy-dom is lighter and sufficient for the
  component tests here. Rejected.
