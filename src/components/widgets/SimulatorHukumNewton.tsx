import { useState } from "react";

// Hukum Newton II: atur gaya dan massa, lihat percepatan.
export function SimulatorHukumNewton() {
  const [f, setF] = useState(20);
  const [m, setM] = useState(4);
  const [reveal, setReveal] = useState(false);
  const a = f / m;

  return (
    <div className="my-6 card p-5">
      <div className="mb-1 text-sm font-bold text-brand-700">🧲 Simulator Hukum Newton II</div>
      <p className="mb-4 text-xs text-ink-faint">Dorong sebuah kotak. Atur gaya dan massa, lalu amati percepatannya. Tebak hubungannya.</p>

      <label className="block text-xs font-bold text-ink-faint">Gaya F: <span className="tnum">{f} N</span></label>
      <input type="range" min={0} max={100} step={2} value={f} onChange={(e) => setF(Number(e.target.value))} className="w-full" />
      <label className="mt-1 block text-xs font-bold text-ink-faint">Massa m: <span className="tnum">{m} kg</span></label>
      <input type="range" min={1} max={20} value={m} onChange={(e) => setM(Number(e.target.value))} className="w-full" />

      <div className="mt-4 rounded-xl bg-emerald-50 p-4 text-center">
        <div className="text-xs text-emerald-700">Percepatan</div>
        <div className="text-2xl font-extrabold text-emerald-700 tnum">{a.toFixed(2)} m/s²</div>
      </div>

      {reveal ? (
        <div className="mt-3 rounded-lg bg-emerald-50 p-3 text-sm text-emerald-800">
          Gaya dua kali lipat menggandakan percepatan; massa dua kali lipat memangkasnya separuh. Itulah <b>F = m a</b>, atau a = F ÷ m.
        </div>
      ) : (
        <button onClick={() => setReveal(true)} className="btn-primary mt-3 w-full">Apa hubungannya?</button>
      )}
    </div>
  );
}
