import { useMemo, useState } from "react";

// Kalkulator rasio keuangan: dari beberapa angka laporan keuangan, hitung rasio kunci.
export function KalkulatorRasioKeuangan() {
  const [penjualan, setPenjualan] = useState(1000); // miliar
  const [labaBersih, setLabaBersih] = useState(120);
  const [ekuitas, setEkuitas] = useState(600);
  const [utang, setUtang] = useState(400);
  const [hargaSaham, setHargaSaham] = useState(5000);
  const [eps, setEps] = useState(400);

  const r = useMemo(() => {
    const roe = (labaBersih / ekuitas) * 100;
    const margin = (labaBersih / penjualan) * 100;
    const der = utang / ekuitas;
    const pe = hargaSaham / eps;
    return { roe, margin, der, pe };
  }, [penjualan, labaBersih, ekuitas, utang, hargaSaham, eps]);

  return (
    <div className="my-6 card p-5">
      <div className="mb-1 text-sm font-bold text-brand-700">📐 Kalkulator Rasio Keuangan</div>
      <p className="mb-4 text-xs text-ink-faint">
        Masukkan angka laporan keuangan, lihat rasio kunci yang dipakai investor untuk menilai kesehatan dan harga perusahaan.
      </p>

      <div className="grid gap-4 sm:grid-cols-2">
        <Slider label="Penjualan (miliar)" value={penjualan} set={setPenjualan} min={100} max={5000} step={50} fmt={(v) => `Rp${v} M`} />
        <Slider label="Laba bersih (miliar)" value={labaBersih} set={setLabaBersih} min={0} max={1000} step={10} fmt={(v) => `Rp${v} M`} />
        <Slider label="Ekuitas (miliar)" value={ekuitas} set={setEkuitas} min={100} max={3000} step={50} fmt={(v) => `Rp${v} M`} />
        <Slider label="Total utang (miliar)" value={utang} set={setUtang} min={0} max={3000} step={50} fmt={(v) => `Rp${v} M`} />
        <Slider label="Harga saham" value={hargaSaham} set={setHargaSaham} min={500} max={20000} step={100} fmt={(v) => `Rp${v.toLocaleString("id-ID")}`} />
        <Slider label="EPS (laba per saham)" value={eps} set={setEps} min={50} max={2000} step={10} fmt={(v) => `Rp${v}`} />
      </div>

      <div className="mt-5 grid gap-3 sm:grid-cols-4">
        <Stat label="ROE" value={`${r.roe.toFixed(1)}%`} hint="laba/ekuitas" tone="emerald" />
        <Stat label="Margin Laba" value={`${r.margin.toFixed(1)}%`} hint="laba/penjualan" tone="sky" />
        <Stat label="DER" value={`${r.der.toFixed(2)}x`} hint="utang/ekuitas" tone="amber" />
        <Stat label="P/E" value={`${r.pe.toFixed(1)}x`} hint="harga/EPS" tone="violet" />
      </div>

      <p className="mt-3 text-xs text-ink-faint">
        ROE & margin tinggi menandakan bisnis efisien dan menguntungkan. DER tinggi berarti banyak utang (lebih berisiko). P/E menunjukkan seberapa mahal harga dibanding labanya. Bandingkan dengan perusahaan sejenis.
      </p>
    </div>
  );
}

function Stat({ label, value, hint, tone }: { label: string; value: string; hint: string; tone: "emerald" | "sky" | "amber" | "violet" }) {
  const map = { emerald: "text-emerald-700", sky: "text-sky-700", amber: "text-amber-700", violet: "text-violet-700" };
  return (
    <div className="rounded-xl bg-slate-50 p-3 text-center">
      <div className="text-xs text-ink-faint">{label}</div>
      <div className={`text-xl font-extrabold tnum ${map[tone]}`}>{value}</div>
      <div className="text-[10px] text-ink-faint">{hint}</div>
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
