# Search Console and measurement plan (post-launch)

## Launch steps (owner)
1. In Vercel (Production only) set `NEXT_PUBLIC_SITE_URL=<canonical origin>` and `SEO_ALLOW_INDEXING=true`, then redeploy.
2. Open [Search Console](https://search.google.com/search-console) → Add property → **Domain** property (DNS TXT verification, recommended for a custom domain) or **URL-prefix** property for a `vercel.app` address (HTML tag/file verification).
3. Verify `https://<origin>/robots.txt` shows `Allow: /` and a `Sitemap:` line, and `https://<origin>/sitemap.xml` lists the pages.
4. Search Console → Sitemaps → submit `sitemap.xml`.
5. URL Inspection → test the home page and each service page → "Request indexing". Confirm "Page is indexable", the user-selected canonical matches the Google-selected one, and no `noindex` is detected.
6. Pages → review "Why pages aren't indexed" weekly during the first month.

## Monitoring (monthly)
- Performance → Queries, Pages, Countries/Devices; filter Pages by `/services/<name>` to measure each service page's clicks and impressions.
- Experience → Core Web Vitals (field data appears after enough real traffic): LCP ≤ 2.5 s, INP ≤ 200 ms, CLS ≤ 0.1 at the 75th percentile.
- Enhancements: check Breadcrumbs (no warnings expected).
- Watch for sudden "Excluded" growth, soft-404s and duplicate-canonical notices.

## Measuring quote requests
- The quote form posts to `/api/quote` (server-side to Zolato). To count successes without sending personal data, fire a single analytics event on the thank-you state with **no parameters** (no name, phone, email, address or message), for example `generate_lead` with only the page path. Do not add any tracker before the owner chooses an analytics tool and approves it.
- Also compare Search Console clicks to leads received in Zolato.

## Privacy rules for any analytics
No customer fields in events, URLs or parameters; no session replay on the quote form; anonymize IPs where the tool supports it; mention analytics in a privacy notice.
