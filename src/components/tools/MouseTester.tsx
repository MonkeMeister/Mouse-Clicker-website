"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { MouseTesterLabels } from "@/content/types";
import { detectChatter } from "@/lib/analysis";

type ButtonKey = "left" | "right" | "middle" | "forward" | "back";

type Counts = Record<ButtonKey | "double" | "total" | "up" | "down", number>;

const EMPTY: Counts = {
  left: 0,
  right: 0,
  middle: 0,
  forward: 0,
  back: 0,
  double: 0,
  total: 0,
  up: 0,
  down: 0,
};

/** Two presses of the same button inside this window are switch chatter. */
const CHATTER_WINDOW_MS = 40;
function Stat({
  label,
  value,
  tone = "default",
}: {
  label: string;
  value: number;
  tone?: "default" | "brand" | "warn";
}) {
  const toneClass =
    tone === "brand"
      ? "text-brand-600"
      : tone === "warn"
        ? "text-amber-600"
        : "text-ink-900";
  return (
    <div className="rounded-lg border border-ink-200 bg-white px-3.5 py-3">
      <div className="text-[11px] font-medium uppercase tracking-[0.08em] text-ink-400">
        {label}
      </div>
      <div className={`mt-1 font-mono text-2xl font-semibold tabular-nums ${toneClass}`}>
        {value}
      </div>
    </div>
  );
}

export function MouseTester({ labels }: { labels: MouseTesterLabels }) {
  const [counts, setCounts] = useState<Counts>(EMPTY);
  const [pressed, setPressed] = useState<ButtonKey | null>(null);
  const [chatter, setChatter] = useState(0);
  const [closestGap, setClosestGap] = useState<number | null>(null);
  const pressTimes = useRef<Record<string, number[]>>({});

  const handleMouseDown = useCallback((event: React.MouseEvent<HTMLDivElement>) => {
    const button = event.button;
    const now = performance.now();
    const key: ButtonKey =
      button === 0 ? "left" : button === 2 ? "right" : button === 1 ? "middle" : button === 3 ? "back" : "forward";

    // Middle and right clicks open menus / new tabs — swallow them here.
    if (button !== 0) event.preventDefault();

    const previous = pressTimes.current[key] ?? [];
    pressTimes.current[key] = [...previous, now];
    const result = detectChatter(pressTimes.current, CHATTER_WINDOW_MS);
    setChatter(result.chatterEvents);
    setClosestGap(result.closestGap);

    setPressed(key);
    setCounts((c) => ({ ...c, [key]: c[key] + 1, total: c.total + 1 }));
  }, []);

  const handleMouseUp = useCallback(() => setPressed(null), []);

  const handleClick = useCallback((event: React.MouseEvent<HTMLDivElement>) => {
    if (event.detail === 2) {
      setCounts((c) => ({ ...c, double: c.double + 1 }));
    }
  }, []);

  const handleContextMenu = useCallback((event: React.MouseEvent) => {
    event.preventDefault();
  }, []);

  const handleWheel = useCallback((event: React.WheelEvent<HTMLDivElement>) => {
    event.preventDefault();
    setCounts((c) =>
      event.deltaY > 0 ? { ...c, down: c.down + 1 } : { ...c, up: c.up + 1 },
    );
  }, []);

  const reset = useCallback(() => {
    setCounts(EMPTY);
    setChatter(0);
    setClosestGap(null);
    setPressed(null);
    pressTimes.current = {};
  }, []);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") reset();
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [reset]);

  const zoneFill = (key: ButtonKey, base: string) =>
    pressed === key ? "var(--color-brand-500)" : base;

  const verdict = chatter > 0
    ? {
        tone: "border-amber-300 bg-amber-50 text-amber-900",
        title: labels.verdictChatter.title.replace(
          "{count}",
          String(chatter),
        ),
        body: labels.verdictChatter.body.replace(
          "{gap}",
          closestGap === null ? "under 40" : closestGap.toFixed(0),
        ),
      }
    : counts.total === 0
      ? null
      : {
          tone: "border-emerald-300 bg-emerald-50 text-emerald-900",
          title: labels.verdictClean.title,
          body: labels.verdictClean.body,
        };

  return (
    <div className="overflow-hidden rounded-2xl border border-ink-200 bg-white shadow-sm">
      <div className="grid gap-0 lg:grid-cols-[minmax(0,1fr)_340px]">
        {/* -------- Test surface -------- */}
        <div
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onClick={handleClick}
          onContextMenu={handleContextMenu}
          onWheel={handleWheel}
          className="relative flex cursor-crosshair select-none flex-col items-center justify-center gap-6 bg-ink-50 p-8 sm:p-12"
        >
          <svg viewBox="0 0 120 180" className="h-52 w-auto sm:h-64" aria-hidden="true">
            {/* body */}
            <path
              d="M30 54 H90 V138 A30 30 0 0 1 60 168 A30 30 0 0 1 30 138 Z"
              fill="#ffffff"
              stroke="#cbd5e1"
              strokeWidth="2"
            />
            {/* left button */}
            <path
              d="M30 40 V38 A30 30 0 0 1 60 8 V54 H30 Z"
              fill={zoneFill("left", "#e2e8f0")}
              stroke="#cbd5e1"
              strokeWidth="1.5"
            />
            {/* right button */}
            <path
              d="M90 40 V38 A30 30 0 0 0 60 8 V54 H90 Z"
              fill={zoneFill("right", "#e2e8f0")}
              stroke="#cbd5e1"
              strokeWidth="1.5"
            />
            {/* scroll wheel */}
            <rect
              x="54"
              y="18"
              width="12"
              height="30"
              rx="6"
              fill={zoneFill("middle", "#94a3b8")}
              stroke="#64748b"
              strokeWidth="1.2"
            />
            {/* side buttons */}
            <rect
              x="23"
              y="64"
              width="8"
              height="22"
              rx="4"
              fill={zoneFill("back", "#e2e8f0")}
              stroke="#cbd5e1"
              strokeWidth="1.2"
            />
            <rect
              x="23"
              y="94"
              width="8"
              height="22"
              rx="4"
              fill={zoneFill("forward", "#e2e8f0")}
              stroke="#cbd5e1"
              strokeWidth="1.2"
            />
          </svg>

          <p className="max-w-sm text-center text-[14px] leading-6 text-ink-500">
            {labels.panelHint}
          </p>
        </div>

        {/* -------- Counters -------- */}
        <div className="border-t border-ink-200 p-6 lg:border-l lg:border-t-0">
          <div className="flex items-center justify-between">
            <h2 className="text-[13px] font-semibold uppercase tracking-[0.1em] text-ink-500">
              {labels.liveCounters}
            </h2>
            <button
              type="button"
              onClick={reset}
              className="rounded-lg border border-ink-200 px-3 py-1.5 text-[13px] font-medium text-ink-600 transition-colors hover:bg-ink-50"
            >
              {labels.reset}
            </button>
          </div>

          <div className="mt-4 grid grid-cols-3 gap-2.5">
            <Stat label={labels.counters.left} value={counts.left} tone={counts.left ? "brand" : "default"} />
            <Stat label={labels.counters.right} value={counts.right} tone={counts.right ? "brand" : "default"} />
            <Stat label={labels.counters.middle} value={counts.middle} tone={counts.middle ? "brand" : "default"} />
            <Stat label={labels.counters.forward} value={counts.forward} tone={counts.forward ? "brand" : "default"} />
            <Stat label={labels.counters.back} value={counts.back} tone={counts.back ? "brand" : "default"} />
            <Stat label={labels.counters.double} value={counts.double} />
            <Stat label={labels.counters.up} value={counts.up} />
            <Stat label={labels.counters.down} value={counts.down} />
            <Stat label={labels.counters.total} value={counts.total} tone="brand" />
          </div>

          {verdict && (
            <div className={`mt-4 rounded-xl border p-4 ${verdict.tone}`}>
              <p className="text-[15px] font-semibold">{verdict.title}</p>
              <p className="mt-1 text-[14px] leading-6 opacity-90">{verdict.body}</p>
            </div>
          )}

          <p className="mt-4 text-[13px] leading-6 text-ink-400">
            {labels.privacyNote}
          </p>
        </div>
      </div>
    </div>
  );
}
