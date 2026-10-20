# Performance baseline (before any performance changes)

**Method:** Lighthouse 12 (run via a throwaway `npx`, not a project dependency) against a local **production build** of this branch (`next build` + `next start`), headless Chrome, **simulated** mobile throttling (about 4x CPU slowdown, slow 4G) except the desktop run. These are **lab estimates, not field data**: real Core Web Vitals come from Search Console after launch. Scores vary run to run, so treat differences under about 5 points as noise. SEO scores of 66 are caused entirely by the intentional `noindex` ("page is blocked from indexing") and will read 100 after launch.

| Page (mobile) | Perf | A11y | Best practices | LCP | CLS | TBT | Transfer |
|---|---|---|---|---|---|---|---|
| Home `/` | 51 | 96 | 100 | **5.2 s** | 0.05 | 800 ms | 650 KiB |
| Services | 70 | 100 | 100 | **3.8 s** | 0.009 | 730 ms | 366 KiB |
| Gallery | 54 | 100 | 100 | **4.6 s** | 0.05 | 1,670 ms | 744 KiB |
| Quote (mobile) | 89 | 96 | 100 | 3.0 s | 0 | 260 ms | 347 KiB |
| Service Area (mobile) | 61 | 100 | 100 | 3.9 s | 0 | 1,750 ms | 354 KiB |
| Home (desktop) | 83 | 96 | 100 | 0.9 s | 0.027 | 320 ms | 775 KiB |

Google's "good" thresholds: LCP ≤ 2.5 s, INP ≤ 200 ms, CLS ≤ 0.1 (75th percentile). CLS is already good; **LCP is the problem**. INP cannot be measured in a lab run (it needs real interactions); total blocking time is the lab proxy and is elevated.

## What the evidence says
1. **The images are not the bottleneck.** The homepage LCP image is the hero photo, already served as AVIF at **28 KiB**; the whole homepage makes only **9 image requests (about 303 KiB)**. Only the first slide is eagerly loaded, so the "three eagerly loaded slider images" concern does not apply to the current build.
2. **LCP breakdown (home):** TTFB 541 ms, load delay 0 ms, load time 216 ms, **render delay about 4.5 s**. The image arrives quickly but the browser cannot paint it, because the main thread is busy.
3. **JavaScript is the cost.** One shared chunk (`196x_*.js`, the app/framework runtime) costs about **1.3-1.5 s of scripting** on the simulated phone, producing 589 ms and 503 ms long tasks that line up with the delayed paint. Total JS is about 155 KiB transferred. Lighthouse also flags about 25-28 KiB of unused JavaScript and 13 KiB of legacy-JS polyfills.
4. **Desktop is healthy** (home LCP 0.9 s, performance 83), so the mobile gap is CPU-bound, not network-bound. **Service Area** has high total blocking time (1,750 ms): the map's SVG filters are a suspect to measure.
5. Fonts and layout stability are fine (CLS 0.05 or less). Accessibility 96 on the homepage: one minor issue to look at in the performance PR.

## Targets for the final performance PR (evidence-led, no guessing)
- Reduce main-thread work during hydration of the homepage: profile the large chunk, defer non-critical client components (slider controls and the review/before-after widgets are already code-split), and avoid shipping client JS for purely static UI.
- Re-measure LCP after each change; keep the slider's instant transitions and the current design.
- Re-test Gallery's total blocking time (largest at 1,670 ms: many images plus the filter/lightbox client code).
- Do not trade visible quality for synthetic score gains.
