# Indian Buildcon — RMC Plant Website

Single-page marketing site for Indian Buildcon's ready-mix concrete plant in
Bari Brahmana, Jammu. Built with Next.js 16 (App Router), Tailwind CSS v4,
Framer Motion, and Lucide icons.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm run start
```

The font (Archivo) is self-hosted from `app/fonts/` via `next/font/local`,
so the build has no external network dependency at build time.

## Deploying to Vercel

1. Push this repo to GitHub.
2. In Vercel, click **Add New → Project**, import the repo, and accept the
   default Next.js build settings (no environment variables required).
3. Deploy. Every push to `main` will trigger a new deployment automatically.

## Editing content

All copy and section structure live in `app/components/`, one file per
section:

| File | Section |
|---|---|
| `Navbar.tsx` | Sticky header, phone CTA |
| `Hero.tsx` | Headline, plant photo, primary CTAs |
| `StatsCounter.tsx` | Animated 24/7, M25, 100%, 5★ counters |
| `Features.tsx` | Why Choose Us — three value props |
| `Process.tsx` | Order-to-pour four-step sequence |
| `Reviews.tsx` | Hardcoded Google reviews |
| `CTABanner.tsx` | Mid-page phone-call banner |
| `ContactLocation.tsx` | Address, hours, embedded map, quote form |
| `Footer.tsx` | Links, contact, copyright |

The plant photo and logo are in `public/images/`. The Google Maps embed in
`ContactLocation.tsx` points at the plant's Plus Code (`JW7M+PJ Sarore`) —
update the query string there if the plant ever relocates.

The quote form in `ContactLocation.tsx` is currently front-end only (it
does not send anywhere yet). Wire its `onSubmit` to an email service
(e.g. Formspree, Resend) or an API route before relying on it for real
leads.
