import { useMemo, useState } from "react";

// Indeks Pembangunan Manusia (IPM/HDI): rata-rata geometrik tiga dimensi (kesehatan, pendidikan, standar hidup).
export function KalkulatorIPM() {
  const [kesehatan, setKesehatan] = useState(0.78); // indeks 0-1
  const [pendidikan, setPendidikan] = useState(0.66);
  const [standarHidup, setStandarHidup] = useState(0.74);

  const r = useMemo(() => {
    const ipm = Math.cbrt(kesehatan * pendidikan * standarHidup);
    let kategori = "Rendah", warna = "text-rose-700", bg = "bg-rose-50";
    if (ipm >= 0.8) { kategori = "Sangat Tinggi"; warna = "text-emerald-700"; bg = "bg-emerald-50"; }
    else if (ipm >= 0.7) { kategori = "Tinggi"; warna = "text-sky-700"; bg = "bg-sky-50"; }
    else if (ipm >= 0.55) { kategori = "Sedang"; warna = "text-amber-700"; bg = "bg-amber-50"; }
    return { ipm, kategori, warna, bg };
  }, [kesehatan, pendidikan, standarHidup]);

  return (
    <div className="my-6 card p-5">
      <div className="mb-1 text-sm font-bold text-brand-700">🧑‍🎓 Kalkulator Indeks Pembangunan Manusia (IPM)</div>
      <p className="mb-4 text-xs text-ink-faint">
        IPM menggabungkan tiga dimensi kualitas hidup, bukan hanya pendapatan. Hitung dari rata-rata geometrik ketiganya (skala 0 sampai 1).
      </p>

      <div className="grid gap-4 sm:grid-cols-3">
        <Slider label="Kesehatan (harapan hidup)" value={kesehatan} set={setKesehatan} min={0.3} max={1} step={0.01} fmt={(v) => v.toFixed(2)} />
        <Slider label="Pendidikan (lama sekolah)" value={pendidikan} set={setPendidikan} min={0.3} max={1} step={0.01} fmt={(v) => v.toFixed(2)} />
        <Slider label="Standar hidup (pendapatan)" value={standarHidup} set={setStandarHidup} min={0.3} max={1} step={0.01} fmt={(v) => v.toFixed(2)} />
      </div>

      <div className={`mt-5 rounded-xl ${r.bg} p-4 text-center`}>
        <div className="text-xs text-ink-faint">Indeks Pembangunan Manusia</div>
        <div className={`text-3xl font-extrabold tnum ${r.warna}`}>{r.ipm.toFixed(3)}</div>
        <div className={`mt-1 text-sm font-bold ${r.warna}`}>Kategori: {r.kategori}</div>
      </div>

      <p className="mt-3 text-xs text-ink-faint">
        IPM memakai rata-rata geometrik, sehingga ketimpangan antardimensi menurunkan skor: tidak bisa menutupi pendidikan rendah hanya dengan pendapatan tinggi. IPM Indonesia berada di kategori tinggi (sekitar 0,74).
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
