#!/usr/bin/env bash
# Import website content into Sanity production (project xwgymvao).
# Run from web/: ./scripts/import-seeds.sh
set -euo pipefail
cd "$(dirname "$0")/.."
DATASET="${1:-production}"

echo "→ about + team"
npx sanity dataset import sanity/seed/about.ndjson "$DATASET"

echo "→ case studies (phase 1, no productType)"
grep -v '"productType"' sanity/seed/case-studies.ndjson > /tmp/case-studies-phase1.ndjson
npx sanity dataset import /tmp/case-studies-phase1.ndjson "$DATASET" --replace

echo "→ products"
npx sanity dataset import sanity/seed/products.ndjson "$DATASET"

echo "→ case studies (phase 2, with productType)"
npx sanity dataset import sanity/seed/case-studies.ndjson "$DATASET" --replace

echo "→ journal posts"
npx sanity dataset import sanity/seed/posts.ndjson "$DATASET"

echo "→ site settings"
npx sanity dataset import sanity/seed/site-settings.ndjson "$DATASET"

echo "Done. Open /studio to review."
