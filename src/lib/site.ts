export const SITE = {
  name: "MouseLab",
  shortName: "MouseLab",
  tagline: "Free browser-based diagnostics for your mouse, keyboard and pointer hardware.",
  description:
    "Test every button, wheel, key and click rate directly in your browser. Free, no signup, nothing downloaded and no data leaves your device.",
  url: "https://mouselab.io",
  locale: "en_US",
} as const;

/**
 * Static build year. Rendered pages must stay prerenderable, so this is a
 * constant rather than a `new Date()` call during render.
 */
export const BUILD_YEAR = 2026;

/**
 * Google AdSense configuration.
 *
 * `client` is the publisher ID from the AdSense account.
 *
 * `slots` holds one ad unit slot ID per placement. Each ad unit in the
 * AdSense dashboard has its own ID; paste the matching one in and that
 * placement starts serving a real ad. A placement whose slot ID is still
 * empty renders the neutral placeholder instead, so the site never shows a
 * broken ad frame.
 */
export const ADSENSE = {
  client: "ca-pub-9908657950336504",
  slots: {
    /** Wide unit, used below the tool and above the fold of long pages. */
    leaderboard: "8407273822",
    /** Large rectangle, used mid-article and below the article body. */
    rectangle: "7094192153",
  },
  /**
   * Auto ads let Google place units wherever it likes on the page.
   *
   * Off by default, because MouseLab places its own units deliberately: the
   * tester always comes before any advertising. Turn it on in the AdSense
   * dashboard only if you accept automatic placements as well.
   */
  autoAds: false,
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;
