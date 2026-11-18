# Amp Up Sales Website

Static site for [ampupsales.com](https://www.ampupsales.com), deployed on Netlify.

## How it works
- `src/lib.mjs`: site-wide data (contact info, menus, services, industries), icons, shared components, header/footer layout
- `src/pages/*.mjs`: page content
- `src/assets/`: CSS, JS and images
- `src/static/`: files copied to the site root (`_redirects`)
- `node src/build.mjs` builds everything into `dist/` (no dependencies)

## Netlify settings
Handled by `netlify.toml`: build command `node src/build.mjs`, publish directory `dist`.
The contact form uses Netlify Forms (form name `contact`).

## Images
Drop photos into `src/assets/img/` with these file names. Until a file exists, a branded placeholder shows.

| File | Where it appears |
|---|---|
| `hero.jpg` | Home hero (wide, ~2400×1400) |
| `about.jpg`, `why.jpg` | Home split sections |
| `service-1.jpg` … `service-6.jpg` | Services page, one per service |
| `industry-manufacturing.jpg`, `industry-healthcare.jpg`, `industry-professional-services.jpg`, `industry-saas.jpg`, `industry-education.jpg` | Industry cards and industry page heroes |
| `insight-1.jpg` … `insight-8.jpg` | Insights cards (1–3 also on Home) |
| `page-services.jpg`, `page-industries.jpg`, `page-work-with-us.jpg`, `page-about.jpg`, `page-insights.jpg`, `page-connect.jpg` | Interior page banners |
| `industries-approach.jpg`, `work-with-us.jpg`, `about-team.jpg`, `about-work.jpg` | Interior split sections |
| `og-image.jpg` | Social share image (1200×630) |
