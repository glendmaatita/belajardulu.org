import { useMemo, useState } from "react";
import { rupiah } from "../../lib/format";

// Gadai emas syariah memakai akad rahn (gadai) dan ijarah (biaya penyimpanan).
// Bank tidak mengambil bunga, melainkan biaya pemeliharaan/penyimpanan (ujrah)
// yang dihitung dari nilai emas, bukan dari jumlah pinjaman.
export function KalkulatorGadaiEmas() {
  const [gram, setGram] = useState(20);
  const [hargaPerGram, setHargaPerGram] = useState(1_200_000);
  const [ltv, setLtv] = useState(85); // % pinjaman terhadap taksiran
  const [ujrahBulan, setUjrahBulan] = useState(0.6); // % ujrah per bulan dari taksiran

  const r = useMemo(() => {
    const taksiran = gram * hargaPerGram;
    const pinjaman = taksiran * (ltv / 100);
    const ujrah = taksiran * (ujrahBulan / 100);
    return { taksiran, pinjaman, ujrah };
  }, [gram, hargaPerGram, ltv, ujrahBulan]);

  return (
    <div className="my-6 card p-5">
      <div className="mb-1 text-sm font-bold text-brand-700">🪙 Kalkulator Gadai Emas Syariah (Rahn)</div>
      <p className="mb-4 text-xs text-ink-faint">
        Gadai emas syariah memakai akad rahn (gadai) dan ijarah (sewa penyimpanan). Bank tidak mengambil bunga,
        melainkan biaya pemeliharaan (ujrah) yang dihitung dari nilai emas, bukan dari besar pinjaman.
      </p>

      <Slider label="Berat emas" value={gram} min={1} max={200} step={1} fmt={(n) => `${n} gram`} onChange={setGram} />
      <Slider label="Harga emas per gram" value={hargaPerGram} min={800_000} max={2_000_000} step={50_000} fmt={rupiah} onChange={setHargaPerGram} />
      <Slider label="Rasio pinjaman terhadap taksiran" value={ltv} min={70} max={95} step={5} fmt={(n) => `${n}%`} onChange={setLtv} />
      <Slider label="Ujrah (biaya pemeliharaan) per bulan" value={ujrahBulan} min={0.2} max={1.5} step={0.1} fmt={(n) => `${n}%`} onChange={setUjrahBulan} />

      <div className="mt-5 grid gap-3 sm:grid-cols-3">
        <Box label="Taksiran nilai emas" value={rupiah(Math.round(r.taksiran))} color="text-sky-700" />
        <Box label="Pinjaman yang bisa cair" value={rupiah(Math.round(r.pinjaman))} color="text-brand-700" />
        <Box label="Ujrah per bulan" value={rupiah(Math.round(r.ujrah))} color="text-amber-700" />
      </div>
      <p className="mt-3 rounded-lg bg-brand-50 px-3 py-2 text-sm text-brand-800">
        Berbeda dari bunga yang menumpuk atas pinjaman, ujrah adalah imbalan jasa menyimpan dan merawat emas.
        Makin lama menggadai, makin besar ujrah, jadi tebus secepat mungkin.
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
