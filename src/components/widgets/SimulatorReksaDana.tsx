import { useMemo, useState } from "react";

// Bandingkan 4 jenis reksa dana Indonesia: pasar uang, pendapatan tetap, campuran, saham.
// Proyeksi nilai akhir dan rentang risiko untuk modal & horizon yang sama.
const JENIS = [
  { nama: "Pasar Uang", ret: 4, risk: 2, warna: "#0ea5e9" },
  { nama: "Pendapatan Tetap", ret: 7, risk: 6, warna: "#10b981" },
  { nama: "Campuran", ret: 10, risk: 12, warna: "#f59e0b" },
  { nama: "Saham", ret: 14, risk: 25, warna: "#ef4444" },
];

export function SimulatorReksaDana() {
  const [modal, setModal] = useState(50_000_000);
  const [tahun, setTahun] = useState(10);

  const r = useMemo(() => {
    return JENIS.map((j) => {
      const nilai = modal * Math.pow(1 + j.ret / 100, tahun);
      return { ...j, nilai };
    });
  }, [modal, tahun]);

  const maxNilai = Math.max(...r.map((x) => x.nilai));
  const fmt = (n: number) => "Rp" + Math.round(n).toLocaleString("id-ID");

  return (
    <div className="my-6 card p-5">
      <div className="mb-1 text-sm font-bold text-brand-700">🗂️ Simulator Jenis Reksa Dana</div>
      <p className="mb-4 text-xs text-ink-faint">
        Empat jenis reksa dana punya profil risiko dan imbal hasil berbeda. Bandingkan proyeksi nilai untuk modal dan horizon yang sama.
      </p>

      <div className="grid gap-4 sm:grid-cols-2">
        <Slider label="Modal awal" value={modal} set={setModal} min={5_000_000} max={500_000_000} step={5_000_000} fmt={fmt} />
        <Slider label="Horizon investasi" value={tahun} set={setTahun} min={1} max={30} step={1} fmt={(v) => `${v} tahun`} />
      </div>

      <div className="mt-5 space-y-2">
        {r.map((j) => (
          <div key={j.nama}>
            <div className="mb-1 flex items-center justify-between text-xs">
              <span className="font-semibold text-ink-soft">{j.nama} <span className="text-ink-faint">({j.ret}%/th, risiko {j.risk}%)</span></span>
              <span className="tnum font-bold text-ink">{fmt(j.nilai)}</span>
            </div>
            <div className="h-4 w-full rounded-full bg-slate-100">
              <div className="h-4 rounded-full" style={{ width: `${(j.nilai / maxNilai) * 100}%`, background: j.warna }} />
            </div>
          </div>
        ))}
      </div>

      <p className="mt-3 text-xs text-ink-faint">
        Reksa dana saham berpotensi paling tinggi dalam jangka panjang, tetapi paling fluktuatif. Untuk tujuan jangka pendek, pasar uang/pendapatan tetap lebih aman. Sesuaikan jenis dengan horizon dan toleransi risiko.
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
