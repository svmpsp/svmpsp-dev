# Stage 1: Build
FROM node:24-slim AS build

RUN corepack enable && corepack prepare pnpm@10 --activate

WORKDIR /app

COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
COPY prisma ./prisma/

RUN pnpm install --frozen-lockfile

COPY . .

RUN pnpm prisma generate
RUN pnpm build

# Stage 2: Production
FROM node:24-slim AS production

RUN apt-get update -y && apt-get install -y openssl && rm -rf /var/lib/apt/lists/*
RUN corepack enable && corepack prepare pnpm@10 --activate

WORKDIR /app

COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
COPY prisma ./prisma/

RUN pnpm install --frozen-lockfile --prod
RUN pnpm prisma generate

COPY --from=build /app/build ./build

ENV NODE_ENV=production
ENV PORT=10000
ENV DATABASE_URL=file:/data/db.sqlite

EXPOSE 10000

CMD pnpm prisma db push --skip-generate && node build/index.js
