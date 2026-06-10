const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

const webRoot = path.join(__dirname, "..");
const publicRoot = path.join(webRoot, "public");
const brandDir = path.join(publicRoot, "brand");

const iconSvg = path.join(brandDir, "bmkrs-icon-dark.svg");
const avatarSvg = path.join(brandDir, "bmkrs-avatar-512.svg");

if (!fs.existsSync(iconSvg) || !fs.existsSync(avatarSvg)) {
  console.log("Brand SVGs not found; skipping icon generation.");
  process.exit(0);
}

function resvg(input, output, width) {
  execSync(
    `npx --yes @resvg/resvg-js-cli "${input}" "${output}" --fit-width ${width}`,
    { stdio: "ignore", cwd: webRoot }
  );
}

fs.mkdirSync(path.join(publicRoot, "images"), { recursive: true });

resvg(iconSvg, path.join(publicRoot, "icon.png"), 32);
resvg(iconSvg, path.join(publicRoot, "apple-icon.png"), 180);
resvg(avatarSvg, path.join(publicRoot, "images", "bmkrs-avatar-512.png"), 512);
resvg(avatarSvg, path.join(publicRoot, "images", "bmkrs-avatar-1024.png"), 1024);

console.log("Brand icons generated from SVG sources.");
