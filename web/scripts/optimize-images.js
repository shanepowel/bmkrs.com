const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

const webRoot = path.join(__dirname, "..");
const publicRoot = path.join(webRoot, "public");

/** @type {{ src: string; out: string; max: number }[]} */
const targets = [
  { src: "work/images/fdb-2.png", out: "work/images/optimized/fdb-2-hero.jpg", max: 1400 },
  { src: "images/copa-off-the-shore.jpg", out: "images/optimized/copa-hero.jpg", max: 1200 },
  { src: "images/smoothies.png", out: "images/optimized/smoothies-hero.jpg", max: 1200 },
  { src: "images/aboutus_qyrbat.webp", out: "images/optimized/copa-campaign.jpg", max: 1200 },
  { src: "images/carter-instagram.png", out: "images/optimized/carter-hero.jpg", max: 1200 },
  { src: "images/branding-dis.png", out: "images/optimized/branding-dis.jpg", max: 1000 },
  { src: "images/marketing-dis.png", out: "images/optimized/marketing-dis.jpg", max: 1000 },
  { src: "images/intelligent-brands-min.png", out: "images/optimized/intelligent-brands.jpg", max: 1000 },
  { src: "images/Mobile_app_design.jpeg", out: "images/optimized/mobile-app.jpg", max: 1000 },
  { src: "work/images/flipster-fff.png", out: "work/images/optimized/flipster-hero.jpg", max: 1200 },
  { src: "images/trip-of-my-life.png", out: "images/optimized/wanderlust-hero.jpg", max: 1200 },
  { src: "images/business.jpeg", out: "images/optimized/business-strategy.jpg", max: 1000 },
  { src: "images/ecom-dis.png", out: "images/optimized/ecom-growth.jpg", max: 1000 },
  { src: "images/7abd2549110b63f83e49877e1d59adea.jpg", out: "images/optimized/press-feature.jpg", max: 1000 },
];

function hasSips() {
  try {
    execSync("which sips", { stdio: "ignore" });
    return true;
  } catch {
    return false;
  }
}

if (!hasSips()) {
  console.warn("sips not found (macOS) — skip image optimization");
  process.exit(0);
}

let done = 0;
for (const { src, out, max } of targets) {
  const input = path.join(publicRoot, src);
  const output = path.join(publicRoot, out);
  if (!fs.existsSync(input)) {
    console.warn(`Skip missing: ${src}`);
    continue;
  }
  fs.mkdirSync(path.dirname(output), { recursive: true });
  execSync(
    `sips -s format jpeg -s formatOptions 82 -Z ${max} "${input}" --out "${output}"`,
    { stdio: "ignore" }
  );
  done += 1;
}
console.log(`Optimized ${done} images for lighthouse-friendly delivery.`);
