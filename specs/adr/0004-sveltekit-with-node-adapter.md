# 0004. SvelteKit with the Node adapter

- **Status:** Accepted
- **Date:** 2026-06-11
- **Deciders:** Sivam Pasupathipillai

## Context

The site combines a mostly static **portfolio** with a dynamic, database-backed
**blog** and an authenticated **admin** area that performs server-side reads,
writes, and session auth. It needs a framework that supports both server-side
rendering and server-only endpoints, ships a single deployable artifact, and is
comfortable for a single maintainer to evolve. The project is deployed as a
long-running container on a self-hosted server reached over SSH
([ADR-0003](0003-ci-and-release-workflow.md)), not on a serverless or
edge platform.

## Decision

We will build the site as a **SvelteKit 2 / Svelte 5** application and build it
with **`@sveltejs/adapter-node`** (configured in `svelte.config.js`, output to
`build/`). Server-only logic lives under `src/lib/server/` (e.g.
`database.ts`, `auth.ts`) and `+page.server.ts` / `+server.ts` files; the API
lives under `src/routes/api/`. `@sveltejs/adapter-auto` remains a dependency but
the build is pinned to the Node adapter.

## Consequences

- One framework covers static pages, SSR, form actions, and JSON endpoints — no
  separate backend service to maintain.
- `adapter-node` produces a self-contained Node server that runs cleanly inside
  the Docker container and matches the self-hosted deployment model.
- The app requires a running Node process (Node 24, pinned in `.mise.toml`); it
  is not a static export and cannot be served from a pure CDN.
- The server/client boundary must be respected: secrets and DB access stay in
  `src/lib/server/` and `*.server.ts`, never in client bundles.

## Alternatives considered

- **`adapter-auto` / a serverless or edge adapter (Vercel, Cloudflare):** would
  offload hosting, but conflicts with the self-hosted SSH + Docker deployment and
  a SQLite file on disk ([ADR-0005](0005-prisma-sqlite-datastore.md)). Rejected.
- **`adapter-static` (fully static export):** simplest to host, but cannot serve
  the dynamic blog/admin or run server-side auth and DB access. Rejected.
- **A separate SPA + standalone API backend:** more moving parts and duplicated
  routing/types for a single-maintainer personal site. Rejected.
