# 0005. Prisma + SQLite datastore

- **Status:** Accepted
- **Date:** 2026-06-11
- **Deciders:** Sivam Pasupathipillai

## Context

The blog and admin features need persistent storage for blog posts and admin
users, with type-safe access from TypeScript and a simple schema-migration
story. The workload is tiny (a personal site's posts and a handful of users),
single-writer, and runs as one Node process on a single self-hosted host
([ADR-0003](0003-ci-and-release-workflow.md),
[ADR-0004](0004-sveltekit-with-node-adapter.md)). Operational simplicity matters
more than horizontal scalability.

## Decision

We will use **SQLite** as the database, accessed through **Prisma** (`prisma` +
`@prisma/client`). The schema lives in `prisma/schema.prisma` (models
`BlogPost` → `blog_posts`, `User` → `users`), the database file is selected by
`DATABASE_URL`, and migrations live in `prisma/migrations/`. A single
`PrismaClient` is instantiated and memoized on `globalThis` in
`src/lib/server/database.ts`, which exposes all data-access functions; the
client is never imported into client-side code.

Schema is applied with `pnpm prisma db push` (CI uses a throwaway
`file:./test.db`). Helper scripts `pnpm db:seed` and `pnpm db:admin` run via
`tsx`.

## Consequences

- Zero database service to run or operate — the data is a file on disk inside
  the container's volume, which fits the single-host deployment.
- Prisma gives type-safe queries and generated types shared with the app, plus a
  migration workflow.
- SQLite is single-writer and local to the host: this rules out multi-instance
  horizontal scaling and requires the DB file to be persisted/backed up as part
  of the deployment (volume in `docker-compose.yaml`).
- Centralizing access in `src/lib/server/database.ts` keeps the server/client
  boundary clean and gives one place to evolve queries.

## Alternatives considered

- **Postgres/MySQL:** real concurrency and scaling, but adds a service to run,
  secure, and back up — overkill for this workload. Revisit only if traffic or
  multi-instance hosting demands it (Prisma would ease the migration).
- **A headless CMS or flat Markdown files in the repo:** would avoid a database,
  but the admin interface deliberately edits posts at runtime, which needs a
  writable store. Rejected.
- **Raw SQL / a lighter query builder instead of Prisma:** less tooling weight,
  but loses generated types and the migration workflow. Rejected.
