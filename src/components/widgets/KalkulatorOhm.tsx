import { useState } from "react";

// Hukum Ohm: atur tegangan dan hambatan, lihat arus.
export function KalkulatorOhm() {
  const [v, setV] = useState(12);
  const [r, setR] = useState(4);
  const [reveal, setReveal] = useState(false);
  const i = v / r;
  const p = v * i;

  return (
    <div className="my-6 card p-5">
      <div className="mb-1 text-sm font-bold text-brand-700">🔌 Kalkulator Hukum Ohm</div>
      <p className="mb-4 text-xs text-ink-faint">Atur tegangan baterai dan hambatan. Amati arus yang mengalir. Tebak hubungannya.</p>

      <label className="block text-xs font-bold text-ink-faint">Tegangan V: <span className="tnum">{v} V</span></label>
      <input type="range" min={1} max={48} value={v} onChange={(e) => setV(Number(e.target.value))} className="w-full" />
      <label className="mt-1 block text-xs font-bold text-ink-faint">Hambatan R: <span className="tnum">{r} ohm</span></label>
      <input type="range" min={1} max={24} value={r} onChange={(e) => setR(Number(e.target.value))} className="w-full" />

      <div className="mt-4 grid grid-cols-2 gap-2 text-center">
        <div className="rounded-xl bg-sky-50 p-3"><div className="text-xs text-sky-700">Arus I</div><div className="text-lg font-extrabold text-sky-700 tnum">{i.toFixed(2)} A</div></div>
        <div className="rounded-xl bg-amber-50 p-3"><div className="text-xs text-amber-700">Daya P</div><div className="text-lg font-extrabold text-amber-700 tnum">{p.toFixed(1)} W</div></div>
      </div>

      {reveal ? (
        <div className="mt-3 rounded-lg bg-emerald-50 p-3 text-sm text-emerald-800">
          Naikkan tegangan, arus naik; naikkan hambatan, arus turun. Itulah <b>V = I R</b>, jadi I = V ÷ R. Daya listrik P = V × I.
        </div>
      ) : (
        <button onClick={() => setReveal(true)} className="btn-primary mt-3 w-full">Apa hubungannya?</button>
      )}
    </div>
  );
}
