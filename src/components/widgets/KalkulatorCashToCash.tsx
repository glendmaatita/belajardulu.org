import { useMemo, useState } from "react";

// Cash-to-cash cycle = DIO + DSO - DPO. Berapa hari uang "terjebak" di rantai pasok
// sejak bayar pemasok sampai terima uang dari pelanggan. Makin pendek makin sehat.
export function KalkulatorCashToCash() {
  const [dio, setDio] = useState(45); // hari persediaan tersimpan
  const [dso, setDso] = useState(30); // hari piutang tertagih
  const [dpo, setDpo] = useState(40); // hari tempo bayar ke pemasok

  const ccc = useMemo(() => dio + dso - dpo, [dio, dso, dpo]);

  return (
    <div className="my-6 card p-5">
      <div className="mb-1 text-sm font-bold text-brand-700">💸 Kalkulator Siklus Kas (Cash-to-Cash)</div>
      <p className="mb-4 text-xs text-ink-faint">
        Berapa hari uang perusahaan tertahan di rantai pasok, dari membayar pemasok sampai menerima bayaran pelanggan.
      </p>

      <div className="grid gap-4 sm:grid-cols-3">
        <Slider label="DIO · persediaan tersimpan" value={dio} set={setDio} min={5} max={120} step={5} fmt={(v) => `${v} hari`} />
        <Slider label="DSO · piutang tertagih" value={dso} set={setDso} min={0} max={120} step={5} fmt={(v) => `${v} hari`} />
        <Slider label="DPO · tempo bayar pemasok" value={dpo} set={setDpo} min={0} max={120} step={5} fmt={(v) => `${v} hari`} />
      </div>

      <div className="mt-5 flex items-stretch overflow-hidden rounded-xl text-center text-xs font-bold text-white" style={{ height: 44 }}>
        <div className="flex items-center justify-center bg-emerald-500" style={{ width: `${(dio / (dio + dso)) * 100}%` }}>+{dio}</div>
        <div className="flex items-center justify-center bg-brand-500" style={{ width: `${(dso / (dio + dso)) * 100}%` }}>+{dso}</div>
      </div>
      <div className="mt-1 text-center text-xs text-ink-faint">DPO {dpo} hari dibayar belakangan (mengurangi siklus)</div>

      <div className={`mt-4 rounded-xl p-4 text-center ${ccc <= 20 ? "bg-emerald-50 text-emerald-700" : ccc <= 60 ? "bg-amber-50 text-amber-700" : "bg-rose-50 text-rose-700"}`}>
        <div className="text-xs text-ink-faint">Siklus kas = {dio} + {dso} − {dpo}</div>
        <div className="text-3xl font-extrabold tnum">{ccc} hari</div>
        <div className="mt-1 text-sm">{ccc < 0 ? "Negatif: pelanggan membayar sebelum Anda bayar pemasok, sangat sehat." : "Makin pendek, makin sedikit modal kerja yang dibutuhkan."}</div>
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
