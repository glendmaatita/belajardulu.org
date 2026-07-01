import { useMemo, useState } from "react";
import { rupiah } from "../../lib/format";

// UU HPP mengubah sanksi bunga menjadi berbasis suku bunga acuan + uplift,
// dibagi 12, dikenakan maksimal 24 bulan. Uplift berbeda menurut jenis
// pelanggaran (mis. 0%, 5%, 10%, 15%). Di sini suku bunga acuan diasumsikan
// sebagai parameter ilustratif.
const UPLIFT = [
  { id: "pembetulan", label: "Pembetulan SPT sendiri", uplift: 0 },
  { id: "kurang-bayar", label: "Kurang bayar (pemeriksaan)", uplift: 0.05 },
  { id: "tidak-lapor", label: "Tidak menyampaikan SPT", uplift: 0.1 },
  { id: "berat", label: "Pelanggaran berat", uplift: 0.15 },
];

export function KalkulatorSanksiPajakBunga() {
  const [pokok, setPokok] = useState(500_000_000);
  const [sukuAcuan, setSukuAcuan] = useState(6); // % per tahun (ilustrasi)
  const [bulan, setBulan] = useState(10);
  const [jenis, setJenis] = useState("kurang-bayar");

  const r = useMemo(() => {
    const j = UPLIFT.find((x) => x.id === jenis)!;
    const bulanEfektif = Math.min(bulan, 24); // maksimal 24 bulan
    const tarifBulanan = (sukuAcuan / 100 + j.uplift) / 12;
    const bunga = pokok * tarifBulanan * bulanEfektif;
    return { j, bulanEfektif, tarifBulanan, bunga };
  }, [pokok, sukuAcuan, bulan, jenis]);

  return (
    <div className="my-6 card p-5">
      <div className="mb-1 text-sm font-bold text-brand-700">⏰ Kalkulator Sanksi Bunga (UU HPP)</div>
      <p className="mb-4 text-xs text-ink-faint">
        UU HPP menghitung sanksi bunga dari suku bunga acuan ditambah uplift sesuai jenis pelanggaran, dibagi 12,
        maksimal 24 bulan. Makin cepat dilunasi, makin kecil bunganya.
      </p>

      <Slider label="Pokok pajak kurang bayar" value={pokok} min={50_000_000} max={5_000_000_000} step={50_000_000} fmt={rupiah} onChange={setPokok} />
      <Slider label="Suku bunga acuan per tahun (ilustrasi)" value={sukuAcuan} min={3} max={12} step={1} fmt={(n) => `${n}%`} onChange={setSukuAcuan} />
      <Slider label="Lama keterlambatan (bulan)" value={bulan} min={1} max={30} step={1} fmt={(n) => `${n} bln`} onChange={setBulan} />

      <div className="mb-4 mt-1 flex flex-wrap gap-2">
        {UPLIFT.map((j) => (
          <button key={j.id} onClick={() => setJenis(j.id)} className={`rounded-lg px-3 py-1.5 text-xs font-semibold ${jenis === j.id ? "bg-brand-600 text-white" : "bg-canvas text-ink-soft"}`}>
            {j.label}
          </button>
        ))}
      </div>

      <div className="grid gap-3 sm:grid-cols-3">
        <Box label="Tarif bunga per bulan" value={`${(r.tarifBulanan * 100).toFixed(2)}%`} color="text-sky-700" />
        <Box label="Bulan dikenakan (maks 24)" value={`${r.bulanEfektif}`} color="text-amber-700" />
        <Box label="Total sanksi bunga" value={rupiah(Math.round(r.bunga))} color="text-rose-700" />
      </div>
      <p className="mt-3 rounded-lg bg-brand-50 px-3 py-2 text-sm text-brand-800">
        Uplift {Math.round(r.j.uplift * 100)}% menambah beban bunga. Membetulkan SPT sendiri (uplift 0%) jauh lebih
        murah daripada menunggu temuan pemeriksaan.
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
