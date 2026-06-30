import { useMemo, useState } from "react";
import { rupiah } from "../../lib/format";

// Memilih moda angkut: laut murah tapi lambat, udara cepat tapi mahal, darat di tengah.
// Total biaya logistik = ongkos angkut + biaya modal barang yang "terjebak" selama transit.
const MODA = [
  { nama: "Laut", ikon: "🚢", tarifPerKgKm: 0.012, kmPerHari: 600, emisiPerTonKm: 0.016 },
  { nama: "Darat (truk)", ikon: "🚚", tarifPerKgKm: 0.05, kmPerHari: 500, emisiPerTonKm: 0.062 },
  { nama: "Udara", ikon: "✈️", tarifPerKgKm: 0.45, kmPerHari: 8000, emisiPerTonKm: 0.6 },
];

export function KalkulatorPilihModa() {
  const [berat, setBerat] = useState(5000); // kg
  const [jarak, setJarak] = useState(2000); // km
  const [nilaiBarang, setNilaiBarang] = useState(500_000_000); // Rp nilai total kiriman

  const rows = useMemo(() => {
    const biayaModalHarian = nilaiBarang * (0.12 / 365); // 12% per tahun = biaya barang menganggur
    return MODA.map((m) => {
      const ongkos = berat * jarak * m.tarifPerKgKm;
      const hari = Math.max(1, jarak / m.kmPerHari);
      const biayaWaktu = biayaModalHarian * hari;
      const total = ongkos + biayaWaktu;
      const emisi = (berat / 1000) * jarak * m.emisiPerTonKm; // kg CO2
      return { ...m, ongkos, hari, biayaWaktu, total, emisi };
    });
  }, [berat, jarak, nilaiBarang]);

  const termurah = Math.min(...rows.map((r) => r.total));

  return (
    <div className="my-6 card p-5">
      <div className="mb-1 text-sm font-bold text-brand-700">🧭 Kalkulator Pilih Moda Angkut</div>
      <p className="mb-4 text-xs text-ink-faint">
        Bandingkan laut, darat, dan udara, bukan hanya dari ongkos kirim, tapi juga biaya barang yang tertahan selama transit.
      </p>

      <div className="grid gap-4 sm:grid-cols-3">
        <Slider label="Berat kiriman" value={berat} set={setBerat} min={500} max={20000} step={500} fmt={(v) => `${v.toLocaleString("id-ID")} kg`} />
        <Slider label="Jarak" value={jarak} set={setJarak} min={200} max={10000} step={200} fmt={(v) => `${v.toLocaleString("id-ID")} km`} />
        <Slider label="Nilai barang" value={nilaiBarang} set={setNilaiBarang} min={50_000_000} max={5_000_000_000} step={50_000_000} fmt={(v) => rupiah(v)} />
      </div>

      <div className="mt-5 space-y-2">
        {rows.map((r) => (
          <div key={r.nama} className={`rounded-xl border p-3 ${r.total === termurah ? "border-emerald-400 bg-emerald-50" : "border-line bg-canvas"}`}>
            <div className="flex items-center justify-between">
              <span className="text-sm font-bold text-ink">{r.ikon} {r.nama}{r.total === termurah ? " · termurah" : ""}</span>
              <span className="tnum text-sm font-extrabold text-ink">{rupiah(Math.round(r.total))}</span>
            </div>
            <div className="mt-1 flex flex-wrap gap-x-4 gap-y-0.5 text-xs text-ink-faint">
              <span>Ongkos angkut {rupiah(Math.round(r.ongkos))}</span>
              <span>Transit ~{r.hari.toFixed(1)} hari</span>
              <span>Biaya barang tertahan {rupiah(Math.round(r.biayaWaktu))}</span>
              <span>Emisi ~{Math.round(r.emisi).toLocaleString("id-ID")} kg CO₂</span>
            </div>
          </div>
        ))}
      </div>
      <p className="mt-2 text-xs text-ink-faint">Untuk barang bernilai tinggi atau cepat usang, moda cepat bisa lebih murah secara total meski ongkos kirimnya mahal.</p>
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
