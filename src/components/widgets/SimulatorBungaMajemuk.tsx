import { useMemo, useState } from "react";
import { rupiah } from "../../lib/format";

// Investasi rutin + bunga majemuk: kekuatan waktu bagi investor jangka panjang.
export function SimulatorBungaMajemuk() {
  const [awal, setAwal] = useState(10_000_000); // modal awal
  const [bulanan, setBulanan] = useState(2_000_000); // setoran/bulan
  const [returnTahun, setReturnTahun] = useState(10); // % per tahun
  const [tahun, setTahun] = useState(20);

  const r = useMemo(() => {
    const n = tahun * 12;
    const i = returnTahun / 100 / 12;
    const fvAwal = awal * Math.pow(1 + i, n);
    const fvSetoran = i > 0 ? bulanan * ((Math.pow(1 + i, n) - 1) / i) : bulanan * n;
    const total = fvAwal + fvSetoran;
    const disetor = awal + bulanan * n;
    const pertumbuhan = total - disetor;
    return { total, disetor, pertumbuhan };
  }, [awal, bulanan, returnTahun, tahun]);

  const growthPct = r.total > 0 ? (r.pertumbuhan / r.total) * 100 : 0;

  return (
    <div className="my-6 card p-5">
      <div className="mb-1 text-sm font-bold text-brand-700">🪙 Simulator Investasi & Bunga Majemuk</div>
      <p className="mb-4 text-xs text-ink-faint">
        Berinvestasi rutin dalam jangka panjang membuat bunga majemuk bekerja keras untukmu. Lihat berapa hasilnya.
      </p>

      <div className="grid gap-4 sm:grid-cols-2">
        <Slider label="Modal awal" value={awal} set={setAwal} min={0} max={200_000_000} step={5_000_000} fmt={(v) => rupiah(v)} />
        <Slider label="Setoran per bulan" value={bulanan} set={setBulanan} min={0} max={20_000_000} step={500_000} fmt={(v) => rupiah(v)} />
        <Slider label="Imbal hasil per tahun" value={returnTahun} set={setReturnTahun} min={1} max={20} step={1} fmt={(v) => `${v}%`} />
        <Slider label="Lama investasi" value={tahun} set={setTahun} min={1} max={40} step={1} fmt={(v) => `${v} tahun`} />
      </div>

      <div className="mt-5 rounded-xl bg-slate-50 p-4 text-center">
        <div className="text-xs text-ink-faint">Total nilai setelah {tahun} tahun</div>
        <div className="text-3xl font-extrabold tnum text-emerald-700">{rupiah(Math.round(r.total))}</div>
      </div>

      <div className="mt-3 flex h-7 overflow-hidden rounded-lg">
        <div className="flex items-center justify-center bg-sky-500 text-xs font-bold text-white" style={{ width: `${100 - growthPct}%` }}>
          {100 - growthPct > 18 ? "Uang disetor" : ""}
        </div>
        <div className="flex items-center justify-center bg-emerald-500 text-xs font-bold text-white" style={{ width: `${growthPct}%` }}>
          {growthPct > 18 ? "Hasil bunga" : ""}
        </div>
      </div>
      <p className="mt-3 text-xs text-ink-faint">
        Total yang kamu setor hanya <b>{rupiah(Math.round(r.disetor))}</b>, sisanya <b>{rupiah(Math.round(r.pertumbuhan))}</b>{" "}
        ({growthPct.toFixed(0)}%) adalah hasil bunga majemuk. Makin lama waktunya, makin besar porsi pertumbuhannya.
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
