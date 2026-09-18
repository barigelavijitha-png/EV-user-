import Link from "next/link";

const STATIONS = [
  { name: "Ameerpet Charge Point", pct: 92, rev: "\u20B914.2k" },
  { name: "Hitech City EV", pct: 78, rev: "\u20B912.6k" },
  { name: "Kukatpally Charge Hub", pct: 71, rev: "\u20B911.1k" },
  { name: "Secunderabad Central", pct: 64, rev: "\u20B910.3k" },
  { name: "LB Nagar EV Station", pct: 52, rev: "\u20B98.4k" },
  { name: "Gachibowli Fast DC", pct: 44, rev: "\u20B97.1k" },
];

const MIX = [
  { label: "Car", pct: 54, color: "var(--color-charge)" },
  { label: "Scooter", pct: 27, color: "var(--color-volt)" },
  { label: "Bike", pct: 19, color: "var(--color-grape)" },
];

export function AnalyticsShowcase() {
  return (
    <section
      id="analytics"
      className="border-y border-[var(--color-line)] bg-[rgba(16,27,51,0.35)]"
    >
      <div className="mx-auto max-w-6xl px-5 py-20">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-[var(--color-volt)]">
              What it measures
            </p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              The metrics that move the network
            </h2>
            <p className="mt-4 text-[var(--color-ink-dim)]">
              Every visual on the dashboard answers a real operating question —
              which sites carry the load, when demand peaks, who is charging and
              what it earns. Here is a taste of the live surface.
            </p>

            <ul className="mt-8 space-y-4">
              {[
                "Sessions & revenue ranked by station",
                "Hourly demand with the 17:00–21:00 peak highlighted",
                "Energy share by vehicle type and trip purpose",
                "Duration vs. energy scatter, coloured per vehicle",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3 text-sm">
                  <span className="mt-0.5 grid h-5 w-5 flex-none place-items-center rounded-full bg-[rgba(23,229,161,0.16)] text-[11px] text-[var(--color-charge)]">
                    &#10003;
                  </span>
                  <span className="text-[var(--color-ink-dim)]">{t}</span>
                </li>
              ))}
            </ul>

            <Link
              href="/dashboard"
              className="mt-8 inline-block rounded-[9px] bg-[var(--color-charge)] px-6 py-3 text-sm font-semibold text-[#04231a] transition hover:brightness-110"
            >
              Explore the full dashboard
            </Link>
          </div>

          <div className="grid gap-4">
            <div className="rounded-[var(--radius-lg)] border border-[var(--color-line)] bg-[var(--color-panel)] p-6 shadow-[0_18px_40px_-22px_rgba(0,0,0,0.85)]">
              <h3 className="text-base">Sessions & revenue by station</h3>
              <p className="mb-4 text-xs text-[var(--color-ink-faint)]">
                Which sites carry the load, and what they earn
              </p>
              <div className="space-y-3">
                {STATIONS.map((s) => (
                  <div key={s.name}>
                    <div className="mb-1 flex items-center justify-between text-xs">
                      <span className="text-[var(--color-ink-dim)]">
                        {s.name}
                      </span>
                      <span className="font-display font-semibold text-[var(--color-volt)]">
                        {s.rev}
                      </span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-[var(--color-panel-2)]">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-[var(--color-charge)] to-[var(--color-volt)]"
                        style={{ width: `${s.pct}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[var(--radius-lg)] border border-[var(--color-line)] bg-[var(--color-panel)] p-6 shadow-[0_18px_40px_-22px_rgba(0,0,0,0.85)]">
              <h3 className="text-base">Energy share by vehicle type</h3>
              <p className="mb-4 text-xs text-[var(--color-ink-faint)]">
                Total kWh delivered
              </p>
              <div className="flex h-3 overflow-hidden rounded-full">
                {MIX.map((m) => (
                  <div
                    key={m.label}
                    style={{ width: `${m.pct}%`, background: m.color }}
                  />
                ))}
              </div>
              <div className="mt-4 flex flex-wrap gap-4">
                {MIX.map((m) => (
                  <div key={m.label} className="flex items-center gap-2 text-xs">
                    <span
                      className="h-2.5 w-2.5 rounded-full"
                      style={{ background: m.color }}
                    />
                    <span className="text-[var(--color-ink-dim)]">
                      {m.label}
                    </span>
                    <span className="font-display font-semibold">
                      {m.pct}%
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
