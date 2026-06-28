import { useMemo, useState } from "react";
import { rupiah, angka } from "../../lib/format";

function npvAt(rate: number, c0: number, cf: number, n: number): number {
  let pv = 0;
  for (let t = 1; t <= n; t++) pv += cf / Math.pow(1 + rate, t);
  return pv - c0;
}

// IRR via bisection (arus kas seragam)
function irr(c0: number, cf: number, n: number): number | null {
  let lo = -0.9;
  let hi = 2;
  let flo = npvAt(lo, c0, cf, n);
  let fhi = npvAt(hi, c0, cf, n);
  if (flo * fhi > 0) return null;
  for (let i = 0; i < 80; i++) {
    const mid = (lo + hi) / 2;
    const fm = npvAt(mid, c0, cf, n);
    if (Math.abs(fm) < 1) return mid;
    if (flo * fm < 0) {
      hi = mid;
      fhi = fm;
    } else {
      lo = mid;
      flo = fm;
    }
  }
  return (lo + hi) / 2;
}

export function KalkulatorCapitalBudgeting() {
  const [capex, setCapex] = useState(100); // Rp miliar
  const [arusKas, setArusKas] = useState(28); // Rp miliar/tahun
  const [umur, setUmur] = useState(5);
  const [wacc, setWacc] = useState(12); // %

  const r = useMemo(() => {
    const c0 = capex * 1e9;
    const cf = arusKas * 1e9;
    const npv = npvAt(wacc / 100, c0, cf, umur);
    const ir = irr(c0, cf, umur);
    const payback = cf > 0 ? c0 / cf : Infinity;
    return { npv, irr: ir, payback, layak: npv > 0 };
  }, [capex, arusKas, umur, wacc]);

  return (
    <div className="my-6 card p-5">
      <div className="mb-1 text-sm font-bold text-brand-700">📊 Kalkulator Capital Budgeting (NPV & IRR)</div>
      <p className="mb-4 text-xs text-ink-faint">
        Keputusan investasi inti: layakkah sebuah proyek? Bandingkan NPV, IRR, dan payback dengan biaya modal (WACC).
      </p>

      <div className="grid gap-4 sm:grid-cols-2">
        <Slider label="Investasi awal (capex)" value={capex} set={setCapex} min={10} max={1000} step={10} fmt={(v) => `Rp${angka(v)} M`} />
        <Slider label="Arus kas / tahun" value={arusKas} set={setArusKas} min={1} max={300} step={1} fmt={(v) => `Rp${angka(v)} M`} />
        <Slider label="Umur proyek" value={umur} set={setUmur} min={1} max={20} step={1} fmt={(v) => `${v} tahun`} />
        <Slider label="Biaya modal (WACC)" value={wacc} set={setWacc} min={1} max={30} step={1} fmt={(v) => `${v}%`} />
      </div>

      <div className="mt-5 grid gap-3 sm:grid-cols-3">
        <div className={`rounded-xl p-4 ${r.layak ? "bg-emerald-50" : "bg-rose-50"}`}>
          <div className="text-xs text-ink-faint">NPV</div>
          <div className={`text-lg font-extrabold tnum ${r.layak ? "text-emerald-700" : "text-rose-600"}`}>{rupiah(Math.round(r.npv))}</div>
        </div>
        <Card label="IRR" value={r.irr !== null ? `${(r.irr * 100).toFixed(1)}%` : "-"} accent="text-sky-700" />
        <Card label="Payback" value={Number.isFinite(r.payback) ? `${r.payback.toFixed(1)} th` : "-"} accent="text-violet-700" />
      </div>
      <p className="mt-3 text-xs text-ink-faint">
        Aturan: terima proyek bila <b>NPV {">"} 0</b> atau setara <b>IRR {">"} WACC</b>. Di sini IRR{" "}
        {r.irr !== null ? `${(r.irr * 100).toFixed(1)}%` : "-"} {r.irr !== null && r.irr * 100 > wacc ? "di atas" : "di bawah"} WACC {wacc}%, sehingga proyek{" "}
        <b>{r.layak ? "layak" : "belum layak"}</b>.
      </p>
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
      <input type="range" min={min} max={max} step={step} value={value} onChange={(e) => set(Number(e.target.value))} className="h-2 w-full cursor-pointer appearance-none rounded-full bg-slate-200 accent-brand-600" />
    </div>
  );
}

function Card({ label, value, accent }: { label: string; value: string; accent: string }) {
  return (
    <div className="rounded-xl bg-slate-50 p-4">
      <div className="text-xs text-ink-faint">{label}</div>
      <div className={`text-lg font-extrabold tnum ${accent}`}>{value}</div>
    </div>
  );
}
