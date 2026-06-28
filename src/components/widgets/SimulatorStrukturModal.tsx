import { useMemo, useState } from "react";
import { angka } from "../../lib/format";

// Efek leverage terhadap ROE: utang bisa mengungkit imbal hasil ekuitas, tapi menambah risiko.
export function SimulatorStrukturModal() {
  const [ebit, setEbit] = useState(200); // Rp miliar
  const [kapital, setKapital] = useState(1000); // Rp miliar total modal
  const [debtRatio, setDebtRatio] = useState(40); // %
  const [kd, setKd] = useState(10); // % bunga utang
  const [tax] = useState(22);

  const r = useMemo(() => {
    const calc = (ratio: number) => {
      const debt = kapital * (ratio / 100);
      const equity = kapital - debt;
      const bunga = debt * (kd / 100);
      const ebt = ebit - bunga;
      const ni = ebt * (1 - tax / 100);
      const roe = equity > 0 ? (ni / equity) * 100 : 0;
      return { roe, ni, bunga, equity };
    };
    return { now: calc(debtRatio), noDebt: calc(0) };
  }, [ebit, kapital, debtRatio, kd, tax]);

  const beresiko = r.now.bunga > ebit * 0.6;

  return (
    <div className="my-6 card p-5">
      <div className="mb-1 text-sm font-bold text-brand-700">🏛️ Simulator Struktur Modal (Leverage & ROE)</div>
      <p className="mb-4 text-xs text-ink-faint">
        Menambah utang bisa menaikkan imbal hasil pemegang saham (ROE), tetapi juga memperbesar risiko saat laba turun.
        Geser rasio utang dan amati.
      </p>

      <div className="grid gap-4 sm:grid-cols-2">
        <Slider label="EBIT (laba operasi)" value={ebit} set={setEbit} min={0} max={500} step={10} fmt={(v) => `Rp${angka(v)} M`} />
        <Slider label="Total modal" value={kapital} set={setKapital} min={100} max={3000} step={100} fmt={(v) => `Rp${angka(v)} M`} />
        <Slider label="Rasio utang" value={debtRatio} set={setDebtRatio} min={0} max={90} step={5} fmt={(v) => `${v}%`} />
        <Slider label="Bunga utang (Kd)" value={kd} set={setKd} min={2} max={20} step={0.5} fmt={(v) => `${v}%`} />
      </div>

      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        <Card label="ROE tanpa utang" value={`${r.noDebt.roe.toFixed(1)}%`} accent="text-slate-600" />
        <Card label={`ROE dengan utang ${debtRatio}%`} value={`${r.now.roe.toFixed(1)}%`} accent={r.now.roe >= r.noDebt.roe ? "text-emerald-700" : "text-rose-600"} />
      </div>
      <p className="mt-3 text-xs text-ink-faint">
        {r.now.roe >= r.noDebt.roe
          ? `Leverage menaikkan ROE dari ${r.noDebt.roe.toFixed(1)}% ke ${r.now.roe.toFixed(1)}% karena EBIT lebih tinggi dari biaya utang.`
          : `Leverage justru menurunkan ROE: biaya utang melebihi imbal hasil aset.`}
        {beresiko && " ⚠️ Beban bunga sudah sangat besar dibanding EBIT, risiko gagal bayar tinggi."}
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
      <div className={`text-2xl font-extrabold tnum ${accent}`}>{value}</div>
    </div>
  );
}
