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
npm run sweep:locales    # live sweep of all 88 routes, hreflang, canonicals
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

**The Worker name must match in three places:** the `name` in `wrangler.jsonc`,
the `service` of the `WORKER_SELF_REFERENCE` binding, and the Worker in the
Cloudflare dashboard. If they diverge, the deploy fails with
`Service binding 'WORKER_SELF_REFERENCE' references Worker '…' which was not
found [code: 10143]`.

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
late can no longer change the status, so an unknown tool URL would answer
`200` with a not-found page: a soft 404. `src/proxy.ts` therefore checks the
tool slug before the request reaches the route and rewrites unknown ones to
the catch-all, which is not prerendered and so answers a real `404` — with the
not-found page still in the visitor's language.

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
`inLanguage` value inside the JSON-LD. The sitemap lists all 88 URLs (11 pages
× 8 languages), each with its own `xhtml:link` alternate cluster. The language
switcher's links stay in the DOM and are hidden with the `hidden` attribute
rather than being mounted on click, so a crawler finds a real link to every
language of the page it is on.

**Where the copy lives.**

```
src/content/
├── en/                    English source of truth
│   ├── ui.ts              chrome strings (nav, footer, buttons)
│   ├── site.ts            home, tools index, about, contact, blog, privacy
│   ├── labels.ts          labels for the five interactive panels
│   └── <tool>.ts          one file per tool: long-form copy + FAQ
├── locales/<code>/        the same eight files, per language
├── types.ts               the content contract every bundle satisfies
└── registry.ts            locale → bundle map
```

Each locale bundle exports the identical `LocaleContent` shape, so a page
renders identically whatever the language. `src/lib/i18n.ts` holds the locale
registry and the path helpers; `src/lib/seo.ts` builds the hreflang maps.

**Adding a language.** Add an entry to `LOCALES` in `src/lib/i18n.ts`, copy
`src/content/en/` to `src/content/locales/<code>/`, translate the eight files,
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
│   ├── sitemap.ts robots.ts
├── components/
│   ├── Header.tsx Footer.tsx Logo.tsx Container.tsx
│   ├── LanguageSelector.tsx  globe switcher, keeps the reader on the page
│   ├── ToolPage.tsx       the shared tool-page template
│   ├── AdSlot.tsx RelatedTools.tsx JsonLd.tsx
│   ├── views/             one view component per page type
│   └── tools/             one client component per diagnostic
├── content/               long-form copy + FAQ, per language
│   ├── notFoundCopy.ts    the 404 strings for every language, client-safe
├── lib/
│   ├── analysis.ts        pure diagnostic rules (unit tested)
│   ├── i18n.ts            locale registry and path helpers
│   ├── seo.ts             hreflang and canonical helpers
│   ├── tools.ts           tool registry
│   └── site.ts            site name, URL, build year
├── proxy.ts               locale rewrite / redirect, and the 404 routing
└── scripts/verify-logic.ts   the test suite

wrangler.jsonc            the Cloudflare Worker
open-next.config.ts       the OpenNext adapter settings
public/_headers           cache headers for the hashed build assets
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

**One ad slot above the content, one below.** Two slots per page, both
placeholdered in `AdSlot.tsx` until the AdSense account is live.

**Schema on every tool page.** `WebPage`, `SoftwareApplication`, `FAQPage` and
`BreadcrumbList` are emitted together by `ToolPage.tsx`.

**Real content, not filler.** Each tool page carries roughly 2,000–2,600 words
plus an eight-question FAQ, written to be genuinely useful rather than
keyword-stuffed.

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
of rendering an empty block.

`npm run sweep:locales` requests all 88 routes against a running server and
checks each one for the right `<html lang>`, a localised title and heading,
copy that is not still English, the full eight-language hreflang cluster, a
matching canonical URL, a language switcher that links to every language of the
same page, the `/en/...` → 308 redirect, and a 404 for unknown paths.

`npm run verify:notfound` checks that each locale's 404 returns a real 404
status, carries that language's copy, and stays `noindex`.

