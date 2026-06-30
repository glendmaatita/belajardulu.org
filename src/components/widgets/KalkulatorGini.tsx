import { useMemo, useState } from "react";

// Koefisien Gini dari pangsa pendapatan lima kelompok (kuintil) berpenduduk sama.
// Gini = 1 - jumlah (Xk - Xk-1)(Yk + Yk-1), dengan X kumulatif populasi, Y kumulatif pendapatan.
export function KalkulatorGini() {
  const [shares, setShares] = useState([8, 12, 17, 23, 40]); // pangsa pendapatan tiap kuintil (%)

  const r = useMemo(() => {
    const total = shares.reduce((s, x) => s + x, 0) || 1;
    const norm = shares.map((s) => s / total); // pangsa ternormalkan
    // kumulatif Y
    const Y = [0];
    norm.forEach((s) => Y.push(Y[Y.length - 1] + s));
    let gini = 1;
    for (let k = 1; k <= 5; k++) {
      const dx = 0.2; // tiap kuintil 20% populasi
      gini -= dx * (Y[k] + Y[k - 1]);
    }
    return { gini: Math.max(0, gini), Y };
  }, [shares]);

  const kelas = r.gini < 0.3 ? { t: "Relatif merata", c: "text-emerald-700", bg: "bg-emerald-50" } : r.gini < 0.45 ? { t: "Ketimpangan sedang", c: "text-amber-700", bg: "bg-amber-50" } : { t: "Ketimpangan tinggi", c: "text-rose-700", bg: "bg-rose-50" };

  return (
    <div className="my-6 card p-5">
      <div className="mb-1 text-sm font-bold text-brand-700">📊 Kalkulator Koefisien Gini</div>
      <p className="mb-4 text-xs text-ink-faint">
        Atur pangsa pendapatan lima kelompok penduduk (dari termiskin ke terkaya) dan lihat seberapa timpang pembagiannya. Nilai dinormalkan otomatis.
      </p>

      <div className="grid gap-3 sm:grid-cols-2">
        {["Termiskin 20%", "20% berikutnya", "20% tengah", "20% berikutnya", "Terkaya 20%"].map((lbl, i) => (
          <Slider key={i} label={lbl} value={shares[i]} set={(v) => setShares((s) => s.map((x, j) => (j === i ? v : x)))} min={1} max={70} step={1} fmt={(v) => `${v}%`} />
        ))}
      </div>

      <div className="mt-5 flex items-end gap-1" style={{ height: 110 }}>
        {r.Y.slice(1).map((y, i) => (
          <div key={i} className="flex flex-1 flex-col items-center justify-end">
            <div className="w-full rounded-t bg-rose-400" style={{ height: `${y * 100}%` }} title={`Kumulatif ${(y * 100).toFixed(0)}%`} />
          </div>
        ))}
      </div>
      <div className="mt-1 text-center text-xs text-ink-faint">Kurva Lorenz: pendapatan kumulatif dari kelompok termiskin ke terkaya</div>

      <div className={`mt-4 rounded-xl p-4 text-center ${kelas.bg}`}>
        <div className="text-xs text-ink-faint">Koefisien Gini (0 = merata sempurna, 1 = sangat timpang)</div>
        <div className={`text-4xl font-extrabold tnum ${kelas.c}`}>{r.gini.toFixed(3)}</div>
        <div className={`mt-1 text-sm font-semibold ${kelas.c}`}>{kelas.t}</div>
      </div>
      <p className="mt-2 text-xs text-ink-faint">Sebagai gambaran, koefisien Gini Indonesia beberapa tahun terakhir berkisar di sekitar 0,38.</p>
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
