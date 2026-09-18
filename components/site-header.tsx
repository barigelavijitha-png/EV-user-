"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const NAV = [
  { label: "Platform", href: "#platform" },
  { label: "Analytics", href: "#analytics" },
  { label: "How it works", href: "#how" },
  { label: "Network", href: "#network" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "border-b border-[var(--color-line)] bg-[rgba(8,14,28,0.82)] backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <Link href="/" className="flex items-center gap-3" aria-label="VoltGrid home">
          <span className="grid h-9 w-9 place-items-center rounded-[10px] bg-gradient-to-br from-[var(--color-charge)] to-[#0fb88a] text-lg font-bold text-[#04231a]">
            &#9889;
          </span>
          <span className="font-display text-[15px] font-bold leading-none tracking-tight">
            VoltGrid
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-[var(--color-ink-dim)] transition-colors hover:bg-white/5 hover:text-[var(--color-ink)]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/dashboard"
            className="hidden rounded-[7px] border border-[var(--color-line)] px-4 py-2 text-sm font-semibold text-[var(--color-ink-dim)] transition-colors hover:border-[var(--color-charge)] hover:text-[var(--color-charge)] sm:inline-block"
          >
            Sign in
          </Link>
          <Link
            href="/dashboard"
            className="rounded-[7px] bg-[var(--color-charge)] px-4 py-2 text-sm font-semibold text-[#04231a] transition hover:brightness-110"
          >
            Launch dashboard
          </Link>
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="grid h-9 w-9 place-items-center rounded-md border border-[var(--color-line)] text-[var(--color-ink-dim)] md:hidden"
          >
            <span className="text-base">{open ? "\u2715" : "\u2630"}</span>
          </button>
        </div>
      </div>

      {open && (
        <nav
          className="border-t border-[var(--color-line)] bg-[rgba(8,14,28,0.95)] px-5 py-3 md:hidden"
          aria-label="Mobile"
        >
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block rounded-md px-3 py-2 text-sm font-medium text-[var(--color-ink-dim)] hover:bg-white/5 hover:text-[var(--color-ink)]"
            >
              {item.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
