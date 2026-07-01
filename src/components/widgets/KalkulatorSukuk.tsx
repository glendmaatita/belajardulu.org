import { useMemo, useState } from "react";
import { rupiah } from "../../lib/format";

// Sukuk ijarah: investor memiliki bagian aset yang disewakan; imbal hasil
// berasal dari uang sewa (ujrah), bukan bunga. Di sini disederhanakan sebagai
// imbal hasil setara persen per tahun dari nilai nominal.
export function KalkulatorSukuk() {
  const [nominal, setNominal] = useState(10_000_000);
  const [imbalPersen, setImbalPersen] = useState(6.5); // setara ujrah per tahun
  const [tenor, setTenor] = useState(3); // tahun

  const r = useMemo(() => {
    const imbalTahunan = nominal * (imbalPersen / 100);
    const totalImbal = imbalTahunan * tenor;
    const totalDiterima = nominal + totalImbal; // nominal kembali di jatuh tempo
    return { imbalTahunan, totalImbal, totalDiterima };
  }, [nominal, imbalPersen, tenor]);

  return (
    <div className="my-6 card p-5">
      <div className="mb-1 text-sm font-bold text-brand-700">📜 Kalkulator Sukuk</div>
      <p className="mb-4 text-xs text-ink-faint">
        Sukuk adalah bukti kepemilikan atas aset atau proyek. Imbal hasilnya berasal dari uang sewa (ujrah) atau bagi
        hasil aset, bukan bunga. Nominal dikembalikan saat jatuh tempo.
      </p>

      <Slider label="Nilai nominal sukuk" value={nominal} min={1_000_000} max={500_000_000} step={1_000_000} fmt={rupiah} onChange={setNominal} />
      <Slider label="Imbal hasil setara per tahun" value={imbalPersen} min={3} max={10} step={0.25} fmt={(n) => `${n}%`} onChange={setImbalPersen} />
      <Slider label="Tenor" value={tenor} min={1} max={10} step={1} fmt={(n) => `${n} tahun`} onChange={setTenor} />

      <div className="mt-5 grid gap-3 sm:grid-cols-3">
        <Box label="Imbal hasil per tahun" value={rupiah(Math.round(r.imbalTahunan))} color="text-sky-700" />
        <Box label="Total imbal hasil" value={rupiah(Math.round(r.totalImbal))} color="text-emerald-700" />
        <Box label="Total diterima" value={rupiah(Math.round(r.totalDiterima))} color="text-brand-700" />
      </div>
      <p className="mt-3 rounded-lg bg-brand-50 px-3 py-2 text-sm text-brand-800">
        Karena bersandar pada aset nyata dan akad yang jelas, imbal hasil sukuk terhindar dari riba. Pemerintah
        menerbitkan Sukuk Negara, termasuk Sukuk Ritel untuk masyarakat.
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
