# 0003. CI and release workflow

- **Status:** Accepted
- **Date:** 2026-06-11
- **Deciders:** Sivam Pasupathipillai

## Context

The site must stay deployable and healthy as changes land. There is a single
long-lived branch (`main`) and a self-hosted deployment target reached over SSH.
We want every change validated before it merges, the production image built
reproducibly, and deployment to happen automatically once changes reach `main`.
The pipeline is defined in `.github/workflows/ci.yaml`, containerized via
`Dockerfile` / `docker-compose.yaml`, and documented in `DEPLOY.md`.

## Decision

We will use **GitHub Actions** as the CI/CD provider with a single workflow
(`ci.yaml`) triggered on pushes to `main` and on pull requests targeting `main`.
The pipeline has three jobs:

1. **`check-pr` (validation):** on Node 24 + pnpm 10 with a throwaway SQLite
   test database (`DATABASE_URL=file:./test.db`, applied via `pnpm prisma
db push`), run in order: `format:check` → `lint` → `typecheck` → `test` →
   `build`. This mirrors the Husky pre-commit hook
   ([ADR-0002](0002-dev-tools-and-testing.md)).
2. **`docker` (build):** after `check-pr` passes, build the production Docker
   image with Buildx (GitHub Actions cache, `push: false` — build verification
   only).
3. **`deploy` (release):** only when `github.ref == refs/heads/main` and the
   event is a `push`. SSH to the server, `git pull origin main`, and
   `docker compose up --build --force-recreate --remove-orphans -d`.

**Branch & merge policy:** trunk-based on `main`; changes land via PRs that must
pass `check-pr` (and the Docker build) before merge.

**Versioning & releases:** the app is deployed continuously rather than
versioned for distribution. `package.json` carries a nominal version
(`0.0.1`); there are no published artifacts or tagged releases — "release" means
"merged to `main`, which auto-deploys the latest image to the server."

## Consequences

- Every PR is gated on the full local check suite plus a real Docker build,
  catching most regressions before merge.
- Merging to `main` ships to production with no manual step — fast feedback, but
  it means `main` must always be deployable and there is no staging gate.
- Deployment depends on repo secrets (`DEPLOY_HOST`, `DEPLOY_USER`,
  `DEPLOY_SSH_KEY`) and on the server pulling from `main` and rebuilding the
  image in place.
- There is no rollback automation; reverting a bad deploy means reverting the
  commit on `main` (which re-triggers deploy) or intervening on the server.

## Alternatives considered

- **Pushing the image to a registry and pulling by digest:** more robust and
  rollback-friendly, but adds registry setup/cost; the current SSH + in-place
  `git pull` + `docker compose` build is simpler for a single self-hosted host.
  Revisit if rollback or multi-host deploys become needed.
- **Tagged semantic-version releases:** unnecessary for a single continuously
  deployed website with no downstream consumers. Rejected.
- **A separate staging environment before production:** more safety, more
  overhead than warranted for a personal site. Rejected for now.
