# Sanity revalidation webhook config

Drives on-demand revalidation so publishing content refreshes the live site without a redeploy. Pairs with `web/src/app/api/revalidate/route.ts`.

## 1. Add the secret

In **Vercel** (Project → Settings → Environment Variables) and in your local `.env`:

```
SANITY_REVALIDATE_SECRET=<a long random string>
```

Generate one with: `openssl rand -base64 32`

## 2. Install the helper

```
npm install next-sanity
```

`next-sanity/webhook` provides `parseBody`, which verifies the signature using the secret above.

## 3. Create the webhook in Sanity

Sanity Studio is configured via the management console: **sanity.io/manage → your project → API → Webhooks → Create webhook.**

Set the fields:

- **Name:** `vercel-revalidate`
- **URL:** `https://www.bmkrs.com/api/revalidate`
- **Dataset:** `production`
- **Trigger on:** Create, Update, Delete
- **Filter (GROQ):**
  ```
  _type in ["caseStudy","product","post","teamMember","aboutPage","testimonial","siteSettings"]
  ```
- **Projection (GROQ):** keeps the payload small and gives the route what it needs
  ```
  {_type, "slug": slug.current}
  ```
- **HTTP method:** `POST`
- **API version:** `v2021-03-25` or later
- **Secret:** paste the same `SANITY_REVALIDATE_SECRET` value. Sanity signs each request with it; the route rejects anything that fails the signature check.

## 4. Verify

Publish any document in the Studio. In Vercel → your project → Logs you should see a `200` on `/api/revalidate` with a JSON body listing the revalidated paths, for example:

```json
{ "revalidated": ["/work", "/", "/work/copa"], "now": 1730000000000 }
```

Reload the affected page; the change is live. No deploy required.

## Notes

- The route maps each document type to the pages it affects (see the switch statement). Add cases there if you add new types.
- `siteSettings` uses a cache tag (`settings`) rather than a path, because it feeds the shared layout/footer. Tag the settings fetch in your layout with `{ next: { tags: ['settings'] } }` for this to take effect.
- If you serve the site from the apex and `www`, point the webhook at the canonical host you redirect to.
