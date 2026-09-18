import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard — VoltGrid EV Charging Analytics",
  description:
    "Live EV charging network dashboard: session volume, energy, revenue, in-browser cost prediction, model performance and a full data explorer.",
};

export default function DashboardPage() {
  return (
    <div className="flex h-screen flex-col">
      <div className="flex flex-none items-center justify-between border-b border-[var(--color-line)] bg-[rgba(8,14,28,0.9)] px-4 py-2.5 backdrop-blur-xl">
        <Link
          href="/"
          className="flex items-center gap-2 text-sm font-medium text-[var(--color-ink-dim)] transition-colors hover:text-[var(--color-charge)]"
        >
          <span aria-hidden>&#8592;</span>
          Back to site
        </Link>
        <div className="flex items-center gap-2">
          <span className="grid h-6 w-6 place-items-center rounded-md bg-gradient-to-br from-[var(--color-charge)] to-[#0fb88a] text-xs font-bold text-[#04231a]">
            &#9889;
          </span>
          <span className="font-display text-sm font-bold">VoltGrid</span>
          <span className="ml-1 hidden text-xs text-[var(--color-ink-faint)] sm:inline">
            · Live analytics
          </span>
        </div>
        <a
          href="/dashboard-app.html"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-[7px] border border-[var(--color-line)] px-3 py-1.5 text-xs font-semibold text-[var(--color-ink-dim)] transition-colors hover:border-[var(--color-charge)] hover:text-[var(--color-charge)]"
        >
          Open full screen
        </a>
      </div>
      <iframe
        src="/dashboard-app.html"
        title="VoltGrid EV Charging Analytics Dashboard"
        className="w-full flex-1 border-0"
      />
    </div>
  );
}
