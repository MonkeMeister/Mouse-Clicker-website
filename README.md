# MouseLab

Free, browser-based diagnostics for mouse, keyboard and pointer hardware.
Every test reads the events your computer actually receives — no download, no
signup, nothing uploaded.

## Running it

```bash
npm install
npm run dev        # http://localhost:3000
```

```bash
npm run build      # production build
npm start          # serve the production build
npm test           # 40 assertions over the diagnostic rules
```

```bash
npm run verify:locales   # every locale bundle matches the English structure
npm run audit:characters # no stray characters from another writing system
npm run sweep:locales    # live sweep of all 104 routes, hreflang, canonicals
npm run verify:notfound  # every locale returns a real 404 in its own language
```

The three `verify`/`sweep` scripts expect a server on `http://localhost:3000`.
They take a base URL argument, so they can also be pointed at a preview:

```bash
npm run sweep:locales -- http://localhost:8787
```

## Deploying to Cloudflare Workers

The site runs on Cloudflare Workers through the OpenNext adapter.

```bash
npm run preview     # build + serve in the real Workers runtime (workerd)
npm run deploy      # build + deploy to your Cloudflare account
npm run upload      # build + upload a version without promoting it
```

The Cloudflare configuration is committed rather than generated, so it cannot
drift between builds:

| File | Purpose |
|---|---|
| `wrangler.jsonc` | The Worker itself — name, entry point, assets, compatibility flags |
| `open-next.config.ts` | Adapter settings; the read-only static-assets cache, since nothing revalidates |
| `public/_headers` | Long-lived cache headers for the hashed build assets |
| `.dev.vars` | Local-only variables for `next dev`; gitignored |

**The Worker name must match in two places:** the `name` in `wrangler.jsonc` and
the Worker in the Cloudflare dashboard. If they diverge, the deploy fails with a
name error from Wrangler.

This project deliberately has **no `WORKER_SELF_REFERENCE` binding**. The
self-reference is only used by the Durable Object queue and by the Pages Router
`res.revalidate` patch, and MouseLab needs neither — every route is
prerendered and never revalidated. It also cannot work on a first deploy: the
binding names the Worker that is being created, and Wrangler resolves service
bindings against Workers that already exist, so the first build fails and the
Worker never gets created.

**Connecting a GitHub repository.** Cloudflare's Workers Builds can build and
deploy on every push:

- Build command: `npx opennextjs-cloudflare build`
- Deploy command: `npx opennextjs-cloudflare deploy`
- Root directory: `/`

Set the Worker name in the dashboard to `mouselab` so it matches
`wrangler.jsonc`.

**One thing to know about 404s.** With Cache Components, routes are partially
prerendered: the static shell — and the `200` status line that arrives with
it — is on the wire before the page component runs. A `notFound()` raised that
late can no longer change the status, so an unknown tool or blog URL would
answer `200` with a not-found page: a soft 404. `src/proxy.ts` therefore checks
the tool and post slug before the request reaches the route and rewrites
unknown ones to the catch-all, which is not prerendered and so answers a real
`404` — with the not-found page still in the visitor's language.

## Advertising

The site is funded by Google AdSense. The publisher ID lives in `src/lib/site.ts`:

```ts
export const ADSENSE = {
  client: "ca-pub-9908657950336504",
  slots: {
    leaderboard: "8407273822",
    rectangle: "7094192153",
  },
  autoAds: false,
} as const;
```

The two slot IDs are the ad units in the AdSense dashboard, both responsive
display units:

| Placement | Slot ID | Where it renders |
|---|---|---|
| `leaderboard` | `8407273822` | Below the tool on a tool page, below the hero on the home page |
| `rectangle` | `7094192153` | Mid-page on a tool page, below the article body on a blog post |

A placement whose slot ID is empty renders the neutral placeholder instead, so a
missing ID never leaves a broken frame on the page.

**The script is loaded on the first interaction, not on page load.**
`src/components/AdSenseLoader.tsx` waits for a `pointerdown`, `keydown`,
`touchstart`, `wheel` or `scroll` before injecting Google's script. That keeps
the third-party request off the critical path, so the tools stay fast, and it
matches what the privacy policy tells visitors.

**Auto ads are off by default.** `autoAds: true` adds `data-ad-client` to the
`<body>`, which lets Google place units wherever it likes. MouseLab places its
own units deliberately, so turn it on only if you want automatic placements as
well as the manual ones. Auto ads are also off in the AdSense dashboard.

**`public/ads.txt` carries the certified record.**

```
google.com, pub-9908657950336504, DIRECT, f08c47fec0942fa0
```

That line came from AdSense → Sites → `mouselab.io` → Verify site ownership →
Ads.txt snippet. Do not change it: an incorrect or missing record can stop ads
from serving entirely.

Two things have to be done in the AdSense dashboard, not in the repository:

- **Verify the site and request review.** `mouselab.io` is added but still sits
  at "Requires review". AdSense offers three verification methods: the AdSense
  code snippet, an ads.txt record, or a meta tag. The code snippet method
  wants Google's script between `<head>` and `</head>`, which the on-interaction
  loader does not do, so verify with ads.txt or the meta tag instead:
  `<meta name="google-adsense-account" content="ca-pub-9908657950336504">`.
- **Set up a certified CMP.** For visitors in the EEA, the UK and Switzerland,
  Google requires a certified consent manager. Google provides one free through
  AdSense (Privacy & messaging → European regulations → Funding Choices), and
  it handles the consent banner in every language the site ships.

**What the copy promises.** The site claims that measurement data never leaves
the browser, which stays true: AdSense never sees your clicks. The footer, the
hero and the meta description all scope that claim to the measurements, and
the privacy policy names Google AdSense and the opt-out routes.

## Stack

| Layer | Choice |
|---|---|
| Framework | Next.js 16 App Router, React 19, TypeScript |
| Styling | Tailwind CSS v4 (`@theme` tokens in `src/app/globals.css`) |
| Type | Ubuntu Sans Variable, self-hosted from `/public/fonts` |
| Rendering | Every route prerendered as static HTML |
| Hosting | Cloudflare Workers via `@opennextjs/cloudflare` |

## Internationalisation

Eight languages ship with the site. English lives at the site root so the
original URLs keep their equity; every other language gets its own prefix and
its own complete page set.

| Language | URL prefix | hreflang |
|---|---|---|
| English | `/` | `en` |
| German | `/de` | `de` |
| Spanish | `/es` | `es` |
| Hindi | `/hi` | `hi-IN` |
| Japanese | `/ja` | `ja` |
| Polish | `/pl` | `pl` |
| Portuguese (Brazil) | `/pt-br` | `pt-BR` |
| Turkish | `/tr` | `tr` |

**How routing works.** Every page lives under `src/app/[locale]/`, which is
also the root layout, so `<html lang>` and `dir` are correct per language.
`src/proxy.ts` rewrites unprefixed paths to `/en` and 308-redirects `/en/...`
back to the clean URL, so every page has exactly one address.

**How search engines see it.** Each page emits `hreflang` alternates for all
eight languages plus `x-default`, a per-language canonical URL, and a
`inLanguage` value inside the JSON-LD. The sitemap lists all 104 URLs (13 pages
× 8 languages), each with its own `xhtml:link` alternate cluster. The language
switcher's links stay in the DOM and are hidden with the `hidden` attribute
rather than being mounted on click, so a crawler finds a real link to every
language of the page it is on.

**Where the copy lives.**

```
src/content/
├── en/                    English source of truth
│   ├── ui.ts              chrome strings (nav, footer, buttons)
│   ├── site.ts            home, tools index, about, contact, privacy
│   ├── blog.ts            the blog index and every article in full
│   ├── labels.ts          labels for the five interactive panels
│   └── <tool>.ts          one file per tool: long-form copy + FAQ
├── locales/<code>/        the same nine files, per language
├── types.ts               the content contract every bundle satisfies
└── registry.ts            locale → bundle map
```

Each locale bundle exports the identical `LocaleContent` shape, so a page
renders identically whatever the language. `src/lib/i18n.ts` holds the locale
registry and the path helpers; `src/lib/seo.ts` builds the hreflang maps.

**Adding a language.** Add an entry to `LOCALES` in `src/lib/i18n.ts`, copy
`src/content/en/` to `src/content/locales/<code>/`, translate the nine files,
and register the bundle in `src/content/registry.ts`. Then run
`npm run verify:locales` and `npm run sweep:locales`.

**The 404 page is localised too.** A not-found file receives no route params,
so `src/app/[locale]/not-found.tsx` is a client component that reads the locale
from the router and picks its copy out of `src/content/notFoundCopy.ts`. It is
deliberately not a server component reading a request header: reading headers
opts the boundary into dynamic rendering, the response is flushed before the
404 status is known, and a real 404 becomes a soft 404. `src/proxy.ts` decides
which URLs are missing at routing level, so the status is always a real 404.

## Layout

```
src/
├── app/
│   ├── [locale]/          every route, and the root layout
│   │   ├── page.tsx       homepage — hero, live tester, tool grid, FAQ
│   │   ├── tools/         tool index and one route for all five tools
│   │   └── about/ contact/ blog/ privacy-policy/
│   │       └── blog/[slug]/  one route for every article
│   ├── sitemap.ts robots.ts
├── components/
│   ├── Header.tsx Footer.tsx Logo.tsx Container.tsx
│   ├── LanguageSelector.tsx  globe switcher, keeps the reader on the page
│   ├── ToolPage.tsx       the shared tool-page template
│   ├── AdSlot.tsx         the ad unit, with a placeholder fallback
│   ├── AdSenseLoader.tsx  injects Google's script on the first interaction
│   ├── RelatedTools.tsx JsonLd.tsx
│   ├── views/             one view component per page type
│   └── tools/             one client component per diagnostic
├── content/               long-form copy + FAQ, per language
│   ├── notFoundCopy.ts    the 404 strings for every language, client-safe
├── lib/
│   ├── analysis.ts        pure diagnostic rules (unit tested)
│   ├── i18n.ts            locale registry and path helpers
│   ├── seo.ts             hreflang and canonical helpers
│   ├── tools.ts           tool registry
│   ├── blog.ts            blog registry, post slugs and the publish date
│   └── site.ts            site name, URL, build year, AdSense config
├── proxy.ts               locale rewrite / redirect, and the 404 routing
└── scripts/verify-logic.ts   the test suite

wrangler.jsonc            the Cloudflare Worker
open-next.config.ts       the OpenNext adapter settings
public/_headers           cache headers for the hashed build assets
public/ads.txt            the AdSense seller record for the root domain
```

## Adding a tool

1. Create `src/content/en/<slug>.ts` exporting a `ToolContent` object — intro,
   steps, sections, FAQs, related slugs.
2. Create the interactive component in `src/components/tools/`, taking its
   strings from a `labels` prop so it can be localised.
3. Register it in `src/lib/tools.ts` and add it to the `buildPanels` map in
   `src/app/[locale]/tools/[slug]/page.tsx`.
4. Copy and translate the content file for every locale under
   `src/content/locales/<code>/`.

The page template, schema, breadcrumbs, related-tools block and ad slots are
all handled by `ToolPage`.

## Design rules worth keeping

**The tool comes before the advertising.** The interactive tester is always the
first thing on the page. Ad slots sit after the result the user came for —
never above it. This is the main structural difference from the reference
site, which places its ad above the tool on every page.

**Two ad slots per page, both below the content.** A `leaderboard` unit below the
tester and a `rectangle` unit further down the page. `AdSlot.tsx` still falls
back to a neutral placeholder for any placement whose slot ID is empty, so a
missing ID never leaves a broken frame.

**Schema on every tool page.** `WebPage`, `SoftwareApplication`, `FAQPage` and
`BreadcrumbList` are emitted together by `ToolPage.tsx`.

**Real content, not filler.** Each tool page carries roughly 2,000–2,600 words
plus an eight-question FAQ, written to be genuinely useful rather than
keyword-stuffed. The two blog articles are written the same way: full articles
of roughly a thousand words each, with their own sections and FAQ, in every one
of the eight languages.

**The blog is a real page set, not a placeholder list.** Each article is a
prerendered page at `/blog/<slug>` with its own title, description, canonical
URL, hreflang cluster, `Article` and `FAQPage` schema, breadcrumbs and a link
to the tool it explains. `src/content/<locale>/blog.ts` holds the index copy
and the full body of both articles; `src/lib/blog.ts` owns the slug list and
the publication date. Adding an article means adding its slug to `POST_SLUGS`
in `src/content/types.ts`, writing the body in every locale, and the route,
the sitemap and the proxy pick it up from there.

**Every language is a first-class page set.** A locale is never a machine
translation of the English page. Each one is rewritten for native readers,
with its own search terms, while keeping the same facts, the same structure
and the same measured values.

## Three implementation details that are easy to get wrong

**Wheel events need a native, non-passive listener.** React registers
`onWheel` as a passive root listener, so `preventDefault()` inside it does
nothing and the page scrolls out from under the cursor. `ScrollTester.tsx`
attaches the listener directly to the surface with `{ passive: false }`.

**`pointermove` is attached natively too.** `PollingRateTester.tsx` binds the
listener to the surface element rather than relying on React's delegated
plumbing, so the measurement never depends on the event delegation path.

**The root layout lives inside the dynamic segment.** With every route under
`[locale]`, `src/app/[locale]/layout.tsx` is the root layout and there is no
top-level `src/app/layout.tsx`. That is what allows `<html lang>` to change
per language without making the whole app dynamic.

## Tests

`npm test` runs 40 assertions over the rules that decide whether a device is
healthy — wheel direction and reverse-jump detection, notched-wheel versus
trackpad classification, switch-chatter timing, rollover evaluation and
polling-rate windowing. Those functions live in `src/lib/analysis.ts` and are
the same ones the UI components call.

`npm run verify:locales` compiles every locale bundle and compares its shape
against the English one, so a missing field or a stray key fails loudly instead
of rendering an empty block. It also fails a locale that has copied a
paragraph of the English article verbatim. Pass a locale name to check just
one bundle: `node scripts/verify-locales.mjs ja`.

`npm run audit:characters` guards the non-Latin bundles against a subtler
fault. The structural verifier cannot tell that a Japanese article has picked
up a stray Chinese character or a Korean fragment, because the text is still
valid TypeScript and the shape is unchanged. The audit compares every
non-ASCII codepoint in a locale's `blog.ts` against the codepoints already
present in that locale's other content files, and reports anything that
belongs to another writing system.

`npm run sweep:locales` requests all 104 routes against a running server and
checks each one for the right `<html lang>`, a localised title and heading,
copy that is not still English, the full eight-language hreflang cluster, a
matching canonical URL, a language switcher that links to every language of the
same page, the `/en/...` → 308 redirect, and a 404 for unknown paths.

`npm run verify:notfound` checks that each locale's 404 returns a real 404
status, carries that language's copy, and stays `noindex`.

