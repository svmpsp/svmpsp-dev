# Deployment Guide

This guide covers deploying your SvelteKit + Prisma personal website to various hosting platforms.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Pre-deployment Setup](#pre-deployment-setup)
- [Platform Options](#platform-options)
- [Railway Deployment (Recommended)](#railway-deployment-recommended)
- [Vercel + External Database](#vercel--external-database)
- [Render Deployment](#render-deployment)
- [DigitalOcean App Platform](#digitalocean-app-platform)
- [Environment Variables](#environment-variables)
- [Database Migration](#database-migration)
- [Post-deployment Setup](#post-deployment-setup)
- [Updates and Maintenance](#updates-and-maintenance)
- [Troubleshooting](#troubleshooting)

## Prerequisites

Before deploying, ensure you have:

- Node.js 18+ installed locally
- Git repository with your code
- GitHub account (for most platforms)
- Basic understanding of environment variables

## Pre-deployment Setup

### 1. Database Migration from SQLite to PostgreSQL

Your current project uses SQLite, which doesn't work in most serverless environments. You'll need to migrate to PostgreSQL.

**Update `prisma/schema.prisma`:**

```prisma
// Change from:
datasource db {
  provider = "sqlite"
  url      = env("DATABASE_URL")
}

// To:
datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}
```

### 2. Update Package.json Scripts

Add production-ready scripts to your `package.json`:

```json
{
  "scripts": {
    "dev": "vite dev",
    "build": "vite build",
    "preview": "vite preview",
    "start": "node build",
    "prepare": "svelte-kit sync || echo ''",
    "check": "svelte-kit sync && svelte-check --tsconfig ./tsconfig.json",
    "check:watch": "svelte-kit sync && svelte-check --tsconfig ./tsconfig.json --watch",
    "format": "prettier --write .",
    "format:check": "prettier --check .",
    "test": "pnpm vitest run --coverage",
    "db:seed": "pnpm tsx scripts/seed-blog.ts",
    "db:admin": "pnpm tsx scripts/create-admin.ts",
    "db:migrate": "prisma migrate deploy",
    "db:generate": "prisma generate",
    "postbuild": "prisma generate"
  }
}
```

### 3. Create Environment Template

Create `.env.example`:

```bash
# Database Configuration
DATABASE_URL="postgresql://username:password@hostname:port/database"

# Admin User Configuration
ADMIN_EMAIL="your-email@example.com"
ADMIN_PASSWORD="your-secure-password"

# Optional: Production settings
NODE_ENV="production"
```

## Platform Options

| Platform | Cost | Database | Difficulty | Best For |
|----------|------|----------|------------|----------|
| **Railway** | $5/month | Included | Easy | Full-stack apps |
| **Vercel** | Free/$$$ | External | Medium | Static + API |
| **Render** | Free/$7+ | $7/month | Easy | Small projects |
| **DigitalOcean** | $5/month | $15/month | Medium | Production apps |

## Railway Deployment (Recommended)

Railway is the easiest option for full-stack SvelteKit apps with databases.

### Step 1: Prepare Your Project

1. **Install Railway CLI:**
   ```bash
   npm install -g @railway/cli
   ```

2. **Login to Railway:**
   ```bash
   railway login
   ```

### Step 2: Deploy to Railway

1. **Initialize Railway project:**
   ```bash
   railway new
   # Choose "Deploy from GitHub repo"
   # Select your repository
   ```

2. **Add PostgreSQL database:**
   ```bash
   railway add postgresql
   ```

3. **Set environment variables:**
   ```bash
   railway variables set NODE_ENV=production
   railway variables set ADMIN_EMAIL=your-email@example.com
   railway variables set ADMIN_PASSWORD=your-secure-password
   ```

### Step 3: Configure Railway

Create `railway.json` in your project root:

```json
{
  "$schema": "https://railway.app/railway.schema.json",
  "build": {
    "builder": "NIXPACKS"
  },
  "deploy": {
    "numReplicas": 1,
    "sleepApplication": false,
    "restartPolicyType": "ON_FAILURE"
  }
}
```

### Step 4: Deploy and Setup

1. **Deploy your application:**
   ```bash
   railway up
   ```

2. **Run database migrations:**
   ```bash
   railway run "pnpm prisma migrate deploy"
   ```

3. **Create admin user:**
   ```bash
   railway run "pnpm db:admin"
   ```

4. **Seed blog posts (optional):**
   ```bash
   railway run "pnpm db:seed"
   ```

## Vercel + External Database

Vercel offers excellent performance for SvelteKit apps but requires an external database.

### Step 1: Setup Database

Choose a database provider:

- **Neon** (PostgreSQL, free tier): https://neon.tech
- **PlanetScale** (MySQL, free tier): https://planetscale.com
- **Supabase** (PostgreSQL, free tier): https://supabase.com

### Step 2: Configure SvelteKit for Vercel

1. **Install Vercel adapter:**
   ```bash
   pnpm remove @sveltejs/adapter-auto
   pnpm add @sveltejs/adapter-vercel
   ```

2. **Update `svelte.config.js`:**
   ```javascript
   import adapter from '@sveltejs/adapter-vercel';
   import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

   const config = {
     preprocess: vitePreprocess(),
     kit: {
       adapter: adapter({
         runtime: 'nodejs18.x'
       })
     }
   };

   export default config;
   ```

### Step 3: Deploy to Vercel

1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Login and deploy:**
   ```bash
   vercel login
   vercel --prod
   ```

3. **Set environment variables in Vercel dashboard:**
   - `DATABASE_URL`
   - `ADMIN_EMAIL`
   - `ADMIN_PASSWORD`

### Step 4: Setup Database

1. **Run migrations:**
   ```bash
   vercel env pull .env.local
   pnpm prisma migrate deploy
   ```

2. **Create admin user:**
   ```bash
   pnpm db:admin
   ```

## Render Deployment

Render offers a free tier with automatic deployments from GitHub.

### Step 1: Create Render Account

1. Sign up at https://render.com
2. Connect your GitHub repository

### Step 2: Create Web Service

1. **Create new Web Service**
2. **Configure build settings:**
   - Build Command: `pnpm install && pnpm build`
   - Start Command: `node build`
   - Node Version: `18`

### Step 3: Add Database

1. **Create PostgreSQL database** in Render
2. **Copy connection string**

### Step 4: Configure Environment

Add environment variables in Render dashboard:
```bash
DATABASE_URL=postgresql://...
ADMIN_EMAIL=your-email@example.com
ADMIN_PASSWORD=your-secure-password
NODE_ENV=production
```

### Step 5: Deploy and Setup

1. **Deploy** (automatic from GitHub)
2. **Run migrations** via Render shell:
   ```bash
   pnpm prisma migrate deploy
   pnpm db:admin
   ```

## DigitalOcean App Platform

Professional-grade hosting with managed databases.

### Step 1: Create App

1. **Sign up** at https://digitalocean.com
2. **Create App** from GitHub repository

### Step 2: Configure Build

```yaml
# .do/app.yaml
name: svmpsp-website
services:
- name: web
  source_dir: /
  github:
    repo: your-username/your-repo
    branch: main
  run_command: node build
  build_command: pnpm install && pnpm build
  environment_slug: node-js
  instance_count: 1
  instance_size_slug: basic-xxs
  env:
  - key: NODE_ENV
    value: production
```

### Step 3: Add Database

1. **Create Managed PostgreSQL** database
2. **Connect to your app**

## Environment Variables

### Required Variables

```bash
# Database (provided by hosting platform)
DATABASE_URL="postgresql://..."

# Admin Setup
ADMIN_EMAIL="your-email@example.com"
ADMIN_PASSWORD="your-secure-password"

# Production Settings
NODE_ENV="production"
```

### Security Best Practices

- Use strong, unique passwords
- Don't commit `.env` files
- Use platform-specific secret management
- Rotate passwords regularly

## Database Migration

### Local Testing with PostgreSQL

Before deploying, test with PostgreSQL locally:

1. **Install PostgreSQL** (or use Docker):
   ```bash
   # Using Docker
   docker run --name postgres -e POSTGRES_PASSWORD=password -p 5432:5432 -d postgres

   # Update your .env
   DATABASE_URL="postgresql://postgres:password@localhost:5432/svmpsp"
   ```

2. **Run migrations:**
   ```bash
   pnpm prisma migrate dev --name init
   pnpm db:admin
   pnpm db:seed
   ```

### Production Migration Steps

1. **Create new migration:**
   ```bash
   pnpm prisma migrate dev --name production-setup
   ```

2. **Deploy migration:**
   ```bash
   pnpm prisma migrate deploy
   ```

3. **Generate client:**
   ```bash
   pnpm prisma generate
   ```

## Post-deployment Setup

### 1. Verify Deployment

Check these endpoints:
- `https://your-domain.com` - Portfolio homepage
- `https://your-domain.com/blog` - Blog listing
- `https://your-domain.com/admin` - Admin login

### 2. Create Admin User

```bash
# Railway
railway run "pnpm db:admin"

# Vercel (locally with production DB)
pnpm db:admin

# Render (via shell)
pnpm db:admin
```

### 3. Seed Content (Optional)

```bash
# Add sample blog posts
pnpm db:seed
```

### 4. Setup Custom Domain

Most platforms support custom domains:
1. **Add domain** in platform dashboard
2. **Update DNS** records as instructed
3. **Enable HTTPS** (usually automatic)

## Updates and Maintenance

### Automated Deployments

Most platforms support automatic deployments from GitHub:

1. **Connect GitHub repository**
2. **Enable automatic deployments**
3. **Push to main branch** triggers deployment

### Manual Deployment

For manual updates:

```bash
# Railway
railway up

# Vercel
vercel --prod

# Or push to GitHub for auto-deployment
git push origin main
```

### Database Updates

When updating database schema:

1. **Create migration locally:**
   ```bash
   pnpm prisma migrate dev --name your-change-name
   ```

2. **Test migration:**
   ```bash
   pnpm test
   pnpm build
   ```

3. **Deploy:**
   ```bash
   git add .
   git commit -m "feat: database schema update"
   git push origin main
   ```

4. **Run migration in production:**
   ```bash
   # Will run automatically on most platforms via postbuild script
   # Or manually:
   railway run "pnpm prisma migrate deploy"
   ```

### Backup Strategy

#### Railway/Render (PostgreSQL)
```bash
# Create backup
pg_dump $DATABASE_URL > backup.sql

# Restore backup
psql $DATABASE_URL < backup.sql
```

#### Automated Backups
- **Railway**: Automatic daily backups
- **Render**: Backup add-on available
- **DigitalOcean**: Managed database backups

## Troubleshooting

### Common Issues

#### Build Failures

**Error: "Cannot find module @prisma/client"**
```bash
# Add postbuild script to package.json
"postbuild": "prisma generate"
```

**Error: "Database connection failed"**
- Verify `DATABASE_URL` format
- Check database is running
- Ensure network connectivity

#### Runtime Errors

**Error: "Admin user creation failed"**
```bash
# Check admin script logs
# Verify ADMIN_EMAIL and ADMIN_PASSWORD are set
# Ensure database is accessible
```

**Error: "Migration failed"**
```bash
# Reset database (development only)
pnpm prisma migrate reset

# Or manually fix migration
pnpm prisma migrate resolve --applied "migration-name"
```

### Database Connection Issues

1. **Check connection string format:**
   ```bash
   # Correct format
   postgresql://username:password@hostname:port/database

   # With SSL (often required)
   postgresql://username:password@hostname:port/database?sslmode=require
   ```

2. **Test connection:**
   ```bash
   pnpm prisma db pull
   ```

### Performance Issues

1. **Enable query logging:**
   ```typescript
   // Add to your Prisma client
   const prisma = new PrismaClient({
     log: ['query', 'info', 'warn', 'error'],
   });
   ```

2. **Optimize queries:**
   ```typescript
   // Use select to limit fields
   const posts = await prisma.blogPost.findMany({
     select: {
       id: true,
       title: true,
       excerpt: true,
       createdAt: true
     }
   });
   ```

### Getting Help

1. **Platform Documentation:**
   - Railway: https://docs.railway.app
   - Vercel: https://vercel.com/docs
   - Render: https://render.com/docs

2. **Prisma Documentation:**
   - https://www.prisma.io/docs

3. **SvelteKit Documentation:**
   - https://kit.svelte.dev

4. **Check logs:**
   ```bash
   # Railway
   railway logs

   # Vercel
   vercel logs

   # Check your platform's logging interface
   ```

## Cost Optimization

### Free Tier Limits

- **Vercel**: 100GB bandwidth, 6,000 build minutes
- **Render**: 500 build hours, sleeps after 15min inactivity
- **Railway**: $5 trial credit

### Optimization Tips

1. **Use CDN** for static assets
2. **Optimize images** and bundle size
3. **Enable compression** (usually automatic)
4. **Monitor usage** via platform dashboards

---

**Recommended Starting Point:** Begin with Railway for the simplest deployment experience, then consider migrating to other platforms as your needs grow.