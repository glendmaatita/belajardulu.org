import { useMemo, useState } from "react";

// OEE = Ketersediaan x Kinerja x Mutu. Kelas dunia biasanya sekitar 85%.
export function KalkulatorOEE() {
  const [ketersediaan, setKetersediaan] = useState(90);
  const [kinerja, setKinerja] = useState(95);
  const [mutu, setMutu] = useState(99);

  const r = useMemo(() => {
    const oee = (ketersediaan / 100) * (kinerja / 100) * (mutu / 100) * 100;
    return { oee };
  }, [ketersediaan, kinerja, mutu]);

  const kelas = r.oee >= 85 ? { t: "Kelas dunia", c: "text-emerald-700", bg: "bg-emerald-50" } : r.oee >= 60 ? { t: "Rata-rata industri", c: "text-amber-700", bg: "bg-amber-50" } : { t: "Perlu perbaikan", c: "text-rose-700", bg: "bg-rose-50" };

  return (
    <div className="my-6 card p-5">
      <div className="mb-1 text-sm font-bold text-brand-700">⚙️ Kalkulator OEE</div>
      <p className="mb-4 text-xs text-ink-faint">
        Overall Equipment Effectiveness mengukur seberapa produktif sebuah mesin: gabungan ketersediaan, kinerja, dan mutu.
      </p>

      <div className="grid gap-4 sm:grid-cols-3">
        <Slider label="Ketersediaan" value={ketersediaan} set={setKetersediaan} min={50} max={100} step={1} fmt={(v) => `${v}%`} />
        <Slider label="Kinerja" value={kinerja} set={setKinerja} min={50} max={100} step={1} fmt={(v) => `${v}%`} />
        <Slider label="Mutu" value={mutu} set={setMutu} min={80} max={100} step={1} fmt={(v) => `${v}%`} />
      </div>

      <div className={`mt-5 rounded-xl p-4 text-center ${kelas.bg}`}>
        <div className="text-xs text-ink-faint">{ketersediaan}% × {kinerja}% × {mutu}% =</div>
        <div className={`text-4xl font-extrabold tnum ${kelas.c}`}>{r.oee.toFixed(1)}%</div>
        <div className={`mt-1 text-sm font-semibold ${kelas.c}`}>{kelas.t}</div>
      </div>
      <p className="mt-2 text-xs text-ink-faint">Karena ketiganya dikalikan, mesin yang 90% di tiap faktor tetap hanya menghasilkan OEE sekitar 73%. Kerugian kecil menumpuk.</p>
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
