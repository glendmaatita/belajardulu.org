import { useMemo, useState } from "react";

// Inflasi umum (headline) terdiri dari komponen inti (core) yang stabil, harga
// bergejolak (volatile foods), dan harga diatur pemerintah (administered prices).
// Bank sentral lebih fokus pada inflasi inti karena paling dipengaruhi kebijakan moneter.
export function SimulatorInflasiInti() {
  const [inti, setInti] = useState(2.5);
  const [bergejolak, setBergejolak] = useState(6);
  const [diatur, setDiatur] = useState(3);
  // bobot kira-kira: inti ~65%, bergejolak ~18%, diatur ~17%
  const wInti = 0.65, wVol = 0.18, wAdm = 0.17;

  const r = useMemo(() => {
    const headline = inti * wInti + bergejolak * wVol + diatur * wAdm;
    return { headline };
  }, [inti, bergejolak, diatur]);

  return (
    <div className="my-6 card p-5">
      <div className="mb-1 text-sm font-bold text-brand-700">🌡️ Simulator Inflasi Inti vs Umum</div>
      <p className="mb-4 text-xs text-ink-faint">
        Inflasi umum (headline) adalah gabungan inflasi inti yang stabil, harga pangan bergejolak, dan harga yang
        diatur pemerintah. Bank sentral paling memperhatikan inflasi inti karena paling responsif terhadap kebijakannya.
      </p>

      <Slider label="Inflasi inti (bobot 65%)" value={inti} min={0} max={8} step={0.1} onChange={setInti} />
      <Slider label="Harga bergejolak / pangan (bobot 18%)" value={bergejolak} min={-5} max={20} step={0.5} onChange={setBergejolak} />
      <Slider label="Harga diatur pemerintah (bobot 17%)" value={diatur} min={-2} max={15} step={0.5} onChange={setDiatur} />

      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        <Box label="Inflasi inti" value={`${inti.toFixed(1)}%`} color="text-emerald-700" />
        <Box label="Inflasi umum (headline)" value={`${r.headline.toFixed(2)}%`} color="text-brand-700" />
      </div>
      <p className="mt-3 rounded-lg bg-brand-50 px-3 py-2 text-sm text-brand-800">
        Lonjakan harga cabai atau kenaikan harga BBM bisa membuat headline melonjak meski inflasi inti tetap jinak.
        Karena itu bank sentral tidak bereaksi berlebihan pada setiap guncangan sesaat.
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

function Slider({ label, value, min, max, step, onChange }: { label: string; value: number; min: number; max: number; step: number; onChange: (n: number) => void }) {
  return (
    <div className="mb-3">
      <div className="mb-1 flex items-center justify-between">
        <span className="text-sm font-semibold text-ink-soft">{label}</span>
        <span className="tnum text-sm font-bold text-ink">{value.toFixed(1)}%</span>
      </div>
      <input type="range" min={min} max={max} step={step} value={value} onChange={(e) => onChange(Number(e.target.value))} className="h-2 w-full cursor-pointer appearance-none rounded-full bg-line accent-brand-600" />
    </div>
  );
}
