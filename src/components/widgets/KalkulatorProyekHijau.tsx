import { useMemo, useState } from "react";
import { rupiah, angka } from "../../lib/format";

// Kelayakan proyek hijau (mis. PLTS): NPV dan payback dari arus kas.
export function KalkulatorProyekHijau() {
  const [capex, setCapex] = useState(50); // Rp miliar investasi awal
  const [arusKas, setArusKas] = useState(9); // Rp miliar per tahun (hemat listrik + pendapatan karbon)
  const [umur, setUmur] = useState(15); // tahun
  const [diskonto, setDiskonto] = useState(10); // %

  const r = useMemo(() => {
    const c0 = capex * 1_000_000_000;
    const cf = arusKas * 1_000_000_000;
    const d = diskonto / 100;
    let pv = 0;
    for (let t = 1; t <= umur; t++) pv += cf / Math.pow(1 + d, t);
    const npv = pv - c0;
    const payback = cf > 0 ? c0 / cf : Infinity;
    return { c0, cf, npv, payback, layak: npv > 0 };
  }, [capex, arusKas, umur, diskonto]);

  return (
    <div className="my-6 card p-5">
      <div className="mb-1 text-sm font-bold text-brand-700">☀️ Kalkulator Kelayakan Proyek Hijau</div>
      <p className="mb-4 text-xs text-ink-faint">
        Apakah proyek (mis. PLTS atap) layak dibiayai? Hitung NPV (nilai kini bersih) dan payback dari arus kasnya.
      </p>

      <div className="grid gap-4 sm:grid-cols-2">
        <Slider label="Investasi awal (capex)" value={capex} set={setCapex} min={5} max={500} step={5} fmt={(v) => `Rp${angka(v)} miliar`} />
        <Slider label="Arus kas / tahun (hemat + karbon)" value={arusKas} set={setArusKas} min={1} max={100} step={1} fmt={(v) => `Rp${angka(v)} miliar`} />
        <Slider label="Umur proyek" value={umur} set={setUmur} min={1} max={30} step={1} fmt={(v) => `${v} tahun`} />
        <Slider label="Tingkat diskonto" value={diskonto} set={setDiskonto} min={3} max={20} step={1} fmt={(v) => `${v}%`} />
      </div>

      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        <div className={`rounded-xl p-4 ${r.layak ? "bg-emerald-50" : "bg-rose-50"}`}>
          <div className="text-xs text-ink-faint">NPV (nilai kini bersih)</div>
          <div className={`text-xl font-extrabold tnum ${r.layak ? "text-emerald-700" : "text-rose-600"}`}>
            {rupiah(Math.round(r.npv))}
          </div>
          <div className={`text-xs font-semibold ${r.layak ? "text-emerald-600" : "text-rose-500"}`}>
            {r.layak ? "✓ Layak (NPV positif)" : "✗ Belum layak (NPV negatif)"}
          </div>
        </div>
        <div className="rounded-xl bg-canvas p-4">
          <div className="text-xs text-ink-faint">Payback (balik modal)</div>
          <div className="text-xl font-extrabold tnum text-sky-700">
            {Number.isFinite(r.payback) ? `${r.payback.toFixed(1)} tahun` : "-"}
          </div>
        </div>
      </div>
      <p className="mt-3 text-xs text-ink-faint">
        NPV positif berarti proyek menghasilkan nilai lebih besar dari biayanya setelah memperhitungkan nilai waktu
        uang. Pendapatan karbon bisa membuat proyek yang tadinya tidak layak menjadi layak.
      </p>
    </div>
  );
}

function Slider({
  label,
  value,
  set,
  min,
  max,
  step,
  fmt,
}: {
  label: string;
  value: number;
  set: (n: number) => void;
  min: number;
  max: number;
  step: number;
  fmt: (v: number) => string;
}) {
  return (
    <div>
      <div className="mb-1 flex items-center justify-between">
        <span className="text-sm font-semibold text-ink-soft">{label}</span>
        <span className="tnum text-sm font-bold text-ink">{fmt(value)}</span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => set(Number(e.target.value))}
        className="h-2 w-full cursor-pointer appearance-none rounded-full bg-line accent-brand-600"
      />
    </div>
  );
}
