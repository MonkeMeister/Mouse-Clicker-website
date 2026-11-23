/**
 * Reserved ad slot.
 *
 * Placement rule for this site: no ad ever renders above the tool. The
 * interactive tester is always the first thing on the page, and ad slots
 * come after the result the user came for.
 */
export function AdSlot({
  variant = "leaderboard",
  className = "",
  label = "Advertisement",
}: {
  variant?: "leaderboard" | "rectangle";
  className?: string;
  /** Localised label shown inside the reserved slot. */
  label?: string;
}) {
  const height = variant === "leaderboard" ? "h-[90px]" : "h-[250px]";

  return (
    <aside
      aria-label={label}
      className={`w-full overflow-hidden rounded-xl border border-ink-200 bg-white ${className}`}
    >
      <div
        className={`flex w-full items-center justify-center ${height} bg-ink-50`}
        data-ad-slot="pending"
      >
        <span className="text-[11px] font-medium uppercase tracking-[0.14em] text-ink-400">
          {label}
        </span>
      </div>
    </aside>
  );
}
