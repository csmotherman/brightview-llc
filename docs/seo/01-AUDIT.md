# SEO audit: BrightView LLC (baseline from `main` at `70980b7`)

Evidence comes from the repository, the built site, and the Google/Next.js documentation linked in section 5. Severity: **Critical** blocks all search visibility, **High** limits ranking or rich results, **Medium** is a quality gap, **Low** is polish.

## 1. Findings

| # | Severity | Finding | Evidence | Fix (PR) |
|---|---|---|---|---|
| 1 | Critical | Entire site is `noindex, nofollow` | `src/app/layout.tsx`: `robots: { index: false, follow: false }` | Environment-gated launch switch, off until the owner confirms the domain (PR 1) |
| 2 | Critical | No `robots.txt` and no `sitemap.xml` | No `src/app/robots.ts` / `sitemap.ts`; both routes 404 | Added; sitemap lists only finished pages (PR 1) |
| 3 | High | No canonical domain is configured anywhere | No `metadataBase`, no env var, no custom domain in repo. GitHub repo homepage field is `https://brightview-llc.vercel.app`. The latest Vercel build log also failed with `NEXT_NO_VERSION` (Root Directory setting) | `NEXT_PUBLIC_SITE_URL`; **owner decision needed** |
| 4 | High | No canonical, Open Graph or Twitter metadata; titles hard-code the brand suffix | Only `title` + `description` per page | `pageMetadata()` helper + title template (PR 1) |
| 5 | High | Only 3 of 6 services have their own URL, and all 3 are blank placeholders | `/services/window-cleaning`, `/pressure-washing`, `/holiday-lights` render `GlassPage` with only a hidden H1. There is no URL for soft washing, roof cleaning or gutter cleaning. Six services' full copy lives in a client-side accordion on `/services` | Keep placeholders out of the index now (PR 1); build real pages (PR 2+) |
| 6 | High | No structured data | No JSON-LD anywhere | Organization-level `LocalBusiness` (no address) + `WebSite` + `BreadcrumbList` (PR 1) |
| 7 | Medium | No favicon or social image | `/favicon.ico` 404; no `icon` or `opengraph-image` | Added icon, apple-icon and a text-only brand card (PR 1) |
| 8 | Medium | Service copy is hidden until a user expands an accordion | `ServiceExplorer` renders the panel only when open; crawlers see six headings and one-line definitions | Dedicated server-rendered pages (PR 2+) |
| 9 | Medium | Large source photos (about 4-5 MB PNG each, 58 MB in `public/`) | `du public` | Already served through `next/image` (AVIF/WebP); review in the performance PR |
| 10 | Medium | Slider keeps three full-viewport images in the DOM | `HomeFeatureHero` renders every slide's `<Image>`; only the first has `priority` | Measure, then adjust (final PR) |
| 11 | Low | `/contact`, `/reviews` and `/faq` were thin | Short pages | Content review in later PRs |

Already good: server-rendered static pages, one `h1` per page, semantic landmarks, descriptive alt text, a working skip link, mobile-friendly layout, `lang="en"`, no horizontal overflow, HTTPS-ready, no duplicate meta robots.

## 2. What PR 1 does and does not change
- Adds the machinery (metadata, sitemap, robots, structured data, icons, social image).
- **Does not make the site indexable.** Indexing requires three things at once, all set by the owner on the Vercel **Production** environment: `NEXT_PUBLIC_SITE_URL`, `SEO_ALLOW_INDEXING=true`, and a Production deployment. Preview deployments are always `noindex`.
- Placeholder service routes are `noindex` and excluded from the sitemap until their pages ship.

## 3. Structured data decisions
- `LocalBusiness` (not `Service` on the home page): name, URL, logo, phone, email, Facebook `sameAs`, `areaServed: Southeast Michigan`, and `address` limited to `addressRegion: MI, addressCountry: US`.
- **Google lists `address` as a required property** for LocalBusiness rich-result eligibility, but it means a full physical address. BrightView is a home-based service-area business, so the street address, postal code and `geo` are intentionally omitted. The trade-off: this markup will not qualify for a LocalBusiness rich result. Local-pack visibility comes from the Google Business Profile instead (see `04-GOOGLE-BUSINESS-PROFILE.md`).
- **No FAQPage markup.** Google's changelog states FAQ rich results stopped appearing on **May 7, 2026**, so the markup would add nothing.
- **No Review or AggregateRating markup.** Google restricts self-serving review markup, and the reviews are Facebook recommendations.
- No opening hours, founding date, licenses or prices are published, because none are confirmed.

## 4. Limits of this research
- I had no access to keyword-volume or ranking tools (Google Keyword Planner, Ahrefs, Semrush) or to Search Console. **No search volumes, difficulty scores or traffic projections appear in these documents, and none should be assumed.**
- Competitor findings are limited: the local results I could reach were mostly directory listings (HomeAdvisor, Angi, Thumbtack) rather than company websites, which suggests aggregator pages occupy much of the local results. A proper SERP review needs live Google searches from the service area.

## 5. Sources
- Google Business Profile guidelines: https://support.google.com/business/answer/3038177
- Service areas for service-area businesses: https://support.google.com/business/answer/9157481
- LocalBusiness structured data: https://developers.google.com/search/docs/appearance/structured-data/local-business
- FAQ rich results change log: https://developers.google.com/search/docs/appearance/structured-data/faqpage
- Doorway pages: https://developers.google.com/search/blog/2015/03/an-update-on-doorway-pages
- Core Web Vitals thresholds: https://web.dev/articles/vitals (LCP ≤ 2.5 s, INP ≤ 200 ms, CLS ≤ 0.1, at the 75th percentile)
- Next.js metadata files: https://nextjs.org/docs/app/api-reference/file-conventions/metadata/sitemap and `/robots`
