import { useMemo, useState } from "react";
import { rupiah, angka } from "../../lib/format";

const BIAYA_PER_TON = 200_000; // Rp per tCO2e abatement (ilustrasi)

// Simulasi penerbitan green bond: dana terkumpul, bunga, dan dampak iklimnya.
export function SimulatorGreenBond() {
  const [nilai, setNilai] = useState(500); // Rp miliar
  const [kupon, setKupon] = useState(7); // % per tahun
  const [tenor, setTenor] = useState(5); // tahun

  const r = useMemo(() => {
    const dana = nilai * 1_000_000_000;
    const bungaTahun = dana * (kupon / 100);
    const totalBunga = bungaTahun * tenor;
    const tonDikurangi = dana / BIAYA_PER_TON;
    return { dana, bungaTahun, totalBunga, tonDikurangi };
  }, [nilai, kupon, tenor]);

  return (
    <div className="my-6 card p-5">
      <div className="mb-1 text-sm font-bold text-brand-700">🌱 Simulator Green Bond</div>
      <p className="mb-4 text-xs text-ink-faint">
        Green bond mengumpulkan dana yang khusus dipakai untuk proyek ramah lingkungan. Atur penerbitannya di bawah.
      </p>

      <Slider label="Nilai penerbitan" value={nilai} set={setNilai} min={50} max={5000} step={50} fmt={(v) => `Rp${angka(v)} miliar`} />
      <Slider label="Kupon (bunga) per tahun" value={kupon} set={setKupon} min={2} max={12} step={0.5} fmt={(v) => `${v}%`} />
      <Slider label="Tenor (jangka waktu)" value={tenor} set={setTenor} min={1} max={20} step={1} fmt={(v) => `${v} tahun`} />

      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        <Card label="Dana terkumpul" value={rupiah(r.dana)} accent="text-emerald-700" />
        <Card label="Bunga dibayar / tahun" value={rupiah(Math.round(r.bungaTahun))} accent="text-sky-700" />
        <Card label="Total bunga selama tenor" value={rupiah(Math.round(r.totalBunga))} accent="text-amber-700" />
        <Card label="Estimasi emisi dikurangi" value={`${angka(Math.round(r.tonDikurangi))} tCO2e`} accent="text-brand-700" />
      </div>
      <p className="mt-3 text-xs text-ink-faint">
        Dana dipakai membiayai proyek hijau (mis. energi terbarukan). Dengan biaya pengurangan sekitar Rp200 ribu per
        ton (ilustrasi), penerbitan ini berpotensi memangkas {angka(Math.round(r.tonDikurangi))} ton CO2e.
      </p>
    </div>
  );
}

function Slider({
  label,
  value,
  set,
  min,
  max,
  step,
  fmt,
}: {
  label: string;
  value: number;
  set: (n: number) => void;
  min: number;
  max: number;
  step: number;
  fmt: (v: number) => string;
}) {
  return (
    <div className="mb-3">
      <div className="mb-1 flex items-center justify-between">
        <span className="text-sm font-semibold text-ink-soft">{label}</span>
        <span className="tnum text-sm font-bold text-ink">{fmt(value)}</span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => set(Number(e.target.value))}
        className="h-2 w-full cursor-pointer appearance-none rounded-full bg-line accent-brand-600"
      />
    </div>
  );
}

function Card({ label, value, accent }: { label: string; value: string; accent: string }) {
  return (
    <div className="rounded-xl bg-canvas p-3">
      <div className="text-xs text-ink-faint">{label}</div>
      <div className={`text-lg font-extrabold tnum ${accent}`}>{value}</div>
    </div>
  );
}
