# Meals' Hub — Restaurant Website

A Next.js 14 + TypeScript + Tailwind CSS website for Meals' Hub, a
restaurant in Rayfield, Jos, Nigeria. Built mobile-first with a warm,
orange-and-charcoal palette matched to the Meals' Hub brand.

## Sections

- **Hero** — big background image, name, tagline, "View Menu" / "Book Table" CTAs
- **About** — restaurant story
- **Menu** — tabbed Starters / Mains / Drinks, sourced from `data/menu.ts`
- **Gallery** — 6-image grid
- **Contact** — address, phone, hours, embedded Google Map
- **Footer** — social links

## Getting started locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Editing the menu

All menu items live in `data/menu.ts` as plain TypeScript — edit the
`name`, `description`, and `price` fields, or add new items/categories.

## Editing images

Hero, About, and Gallery currently use royalty-free Unsplash placeholder
photos. Swap them out by:
1. Dropping your own images into `public/images/`
2. Updating the `backgroundImage` URLs in `components/Hero.tsx`,
   `components/About.tsx`, and `components/Gallery.tsx` to `/images/yourfile.jpg`

## Deploying to Vercel

1. Push this repo to GitHub (see below)
2. Go to [vercel.com/new](https://vercel.com/new), import the repo
3. Framework preset: **Next.js** (auto-detected) — no extra config needed
4. Click **Deploy**

## Pushing to GitHub

```bash
git init
git add .
git commit -m "Initial commit — Meals' Hub website"
git branch -M main
git remote add origin https://github.com/<your-username>/<repo-name>.git
git push -u origin main
```

## Business info used in this site

- **Name:** Meals' Hub
- **Address:** Shop 2, No. 8 Shincho Road, Rayfield, Jos, Plateau State, Nigeria
- **Phone / WhatsApp:** 0704 462 0378 / +234 704 462 0378
- **Hours:** Open daily
