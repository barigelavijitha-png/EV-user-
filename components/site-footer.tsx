import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--color-line)]">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-12 sm:flex-row sm:items-start sm:justify-between">
        <div className="max-w-sm">
          <Link href="/" className="flex items-center gap-3">
            <span className="grid h-9 w-9 place-items-center rounded-[10px] bg-gradient-to-br from-[var(--color-charge)] to-[#0fb88a] text-lg font-bold text-[#04231a]">
              &#9889;
            </span>
            <span className="font-display text-[15px] font-bold">VoltGrid</span>
          </Link>
          <p className="mt-4 text-sm text-[var(--color-ink-dim)]">
            EV charging network analytics that runs entirely in your browser.
            Hyderabad network · Q1 2026.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
          <FooterCol
            title="Product"
            links={[
              { label: "Dashboard", href: "/dashboard" },
              { label: "Platform", href: "#platform" },
              { label: "Analytics", href: "#analytics" },
            ]}
          />
          <FooterCol
            title="Learn"
            links={[
              { label: "How it works", href: "#how" },
              { label: "The network", href: "#network" },
            ]}
          />
          <FooterCol
            title="Company"
            links={[
              { label: "About", href: "/dashboard" },
              { label: "Contact", href: "#" },
            ]}
          />
        </div>
      </div>

      <div className="border-t border-[var(--color-line)]">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-5 py-5 text-xs text-[var(--color-ink-faint)] sm:flex-row">
          <p>&copy; {new Date().getFullYear()} VoltGrid Analytics. All rights reserved.</p>
          <p>Built for the Hyderabad EV charging network.</p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h4 className="text-xs font-semibold uppercase tracking-wider text-[var(--color-ink-faint)]">
        {title}
      </h4>
      <ul className="mt-4 space-y-2.5">
        {links.map((l) => (
          <li key={l.label}>
            <Link
              href={l.href}
              className="text-sm text-[var(--color-ink-dim)] transition-colors hover:text-[var(--color-charge)]"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
