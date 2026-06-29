import { useState } from "react";

// Konversi satuan dengan awalan SI (kilo, senti, mili, dst).
const PREFIX = [
  { nama: "kilo (k)", faktor: 1000 },
  { nama: "(satuan)", faktor: 1 },
  { nama: "senti (c)", faktor: 0.01 },
  { nama: "mili (m)", faktor: 0.001 },
  { nama: "mikro (u)", faktor: 0.000001 },
];

export function KonversiSatuan() {
  const [nilai, setNilai] = useState(5);
  const [dari, setDari] = useState(0); // kilo
  const [ke, setKe] = useState(1); // satuan

  const hasil = (nilai * PREFIX[dari].faktor) / PREFIX[ke].faktor;

  const Select = ({ val, set, label }: { val: number; set: (n: number) => void; label: string }) => (
    <div>
      <label className="block text-xs font-bold text-ink-faint">{label}</label>
      <select value={val} onChange={(e) => set(Number(e.target.value))} className="mt-1 w-full rounded-lg border border-slate-200 p-2 text-sm outline-none focus:border-brand-400">
        {PREFIX.map((p, i) => (
          <option key={i} value={i}>{p.nama}</option>
        ))}
      </select>
    </div>
  );

  return (
    <div className="my-6 card p-5">
      <div className="mb-1 text-sm font-bold text-brand-700">📐 Konversi Satuan SI</div>
      <p className="mb-4 text-xs text-ink-faint">Ubah nilai antar awalan SI. Amati bahwa konversi hanyalah perkalian dengan pangkat 10.</p>

      <label className="block text-xs font-bold text-ink-faint">Nilai</label>
      <input type="number" value={nilai} onChange={(e) => setNilai(Number(e.target.value) || 0)} className="mt-1 w-full rounded-lg border border-slate-200 p-2 text-sm tnum outline-none focus:border-brand-400" />

      <div className="mt-3 grid grid-cols-2 gap-3">
        <Select val={dari} set={setDari} label="Dari" />
        <Select val={ke} set={setKe} label="Ke" />
      </div>

      <div className="mt-4 rounded-xl bg-emerald-50 p-4 text-center">
        <div className="text-xs text-emerald-700">Hasil</div>
        <div className="text-xl font-extrabold text-emerald-700 tnum">{hasil.toLocaleString("id-ID", { maximumFractionDigits: 8 })}</div>
      </div>

      <p className="mt-3 text-xs text-ink-faint">
        Contoh: 1 kilometer = 1.000 meter = 100.000 sentimeter. Awalan SI hanya menggeser koma desimal.
      </p>
    </div>
  );
}
