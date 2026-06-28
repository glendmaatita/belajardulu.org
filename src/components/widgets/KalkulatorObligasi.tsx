import { useMemo, useState } from "react";

// Harga obligasi = nilai kini kupon + nilai kini pokok, didiskon dengan yield.
// Menunjukkan hubungan terbalik harga dan yield.
export function KalkulatorObligasi() {
  const [par, setPar] = useState(1000); // nilai nominal
  const [kupon, setKupon] = useState(6); // kupon tahunan %
  const [yield_, setYield] = useState(8); // yield pasar %
  const [tenor, setTenor] = useState(5); // tahun

  const r = useMemo(() => {
    const c = par * (kupon / 100);
    const y = yield_ / 100;
    let harga = 0;
    for (let t = 1; t <= tenor; t++) harga += c / Math.pow(1 + y, t);
    harga += par / Math.pow(1 + y, tenor);
    const status = harga > par ? "Premium (di atas par)" : harga < par ? "Discount (di bawah par)" : "Par";
    return { harga, status };
  }, [par, kupon, yield_, tenor]);

  return (
    <div className="my-6 card p-5">
      <div className="mb-1 text-sm font-bold text-brand-700">📜 Kalkulator Harga Obligasi</div>
      <p className="mb-4 text-xs text-ink-faint">
        Harga obligasi adalah nilai kini dari kupon dan pokoknya. Naikkan yield dan lihat harga turun (hubungan terbalik).
      </p>

      <div className="grid gap-4 sm:grid-cols-2">
        <Slider label="Nilai nominal (par)" value={par} set={setPar} min={1000} max={10000} step={1000} fmt={(v) => `Rp${v.toLocaleString("id-ID")}`} />
        <Slider label="Kupon tahunan" value={kupon} set={setKupon} min={0} max={15} step={0.5} fmt={(v) => `${v}%`} />
        <Slider label="Yield pasar" value={yield_} set={setYield} min={1} max={15} step={0.5} fmt={(v) => `${v}%`} />
        <Slider label="Tenor" value={tenor} set={setTenor} min={1} max={20} step={1} fmt={(v) => `${v} tahun`} />
      </div>

      <div className="mt-5 rounded-xl bg-emerald-50 p-4 text-center">
        <div className="text-xs text-ink-faint">Harga wajar obligasi</div>
        <div className="text-3xl font-extrabold tnum text-emerald-700">Rp{Math.round(r.harga).toLocaleString("id-ID")}</div>
        <div className="mt-1 text-sm font-bold text-ink-soft">{r.status}</div>
      </div>

      <p className="mt-3 text-xs text-ink-faint">
        Saat yield {">"} kupon, harga di bawah par (discount). Saat yield {"<"} kupon, harga di atas par (premium). Kupon tetap, tetapi harga menyesuaikan agar yield kompetitif dengan pasar.
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
