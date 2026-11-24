import type {
  AboutContent,
  ContactContent,
  HomeContent,
  PrivacyContent,
  ToolsIndexContent,
} from "../types";

export const home: HomeContent = {
  metaTitle:
    "MouseLab — Free browser-based diagnostics for your mouse, keyboard and pointer hardware.",
  metaDescription:
    "Test every button, wheel, key and click rate directly in your browser. Free, no signup, nothing downloaded. Your measurements never leave the browser.",
  badge: "Runs entirely in your browser",
  heroTitleBefore: "Find out exactly what your",
  heroTitleHighlight: "mouse and keyboard",
  heroTitleAfter: "are really doing.",
  heroSubtitle:
    "Five free diagnostics that read the events your computer actually receives — every button, every wheel direction, every key, and the real speed of your pointer. No download, no signup, and every measurement stays in your browser.",
  ctaPrimary: "Test your mouse now",
  ctaSecondary: "Browse all tools",
  stats: [
    { term: "No install", detail: "Runs in any modern browser" },
    { term: "No tracking", detail: "Counts stay in your tab" },
    { term: "Instant", detail: "Results as you press" },
  ],
  tester: {
    heading: "Mouse button test",
    description:
      "Press each button on your mouse inside the panel below and watch the counters move. Right-click is captured so no menu opens, and any button that fails to register shows up immediately.",
    linkLabel: "Full guide and FAQ →",
  },
  allTools: {
    heading: "All tools",
    description:
      "Each one measures a different part of your input hardware, and each explains what its numbers mean when you are done.",
    blurbs: {
      "mouse-test":
        "Check all five buttons, the scroll wheel and double-click behaviour, and catch switch chatter.",
      "scroll-test":
        "Catch skipped notches, reverse scrolling and uneven steps before they cost you a misclick.",
      "keyboard-test":
        "Find dead keys, stuck keys and the exact number of simultaneous presses your board can handle.",
      "cps-test":
        "Measure your clicks per second over 1 to 60 seconds and see whether your score is holding up.",
      "polling-rate-test":
        "Find your mouse's real report rate in Hz using raw pointer events, not frame-rate guesses.",
    },
  },
  why: {
    heading: "Why test in the browser",
    description:
      "Most hardware problems show up as events that never arrive, or arrive twice. A browser sees exactly those events, which makes it an unusually good diagnostic for the faults people actually hit.",
    items: [
      {
        title: "It tests the whole chain",
        body: "A physical press has to travel through the switch, the controller, the driver and the operating system before your app sees it. This test fails wherever that chain breaks, which is why it can tell you a working mouse on a second computer points at software, not hardware.",
      },
      {
        title: "It needs nothing from you",
        body: "There is no installer, no driver, no account and no admin rights. The page works on a locked-down work laptop, which is exactly where hardware problems tend to appear and where you cannot install a utility.",
      },
      {
        title: "It cannot lie to you",
        body: "A counter of zero for a button you definitely pressed is not an opinion. It is the absence of an event, and it is the single most useful thing a diagnostic can tell you.",
      },
    ],
  },
  faq: {
    heading: "Frequently asked questions",
    items: [
      {
        question: "Do these tests work without installing anything?",
        answer:
          "Yes. Every tool here uses standard browser events — mouse, wheel, keyboard and pointer — so they run on the page you are already looking at. There is no download, no browser extension, no account and no software to configure.",
      },
      {
        question: "Is any of my data collected or uploaded?",
        answer:
          "No. Clicks, key presses and scroll events are counted inside the page and discarded the moment you close or reload the tab. Nothing is transmitted to a server, no profile is created, and no device information is stored.",
      },
      {
        question: "What can a browser test actually detect?",
        answer:
          "Everything the browser receives: which buttons register, whether a wheel reports both directions, whether a click arrives twice, how fast your pointer reports its position, and whether your keyboard loses presses in combinations. It cannot see inside your hardware, so it will not measure switch latency, read the sensor's DPI, or tell you the physical distance a wheel notch turns.",
      },
      {
        question:
          "My mouse is skipping pages. Which test should I run first?",
        answer:
          "Start with the scroll wheel test, scrolling slowly in one direction. A dirty or worn encoder produces direction reversals and uneven steps at slow speeds. If the wheel reads clean but pages still jump, run the mouse button test next to rule out a failing switch, and check whether pointer acceleration is enabled in your operating system.",
      },
      {
        question: "Does this work on a laptop with a trackpad?",
        answer:
          "Yes, with one caveat. A trackpad does not report physical detents, so the scroll test measures its speed and consistency instead of counting notches. The keyboard, CPS and polling rate tests all work normally on a trackpad, though a physical mouse will give you a more meaningful click-speed score.",
      },
      {
        question: "Is it really free?",
        answer:
          "Yes. There is no signup, no usage limit and nothing to buy. The site is supported by advertising, and the advertising is kept below the tool so it never gets in the way of the thing you came here to do.",
      },
    ],
  },
};

export const toolsIndex: ToolsIndexContent = {
  metaTitle: "All tools",
  metaDescription:
    "Every free browser-based diagnostic on MouseLab: mouse buttons, scroll wheel, keyboard, click speed and polling rate.",
  heading: "All tools",
  intro:
    "Five free diagnostics that read the events your computer receives. Every one runs in the browser, needs no install, and explains what its numbers mean once you are finished.",
  blurbs: {
    "mouse-test":
      "Press every button and watch the counters. Catches dead buttons, dropped presses and double-click chatter from a worn micro-switch.",
    "scroll-test":
      "Scroll steadily in one direction and the test flags reverse events, skipped notches and uneven step size, and tells you whether you are on a notched wheel or a trackpad.",
    "keyboard-test":
      "Verify every key, catch stuck keys, and run a rollover test that finds the exact number of simultaneous presses your keyboard can handle.",
    "cps-test":
      "A one to sixty second clicks-per-second benchmark with live CPS, your best score and a per-second breakdown.",
    "polling-rate-test":
      "Measures your mouse's real report rate in hertz using raw coalesced pointer events, so you see the device rate rather than your display refresh rate.",
  },
};

export const about: AboutContent = {
  metaTitle: "About",
  metaDescription:
    "How MouseLab works, what each test can and cannot detect, and how we handle your data.",
  heading: "About {brand}",
  lead: "We built a set of browser-based diagnostics for people who suspect their mouse or keyboard is misbehaving but have no way to prove it. Every tool reports what your computer actually received, and every page explains what those results mean in plain language.",
  sections: [
    {
      heading: "How the tests work",
      paragraphs: [
        "When you press a mouse button, the switch inside the mouse closes, the device controller registers the change, the operating system translates it, and the browser finally receives an event. The same chain runs for the wheel, the keyboard and the pointer sensor. Each test listens to that final event stream and reports what arrived.",
        "That means a test fails wherever that chain breaks. A button that reports nothing points at the switch, the cable, the port or the driver. A button that reports two presses for one physical press points at switch contact chatter. A wheel that reverses points at the encoder. The measurement is unambiguous, which is what makes it useful when you are trying to decide whether to clean a mouse or replace it.",
      ],
    },
    {
      heading: "What these tools cannot do",
      paragraphs: [
        "We would rather be straight about the limits than have you chase a problem the tool was never built to find.",
      ],
      bullets: [
        "They cannot measure switch actuation latency. The browser sees an event that has already arrived, not the moment the metal contact closed.",
        "They cannot read the optical sensor's DPI. That requires direct access to the sensor, which the web platform deliberately withholds.",
        "They cannot tell you the physical distance a wheel notch turns. Browsers report scroll deltas in pixels, lines or pages, not millimetres.",
        "They cannot diagnose a trackpad as faulty when it is simply a device without detents. The scroll test labels trackpads as smooth devices rather than scoring them.",
        "They cannot confirm that hardware is healthy in absolute terms. They confirm that your hardware and your computer agree with each other, which is the thing that actually breaks day to day.",
      ],
    },
    {
      heading: "How we handle your data",
      paragraphs: [
        "Counts, timings and key readings are held in the memory of the open tab and thrown away when you close or reload it. We do not store what you clicked, what you typed, or any identifier tied to your device, and there is no account system to create.",
        "We do run standard, privacy-respecting site analytics so we can see which pages are useful and which are not. The full details are in the {privacyPolicy}.",
      ],
    },
    {
      heading: "How the site is funded",
      paragraphs: [
        "By advertising. Every tool stays free and unlimited, and we place advertising below the tool rather than above it, so the thing you came to use is never pushed out of view to make room for an ad. If a tool ever needs a paid tier, it will be for something genuinely extra such as saving history or exporting a report, not for the basic measurement.",
      ],
    },
  ],
  privacyLinkLabel: "privacy policy",
};

export const contact: ContactContent = {
  metaTitle: "Contact",
  metaDescription:
    "Get in touch about a bug in one of the tools, a request for a new diagnostic, or a correction to one of our guides.",
  heading: "Contact",
  lead: "Found a bug, spotted something we got wrong, or want a diagnostic we have not built yet? Send a note and we will take a look.",
  cards: [
    {
      title: "Reporting a bug",
      body: "Tell us which tool you were using, what you expected and what happened instead. If a counter did not move when you expected it to, that is the most useful detail you can give us.",
    },
    {
      title: "Requesting a tool",
      body: "There is no limit on what you can ask for. A diagnostic that measures something nobody has measured before is exactly the kind of thing that belongs here.",
    },
    {
      title: "Correcting a guide",
      body: "Every explanation on this site is written to be technically accurate. If a passage is wrong, unclear, or could mislead someone into buying the wrong part, we want to know.",
    },
  ],
  messageHeading: "Send us a message",
  messageBody:
    "Email {email}. We read everything and reply to most messages within a couple of working days.",
  messageNote:
    "Please do not send personal information or details about your device configuration. Nothing you send is needed to diagnose a tool, and we would rather you did not.",
};


export const privacy: PrivacyContent = {
  metaTitle: "Privacy policy",
  metaDescription:
    "What MouseLab collects, what it does not, and what happens to the measurement data you generate.",
  heading: "Privacy policy",
  lastUpdated: "Last updated 22 November 2026",
  sections: [
    {
      heading: "Measurement data stays on your device",
      body: "When you run a test, the clicks, key presses, scroll events and pointer samples are counted in the memory of the open browser tab. They are not transmitted anywhere. Closing or reloading the tab discards them permanently. We cannot recover a reading you took yesterday, because it was never stored.",
    },
    {
      heading: "No accounts, no identifiers",
      body: "There is no sign-up, no login and no user profile. We do not ask for an email address to use a tool, and we do not create a persistent identifier tied to your device or browser for measurement purposes.",
    },
    {
      heading: "Site analytics",
      body: "We use privacy-respecting analytics to understand which pages and tools are useful and which need work. These record aggregate page views, referrer information and coarse device and country information. They do not record the content of your test sessions, and they are not used to build an advertising profile of you.",
    },
    {
      heading: "Advertising",
      body: "This site is funded by advertising, and we use Google AdSense to serve it. Google and its partners may set cookies or use similar technologies to serve and measure ads. You can control how personalised advertising is used through your browser settings, through Google's Ads Settings page, and through the options provided by Google for Google Advertising, Google's Privacy and Terms page, and aboutads.info for participating third-party vendors.",
    },
    {
      heading: "Third-party content",
      body: "Advertising scripts are only loaded once you interact with the page, which keeps them from running before you have shown any sign of engagement. Fonts are served from our own domain, so no request to a font provider is made when you open a page.",
    },
    {
      heading: "Contact",
      body: "If you have a question about this policy or want something removed, email hello@mouselab.io and we will deal with it.",
    },
  ],
  copyright: "© {year} {brand}",
};
