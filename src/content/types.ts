import type { Locale } from "@/lib/i18n";

export type Faq = {
  question: string;
  answer: string;
};

export type ToolStep = {
  title: string;
  body: string;
};

export type ToolSection = {
  heading: string;
  paragraphs: string[];
  /** Optional bullet list rendered under the paragraphs. */
  bullets?: string[];
};

export type ToolContent = {
  slug: string;
  name: string;
  /** H1 — the primary keyword phrase for the page. */
  h1: string;
  metaTitle: string;
  metaDescription: string;
  category: string;
  intro: string[];
  steps: ToolStep[];
  sections: ToolSection[];
  faqs: Faq[];
  /** Slugs of sibling tools to link under "You may also need". */
  related: string[];
};

export const TOOL_SLUGS = [
  "mouse-test",
  "scroll-test",
  "keyboard-test",
  "cps-test",
  "polling-rate-test",
] as const;

export type ToolSlug = (typeof TOOL_SLUGS)[number];

/**
 * Slugs of every blog post, independent of language.
 *
 * The slugs are the same in every locale so that a post keeps one address per
 * language and the hreflang cluster lines up. They live here, next to the tool
 * slugs, so the proxy can reject unknown post slugs without pulling the whole
 * content registry into its bundle.
 */
export const POST_SLUGS = [
  "how-a-browser-sees-your-mouse",
  "double-click-chatter-explained",
] as const;

export type PostSlug = (typeof POST_SLUGS)[number];

/* ------------------------------------------------------------------ */
/* Shared chrome                                                       */
/* ------------------------------------------------------------------ */

export type UiStrings = {
  nav: {
    home: string;
    tools: string;
    allTools: string;
    blog: string;
    about: string;
    contact: string;
    menuOpen: string;
    menuClose: string;
  };
  footer: {
    toolsHeading: string;
    companyHeading: string;
    privacyPolicy: string;
    blurb: string;
    disclaimer: string;
    rights: string;
  };
  common: {
    openTest: string;
    fullGuide: string;
    readMore: string;
    advertisement: string;
    breadcrumbHome: string;
    breadcrumbTools: string;
    languageLabel: string;
    chooseLanguage: string;
    switchTo: string;
    skipToContent: string;
  };
  home: {
    faqHeading: string;
    faqIntro: string;
  };
  toolPage: {
    faqHeadingSuffix: string;
    faqIntro: string;
    howToUseHeading: string;
    relatedHeading: string;
    relatedIntro: string;
    openTest: string;
  };
  /** Shown on the 404 page, in the language the visitor was browsing in. */
  notFound: {
    heading: string;
    body: string;
  };
};

/* ------------------------------------------------------------------ */
/* Home                                                                */
/* ------------------------------------------------------------------ */

export type HomeContent = {
  metaTitle: string;
  metaDescription: string;
  badge: string;
  heroTitleBefore: string;
  heroTitleHighlight: string;
  heroTitleAfter: string;
  heroSubtitle: string;
  ctaPrimary: string;
  ctaSecondary: string;
  stats: { term: string; detail: string }[];
  tester: { heading: string; description: string; linkLabel: string };
  allTools: {
    heading: string;
    description: string;
    blurbs: Record<ToolSlug, string>;
  };
  why: {
    heading: string;
    description: string;
    items: { title: string; body: string }[];
  };
  faq: { heading: string; items: Faq[] };
};

/* ------------------------------------------------------------------ */
/* Tools index                                                         */
/* ------------------------------------------------------------------ */

export type ToolsIndexContent = {
  metaTitle: string;
  metaDescription: string;
  heading: string;
  intro: string;
  blurbs: Record<ToolSlug, string>;
};

/* ------------------------------------------------------------------ */
/* Static pages                                                        */
/* ------------------------------------------------------------------ */

export type AboutContent = {
  metaTitle: string;
  metaDescription: string;
  /** Supports the {brand} placeholder so the brand can sit naturally. */
  heading: string;
  lead: string;
  sections: { heading: string; paragraphs: string[]; bullets?: string[] }[];
  privacyLinkLabel: string;
};

export type ContactContent = {
  metaTitle: string;
  metaDescription: string;
  heading: string;
  lead: string;
  cards: { title: string; body: string }[];
  messageHeading: string;
  /** Supports the {email} placeholder. */
  messageBody: string;
  messageNote: string;
};

export type BlogPostSection = {
  heading: string;
  paragraphs: string[];
  /** Optional bullet list rendered under the paragraphs. */
  bullets?: string[];
};

export type BlogPost = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  excerpt: string;
  readTime: string;
  /** Publication date, written the way the language of the page writes dates. */
  dateLabel: string;
  /** Opening paragraph, shown under the title before the first section. */
  lead: string;
  sections: BlogPostSection[];
  faqs: Faq[];
  /** Slug of the tool the post explains, linked at the end of the article. */
  toolSlug: ToolSlug;
};

export type BlogContent = {
  metaTitle: string;
  metaDescription: string;
  heading: string;
  lead: string;
  posts: BlogPost[];
};

export type PrivacyContent = {
  metaTitle: string;
  metaDescription: string;
  heading: string;
  lastUpdated: string;
  sections: { heading: string; body: string }[];
  copyright: string;
};

/* ------------------------------------------------------------------ */
/* Tool panel labels                                                   */
/* ------------------------------------------------------------------ */

export type MouseTesterLabels = {
  liveCounters: string;
  reset: string;
  counters: {
    left: string;
    right: string;
    middle: string;
    forward: string;
    back: string;
    double: string;
    up: string;
    down: string;
    total: string;
  };
  panelHint: string;
  privacyNote: string;
  verdictClean: { title: string; body: string };
  /** Supports {count} and {gap}. */
  verdictChatter: { title: string; body: string };
};

export type ScrollTesterLabels = {
  start: string;
  stop: string;
  reset: string;
  /** Supports {n}. */
  secondsLeft: string;
  scrollHere: string;
  emptyChart: string;
  noScrollNote: string;
  readout: string;
  stats: {
    up: string;
    down: string;
    reverse: string;
    total: string;
  };
  averageStep: string;
  deltaMode: string;
  deviceType: string;
  deltaPixel: string;
  deltaLine: string;
  deltaPage: string;
  deviceNotched: string;
  deviceSmooth: string;
  /** Supports {n}. */
  verdictReverse: { title: string; body: string };
  verdictNone: { title: string; body: string };
  /** Supports {n}. */
  verdictOk: { title: string; body: string };
};

export type KeyboardTesterLabels = {
  tabCheck: string;
  tabRollover: string;
  /** Supports {n}. */
  keysHeld: string;
  lastKey: string;
  pressAnyKey: string;
  recentPresses: string;
  spaceKey: string;
  /** Supports {n}. */
  repeatDetected: string;
  noRepeats: string;
  focusHint: string;
  /** Supports {n}. */
  rolloverIntro: string;
  keysLabel: string;
  nextCombination: string;
  /** Supports {a} and {b}. */
  registered: string;
  /** Supports {n}. */
  allRegistered: string;
  allRegisteredBody: string;
};

export type CpsTesterLabels = {
  start: string;
  stop: string;
  cancel: string;
  reset: string;
  /** Supports {n}. */
  best: string;
  clicks: string;
  pressStart: string;
  clicksPerSecond: string;
  /** Supports {n} and {s}. */
  clicksIn: string;
  readout: string;
  liveCps: string;
  average: string;
  noClicks: string;
  chartLabel: string;
  /** Supports {n} and {v}. */
  barTitle: string;
  note: string;
};

export type PollingRateTesterLabels = {
  startMeasuring: string;
  stop: string;
  reset: string;
  /** Supports {n}. */
  rawSamples: string;
  moveMouse: string;
  wideCircles: string;
  readout: string;
  current: string;
  peak: string;
  average: string;
  closestStandard: string;
  samplingMethod: string;
  rawCoalesced: string;
  frameLevel: string;
  verdictMove: { title: string; body: string };
  verdictFrame: { title: string; body: string };
  /** Supports {hz}. */
  verdictUnstable: { title: string; body: string };
  /** Supports {hz}. */
  verdictOk: { title: string; body: string };
};

export type ToolUiLabels = {
  "mouse-test": MouseTesterLabels;
  "scroll-test": ScrollTesterLabels;
  "keyboard-test": KeyboardTesterLabels;
  "cps-test": CpsTesterLabels;
  "polling-rate-test": PollingRateTesterLabels;
};

/* ------------------------------------------------------------------ */
/* Locale bundle                                                       */
/* ------------------------------------------------------------------ */

export type LocaleContent = {
  locale: Locale;
  ui: UiStrings;
  home: HomeContent;
  toolsIndex: ToolsIndexContent;
  about: AboutContent;
  contact: ContactContent;
  blog: BlogContent;
  privacy: PrivacyContent;
  toolPages: Record<ToolSlug, ToolContent>;
  toolUi: ToolUiLabels;
};
