import { useState } from "react";

// Ukur lingkaran berbeda, rasio keliling/diameter selalu sekitar 3,14.
export function SimulatorPi() {
  const [diameter, setDiameter] = useState(10);
  const [reveal, setReveal] = useState(false);

  const PI = 3.14159;
  const keliling = diameter * PI;

  return (
    <div className="my-6 card p-5">
      <div className="mb-1 text-sm font-bold text-brand-700">⭕ Simulator Bilangan Pi</div>
      <p className="mb-4 text-xs text-ink-faint">Ubah diameter lingkaran dan amati kelilingnya. Perhatikan angka ajaib yang selalu muncul saat keliling dibagi diameter.</p>

      <label className="block text-xs font-bold text-ink-faint">Diameter: <span className="tnum">{diameter} cm</span></label>
      <input type="range" min={1} max={50} value={diameter} onChange={(e) => setDiameter(Number(e.target.value))} className="w-full" />

      <div className="mt-3 flex justify-center">
        <div className="rounded-full border-4 border-brand-400 bg-brand-50" style={{ width: Math.min(diameter * 4, 180), height: Math.min(diameter * 4, 180) }} />
      </div>

      <div className="mt-4 grid grid-cols-3 gap-2 text-center">
        <div className="rounded-xl bg-sky-50 p-3">
          <div className="text-xs text-sky-700">Diameter</div>
          <div className="text-base font-extrabold text-sky-700 tnum">{diameter}</div>
        </div>
        <div className="rounded-xl bg-amber-50 p-3">
          <div className="text-xs text-amber-700">Keliling</div>
          <div className="text-base font-extrabold text-amber-700 tnum">{keliling.toFixed(2)}</div>
        </div>
        <div className="rounded-xl bg-emerald-50 p-3">
          <div className="text-xs text-emerald-700">Keliling ÷ Diameter</div>
          <div className="text-base font-extrabold text-emerald-700 tnum">{(keliling / diameter).toFixed(3)}</div>
        </div>
      </div>

      {reveal ? (
        <div className="mt-3 rounded-lg bg-emerald-50 p-3 text-sm text-emerald-800">
          Berapa pun diameternya, keliling ÷ diameter selalu sekitar <b className="tnum">3,14</b>. Angka itu kita beri nama π (pi), sehingga <b>Keliling = π × diameter</b>.
        </div>
      ) : (
        <button onClick={() => setReveal(true)} className="btn-primary mt-3 w-full">Mengapa angkanya selalu sama?</button>
      )}
    </div>
  );
}
