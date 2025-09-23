# Contributing to Sivam Pasupathipillai's Personal Website

Thank you for your interest in contributing to this project! This document provides guidelines and information for contributors.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Setup](#development-setup)
- [Database Management with Prisma](#database-management-with-prisma)
- [Project Structure](#project-structure)
- [Coding Standards](#coding-standards)
- [Testing Guidelines](#testing-guidelines)
- [Commit Guidelines](#commit-guidelines)
- [Pull Request Process](#pull-request-process)
- [Bug Reports](#bug-reports)
- [Feature Requests](#feature-requests)

## Code of Conduct

This project adheres to a code of conduct that promotes a welcoming and inclusive environment. Please be respectful in all interactions.

## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- pnpm (recommended package manager)
- Git

### Development Setup

1. **Fork and clone the repository:**
   ```bash
   git clone https://github.com/your-username/svmpsp-dev.git
   cd svmpsp-dev
   ```

2. **Install dependencies:**
   ```bash
   pnpm install
   ```

3. **Set up the database:**
   ```bash
   # Seed blog posts (optional)
   pnpm db:seed

   # Create admin user for blog management
   pnpm db:admin
   ```

4. **Start the development server:**
   ```bash
   pnpm dev
   ```

5. **Verify your setup:**
   - Portfolio: http://localhost:5173
   - Blog: http://localhost:5173/blog
   - Admin: http://localhost:5173/admin

## Database Management with Prisma

This project uses Prisma as the ORM with SQLite as the database. This section provides comprehensive guidance on managing the database throughout development.

### Database Configuration

The database configuration is defined in:
- **Schema**: `prisma/schema.prisma` - Defines models, relationships, and database configuration
- **Database File**: `prisma/dev.db` - SQLite database file (created automatically)
- **Environment**: Database URL is configured via `DATABASE_URL` environment variable

### Prisma CLI Commands

Install Prisma CLI globally for easier access:
```bash
npm install -g prisma
```

Or use via pnpm:
```bash
pnpm prisma [command]
```

### Essential Prisma Operations

#### 1. Database Initialization

**First-time setup:**
```bash
# Generate Prisma client
pnpm prisma generate

# Create database and apply schema
pnpm prisma db push
```

**For existing projects:**
```bash
# Install dependencies (includes Prisma client generation)
pnpm install

# Apply any pending migrations
pnpm prisma migrate deploy
```

#### 2. Schema Development

**When modifying `prisma/schema.prisma`:**

```bash
# Apply changes to development database (prototyping)
pnpm prisma db push

# OR create a migration (recommended for production)
pnpm prisma migrate dev --name descriptive-migration-name
```

**Key differences:**
- `db push` - Quick prototyping, no migration files
- `migrate dev` - Creates migration files, better for team collaboration

#### 3. Database Migrations

**Create a new migration:**
```bash
pnpm prisma migrate dev --name add-new-field
```

**Apply migrations:**
```bash
# Development environment
pnpm prisma migrate dev

# Production environment
pnpm prisma migrate deploy
```

**Migration best practices:**
- Use descriptive names: `add-user-roles`, `update-blog-schema`
- Review generated SQL before committing
- Test migrations on a copy of production data
- Never edit migration files manually

#### 4. Database Inspection

**View database schema:**
```bash
pnpm prisma studio
```
Opens a web interface at http://localhost:5555 for browsing data

**Generate ERD (Entity Relationship Diagram):**
```bash
pnpm prisma generate --generator erd
```

**Database introspection:**
```bash
pnpm prisma db pull
```
Updates schema.prisma based on existing database

#### 5. Data Management

**Seeding:**
```bash
# Seed blog posts from JSON data
pnpm db:seed

# Create admin user
pnpm db:admin
```

**Custom seeding scripts:**
Create scripts in the `scripts/` directory following the existing pattern:

```typescript
// scripts/custom-seed.ts
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Your seeding logic here
  await prisma.blogPost.createMany({
    data: [
      // Your data
    ]
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
```

### Schema Development Guidelines

#### Model Design

```prisma
model ExampleModel {
  // Primary key - use cuid() for consistency
  id        String   @id @default(cuid())

  // Required fields
  title     String

  // Optional fields
  description String?

  // Enums for constrained values
  status    Status   @default(DRAFT)

  // Relationships
  authorId  String
  author    User     @relation(fields: [authorId], references: [id])

  // Timestamps - always include these
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  // Table name mapping (optional)
  @@map("example_models")
}

enum Status {
  DRAFT
  PUBLISHED
  ARCHIVED
}
```

#### Field Types and Conventions

```prisma
// String fields
title       String           // Required text
slug        String   @unique // Unique identifier
description String?          // Optional text
content     String   @db.Text // Large text content

// Numbers
viewCount   Int      @default(0)
price       Float?
rating      Decimal?

// Booleans
published   Boolean  @default(false)
featured    Boolean  @default(false)

// Dates
publishedAt DateTime?
createdAt   DateTime @default(now())
updatedAt   DateTime @updatedAt

// JSON data (use sparingly)
metadata    Json?

// Relationships
authorId    String
author      User     @relation(fields: [authorId], references: [id])
```

#### Relationship Patterns

**One-to-Many:**
```prisma
model User {
  id    String @id @default(cuid())
  posts BlogPost[]
}

model BlogPost {
  id       String @id @default(cuid())
  authorId String
  author   User   @relation(fields: [authorId], references: [id])
}
```

**Many-to-Many:**
```prisma
model Post {
  id   String @id @default(cuid())
  tags PostTag[]
}

model Tag {
  id    String @id @default(cuid())
  posts PostTag[]
}

model PostTag {
  postId String
  tagId  String
  post   Post   @relation(fields: [postId], references: [id])
  tag    Tag    @relation(fields: [tagId], references: [id])

  @@id([postId, tagId])
}
```

### Database Operations in Code

#### Client Usage

```typescript
import { PrismaClient } from '@prisma/client';

// Create client instance
const prisma = new PrismaClient();

// Always disconnect when done
process.on('beforeExit', async () => {
  await prisma.$disconnect();
});
```

#### Common Query Patterns

```typescript
// Create
const post = await prisma.blogPost.create({
  data: {
    title: 'New Post',
    content: 'Post content',
    published: true,
    author: {
      connect: { id: userId }
    }
  }
});

// Read with relations
const posts = await prisma.blogPost.findMany({
  where: { published: true },
  include: { author: true },
  orderBy: { createdAt: 'desc' },
  take: 10,
  skip: 0
});

// Update
const updatedPost = await prisma.blogPost.update({
  where: { id: postId },
  data: { title: 'Updated Title' }
});

// Delete
await prisma.blogPost.delete({
  where: { id: postId }
});

// Transactions
await prisma.$transaction(async (tx) => {
  await tx.blogPost.create({ data: postData });
  await tx.user.update({ where: { id: userId }, data: { postCount: { increment: 1 } } });
});
```

#### Error Handling

```typescript
import { Prisma } from '@prisma/client';

try {
  await prisma.blogPost.create({ data: postData });
} catch (error) {
  if (error instanceof Prisma.PrismaClientKnownRequestError) {
    if (error.code === 'P2002') {
      // Unique constraint violation
      throw new Error('Post with this slug already exists');
    }
  }
  throw error;
}
```

### Database Testing

#### Test Database Setup

Create a separate test database:

```typescript
// tests/setup.ts
import { PrismaClient } from '@prisma/client';

const testDb = new PrismaClient({
  datasources: { db: { url: 'file:./test.db' } }
});

export { testDb };
```

#### Test Cleanup

```typescript
// After each test
afterEach(async () => {
  await testDb.blogPost.deleteMany();
  await testDb.user.deleteMany();
});

// After all tests
afterAll(async () => {
  await testDb.$disconnect();
});
```

### Production Considerations

#### Migration Strategy

1. **Development**: Use `migrate dev` for schema changes
2. **Staging**: Test migrations with production-like data
3. **Production**: Use `migrate deploy` with proper backup

#### Performance Optimization

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

// Use indexes for frequently queried fields
model BlogPost {
  slug      String   @unique
  published Boolean
  createdAt DateTime @default(now())

  @@index([published, createdAt])
}
```

#### Backup and Recovery

```bash
# Backup SQLite database
cp prisma/dev.db prisma/backup-$(date +%Y%m%d).db

# Restore from backup
cp prisma/backup-20240101.db prisma/dev.db
```

### Troubleshooting

#### Common Issues

**Schema drift:**
```bash
pnpm prisma migrate reset
pnpm prisma migrate dev
```

**Client generation issues:**
```bash
pnpm prisma generate --force-version
```

**Database lock (SQLite):**
```bash
# Stop all Node processes
# Delete prisma/dev.db-journal if exists
pnpm prisma db push
```

#### Debugging

Enable query logging:
```typescript
const prisma = new PrismaClient({
  log: ['query', 'info', 'warn', 'error'],
});
```

### Database Schema Evolution

When making schema changes:

1. **Plan the change**: Consider impact on existing data
2. **Create migration**: Use descriptive names
3. **Test locally**: Verify migration works correctly
4. **Update queries**: Modify application code as needed
5. **Test thoroughly**: Ensure no breaking changes
6. **Document changes**: Update this guide if needed

### Resources

- [Prisma Documentation](https://www.prisma.io/docs)
- [Prisma Schema Reference](https://www.prisma.io/docs/reference/api-reference/prisma-schema-reference)
- [Prisma Client API](https://www.prisma.io/docs/reference/api-reference/prisma-client-reference)

## Project Structure

### Key Directories

- **`src/lib/components/`**: Reusable Svelte components
- **`src/lib/components/blog/`**: Blog-specific components
- **`src/routes/`**: SvelteKit routes (pages and API endpoints)
- **`src/routes/admin/`**: Admin interface for blog management
- **`src/routes/blog/`**: Blog listing and individual post pages
- **`prisma/`**: Database schema and migrations
- **`scripts/`**: Utility scripts for database operations

### Component Architecture

- Use component-scoped CSS styling
- Follow existing naming conventions
- Ensure components are accessible and responsive
- Include TypeScript types for all props

## Coding Standards

### TypeScript

- Always use TypeScript for new files
- Define proper interfaces and types
- Avoid `any` types when possible
- Use strict type checking

### Svelte Components

- Use `<script lang="ts">` for TypeScript support
- Follow consistent component structure:
  ```svelte
  <script lang="ts">
    // Imports
    // Type definitions
    // Props
    // Logic
  </script>

  <!-- HTML template -->

  <style>
    /* Component-scoped styles */
  </style>
  ```

### CSS/Styling

- Use component-scoped styles
- Follow existing design patterns
- Ensure responsive design
- Use semantic color variables when available

### Database

- Use Prisma for database operations
- Follow existing schema patterns
- Always create migrations for schema changes
- Use descriptive model and field names

## Testing Guidelines

### Test Requirements

- Write tests for all new components
- Maintain or improve existing test coverage
- Use Vitest with Testing Library for component tests
- Test both positive and negative scenarios

### Running Tests

```bash
# Run all tests with coverage
pnpm test

# Run tests in watch mode (development)
pnpm vitest
```

### Test Structure

```typescript
import { render, screen } from '@testing-library/svelte';
import { describe, it, expect } from 'vitest';
import YourComponent from './YourComponent.svelte';

describe('YourComponent', () => {
  it('should render correctly', () => {
    render(YourComponent, { props: { /* test props */ } });
    expect(screen.getByText('expected text')).toBeInTheDocument();
  });
});
```

## Commit Guidelines

### Commit Message Format

Use conventional commits format:

```
type(scope): description

body (optional)

footer (optional)
```

### Types

- **feat**: New feature
- **fix**: Bug fix
- **docs**: Documentation changes
- **style**: Code style changes (formatting, etc.)
- **refactor**: Code refactoring
- **test**: Adding or updating tests
- **chore**: Maintenance tasks

### Examples

```bash
feat(blog): add pagination to blog listing
fix(admin): resolve authentication redirect issue
docs: update contributing guidelines
test(components): add tests for Timeline component
```

## Pull Request Process

### Before Submitting

1. **Run the full test suite:**
   ```bash
   pnpm test
   ```

2. **Check code formatting:**
   ```bash
   pnpm format:check
   ```

3. **Verify type checking:**
   ```bash
   pnpm check
   ```

4. **Test the build:**
   ```bash
   pnpm build
   ```

### PR Requirements

- **Clear description**: Explain what the PR does and why
- **Tests**: Include tests for new functionality
- **Documentation**: Update docs if needed
- **No breaking changes**: Unless discussed and approved
- **Clean commit history**: Squash commits if necessary

### PR Template

```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing
- [ ] Tests pass locally
- [ ] New tests added (if applicable)
- [ ] Manual testing completed

## Checklist
- [ ] Code follows project conventions
- [ ] Self-review completed
- [ ] Documentation updated (if needed)
```

## Bug Reports

### Before Reporting

1. Check existing issues for duplicates
2. Ensure you're using the latest version
3. Test with a clean database if applicable

### Bug Report Template

```markdown
**Bug Description**
Clear description of the bug

**Steps to Reproduce**
1. Step one
2. Step two
3. Step three

**Expected Behavior**
What should happen

**Actual Behavior**
What actually happens

**Environment**
- OS: [e.g., macOS, Windows, Linux]
- Node.js version: [e.g., 18.17.0]
- Browser: [e.g., Chrome, Firefox]

**Additional Context**
Screenshots, logs, or other relevant information
```

## Feature Requests

### Before Requesting

1. Check existing issues and discussions
2. Consider if the feature aligns with project goals
3. Think about implementation complexity

### Feature Request Template

```markdown
**Feature Description**
Clear description of the proposed feature

**Use Case**
Why is this feature needed?

**Proposed Solution**
How do you envision this working?

**Alternatives Considered**
Other approaches you've considered

**Additional Context**
Any other relevant information
```

## Development Tips

### Database Development

- Use `pnpm db:seed` to populate test data
- Reset database with new migrations as needed
- Test both authenticated and unauthenticated scenarios

### Blog Development

- Test with various Markdown content
- Verify XSS protection with DOMPurify
- Ensure pagination works correctly

### Admin Interface

- Test authentication flows
- Verify authorization for admin-only features
- Test form validation and error handling

### Component Development

- Test components in isolation
- Ensure accessibility (ARIA labels, keyboard navigation)
- Test responsive behavior across screen sizes

## Questions and Support

If you have questions about contributing:

1. Check existing documentation
2. Search through existing issues
3. Create a new issue with the "question" label

Thank you for contributing to this project!