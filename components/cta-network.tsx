import Link from "next/link";

const STATS = [
  { v: "6", l: "charging stations" },
  { v: "300", l: "sessions / quarter" },
  { v: "17–21h", l: "peak demand window" },
  { v: "\u20B9260", l: "avg. session bill" },
];

export function CtaNetwork() {
  return (
    <section id="network" className="mx-auto max-w-6xl px-5 py-20">
      <div className="relative overflow-hidden rounded-[24px] border border-[var(--color-line)] bg-[var(--color-panel)] px-6 py-14 text-center sm:px-12">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(600px 300px at 50% -20%, rgba(23,229,161,0.16), transparent 70%)",
          }}
        />
        <div className="relative">
          <h2 className="mx-auto max-w-2xl text-3xl font-bold sm:text-4xl">
            See your charging network the way operators actually think
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[var(--color-ink-dim)]">
            No signup, no setup. The dashboard opens with live data and a
            trained model, ready to explore.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="/dashboard"
              className="rounded-[9px] bg-[var(--color-charge)] px-7 py-3 text-sm font-semibold text-[#04231a] transition hover:brightness-110"
            >
              Launch the dashboard
            </Link>
            <a
              href="#platform"
              className="rounded-[9px] border border-[var(--color-line)] px-7 py-3 text-sm font-semibold text-[var(--color-ink-dim)] transition hover:border-[var(--color-charge)] hover:text-[var(--color-charge)]"
            >
              Back to top
            </a>
          </div>

          <dl className="mx-auto mt-12 grid max-w-3xl grid-cols-2 gap-6 sm:grid-cols-4">
            {STATS.map((s) => (
              <div
                key={s.l}
                className="rounded-[var(--radius-lg)] border border-[var(--color-line)] bg-[var(--color-panel-2)] p-4"
              >
                <dt className="font-display text-2xl font-bold text-[var(--color-charge)]">
                  {s.v}
                </dt>
                <dd className="mt-1 text-xs text-[var(--color-ink-faint)]">
                  {s.l}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
