import { useMemo, useState } from "react";

// Simulator APBN: pendapatan vs belanja menentukan surplus/defisit dan rasionya terhadap PDB.
export function SimulatorAPBN() {
  const [pendapatan, setPendapatan] = useState(2800); // triliun
  const [belanja, setBelanja] = useState(3300);
  const [pdb, setPdb] = useState(22000);

  const r = useMemo(() => {
    const saldo = pendapatan - belanja;
    const defisit = saldo < 0 ? -saldo : 0;
    const rasioDefisit = (Math.abs(saldo) / pdb) * 100;
    const lewatBatas = saldo < 0 && rasioDefisit > 3;
    return { saldo, defisit, rasioDefisit, lewatBatas };
  }, [pendapatan, belanja, pdb]);

  const surplus = r.saldo >= 0;

  return (
    <div className="my-6 card p-5">
      <div className="mb-1 text-sm font-bold text-brand-700">🏛️ Simulator APBN</div>
      <p className="mb-4 text-xs text-ink-faint">
        Atur pendapatan dan belanja negara (triliun rupiah). Lihat saldo anggaran dan rasionya terhadap PDB, dengan batas hukum defisit 3% PDB.
      </p>

      <div className="grid gap-4 sm:grid-cols-3">
        <Slider label="Pendapatan negara" value={pendapatan} set={setPendapatan} min={1500} max={4000} step={50} fmt={(v) => `Rp${v.toLocaleString("id-ID")} T`} />
        <Slider label="Belanja negara" value={belanja} set={setBelanja} min={1500} max={4500} step={50} fmt={(v) => `Rp${v.toLocaleString("id-ID")} T`} />
        <Slider label="PDB" value={pdb} set={setPdb} min={15000} max={30000} step={500} fmt={(v) => `Rp${v.toLocaleString("id-ID")} T`} />
      </div>

      <div className="mt-5 flex h-7 overflow-hidden rounded-lg">
        <div className="flex items-center justify-center bg-emerald-500 text-[11px] font-bold text-white" style={{ width: `${(pendapatan / belanja) * 100 > 100 ? 100 : (pendapatan / belanja) * 100}%` }}>
          Pendapatan
        </div>
        <div className="flex items-center justify-center bg-rose-400 text-[11px] font-bold text-white" style={{ width: `${(pendapatan / belanja) * 100 > 100 ? 0 : 100 - (pendapatan / belanja) * 100}%` }}>
          {!surplus ? "Defisit" : ""}
        </div>
      </div>

      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        <div className={`rounded-xl p-4 text-center ${surplus ? "bg-emerald-50" : "bg-amber-50"}`}>
          <div className="text-xs text-ink-faint">Saldo anggaran</div>
          <div className={`text-xl font-extrabold tnum ${surplus ? "text-emerald-700" : "text-amber-700"}`}>
            {surplus ? "Surplus " : "Defisit "}Rp{Math.abs(r.saldo).toLocaleString("id-ID")} T
          </div>
        </div>
        <div className={`rounded-xl p-4 text-center ${r.lewatBatas ? "bg-rose-50" : "bg-sky-50"}`}>
          <div className="text-xs text-ink-faint">Rasio terhadap PDB</div>
          <div className={`text-xl font-extrabold tnum ${r.lewatBatas ? "text-rose-700" : "text-sky-700"}`}>{r.rasioDefisit.toFixed(2)}%</div>
          <div className="text-xs text-ink-faint">{r.lewatBatas ? "Melebihi batas 3% PDB!" : "Dalam batas aman (< 3% PDB)"}</div>
        </div>
      </div>

      <p className="mt-3 text-xs text-ink-faint">
        UU Keuangan Negara membatasi defisit APBN maksimal 3% PDB. Defisit ditutup lewat pembiayaan, terutama penerbitan SBN.
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
