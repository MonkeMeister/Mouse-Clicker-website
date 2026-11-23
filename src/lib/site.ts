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

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;
