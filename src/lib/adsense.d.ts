/**
 * The queue Google AdSense uses to collect ad requests before its library has
 * loaded. The library replaces it on load and drains whatever is in it.
 */
declare global {
  interface Window {
    adsbygoogle?: unknown[];
  }
}

export {};
