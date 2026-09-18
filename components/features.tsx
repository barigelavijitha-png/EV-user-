const FEATURES = [
  {
    accent: "var(--color-charge)",
    icon: "\u25A3",
    title: "Live network dashboard",
    body: "Sessions, energy throughput and revenue by station, hour, month and vehicle type — every chart recomputes instantly as you filter.",
  },
  {
    accent: "var(--color-volt)",
    icon: "\u25CE",
    title: "In-browser cost prediction",
    body: "A ridge-regression model estimates the bill for any session and shows a realistic error band, not a false-precision number.",
  },
  {
    accent: "var(--color-peak)",
    icon: "\u25B2",
    title: "Transparent model performance",
    body: "Predicted-vs-actual, residuals and standardised feature weights — all fitted on a fixed 80/20 split so results reproduce every load.",
  },
  {
    accent: "var(--color-grape)",
    icon: "\u2630",
    title: "Data explorer",
    body: "Search, sort and page through every session record, then export the filtered set to CSV in one click.",
  },
  {
    accent: "var(--color-rose)",
    icon: "\u21C6",
    title: "Bring your own data",
    body: "Drop in an .xlsx, .xls or .csv file and the entire dashboard refits the model and redraws every chart around your numbers.",
  },
  {
    accent: "var(--color-charge)",
    icon: "\u25D0",
    title: "No data team required",
    body: "Everything runs client-side — no backend, no pipeline, no waiting. Open the page and the analysis is already done.",
  },
];

export function Features() {
  return (
    <section id="platform" className="mx-auto max-w-6xl px-5 py-20">
      <div className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-wider text-[var(--color-charge)]">
          The platform
        </p>
        <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
          One page, the whole charging story
        </h2>
        <p className="mt-4 text-[var(--color-ink-dim)]">
          VoltGrid replaces a stack of spreadsheets and BI licences with a
          single, fast, transparent surface that anyone on the team can read.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {FEATURES.map((f) => (
          <article
            key={f.title}
            className="group relative overflow-hidden rounded-[var(--radius-lg)] border border-[var(--color-line)] bg-[var(--color-panel)] p-6 transition-all duration-200 hover:-translate-y-1 hover:border-[rgba(23,229,161,0.45)]"
          >
            <span
              className="absolute inset-x-0 top-0 h-[3px]"
              style={{ background: f.accent }}
            />
            <span
              className="grid h-11 w-11 place-items-center rounded-[var(--radius-md)] text-xl"
              style={{
                background: "var(--color-panel-2)",
                color: f.accent,
              }}
            >
              {f.icon}
            </span>
            <h3 className="mt-4 text-lg">{f.title}</h3>
            <p className="mt-2 text-sm text-[var(--color-ink-dim)]">{f.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
