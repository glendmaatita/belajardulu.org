import { useMemo, useState } from "react";

// Portofolio 2 aset: return tertimbang, risiko dengan efek korelasi (diversifikasi).
export function SimulatorPortofolio() {
  const [wA, setWA] = useState(50); // bobot aset A %
  const [rA, setRA] = useState(8); // return A %
  const [rB, setRB] = useState(16); // return B %
  const [sdA, setSdA] = useState(10); // risiko (std dev) A %
  const [sdB, setSdB] = useState(25); // risiko B %
  const [corr, setCorr] = useState(0.2); // korelasi -1..1

  const r = useMemo(() => {
    const a = wA / 100;
    const b = 1 - a;
    const ret = a * rA + b * rB;
    const variance = a * a * sdA * sdA + b * b * sdB * sdB + 2 * a * b * corr * sdA * sdB;
    const risk = Math.sqrt(Math.max(0, variance));
    const weightedRisk = a * sdA + b * sdB; // risiko jika tanpa efek diversifikasi
    const benefit = weightedRisk - risk;
    return { ret, risk, weightedRisk, benefit };
  }, [wA, rA, rB, sdA, sdB, corr]);

  return (
    <div className="my-6 card p-5">
      <div className="mb-1 text-sm font-bold text-brand-700">📈 Simulator Portofolio (Diversifikasi)</div>
      <p className="mb-4 text-xs text-ink-faint">
        Menggabungkan dua aset bisa menurunkan risiko tanpa mengorbankan banyak imbal hasil, terutama bila korelasinya
        rendah. Inilah inti diversifikasi.
      </p>

      <div className="grid gap-4 sm:grid-cols-2">
        <Slider label="Bobot Aset A" value={wA} set={setWA} min={0} max={100} step={5} fmt={(v) => `${v}% (B: ${100 - v}%)`} />
        <Slider label="Korelasi A-B" value={corr} set={setCorr} min={-1} max={1} step={0.1} fmt={(v) => v.toFixed(1)} />
        <Slider label="Return A" value={rA} set={setRA} min={0} max={30} step={1} fmt={(v) => `${v}%`} />
        <Slider label="Return B" value={rB} set={setRB} min={0} max={40} step={1} fmt={(v) => `${v}%`} />
        <Slider label="Risiko A (std dev)" value={sdA} set={setSdA} min={1} max={40} step={1} fmt={(v) => `${v}%`} />
        <Slider label="Risiko B (std dev)" value={sdB} set={setSdB} min={1} max={60} step={1} fmt={(v) => `${v}%`} />
      </div>

      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        <Card label="Return portofolio" value={`${r.ret.toFixed(1)}%`} accent="text-emerald-700" />
        <Card label="Risiko portofolio" value={`${r.risk.toFixed(1)}%`} accent="text-sky-700" />
      </div>
      <p className="mt-3 rounded-lg bg-brand-50 px-3 py-2 text-sm text-brand-800">
        Tanpa diversifikasi, risiko gabungan akan {r.weightedRisk.toFixed(1)}%. Berkat korelasi {corr.toFixed(1)},
        risiko nyata hanya <b>{r.risk.toFixed(1)}%</b>, lebih rendah <b>{r.benefit.toFixed(1)} poin</b>. Korelasi makin
        rendah, manfaat diversifikasi makin besar.
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
