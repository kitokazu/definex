# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

DEFINE X is a Next.js 16 marketing website for a Japanese sports and education company with two offerings: DEFINE ACADEMY (English conversation academy) and DEFINE SPORTS. Built with React 19, TypeScript (strict mode), and Tailwind CSS 4.

## Development Priorities

**This is a landing page** - user experience and conversion are critical. When making changes:

- **Mobile Friendly**: Many users will view on mobile devices. Always verify changes work correctly on mobile viewports and test responsive breakpoints (sm, md, lg).
- **Performance**: Page load speed directly impacts conversions. Optimize images, minimize layout shifts, and keep animations smooth.
- **Visual polish**: Landing pages live or die by their presentation. Pay attention to spacing, alignment, and visual hierarchy.

## Development Commands

```bash
npm run dev      # Start dev server (localhost:3000)
npm run build    # Production build
npm start        # Start production server
npm run lint     # Run ESLint
```

No testing framework is currently configured.

## Architecture

### Routing (Next.js App Router)

- `/` - Main landing page (`app/page.tsx`)
- `/home` - Company info page (`app/home/page.tsx`)
- `/academy` - Academy landing page (`app/academy/page.tsx`)

### Component Organization

- `app/components/` - Shared components for main site and landing pages
- `app/academy/components/` - Academy-specific components
- `app/academy/types.ts` - TypeScript interfaces for academy domain objects

### Key Patterns

**Client/Server Split**: Root `layout.tsx` is a Server Component for fonts and metadata. Page components use `"use client"` for interactivity.

**Animation**: `FadeIn.tsx` wrapper uses Intersection Observer for scroll-triggered animations with directional support (up, down, left, right).

**Styling**: Tailwind CSS with custom theme in `globals.css`:

- Brand colors: `#00afcc` (primary cyan), `#0b1120` (brand dark), `#facc15` (accent yellow), `#06c755` (LINE green)
- Custom animations: `fade-in-up`, `marquee`, `pulse-slow`
- Custom utilities: `clip-diagonal`, `text-stroke`, grid patterns

**Fonts**: Noto Sans JP (Japanese), Oswald (display), Montserrat (English) - loaded in `layout.tsx`

**Next.js**: Things specific to the Next.js framework

- Use the Image component and all other Next js components

### Configuration Files

- `tsconfig.json` - TypeScript strict mode, ES2017 target, path aliases (`@/*`)
- `next.config.ts` - Next.js config (currently default)
- `eslint.config.mjs` - ESLint with Next.js core-web-vitals + TypeScript rules
- `postcss.config.mjs` - Tailwind CSS PostCSS plugin

## Language

Default language is Japanese (`<html lang="ja">`). Content supports both Japanese and English.
