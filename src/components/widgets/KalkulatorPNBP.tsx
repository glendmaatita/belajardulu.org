import { useMemo, useState } from "react";

// PNBP (Penerimaan Negara Bukan Pajak): jumlahkan sumber dan lihat porsinya terhadap total penerimaan.
export function KalkulatorPNBP() {
  const [sda, setSda] = useState(220); // SDA migas & minerba (triliun)
  const [layanan, setLayanan] = useState(120); // layanan/BLU
  const [dividenBumn, setDividenBumn] = useState(80); // kekayaan negara dipisahkan
  const [lainnya, setLainnya] = useState(50);
  const pajak = 2200; // penerimaan pajak untuk konteks (perbandingan)

  const r = useMemo(() => {
    const totalPNBP = sda + layanan + dividenBumn + lainnya;
    const totalPenerimaan = totalPNBP + pajak;
    const porsiPNBP = (totalPNBP / totalPenerimaan) * 100;
    return { totalPNBP, totalPenerimaan, porsiPNBP };
  }, [sda, layanan, dividenBumn, lainnya, pajak]);

  const komp = [
    { label: "SDA", value: sda, color: "#10b981" },
    { label: "Layanan/BLU", value: layanan, color: "#0ea5e9" },
    { label: "Dividen BUMN", value: dividenBumn, color: "#f59e0b" },
    { label: "Lainnya", value: lainnya, color: "#8b5cf6" },
  ];

  return (
    <div className="my-6 card p-5">
      <div className="mb-1 text-sm font-bold text-brand-700">⛏️ Kalkulator PNBP</div>
      <p className="mb-4 text-xs text-ink-faint">
        Selain pajak, negara menerima PNBP dari sumber daya alam, layanan pemerintah, dan dividen BUMN. Hitung totalnya dan porsinya terhadap penerimaan negara (triliun rupiah).
      </p>

      <div className="grid gap-4 sm:grid-cols-2">
        <Slider label="SDA (migas & minerba)" value={sda} set={setSda} min={50} max={500} step={10} fmt={(v) => `Rp${v} T`} />
        <Slider label="Layanan & BLU" value={layanan} set={setLayanan} min={20} max={300} step={10} fmt={(v) => `Rp${v} T`} />
        <Slider label="Dividen BUMN" value={dividenBumn} set={setDividenBumn} min={20} max={200} step={10} fmt={(v) => `Rp${v} T`} />
        <Slider label="PNBP lainnya" value={lainnya} set={setLainnya} min={0} max={200} step={10} fmt={(v) => `Rp${v} T`} />
      </div>

      <div className="mt-5 flex h-7 overflow-hidden rounded-lg">
        {komp.map((k, i) => (
          <div key={i} className="flex items-center justify-center text-[10px] font-bold text-white" style={{ width: `${(k.value / r.totalPNBP) * 100}%`, background: k.color }}>
            {(k.value / r.totalPNBP) > 0.14 ? k.label : ""}
          </div>
        ))}
      </div>

      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        <div className="rounded-xl bg-emerald-50 p-4 text-center">
          <div className="text-xs text-ink-faint">Total PNBP</div>
          <div className="text-xl font-extrabold tnum text-emerald-700">Rp{r.totalPNBP.toLocaleString("id-ID")} T</div>
        </div>
        <div className="rounded-xl bg-sky-50 p-4 text-center">
          <div className="text-xs text-ink-faint">Porsi PNBP dari total penerimaan</div>
          <div className="text-xl font-extrabold tnum text-sky-700">{r.porsiPNBP.toFixed(1)}%</div>
        </div>
      </div>

      <p className="mt-3 text-xs text-ink-faint">
        PNBP penting tetapi sebagian (terutama SDA) bersifat fluktuatif mengikuti harga komoditas dunia. Karena itu, pajak yang lebih stabil tetap menjadi tulang punggung penerimaan negara.
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
