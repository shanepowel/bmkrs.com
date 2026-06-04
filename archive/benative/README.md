# BeNative

**Discover Your World, One Pin at a Time**

A hyper-local discovery platform combining live deals, events, and place discovery with social features, AI-powered recommendations, AR exploration, and gamification.

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Mobile | React Native 0.76+ / Expo SDK 52 |
| Navigation | Expo Router v4 (file-based) |
| State | Zustand + TanStack Query v5 |
| Styling | NativeWind (Tailwind for RN) |
| Backend | Supabase (PostgreSQL + PostGIS + Auth + Realtime + Storage) |
| API | Fastify v5 / TypeScript |
| AI | OpenAI GPT-4o + pgvector |
| Maps | Google Maps (react-native-maps) |
| Chat | Supabase Realtime + Gifted Chat |

## Project Structure

```
benative/
├── apps/
│   ├── mobile/          # React Native Expo app
│   └── api/             # Fastify API server
├── packages/
│   └── shared/          # Shared types, Zod schemas, constants
├── supabase/
│   └── migrations/      # Database migrations
├── turbo.json
└── package.json
```

## Getting Started

### Prerequisites

- Node.js 20+
- npm 10+
- Expo CLI (`npx expo`)
- Supabase CLI (`npx supabase`)

### 1. Install

```bash
cd benative
npm install --legacy-peer-deps
```

(Use `--legacy-peer-deps` if you hit React 18/19 peer dependency conflicts with the testing stack.)

### 2. Set Up Supabase

**Option A – Use your existing Supabase project (upload migrations):**

```bash
# One-time: log in (opens browser)
npx supabase login

# One-time: link this repo to your project (use your project ref from Dashboard → Settings → General)
npx supabase link --project-ref YOUR_PROJECT_REF

# Push the BeNative schema (PostGIS, pgvector, tables, RLS, functions)
npm run db:migrate
```

**Option B – Local Supabase only:**

```bash
npx supabase init
npx supabase start
npm run db:migrate
npx supabase status
```

### 3. Configure Environment

Update `apps/mobile/app.json` with your Supabase URL and anon key under `extra`, and add your Google Maps API key for iOS/Android. Add `icon.png`, `splash.png`, and `adaptive-icon.png` in `apps/mobile/src/assets/` for app icon and splash (or Expo will warn at build).

### 4. Run the App

```bash
cd apps/mobile
npx expo start
```

Press `i` for iOS simulator or `a` for Android emulator.

### 5. Run the API (optional)

```bash
cd apps/api
npm run dev
```

## Key Commands

```bash
npm run dev              # Start all apps
npm run db:migrate       # Push migrations
npm run db:seed          # Seed development data
npm run lint             # Lint all packages
npm run type-check       # TypeScript check
```

## Licence

Proprietary — Amplified Ltd
