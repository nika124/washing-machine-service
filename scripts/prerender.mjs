import { mkdir, readFile, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { pathToFileURL } from "node:url";
import { seoRoutes } from "../src/data/routes.js";
import { site } from "../src/data/site.js";

const rootDir = process.cwd();
const distDir = path.join(rootDir, "dist");
const serverDir = path.join(rootDir, "dist-ssr");
const templatePath = path.join(distDir, "index.html");
const serverEntryPath = path.join(serverDir, "entry-prerender.js");

const template = await readFile(templatePath, "utf8");
const { render } = await import(pathToFileURL(serverEntryPath).href);

function cleanHead(html) {
  return html
    .replace(/\s*<title[\s\S]*?<\/title>\s*/g, "\n")
    .replace(
      /\s*<meta\b(?=[^>]*(?:name="description"|name="robots"|name="geo\.|name="twitter:|property="og:|property="article:"))[^>]*>\s*/g,
      "\n"
    )
    .replace(/\s*<link\b(?=[^>]*rel="canonical")[^>]*>\s*/g, "\n")
    .replace(/\s*<script\b(?=[^>]*type="application\/ld\+json")[\s\S]*?<\/script>\s*/g, "\n");
}

function injectHead(html, head) {
  const assetTag = "<script";

  if (html.includes(assetTag)) {
    return html.replace(assetTag, `    ${head}\n    ${assetTag}`);
  }

  return html.replace("</head>", `    ${head}\n  </head>`);
}

function outputPathForRoute(route) {
  if (route === "/") {
    return path.join(distDir, "index.html");
  }

  const routeName = route.replace(/^\//, "");
  return path.join(distDir, routeName, "index.html");
}

for (const route of seoRoutes) {
  const { html, head } = render(route);
  const document = injectHead(cleanHead(template), head)
    .replace('<div id="root"></div>', `<div id="root">${html}</div>`);
  const outputPath = outputPathForRoute(route);
  await mkdir(path.dirname(outputPath), { recursive: true });
  await writeFile(outputPath, document, "utf8");
}

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${seoRoutes
  .map((route) => {
    const url = route === "/" ? `${site.url}/` : `${site.url}${route}`;
    return `  <url>
    <loc>${url}</loc>
  </url>`;
  })
  .join("\n")}
</urlset>
`;

await writeFile(path.join(rootDir, "public", "sitemap.xml"), sitemap, "utf8");
await writeFile(path.join(distDir, "sitemap.xml"), sitemap, "utf8");
await rm(serverDir, { recursive: true, force: true });
