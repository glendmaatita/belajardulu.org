import { useState } from "react";

// Hubungan cepat rambat, frekuensi, dan panjang gelombang: v = f x lambda.
export function SimulatorGelombang() {
  const [f, setF] = useState(2);
  const [lambda, setLambda] = useState(3);
  const [reveal, setReveal] = useState(false);
  const v = f * lambda;

  return (
    <div className="my-6 card p-5">
      <div className="mb-1 text-sm font-bold text-brand-700">〰️ Simulator Gelombang</div>
      <p className="mb-4 text-xs text-ink-faint">Atur frekuensi dan panjang gelombang, amati cepat rambatnya. Temukan hubungannya.</p>

      <label className="block text-xs font-bold text-ink-faint">Frekuensi f: <span className="tnum">{f} Hz</span></label>
      <input type="range" min={1} max={10} value={f} onChange={(e) => setF(Number(e.target.value))} className="w-full" />
      <label className="mt-1 block text-xs font-bold text-ink-faint">Panjang gelombang: <span className="tnum">{lambda} m</span></label>
      <input type="range" min={1} max={10} value={lambda} onChange={(e) => setLambda(Number(e.target.value))} className="w-full" />

      <div className="mt-3 flex justify-center overflow-hidden rounded-lg bg-slate-50 p-2">
        <svg width="280" height="70" viewBox="0 0 280 70">
          <polyline
            points={Array.from({ length: 141 }, (_, i) => {
              const x = i * 2;
              const y = 35 - 26 * Math.sin((x / (lambda * 14)) * 2 * Math.PI);
              return `${x},${y}`;
            }).join(" ")}
            fill="none" stroke="#0ea5e9" strokeWidth="2.5"
          />
        </svg>
      </div>

      <div className="mt-3 rounded-xl bg-emerald-50 p-4 text-center">
        <div className="text-xs text-emerald-700">Cepat rambat</div>
        <div className="text-2xl font-extrabold text-emerald-700 tnum">{v} m/s</div>
      </div>

      {reveal ? (
        <div className="mt-3 rounded-lg bg-emerald-50 p-3 text-sm text-emerald-800">
          Cepat rambat selalu sama dengan frekuensi dikali panjang gelombang: <b>v = f × lambda</b>. Gelombang berfrekuensi tinggi punya panjang gelombang pendek bila cepat rambatnya tetap.
        </div>
      ) : (
        <button onClick={() => setReveal(true)} className="btn-primary mt-3 w-full">Temukan hubungannya</button>
      )}
    </div>
  );
}
