import { useMemo, useState } from "react";
import { rupiah } from "../../lib/format";

// Sanksi administrasi atas kekurangan bayar bea masuk sering berupa denda berlipat dari kekurangan.
// Ilustrasi edukatif: denda = kekurangan x faktor (mis. 100% sampai 1000% sesuai tingkat kesalahan).
export function KalkulatorSanksiPabean() {
  const [kurangBayar, setKurangBayar] = useState(50_000_000);
  const [faktorDenda, setFaktorDenda] = useState(200); // % dari kekurangan
  const [bunga, setBunga] = useState(2); // % bunga per bulan
  const [bulan, setBulan] = useState(6); // lama tertunggak

  const r = useMemo(() => {
    const denda = kurangBayar * (faktorDenda / 100);
    const totalBunga = kurangBayar * (bunga / 100) * bulan;
    const total = kurangBayar + denda + totalBunga;
    return { denda, totalBunga, total };
  }, [kurangBayar, faktorDenda, bunga, bulan]);

  return (
    <div className="my-6 card p-5">
      <div className="mb-1 text-sm font-bold text-brand-700">⚖️ Kalkulator Sanksi Pabean</div>
      <p className="mb-4 text-xs text-ink-faint">
        Kesalahan yang merugikan negara dikenai kekurangan bayar plus sanksi administrasi (denda) dan bunga. Lihat betapa mahalnya saat ketahuan. Ilustrasi edukatif.
      </p>

      <div className="grid gap-4 sm:grid-cols-2">
        <Slider label="Kekurangan bayar bea" value={kurangBayar} set={setKurangBayar} min={5_000_000} max={1_000_000_000} step={5_000_000} fmt={(v) => rupiah(v)} />
        <Slider label="Faktor denda" value={faktorDenda} set={setFaktorDenda} min={100} max={1000} step={50} fmt={(v) => `${v}%`} />
        <Slider label="Bunga per bulan" value={bunga} set={setBunga} min={0} max={4} step={0.5} fmt={(v) => `${v}%`} />
        <Slider label="Lama tertunggak" value={bulan} set={setBulan} min={1} max={24} step={1} fmt={(v) => `${v} bulan`} />
      </div>

      <div className="mt-5 space-y-1.5 rounded-xl bg-canvas p-4 text-sm">
        <Row label="Pokok kekurangan bayar" value={rupiah(Math.round(kurangBayar))} />
        <Row label={`Denda administrasi (${faktorDenda}%)`} value={rupiah(Math.round(r.denda))} />
        <Row label={`Bunga (${bunga}%/bln x ${bulan} bln)`} value={rupiah(Math.round(r.totalBunga))} />
      </div>

      <div className="mt-3 rounded-xl bg-rose-50 p-4 text-center">
        <div className="text-xs text-ink-faint">Total yang harus dibayar</div>
        <div className="text-2xl font-extrabold tnum text-rose-700">{rupiah(Math.round(r.total))}</div>
        <div className="mt-1 text-xs text-ink-faint">
          {(r.total / kurangBayar).toFixed(1)}x lipat dari kekurangan awal.
        </div>
      </div>

      <p className="mt-3 text-xs text-ink-faint">
        Inilah alasan kepatuhan jauh lebih murah daripada "menghemat" bea. Klasifikasi dan nilai pabean yang benar sejak awal menghindarkan dari sanksi berlipat.
      </p>
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-ink-soft">{label}</span>
      <span className="tnum font-bold text-ink">{value}</span>
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
