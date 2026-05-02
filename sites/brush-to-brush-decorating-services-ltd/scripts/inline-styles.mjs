import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const siteDir = path.resolve(__dirname, "..");
const cssPath = path.join(siteDir, "css", "styles.css");
let css = fs.readFileSync(cssPath, "utf8");

if (css.includes("</style>")) {
  throw new Error("styles.css must not contain </style>");
}

const banner =
  "/* NOTE: Inlined into *.html as <style id=\"site-styles\"> for mobile perf (no blocking CSS request). After editing this file, run: node scripts/inline-styles.mjs */\n";

if (!css.startsWith("/* NOTE: Inlined into")) {
  css = banner + css;
  fs.writeFileSync(cssPath, css);
}

const styleBlock = `    <style id="site-styles">
${css}
    </style>
    <noscript><link rel="stylesheet" href="css/styles.css" /></noscript>`;

const files = ["index.html", "about.html", "gallery.html", "services.html", "contact.html"];

for (const f of files) {
  const fp = path.join(siteDir, f);
  let html = fs.readFileSync(fp, "utf8");

  if (html.includes('<style id="site-styles">')) {
    html = html.replace(
      /\s*<style id="site-styles">[\s\S]*?<\/style>\s*<noscript><link rel="stylesheet" href="css\/styles\.css" \/><\/noscript>/,
      "\n" + styleBlock
    );
  } else {
    const re = /\s*<link rel="stylesheet" href="css\/styles\.css" \/>/;
    if (!re.test(html)) {
      throw new Error(`Could not find styles.css link in ${f}`);
    }
    html = html.replace(re, "\n" + styleBlock);
  }

  fs.writeFileSync(fp, html);
  console.log("OK", f);
}
