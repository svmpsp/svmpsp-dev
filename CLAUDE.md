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

**Run tests with UI:**
```bash
pnpm test:ui
```

## Architecture

### Project Structure
- `src/routes/+page.svelte` - Main page content with all sections (hero, about, experience, projects, contact)
- `src/routes/+layout.svelte` - Global layout and styling
- `src/lib/components/` - Reusable Svelte components (currently contains Button component)
- `src/lib/utils.ts` - Utility functions for common operations
- `src/tests/setup.ts` - Test environment configuration

### Tech Stack
- **Framework**: SvelteKit 2.22 with TypeScript
- **Testing**: Vitest with Testing Library and happy-dom environment
- **Build**: Vite 7 with SvelteKit plugin
- **Package Manager**: pnpm

### Testing Setup
- Tests use Vitest with happy-dom environment
- Testing Library for Svelte component testing
- Jest-DOM matchers for enhanced assertions
- Test files follow `*.{test,spec}.{js,ts}` pattern in `src/` directory
- Setup file at `src/tests/setup.ts` configures test environment

### Component Architecture
- Components are located in `src/lib/components/`
- Each component should have corresponding test file
- Utilities in `src/lib/utils.ts` with test coverage
- SvelteKit's `$lib` alias available for imports

## Development Notes

- This is a personal portfolio site with a single main page containing multiple sections
- Uses component-scoped CSS styling
- TypeScript configuration supports browser conditions
- Testing setup includes cleanup after each test and extended Jest-DOM matchers