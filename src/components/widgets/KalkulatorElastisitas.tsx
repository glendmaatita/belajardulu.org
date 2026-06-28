import { useMemo, useState } from "react";

// Elastisitas harga permintaan = %perubahan jumlah / %perubahan harga (memakai metode titik tengah).
export function KalkulatorElastisitas() {
  const [p1, setP1] = useState(10000);
  const [p2, setP2] = useState(12000);
  const [q1, setQ1] = useState(100);
  const [q2, setQ2] = useState(80);

  const r = useMemo(() => {
    // metode titik tengah (midpoint) agar simetris
    const dQ = (q2 - q1) / ((q1 + q2) / 2);
    const dP = (p2 - p1) / ((p1 + p2) / 2);
    const e = dP !== 0 ? dQ / dP : 0;
    const absE = Math.abs(e);
    let label = "Uniter (E = 1)";
    if (absE > 1.001) label = "Elastis (E > 1)";
    else if (absE < 0.999) label = "Inelastis (E < 1)";
    return { e, absE, label, dQpct: dQ * 100, dPpct: dP * 100 };
  }, [p1, p2, q1, q2]);

  const warna = r.absE > 1 ? "text-emerald-700" : r.absE < 1 ? "text-amber-700" : "text-sky-700";
  const bg = r.absE > 1 ? "bg-emerald-50" : r.absE < 1 ? "bg-amber-50" : "bg-sky-50";

  return (
    <div className="my-6 card p-5">
      <div className="mb-1 text-sm font-bold text-brand-700">📐 Kalkulator Elastisitas Permintaan</div>
      <p className="mb-4 text-xs text-ink-faint">
        Elastisitas mengukur kepekaan jumlah terhadap harga. Memakai metode titik tengah agar hasilnya simetris.
      </p>

      <div className="grid gap-4 sm:grid-cols-2">
        <Slider label="Harga awal (P1)" value={p1} set={setP1} min={1000} max={20000} step={500} fmt={(v) => `Rp${v.toLocaleString("id-ID")}`} />
        <Slider label="Harga baru (P2)" value={p2} set={setP2} min={1000} max={20000} step={500} fmt={(v) => `Rp${v.toLocaleString("id-ID")}`} />
        <Slider label="Jumlah awal (Q1)" value={q1} set={setQ1} min={10} max={300} step={5} fmt={(v) => `${v}`} />
        <Slider label="Jumlah baru (Q2)" value={q2} set={setQ2} min={10} max={300} step={5} fmt={(v) => `${v}`} />
      </div>

      <div className="mt-5 grid gap-3 sm:grid-cols-2 text-sm">
        <div className="rounded-xl bg-slate-50 p-3 text-center">
          <div className="text-xs text-ink-faint">% perubahan jumlah</div>
          <div className="tnum font-bold text-ink">{r.dQpct.toFixed(1)}%</div>
        </div>
        <div className="rounded-xl bg-slate-50 p-3 text-center">
          <div className="text-xs text-ink-faint">% perubahan harga</div>
          <div className="tnum font-bold text-ink">{r.dPpct.toFixed(1)}%</div>
        </div>
      </div>

      <div className={`mt-3 rounded-xl ${bg} p-4 text-center`}>
        <div className="text-xs text-ink-faint">Elastisitas (nilai absolut)</div>
        <div className={`text-3xl font-extrabold tnum ${warna}`}>{r.absE.toFixed(2)}</div>
        <div className={`mt-1 text-sm font-bold ${warna}`}>{r.label}</div>
      </div>

      <p className="mt-3 text-xs text-ink-faint">
        E {">"} 1 (elastis): jumlah sangat peka, menaikkan harga justru menurunkan total pendapatan. E {"<"} 1 (inelastis): jumlah kurang peka, menaikkan harga menambah pendapatan.
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
