import { useMemo, useState } from "react";

// Tax ratio = penerimaan pajak / PDB x 100%. Indikator seberapa optimal negara memungut pajak.
export function KalkulatorTaxRatio() {
  const [pajak, setPajak] = useState(2200); // triliun penerimaan pajak
  const [pdb, setPdb] = useState(22000); // triliun PDB

  const r = useMemo(() => {
    const ratio = (pajak / pdb) * 100;
    let kategori = "Rendah";
    if (ratio >= 15) kategori = "Cukup tinggi";
    else if (ratio >= 12) kategori = "Sedang";
    // potensi tambahan bila naik ke 12%
    const targetRatio = 12;
    const potensi = pdb * (targetRatio / 100) - pajak;
    return { ratio, kategori, potensi };
  }, [pajak, pdb]);

  const warna = r.ratio >= 12 ? "text-emerald-700" : "text-amber-700";
  const bg = r.ratio >= 12 ? "bg-emerald-50" : "bg-amber-50";

  return (
    <div className="my-6 card p-5">
      <div className="mb-1 text-sm font-bold text-brand-700">📊 Kalkulator Tax Ratio</div>
      <p className="mb-4 text-xs text-ink-faint">
        Tax ratio mengukur penerimaan pajak sebagai persentase PDB. Makin tinggi, makin besar kemampuan negara membiayai belanja dari pajak.
      </p>

      <div className="grid gap-4 sm:grid-cols-2">
        <Slider label="Penerimaan pajak" value={pajak} set={setPajak} min={1000} max={4000} step={50} fmt={(v) => `Rp${v.toLocaleString("id-ID")} T`} />
        <Slider label="PDB" value={pdb} set={setPdb} min={15000} max={30000} step={500} fmt={(v) => `Rp${v.toLocaleString("id-ID")} T`} />
      </div>

      <div className={`mt-5 rounded-xl ${bg} p-4 text-center`}>
        <div className="text-xs text-ink-faint">Tax ratio</div>
        <div className={`text-3xl font-extrabold tnum ${warna}`}>{r.ratio.toFixed(1)}%</div>
        <div className={`mt-1 text-sm font-bold ${warna}`}>{r.kategori}</div>
      </div>

      <p className="mt-3 text-xs text-ink-faint">
        Tax ratio Indonesia berkisar 10-11%, relatif rendah dibanding negara maju (di atas 20%). {r.potensi > 0 ? `Untuk mencapai 12% PDB, butuh tambahan sekitar Rp${Math.round(r.potensi).toLocaleString("id-ID")} triliun.` : "Sudah di atas 12% PDB."} Inilah alasan reformasi perpajakan terus didorong.
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
