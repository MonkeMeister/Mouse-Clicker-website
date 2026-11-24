"use client";

import { useEffect } from "react";

/**
 * Events that count as the visitor interacting with the page.
 *
 * `scroll` is included because plenty of people read a page without ever
 * clicking anything, and a pointer that never moves still generates a wheel
 * event.
 */
const INTERACTION_EVENTS = [
  "pointerdown",
  "keydown",
  "touchstart",
  "wheel",
  "scroll",
] as const;

/**
 * Loads the Google AdSense script.
 *
 * The script is deliberately not in the document until the visitor interacts
 * with the page. That keeps the third-party request off the critical path, so
 * the tools stay fast, and it matches what the privacy policy says: the
 * advertising script only runs once you have shown some sign of engagement.
 *
 * The script itself is the one Google supplies, unmodified.
 */
export function AdSenseLoader({ client }: { client: string }) {
  useEffect(() => {
    if (!client) return;
    if (document.getElementById("mouselab-adsense")) return;

    let done = false;

    const load = () => {
      if (done) return;
      done = true;

      for (const event of INTERACTION_EVENTS) {
        window.removeEventListener(event, load);
      }

      /* The queue has to exist before the library arrives. */
      window.adsbygoogle = window.adsbygoogle || [];

      const script = document.createElement("script");
      script.async = true;
      script.crossOrigin = "anonymous";
      /*
       * The publisher ID travels in the query string, exactly like the
       * snippet Google hands out. AdSense rejects every `data-*` attribute on
       * this tag, so the only marker here is an id it does not inspect.
       */
      script.id = "mouselab-adsense";
      script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${encodeURIComponent(
        client,
      )}`;
      document.head.appendChild(script);
    };

    for (const event of INTERACTION_EVENTS) {
      window.addEventListener(event, load, { once: true, passive: true });
    }

    return () => {
      done = true;
      for (const event of INTERACTION_EVENTS) {
        window.removeEventListener(event, load);
      }
    };
  }, [client]);

  return null;
}
