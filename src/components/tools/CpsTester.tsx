"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { CpsTesterLabels } from "@/content/types";

const DURATIONS = [1, 5, 10, 15, 30, 60];

export function CpsTester({ labels }: { labels: CpsTesterLabels }) {
  const [duration, setDuration] = useState(10);
  const [phase, setPhase] = useState<"idle" | "countdown" | "running" | "done">("idle");
  const [countdown, setCountdown] = useState(3);
  const [clicks, setClicks] = useState(0);
  const [times, setTimes] = useState<number[]>([]);
  const [best, setBest] = useState(0);
  const [elapsed, setElapsed] = useState(0);

  const startAt = useRef(0);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  const clearTimer = useCallback(() => {
    if (timer.current) {
      clearInterval(timer.current);
      timer.current = null;
    }
  }, []);

  useEffect(() => () => clearTimer(), [clearTimer]);

  const reset = useCallback(() => {
    clearTimer();
    setPhase("idle");
    setClicks(0);
    setTimes([]);
    setCountdown(3);
    setElapsed(0);
  }, [clearTimer]);

  const beginCountdown = useCallback(() => {
    setPhase("countdown");
    setCountdown(3);
    setClicks(0);
    setTimes([]);
    setElapsed(0);
    let value = 3;
    clearTimer();
    timer.current = setInterval(() => {
      value -= 1;
      if (value <= 0) {
        clearTimer();
        setPhase("running");
        startAt.current = performance.now();
        timer.current = setInterval(() => {
          setElapsed(performance.now() - startAt.current);
        }, 100);
      } else {
        setCountdown(value);
      }
    }, 700);
  }, [clearTimer]);

  const finish = useCallback(() => {
    clearTimer();
    setPhase("done");
    setElapsed(performance.now() - startAt.current);
  }, [clearTimer]);

  useEffect(() => {
    if (phase !== "running") return;
    const id = setTimeout(finish, duration * 1000);
    return () => clearTimeout(id);
  }, [phase, duration, finish]);

  const handleClick = useCallback(() => {
    if (phase !== "running") return;
    setClicks((value) => value + 1);
    setTimes((current) => [...current, performance.now()]);
  }, [phase]);

  const averageCps = elapsed > 0 ? (clicks / (elapsed / 1000)) : 0;

  const liveCps = (() => {
    if (times.length === 0) return 0;
    const cutoff = performance.now() - 1000;
    return times.filter((time) => time >= cutoff).length;
  })();

  // Per-second buckets for the chart
  const buckets: number[] = [];
  if (times.length) {
    const first = times[0];
    const count = Math.max(1, Math.ceil((performance.now() - first) / 1000));
    for (let i = 0; i < count; i += 1) {
      const start = first + i * 1000;
      buckets.push(times.filter((time) => time >= start && time < start + 1000).length);
    }
  }
  const maxBucket = Math.max(...buckets, 1);

  function registerBest() {
    if (averageCps > best) setBest(averageCps);
  }

  useEffect(() => {
    if (phase === "done") registerBest();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase]);

  return (
    <div className="overflow-hidden rounded-2xl border border-ink-200 bg-white shadow-sm">
      <div className="flex flex-wrap items-center gap-3 border-b border-ink-200 p-4">
        <div className="flex flex-wrap items-center gap-1.5">
          {DURATIONS.map((value) => (
            <button
              key={value}
              type="button"
              onClick={() => {
                setDuration(value);
                reset();
              }}
              disabled={phase === "running" || phase === "countdown"}
              className={`rounded-lg px-3 py-2 text-[14px] font-medium transition-colors ${
                phase === "running" || phase === "countdown"
                  ? "bg-ink-100 text-ink-400"
                  : duration === value
                    ? "bg-brand-600 text-white"
                    : "bg-ink-100 text-ink-700 hover:bg-brand-100 hover:text-brand-700"
              }`}
            >
              {value}s
            </button>
          ))}
        </div>
        <button
          type="button"
          onClick={phase === "running" || phase === "countdown" ? reset : beginCountdown}
          className="rounded-lg bg-brand-600 px-4 py-2 text-[14px] font-semibold text-white transition-colors hover:bg-brand-700"
        >
          {phase === "running" || phase === "countdown" ? labels.cancel : labels.start}
        </button>
        <button
          type="button"
          onClick={reset}
          className="rounded-lg border border-ink-200 px-3 py-2 text-[14px] font-medium text-ink-600 transition-colors hover:bg-ink-50"
        >
          {labels.reset}
        </button>
        {best > 0 && (
          <span className="ml-auto text-[13px] text-ink-500">
            {labels.best.replace("{n}", best.toFixed(2))}
          </span>
        )}
      </div>

      <div className="grid gap-0 lg:grid-cols-[minmax(0,1fr)_320px]">
        {/* -------- Click surface -------- */}
        <div
          onClick={handleClick}
          className="relative flex min-h-[300px] cursor-pointer select-none flex-col items-center justify-center gap-3 bg-ink-50 p-8"
        >
          {phase === "countdown" && (
            <span className="font-mono text-7xl font-bold tabular-nums text-brand-600">
              {countdown}
            </span>
          )}
          {phase === "running" && (
            <>
              <span className="font-mono text-6xl font-bold tabular-nums text-ink-900">
                {clicks}
              </span>
              <span className="text-[14px] font-medium uppercase tracking-[0.12em] text-ink-400">
                {labels.clicks}
              </span>
            </>
          )}
          {phase === "idle" && (
            <>
              <span className="font-mono text-6xl font-bold tabular-nums text-ink-300">0</span>
              <span className="text-[14px] text-ink-500">
                {labels.pressStart}
              </span>
            </>
          )}
          {phase === "done" && (
            <>
              <span className="font-mono text-6xl font-bold tabular-nums text-ink-900">
                {averageCps.toFixed(2)}
              </span>
              <span className="text-[14px] font-medium uppercase tracking-[0.12em] text-ink-400">
                {labels.clicksPerSecond}
              </span>
              <span className="text-[14px] text-ink-500">
                {labels.clicksIn.replace("{n}", String(clicks)).replace("{s}", String(duration))}
              </span>
            </>
          )}
        </div>

        {/* -------- Readout -------- */}
        <div className="border-t border-ink-200 p-6 lg:border-l lg:border-t-0">
          <h2 className="text-[13px] font-semibold uppercase tracking-[0.1em] text-ink-500">
            {labels.readout}
          </h2>

          <div className="mt-4 grid grid-cols-2 gap-2.5">
            <div className="rounded-lg border border-ink-200 bg-white px-3.5 py-3">
              <div className="text-[11px] font-medium uppercase tracking-[0.08em] text-ink-400">
                {labels.liveCps}
              </div>
              <div className="mt-1 font-mono text-2xl font-semibold tabular-nums text-brand-600">
                {liveCps}
              </div>
            </div>
            <div className="rounded-lg border border-ink-200 bg-white px-3.5 py-3">
              <div className="text-[11px] font-medium uppercase tracking-[0.08em] text-ink-400">
                {labels.average}
              </div>
              <div className="mt-1 font-mono text-2xl font-semibold tabular-nums text-ink-900">
                {averageCps.toFixed(2)}
              </div>
            </div>
          </div>

          <div className="mt-5">
            <p className="text-[11px] font-medium uppercase tracking-[0.08em] text-ink-400">
              {labels.chartLabel}
            </p>
            <div className="mt-2 flex h-24 items-end gap-1">
              {buckets.length === 0 && (
                <p className="m-auto text-[13px] text-ink-400">{labels.noClicks}</p>
              )}
              {buckets.map((value, index) => (
                <div
                  key={index}
                  className="flex-1 rounded-t bg-brand-400"
                  style={{ height: `${Math.max(4, (value / maxBucket) * 88)}px` }}
                  title={labels.barTitle.replace("{n}", String(index + 1)).replace("{v}", String(value))}
                />
              ))}
            </div>
          </div>

          <p className="mt-5 text-[13px] leading-6 text-ink-400">
            The score counts the clicks your browser received, not switch
            latency. Nothing is uploaded.
          </p>
        </div>
      </div>
    </div>
  );
}
