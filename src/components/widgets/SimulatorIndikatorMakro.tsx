import { useMemo, useState } from "react";

// Dashboard indikator makro: nilai kesehatan ekonomi dari kombinasi pertumbuhan, inflasi, pengangguran.
export function SimulatorIndikatorMakro() {
  const [growth, setGrowth] = useState(5);
  const [inflasi, setInflasi] = useState(3);
  const [pengangguran, setPengangguran] = useState(5);

  const r = useMemo(() => {
    // skor sederhana: growth bagus tinggi, inflasi & pengangguran bagus rendah
    let skor = 0;
    skor += growth >= 5 ? 2 : growth >= 3 ? 1 : 0;
    skor += inflasi <= 4 && inflasi >= 1 ? 2 : inflasi <= 7 ? 1 : 0;
    skor += pengangguran <= 5 ? 2 : pengangguran <= 8 ? 1 : 0;
    let status = "Sehat", warna = "text-emerald-700", bg = "bg-emerald-50";
    if (skor <= 2) { status = "Bermasalah"; warna = "text-rose-700"; bg = "bg-rose-50"; }
    else if (skor <= 4) { status = "Waspada"; warna = "text-amber-700"; bg = "bg-amber-50"; }
    // deteksi kondisi khusus
    let catatan = "Kombinasi indikator tergolong baik.";
    if (inflasi >= 8 && growth <= 2) catatan = "Waspada stagflasi: inflasi tinggi sekaligus pertumbuhan rendah.";
    else if (inflasi < 0) catatan = "Deflasi: harga turun, bisa menahan konsumsi.";
    else if (growth < 0) catatan = "Ekonomi menyusut (indikasi resesi).";
    return { skor, status, warna, bg, catatan };
  }, [growth, inflasi, pengangguran]);

  return (
    <div className="my-6 card p-5">
      <div className="mb-1 text-sm font-bold text-brand-700">🧭 Simulator Indikator Makro</div>
      <p className="mb-4 text-xs text-ink-faint">
        Atur tiga indikator utama dan lihat penilaian kesehatan ekonomi. Tidak ada satu angka pun yang cukup sendirian.
      </p>

      <div className="grid gap-4 sm:grid-cols-3">
        <Slider label="Pertumbuhan PDB" value={growth} set={setGrowth} min={-4} max={10} step={0.5} fmt={(v) => `${v}%`} />
        <Slider label="Inflasi" value={inflasi} set={setInflasi} min={-2} max={15} step={0.5} fmt={(v) => `${v}%`} />
        <Slider label="Pengangguran" value={pengangguran} set={setPengangguran} min={2} max={20} step={0.5} fmt={(v) => `${v}%`} />
      </div>

      <div className={`mt-5 rounded-xl ${r.bg} p-4 text-center`}>
        <div className="text-xs text-ink-faint">Status kesehatan ekonomi (skor {r.skor}/6)</div>
        <div className={`text-2xl font-extrabold ${r.warna}`}>{r.status}</div>
      </div>

      <p className="mt-3 text-xs text-ink-faint">{r.catatan} Ekonomi ideal: pertumbuhan tinggi, inflasi rendah-stabil, dan pengangguran rendah, semuanya bersamaan.</p>
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
