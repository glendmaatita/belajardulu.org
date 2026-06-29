import { useState } from "react";

// Gerak lurus berubah beraturan: atur v0, a, t; lihat v dan jarak.
export function SimulatorGLBB() {
  const [v0, setV0] = useState(0);
  const [a, setA] = useState(2);
  const [t, setT] = useState(5);
  const [reveal, setReveal] = useState(false);

  const v = v0 + a * t;
  const s = v0 * t + 0.5 * a * t * t;

  const Slider = ({ label, val, set, min, max, unit }: { label: string; val: number; set: (n: number) => void; min: number; max: number; unit: string }) => (
    <div>
      <label className="block text-xs font-bold text-ink-faint">{label}: <span className="tnum">{val} {unit}</span></label>
      <input type="range" min={min} max={max} value={val} onChange={(e) => set(Number(e.target.value))} className="w-full" />
    </div>
  );

  return (
    <div className="my-6 card p-5">
      <div className="mb-1 text-sm font-bold text-brand-700">🏎️ Simulator Gerak (GLBB)</div>
      <p className="mb-4 text-xs text-ink-faint">Atur kecepatan awal, percepatan, dan waktu. Amati kecepatan akhir dan jarak yang ditempuh.</p>

      <div className="space-y-2">
        <Slider label="Kecepatan awal v0" val={v0} set={setV0} min={0} max={20} unit="m/s" />
        <Slider label="Percepatan a" val={a} set={setA} min={0} max={10} unit="m/s²" />
        <Slider label="Waktu t" val={t} set={setT} min={1} max={15} unit="s" />
      </div>

      <div className="mt-4 grid grid-cols-2 gap-2 text-center">
        <div className="rounded-xl bg-sky-50 p-3"><div className="text-xs text-sky-700">Kecepatan akhir</div><div className="text-lg font-extrabold text-sky-700 tnum">{v} m/s</div></div>
        <div className="rounded-xl bg-emerald-50 p-3"><div className="text-xs text-emerald-700">Jarak tempuh</div><div className="text-lg font-extrabold text-emerald-700 tnum">{s} m</div></div>
      </div>

      {reveal ? (
        <div className="mt-3 rounded-lg bg-emerald-50 p-3 text-sm text-emerald-800">
          Setelah mencoba banyak nilai, polanya jelas: <b>v = v0 + a t</b> dan <b>s = v0 t + setengah a t²</b>. Rumus ini lahir dari pola percepatan yang tetap.
        </div>
      ) : (
        <button onClick={() => setReveal(true)} className="btn-primary mt-3 w-full">Temukan rumusnya</button>
      )}
    </div>
  );
}
