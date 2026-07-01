import { useMemo, useState } from "react";
import { rupiah } from "../../lib/format";

// Penggandaan uang oleh perbankan. Angka pengganda uang = 1 / GWM.
// Setoran awal dapat menciptakan uang beredar berlipat lewat siklus simpan-pinjam,
// dibatasi oleh giro wajib minimum (GWM) yang harus disimpan bank.
export function KalkulatorMultiplierUang() {
  const [setoran, setSetoran] = useState(100_000_000);
  const [gwm, setGwm] = useState(5); // % giro wajib minimum

  const r = useMemo(() => {
    const rasio = gwm / 100;
    const multiplier = rasio > 0 ? 1 / rasio : 0;
    const totalUang = setoran * multiplier;
    const uangTercipta = totalUang - setoran;
    return { multiplier, totalUang, uangTercipta };
  }, [setoran, gwm]);

  return (
    <div className="my-6 card p-5">
      <div className="mb-1 text-sm font-bold text-brand-700">🏦 Kalkulator Penggandaan Uang</div>
      <p className="mb-4 text-xs text-ink-faint">
        Saat bank meminjamkan kembali sebagian besar simpanan, satu setoran bisa menciptakan uang beredar berlipat.
        Angka penggandanya = 1 dibagi giro wajib minimum (GWM). Makin tinggi GWM, makin kecil penggandaannya.
      </p>

      <Slider label="Setoran awal" value={setoran} min={10_000_000} max={1_000_000_000} step={10_000_000} fmt={rupiah} onChange={setSetoran} />
      <Slider label="Giro wajib minimum (GWM)" value={gwm} min={1} max={25} step={1} fmt={(n) => `${n}%`} onChange={setGwm} />

      <div className="mt-5 grid gap-3 sm:grid-cols-3">
        <Box label="Angka pengganda uang" value={`${r.multiplier.toFixed(1)}x`} color="text-sky-700" />
        <Box label="Total uang beredar" value={rupiah(Math.round(r.totalUang))} color="text-brand-700" />
        <Box label="Uang baru tercipta" value={rupiah(Math.round(r.uangTercipta))} color="text-emerald-700" />
      </div>
      <p className="mt-3 rounded-lg bg-brand-50 px-3 py-2 text-sm text-brand-800">
        Dengan GWM {gwm}%, setiap rupiah simpanan berpotensi menjadi {r.multiplier.toFixed(1)} rupiah uang beredar.
        Menaikkan GWM adalah cara bank sentral menyerap likuiditas.
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
