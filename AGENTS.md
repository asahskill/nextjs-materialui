<!-- BEGIN:nextjs-agent-rules -->
# AI Project Knowledge (Canonical)

This repository is a **Next.js App Router** project using **Material UI (MUI)**.
All AI coding assistants should treat this file as the **single source of truth** for project knowledge and implementation guidance.

## 1) Core Product Context

- Product type: boilerplate web app
- Framework: Next.js (App Router)
- UI library: Material UI (MUI)
- Language: TypeScript
- Styling:
  - Global styles: `app/globals.css`
  - Theme configuration: `app/theme.tsx`
- Main app structure:
  - `app/layout.tsx` → root layout
  - `app/page.tsx` → home page
  - `app/theme.tsx` → MUI theme setup

## 2) Critical Next.js Note

This project may use a Next.js version with behavior that differs from older training data.

Before implementing non-trivial changes:
1. Check relevant docs in `node_modules/next/dist/docs/`
2. Follow current App Router conventions
3. Heed deprecations and migration notes

## 3) Development Principles

- Prefer **small, focused, reversible** changes.
- Preserve existing project structure and naming style.
- Avoid introducing new dependencies unless necessary.
- Prefer composition over large rewrites.
- Keep code readable and explicit; avoid clever abstractions unless warranted.

## 4) App Router Conventions

- Use `app/` routes and layout conventions.
- Keep page components default-exported from route files.
- Place shared UI logic/components in appropriate reusable modules when needed.
- Respect server/client boundaries:
  - Add `"use client"` only when client-side interactivity/hooks are required.
  - Avoid accidental clientification of server components.

## 5) Material UI Conventions

- Reuse centralized theme from `app/theme.tsx`.
- Prefer theme tokens (`palette`, `typography`, `spacing`) over hard-coded values.
- Use MUI components first, then custom CSS only when needed.
- Keep styling approach consistent (MUI `sx`, theme overrides, and minimal global CSS).

## 6) Coding Standards

- TypeScript-first: avoid `any` unless unavoidable.
- Keep functions/components single-purpose.
- Add explicit types for public props and return values where useful.
- Handle loading/error/empty states for async UI paths.
- Do not leave commented dead code.

## 7) File-Level Guidance

- `app/layout.tsx`
  - Keep app-wide providers and HTML/body structure clean.
  - Do not add page-specific UI here.

- `app/page.tsx`
  - Keep homepage logic clear and componentized if it grows.

- `app/theme.tsx`
  - Central place for MUI theme extension/customization.
  - Prefer adding design decisions here before ad-hoc page-level styles.

- `app/globals.css`
  - Keep global CSS minimal; avoid conflicting with MUI baseline/theme.

## 8) Safety / Change Rules for AI Tools

- Do not perform broad refactors unless requested.
- Do not rename/move files without clear reason.
- Do not modify build/lint config unless task requires it.
- If uncertain, choose the least destructive implementation.

## 9) Validation Checklist (Before Finalizing)

- Project builds/runs without introducing config regressions.
- No obvious TypeScript or lint issues in touched code.
- UI remains consistent with MUI theme usage.
- Changes align with App Router patterns.

## 10) Useful Commands

- Install deps: `npm install`
- Dev server: `npm run dev`
- Build: `npm run build`
- Start prod: `npm run start`
- Lint: `npm run lint`

## 11) Tool Adapters

Tool-specific instruction files (Copilot/Claude/Gemini/Cursor/Codex/BlackboxAI) should remain thin and reference this file to avoid duplicated and drifting instructions.

<!-- END:nextjs-agent-rules -->
