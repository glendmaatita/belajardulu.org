import { useMemo, useState } from "react";
import { rupiah } from "../../lib/format";

// Murabahah: bank membeli barang seharga pokok, lalu menjualnya ke nasabah
// dengan margin yang disepakati di awal. Total harga jual tetap (tidak berubah
// mengikuti waktu seperti bunga), dan dicicil rata.
export function KalkulatorMurabahah() {
  const [pokok, setPokok] = useState(200_000_000);
  const [margin, setMargin] = useState(15); // % margin dari pokok, disepakati di muka
  const [tenor, setTenor] = useState(36); // bulan

  const r = useMemo(() => {
    const marginRp = pokok * (margin / 100);
    const hargaJual = pokok + marginRp;
    const cicilan = tenor > 0 ? hargaJual / tenor : 0;
    return { marginRp, hargaJual, cicilan };
  }, [pokok, margin, tenor]);

  return (
    <div className="my-6 card p-5">
      <div className="mb-1 text-sm font-bold text-brand-700">🛒 Kalkulator Pembiayaan Murabahah</div>
      <p className="mb-4 text-xs text-ink-faint">
        Bank membeli barang seharga pokok, lalu menjualnya kepada nasabah dengan margin yang disepakati terbuka di
        awal. Total harga jual bersifat tetap dan dicicil rata, tidak bertambah mengikuti waktu seperti bunga.
      </p>

      <Slider label="Harga pokok barang" value={pokok} min={10_000_000} max={1_000_000_000} step={10_000_000} fmt={rupiah} onChange={setPokok} />
      <Slider label="Margin disepakati" value={margin} min={3} max={40} step={1} fmt={(n) => `${n}%`} onChange={setMargin} />
      <Slider label="Tenor cicilan" value={tenor} min={6} max={120} step={6} fmt={(n) => `${n} bulan`} onChange={setTenor} />

      <div className="mt-5 grid gap-3 sm:grid-cols-3">
        <Box label="Margin (laba bank)" value={rupiah(Math.round(r.marginRp))} color="text-sky-700" />
        <Box label="Total harga jual" value={rupiah(Math.round(r.hargaJual))} color="text-brand-700" />
        <Box label="Cicilan per bulan" value={rupiah(Math.round(r.cicilan))} color="text-emerald-700" />
      </div>
      <p className="mt-3 rounded-lg bg-brand-50 px-3 py-2 text-sm text-brand-800">
        Karena harga total dikunci di awal, nasabah tahu persis kewajibannya. Margin adalah laba jual beli, bukan
        bunga yang berjalan atas sisa utang.
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
