import { useMemo, useState } from "react";

// Jejak karbon logistik = berat (ton) x jarak (km) x faktor emisi moda.
// Faktor emisi ilustratif (kg CO2 per ton-km), urutan sesuai pola nyata.
const MODA = [
  { nama: "Kapal laut", faktor: 0.016, ikon: "🚢" },
  { nama: "Kereta", faktor: 0.028, ikon: "🚂" },
  { nama: "Truk", faktor: 0.062, ikon: "🚚" },
  { nama: "Pesawat", faktor: 0.6, ikon: "✈️" },
];

export function KalkulatorJejakKarbonLogistik() {
  const [berat, setBerat] = useState(10); // ton
  const [jarak, setJarak] = useState(1500); // km
  const [moda, setModa] = useState(2); // index

  const r = useMemo(() => {
    const emisi = berat * jarak * MODA[moda].faktor; // kg CO2
    const pohon = emisi / 21; // 1 pohon serap ~21 kg CO2/tahun (ilustrasi)
    const vsKapal = berat * jarak * MODA[0].faktor;
    return { emisi, pohon, hemat: emisi - vsKapal };
  }, [berat, jarak, moda]);

  return (
    <div className="my-6 card p-5">
      <div className="mb-1 text-sm font-bold text-brand-700">🌍 Kalkulator Jejak Karbon Logistik</div>
      <p className="mb-4 text-xs text-ink-faint">
        Perkirakan emisi CO₂ dari satu pengiriman dan bandingkan dampak antar moda angkut.
      </p>

      <div className="grid gap-4 sm:grid-cols-2">
        <Slider label="Berat muatan" value={berat} set={setBerat} min={1} max={50} step={1} fmt={(v) => `${v} ton`} />
        <Slider label="Jarak" value={jarak} set={setJarak} min={100} max={8000} step={100} fmt={(v) => `${v.toLocaleString("id-ID")} km`} />
      </div>

      <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4">
        {MODA.map((m, i) => (
          <button key={m.nama} onClick={() => setModa(i)} className={`rounded-xl border p-2 text-center transition-colors ${moda === i ? "border-brand-600 bg-brand-50" : "border-line bg-white hover:border-line-strong"}`}>
            <div className="text-xl">{m.ikon}</div>
            <div className="text-xs font-semibold text-ink-soft">{m.nama}</div>
          </button>
        ))}
      </div>

      <div className="mt-5 rounded-xl bg-emerald-50 p-4 text-center">
        <div className="text-xs text-ink-faint">Emisi pengiriman ini</div>
        <div className="text-3xl font-extrabold tnum text-emerald-700">{Math.round(r.emisi).toLocaleString("id-ID")} kg CO₂</div>
        <div className="mt-1 text-xs text-ink-faint">Setara serapan ~{Math.round(r.pohon).toLocaleString("id-ID")} pohon selama setahun.</div>
      </div>
      {moda !== 0 && (
        <div className="mt-2 text-center text-xs text-ink-faint">
          Memakai kapal laut bisa memangkas sekitar <strong className="text-emerald-700">{Math.round(r.hemat).toLocaleString("id-ID")} kg CO₂</strong> untuk muatan yang sama.
        </div>
      )}
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
