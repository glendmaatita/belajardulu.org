import { useMemo, useState } from "react";

// Rasio utang terhadap PDB dengan ambang batas hukum 60% PDB (UU Keuangan Negara).
export function KalkulatorRasioUtang() {
  const [utang, setUtang] = useState(8500); // triliun
  const [pdb, setPdb] = useState(22000);
  const [defisitTahunan, setDefisitTahunan] = useState(500); // tambahan utang tahun depan

  const r = useMemo(() => {
    const ratio = (utang / pdb) * 100;
    const utangBaru = utang + defisitTahunan;
    const pdbBaru = pdb * 1.05; // asumsi PDB tumbuh 5%
    const ratioBaru = (utangBaru / pdbBaru) * 100;
    return { ratio, ratioBaru };
  }, [utang, pdb, defisitTahunan]);

  const warna = r.ratio > 60 ? "text-rose-700" : r.ratio > 45 ? "text-amber-700" : "text-emerald-700";
  const bg = r.ratio > 60 ? "bg-rose-50" : r.ratio > 45 ? "bg-amber-50" : "bg-emerald-50";

  return (
    <div className="my-6 card p-5">
      <div className="mb-1 text-sm font-bold text-brand-700">⚖️ Kalkulator Rasio Utang terhadap PDB</div>
      <p className="mb-4 text-xs text-ink-faint">
        UU Keuangan Negara membatasi rasio utang pemerintah maksimal 60% PDB. Lihat posisi rasio dan proyeksinya tahun depan.
      </p>

      <div className="grid gap-4 sm:grid-cols-3">
        <Slider label="Total utang pemerintah" value={utang} set={setUtang} min={3000} max={18000} step={250} fmt={(v) => `Rp${v.toLocaleString("id-ID")} T`} />
        <Slider label="PDB" value={pdb} set={setPdb} min={15000} max={30000} step={500} fmt={(v) => `Rp${v.toLocaleString("id-ID")} T`} />
        <Slider label="Defisit tahun depan" value={defisitTahunan} set={setDefisitTahunan} min={0} max={1200} step={50} fmt={(v) => `Rp${v} T`} />
      </div>

      <div className="mt-5 rounded-xl bg-canvas p-1">
        <div className="relative h-8 overflow-hidden rounded-lg bg-line">
          <div className={`h-full ${r.ratio > 60 ? "bg-rose-500" : "bg-emerald-500"}`} style={{ width: `${Math.min(100, (r.ratio / 60) * 100)}%` }} />
          <div className="absolute right-0 top-0 h-full w-0.5 bg-rose-600" />
        </div>
        <div className="mt-1 flex justify-between px-1 text-[11px] text-ink-faint">
          <span>0%</span>
          <span className="font-bold text-rose-600">batas 60% PDB</span>
        </div>
      </div>

      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        <div className={`rounded-xl ${bg} p-4 text-center`}>
          <div className="text-xs text-ink-faint">Rasio utang saat ini</div>
          <div className={`text-2xl font-extrabold tnum ${warna}`}>{r.ratio.toFixed(1)}% PDB</div>
        </div>
        <div className="rounded-xl bg-sky-50 p-4 text-center">
          <div className="text-xs text-ink-faint">Proyeksi tahun depan (PDB +5%)</div>
          <div className="text-2xl font-extrabold tnum text-sky-700">{r.ratioBaru.toFixed(1)}% PDB</div>
        </div>
      </div>

      <p className="mt-3 text-xs text-ink-faint">
        Pertumbuhan PDB membantu menahan rasio utang walau nominal utang naik. Selama PDB tumbuh lebih cepat dari utang, rasio bisa tetap terkendali di bawah batas 60%.
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
      <input type="range" min={min} max={max} step={step} value={value} onChange={(e) => set(Number(e.target.value))} className="h-2 w-full cursor-pointer appearance-none rounded-full bg-line accent-brand-600" />
    </div>
  );
}
