import { useMemo, useState } from "react";
import { rupiah, angka } from "../../lib/format";

export function KalkulatorPajakKarbon() {
  const [emisi, setEmisi] = useState(50_000); // tCO2e/tahun
  const [tarif, setTarif] = useState(30_000); // Rp/tCO2e (UU HPP: min Rp30/kg = Rp30.000/ton)
  const [kurangi, setKurangi] = useState(20); // % pengurangan emisi

  const r = useMemo(() => {
    const pajakAwal = emisi * tarif;
    const emisiBaru = emisi * (1 - kurangi / 100);
    const pajakBaru = emisiBaru * tarif;
    return { pajakAwal, emisiBaru, pajakBaru, hemat: pajakAwal - pajakBaru };
  }, [emisi, tarif, kurangi]);

  return (
    <div className="my-6 card p-5">
      <div className="mb-1 text-sm font-bold text-emerald-700">🧾 Kalkulator Pajak Karbon</div>
      <p className="mb-4 text-xs text-ink-faint">
        Ilustrasi UU HPP: tarif minimal Rp30 per kg CO2e (= Rp30.000 per ton).
      </p>

      <div className="grid gap-4 sm:grid-cols-3">
        <Slider label="Emisi tahunan" value={emisi} set={setEmisi} min={0} max={200_000} step={5_000} unit="tCO2e" />
        <Slider label="Tarif pajak" value={tarif} set={setTarif} min={10_000} max={150_000} step={5_000} unit="Rp/tCO2e" money />
        <Slider label="Target pengurangan" value={kurangi} set={setKurangi} min={0} max={100} step={5} unit="%" />
      </div>

      <div className="mt-5 grid gap-3 sm:grid-cols-3">
        <Card label="Pajak tanpa aksi" value={rupiah(Math.round(r.pajakAwal))} accent="text-rose-600" />
        <Card label={`Pajak setelah −${kurangi}%`} value={rupiah(Math.round(r.pajakBaru))} accent="text-sky-700" />
        <Card label="Penghematan pajak" value={rupiah(Math.round(r.hemat))} accent="text-emerald-700" />
      </div>
      <p className="mt-3 text-xs text-ink-faint">
        Dengan menurunkan emisi <b>{kurangi}%</b> menjadi <b>{angka(Math.round(r.emisiBaru))} tCO2e</b>, beban pajak
        karbon turun <b>{rupiah(Math.round(r.hemat))}</b> per tahun. Inilah cara pajak karbon mendorong dekarbonisasi.
      </p>
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

function Slider({
  label,
  value,
  set,
  min,
  max,
  step,
  unit,
  money,
}: {
  label: string;
  value: number;
  set: (n: number) => void;
  min: number;
  max: number;
  step: number;
  unit: string;
  money?: boolean;
}) {
  return (
    <div>
      <div className="mb-1 flex items-center justify-between">
        <span className="text-sm font-semibold text-ink-soft">{label}</span>
        <span className="tnum text-sm font-bold text-ink">{money ? rupiah(value) : angka(value)}</span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => set(Number(e.target.value))}
        className="h-2 w-full cursor-pointer appearance-none rounded-full bg-line accent-emerald-600"
      />
      <div className="mt-0.5 text-right text-[11px] text-ink-faint">{unit}</div>
    </div>
  );
}
