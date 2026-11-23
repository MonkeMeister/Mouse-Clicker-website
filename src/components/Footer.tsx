import Link from "next/link";
import type { UiStrings } from "@/content/types";
import { BUILD_YEAR, SITE } from "@/lib/site";
import { localePath, type Locale } from "@/lib/i18n";
import { Container } from "./Container";
import { Logo } from "./Logo";

export function Footer({
  locale,
  ui,
  tools,
}: {
  locale: Locale;
  ui: UiStrings;
  tools: { slug: string; name: string; href: string }[];
}) {
  const year = BUILD_YEAR;

  return (
    <footer className="mt-24 border-t border-ink-200 bg-white">
      <Container className="py-14">
        <div className="grid gap-10 md:grid-cols-[1.6fr_1fr_1fr]">
          <div>
            <Logo href={localePath(locale, "/")} />
            <p className="mt-4 max-w-sm text-[15px] leading-7 text-ink-500">
              {ui.footer.blurb}
            </p>
            <p className="mt-4 text-[13px] text-ink-400">
              {ui.footer.rights
                .replace("{year}", String(year))
                .replace("{brand}", SITE.name)}
            </p>
          </div>

          <div>
            <h2 className="text-[13px] font-semibold uppercase tracking-[0.12em] text-ink-900">
              {ui.footer.toolsHeading}
            </h2>
            <ul className="mt-4 grid gap-2.5">
              {tools.map((tool) => (
                <li key={tool.slug}>
                  <Link
                    href={tool.href}
                    className="text-[15px] text-ink-500 transition-colors hover:text-brand-600"
                  >
                    {tool.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-[13px] font-semibold uppercase tracking-[0.12em] text-ink-900">
              {ui.footer.companyHeading}
            </h2>
            <ul className="mt-4 grid gap-2.5">
              {[
                { label: ui.nav.about, href: localePath(locale, "/about") },
                { label: ui.nav.blog, href: localePath(locale, "/blog") },
                { label: ui.nav.contact, href: localePath(locale, "/contact") },
                {
                  label: ui.footer.privacyPolicy,
                  href: localePath(locale, "/privacy-policy"),
                },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[15px] text-ink-500 transition-colors hover:text-brand-600"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-12 border-t border-ink-200 pt-6 text-[13px] leading-6 text-ink-400">
          {ui.footer.disclaimer}
        </p>
      </Container>
    </footer>
  );
}
