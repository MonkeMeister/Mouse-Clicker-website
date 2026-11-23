import { notFound } from "next/navigation";

/**
 * Catch-all for unknown paths inside a locale, e.g. /de/tools/nope.
 * Renders the locale's 404 page instead of a Next.js default.
 */
export default function CatchAllPage() {
  notFound();
}
