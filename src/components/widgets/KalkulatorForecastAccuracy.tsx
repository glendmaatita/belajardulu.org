import { useMemo, useState } from "react";

// Akurasi peramalan: MAPE (rata-rata galat persen absolut) & bias (cenderung
// terlalu tinggi atau terlalu rendah). Dipakai menilai kualitas demand forecast.
const AKTUAL = [120, 135, 110, 150, 140, 160];
const BULAN = ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun"];

export function KalkulatorForecastAccuracy() {
  const [bias, setBias] = useState(0); // geser ramalan: + terlalu optimis, - terlalu pesimis (%)
  const [noise, setNoise] = useState(10); // sebaran galat acak terpola (%)

  const r = useMemo(() => {
    // Ramalan = aktual digeser bias, ditambah pola galat tetap (deterministik).
    const pola = [1, -1, 1, -1, 1, -1];
    const ramalan = AKTUAL.map((a, i) => a * (1 + bias / 100) + a * (noise / 100) * pola[i]);
    const errs = AKTUAL.map((a, i) => (ramalan[i] - a) / a);
    const mape = (errs.reduce((s, e) => s + Math.abs(e), 0) / errs.length) * 100;
    const biasPct = (errs.reduce((s, e) => s + e, 0) / errs.length) * 100;
    return { ramalan, mape, biasPct };
  }, [bias, noise]);

  const maks = Math.max(...AKTUAL, ...r.ramalan);

  return (
    <div className="my-6 card p-5">
      <div className="mb-1 text-sm font-bold text-brand-700">🎯 Kalkulator Akurasi Peramalan</div>
      <p className="mb-4 text-xs text-ink-faint">
        Bandingkan ramalan dengan penjualan nyata. MAPE mengukur seberapa meleset; bias mengukur kecenderungan terlalu tinggi atau rendah.
      </p>

      <div className="grid gap-4 sm:grid-cols-2">
        <Slider label="Geser ramalan (bias)" value={bias} set={setBias} min={-30} max={30} step={5} fmt={(v) => `${v > 0 ? "+" : ""}${v}%`} />
        <Slider label="Sebaran galat" value={noise} set={setNoise} min={0} max={30} step={5} fmt={(v) => `${v}%`} />
      </div>

      <div className="mt-5 flex items-end gap-2" style={{ height: 140 }}>
        {BULAN.map((b, i) => (
          <div key={b} className="flex flex-1 flex-col items-center justify-end gap-1">
            <div className="flex h-full w-full items-end justify-center gap-0.5">
              <div className="w-1/2 rounded-t bg-brand-500" style={{ height: `${(AKTUAL[i] / maks) * 100}%` }} title="Aktual" />
              <div className="w-1/2 rounded-t bg-amber-400" style={{ height: `${(r.ramalan[i] / maks) * 100}%` }} title="Ramalan" />
            </div>
            <span className="text-[10px] text-ink-faint">{b}</span>
          </div>
        ))}
      </div>
      <div className="mt-1 flex justify-center gap-4 text-xs">
        <span className="text-brand-600">● Aktual</span>
        <span className="text-amber-600">● Ramalan</span>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-3">
        <div className="rounded-xl bg-canvas p-3 text-center">
          <div className="text-xs text-ink-faint">MAPE (galat rata-rata)</div>
          <div className="tnum text-2xl font-extrabold text-ink">{r.mape.toFixed(1)}%</div>
        </div>
        <div className="rounded-xl bg-canvas p-3 text-center">
          <div className="text-xs text-ink-faint">Bias</div>
          <div className={`tnum text-2xl font-extrabold ${Math.abs(r.biasPct) < 2 ? "text-emerald-700" : "text-amber-700"}`}>{r.biasPct > 0 ? "+" : ""}{r.biasPct.toFixed(1)}%</div>
        </div>
      </div>
      <p className="mt-2 text-xs text-ink-faint">Bias mendekati nol berarti ramalan tidak sistematis meleset ke satu arah, meski MAPE-nya belum tentu kecil.</p>
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
