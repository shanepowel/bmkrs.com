const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..", "..");
const srcImages = path.join(root, "public_html", "images");
const srcWorkImages = path.join(root, "public_html", "work", "images");
const destImages = path.join(__dirname, "..", "public", "images");
const destWorkImages = path.join(__dirname, "..", "public", "work", "images");

function copyDir(src, dest) {
  if (!fs.existsSync(src)) {
    console.warn(`Skip missing: ${src}`);
    return;
  }
  fs.mkdirSync(dest, { recursive: true });
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const s = path.join(src, entry.name);
    const d = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyDir(s, d);
    } else {
      fs.copyFileSync(s, d);
    }
  }
}

let synced = false;
if (fs.existsSync(srcImages)) {
  copyDir(srcImages, destImages);
  synced = true;
}
if (fs.existsSync(srcWorkImages)) {
  copyDir(srcWorkImages, destWorkImages);
  synced = true;
}
if (!synced) {
  console.warn(
    "public_html assets not found — using committed files in web/public if present."
  );
}
console.log("Asset sync step complete");
