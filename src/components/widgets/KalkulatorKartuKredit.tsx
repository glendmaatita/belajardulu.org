import { useMemo, useState } from "react";
import { rupiah } from "../../lib/format";

// Jebakan bayar minimum: bila hanya membayar cicilan minimum, utang kartu kredit
// hampir tak berkurang karena bunga terus berjalan. Simulasi berapa lama lunas.
export function KalkulatorKartuKredit() {
  const [utang, setUtang] = useState(10_000_000);
  const [bungaBulan, setBungaBulan] = useState(1.75); // % per bulan (batas OJK saat ini sekitar 1,75%)
  const [minPersen, setMinPersen] = useState(5); // bayar minimum % dari saldo

  const r = useMemo(() => {
    let saldo = utang;
    let bulan = 0;
    let totalBunga = 0;
    const i = bungaBulan / 100;
    // simulasi bayar minimum (dengan lantai Rp50.000)
    while (saldo > 1000 && bulan < 600) {
      const bunga = saldo * i;
      totalBunga += bunga;
      let bayar = Math.max(saldo * (minPersen / 100), 50_000);
      bayar = Math.min(bayar, saldo + bunga);
      saldo = saldo + bunga - bayar;
      bulan++;
    }
    return { bulan, totalBunga };
  }, [utang, bungaBulan, minPersen]);

  return (
    <div className="my-6 card p-5">
      <div className="mb-1 text-sm font-bold text-brand-700">💳 Kalkulator Jebakan Kartu Kredit</div>
      <p className="mb-4 text-xs text-ink-faint">
        Membayar hanya cicilan minimum terlihat ringan, tetapi bunga terus berjalan sehingga utang lunasnya sangat
        lama dan total bunganya besar. Lihat sendiri dampaknya.
      </p>

      <Slider label="Saldo utang kartu kredit" value={utang} min={1_000_000} max={100_000_000} step={1_000_000} fmt={rupiah} onChange={setUtang} />
      <Slider label="Bunga per bulan" value={bungaBulan} min={0.5} max={3} step={0.05} fmt={(n) => `${n}%`} onChange={setBungaBulan} />
      <Slider label="Bayar minimum" value={minPersen} min={5} max={100} step={5} fmt={(n) => `${n}% saldo`} onChange={setMinPersen} />

      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        <Box label="Lama lunas (bayar minimum)" value={r.bulan >= 600 ? "Lebih dari 50 tahun" : `${Math.floor(r.bulan / 12)} thn ${r.bulan % 12} bln`} color="text-rose-700" />
        <Box label="Total bunga dibayar" value={rupiah(Math.round(r.totalBunga))} color="text-rose-700" />
      </div>
      <p className="mt-3 rounded-lg bg-brand-50 px-3 py-2 text-sm text-brand-800">
        Makin besar porsi bayar per bulan, makin cepat lunas dan makin kecil bunga total. Idealnya lunasi penuh setiap
        bulan agar tidak kena bunga sama sekali.
      </p>
    </div>
  );
}

function Box({ label, value, color }: { label: string; value: string; color: string }) {
  return (
    <div className="rounded-xl bg-canvas p-4">
      <div className="text-xs text-ink-faint">{label}</div>
      <div className={`text-lg font-extrabold tnum ${color}`}>{value}</div>
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
