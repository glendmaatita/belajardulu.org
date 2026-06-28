import { useMemo, useState } from "react";

// Keseimbangan primer = penerimaan - belanja di luar bunga utang. Indikator keberlanjutan fiskal.
export function KalkulatorPrimaryBalance() {
  const [penerimaan, setPenerimaan] = useState(2800); // triliun
  const [belanjaNonBunga, setBelanjaNonBunga] = useState(2750);
  const [bungaUtang, setBungaUtang] = useState(500);

  const r = useMemo(() => {
    const keseimbanganPrimer = penerimaan - belanjaNonBunga;
    const belanjaTotal = belanjaNonBunga + bungaUtang;
    const defisitTotal = penerimaan - belanjaTotal;
    return { keseimbanganPrimer, belanjaTotal, defisitTotal };
  }, [penerimaan, belanjaNonBunga, bungaUtang]);

  const fmt = (n: number) => (n >= 0 ? "Surplus Rp" : "Defisit Rp") + Math.abs(n).toLocaleString("id-ID") + " T";
  const primerSehat = r.keseimbanganPrimer >= 0;

  return (
    <div className="my-6 card p-5">
      <div className="mb-1 text-sm font-bold text-brand-700">🧮 Kalkulator Keseimbangan Primer</div>
      <p className="mb-4 text-xs text-ink-faint">
        Keseimbangan primer = penerimaan dikurangi belanja DI LUAR bunga utang. Bila positif, pemerintah bisa membiayai operasinya tanpa berutang untuk membayar bunga, tanda fiskal yang sehat.
      </p>

      <div className="grid gap-4 sm:grid-cols-3">
        <Slider label="Penerimaan negara" value={penerimaan} set={setPenerimaan} min={2000} max={3500} step={50} fmt={(v) => `Rp${v.toLocaleString("id-ID")} T`} />
        <Slider label="Belanja non-bunga" value={belanjaNonBunga} set={setBelanjaNonBunga} min={2000} max={3500} step={50} fmt={(v) => `Rp${v.toLocaleString("id-ID")} T`} />
        <Slider label="Bunga utang" value={bungaUtang} set={setBungaUtang} min={200} max={900} step={25} fmt={(v) => `Rp${v.toLocaleString("id-ID")} T`} />
      </div>

      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        <div className={`rounded-xl p-4 text-center ${primerSehat ? "bg-emerald-50" : "bg-amber-50"}`}>
          <div className="text-xs text-ink-faint">Keseimbangan primer</div>
          <div className={`text-xl font-extrabold tnum ${primerSehat ? "text-emerald-700" : "text-amber-700"}`}>{fmt(r.keseimbanganPrimer)}</div>
        </div>
        <div className={`rounded-xl p-4 text-center ${r.defisitTotal >= 0 ? "bg-emerald-50" : "bg-rose-50"}`}>
          <div className="text-xs text-ink-faint">Saldo anggaran total</div>
          <div className={`text-xl font-extrabold tnum ${r.defisitTotal >= 0 ? "text-emerald-700" : "text-rose-700"}`}>{fmt(r.defisitTotal)}</div>
        </div>
      </div>

      <p className="mt-3 text-xs text-ink-faint">
        {primerSehat
          ? "Keseimbangan primer surplus: utang baru hanya untuk menutup bunga, beban utang cenderung terkendali."
          : "Keseimbangan primer defisit: pemerintah berutang bahkan untuk operasi rutin di luar bunga, sinyal perlu konsolidasi fiskal."}
        {" "}Mencapai keseimbangan primer positif adalah target penting menuju keberlanjutan fiskal.
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
