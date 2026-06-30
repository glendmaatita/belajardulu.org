import { useMemo, useState } from "react";

// Efek bullwhip: variasi permintaan konsumen membesar di tiap simpul ke hulu.
// Berbagi data permintaan nyata meredam penguatan ini.
const TIER = ["Konsumen", "Pengecer", "Distributor", "Pabrik", "Pemasok"];

export function SimulatorBullwhip() {
  const [variasi, setVariasi] = useState(10); // simpangan permintaan konsumen (%)
  const [berbagiData, setBerbagiData] = useState(false);

  const rows = useMemo(() => {
    // Tanpa berbagi data, tiap simpul memperkuat ~45%. Dengan berbagi data, ~5%.
    const faktor = berbagiData ? 1.05 : 1.45;
    return TIER.map((nama, i) => ({ nama, nilai: variasi * Math.pow(faktor, i) }));
  }, [variasi, berbagiData]);

  const maks = rows[rows.length - 1].nilai;

  return (
    <div className="my-6 card p-5">
      <div className="mb-1 text-sm font-bold text-brand-700">🌊 Simulator Efek Bullwhip</div>
      <p className="mb-4 text-xs text-ink-faint">
        Lihat bagaimana ayunan kecil permintaan konsumen membesar saat menjalar ke hulu, dan bagaimana berbagi data meredamnya.
      </p>

      <Slider label="Simpangan permintaan konsumen" value={variasi} set={setVariasi} min={2} max={25} step={1} fmt={(v) => `±${v}%`} />

      <label className="mt-4 flex cursor-pointer items-center gap-2 text-sm">
        <input type="checkbox" checked={berbagiData} onChange={(e) => setBerbagiData(e.target.checked)} className="h-4 w-4 accent-brand-600" />
        <span className="font-semibold text-ink-soft">Bagikan data permintaan nyata ke seluruh rantai</span>
      </label>

      <div className="mt-5 space-y-2">
        {rows.map((r) => (
          <div key={r.nama} className="flex items-center gap-3">
            <span className="w-24 shrink-0 text-xs font-semibold text-ink-soft">{r.nama}</span>
            <div className="h-6 flex-1 overflow-hidden rounded-lg bg-canvas">
              <div
                className={`h-full rounded-lg ${berbagiData ? "bg-emerald-500" : "bg-rose-500"}`}
                style={{ width: `${(r.nilai / maks) * 100}%` }}
              />
            </div>
            <span className="tnum w-16 shrink-0 text-right text-sm font-bold text-ink">±{r.nilai.toFixed(0)}%</span>
          </div>
        ))}
      </div>

      <div className={`mt-4 rounded-xl p-4 text-center text-sm ${berbagiData ? "bg-emerald-50 text-emerald-700" : "bg-rose-50 text-rose-700"}`}>
        Penguatan di pemasok: <strong>{(maks / variasi).toFixed(1)}x</strong> dari ayunan konsumen.
        {berbagiData ? " Berbagi data menjaga rantai tetap tenang." : " Tanpa berbagi data, hulu menumpuk stok berlebih."}
      </div>
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
