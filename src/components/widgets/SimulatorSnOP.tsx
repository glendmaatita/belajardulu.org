import { useMemo, useState } from "react";

// S&OP: menyeimbangkan permintaan dan produksi tiap bulan. Jika produksi < permintaan,
// stok tergerus sampai bisa kehabisan; jika berlebih, stok menumpuk dan modal terikat.
const PERMINTAAN = [100, 120, 160, 200, 150, 110];
const BULAN = ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun"];

export function SimulatorSnOP() {
  const [produksi, setProduksi] = useState(140); // kapasitas produksi tetap per bulan
  const [stokAwal, setStokAwal] = useState(60);

  const r = useMemo(() => {
    let stok = stokAwal;
    const seri = PERMINTAAN.map((d) => {
      stok = stok + produksi - d;
      return stok;
    });
    const minStok = Math.min(...seri);
    const stockout = minStok < 0;
    const totalStok = seri.reduce((s, x) => s + Math.max(0, x), 0);
    return { seri, minStok, stockout, rataStok: totalStok / seri.length };
  }, [produksi, stokAwal]);

  const maks = Math.max(...PERMINTAAN, ...r.seri.map((x) => Math.abs(x)), produksi);

  return (
    <div className="my-6 card p-5">
      <div className="mb-1 text-sm font-bold text-brand-700">⚖️ Simulator S&OP</div>
      <p className="mb-4 text-xs text-ink-faint">
        Atur kapasitas produksi tetap menghadapi permintaan yang naik-turun. Cari titik seimbang: jangan sampai kehabisan, jangan pula menumpuk stok.
      </p>

      <div className="grid gap-4 sm:grid-cols-2">
        <Slider label="Produksi per bulan (kapasitas)" value={produksi} set={setProduksi} min={80} max={220} step={10} fmt={(v) => `${v} unit`} />
        <Slider label="Stok awal" value={stokAwal} set={setStokAwal} min={0} max={150} step={10} fmt={(v) => `${v} unit`} />
      </div>

      <div className="mt-5 flex items-end gap-2" style={{ height: 150 }}>
        {BULAN.map((b, i) => (
          <div key={b} className="flex flex-1 flex-col items-center justify-end gap-1">
            <span className={`tnum text-[10px] font-bold ${r.seri[i] < 0 ? "text-rose-600" : "text-ink-soft"}`}>{r.seri[i]}</span>
            <div className="flex h-full w-full items-end justify-center gap-0.5">
              <div className="w-1/2 rounded-t bg-brand-400" style={{ height: `${(PERMINTAAN[i] / maks) * 100}%` }} title="Permintaan" />
              <div className={`w-1/2 rounded-t ${r.seri[i] < 0 ? "bg-rose-500" : "bg-emerald-500"}`} style={{ height: `${(Math.max(0, r.seri[i]) / maks) * 100}%` }} title="Stok akhir" />
            </div>
            <span className="text-[10px] text-ink-faint">{b}</span>
          </div>
        ))}
      </div>
      <div className="mt-1 flex justify-center gap-4 text-xs">
        <span className="text-brand-600">● Permintaan</span>
        <span className="text-emerald-600">● Stok akhir</span>
      </div>

      <div className={`mt-4 rounded-xl p-3 text-center text-sm ${r.stockout ? "bg-rose-50 text-rose-700" : r.rataStok > 120 ? "bg-amber-50 text-amber-700" : "bg-emerald-50 text-emerald-700"}`}>
        {r.stockout
          ? `Kehabisan stok! Titik terendah ${r.minStok} unit. Tambah kapasitas atau bangun stok lebih awal.`
          : r.rataStok > 120
          ? `Aman tapi stok rata-rata ${Math.round(r.rataStok)} unit, modal banyak terikat. Coba turunkan produksi.`
          : `Seimbang: tak pernah kehabisan, stok rata-rata ${Math.round(r.rataStok)} unit yang wajar.`}
      </div>
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
