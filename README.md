# BlockBond

The BlockBond agency website: Web3 growth, media and marketing in Vietnam.

Built with HTML, CSS and JavaScript. No dependency installation or build step is required.

## Files

- `dist/index.html` — page content, team profiles and social links
- `dist/style.css` — responsive layout, animation and visual styles
- `dist/app.js` — service dialogs, downloadable briefs and mouse effects
- `dist/assets/` — original brand artwork, partner logos and team photographs
- `vercel.json` — Vercel static hosting configuration

## Local preview

Run from the repository root:

```sh
python3 -m http.server 3000 --directory dist
```

Open http://localhost:3000.

## Deploy on Vercel

Import this GitHub repository into Vercel. Use the repository root as the Root Directory. The framework is **Other**, the Output Directory is **dist**, and no build or install command is needed. The repository configuration sets the output directory automatically.

Once linked, pushes to `main` can trigger production deployments through Vercel's Git integration.

## Editing team profiles

Update names, roles, biography text and X URLs in `dist/index.html`. LinkedIn icons currently have no URLs and are disabled. Replace the relevant disabled button with an anchor when a profile URL is supplied.

## Project brief

The form generates a downloadable text file in the visitor's browser. It does not send submissions to an inbox or store them on a server.

## Assets

Team photos and the BlockBond logo were supplied by the site owner. Partner logo sources are recorded in `PARTNER-LOGO-SOURCES.md`. Third-party names and logos belong to their respective owners.
