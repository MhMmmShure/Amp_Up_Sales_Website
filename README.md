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

## Brand
Colors come from the logo: navy `#213C4E`, slate `#536C7C`, steel `#7B949C` (tokens at the top of `src/assets/css/style.css`).
Logos: `src/assets/img/logo.png` (light backgrounds) and `logo-light.png` (dark backgrounds).

## Images
- **Brand graphics** (home hero, page banners, services, industries) are drawn in SVG by `art()` in `src/lib.mjs`, using the logo chevrons and palette. The home hero dashboard is HTML/CSS in `src/pages/home.mjs`.
- **Photos** (`photo-2…9.jpg`, real stock supplied by the client) appear only in a few About / Work With Us / Home split sections.
- **Insight graphics** are `graphic-0…10.jpg`.
- Which slot shows what is set in the `IMG` map in `src/lib.mjs`: `"art:<icon>:<layout>"` renders a brand graphic, anything else is a file in `src/assets/img/`.
- No AI-generated photos are used on the site.
