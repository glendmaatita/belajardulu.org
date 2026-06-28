import { useState } from "react";

// Jelajahi segitiga siku-siku: ubah dua sisi tegak, temukan pola a^2 + b^2 = c^2.
export function EksplorasiPythagoras() {
  const [a, setA] = useState(3);
  const [b, setB] = useState(4);
  const [reveal, setReveal] = useState(false);

  const c2 = a * a + b * b;
  const c = Math.sqrt(c2);
  const rapi = Number.isInteger(c);

  const Step = ({ label, val, set }: { label: string; val: number; set: (n: number) => void }) => (
    <div className="flex items-center gap-2">
      <span className="w-24 text-xs font-bold text-ink-faint">{label}</span>
      <button onClick={() => set(Math.max(1, val - 1))} className="h-7 w-7 rounded-md bg-canvas font-bold text-ink-soft hover:bg-line">-</button>
      <span className="w-6 text-center font-bold tnum">{val}</span>
      <button onClick={() => set(Math.min(12, val + 1))} className="h-7 w-7 rounded-md bg-canvas font-bold text-ink-soft hover:bg-line">+</button>
    </div>
  );

  return (
    <div className="my-6 card p-5">
      <div className="mb-1 text-sm font-bold text-brand-700">📐 Eksplorasi Pythagoras</div>
      <p className="mb-4 text-xs text-ink-faint">Atur dua sisi tegak segitiga siku-siku. Hitung luas bujur sangkar di tiap sisi, lalu lihat hubungannya dengan sisi miring.</p>

      <div className="flex flex-col gap-2">
        <Step label="Sisi tegak a" val={a} set={setA} />
        <Step label="Sisi tegak b" val={b} set={setB} />
      </div>

      <div className="mt-4 grid grid-cols-3 gap-2 text-center">
        <div className="rounded-xl bg-amber-50 p-3">
          <div className="text-xs text-amber-700">a × a</div>
          <div className="text-lg font-extrabold text-amber-700 tnum">{a * a}</div>
        </div>
        <div className="rounded-xl bg-sky-50 p-3">
          <div className="text-xs text-sky-700">b × b</div>
          <div className="text-lg font-extrabold text-sky-700 tnum">{b * b}</div>
        </div>
        <div className="rounded-xl bg-emerald-50 p-3">
          <div className="text-xs text-emerald-700">a×a + b×b</div>
          <div className="text-lg font-extrabold text-emerald-700 tnum">{c2}</div>
        </div>
      </div>

      <div className="mt-3 text-center text-sm text-ink-soft">
        Sisi miring c = akar dari {c2} = <b className="tnum">{rapi ? c : c.toFixed(3)}</b>
        {rapi && <span className="ml-1 text-emerald-600">(bilangan bulat rapi)</span>}
      </div>

      {reveal ? (
        <div className="mt-3 rounded-lg bg-emerald-50 p-3 text-center text-sm text-emerald-800">
          Coba berbagai a dan b, polanya selalu sama: <b>a² + b² = c²</b>. Itulah <b>Teorema Pythagoras</b>, ditemukan dari pola, bukan dihafal lebih dulu.
        </div>
      ) : (
        <button onClick={() => setReveal(true)} className="btn-primary mt-3 w-full">Temukan polanya</button>
      )}
    </div>
  );
}
