import { mkdir, readFile, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { pathToFileURL } from "node:url";

const routes = ["/", "/services", "/about", "/contact"];
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
      /\s*<meta\b(?=[^>]*(?:name="description"|property="og:|name="geo\.|property="article:"))[^>]*>\s*/g,
      "\n"
    )
    .replace(/\s*<link\b(?=[^>]*rel="canonical")[^>]*>\s*/g, "\n");
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
    return [path.join(distDir, "index.html")];
  }

  const routeName = route.replace(/^\//, "");

  return [
    path.join(distDir, routeName, "index.html"),
    path.join(distDir, `${routeName}.html`),
  ];
}

for (const route of routes) {
  const { html, head } = render(route);
  const document = injectHead(cleanHead(template), head)
    .replace('<div id="root"></div>', `<div id="root">${html}</div>`);
  const outputPaths = outputPathForRoute(route);

  for (const outputPath of outputPaths) {
    await mkdir(path.dirname(outputPath), { recursive: true });
    await writeFile(outputPath, document, "utf8");
  }
}

await rm(serverDir, { recursive: true, force: true });
