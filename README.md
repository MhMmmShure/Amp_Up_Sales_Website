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
Photos live in `src/assets/img/photo-1.jpg` … `photo-9.jpg`. Which photo appears where is set in the `IMG` map in `src/lib.mjs`:
change a mapping to swap a photo, or add a new file and point a slot at it.
