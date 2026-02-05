# Sivam Pasupathipillai - Personal Website

A modern, responsive personal website built with SvelteKit featuring both portfolio and blog functionality. This site showcases the professional portfolio of Sivam Pasupathipillai, Senior AI Engineer & Data Scientist.

## Overview

This application features:

### Portfolio Section

- **Hero Section**: Professional introduction with contact CTAs
- **About**: Background, experience, and career highlights
- **Experience & Skills**: Work history and technical competencies
- **Projects**: Showcase of research and development work
- **Contact**: Professional contact information and links

### Blog Section

- **Blog Listing**: Paginated list of published blog posts
- **Individual Posts**: Full blog post pages with Markdown support
- **Admin Interface**: Content management system for creating and editing posts

## Tech Stack

- **Framework**: SvelteKit 2.43
- **Language**: TypeScript
- **Database**: Prisma with SQLite
- **Authentication**: bcryptjs for password hashing
- **Content**: Marked for Markdown parsing, DOMPurify for sanitization
- **Styling**: CSS (component-scoped)
- **Testing**: Vitest 3.2.4 with Testing Library, @vitest/coverage-v8
- **Build Tool**: Vite 7.1.7
- **Package Manager**: pnpm

## Development

Install dependencies:

```bash
pnpm install
```

Start the development server:

```bash
pnpm dev
```

Type checking:

```bash
pnpm check
```

Watch mode type checking:

```bash
pnpm check:watch
```

Code formatting:

```bash
pnpm format
pnpm format:check
```

## Database Setup

Seed blog posts from JSON data:

```bash
pnpm db:seed
```

Create admin user for blog management:

```bash
pnpm db:admin
```

## Building

Create a production build:

```bash
pnpm build
```

Preview the production build:

```bash
pnpm preview
```

## Testing

Run unit tests with coverage:

```bash
pnpm test
```

## Project Structure

```
src/
├── lib/
│   └── components/
│       ├── blog/           # Blog-specific components
│       │   ├── BlogCard.svelte    # Post preview cards
│       │   ├── BlogPost.svelte    # Full post display
│       │   └── Pagination.svelte  # Blog pagination
│       ├── Button.svelte          # Reusable button component
│       ├── Card.svelte            # Card container component
│       ├── ContactLink.svelte     # Contact link component
│       ├── Section.svelte         # Section wrapper component
│       ├── SkillBadge.svelte      # Skill tag component
│       ├── Stat.svelte            # Statistics component
│       ├── Timeline.svelte        # Timeline container
│       └── TimelineItem.svelte    # Timeline item component
├── routes/
│   ├── admin/                     # Admin interface
│   │   ├── login/                 # Admin authentication
│   │   └── posts/                 # Post management
│   │       ├── new/               # Create new post
│   │       └── [id]/
│   │           ├── edit/          # Edit existing post
│   │           └── preview/       # Preview post
│   ├── api/                       # API endpoints
│   │   ├── auth/                  # Authentication endpoints
│   │   └── posts/                 # Blog post API
│   ├── blog/                      # Blog section
│   │   ├── [slug]/                # Individual blog posts
│   │   └── +page.svelte           # Blog listing page
│   ├── +layout.svelte             # Global layout
│   └── +page.svelte               # Main portfolio page
├── tests/                         # Test setup and utilities
prisma/
└── schema.prisma                  # Database schema
scripts/
├── seed-blog.ts                   # Blog post seeding script
└── create-admin.ts                # Admin user creation script
```

## Database Schema

### BlogPost

- `id`: Unique identifier (cuid)
- `title`: Post title
- `slug`: URL-friendly identifier
- `content`: Markdown content
- `excerpt`: Optional post summary
- `published`: Publication status
- `createdAt`, `updatedAt`: Timestamps

### User

- `id`: Unique identifier (cuid)
- `email`: User email (unique)
- `passwordHash`: Hashed password
- `isAdmin`: Admin privileges flag
- `createdAt`, `updatedAt`: Timestamps

## Features

### Portfolio Features

- Fully responsive design
- Modern gradient backgrounds and hover effects
- Accessible component architecture
- Professional timeline display for experience
- Project showcase with detailed descriptions

### Blog Features

- Markdown content support with sanitization
- Paginated blog post listing
- SEO-friendly URL slugs
- Admin authentication and authorization
- Content management interface
- Draft and publish workflow

### Technical Features

- Type-safe development with TypeScript
- Comprehensive test coverage with Vitest
- Component-scoped CSS styling
- Database migrations with Prisma
- Secure password hashing
