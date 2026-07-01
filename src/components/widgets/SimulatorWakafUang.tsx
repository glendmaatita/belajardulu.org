import { useMemo, useState } from "react";
import { rupiah } from "../../lib/format";

// Wakaf uang: pokok wakaf ditahan abadi dan dikelola/diinvestasikan; hanya hasil
// (imbal hasil) yang disalurkan untuk program sosial. Ini seperti perpetuitas
// kebajikan: manfaatnya mengalir selamanya tanpa mengurangi pokok.
export function SimulatorWakafUang() {
  const [pokok, setPokok] = useState(100_000_000);
  const [imbalHasil, setImbalHasil] = useState(6); // % per tahun dari pengelolaan
  const [tahun, setTahun] = useState(20);

  const r = useMemo(() => {
    const manfaatTahunan = pokok * (imbalHasil / 100);
    const totalManfaat = manfaatTahunan * tahun;
    return { manfaatTahunan, totalManfaat };
  }, [pokok, imbalHasil, tahun]);

  return (
    <div className="my-6 card p-5">
      <div className="mb-1 text-sm font-bold text-brand-700">🌊 Simulator Wakaf Uang</div>
      <p className="mb-4 text-xs text-ink-faint">
        Pada wakaf uang, pokok wakaf ditahan abadi dan dikelola secara produktif. Hanya hasilnya yang disalurkan untuk
        kebajikan, sehingga manfaatnya mengalir terus-menerus tanpa mengurangi pokok (sedekah jariyah).
      </p>

      <Slider label="Nilai wakaf uang (pokok abadi)" value={pokok} min={1_000_000} max={2_000_000_000} step={10_000_000} fmt={rupiah} onChange={setPokok} />
      <Slider label="Imbal hasil pengelolaan per tahun" value={imbalHasil} min={3} max={10} step={0.5} fmt={(n) => `${n}%`} onChange={setImbalHasil} />
      <Slider label="Selama berjalan" value={tahun} min={5} max={50} step={5} fmt={(n) => `${n} tahun`} onChange={setTahun} />

      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        <Box label="Manfaat mengalir per tahun" value={rupiah(Math.round(r.manfaatTahunan))} color="text-emerald-700" />
        <Box label={`Total manfaat dalam ${tahun} tahun`} value={rupiah(Math.round(r.totalManfaat))} color="text-brand-700" />
      </div>
      <p className="mt-3 rounded-lg bg-brand-50 px-3 py-2 text-sm text-brand-800">
        Perhatikan: pokok Rp{new Intl.NumberFormat("id-ID").format(pokok)} tetap utuh, tetapi manfaatnya terus mengalir
        setiap tahun. Inilah kekuatan wakaf sebagai amal yang tak putus.
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
