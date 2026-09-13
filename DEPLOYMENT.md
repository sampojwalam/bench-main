# Firebase Hosting

This marketing site is a static Next.js export. Firebase Hosting serves pre-rendered HTML and assets from its CDN. React interactions (navigation, FAQs, QR dialogs and the exercise directory) still run in the browser. No Cloud Run instance, App Hosting backend, server-side rendering or image-optimization server is required.

## Targets

- Firebase project: `bench-331ff`
- Dedicated Hosting site: `bench-gym-log-main`
- Live Firebase URL: https://bench-gym-log-main.web.app (deployed September 12, 2026; indexing allowed)
- Prelaunch preview: https://bench-gym-log-main--prelaunch-az00n9hb.web.app
- Preview expiry: October 12, 2026; redeploy to renew.
- Existing app Hosting sites and the `bench-web` App Hosting backend are separate and must not be overwritten.
- No custom domain or DNS changes have been made. WordPress remains live.

## Build and preview

Use Node.js 22 and the Firebase CLI authenticated to the project.

```sh
npm ci
npm run build
npm start
```

The build creates `out/`. The Hosting emulator serves it on port 3102. `npm run dev` is still available for development. Next.js requires Node.js 20.9 or newer.

```sh
npm run deploy:preview
```

This generates the preview configuration and publishes the `prelaunch` channel. Preview responses are `noindex` (Firebase also enforces this on preview channels). Canonical URLs remain on `https://benchgymlog.com`. Do not submit preview URLs to search engines.

## Production, after preview approval

```sh
npm run deploy:hosting
```

This publishes to the dedicated site's live channel. The live configuration does not add `noindex`. It does not change DNS. Add and verify `benchgymlog.com` and the desired `www` redirect in Firebase Hosting, then use Firebase's exact DNS instructions when ready. Preserve email-related DNS records and keep a WordPress backup/rollback path. Confirm TLS, www behavior, redirects, sitemap, social image and indexing headers after cutover.

## Assets and performance

- `npm run images` generates content-hashed responsive WebP sizes using Sharp at build time. It runs automatically for builds and before development.
- Generated images and manifests are ignored by Git. Source assets stay in `public/screenshots` and `public/icons`.
- Add new Next Image source assets to those directories. The custom loader fails on an unregistered image instead of silently requesting a runtime optimizer.
- Fonts and the Material Symbols subset are self-hosted. When adding a new Material icon, run `python3 scripts/prepare-fonts.py`, review the updated font assets, then rebuild. This updater needs network access; ordinary builds do not fetch fonts.
- Hashed Next assets and generated images receive one-year immutable caching. Replaceable social images and exercise thumbnails use one-day caching.
- Unused drafts and duplicate assets were moved to local ignored `docs/asset-archive`; they are not deployed.

## Routing and checks

`config/legacy-redirects.json` is the shared migration map. Next uses it in development; `scripts/prepare-hosting.mjs` generates permanent Firebase redirects (including trailing-slash variants). Keep this map as the source of truth. There is no SPA catch-all rewrite: unknown pages correctly return 404.

Before deploying: run `npm run build`, `npm run check`, `npm audit`, and `git diff --check`. Verify changed pages and interactions in the Hosting emulator. After deploying, verify HTTP status, redirect destinations, metadata, image requests and preview indexing headers. Run mobile and desktop PageSpeed checks on the deployed URL; repeat on the custom domain after cutover.
