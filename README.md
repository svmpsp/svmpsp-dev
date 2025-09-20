# Sivam Pasupathipillai - Personal Website

A modern, responsive personal website built with SvelteKit showcasing the professional portfolio of Sivam Pasupathipillai, Senior AI Engineer & Data Scientist.

## Overview

This is a single-page application featuring:

- **Hero Section**: Professional introduction with contact CTAs
- **About**: Background, experience, and career highlights
- **Experience & Skills**: Work history and technical competencies
- **Projects**: Showcase of research and development work
- **Contact**: Professional contact information and links

## Tech Stack

- **Framework**: SvelteKit 2.22
- **Language**: TypeScript
- **Styling**: CSS (component-scoped)
- **Testing**: Vitest 3.2.4 with Testing Library
- **Build Tool**: Vite 7.0.4
- **Package Manager**: pnpm

## Development

Install dependencies:

```sh
pnpm install
```

Start the development server:

```sh
pnpm dev
```

## Building

Create a production build:

```sh
pnpm build
```

Preview the production build:

```sh
pnpm preview
```

## Testing

Run unit tests:

```sh
pnpm test
```

## Project Structure

```
src/
├── lib/
│   └── components/     # Reusable Svelte components (Button, Card, ContactLink, Section, SkillBadge, Stat)
├── routes/
│   ├── +layout.svelte # Global layout
│   └── +page.svelte   # Main page content
└── tests/             # Test setup and utilities
```

## Features

- Fully responsive design
- Modern gradient backgrounds and hover effects
- Accessible component architecture
- Type-safe development with TypeScript
- Comprehensive test coverage
