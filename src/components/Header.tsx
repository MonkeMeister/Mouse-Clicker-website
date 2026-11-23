"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import type { UiStrings } from "@/content/types";
import { localePath, type Locale } from "@/lib/i18n";
import { Logo } from "./Logo";
import { LanguageSelector } from "./LanguageSelector";

export function Header({
  locale,
  ui,
  tools,
}: {
  locale: Locale;
  ui: UiStrings;
  tools: { slug: string; name: string; category: string; href: string }[];
}) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [toolsOpen, setToolsOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onPointerDown(event: MouseEvent) {
      if (!navRef.current?.contains(event.target as Node)) {
        setToolsOpen(false);
      }
    }
    document.addEventListener("mousedown", onPointerDown);
    return () => document.removeEventListener("mousedown", onPointerDown);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const links = [
    { label: ui.nav.blog, href: localePath(locale, "/blog") },
    { label: ui.nav.about, href: localePath(locale, "/about") },
    { label: ui.nav.contact, href: localePath(locale, "/contact") },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-ink-200 bg-white/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 px-4 sm:px-6 lg:px-8">
        <Logo href={localePath(locale, "/")} />

        <div ref={navRef} className="hidden items-center gap-1 md:flex">
          <Link
            href={localePath(locale, "/")}
            className="rounded-lg px-3 py-2 text-[15px] font-medium text-ink-600 transition-colors hover:bg-ink-100 hover:text-ink-900"
          >
            {ui.nav.home}
          </Link>

          <div className="relative">
            <button
              type="button"
              onClick={() => setToolsOpen((v) => !v)}
              aria-expanded={toolsOpen}
              aria-haspopup="true"
              className="inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-[15px] font-medium text-ink-600 transition-colors hover:bg-ink-100 hover:text-ink-900"
            >
              {ui.nav.tools}
              <svg
                viewBox="0 0 20 20"
                fill="none"
                className={`h-4 w-4 transition-transform ${toolsOpen ? "rotate-180" : ""}`}
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

            {toolsOpen && (
              <div className="absolute left-0 top-full mt-2 w-72 overflow-hidden rounded-xl border border-ink-200 bg-white p-2 shadow-xl shadow-ink-900/5">
                <p className="px-3 pb-1 pt-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-ink-400">
                  {ui.nav.allTools}
                </p>
                <ul>
                  {tools.map((tool) => (
                    <li key={tool.slug}>
                      <Link
                        href={tool.href}
                        onClick={() => setToolsOpen(false)}
                        className="flex flex-col rounded-lg px-3 py-2 transition-colors hover:bg-brand-50"
                      >
                        <span className="text-[15px] font-medium text-ink-900">
                          {tool.name}
                        </span>
                        <span className="text-[13px] text-ink-500">
                          {tool.category}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-lg px-3 py-2 text-[15px] font-medium text-ink-600 transition-colors hover:bg-ink-100 hover:text-ink-900"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-1">
          <div className="hidden md:block">
            <LanguageSelector locale={locale} ui={ui} />
          </div>
          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? ui.nav.menuClose : ui.nav.menuOpen}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-ink-700 transition-colors hover:bg-ink-100 md:hidden"
          >
            <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
              {mobileOpen ? (
                <path
                  d="M6 6l12 12M18 6L6 18"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              ) : (
                <path
                  d="M4 7h16M4 12h16M4 17h16"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t border-ink-200 bg-white md:hidden">
          <nav className="mx-auto max-w-7xl px-4 py-4 sm:px-6">
            <div className="mb-4 border-b border-ink-200 pb-3">
              <LanguageSelector locale={locale} ui={ui} compact />
            </div>
            <p className="pb-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-ink-400">
              {ui.nav.tools}
            </p>
            <ul className="mb-4 grid gap-1">
              {tools.map((tool) => (
                <li key={tool.slug}>
                  <Link
                    href={tool.href}
                    onClick={() => setMobileOpen(false)}
                    className="block rounded-lg px-3 py-2.5 text-[15px] font-medium text-ink-700 transition-colors hover:bg-brand-50"
                  >
                    {tool.name}
                  </Link>
                </li>
              ))}
            </ul>
            <ul className="grid gap-1 border-t border-ink-200 pt-4">
              <li>
                <Link
                  href={localePath(locale, "/")}
                  onClick={() => setMobileOpen(false)}
                  className="block rounded-lg px-3 py-2.5 text-[15px] font-medium text-ink-700 transition-colors hover:bg-ink-50"
                >
                  {ui.nav.home}
                </Link>
              </li>
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block rounded-lg px-3 py-2.5 text-[15px] font-medium text-ink-700 transition-colors hover:bg-ink-50"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}
