import { useMemo, useState } from "react";
import { rupiah } from "../../lib/format";

// Bea Keluar: pungutan atas ekspor komoditas tertentu (mis. CPO, mineral) untuk dorong hilirisasi.
// Dihitung dari harga ekspor x volume x tarif bea keluar.
export function KalkulatorBeaKeluar() {
  const [hargaPerTon, setHargaPerTon] = useState(12_000_000); // harga ekspor per ton (Rp)
  const [volume, setVolume] = useState(1_000); // ton
  const [tarif, setTarif] = useState(7.5); // tarif bea keluar %

  const r = useMemo(() => {
    const nilaiEkspor = hargaPerTon * volume;
    const beaKeluar = nilaiEkspor * (tarif / 100);
    const netoEksportir = nilaiEkspor - beaKeluar;
    return { nilaiEkspor, beaKeluar, netoEksportir };
  }, [hargaPerTon, volume, tarif]);

  return (
    <div className="my-6 card p-5">
      <div className="mb-1 text-sm font-bold text-brand-700">📤 Kalkulator Bea Keluar (Ekspor)</div>
      <p className="mb-4 text-xs text-ink-faint">
        Sebagian komoditas (mis. CPO, mineral mentah) dikenai bea keluar saat diekspor, untuk mendorong pengolahan di dalam negeri. Hitung besarnya di sini.
      </p>

      <div className="grid gap-4 sm:grid-cols-3">
        <Slider label="Harga ekspor / ton" value={hargaPerTon} set={setHargaPerTon} min={1_000_000} max={30_000_000} step={500_000} fmt={(v) => rupiah(v)} />
        <Slider label="Volume ekspor" value={volume} set={setVolume} min={100} max={20_000} step={100} fmt={(v) => `${v.toLocaleString("id-ID")} ton`} />
        <Slider label="Tarif bea keluar" value={tarif} set={setTarif} min={0} max={30} step={0.5} fmt={(v) => `${v}%`} />
      </div>

      <div className="mt-5 space-y-1.5 rounded-xl bg-slate-50 p-4 text-sm">
        <Row label="Nilai ekspor (harga x volume)" value={rupiah(Math.round(r.nilaiEkspor))} />
        <Row label={`Bea Keluar (${tarif}%)`} value={rupiah(Math.round(r.beaKeluar))} />
        <div className="my-1 border-t border-slate-200" />
        <Row label="Diterima eksportir (neto)" value={rupiah(Math.round(r.netoEksportir))} bold />
      </div>

      <p className="mt-3 text-xs text-ink-faint">
        Bea keluar membuat ekspor bahan mentah kurang menguntungkan, sehingga mendorong industri mengolah dulu di dalam negeri (hilirisasi) sebelum mengekspor produk jadi.
      </p>
    </div>
  );
}

function Row({ label, value, bold }: { label: string; value: string; bold?: boolean }) {
  return (
    <div className="flex items-center justify-between">
      <span className={bold ? "font-semibold text-ink" : "text-ink-soft"}>{label}</span>
      <span className={`tnum font-bold ${bold ? "text-emerald-700" : "text-ink"}`}>{value}</span>
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
