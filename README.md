# Sunil Kafley Portfolio

Personal portfolio for Sunil Kafley, built with React, TypeScript, Tailwind CSS, and Vite.

Live site: [sunilkafley.com](https://www.sunilkafley.com/)

## Local development

Use Node.js 22 and install the exact dependency versions recorded in `package-lock.json`:

```bash
npm ci
npm run dev
```

Vite prints the local preview address in the terminal.

## Available scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the local development server |
| `npm run lint` | Check the source with ESLint |
| `npm run build` | Type-check and create the production build |
| `npm run preview` | Serve the production build locally |

## Delivery workflow

Think of the release process as a workshop and delivery route:

- A feature branch is the workbench where changes are made safely.
- GitHub Actions is the inspector that installs dependencies, runs lint, and builds the site.
- Vercel creates a temporary preview for branch and pull-request changes.
- Merging an approved pull request into `main` tells Vercel to publish the new production version to `sunilkafley.com`.

```text
feature branch
      ↓
GitHub Actions checks + Vercel preview
      ↓
pull-request review
      ↓
merge into main
      ↓
Vercel production deployment
      ↓
sunilkafley.com
```

The repository's Vercel Git integration is already active. The workflow in `.github/workflows/ci.yml` adds the independent GitHub quality check.

## Recommended contribution routine

1. Create a branch from the latest `main`.
2. Make one focused change.
3. Run `npm run lint` and `npm run build` locally.
4. Push the branch and review its Vercel preview.
5. Open a pull request and wait for the CI check.
6. Merge only after the preview and check are satisfactory.

## Planning

The current baseline findings and improvement order are documented in [`docs/relaunch-plan.md`](docs/relaunch-plan.md).
