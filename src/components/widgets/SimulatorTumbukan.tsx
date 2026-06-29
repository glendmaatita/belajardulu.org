import { useState } from "react";

// Kekekalan momentum pada tumbukan tidak elastis (dua benda menyatu).
export function SimulatorTumbukan() {
  const [m1, setM1] = useState(2);
  const [v1, setV1] = useState(6);
  const [m2, setM2] = useState(4);
  const [v2, setV2] = useState(0);
  const [reveal, setReveal] = useState(false);

  const pBefore = m1 * v1 + m2 * v2;
  const vAfter = pBefore / (m1 + m2);

  const Slider = ({ label, val, set, min, max, unit }: { label: string; val: number; set: (n: number) => void; min: number; max: number; unit: string }) => (
    <div>
      <label className="block text-xs font-bold text-ink-faint">{label}: <span className="tnum">{val} {unit}</span></label>
      <input type="range" min={min} max={max} value={val} onChange={(e) => set(Number(e.target.value))} className="w-full" />
    </div>
  );

  return (
    <div className="my-6 card p-5">
      <div className="mb-1 text-sm font-bold text-brand-700">🎱 Simulator Tumbukan</div>
      <p className="mb-4 text-xs text-ink-faint">Dua benda bertumbukan dan menyatu (tak elastis). Atur massa dan kecepatannya, lihat kecepatan gabungan.</p>

      <div className="grid grid-cols-2 gap-x-4 gap-y-2">
        <Slider label="Massa 1" val={m1} set={setM1} min={1} max={10} unit="kg" />
        <Slider label="Kecepatan 1" val={v1} set={setV1} min={0} max={20} unit="m/s" />
        <Slider label="Massa 2" val={m2} set={setM2} min={1} max={10} unit="kg" />
        <Slider label="Kecepatan 2" val={v2} set={setV2} min={0} max={20} unit="m/s" />
      </div>

      <div className="mt-4 grid grid-cols-2 gap-2 text-center">
        <div className="rounded-xl bg-sky-50 p-3"><div className="text-xs text-sky-700">Momentum total</div><div className="text-lg font-extrabold text-sky-700 tnum">{pBefore} kg m/s</div></div>
        <div className="rounded-xl bg-emerald-50 p-3"><div className="text-xs text-emerald-700">Kecepatan gabungan</div><div className="text-lg font-extrabold text-emerald-700 tnum">{vAfter.toFixed(2)} m/s</div></div>
      </div>

      {reveal ? (
        <div className="mt-3 rounded-lg bg-emerald-50 p-3 text-sm text-emerald-800">
          Momentum total sebelum = sesudah: <b>m1 v1 + m2 v2 = (m1 + m2) v'</b>. Momentum kekal walau bendanya menyatu.
        </div>
      ) : (
        <button onClick={() => setReveal(true)} className="btn-primary mt-3 w-full">Apa yang kekal di sini?</button>
      )}
    </div>
  );
}
