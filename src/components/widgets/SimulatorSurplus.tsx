import { useMemo, useState } from "react";

// Surplus konsumen & produsen pada keseimbangan, dan deadweight loss saat harga menyimpang.
// Model linear: Qd = a - bP, Qs = c + dP.
export function SimulatorSurplus() {
  const [hargaPasar, setHargaPasar] = useState(40); // harga yang berlaku (bisa beda dari eq)
  const a = 100;
  const b = 1;
  const c = 10;
  const d = 1;

  const r = useMemo(() => {
    const pEq = (a - c) / (b + d); // 45
    const qEq = a - b * pEq; // 55
    const pMaxDemand = a / b; // harga saat Qd = 0 (intersep) = 100
    const pMinSupply = -c / d; // intersep penawaran di harga = -10 (untuk segitiga PS pakai 0)
    // Pada keseimbangan:
    const csEq = 0.5 * (pMaxDemand - pEq) * qEq;
    const psEq = 0.5 * (pEq - Math.max(0, -c / d)) * qEq;
    // Pada harga pasar yang ditetapkan (mungkin != eq): jumlah diperdagangkan = min(Qd,Qs)
    const qd = Math.max(0, a - b * hargaPasar);
    const qs = Math.max(0, c + d * hargaPasar);
    const qTrade = Math.min(qd, qs);
    const totalEq = csEq + psEq;
    // total surplus pada qTrade (perkiraan): proporsi terhadap eq
    const dwl = totalEq > 0 ? Math.max(0, totalEq - (totalEq * qTrade) / qEq) : 0;
    return { pEq, qEq, csEq, psEq, totalEq, qTrade, dwl, pMinSupply };
  }, [hargaPasar]);

  const fmt = (n: number) => Math.round(n).toLocaleString("id-ID");

  return (
    <div className="my-6 card p-5">
      <div className="mb-1 text-sm font-bold text-brand-700">📐 Simulator Surplus & Deadweight Loss</div>
      <p className="mb-4 text-xs text-ink-faint">
        Permintaan Qd = 100 - P, penawaran Qs = 10 + P. Keseimbangan di harga 45. Geser harga pasar; saat menyimpang dari keseimbangan, muncul deadweight loss (kerugian efisiensi).
      </p>

      <Slider label="Harga pasar yang berlaku" value={hargaPasar} set={setHargaPasar} min={10} max={80} step={1} fmt={(v) => `Rp${v}`} />

      <div className="mt-5 grid gap-3 sm:grid-cols-3">
        <Stat label="Surplus konsumen (di eq)" value={fmt(r.csEq)} tone="emerald" />
        <Stat label="Surplus produsen (di eq)" value={fmt(r.psEq)} tone="amber" />
        <Stat label="Total surplus (di eq)" value={fmt(r.totalEq)} tone="sky" />
      </div>

      <div className={`mt-3 rounded-xl p-4 text-center ${r.dwl > 0.5 ? "bg-rose-50" : "bg-emerald-50"}`}>
        <div className="text-xs text-ink-faint">Deadweight loss pada harga Rp{hargaPasar}</div>
        <div className={`text-2xl font-extrabold tnum ${r.dwl > 0.5 ? "text-rose-700" : "text-emerald-700"}`}>{fmt(r.dwl)}</div>
        <div className="mt-1 text-xs text-ink-faint">
          {r.dwl > 0.5 ? `Harga menyimpang dari keseimbangan (Rp${r.pEq}), hanya ${fmt(r.qTrade)} unit diperdagangkan.` : "Harga pas di keseimbangan, surplus total maksimum, tanpa kerugian efisiensi."}
        </div>
      </div>

      <p className="mt-3 text-xs text-ink-faint">
        Total surplus (konsumen + produsen) paling besar tepat di harga keseimbangan. Setiap intervensi yang menggeser harga dari titik ini menimbulkan deadweight loss.
      </p>
    </div>
  );
}

function Stat({ label, value, tone }: { label: string; value: string; tone: "emerald" | "amber" | "sky" }) {
  const map = { emerald: "text-emerald-700", amber: "text-amber-700", sky: "text-sky-700" };
  return (
    <div className="rounded-xl bg-canvas p-3 text-center">
      <div className="text-xs text-ink-faint">{label}</div>
      <div className={`text-lg font-extrabold tnum ${map[tone]}`}>{value}</div>
    </div>
  );
}

function Slider({ label, value, set, min, max, step, fmt }: { label: string; value: number; set: (n: number) => void; min: number; max: number; step: number; fmt: (v: number) => string }) {
  return (
    <div>
      <div className="mb-1 flex items-center justify-between">
        <span className="text-sm font-semibold text-ink-soft">{label}</span>
        <span className="tnum text-sm font-bold text-ink">{fmt(value)}</span>
      </div>
      <input type="range" min={min} max={max} step={step} value={value} onChange={(e) => set(Number(e.target.value))} className="h-2 w-full cursor-pointer appearance-none rounded-full bg-line accent-brand-600" />
    </div>
  );
}
