const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

const webRoot = path.join(__dirname, "..");
const repoRoot = path.join(webRoot, "..");
const legacyPublic = path.join(repoRoot, "archive", "legacy-public-site", "public_html");
const publicRoot = path.join(webRoot, "public");
const manifestPath = path.join(__dirname, "required-assets.json");

const required = JSON.parse(fs.readFileSync(manifestPath, "utf8"));

function copyFile(relPath) {
  const src = path.join(legacyPublic, relPath);
  const dest = path.join(publicRoot, relPath);

  if (fs.existsSync(dest)) {
    return { relPath, ok: true, reason: "present in public" };
  }

  if (!fs.existsSync(src)) {
    return { relPath, ok: false, reason: "missing source" };
  }

  fs.mkdirSync(path.dirname(dest), { recursive: true });
  fs.copyFileSync(src, dest);
  return { relPath, ok: true, reason: "copied from archive" };
}

let copied = 0;
const missing = [];

for (const relPath of required) {
  const result = copyFile(relPath);
  if (result.ok) {
    copied += 1;
  } else {
    missing.push(relPath);
  }
}

function pruneDir(dirRel, allowedRelPaths) {
  const dir = path.join(publicRoot, dirRel);
  if (!fs.existsSync(dir)) return;

  const prefix = `${dirRel}/`;
  const allowedHere = allowedRelPaths.filter((p) => p.startsWith(prefix));

  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const childRel = `${dirRel}/${entry.name}`;
    const full = path.join(publicRoot, childRel);

    if (entry.isDirectory()) {
      const keepSubtree = allowedHere.some(
        (p) => p === childRel || p.startsWith(`${childRel}/`)
      );
      if (keepSubtree) {
        pruneDir(childRel, allowedRelPaths);
      } else {
        fs.rmSync(full, { recursive: true, force: true });
      }
      continue;
    }

    if (!allowedRelPaths.includes(childRel)) {
      fs.unlinkSync(full);
    }
  }
}

pruneDir("images", required);
pruneDir("work/images", required);

const faviconSrc = path.join(legacyPublic, "favicon.ico");
const faviconDest = path.join(publicRoot, "favicon.ico");
if (fs.existsSync(faviconSrc)) {
  fs.copyFileSync(faviconSrc, faviconDest);
  copied += 1;
}

const logoSrc = path.join(publicRoot, "images", "blacklogo.png");
const iconDest = path.join(publicRoot, "icon.png");
const appleDest = path.join(publicRoot, "apple-icon.png");
if (fs.existsSync(logoSrc)) {
  try {
    execSync(`sips -z 32 32 "${logoSrc}" --out "${iconDest}"`, { stdio: "ignore" });
    execSync(`sips -z 180 180 "${logoSrc}" --out "${appleDest}"`, { stdio: "ignore" });
    copied += 2;
  } catch {
    /* sips optional off macOS */
  }
}

if (missing.length > 0) {
  console.error("Asset sync failed — missing from archive and web/public:");
  for (const relPath of missing) {
    console.error(`  ${relPath}`);
  }
  if (process.env.VERCEL || process.env.CI) {
    process.exit(1);
  }
  console.warn("Continuing locally; commit web/public assets or fix archive paths.");
} else {
  const fromArchive = fs.existsSync(legacyPublic);
  console.log(
    `Asset sync complete (${copied} files${fromArchive ? "" : ", using committed web/public"}).`
  );
}
