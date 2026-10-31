# Blessings from Gods Calculator

A calculator for the Blessings from Gods Divinity Stone shop in Torchlight: Infinite (SS14 Tartarus).

Built with Vite + React + TypeScript and hosted on GitHub Pages.

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Deploy

Pushing to `main` runs `.github/workflows/deploy.yml`, which builds the site and publishes it to GitHub Pages.
One-time setup: in the repository, go to **Settings → Pages** and set **Source** to **GitHub Actions**.

## Data

Shop items and weights live in `src/data/shopItems.ts`, taken from [TLIDB](https://tlidb.com/en/Blessings_from_Gods) (beta data).
