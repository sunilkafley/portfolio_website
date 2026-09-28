# Portfolio Relaunch Plan

Baseline date: 2026-09-25

## Starting point

The `main` branch now matches commit `16e69f2`, which is the version deployed at `www.sunilkafley.com`. The earlier local refactor remains recoverable on the local branch `archive/refactor-2026-09-25` and is not part of this fresh baseline.

The restored project passes both `npm run lint` and `npm run build`.

## Live quality baseline

The Lighthouse mobile audit is saved as `docs/lighthouse-live-baseline.html`.

| Metric | Result |
| --- | ---: |
| Performance | 70 |
| Accessibility | 96 |
| Best practices | 96 |
| SEO | 100 |
| First Contentful Paint | 3.0 s |
| Largest Contentful Paint | 4.9 s |
| Total Blocking Time | 280 ms |
| Total payload | 1,946 KiB |

## Required changes

### Priority 1 — Repair trust-breaking issues

- Remove or replace the missing `/cv.pdf` download until a verified CV is supplied.
- Replace project links that currently point to the GitHub homepage with the correct repository, live-demo, or case-study destination.
- Remove the missing `/noise.svg` request that causes a production console error.
- Correct the availability badge contrast failure.
- Confirm that every screenshot belongs to the project it describes.

These are first because they affect whether a recruiter can trust and use the portfolio.

### Priority 2 — Improve loading performance

- Create properly sized WebP or AVIF variants for the hero portrait and project screenshots.
- Add responsive image sources, intrinsic dimensions, and appropriate eager or lazy loading.
- Self-host or replace the render-blocking Google Fonts request.
- Reduce animation-library usage where CSS or immediate rendering is sufficient.
- Re-run Lighthouse after each meaningful performance change.

The current audit estimates about 1.55 MiB of image-delivery savings and identifies the portrait as the Largest Contentful Paint element.

### Priority 3 — Strengthen content

- Replace broad project descriptions with the problem, personal contribution, engineering decisions, and result.
- Remove unsupported metrics such as project counts unless they can be verified.
- Clarify the target role and make the primary call to action obvious.
- Add the CV only after the final PDF is available and checked for private information.

### Priority 4 — Simplify maintenance

- Break the large Header and Hero components into focused pieces.
- Move editable copy, navigation, projects, and links into typed content modules.
- Remove unused starter assets and replace the Vite starter documentation.
- Make theme, scrolling, and animation behavior resilient to reduced-motion and storage restrictions.

### Priority 5 — Release safeguards

- Use feature branches and pull requests instead of editing `main` directly.
- Require the GitHub Actions `Lint and build` check before merging.
- Review the Vercel preview URL before each merge.
- Keep `main` as Vercel's production branch for `sunilkafley.com`.
- Run a final production Lighthouse and link check after each release.

## CI/CD in plain language

CI and CD are two different jobs:

- **Continuous Integration (CI)** is the inspector. GitHub Actions checks that the project installs, lints, and builds successfully.
- **Continuous Deployment (CD)** is the delivery driver. Vercel already watches the GitHub repository, creates previews for branches, and publishes `main` to the production domain.

The repository workflow is therefore:

```text
write code → push branch → automated checks + preview → review → merge → production
```

## Dashboard settings to confirm

### GitHub

Create a branch ruleset for `main` that:

- requires a pull request before merging;
- requires the `Lint and build` status check;
- prevents accidental direct pushes to production.

### Vercel

In the portfolio project's Git settings, confirm:

- the connected repository is `sunilkafley/portfolio_website`;
- the production branch is `main`;
- preview deployments are enabled for other branches;
- `www.sunilkafley.com` is the primary production domain and the apex domain redirects consistently.

No Vercel token is needed in GitHub because the native Git integration is already active.

## Suggested implementation order

1. Fix broken links, missing assets, console errors, and contrast.
2. Optimize the portrait and project images.
3. Rewrite project evidence and calls to action.
4. Refactor large components only where it makes later edits safer.
5. Add the verified CV.
6. Run final accessibility, performance, responsive, and production checks.
