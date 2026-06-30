import { useMemo, useState } from "react";

// Pemilihan pemasok dengan pembobotan: skor tiap kriteria dikali bobotnya,
// lalu dijumlah jadi skor akhir per pemasok.
const KRITERIA = ["Harga", "Mutu", "Ketepatan", "Layanan"] as const;
type Kriteria = (typeof KRITERIA)[number];

const VENDOR: { nama: string; skor: Record<Kriteria, number> }[] = [
  { nama: "PT Andal", skor: { Harga: 70, Mutu: 90, Ketepatan: 85, Layanan: 80 } },
  { nama: "CV Hemat", skor: { Harga: 95, Mutu: 65, Ketepatan: 60, Layanan: 70 } },
  { nama: "PT Prima", skor: { Harga: 60, Mutu: 95, Ketepatan: 92, Layanan: 88 } },
];

export function KalkulatorVendorScoring() {
  const [bobot, setBobot] = useState<Record<Kriteria, number>>({ Harga: 30, Mutu: 30, Ketepatan: 25, Layanan: 15 });
  const total = KRITERIA.reduce((s, k) => s + bobot[k], 0);

  const hasil = useMemo(() => {
    return VENDOR.map((v) => {
      const skor = KRITERIA.reduce((s, k) => s + v.skor[k] * (bobot[k] / total), 0);
      return { nama: v.nama, skor };
    }).sort((a, b) => b.skor - a.skor);
  }, [bobot, total]);

  const maks = hasil[0].skor;

  return (
    <div className="my-6 card p-5">
      <div className="mb-1 text-sm font-bold text-brand-700">🏷️ Kalkulator Skor Pemasok</div>
      <p className="mb-4 text-xs text-ink-faint">
        Atur bobot tiap kriteria sesuai prioritas perusahaan, lalu lihat pemasok mana yang paling cocok. Bobot dinormalkan otomatis.
      </p>

      <div className="grid gap-3 sm:grid-cols-2">
        {KRITERIA.map((k) => (
          <Slider key={k} label={`Bobot ${k}`} value={bobot[k]} set={(v) => setBobot((b) => ({ ...b, [k]: v }))} min={0} max={50} step={5} fmt={(v) => `${((v / total) * 100).toFixed(0)}%`} />
        ))}
      </div>

      <div className="mt-5 space-y-2">
        {hasil.map((h, i) => (
          <div key={h.nama} className="flex items-center gap-3">
            <span className="w-6 shrink-0 text-center text-sm font-bold text-ink-faint">{i + 1}</span>
            <span className="w-24 shrink-0 text-sm font-semibold text-ink-soft">{h.nama}</span>
            <div className="h-6 flex-1 overflow-hidden rounded-lg bg-canvas">
              <div className={`h-full rounded-lg ${i === 0 ? "bg-emerald-500" : "bg-brand-400"}`} style={{ width: `${(h.skor / maks) * 100}%` }} />
            </div>
            <span className="tnum w-12 shrink-0 text-right text-sm font-bold text-ink">{h.skor.toFixed(1)}</span>
          </div>
        ))}
      </div>

      <div className="mt-4 rounded-xl bg-emerald-50 p-3 text-center text-sm text-emerald-700">
        Pemenang: <strong>{hasil[0].nama}</strong> dengan skor {hasil[0].skor.toFixed(1)}. Ubah bobot dan lihat pemenang bisa berganti.
      </div>
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
