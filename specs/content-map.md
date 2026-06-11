# Repository Content Map

> A navigable index of this repository. Keep it in sync as the repo evolves —
> when you add a route, component, script, or top-level directory, update the
> relevant section here.

## What this project is

`svmpsp-dev` is the personal website of Sivam Pasupathipillai. It is a single
[SvelteKit](https://svelte.dev/docs/kit) application that serves both a static
**portfolio** page and a database-backed **blog**, plus an authenticated
**admin** interface for managing blog posts. Blog content is stored in SQLite
via Prisma, authored in Markdown, and rendered with sanitization. The app is
containerized and deployed over SSH to a self-hosted server.

## Top-level layout

| Path                 | Purpose                                                          |
| -------------------- | ---------------------------------------------------------------- |
| `src/`               | Application source (routes, components, server libs, tests)      |
| `src/routes/`        | SvelteKit file-based routes (pages, layouts, API endpoints)      |
| `src/lib/`           | Shared library code: components, server utilities, types, assets |
| `src/tests/`         | Test setup / shared test helpers                                 |
| `prisma/`            | Prisma schema, migrations, and the dev SQLite database           |
| `scripts/`           | One-off Node/TS scripts (seed blog, create admin) + seed data    |
| `static/`            | Static assets served as-is (favicon, resume, images)             |
| `build/`             | Production build output from `adapter-node` (generated)          |
| `.github/workflows/` | CI/CD pipeline (`ci.yaml`)                                       |
| `specs/`             | SDD artifacts: this content map + Architecture Decision Records  |

## Routes (`src/routes/`)

Portfolio + blog (public):

- `+layout.svelte` — global layout and styling
- `+page.svelte` — main portfolio page (hero, about, experience, projects, contact)
- `blog/+page.svelte`, `blog/+page.server.ts` — paginated post listing
- `blog/[slug]/+page.svelte`, `blog/[slug]/+page.server.ts` — single post page

Admin (authenticated — gated by `admin/+layout.server.ts`):

- `admin/+page.svelte` — dashboard
- `admin/login/+page.svelte` — login form
- `admin/posts/+page.svelte`, `+page.server.ts` — post management list
- `admin/posts/new/+page.svelte` — create post
- `admin/posts/[id]/edit/` — edit post
- `admin/posts/[id]/preview/` — preview before publishing

API endpoints (`src/routes/api/`):

- `auth/login/+server.ts`, `auth/logout/+server.ts` — session auth
- `posts/+server.ts` — list/create posts
- `posts/[id]/+server.ts` — read/update/delete a post

## Shared library (`src/lib/`)

- `components/` — reusable UI: `Button`, `Card`, `ContactLink`, `Section`,
  `SkillBadge`, `Stat`, `Timeline`, `TimelineItem`
- `components/blog/` — `BlogCard`, `BlogPost`, `Pagination`
- `server/database.ts` — Prisma client + data access (server-only)
- `server/auth.ts` — password hashing / session auth (bcryptjs)
- `types/` — shared TypeScript types
- `assets/` — imported assets

## Data model (`prisma/schema.prisma`)

SQLite via Prisma. Two models:

- `BlogPost` — `id`, `title`, `slug` (unique), `content`, `excerpt?`,
  `published`, `createdAt`, `updatedAt` → table `blog_posts`
- `User` — `id`, `email` (unique), `passwordHash`, `isAdmin`, timestamps →
  table `users`

`DATABASE_URL` (in `.env`) selects the SQLite file. Apply schema with
`pnpm prisma db push`; migrations live in `prisma/migrations/`.

## Tests

Test files live next to the code they cover as `*.{test,spec}.{js,ts}`
(e.g. `src/lib/components/Button.test.ts`, `src/lib/server/database.test.ts`).
Run them with:

```bash
pnpm test        # vitest run --coverage (happy-dom env)
```

See [ADR-0002](adr/0002-dev-tools-and-testing.md) for the full testing approach.

## Configuration & environment

- `.mise.toml` — pins Node 24.12 and pnpm 10.26 (via [mise](https://mise.jdx.dev/))
- `.env` — `DATABASE_URL` and other runtime env (not committed; see `.env`)
- `.prettierrc`, `eslint.config.js` — formatting and lint rules
- `svelte.config.js` — SvelteKit config (`adapter-node`, output to `build/`)
- `vite.config.ts` — Vite + Vitest config
- `.husky/pre-commit` — runs format check, typecheck, tests, build before commit
- `Dockerfile`, `docker-compose.yaml`, `.dockerignore` — containerization

## Common commands

```bash
pnpm dev            # start dev server
pnpm build          # production build (adapter-node → build/)
pnpm preview        # preview the production build
pnpm typecheck      # svelte-check against tsconfig.json
pnpm lint           # eslint src
pnpm format         # prettier --write
pnpm format:check   # prettier --check
pnpm test           # vitest run with coverage
pnpm db:seed        # seed blog posts from scripts/data/blog-posts.json
pnpm db:admin       # create an admin user
```

## Deeper documentation

- `README.md` — project intro and quick start
- `CONTRIBUTING.md` — contribution workflow
- `DEPLOY.md` — deployment details
- `specs/adr/` — Architecture Decision Records (the _why_ behind decisions)
