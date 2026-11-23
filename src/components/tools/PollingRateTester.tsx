"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { PollingRateTesterLabels } from "@/content/types";
import {
  pollingRateInWindow,
  summarisePolling,
  type PollingMethod,
} from "@/lib/analysis";

type CoalescedLike = { timeStamp: number };

const MAX_TIMESTAMPS = 6000;

export function PollingRateTester({ labels }: { labels: PollingRateTesterLabels }) {
  const [rates, setRates] = useState<number[]>([]);
  const [peak, setPeak] = useState(0);
  const [total, setTotal] = useState(0);
  const [method, setMethod] = useState<PollingMethod | null>(null);
  const [active, setActive] = useState(false);

  const timestamps = useRef<number[]>([]);
  const sawRaw = useRef(false);
  const rafId = useRef<number | null>(null);
  const surface = useRef<HTMLDivElement>(null);

  const measure = useCallback(() => {
    const now = performance.now();
    const rate = pollingRateInWindow(timestamps.current, now);
    setRates((current) => [...current.slice(-59), rate]);
    setPeak((current) => (rate > current ? rate : current));
    rafId.current = requestAnimationFrame(measure);
  }, []);

  const handlePointerMove = useCallback((event: PointerEvent) => {
    const native = event as PointerEvent & {
      getCoalescedEvents?: () => CoalescedLike[];
    };

    let events: CoalescedLike[] = [];
    if (typeof native.getCoalescedEvents === "function") {
      const coalesced = native.getCoalescedEvents();
      if (coalesced.length > 0) {
        events = coalesced;
        if (coalesced.length > 1) sawRaw.current = true;
      }
    }
    if (events.length === 0) events = [{ timeStamp: native.timeStamp }];

    for (const item of events) {
      timestamps.current.push(item.timeStamp);
    }
    if (timestamps.current.length > MAX_TIMESTAMPS) {
      timestamps.current = timestamps.current.slice(-MAX_TIMESTAMPS / 2);
    }

    setTotal((value) => value + events.length);
    setMethod(sawRaw.current ? "raw" : "frame");
  }, []);

  // Native listener: pointermove is attached directly to the surface so the
  // measurement does not depend on React's delegated event plumbing.
  useEffect(() => {
    const node = surface.current;
    if (!node) return;
    node.addEventListener("pointermove", handlePointerMove);
    return () => node.removeEventListener("pointermove", handlePointerMove);
  }, [handlePointerMove]);

  useEffect(() => {
    if (!active) return;
    rafId.current = requestAnimationFrame(measure);
    return () => {
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [active, measure]);

  function reset() {
    timestamps.current = [];
    sawRaw.current = false;
    setRates([]);
    setPeak(0);
    setTotal(0);
    setMethod(null);
    setActive(false);
  }

  const summary = useMemo(
    () =>
      summarisePolling(
        total,
        rates.length,
        rates,
        method ?? "frame",
      ),
    [total, rates, method],
  );

  const maxRate = Math.max(...rates, 1);

  const verdict = !active
    ? null
    : summary.hz === 0
      ? {
          tone: "border-ink-200 bg-ink-50 text-ink-700",
          title: labels.verdictMove.title,
          body: labels.verdictMove.body,
        }
      : summary.method === "frame"
        ? {
            tone: "border-amber-300 bg-amber-50 text-amber-900",
            title: labels.verdictFrame.title,
            body: labels.verdictFrame.body,
          }
        : summary.deviation > 0.2
          ? {
              tone: "border-amber-300 bg-amber-50 text-amber-900",
              title: labels.verdictUnstable.title.replace(
                "{hz}",
                String(summary.hz),
              ),
              body: labels.verdictUnstable.body,
            }
          : {
              tone: "border-emerald-300 bg-emerald-50 text-emerald-900",
              title: labels.verdictOk.title.replace(
                "{hz}",
                String(summary.nominal),
              ),
              body: labels.verdictOk.body,
            };

  return (
    <div className="overflow-hidden rounded-2xl border border-ink-200 bg-white shadow-sm">
      <div className="flex items-center gap-3 border-b border-ink-200 p-4">
        <button
          type="button"
          onClick={() => (active ? reset() : setActive(true))}
          className="rounded-lg bg-brand-600 px-4 py-2 text-[14px] font-semibold text-white transition-colors hover:bg-brand-700"
        >
          {active ? labels.stop : labels.startMeasuring}
        </button>
        <button
          type="button"
          onClick={reset}
          className="rounded-lg border border-ink-200 px-3 py-2 text-[14px] font-medium text-ink-600 transition-colors hover:bg-ink-50"
        >
          {labels.reset}
        </button>
        <span className="ml-auto text-[13px] text-ink-500">
          {labels.rawSamples.replace("{n}", total.toLocaleString())}
        </span>
      </div>

      <div className="grid gap-0 lg:grid-cols-[minmax(0,1fr)_320px]">
        {/* -------- Movement surface -------- */}
        <div
          ref={surface}
          className="relative flex min-h-[300px] cursor-move select-none flex-col items-center justify-center gap-4 bg-ink-50 p-8"
        >
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <div className="flex flex-col items-center gap-2 text-center opacity-30">
              <svg viewBox="0 0 24 24" fill="none" className="h-10 w-10" aria-hidden="true">
                <path
                  d="M5 3l14 7-6 2-3 6z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />
              </svg>
              <p className="text-[13px] font-medium uppercase tracking-[0.1em] text-ink-600">
                {labels.moveMouse}
              </p>
            </div>
          </div>

          <div className="relative z-10 flex items-end gap-[3px]">
            {rates.map((value, index) => (
              <div
                key={index}
                className="w-1.5 rounded-t bg-brand-400"
                style={{ height: `${Math.max(4, (value / maxRate) * 70)}px` }}
              />
            ))}
          </div>

          <p className="relative z-10 text-[13px] text-ink-500">
            {labels.wideCircles}
          </p>
        </div>

        {/* -------- Readout -------- */}
        <div className="border-t border-ink-200 p-6 lg:border-l lg:border-t-0">
          <h2 className="text-[13px] font-semibold uppercase tracking-[0.1em] text-ink-500">
            {labels.readout}
          </h2>

          <div className="mt-4 grid grid-cols-2 gap-2.5">
            <div className="rounded-lg border border-ink-200 bg-white px-3.5 py-3">
              <div className="text-[11px] font-medium uppercase tracking-[0.08em] text-ink-400">
                {labels.current}
              </div>
              <div className="mt-1 font-mono text-2xl font-semibold tabular-nums text-brand-600">
                {summary.hz}
                <span className="ml-1 text-sm font-medium text-ink-400">Hz</span>
              </div>
            </div>
            <div className="rounded-lg border border-ink-200 bg-white px-3.5 py-3">
              <div className="text-[11px] font-medium uppercase tracking-[0.08em] text-ink-400">
                {labels.peak}
              </div>
              <div className="mt-1 font-mono text-2xl font-semibold tabular-nums text-ink-900">
                {Math.max(peak, summary.peak)}
                <span className="ml-1 text-sm font-medium text-ink-400">Hz</span>
              </div>
            </div>
          </div>

          <dl className="mt-4 space-y-2 border-t border-ink-200 pt-4 text-[14px]">
            <div className="flex justify-between gap-4">
              <dt className="text-ink-500">{labels.average}</dt>
              <dd className="font-mono tabular-nums text-ink-900">
                {summary.average.toFixed(0)} Hz
              </dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt className="text-ink-500">{labels.closestStandard}</dt>
              <dd className="font-mono tabular-nums text-ink-900">
                {summary.hz > 0 ? `${summary.nominal} Hz` : "—"}
              </dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt className="text-ink-500">{labels.samplingMethod}</dt>
              <dd className="font-mono tabular-nums text-ink-900">
                {method === "raw"
                  ? labels.rawCoalesced
                  : method === "frame"
                    ? labels.frameLevel
                    : "—"}
              </dd>
            </div>
          </dl>

          {verdict && (
            <div className={`mt-4 rounded-xl border p-4 ${verdict.tone}`}>
              <p className="text-[15px] font-semibold">{verdict.title}</p>
              <p className="mt-1 text-[14px] leading-6 opacity-90">{verdict.body}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
