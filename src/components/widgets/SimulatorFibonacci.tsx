import { useState } from "react";

// Bangun barisan Fibonacci dan amati rasionya mendekati rasio emas 1,618.
export function SimulatorFibonacci() {
  const [deret, setDeret] = useState<number[]>([1, 1]);

  function tambah() {
    setDeret((d) => [...d, d[d.length - 1] + d[d.length - 2]]);
  }
  function reset() {
    setDeret([1, 1]);
  }

  const n = deret.length;
  const rasio = n >= 2 ? deret[n - 1] / deret[n - 2] : 0;

  return (
    <div className="my-6 card p-5">
      <div className="mb-1 text-sm font-bold text-brand-700">🐚 Simulator Fibonacci</div>
      <p className="mb-4 text-xs text-ink-faint">Tekan "Tambah suku" beberapa kali. Tiap suku = jumlah dua suku sebelumnya. Amati rasio suku terbaru terhadap sebelumnya.</p>

      <div className="flex flex-wrap items-center gap-2 rounded-xl bg-slate-50 p-4">
        {deret.map((v, i) => (
          <span
            key={i}
            className={`rounded-lg px-3 py-2 text-sm font-bold tnum ${i >= n - 2 ? "bg-brand-600 text-white" : "bg-white text-ink"}`}
          >
            {v}
          </span>
        ))}
      </div>

      <div className="mt-3 grid grid-cols-2 gap-3">
        <div className="rounded-xl bg-slate-50 p-3 text-center">
          <div className="text-xs text-ink-faint">Suku terakhir ÷ sebelumnya</div>
          <div className="text-xl font-extrabold text-ink tnum">{rasio.toFixed(5)}</div>
        </div>
        <div className="rounded-xl bg-amber-50 p-3 text-center">
          <div className="text-xs text-amber-700">Mendekati rasio emas</div>
          <div className="text-xl font-extrabold text-amber-700 tnum">1.61803</div>
        </div>
      </div>

      <div className="mt-3 flex gap-2">
        <button onClick={tambah} className="btn-primary flex-1">Tambah suku</button>
        <button onClick={reset} className="btn flex-1 bg-slate-100 text-ink-soft hover:bg-slate-200">Ulang</button>
      </div>

      <p className="mt-3 text-xs text-ink-faint">
        Makin panjang deretnya, rasio makin mendekati <b>1,618</b> (rasio emas), yang muncul pada cangkang siput, bunga, dan karya seni. Pola ini kita temukan dengan mencoba, bukan menghafal.
      </p>
    </div>
  );
}
