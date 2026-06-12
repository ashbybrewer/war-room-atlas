// build/build.mjs — convert a Claude artifact (.jsx) into one self-contained HTML file.
//
//   usage:  node build/build.mjs src/the-map-table.jsx [--tailwind]
//   output: works/the-map-table.html  (everything inlined except Google Fonts)
//
// --tailwind injects the Tailwind Play CDN for artifacts that use utility classes.

import { build } from "esbuild";
import { readFileSync, writeFileSync, mkdirSync, existsSync } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, "..");

const args = process.argv.slice(2);
const useTailwind = args.includes("--tailwind");
const file = args.find((a) => !a.startsWith("--"));

if (!file) {
  console.error("usage: node build/build.mjs <src/file.jsx> [--tailwind]");
  process.exit(1);
}

const srcPath = path.resolve(file);
if (!existsSync(srcPath)) {
  console.error(`not found: ${srcPath}`);
  process.exit(1);
}

const slug = path
  .basename(srcPath)
  .replace(/\.(jsx|tsx|js|ts)$/, "")
  .toLowerCase()
  .replace(/[^a-z0-9]+/g, "-")
  .replace(/^-|-$/g, "");

// Entry shim: mount the artifact's default export.
const entry = `
import React from "react";
import { createRoot } from "react-dom/client";
import App from ${JSON.stringify(srcPath)};
createRoot(document.getElementById("root")).render(React.createElement(App));
`;

const result = await build({
  stdin: { contents: entry, resolveDir: root, loader: "jsx", sourcefile: "entry.jsx" },
  bundle: true,
  minify: true,
  format: "iife",
  jsx: "automatic",
  loader: { ".js": "jsx" },
  define: { "process.env.NODE_ENV": '"production"' },
  nodePaths: [path.join(root, "node_modules")],
  logLevel: "warning",
  write: false,
});

const js = result.outputFiles[0].text;
// Escape any "</script>" sequences inside the bundle so the inline tag survives.
const safeJs = js.replace(/<\/script>/gi, "<\\/script>");

const template = readFileSync(path.join(here, "template.html"), "utf8");
const title = slug
  .split("-")
  .map((w) => w[0].toUpperCase() + w.slice(1))
  .join(" ");

const html = template
  .replace("<!--TITLE-->", () => title)
  .replace("<!--TAILWIND-->", () =>
    useTailwind ? '<script src="https://cdn.tailwindcss.com"></script>' : ""
  )
  .replace("/*BUNDLE*/", () => safeJs);

mkdirSync(path.join(root, "works"), { recursive: true });
const outPath = path.join(root, "works", `${slug}.html`);
writeFileSync(outPath, html);

const kb = (Buffer.byteLength(html) / 1024).toFixed(0);
console.log(`built works/${slug}.html  (${kb} KB, self-contained)`);
