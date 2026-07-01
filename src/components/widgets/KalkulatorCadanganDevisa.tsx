import { useMemo, useState } from "react";

// Kecukupan cadangan devisa sering diukur dalam "bulan impor": berapa lama
// cadangan bisa membiayai impor bila tak ada penerimaan. Ambang umum aman
// menurut standar internasional sekitar 3 bulan impor.
export function KalkulatorCadanganDevisa() {
  const [cadangan, setCadangan] = useState(140); // miliar USD
  const [imporBulanan, setImporBulanan] = useState(20); // miliar USD per bulan

  const r = useMemo(() => {
    const bulan = imporBulanan > 0 ? cadangan / imporBulanan : 0;
    const aman = bulan >= 3;
    return { bulan, aman };
  }, [cadangan, imporBulanan]);

  return (
    <div className="my-6 card p-5">
      <div className="mb-1 text-sm font-bold text-brand-700">💵 Kalkulator Cadangan Devisa</div>
      <p className="mb-4 text-xs text-ink-faint">
        Cadangan devisa adalah amunisi bank sentral untuk menjaga nilai tukar dan membayar kewajiban luar negeri.
        Kecukupannya diukur dalam bulan impor; ambang aman internasional sekitar 3 bulan.
      </p>

      <Slider label="Cadangan devisa" value={cadangan} min={20} max={300} step={5} fmt={(n) => `USD ${n} miliar`} onChange={setCadangan} />
      <Slider label="Impor per bulan" value={imporBulanan} min={5} max={50} step={1} fmt={(n) => `USD ${n} miliar`} onChange={setImporBulanan} />

      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        <div className={`rounded-xl p-4 ${r.aman ? "bg-emerald-50" : "bg-rose-50"}`}>
          <div className="text-xs text-ink-faint">Setara berapa bulan impor</div>
          <div className={`text-xl font-extrabold tnum ${r.aman ? "text-emerald-700" : "text-rose-700"}`}>{r.bulan.toFixed(1)} bulan</div>
        </div>
        <div className="rounded-xl bg-canvas p-4">
          <div className="text-xs text-ink-faint">Status kecukupan</div>
          <div className={`text-lg font-extrabold ${r.aman ? "text-emerald-700" : "text-rose-700"}`}>{r.aman ? "Di atas ambang aman" : "Di bawah ambang 3 bulan"}</div>
        </div>
      </div>
      <p className="mt-3 rounded-lg bg-brand-50 px-3 py-2 text-sm text-brand-800">
        Cadangan yang tebal memberi ruang bagi bank sentral melakukan intervensi menstabilkan rupiah saat pasar
        bergejolak, dan menjaga kepercayaan investor.
      </p>
    </div>
  );
}

function Slider({ label, value, min, max, step, fmt, onChange }: { label: string; value: number; min: number; max: number; step: number; fmt: (n: number) => string; onChange: (n: number) => void }) {
  return (
    <div className="mb-3">
      <div className="mb-1 flex items-center justify-between">
        <span className="text-sm font-semibold text-ink-soft">{label}</span>
        <span className="tnum text-sm font-bold text-ink">{fmt(value)}</span>
      </div>
      <input type="range" min={min} max={max} step={step} value={value} onChange={(e) => onChange(Number(e.target.value))} className="h-2 w-full cursor-pointer appearance-none rounded-full bg-line accent-brand-600" />
    </div>
  );
}
