// Zero-dependency static build: node src/build.mjs  ->  dist/
import { mkdirSync, writeFileSync, readFileSync, cpSync, rmSync, existsSync } from "node:fs";
import { createHash } from "node:crypto";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { layout, SITE } from "./lib.mjs";
import home from "./pages/home.mjs";
import services from "./pages/services.mjs";
import industries from "./pages/industries.mjs";
import company from "./pages/company.mjs";

const root = dirname(fileURLToPath(import.meta.url));
const out = join(root, "..", "dist");
rmSync(out, { recursive: true, force: true });
mkdirSync(out, { recursive: true });

// Cache-busting: version CSS/JS URLs by content hash so browsers always get the latest styles
const ver = (f) => createHash("md5").update(readFileSync(join(root, "assets", f))).digest("hex").slice(0, 10);
const cssV = ver("css/style.css"), jsV = ver("js/main.js");
const stamp = (html) => html.replace('/assets/css/style.css"', `/assets/css/style.css?v=${cssV}"`).replace('/assets/js/main.js"', `/assets/js/main.js?v=${jsV}"`);

const pages = [home, services, ...industries, ...company];
for (const p of pages) {
  const file = p.out ? join(out, p.out) : join(out, p.path, "index.html");
  mkdirSync(dirname(file), { recursive: true });
  writeFileSync(file, stamp(layout(p)));
}

cpSync(join(root, "assets"), join(out, "assets"), { recursive: true });
if (existsSync(join(root, "static"))) cpSync(join(root, "static"), out, { recursive: true });

const today = new Date().toISOString().slice(0, 10);
const urls = pages.filter((p) => !p.out && !p.path.includes("thank-you")).map((p) => `  <url><loc>${SITE.url}${p.path}</loc><lastmod>${today}</lastmod></url>`);
writeFileSync(join(out, "sitemap.xml"), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join("\n")}\n</urlset>\n`);
writeFileSync(join(out, "robots.txt"), `User-agent: *\nAllow: /\n\nSitemap: ${SITE.url}/sitemap.xml\n`);
console.log(`Built ${pages.length} pages -> dist/`);
