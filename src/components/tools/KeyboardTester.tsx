"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { KeyboardTesterLabels } from "@/content/types";
import { evaluateRollover } from "@/lib/analysis";

const ROWS: string[][] = [
  ["`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Backspace"],
  ["Tab", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "\\"],
  ["Caps", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", "Enter"],
  ["Shift", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/", "Shift"],
  ["Ctrl", "Alt", "Space", "Alt", "Ctrl"],
];

const KEY_WIDTH: Record<string, string> = {
  Backspace: "col-span-2",
  Tab: "col-span-2",
  Caps: "col-span-2",
  Enter: "col-span-2",
  Shift: "col-span-2",
  Space: "col-span-6",
  Ctrl: "col-span-2",
  Alt: "col-span-2",
};

const ROLLOVER_SETS = [
  ["q", "w", "e", "r", "t", "y"],
  ["a", "s", "d", "f", "g", "h"],
  ["z", "x", "c", "v", "b", "n"],
  ["1", "2", "3", "4", "5", "6"],
];

export function KeyboardTester({ labels }: { labels: KeyboardTesterLabels }) {
  const [tab, setTab] = useState<"check" | "rollover">("check");
  const [held, setHeld] = useState<Set<string>>(new Set());
  const [lastKey, setLastKey] = useState<{ key: string; code: string } | null>(null);
  const [history, setHistory] = useState<string[]>([]);
  const [repeats, setRepeats] = useState(0);

  const [level, setLevel] = useState(3);
  const [round, setRound] = useState(0);
  const [registered, setRegistered] = useState<Set<string>>(new Set());

  const heldRef = useRef<Set<string>>(new Set());

  const targets = useMemo(
    () => ROLLOVER_SETS[round % ROLLOVER_SETS.length].slice(0, level),
    [round, level],
  );

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      const code = event.code;
      const key = event.key.length === 1 ? event.key.toLowerCase() : event.key;

      setLastKey({ key: event.key, code });

      if (heldRef.current.has(code)) {
        setRepeats((value) => value + 1);
        return;
      }
      heldRef.current.add(code);
      setHeld(new Set(heldRef.current));
      setHistory((current) => [key, ...current].slice(0, 12));

      if (targets.includes(key)) {
        setRegistered((current) => new Set(current).add(key));
      }
    },
    [targets],
  );

  const handleKeyUp = useCallback((event: KeyboardEvent) => {
    heldRef.current.delete(event.code);
    setHeld(new Set(heldRef.current));
  }, []);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [handleKeyDown, handleKeyUp]);

  function resetRollover() {
    setRegistered(new Set());
    setRound((value) => value + 1);
  }

  const rollover = useMemo(
    () => evaluateRollover(targets, registered),
    [targets, registered],
  );

  return (
    <div className="overflow-hidden rounded-2xl border border-ink-200 bg-white shadow-sm">
      <div className="flex items-center gap-1 border-b border-ink-200 p-2">
        {(
          [
            ["check", labels.tabCheck],
            ["rollover", labels.tabRollover],
          ] as const
        ).map(([value, label]) => (
          <button
            key={value}
            type="button"
            onClick={() => setTab(value)}
            className={`rounded-lg px-4 py-2 text-[14px] font-medium transition-colors ${
              tab === value
                ? "bg-brand-600 text-white"
                : "text-ink-600 hover:bg-ink-100"
            }`}
          >
            {label}
          </button>
        ))}
        {tab === "check" && held.size > 0 && (
          <span className="ml-auto pr-2 text-[13px] text-ink-500">
            {labels.keysHeld.replace("{n}", String(held.size))}
          </span>
        )}
      </div>

      {tab === "check" ? (
        <div className="p-5 sm:p-7">
          <div className="grid gap-5">
            {ROWS.map((row, rowIndex) => (
              <div key={rowIndex} className="flex gap-1.5">
                {row.map((key, colIndex) => {
                  const isHeld = Array.from(held).some(
                    (code) =>
                      code === `Key${key.toUpperCase()}` ||
                      code === `Digit${key}` ||
                      (key.length === 1 && code === `Key${key.toUpperCase()}`),
                  );
                  const isLast = lastKey?.key.toLowerCase() === key.toLowerCase();
                  return (
                    <span
                      key={`${rowIndex}-${colIndex}-${key}`}
                      className={`flex h-10 flex-1 items-center justify-center rounded-md border text-[12px] font-medium transition-colors ${
                        KEY_WIDTH[key] ?? ""
                      } ${
                        isHeld
                          ? "border-brand-400 bg-brand-500 text-white"
                          : isLast
                            ? "border-brand-300 bg-brand-50 text-brand-700"
                            : "border-ink-200 bg-ink-50 text-ink-500"
                      }`}
                    >
                      {key === " " ? labels.spaceKey : key}
                    </span>
                  );
                })}
              </div>
            ))}
          </div>

          <div className="mt-6 grid gap-4 border-t border-ink-200 pt-5 sm:grid-cols-2">
            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.08em] text-ink-400">
                {labels.lastKey}
              </p>
              <p className="mt-1 font-mono text-lg font-semibold text-ink-900">
                {lastKey ? lastKey.key : "—"}
              </p>
              <p className="mt-0.5 font-mono text-[13px] text-ink-500">
                {lastKey ? lastKey.code : labels.pressAnyKey}
              </p>
            </div>
            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.08em] text-ink-400">
                {labels.recentPresses}
              </p>
              <p className="mt-1 font-mono text-lg font-semibold text-ink-900">
                {history.length ? history.join(" ") : "—"}
              </p>
              <p className="mt-0.5 text-[13px] text-ink-500">
                {repeats > 0
                  ? labels.repeatDetected.replace("{n}", String(repeats))
                  : labels.noRepeats}
              </p>
            </div>
          </div>

          <p className="mt-5 text-[13px] leading-6 text-ink-400">
            {labels.focusHint}
          </p>
        </div>
      ) : (
        <div className="p-5 sm:p-7">
          <p className="text-[15px] leading-7 text-ink-600">
            {labels.rolloverIntro.replace("{n}", String(level))}
          </p>

          <div className="mt-6 flex flex-wrap gap-1.5">
            {targets.map((target) => (
              <span
                key={target}
                className={`flex h-12 w-12 items-center justify-center rounded-lg border text-[15px] font-semibold uppercase transition-colors ${
                  registered.has(target)
                    ? "border-emerald-400 bg-emerald-50 text-emerald-700"
                    : "border-ink-200 bg-ink-50 text-ink-400"
                }`}
              >
                {target}
              </span>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-4 border-t border-ink-200 pt-5">
            <div className="flex items-center gap-1.5">
              <span className="text-[13px] text-ink-500">{labels.keysLabel}</span>
              {[3, 4, 5, 6].map((value) => (
                <button
                  key={value}
                  type="button"
                  onClick={() => {
                    setLevel(value);
                    setRegistered(new Set());
                  }}
                  className={`rounded-lg px-3 py-1.5 text-[14px] font-medium transition-colors ${
                    level === value
                      ? "bg-brand-600 text-white"
                      : "bg-ink-100 text-ink-600 hover:bg-ink-200"
                  }`}
                >
                  {value}
                </button>
              ))}
            </div>
            <button
              type="button"
              onClick={resetRollover}
              className="rounded-lg border border-ink-200 px-4 py-2 text-[14px] font-medium text-ink-600 transition-colors hover:bg-ink-50"
            >
              {labels.nextCombination}
            </button>
            <span className="ml-auto text-[14px] font-medium text-ink-600">
              {labels.registered.replace("{a}", String(rollover.registered)).replace("{b}", String(rollover.required))}
            </span>
          </div>

          {rollover.passed && (
            <div className="mt-5 rounded-xl border border-emerald-300 bg-emerald-50 p-4">
              <p className="text-[15px] font-semibold text-emerald-900">
                {labels.allRegistered.replace("{n}", String(level))}
              </p>
              <p className="mt-1 text-[14px] leading-6 text-emerald-900/90">
                {labels.allRegisteredBody.replace("{n}", String(level))}
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
