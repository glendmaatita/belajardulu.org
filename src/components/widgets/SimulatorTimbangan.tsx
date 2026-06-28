import { useState } from "react";

// Selesaikan x + a = b dengan menjaga timbangan seimbang.
export function SimulatorTimbangan() {
  const [a, setA] = useState(3);
  const [b, setB] = useState(8);
  const [reveal, setReveal] = useState(false);

  const x = b - a;

  const Step = ({ label, val, set }: { label: string; val: number; set: (n: number) => void }) => (
    <div className="flex items-center gap-2">
      <span className="w-28 text-xs font-bold text-ink-faint">{label}</span>
      <button onClick={() => set(Math.max(0, val - 1))} className="h-7 w-7 rounded-md bg-slate-100 font-bold text-ink-soft hover:bg-slate-200">-</button>
      <span className="w-6 text-center font-bold tnum">{val}</span>
      <button onClick={() => set(val + 1)} className="h-7 w-7 rounded-md bg-slate-100 font-bold text-ink-soft hover:bg-slate-200">+</button>
    </div>
  );

  return (
    <div className="my-6 card p-5">
      <div className="mb-1 text-sm font-bold text-brand-700">⚖️ Simulator Timbangan</div>
      <p className="mb-4 text-xs text-ink-faint">Persamaan adalah timbangan yang seimbang. Atur angkanya, lalu temukan nilai x dengan menjaga keseimbangan.</p>

      <div className="flex flex-col gap-2">
        <Step label="Tambahan (a)" val={a} set={setA} />
        <Step label="Hasil (b)" val={b} set={setB} />
      </div>

      <div className="mt-4 rounded-xl bg-slate-50 p-4 text-center font-mono text-lg text-ink">
        x + {a} = {b}
      </div>

      {b < a ? (
        <p className="mt-2 text-center text-xs text-amber-600">Buat hasil (b) minimal sama dengan tambahan (a) agar x tidak negatif.</p>
      ) : reveal ? (
        <div className="mt-3 rounded-lg bg-emerald-50 p-3 text-sm text-emerald-800">
          Kurangi {a} di KEDUA sisi agar tetap seimbang: x + {a} - {a} = {b} - {a}, sehingga <b className="tnum">x = {x}</b>. Aturan "pindah ruas" hanyalah menjaga timbangan seimbang.
        </div>
      ) : (
        <button onClick={() => setReveal(true)} className="btn-primary mt-3 w-full">Cari nilai x</button>
      )}
    </div>
  );
}
