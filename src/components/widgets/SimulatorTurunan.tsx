import { useState } from "react";

// Kemiringan garis potong (secant) mendekati garis singgung saat h mengecil.
// Pakai f(x) = x^2 di titik x = 2; turunan sejatinya 4.
export function SimulatorTurunan() {
  const [h, setH] = useState(1);
  const x0 = 2;
  const f = (x: number) => x * x;
  const slope = (f(x0 + h) - f(x0)) / h; // = 4 + h

  const opsiH = [1, 0.5, 0.1, 0.01];

  return (
    <div className="my-6 card p-5">
      <div className="mb-1 text-sm font-bold text-brand-700">📉 Simulator Turunan</div>
      <p className="mb-4 text-xs text-ink-faint">Pada kurva f(x) = x², kemiringan rata-rata antara x = 2 dan x = 2 + h. Perkecil h dan amati ke mana kemiringannya menuju.</p>

      <div className="flex justify-center gap-2">
        {opsiH.map((v) => (
          <button key={v} onClick={() => setH(v)} className={`rounded-lg px-3 py-1.5 text-sm font-bold tnum transition ${h === v ? "bg-brand-600 text-white" : "bg-canvas text-ink-soft hover:bg-line"}`}>
            h={v}
          </button>
        ))}
      </div>

      <div className="mt-3 rounded-xl bg-canvas p-4 text-center">
        <div className="font-mono text-sm text-ink-soft">
          ( f(2+{h}) - f(2) ) / {h} = ( {f(x0 + h).toFixed(4)} - 4 ) / {h}
        </div>
        <div className="mt-2 text-2xl font-extrabold text-emerald-600 tnum">{slope.toFixed(3)}</div>
        <div className="text-xs text-ink-faint">kemiringan rata-rata</div>
      </div>

      <div className="mt-3 rounded-lg bg-amber-50 p-3 text-sm text-amber-800">
        Saat h mengecil menuju 0, kemiringan mendekati <b className="tnum">4</b>. Itulah kemiringan garis singgung di x = 2, yaitu nilai turunan f(x) = x² di titik itu.
      </div>
    </div>
  );
}
