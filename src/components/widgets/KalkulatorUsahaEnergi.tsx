import { useState } from "react";

// Usaha dan energi kinetik: atur gaya, perpindahan, massa, kecepatan.
export function KalkulatorUsahaEnergi() {
  const [f, setF] = useState(10);
  const [s, setS] = useState(4);
  const [m, setM] = useState(2);
  const [v, setV] = useState(6);
  const [reveal, setReveal] = useState(false);

  const usaha = f * s;
  const ek = 0.5 * m * v * v;

  const Slider = ({ label, val, set, min, max, unit }: { label: string; val: number; set: (n: number) => void; min: number; max: number; unit: string }) => (
    <div>
      <label className="block text-xs font-bold text-ink-faint">{label}: <span className="tnum">{val} {unit}</span></label>
      <input type="range" min={min} max={max} value={val} onChange={(e) => set(Number(e.target.value))} className="w-full" />
    </div>
  );

  return (
    <div className="my-6 card p-5">
      <div className="mb-1 text-sm font-bold text-brand-700">⚡ Kalkulator Usaha & Energi</div>
      <p className="mb-4 text-xs text-ink-faint">Jelajahi usaha (gaya kali perpindahan) dan energi kinetik (energi gerak). Amati polanya.</p>

      <div className="grid grid-cols-2 gap-x-4 gap-y-2">
        <Slider label="Gaya F" val={f} set={setF} min={0} max={50} unit="N" />
        <Slider label="Perpindahan s" val={s} set={setS} min={0} max={20} unit="m" />
        <Slider label="Massa m" val={m} set={setM} min={1} max={10} unit="kg" />
        <Slider label="Kecepatan v" val={v} set={setV} min={0} max={20} unit="m/s" />
      </div>

      <div className="mt-4 grid grid-cols-2 gap-2 text-center">
        <div className="rounded-xl bg-amber-50 p-3"><div className="text-xs text-amber-700">Usaha W = F s</div><div className="text-lg font-extrabold text-amber-700 tnum">{usaha} J</div></div>
        <div className="rounded-xl bg-emerald-50 p-3"><div className="text-xs text-emerald-700">Energi kinetik</div><div className="text-lg font-extrabold text-emerald-700 tnum">{ek} J</div></div>
      </div>

      {reveal ? (
        <div className="mt-3 rounded-lg bg-emerald-50 p-3 text-sm text-emerald-800">
          Usaha = gaya × perpindahan (<b>W = F s</b>). Energi kinetik = setengah massa kali kecepatan kuadrat (<b>Ek = setengah m v²</b>). Keduanya bersatuan joule (J).
        </div>
      ) : (
        <button onClick={() => setReveal(true)} className="btn-primary mt-3 w-full">Lihat rumusnya</button>
      )}
    </div>
  );
}
