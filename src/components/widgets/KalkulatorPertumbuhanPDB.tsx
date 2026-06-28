import { useMemo, useState } from "react";

// Pertumbuhan ekonomi dari PDB riil dua periode, serta PDB per kapita.
export function KalkulatorPertumbuhanPDB() {
  const [pdbAwal, setPdbAwal] = useState(11000); // triliun (PDB riil tahun lalu)
  const [pdbAkhir, setPdbAkhir] = useState(11550); // triliun (PDB riil tahun ini)
  const [penduduk, setPenduduk] = useState(280); // juta jiwa

  const r = useMemo(() => {
    const pertumbuhan = pdbAwal > 0 ? ((pdbAkhir - pdbAwal) / pdbAwal) * 100 : 0;
    const perKapita = penduduk > 0 ? (pdbAkhir * 1_000_000) / (penduduk * 1_000_000) : 0; // triliun*1e12 / (juta*1e6) = juta rupiah
    const ganda = pertumbuhan > 0 ? 72 / pertumbuhan : Infinity;
    return { pertumbuhan, perKapita, ganda };
  }, [pdbAwal, pdbAkhir, penduduk]);

  const sehat = r.pertumbuhan >= 5;

  return (
    <div className="my-6 card p-5">
      <div className="mb-1 text-sm font-bold text-brand-700">📈 Kalkulator Pertumbuhan Ekonomi</div>
      <p className="mb-4 text-xs text-ink-faint">
        Pertumbuhan ekonomi dihitung dari PDB riil dua periode. Lihat juga PDB per kapita dan perkiraan waktu menggandakan (aturan 72).
      </p>

      <div className="grid gap-4 sm:grid-cols-3">
        <Slider label="PDB riil tahun lalu" value={pdbAwal} set={setPdbAwal} min={8000} max={15000} step={50} fmt={(v) => `Rp${v.toLocaleString("id-ID")} T`} />
        <Slider label="PDB riil tahun ini" value={pdbAkhir} set={setPdbAkhir} min={8000} max={16000} step={50} fmt={(v) => `Rp${v.toLocaleString("id-ID")} T`} />
        <Slider label="Jumlah penduduk" value={penduduk} set={setPenduduk} min={250} max={300} step={1} fmt={(v) => `${v} juta`} />
      </div>

      <div className="mt-5 grid gap-3 sm:grid-cols-3">
        <div className={`rounded-xl p-4 text-center ${sehat ? "bg-emerald-50" : "bg-amber-50"}`}>
          <div className="text-xs text-ink-faint">Pertumbuhan ekonomi</div>
          <div className={`text-2xl font-extrabold tnum ${sehat ? "text-emerald-700" : "text-amber-700"}`}>{r.pertumbuhan.toFixed(2)}%</div>
        </div>
        <div className="rounded-xl bg-sky-50 p-4 text-center">
          <div className="text-xs text-ink-faint">PDB per kapita</div>
          <div className="text-2xl font-extrabold tnum text-sky-700">Rp{Math.round(r.perKapita).toLocaleString("id-ID")} jt</div>
        </div>
        <div className="rounded-xl bg-violet-50 p-4 text-center">
          <div className="text-xs text-ink-faint">Menggandakan (aturan 72)</div>
          <div className="text-2xl font-extrabold tnum text-violet-700">{Number.isFinite(r.ganda) ? r.ganda.toFixed(0) + " th" : "-"}</div>
        </div>
      </div>

      <p className="mt-3 text-xs text-ink-faint">
        Pertumbuhan dihitung dari PDB riil (bukan nominal) agar bebas dari efek inflasi. Indonesia menargetkan tumbuh sekitar 5% per tahun; selisih 1-2% terasa besar dalam jangka panjang.
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
