import { useState } from "react";

// Lempar dadu berkali-kali; frekuensi angka genap mendekati peluang teoritis 1/2.
export function SimulatorPeluang() {
  const [total, setTotal] = useState(0);
  const [genap, setGenap] = useState(0);
  const [reveal, setReveal] = useState(false);

  function lempar(kali: number) {
    let g = 0;
    for (let i = 0; i < kali; i++) {
      const mata = 1 + Math.floor(Math.random() * 6);
      if (mata % 2 === 0) g++;
    }
    setGenap((x) => x + g);
    setTotal((x) => x + kali);
  }
  function reset() {
    setGenap(0);
    setTotal(0);
  }

  const freq = total > 0 ? genap / total : 0;

  return (
    <div className="my-6 card p-5">
      <div className="mb-1 text-sm font-bold text-brand-700">🎲 Simulator Peluang</div>
      <p className="mb-4 text-xs text-ink-faint">Lempar dadu berkali-kali dan hitung berapa kali muncul angka genap. Amati ke mana frekuensinya menuju.</p>

      <div className="grid grid-cols-3 gap-2 text-center">
        <div className="rounded-xl bg-slate-50 p-3">
          <div className="text-xs text-ink-faint">Lemparan</div>
          <div className="text-lg font-extrabold text-ink tnum">{total}</div>
        </div>
        <div className="rounded-xl bg-sky-50 p-3">
          <div className="text-xs text-sky-700">Genap muncul</div>
          <div className="text-lg font-extrabold text-sky-700 tnum">{genap}</div>
        </div>
        <div className="rounded-xl bg-emerald-50 p-3">
          <div className="text-xs text-emerald-700">Frekuensi genap</div>
          <div className="text-lg font-extrabold text-emerald-700 tnum">{freq.toFixed(3)}</div>
        </div>
      </div>

      <div className="mt-3 flex gap-2">
        <button onClick={() => lempar(1)} className="btn flex-1 bg-slate-100 text-ink-soft hover:bg-slate-200">Lempar 1x</button>
        <button onClick={() => lempar(50)} className="btn-primary flex-1">Lempar 50x</button>
        <button onClick={reset} className="btn flex-1 bg-slate-100 text-ink-soft hover:bg-slate-200">Ulang</button>
      </div>

      {reveal ? (
        <div className="mt-3 rounded-lg bg-emerald-50 p-3 text-sm text-emerald-800">
          Makin banyak lemparan, frekuensi mendekati <b className="tnum">0,5</b>. Sebab ada 3 sisi genap dari 6 sisi: Peluang = <b>kejadian diharapkan ÷ semua kemungkinan = 3/6 = 1/2</b>.
        </div>
      ) : (
        <button onClick={() => setReveal(true)} className="mt-3 w-full text-sm font-semibold text-brand-600 hover:text-brand-700">Frekuensi ini menuju angka berapa?</button>
      )}
    </div>
  );
}
