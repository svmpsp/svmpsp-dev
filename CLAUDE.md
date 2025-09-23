# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal website for Sivam Pasupathipillai, built as a single-page application using SvelteKit. The site showcases professional portfolio information including experience, skills, projects, and contact details.

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

**Run tests:**

```bash
pnpm test
```

## Architecture

### Project Structure

- `src/routes/+page.svelte` - Main page content with all sections (hero, about, experience, projects, contact)
- `src/routes/+layout.svelte` - Global layout and styling
- `src/lib/components/` - Reusable Svelte components (Button, Card, ContactLink, Section, SkillBadge, Stat)
- `src/tests/setup.ts` - Test environment configuration
- `src/tests/jest-dom.d.ts` - TypeScript definitions for Jest DOM matchers

### Tech Stack

- **Framework**: SvelteKit 2.22 with TypeScript
- **Testing**: Vitest 3.2.4 with Testing Library and happy-dom environment
- **Build**: Vite 7.0.4 with SvelteKit plugin
- **Package Manager**: pnpm (npm scripts use `pnpm` commands)

### Testing Setup

- Tests use Vitest with happy-dom environment
- Testing Library for Svelte component testing
- Jest-DOM matchers for enhanced assertions
- Test files follow `*.{test,spec}.{js,ts}` pattern in `src/` directory
- Setup file at `src/tests/setup.ts` configures test environment

### Component Architecture

- Components are located in `src/lib/components/`
- Available components: Button, Card, ContactLink, Section, SkillBadge, Stat
- Components should have corresponding test files (Button.test.ts exists)
- SvelteKit's `$lib` alias available for imports

## Development Notes

- This is a personal portfolio site with a single main page containing multiple sections
- Uses component-scoped CSS styling
- TypeScript configuration supports browser conditions
- Testing setup includes cleanup after each test and extended Jest-DOM matchers
