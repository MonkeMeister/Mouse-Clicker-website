import Link from "next/link";

export function Logo({
  className = "",
  href = "/",
}: {
  className?: string;
  /** Locale-aware home path. */
  href?: string;
}) {
  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-2.5 ${className}`}
      aria-label="MouseLab — home"
    >
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] bg-brand-600 text-white shadow-sm transition-colors group-hover:bg-brand-700">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="h-5 w-5"
          aria-hidden="true"
        >
          <rect
            x="7"
            y="3"
            width="10"
            height="18"
            rx="5"
            stroke="currentColor"
            strokeWidth="1.7"
          />
          <path
            d="M12 6.5v3.5"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
          />
        </svg>
      </span>
      <span className="text-[17px] font-semibold tracking-tight text-ink-900">
        Mouse
        <span className="text-brand-600">Lab</span>
      </span>
    </Link>
  );
}
