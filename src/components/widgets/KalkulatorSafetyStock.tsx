import { useMemo, useState } from "react";

// Safety stock = z x simpangan permintaan harian x akar(lead time).
// Reorder point = (permintaan rata-rata x lead time) + safety stock.
const SERVICE = [
  { label: "90%", z: 1.28 },
  { label: "95%", z: 1.65 },
  { label: "98%", z: 2.05 },
  { label: "99%", z: 2.33 },
];

export function KalkulatorSafetyStock() {
  const [rata, setRata] = useState(100); // permintaan rata-rata per hari
  const [simpangan, setSimpangan] = useState(20); // simpangan baku permintaan harian
  const [leadTime, setLeadTime] = useState(7); // hari
  const [svc, setSvc] = useState(1); // index SERVICE

  const r = useMemo(() => {
    const z = SERVICE[svc].z;
    const ss = z * simpangan * Math.sqrt(leadTime);
    const rop = rata * leadTime + ss;
    return { z, ss, rop };
  }, [rata, simpangan, leadTime, svc]);

  return (
    <div className="my-6 card p-5">
      <div className="mb-1 text-sm font-bold text-brand-700">🛟 Kalkulator Safety Stock & Reorder Point</div>
      <p className="mb-4 text-xs text-ink-faint">
        Berapa stok pengaman dan kapan harus memesan ulang agar tidak kehabisan saat permintaan naik atau pengiriman telat.
      </p>

      <div className="grid gap-4 sm:grid-cols-2">
        <Slider label="Permintaan rata-rata / hari" value={rata} set={setRata} min={10} max={500} step={10} fmt={(v) => `${v} unit`} />
        <Slider label="Simpangan permintaan / hari" value={simpangan} set={setSimpangan} min={0} max={100} step={5} fmt={(v) => `${v} unit`} />
        <Slider label="Lead time pengiriman" value={leadTime} set={setLeadTime} min={1} max={30} step={1} fmt={(v) => `${v} hari`} />
      </div>

      <div className="mt-4">
        <div className="mb-1 text-sm font-semibold text-ink-soft">Tingkat layanan (service level)</div>
        <div className="flex gap-2">
          {SERVICE.map((s, i) => (
            <button
              key={s.label}
              onClick={() => setSvc(i)}
              className={`flex-1 rounded-lg border px-2 py-1.5 text-sm font-bold transition-colors ${svc === i ? "border-brand-600 bg-brand-600 text-white" : "border-line bg-white text-ink-soft hover:border-line-strong"}`}
            >
              {s.label}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-5 grid grid-cols-2 gap-3">
        <div className="rounded-xl bg-amber-50 p-4 text-center">
          <div className="text-xs text-ink-faint">Safety stock</div>
          <div className="text-2xl font-extrabold tnum text-amber-700">{Math.round(r.ss).toLocaleString("id-ID")} unit</div>
          <div className="mt-1 text-xs text-ink-faint">faktor z = {r.z}</div>
        </div>
        <div className="rounded-xl bg-emerald-50 p-4 text-center">
          <div className="text-xs text-ink-faint">Reorder point</div>
          <div className="text-2xl font-extrabold tnum text-emerald-700">{Math.round(r.rop).toLocaleString("id-ID")} unit</div>
          <div className="mt-1 text-xs text-ink-faint">pesan ulang saat stok menyentuh angka ini</div>
        </div>
      </div>
      <p className="mt-2 text-xs text-ink-faint">Makin tinggi tingkat layanan dan makin lama lead time, makin besar stok pengaman yang dibutuhkan.</p>
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
