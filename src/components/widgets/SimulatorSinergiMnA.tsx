import { useMemo, useState } from "react";
import { rupiah } from "../../lib/format";

// Sinergi M&A: nilai yang diciptakan = sinergi - premi yang dibayar.
// Deal hanya menambah nilai bagi pengakuisisi jika sinergi melebihi premi.
export function SimulatorSinergiMnA() {
  const [nilaiTarget, setNilaiTarget] = useState(60_000_000_000); // nilai wajar target (standalone)
  const [premi, setPremi] = useState(30); // % premi di atas nilai wajar
  const [sinergi, setSinergi] = useState(25_000_000_000); // nilai sinergi yang diharapkan

  const r = useMemo(() => {
    const nilaiPremi = nilaiTarget * (premi / 100);
    const hargaBeli = nilaiTarget + nilaiPremi;
    const nilaiDiciptakan = sinergi - nilaiPremi; // untuk pengakuisisi
    return { nilaiPremi, hargaBeli, nilaiDiciptakan };
  }, [nilaiTarget, premi, sinergi]);

  const untung = r.nilaiDiciptakan > 0;

  return (
    <div className="my-6 card p-5">
      <div className="mb-1 text-sm font-bold text-brand-700">🤝 Simulator Sinergi M&A</div>
      <p className="mb-4 text-xs text-ink-faint">
        Akuisisi menambah nilai hanya jika sinergi melebihi premi yang dibayar. Atur premi dan sinergi, lihat nilai yang tercipta.
      </p>

      <div className="grid gap-4 sm:grid-cols-3">
        <Slider label="Nilai wajar target" value={nilaiTarget} set={setNilaiTarget} min={10_000_000_000} max={300_000_000_000} step={10_000_000_000} fmt={(v) => rupiah(v)} />
        <Slider label="Premi akuisisi" value={premi} set={setPremi} min={0} max={80} step={5} fmt={(v) => `${v}%`} />
        <Slider label="Sinergi diharapkan" value={sinergi} set={setSinergi} min={0} max={150_000_000_000} step={5_000_000_000} fmt={(v) => rupiah(v)} />
      </div>

      <div className="mt-5 space-y-1.5 rounded-xl bg-canvas p-4 text-sm">
        <Row label="Nilai premi yang dibayar" value={rupiah(Math.round(r.nilaiPremi))} />
        <Row label="Harga beli (nilai wajar + premi)" value={rupiah(Math.round(r.hargaBeli))} />
        <Row label="Sinergi diharapkan" value={rupiah(Math.round(sinergi))} />
      </div>

      <div className={`mt-3 rounded-xl p-4 text-center ${untung ? "bg-emerald-50" : "bg-rose-50"}`}>
        <div className="text-xs text-ink-faint">Nilai diciptakan untuk pengakuisisi (sinergi - premi)</div>
        <div className={`text-2xl font-extrabold tnum ${untung ? "text-emerald-700" : "text-rose-700"}`}>
          {untung ? "+" : ""}{rupiah(Math.round(r.nilaiDiciptakan))}
        </div>
        <div className="mt-1 text-xs text-ink-faint">
          {untung ? "Deal menambah nilai: sinergi melebihi premi." : "Deal menghancurkan nilai: premi melebihi sinergi (overpay)."}
        </div>
      </div>

      <p className="mt-3 text-xs text-ink-faint">
        Banyak akuisisi gagal karena pengakuisisi terlalu optimistis menaksir sinergi dan membayar premi terlalu tinggi. Disiplin harga adalah kunci.
      </p>
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-ink-soft">{label}</span>
      <span className="tnum font-bold text-ink">{value}</span>
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
