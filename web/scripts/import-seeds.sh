#!/usr/bin/env bash
# Import website content into Sanity (project xwgymvao).
# Run from web/: ./scripts/import-seeds.sh [dataset]
# Uses --replace so re-runs overwrite seed documents with the same _id.
set -euo pipefail
cd "$(dirname "$0")/.."
DATASET="${1:-production}"
REPLACE=(--replace)

echo "→ generate seed files from content pack"
node scripts/generate-sanity-seeds.js

LEGACY_IDS_FILE="sanity/seed/legacy-post-ids.json"
if [[ -f "$LEGACY_IDS_FILE" ]]; then
  echo "→ remove legacy journal posts"
  while IFS= read -r doc_id; do
    npx sanity documents delete "$doc_id" --dataset "$DATASET" --yes 2>/dev/null || true
  done < <(node -e "JSON.parse(require('fs').readFileSync('$LEGACY_IDS_FILE','utf8')).forEach((id)=>console.log(id))")
  for orphan in teamMember-shane teamMember-network; do
    npx sanity documents delete "$orphan" --dataset "$DATASET" --yes 2>/dev/null || true
  done
fi

echo "→ about + team + person"
npx sanity dataset import sanity/seed/about.ndjson "$DATASET" "${REPLACE[@]}"

echo "→ case studies (phase 1, no productType)"
grep -v '"productType"' sanity/seed/case-studies.ndjson > /tmp/case-studies-phase1.ndjson
npx sanity dataset import /tmp/case-studies-phase1.ndjson "$DATASET" "${REPLACE[@]}"

echo "→ products"
npx sanity dataset import sanity/seed/products.ndjson "$DATASET" "${REPLACE[@]}"

echo "→ disciplines"
npx sanity dataset import sanity/seed/disciplines.ndjson "$DATASET" "${REPLACE[@]}"

echo "→ case studies (phase 2, with projectType)"
npx sanity dataset import sanity/seed/case-studies.ndjson "$DATASET" "${REPLACE[@]}"

echo "→ testimonials"
npx sanity dataset import sanity/seed/testimonials.ndjson "$DATASET" "${REPLACE[@]}"

echo "→ journal posts"
npx sanity dataset import sanity/seed/posts.ndjson "$DATASET" "${REPLACE[@]}"

echo "→ now building"
npx sanity dataset import sanity/seed/now-building.ndjson "$DATASET" "${REPLACE[@]}"

echo "→ press kit"
npx sanity dataset import sanity/seed/press-kit.ndjson "$DATASET" "${REPLACE[@]}"

echo "→ network page"
npx sanity dataset import sanity/seed/network.ndjson "$DATASET" "${REPLACE[@]}"

echo "→ site settings"
npx sanity dataset import sanity/seed/site-settings.ndjson "$DATASET" "${REPLACE[@]}"

echo "Done. Open /studio to review."
