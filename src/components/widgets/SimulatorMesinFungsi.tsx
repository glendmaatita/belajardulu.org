import { useState } from "react";

// Fungsi sebagai mesin: masukkan x, dapatkan f(x) = 2x + 1.
export function SimulatorMesinFungsi() {
  const [x, setX] = useState(3);
  const [reveal, setReveal] = useState(false);
  const fx = 2 * x + 1;

  return (
    <div className="my-6 card p-5">
      <div className="mb-1 text-sm font-bold text-brand-700">⚙️ Simulator Mesin Fungsi</div>
      <p className="mb-4 text-xs text-ink-faint">Masukkan sebuah angka. Mesin ini punya aturan rahasia. Coba beberapa nilai dan tebak aturannya.</p>

      <div className="flex items-center justify-center gap-3">
        <span className="text-xs font-bold text-ink-faint">x =</span>
        <button onClick={() => setX((v) => v - 1)} className="h-8 w-8 rounded-md bg-canvas font-bold text-ink-soft hover:bg-line">-</button>
        <span className="w-10 text-center text-lg font-bold tnum">{x}</span>
        <button onClick={() => setX((v) => v + 1)} className="h-8 w-8 rounded-md bg-canvas font-bold text-ink-soft hover:bg-line">+</button>
      </div>

      <div className="mt-3 flex items-center justify-center gap-3">
        <div className="grid h-12 w-14 place-items-center rounded-lg bg-canvas text-lg font-bold tnum">{x}</div>
        <span className="text-xl text-ink-faint">→</span>
        <div className="grid h-16 w-28 place-items-center rounded-xl bg-brand-600 text-center text-xs font-bold text-white">MESIN</div>
        <span className="text-xl text-ink-faint">→</span>
        <div className="grid h-12 w-14 place-items-center rounded-lg bg-emerald-500 text-lg font-bold text-white tnum">{fx}</div>
      </div>

      {reveal ? (
        <div className="mt-3 rounded-lg bg-emerald-50 p-3 text-center text-sm text-emerald-800">
          Setiap masukan dikali 2 lalu ditambah 1. Aturannya: <b className="font-mono">f(x) = 2x + 1</b>. Fungsi memetakan tiap x ke tepat satu f(x).
        </div>
      ) : (
        <button onClick={() => setReveal(true)} className="btn-primary mt-3 w-full">Apa aturan mesinnya?</button>
      )}
    </div>
  );
}
