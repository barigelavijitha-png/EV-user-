import Link from "next/link";
import { LiveChargePanel } from "./live-charge-panel";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* decorative grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "linear-gradient(var(--color-line) 1px, transparent 1px), linear-gradient(90deg, var(--color-line) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage:
            "radial-gradient(700px 460px at 70% 20%, black, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(700px 460px at 70% 20%, black, transparent 75%)",
        }}
      />

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-5 pb-16 pt-16 lg:grid-cols-2 lg:pb-24 lg:pt-24">
        <div className="animate-rise">
          <span className="inline-flex items-center gap-2 rounded-full border border-[var(--color-line)] bg-[var(--color-panel)] px-3 py-1.5 text-xs font-semibold text-[var(--color-charge)]">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-[var(--color-charge)] animate-pulse-ring" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--color-charge)]" />
            </span>
            Live across 6 Hyderabad stations
          </span>

          <h1 className="mt-6 text-balance text-4xl font-bold leading-[1.05] sm:text-5xl lg:text-[56px]">
            Every charging session,{" "}
            <span className="bg-gradient-to-r from-[var(--color-charge)] to-[var(--color-volt)] bg-clip-text text-transparent">
              turned into a decision
            </span>
          </h1>

          <p className="mt-5 max-w-xl text-pretty text-base text-[var(--color-ink-dim)] sm:text-lg">
            VoltGrid unifies session volume, energy throughput and revenue into
            one live view — then predicts the cost of any session with a model
            that trains right in your browser. No black boxes, no waiting on a
            data team.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href="/dashboard"
              className="rounded-[9px] bg-[var(--color-charge)] px-6 py-3 text-sm font-semibold text-[#04231a] transition hover:brightness-110"
            >
              Open the live dashboard
            </Link>
            <a
              href="#analytics"
              className="rounded-[9px] border border-[var(--color-line)] px-6 py-3 text-sm font-semibold text-[var(--color-ink-dim)] transition hover:border-[var(--color-charge)] hover:text-[var(--color-charge)]"
            >
              See what it measures
            </a>
          </div>

          <dl className="mt-10 grid max-w-lg grid-cols-3 gap-6">
            {[
              { v: "300+", l: "sessions analysed" },
              { v: "20", l: "data fields tracked" },
              { v: "100%", l: "computed in-browser" },
            ].map((s) => (
              <div key={s.l}>
                <dt className="font-display text-2xl font-bold text-[var(--color-ink)]">
                  {s.v}
                </dt>
                <dd className="mt-1 text-xs text-[var(--color-ink-faint)]">
                  {s.l}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="animate-float-slow">
          <LiveChargePanel />
        </div>
      </div>
    </section>
  );
}
