# EdEquity AI

A culturally-adaptive K-12 learning platform for underserved students in Appalachia, the Mississippi Delta, and Tribal lands.

## Overview

EdEquity AI delivers personalized education through **NAANO**, an AI tutor that adapts content to each student's cultural context and learning level. The platform serves three distinct regions — Appalachia (NC, KY), the Delta (MS, AR), and Tribal communities (OK, AZ) — with curriculum that reflects local geography, traditions, and lived experiences.

**330 K-12 modules** span Math and ELA across grades K-12, with region-specific cultural variants embedded through RAG-powered retrieval.

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 14 (App Router, TypeScript) |
| Database | Supabase PostgreSQL + pgvector + Row-Level Security |
| Cache | Upstash Redis |
| AI | OpenAI GPT-4o-mini (tutor), GPT-4o (assessments), text-embedding-3-small (RAG) |
| Voice | ElevenLabs v3 TTS + Scribe v2 STT |
| State | Zustand (client), cookies (auth) |
| UI | Custom "Clay" design system (Claymorphism) + Radix UI |
| Testing | Vitest + Testing Library + Playwright |

## Features

- **AI Tutor (NAANO)** — streaming agentic tutor with function-calling tools, 3 regional personas, and profanity filtering
- **Cultural Adaptation** — region-specific system prompts, curriculum chunks, character names, and voice dialect accommodation
- **Offline Mode** — IndexedDB storage, background sync engine with conflict resolution, download up to 5 modules
- **Adaptive Difficulty** — rolling 7-day mastery tracking with automatic advance/review triggers
- **Teacher Dashboard** — class roster, at-risk/on-track/excelling status, module assignment, CSV export
- **Parent Portal** — read-only view, weekly summaries, achievement showcase
- **COPPA Compliance** — parent consent flow for under-13 students
- **Security** — CSP, HSTS, RLS, rate limiting, prompt injection protection, audit logging

## Getting Started

### Prerequisites

- Node.js 18+
- npm
- Supabase project (with pgvector extension enabled)
- OpenAI API key
- ElevenLabs API key
- Upstash Redis instance

### Setup

1. Clone the repository:
   ```bash
   git clone <repo-url>
   cd edequityai
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure environment variables:
   ```bash
   cp .env.local.example .env.local
   ```
   Fill in the values in `.env.local` — see [Environment Variables](#environment-variables) below.

4. Run database migrations:
   ```bash
   npx supabase db push
   ```

5. Seed the curriculum (K-5 modules + embeddings):
   ```bash
   npx tsx scripts/seed-modules.ts
   ```

6. Start the dev server:
   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start Next.js dev server on :3000 |
| `npm run build` | Production build |
| `npm run lint` | ESLint |
| `npx vitest run` | Run all tests (223 tests across 29 files) |
| `npx vitest run tests/unit/` | Unit tests only |
| `npx vitest run tests/api/` | API tests only |
| `npx vitest run tests/ingestion/` | Ingestion tests only |
| `npx tsc --noEmit` | Type-check without emitting |
| `npx playwright test` | E2E tests (requires dev server running) |
| `npx tsx scripts/seed-modules.ts` | Seed K-5 curriculum |

## Project Structure

```
src/
  app/          # Next.js App Router (pages, layouts, API routes)
  components/   # React components (Clay design system)
  hooks/        # Custom React hooks
  lib/          # Core logic (AI, auth, ingestion, supabase, offline)
  middleware.ts # JWT refresh + route protection
  styles/       # Global styles + Tailwind
  types/        # TypeScript type definitions
tests/
  unit/         # Unit tests
  api/          # API route tests
  ingestion/    # Curriculum ingestion tests
  components/   # Component tests
  auth/         # Auth flow tests
  e2e/          # Playwright E2E tests
```

## Environment Variables

Copy `.env.local.example` to `.env.local` and fill in:

| Variable | Description |
|----------|-------------|
| `OPENAI_API_KEY` | OpenAI API key (LLM + embeddings) |
| `ELEVENLABS_API_KEY` | ElevenLabs API key (TTS + STT) |
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase project URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase anonymous key |
| `SUPABASE_SERVICE_ROLE_KEY` | Supabase service role key |
| `UPSTASH_REDIS_REST_URL` | Upstash Redis REST URL |
| `UPSTASH_REDIS_REST_TOKEN` | Upstash Redis REST token |
| `NEXT_PUBLIC_APP_URL` | App URL (default: `http://localhost:3000`) |

## Testing

```bash
# Run the full test suite
npx vitest run

# Run with coverage
npm run test:coverage

# Run E2E tests (start dev server first)
npm run dev &
npx playwright test
```

## License

All rights reserved.
