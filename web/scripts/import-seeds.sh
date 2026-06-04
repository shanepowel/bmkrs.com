#!/usr/bin/env bash
# Import website content into Sanity (project xwgymvao).
# Run from web/: ./scripts/import-seeds.sh [dataset]
# Uses --replace so re-runs overwrite seed documents with the same _id.
set -euo pipefail
cd "$(dirname "$0")/.."
DATASET="${1:-production}"
REPLACE=(--replace)

echo "→ about + team"
npx sanity dataset import sanity/seed/about.ndjson "$DATASET" "${REPLACE[@]}"

echo "→ case studies (phase 1, no productType)"
grep -v '"productType"' sanity/seed/case-studies.ndjson > /tmp/case-studies-phase1.ndjson
npx sanity dataset import /tmp/case-studies-phase1.ndjson "$DATASET" "${REPLACE[@]}"

echo "→ products"
npx sanity dataset import sanity/seed/products.ndjson "$DATASET" "${REPLACE[@]}"

echo "→ disciplines"
npx sanity dataset import sanity/seed/disciplines.ndjson "$DATASET" "${REPLACE[@]}"

echo "→ case studies (phase 2, with productType)"
npx sanity dataset import sanity/seed/case-studies.ndjson "$DATASET" "${REPLACE[@]}"

echo "→ journal posts"
npx sanity dataset import sanity/seed/posts.ndjson "$DATASET" "${REPLACE[@]}"

echo "→ site settings"
npx sanity dataset import sanity/seed/site-settings.ndjson "$DATASET" "${REPLACE[@]}"

echo "Done. Open /studio to review."
