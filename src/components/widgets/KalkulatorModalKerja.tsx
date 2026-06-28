import { useMemo, useState } from "react";
import { rupiah } from "../../lib/format";

// Kebutuhan modal kerja diturunkan dari siklus konversi kas (CCC).
// Modal kerja operasional = (CCC / 365) x biaya operasional tahunan (pendekatan sederhana).
export function KalkulatorModalKerja() {
  const [penjualan, setPenjualan] = useState(3_650_000_000); // penjualan tahunan
  const [dio, setDio] = useState(60); // days inventory outstanding
  const [dso, setDso] = useState(45); // days sales outstanding
  const [dpo, setDpo] = useState(30); // days payable outstanding

  const r = useMemo(() => {
    const ccc = dio + dso - dpo;
    const perHari = penjualan / 365;
    const kebutuhan = perHari * ccc; // kasar: dana tertahan selama CCC
    return { ccc, perHari, kebutuhan };
  }, [penjualan, dio, dso, dpo]);

  return (
    <div className="my-6 card p-5">
      <div className="mb-1 text-sm font-bold text-brand-700">🔄 Kalkulator Modal Kerja (CCC)</div>
      <p className="mb-4 text-xs text-ink-faint">
        Cash Conversion Cycle mengukur berapa lama kas terjebak di operasi. Makin panjang, makin besar modal kerja yang harus disediakan.
      </p>

      <div className="grid gap-4 sm:grid-cols-2">
        <Slider label="Penjualan per tahun" value={penjualan} set={setPenjualan} min={365_000_000} max={36_500_000_000} step={365_000_000} fmt={(v) => rupiah(v)} />
        <Slider label="DIO (hari persediaan)" value={dio} set={setDio} min={0} max={180} step={5} fmt={(v) => `${v} hari`} />
        <Slider label="DSO (hari piutang)" value={dso} set={setDso} min={0} max={180} step={5} fmt={(v) => `${v} hari`} />
        <Slider label="DPO (hari utang usaha)" value={dpo} set={setDpo} min={0} max={180} step={5} fmt={(v) => `${v} hari`} />
      </div>

      <div className="mt-5 rounded-xl bg-slate-50 p-4 text-center">
        <div className="text-xs text-ink-faint">Cash Conversion Cycle = DIO + DSO - DPO</div>
        <div className="text-3xl font-extrabold tnum text-sky-700">
          {dio} + {dso} - {dpo} = {r.ccc} hari
        </div>
      </div>

      <div className="mt-3 rounded-xl bg-emerald-50 p-4 text-center">
        <div className="text-xs text-ink-faint">Perkiraan kebutuhan modal kerja</div>
        <div className="text-2xl font-extrabold tnum text-emerald-700">{rupiah(Math.round(r.kebutuhan))}</div>
      </div>

      <p className="mt-3 text-xs text-ink-faint">
        Menurunkan persediaan/piutang atau memperpanjang tempo bayar ke pemasok akan memendekkan CCC dan membebaskan kas. CCC negatif berarti pemasok ikut mendanai operasi.
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
