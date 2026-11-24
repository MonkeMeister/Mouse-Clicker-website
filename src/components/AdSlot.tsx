"use client";

import { useEffect } from "react";
import { ADSENSE } from "@/lib/site";

/**
 * Ad slot.
 *
 * Renders a Google AdSense unit when a slot ID has been configured for that
 * placement, and the neutral placeholder until then, so a missing slot ID
 * never leaves a broken frame on the page.
 *
 * Placement rule for this site: no ad ever renders above the tool. The
 * interactive tester is always the first thing on the page, and ad slots come
 * after the result the user came for.
 */
export function AdSlot({
  variant = "leaderboard",
  className = "",
  label = "Advertisement",
}: {
  variant?: "leaderboard" | "rectangle";
  className?: string;
  /** Localised label shown inside the reserved slot. */
  label?: string;
}) {
  const slot = ADSENSE.slots[variant];
  const configured = Boolean(slot);

  /*
   * Google's documented pattern: one push for every ad unit on the page.
   * The push lands in the queue if the library has not loaded yet, and the
   * library drains the queue when it arrives.
   */
  useEffect(() => {
    if (!configured) return;
    try {
      const queue = (window.adsbygoogle = window.adsbygoogle || []);
      queue.push({});
    } catch {
      /* Advertising blocked. The reserved space simply stays empty. */
    }
  }, [configured]);

  const height = variant === "leaderboard" ? "h-[90px]" : "h-[250px]";
  const minHeight = variant === "leaderboard" ? "min-h-[90px]" : "min-h-[250px]";

  return (
    <aside
      aria-label={label}
      className={`w-full overflow-hidden rounded-xl border border-ink-200 bg-white ${className}`}
    >
      {configured ? (
        /*
         * The space is reserved with a minimum rather than a fixed height, so
         * a taller ad grows the slot instead of being clipped by the rounded
         * corners.
         */
        <div className={`flex w-full items-center justify-center ${minHeight}`}>
          <ins
            className="adsbygoogle block w-full"
            style={{ display: "block" }}
            data-ad-client={ADSENSE.client}
            data-ad-slot={slot}
            data-ad-format="auto"
            data-full-width-responsive="true"
          />
        </div>
      ) : (
        <div
          className={`flex w-full items-center justify-center ${height} bg-ink-50`}
          data-ad-slot="pending"
        >
          <span className="text-[11px] font-medium uppercase tracking-[0.14em] text-ink-400">
            {label}
          </span>
        </div>
      )}
    </aside>
  );
}
