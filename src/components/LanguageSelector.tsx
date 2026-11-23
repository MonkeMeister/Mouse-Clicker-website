"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import type { UiStrings } from "@/content/types";
import {
  LOCALES,
  stripLocalePrefix,
  switchLocalePath,
  type Locale,
} from "@/lib/i18n";

/**
 * Language switcher.
 *
 * Every option points at the same page in the target language, so switching
 * keeps the reader on the tool or article they were reading.
 */
export function LanguageSelector({
  locale,
  ui,
  compact = false,
}: {
  locale: Locale;
  ui: UiStrings;
  compact?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const pathname = usePathname() ?? "/";
  const currentPath = stripLocalePrefix(pathname);

  useEffect(() => {
    function onPointerDown(event: MouseEvent) {
      if (!ref.current?.contains(event.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", onPointerDown);
    return () => document.removeEventListener("mousedown", onPointerDown);
  }, []);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  const current = LOCALES.find((item) => item.code === locale) ?? LOCALES[0];

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-haspopup="true"
        aria-label={ui.common.chooseLanguage}
        lang={current.hreflang}
        className="inline-flex items-center gap-1.5 rounded-lg px-2.5 py-2 text-[14px] font-medium text-ink-600 transition-colors hover:bg-ink-100 hover:text-ink-900"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="h-[18px] w-[18px] shrink-0"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
          <path
            d="M3 12h18M12 3c2.4 2.6 3.6 5.6 3.6 9s-1.2 6.4-3.6 9c-2.4-2.6-3.6-5.6-3.6-9S9.6 5.6 12 3Z"
            stroke="currentColor"
            strokeWidth="1.6"
          />
        </svg>
        <span className={compact ? "sr-only" : "hidden sm:inline"}>
          {current.nativeName}
        </span>
        <svg
          viewBox="0 0 20 20"
          fill="none"
          className={`h-3.5 w-3.5 shrink-0 transition-transform ${open ? "rotate-180" : ""}`}
          aria-hidden="true"
        >
          <path
            d="M6 8l4 4 4-4"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {/*
        The links are always in the DOM and hidden with the `hidden` attribute
        rather than being mounted only when the menu opens. Search engines and
        visitors without JavaScript still find a real link to every language.
      */}
      <div
        role="menu"
        aria-label={ui.common.chooseLanguage}
        hidden={!open}
        className="absolute right-0 top-full z-50 mt-2 w-60 overflow-hidden rounded-xl border border-ink-200 bg-white p-1.5 shadow-xl shadow-ink-900/10"
      >
        <p className="px-3 pb-1 pt-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-ink-400">
          {ui.common.chooseLanguage}
        </p>
        <ul>
          {LOCALES.map((item) => {
            const active = item.code === locale;
            return (
              <li key={item.code}>
                <Link
                  href={switchLocalePath(currentPath, item.code)}
                  hrefLang={item.hreflang}
                  lang={item.hreflang}
                  role="menuitem"
                  aria-current={active ? "true" : undefined}
                  onClick={() => setOpen(false)}
                  className={`flex items-center justify-between gap-3 rounded-lg px-3 py-2 text-[14px] transition-colors ${
                    active
                      ? "bg-brand-50 font-semibold text-brand-700"
                      : "text-ink-700 hover:bg-ink-100"
                  }`}
                >
                  <span>{item.nativeName}</span>
                  <span className="text-[12px] font-normal text-ink-400">
                    {item.englishName}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
