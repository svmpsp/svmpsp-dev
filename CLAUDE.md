# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal website for Sivam Pasupathipillai, built using SvelteKit with both portfolio and blog functionality. The site includes a main portfolio page, blog section, and admin interface for content management.

## Development Commands

**Start development server:**

```bash
pnpm dev
```

**Build for production:**

```bash
pnpm build
```

**Preview production build:**

```bash
pnpm preview
```

**Type checking:**

```bash
pnpm check
```

**Watch mode type checking:**

```bash
pnpm check:watch
```

**Run tests with coverage:**

```bash
pnpm test
```

**Code formatting:**

```bash
pnpm format
pnpm format:check
```

**Database operations:**

```bash
pnpm db:seed      # Seed blog posts from scripts/data/blog-posts.json
pnpm db:admin     # Create admin user
```

## Architecture

### Project Structure

- `src/routes/+page.svelte` - Main portfolio page with hero, about, experience, projects, contact sections
- `src/routes/+layout.svelte` - Global layout and styling
- `src/routes/blog/` - Blog section with post listing and individual post pages
- `src/routes/admin/` - Admin interface for blog management (login, post creation/editing)
- `src/lib/components/` - Reusable Svelte components
- `src/lib/components/blog/` - Blog-specific components (BlogCard, BlogPost, Pagination)
- `prisma/schema.prisma` - Database schema with BlogPost and User models
- `scripts/` - Database seeding and admin creation utilities

### Tech Stack

- **Framework**: SvelteKit 2.43 with TypeScript
- **Database**: Prisma with SQLite
- **Authentication**: bcryptjs for password hashing
- **Content**: Marked for Markdown parsing, DOMPurify for sanitization
- **Testing**: Vitest 3.2.4 with Testing Library, coverage reports, and happy-dom environment
- **Build**: Vite 7.1.7 with SvelteKit plugin
- **Package Manager**: pnpm

### Database Schema

- **BlogPost**: id, title, slug, content, excerpt, published, timestamps
- **User**: id, email, passwordHash, isAdmin, timestamps
- Uses SQLite with Prisma Client for type-safe database access

### Component Architecture

Core components in `src/lib/components/`:
- Button, Card, ContactLink, Section, SkillBadge, Stat
- Timeline, TimelineItem (for experience display)

Blog components in `src/lib/components/blog/`:
- BlogCard (post preview), BlogPost (full post), Pagination

### Route Structure

- `/` - Main portfolio page
- `/blog` - Blog post listing with pagination
- `/blog/[slug]` - Individual blog post pages
- `/admin` - Admin dashboard
- `/admin/login` - Admin authentication
- `/admin/posts` - Post management
- `/admin/posts/new` - Create new post
- `/admin/posts/[id]/edit` - Edit existing post
- `/admin/posts/[id]/preview` - Preview post before publishing

### Testing Setup

- Vitest with happy-dom environment
- Coverage reporting with @vitest/coverage-v8
- Testing Library for Svelte component testing
- Jest-DOM matchers for enhanced assertions
- Test files follow `*.{test,spec}.{js,ts}` pattern in `src/` directory

## Development Notes

- Portfolio and blog functionality coexist in the same SvelteKit app
- Admin interface requires authentication (use `pnpm db:admin` to create admin user)
- Blog posts support Markdown content with sanitization
- Database seeding available via JSON file in `scripts/data/blog-posts.json`
- Uses component-scoped CSS styling throughout
- TypeScript configuration supports browser conditions
