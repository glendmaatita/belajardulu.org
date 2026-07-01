import { useMemo, useState } from "react";

// Koridor suku bunga: suku bunga acuan di tengah, fasilitas simpanan (deposit
// facility) sebagai lantai, fasilitas pinjaman (lending facility) sebagai atap.
// Suku bunga pasar uang antarbank bergerak di dalam koridor.
export function SimulatorKoridorSukuBunga() {
  const [acuan, setAcuan] = useState(6);
  const [lebar, setLebar] = useState(1); // setengah lebar koridor (plus minus)

  const r = useMemo(() => {
    const atap = acuan + lebar; // lending facility
    const lantai = acuan - lebar; // deposit facility
    return { atap, lantai };
  }, [acuan, lebar]);

  return (
    <div className="my-6 card p-5">
      <div className="mb-1 text-sm font-bold text-brand-700">🎚️ Simulator Koridor Suku Bunga</div>
      <p className="mb-4 text-xs text-ink-faint">
        Bank sentral memagari suku bunga antarbank dengan koridor: lantai (fasilitas simpanan) dan atap (fasilitas
        pinjaman), dengan suku bunga acuan di tengah. Atur acuan dan lebar koridornya.
      </p>

      <Slider label="Suku bunga acuan" value={acuan} min={2} max={10} step={0.25} onChange={setAcuan} />
      <Slider label="Lebar koridor (plus minus)" value={lebar} min={0.25} max={2} step={0.25} onChange={setLebar} />

      <div className="mt-5 space-y-2">
        <Bar label="Fasilitas pinjaman (atap)" value={r.atap} color="bg-rose-500" text="text-rose-700" />
        <Bar label="Suku bunga acuan" value={acuan} color="bg-sky-500" text="text-sky-700" />
        <Bar label="Fasilitas simpanan (lantai)" value={r.lantai} color="bg-emerald-500" text="text-emerald-700" />
      </div>
      <p className="mt-3 rounded-lg bg-brand-50 px-3 py-2 text-sm text-brand-800">
        Koridor selebar plus minus {lebar.toFixed(2)}% menjaga suku bunga pasar uang tetap dekat dengan acuan
        {" "}{acuan.toFixed(2)}%. Koridor sempit berarti kendali yang lebih ketat.
      </p>
    </div>
  );
}

function Bar({ label, value, color, text }: { label: string; value: number; color: string; text: string }) {
  return (
    <div className="flex items-center gap-3">
      <div className="w-52 text-sm font-semibold text-ink-soft">{label}</div>
      <div className="flex-1 rounded-full bg-line">
        <div className={`h-6 rounded-full ${color}`} style={{ width: `${(value / 12) * 100}%` }} />
      </div>
      <div className={`w-16 text-right tnum text-sm font-bold ${text}`}>{value.toFixed(2)}%</div>
    </div>
  );
}

function Slider({ label, value, min, max, step, onChange }: { label: string; value: number; min: number; max: number; step: number; onChange: (n: number) => void }) {
  return (
    <div className="mb-3">
      <div className="mb-1 flex items-center justify-between">
        <span className="text-sm font-semibold text-ink-soft">{label}</span>
        <span className="tnum text-sm font-bold text-ink">{value.toFixed(2)}%</span>
      </div>
      <input type="range" min={min} max={max} step={step} value={value} onChange={(e) => onChange(Number(e.target.value))} className="h-2 w-full cursor-pointer appearance-none rounded-full bg-line accent-brand-600" />
    </div>
  );
}
