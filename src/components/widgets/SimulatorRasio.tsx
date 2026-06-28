import { useState } from "react";

// Skala resep: rasio beras:air = 1:2 tetap walau porsi berubah.
export function SimulatorRasio() {
  const [porsi, setPorsi] = useState(2);
  const [reveal, setReveal] = useState(false);

  const beras = porsi; // 1 cangkir beras per porsi
  const air = porsi * 2; // rasio 1:2

  return (
    <div className="my-6 card p-5">
      <div className="mb-1 text-sm font-bold text-brand-700">🍚 Simulator Rasio Resep</div>
      <p className="mb-4 text-xs text-ink-faint">Resep dasar: 1 cangkir beras : 2 cangkir air. Ubah jumlah porsi dan amati apa yang tetap.</p>

      <div className="flex items-center justify-center gap-3">
        <span className="text-xs font-bold text-ink-faint">Porsi</span>
        <button onClick={() => setPorsi((p) => Math.max(1, p - 1))} className="h-8 w-8 rounded-md bg-canvas font-bold text-ink-soft hover:bg-line">-</button>
        <span className="w-8 text-center text-lg font-bold tnum">{porsi}</span>
        <button onClick={() => setPorsi((p) => Math.min(10, p + 1))} className="h-8 w-8 rounded-md bg-canvas font-bold text-ink-soft hover:bg-line">+</button>
      </div>

      <div className="mt-4 grid grid-cols-3 gap-2 text-center">
        <div className="rounded-xl bg-amber-50 p-3">
          <div className="text-xs text-amber-700">Beras</div>
          <div className="text-lg font-extrabold text-amber-700 tnum">{beras}</div>
        </div>
        <div className="rounded-xl bg-sky-50 p-3">
          <div className="text-xs text-sky-700">Air</div>
          <div className="text-lg font-extrabold text-sky-700 tnum">{air}</div>
        </div>
        <div className="rounded-xl bg-emerald-50 p-3">
          <div className="text-xs text-emerald-700">Air ÷ Beras</div>
          <div className="text-lg font-extrabold text-emerald-700 tnum">{(air / beras).toFixed(1)}</div>
        </div>
      </div>

      {reveal ? (
        <div className="mt-3 rounded-lg bg-emerald-50 p-3 text-center text-sm text-emerald-800">
          Walau porsi berubah, perbandingan air ÷ beras selalu <b className="tnum">2</b>. Itulah inti rasio: <b>air = 2 × beras</b>. Perbandingan tetap walau ukuran berubah.
        </div>
      ) : (
        <button onClick={() => setReveal(true)} className="btn-primary mt-3 w-full">Apa yang selalu tetap?</button>
      )}
    </div>
  );
}
