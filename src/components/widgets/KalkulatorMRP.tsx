import { useMemo, useState } from "react";

// MRP sederhana: kebutuhan bersih = kebutuhan kotor - stok di tangan - penerimaan terjadwal.
// Lalu kebutuhan komponen dihitung dari kebutuhan bersih produk x jumlah per produk (BOM).
const BOM = [
  { nama: "Roda", per: 2 },
  { nama: "Rangka", per: 1 },
  { nama: "Rantai", per: 1 },
  { nama: "Baut", per: 12 },
];

export function KalkulatorMRP() {
  const [kotor, setKotor] = useState(100); // kebutuhan produk jadi (unit)
  const [stok, setStok] = useState(15); // stok produk jadi di tangan
  const [terjadwal, setTerjadwal] = useState(10); // penerimaan terjadwal produk

  const r = useMemo(() => {
    const bersih = Math.max(0, kotor - stok - terjadwal);
    const komponen = BOM.map((b) => ({ nama: b.nama, per: b.per, jumlah: bersih * b.per }));
    return { bersih, komponen };
  }, [kotor, stok, terjadwal]);

  return (
    <div className="my-6 card p-5">
      <div className="mb-1 text-sm font-bold text-brand-700">🧮 Kalkulator MRP (Sepeda)</div>
      <p className="mb-4 text-xs text-ink-faint">
        Dari jadwal produk jadi, hitung kebutuhan bersih lalu ledakkan jadi kebutuhan komponen lewat Bill of Materials.
      </p>

      <div className="grid gap-4 sm:grid-cols-3">
        <Slider label="Kebutuhan kotor (produk jadi)" value={kotor} set={setKotor} min={10} max={500} step={10} fmt={(v) => `${v} unit`} />
        <Slider label="Stok di tangan" value={stok} set={setStok} min={0} max={200} step={5} fmt={(v) => `${v} unit`} />
        <Slider label="Penerimaan terjadwal" value={terjadwal} set={setTerjadwal} min={0} max={200} step={5} fmt={(v) => `${v} unit`} />
      </div>

      <div className="mt-5 rounded-xl bg-brand-50 p-4 text-center">
        <div className="text-xs text-ink-faint">Kebutuhan bersih produk = {kotor} − {stok} − {terjadwal}</div>
        <div className="text-3xl font-extrabold tnum text-brand-700">{r.bersih} sepeda</div>
        <div className="mt-1 text-xs text-ink-faint">{r.bersih === 0 ? "Stok dan penerimaan sudah cukup, tak perlu produksi tambahan." : "Inilah jumlah yang harus diproduksi."}</div>
      </div>

      <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
        {r.komponen.map((k) => (
          <div key={k.nama} className="rounded-xl bg-canvas p-3 text-center">
            <div className="text-xs text-ink-faint">{k.nama} <span className="opacity-70">(×{k.per})</span></div>
            <div className="tnum text-xl font-extrabold text-ink">{k.jumlah.toLocaleString("id-ID")}</div>
          </div>
        ))}
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
