const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

const webRoot = path.join(__dirname, "..");
const publicRoot = path.join(webRoot, "public");
const brandDir = path.join(publicRoot, "brand");

const iconDarkPng = path.join(brandDir, "bmkrs-icon-dark.png");
const iconLightPng = path.join(brandDir, "bmkrs-icon-light.png");
const iconDarkSvg = path.join(brandDir, "bmkrs-icon-dark.svg");
const avatarSvg = path.join(brandDir, "bmkrs-avatar-512.svg");

function resvg(input, output, width) {
  execSync(
    `npx --yes @resvg/resvg-js-cli "${input}" "${output}" --fit-width ${width}`,
    { stdio: "ignore", cwd: webRoot }
  );
}

function resizePng(input, output, size) {
  execSync(`sips -z ${size} ${size} "${input}" --out "${output}"`, {
    stdio: "ignore",
  });
}

fs.mkdirSync(path.join(publicRoot, "images"), { recursive: true });

const icon32 = path.join(publicRoot, "icon.png");
const iconLight32 = path.join(publicRoot, "icon-light.png");
const faviconIco = path.join(publicRoot, "favicon.ico");
const appleIcon = path.join(publicRoot, "apple-icon.png");

if (fs.existsSync(iconDarkPng) && fs.existsSync(iconLightPng)) {
  resizePng(iconDarkPng, icon32, 32);
  resizePng(iconLightPng, iconLight32, 32);
  resizePng(iconDarkPng, appleIcon, 180);
  fs.copyFileSync(icon32, faviconIco);
  console.log("Favicons generated from brand PNG sources (icon-dark + icon-light).");
} else if (fs.existsSync(iconDarkSvg)) {
  resvg(iconDarkSvg, icon32, 32);
  resvg(iconDarkSvg, appleIcon, 180);
  fs.copyFileSync(icon32, faviconIco);
  console.log("Favicons generated from icon-dark SVG (add bmkrs-icon-dark.png for production favicons).");
} else {
  console.log("No icon sources found; skipping favicon generation.");
}

if (fs.existsSync(avatarSvg)) {
  resvg(avatarSvg, path.join(publicRoot, "images", "bmkrs-avatar-512.png"), 512);
  resvg(avatarSvg, path.join(publicRoot, "images", "bmkrs-avatar-1024.png"), 1024);
}
