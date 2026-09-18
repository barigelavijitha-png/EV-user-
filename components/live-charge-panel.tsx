"use client";

import { useEffect, useState } from "react";

const HOURS = ["06", "09", "12", "15", "18", "21", "00"];
const BASE = [22, 41, 55, 48, 92, 78, 34];

export function LiveChargePanel() {
  const [bars, setBars] = useState(BASE);
  const [kwh, setKwh] = useState(4820);
  const [revenue, setRevenue] = useState(61240);

  useEffect(() => {
    const id = setInterval(() => {
      setBars((prev) =>
        prev.map((v) => {
          const next = v + (Math.random() * 16 - 8);
          return Math.max(14, Math.min(100, next));
        }),
      );
      setKwh((v) => v + Math.round(Math.random() * 40));
      setRevenue((v) => v + Math.round(Math.random() * 280));
    }, 2200);
    return () => clearInterval(id);
  }, []);

  const max = Math.max(...bars);

  return (
    <div className="rounded-[var(--radius-lg)] border border-[var(--color-line)] bg-[var(--color-panel)] p-5 shadow-[0_30px_80px_-40px_rgba(0,0,0,0.9)]">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs font-semibold text-[var(--color-ink-faint)]">
            NETWORK · LIVE
          </p>
          <h3 className="mt-1 text-base">Demand through the day</h3>
        </div>
        <span className="flex items-center gap-1.5 rounded-full bg-[rgba(23,229,161,0.12)] px-2.5 py-1 text-xs font-semibold text-[var(--color-charge)]">
          <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-charge)]" />
          streaming
        </span>
      </div>

      <div className="mt-6 flex items-end justify-between gap-2">
        {bars.map((v, i) => {
          const peak = HOURS[i] === "18" || HOURS[i] === "21";
          return (
            <div key={i} className="flex flex-1 flex-col items-center gap-2">
              <div className="flex h-40 w-full items-end">
                <div
                  className="w-full rounded-t-[5px] transition-all duration-700 ease-out"
                  style={{
                    height: `${Math.round((v / max) * 152) + 8}px`,
                    background: peak
                      ? "linear-gradient(180deg, var(--color-peak), rgba(255,178,63,0.35))"
                      : "linear-gradient(180deg, var(--color-charge), rgba(23,229,161,0.25))",
                  }}
                />
              </div>
              <span className="text-[10px] text-[var(--color-ink-faint)]">
                {HOURS[i]}
              </span>
            </div>
          );
        })}
      </div>

      <div className="mt-5 grid grid-cols-2 gap-3">
        <div className="rounded-[var(--radius-md)] border border-[var(--color-line)] bg-[var(--color-panel-2)] p-3">
          <p className="text-[11px] font-semibold text-[var(--color-ink-faint)]">
            ENERGY DELIVERED
          </p>
          <p className="mt-1 font-display text-xl font-bold text-[var(--color-charge)]">
            {kwh.toLocaleString("en-IN")} kWh
          </p>
        </div>
        <div className="rounded-[var(--radius-md)] border border-[var(--color-line)] bg-[var(--color-panel-2)] p-3">
          <p className="text-[11px] font-semibold text-[var(--color-ink-faint)]">
            REVENUE (INR)
          </p>
          <p className="mt-1 font-display text-xl font-bold text-[var(--color-volt)]">
            &#8377;{revenue.toLocaleString("en-IN")}
          </p>
        </div>
      </div>
    </div>
  );
}
