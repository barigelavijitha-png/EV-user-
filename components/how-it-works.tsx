const STEPS = [
  {
    n: "01",
    title: "Load the sessions",
    body: "Start with the built-in Hyderabad dataset or drop in your own .xlsx / .csv. VoltGrid parses and profiles it on the spot.",
  },
  {
    n: "02",
    title: "Fit the model",
    body: "A ridge regression trains in your browser on a fixed 80/20 split — one-hot encoded categories, standardised numerics, reproducible every time.",
  },
  {
    n: "03",
    title: "Explore & filter",
    body: "Slice by station, vehicle, purpose or month. KPIs and every chart recompute live from the filtered rows.",
  },
  {
    n: "04",
    title: "Predict & export",
    body: "Estimate the cost of any hypothetical session, see what drives it, then export the filtered records to CSV.",
  },
];

export function HowItWorks() {
  return (
    <section id="how" className="mx-auto max-w-6xl px-5 py-20">
      <div className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-wider text-[var(--color-peak)]">
          How it works
        </p>
        <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
          From raw sessions to answers in four steps
        </h2>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {STEPS.map((s, i) => (
          <div key={s.n} className="relative">
            <div className="font-display text-4xl font-bold text-[var(--color-panel-2)]">
              {s.n}
            </div>
            <h3 className="mt-2 text-lg">{s.title}</h3>
            <p className="mt-2 text-sm text-[var(--color-ink-dim)]">{s.body}</p>
            {i < STEPS.length - 1 && (
              <span
                aria-hidden
                className="absolute -right-3 top-6 hidden text-[var(--color-line)] lg:block"
              >
                &#8594;
              </span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
