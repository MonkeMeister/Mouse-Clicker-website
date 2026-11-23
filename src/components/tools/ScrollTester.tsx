"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { ScrollTesterLabels } from "@/content/types";
import { analyseWheel, type WheelSample } from "@/lib/analysis";

const DURATIONS = [5, 10, 15, 30];
const MAX_SAMPLES = 5000;
const CHART_SAMPLES = 60;

export function ScrollTester({ labels }: { labels: ScrollTesterLabels }) {
  const [samples, setSamples] = useState<WheelSample[]>([]);
  const [deltaMode, setDeltaMode] = useState<number | null>(null);
  const [running, setRunning] = useState(false);
  const [secondsLeft, setSecondsLeft] = useState(0);
  const [started, setStarted] = useState(false);

  const timer = useRef<ReturnType<typeof setInterval> | null>(null);
  const surface = useRef<HTMLDivElement>(null);

  const analysis = useMemo(() => analyseWheel(samples), [samples]);
  const chart = useMemo(() => samples.slice(-CHART_SAMPLES), [samples]);

  const reset = useCallback(() => {
    setSamples([]);
    setDeltaMode(null);
    setStarted(false);
  }, []);

  const stop = useCallback(() => {
    setRunning(false);
    if (timer.current) {
      clearInterval(timer.current);
      timer.current = null;
    }
  }, []);

  const start = useCallback(
    (duration: number) => {
      reset();
      setRunning(true);
      setSecondsLeft(duration);
      timer.current = setInterval(() => {
        setSecondsLeft((value) => {
          if (value <= 1) {
            stop();
            return 0;
          }
          return value - 1;
        });
      }, 1000);
    },
    [reset, stop],
  );

  useEffect(() => () => stop(), [stop]);

  const handleWheel = useCallback((event: WheelEvent) => {
    // Native non-passive listener: React's synthetic onWheel is registered as
    // a passive root listener, so preventDefault() there is a no-op and the
    // page would scroll out from under the cursor.
    event.preventDefault();

    if (event.deltaY === 0) return;

    setSamples((current) => {
      const next = [...current, { delta: event.deltaY, t: performance.now() }];
      return next.length > MAX_SAMPLES ? next.slice(-MAX_SAMPLES) : next;
    });
    setDeltaMode(event.deltaMode);
  }, []);

  useEffect(() => {
    const node = surface.current;
    if (!node) return;
    node.addEventListener("wheel", handleWheel, { passive: false });
    return () => node.removeEventListener("wheel", handleWheel);
  }, [handleWheel]);

  const { up, down, total, reverse, avgMagnitude, maxMagnitude, isNotched } =
    analysis;

  const verdict = !started
    ? null
    : reverse > 0
      ? {
          tone: "border-amber-300 bg-amber-50 text-amber-900",
          title: labels.verdictReverse.title.replace("{n}", String(reverse)),
          body: labels.verdictReverse.body,
        }
      : total === 0
        ? {
            tone: "border-ink-200 bg-ink-50 text-ink-700",
            title: labels.verdictNone.title,
            body: labels.verdictNone.body,
          }
        : {
            tone: "border-emerald-300 bg-emerald-50 text-emerald-900",
            title: labels.verdictOk.title,
            body: labels.verdictOk.body.replace("{n}", String(total)),
          };

  return (
    <div className="overflow-hidden rounded-2xl border border-ink-200 bg-white shadow-sm">
      <div className="flex flex-wrap items-center gap-3 border-b border-ink-200 p-4">
        <div className="flex items-center gap-1.5">
          {DURATIONS.map((value) => (
            <button
              key={value}
              type="button"
              onClick={() => start(value)}
              disabled={running}
              className={`rounded-lg px-3 py-2 text-[14px] font-medium transition-colors ${
                running
                  ? "bg-ink-100 text-ink-400"
                  : "bg-ink-100 text-ink-700 hover:bg-brand-100 hover:text-brand-700"
              }`}
            >
              {value}s
            </button>
          ))}
        </div>
        <button
          type="button"
          onClick={() => (running ? stop() : start(15))}
          className="rounded-lg bg-brand-600 px-4 py-2 text-[14px] font-semibold text-white transition-colors hover:bg-brand-700"
        >
          {running ? labels.stop : labels.start}
        </button>
        <button
          type="button"
          onClick={reset}
          className="rounded-lg border border-ink-200 px-3 py-2 text-[14px] font-medium text-ink-600 transition-colors hover:bg-ink-50"
        >
          {labels.reset}
        </button>
        {running && (
          <span className="ml-auto font-mono text-sm font-semibold tabular-nums text-brand-700">
            {labels.secondsLeft.replace("{n}", String(secondsLeft))}
          </span>
        )}
      </div>

      <div className="grid gap-0 lg:grid-cols-[minmax(0,1fr)_320px]">
        {/* -------- Test surface -------- */}
        <div
          ref={surface}
          className="relative flex min-h-[320px] cursor-ns-resize flex-col items-center justify-center gap-4 bg-ink-50 p-8"
        >
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <div className="flex flex-col items-center gap-1 text-center opacity-30">
              <svg viewBox="0 0 24 24" fill="none" className="h-10 w-10" aria-hidden="true">
                <rect x="8" y="3" width="8" height="18" rx="4" stroke="currentColor" strokeWidth="1.6" />
                <path d="M12 6v4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
              <p className="text-[13px] font-medium uppercase tracking-[0.1em] text-ink-600">
                {labels.scrollHere}
              </p>
            </div>
          </div>

          {/* live event strip */}
          <div className="relative z-10 flex h-32 w-full items-center gap-[2px] overflow-hidden rounded-lg border border-ink-200 bg-white px-2 pt-3 pb-2">
            <div className="absolute inset-x-2 top-1/2 h-px bg-ink-200" />
            {chart.length === 0 && (
              <p className="relative z-10 m-auto text-[13px] text-ink-400">
                {labels.emptyChart}
              </p>
            )}
            {chart.map((sample, index) => {
              const height = Math.max(
                6,
                (Math.abs(sample.delta) / Math.max(maxMagnitude, 1)) * 52,
              );
              const upBar = sample.delta < 0;
              return (
                <div
                  key={`${sample.t}-${index}`}
                  className={`z-10 flex-1 rounded-sm ${
                    upBar ? "bg-brand-400" : "bg-ink-700"
                  }`}
                  style={
                    upBar
                      ? {
                          height: `${height}px`,
                          alignSelf: "flex-end",
                          marginBottom: "50%",
                        }
                      : {
                          height: `${height}px`,
                          alignSelf: "flex-start",
                          marginTop: "50%",
                        }
                  }
                />
              );
            })}
          </div>
          <p className="relative z-10 text-[13px] text-ink-500">
            {labels.noScrollNote}
          </p>
        </div>

        {/* -------- Readout -------- */}
        <div className="border-t border-ink-200 p-6 lg:border-l lg:border-t-0">
          <h2 className="text-[13px] font-semibold uppercase tracking-[0.1em] text-ink-500">
            {labels.readout}
          </h2>

          <dl className="mt-4 grid grid-cols-2 gap-2.5">
            {[
              { label: labels.stats.up, value: up },
              { label: labels.stats.down, value: down },
              { label: labels.stats.reverse, value: reverse, warn: reverse > 0 },
              { label: labels.stats.total, value: total },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-lg border border-ink-200 bg-white px-3.5 py-3"
              >
                <dt className="text-[11px] font-medium uppercase tracking-[0.08em] text-ink-400">
                  {item.label}
                </dt>
                <dd
                  className={`mt-1 font-mono text-2xl font-semibold tabular-nums ${
                    item.warn ? "text-amber-600" : "text-ink-900"
                  }`}
                >
                  {item.value}
                </dd>
              </div>
            ))}
          </dl>

          <dl className="mt-4 space-y-2 border-t border-ink-200 pt-4 text-[14px]">
            <div className="flex justify-between gap-4">
              <dt className="text-ink-500">{labels.averageStep}</dt>
              <dd className="font-mono tabular-nums text-ink-900">
                {avgMagnitude ? avgMagnitude.toFixed(1) : "—"}
              </dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt className="text-ink-500">{labels.deltaMode}</dt>
              <dd className="font-mono tabular-nums text-ink-900">
                {deltaMode === null
                  ? "—"
                  : deltaMode === 0
                    ? labels.deltaPixel
                    : deltaMode === 1
                      ? labels.deltaLine
                      : labels.deltaPage}
              </dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt className="text-ink-500">{labels.deviceType}</dt>
              <dd className="font-mono tabular-nums text-ink-900">
                {!total ? "—" : isNotched ? labels.deviceNotched : labels.deviceSmooth}
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
