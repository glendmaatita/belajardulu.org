import { useMemo, useState } from "react";
import { rupiah } from "../../lib/format";

// Efek pengganda (multiplier) fiskal = 1 / (1 - MPC). Tambahan belanja berlipat menjadi
// kenaikan PDB karena pengeluaran satu orang menjadi pendapatan orang lain.
export function KalkulatorMultiplier() {
  const [belanja, setBelanja] = useState(100_000_000_000); // tambahan belanja pemerintah
  const [mpc, setMpc] = useState(0.7); // kecenderungan konsumsi marginal

  const r = useMemo(() => {
    const multiplier = 1 / (1 - mpc);
    const dampakPDB = belanja * multiplier;
    return { multiplier, dampakPDB };
  }, [belanja, mpc]);

  return (
    <div className="my-6 card p-5">
      <div className="mb-1 text-sm font-bold text-brand-700">🔗 Kalkulator Efek Pengganda (Multiplier)</div>
      <p className="mb-4 text-xs text-ink-faint">
        Tambahan belanja pemerintah berputar di ekonomi: belanja satu pihak jadi pendapatan pihak lain. Multiplier = 1 / (1 - MPC).
      </p>

      <div className="grid gap-4 sm:grid-cols-2">
        <Slider label="Tambahan belanja pemerintah" value={belanja} set={setBelanja} min={10_000_000_000} max={500_000_000_000} step={10_000_000_000} fmt={(v) => rupiah(v)} />
        <Slider label="MPC (kecenderungan konsumsi)" value={mpc} set={setMpc} min={0.1} max={0.95} step={0.05} fmt={(v) => v.toFixed(2)} />
      </div>

      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        <div className="rounded-xl bg-sky-50 p-4 text-center">
          <div className="text-xs text-ink-faint">Nilai pengganda</div>
          <div className="text-2xl font-extrabold tnum text-sky-700">{r.multiplier.toFixed(2)}x</div>
        </div>
        <div className="rounded-xl bg-emerald-50 p-4 text-center">
          <div className="text-xs text-ink-faint">Total dampak ke PDB</div>
          <div className="text-2xl font-extrabold tnum text-emerald-700">{rupiah(Math.round(r.dampakPDB))}</div>
        </div>
      </div>

      <p className="mt-3 text-xs text-ink-faint">
        Makin tinggi MPC (orang membelanjakan sebagian besar tambahan pendapatan), makin besar efek pengganda. Inilah dasar stimulus fiskal saat resesi. Pajak dan impor mengurangi efek ini (kebocoran).
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
