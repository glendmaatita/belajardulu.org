import { useState } from "react";

// Pecahan, desimal, persen: tiga wajah dari satu nilai.
export function SimulatorPecahan() {
  const [pembilang, setPembilang] = useState(1);
  const [penyebut, setPenyebut] = useState(4);

  const nilai = pembilang / penyebut;
  const cells = Array.from({ length: penyebut }, (_, i) => i);

  const Step = ({ label, val, set, min, max }: { label: string; val: number; set: (n: number) => void; min: number; max: number }) => (
    <div className="flex items-center gap-2">
      <span className="w-24 text-xs font-bold text-ink-faint">{label}</span>
      <button onClick={() => set(Math.max(min, val - 1))} className="h-7 w-7 rounded-md bg-slate-100 font-bold text-ink-soft hover:bg-slate-200">-</button>
      <span className="w-6 text-center font-bold tnum">{val}</span>
      <button onClick={() => set(Math.min(max, val + 1))} className="h-7 w-7 rounded-md bg-slate-100 font-bold text-ink-soft hover:bg-slate-200">+</button>
    </div>
  );

  return (
    <div className="my-6 card p-5">
      <div className="mb-1 text-sm font-bold text-brand-700">🍕 Simulator Pecahan</div>
      <p className="mb-4 text-xs text-ink-faint">Atur pembilang dan penyebut, lihat bagian yang terisi, lalu amati nilai yang sama ditulis tiga cara.</p>

      <div className="flex flex-col gap-2">
        <Step label="Pembilang" val={pembilang} set={(n) => setPembilang(Math.min(n, penyebut))} min={0} max={penyebut} />
        <Step label="Penyebut" val={penyebut} set={(n) => { setPenyebut(n); if (pembilang > n) setPembilang(n); }} min={1} max={12} />
      </div>

      <div className="mt-4 flex flex-wrap justify-center gap-1">
        {cells.map((i) => (
          <div key={i} className={`h-9 w-9 rounded ${i < pembilang ? "bg-brand-500" : "bg-slate-100"}`} />
        ))}
      </div>

      <div className="mt-4 grid grid-cols-3 gap-2 text-center">
        <div className="rounded-xl bg-amber-50 p-3">
          <div className="text-xs text-amber-700">Pecahan</div>
          <div className="text-lg font-extrabold text-amber-700 tnum">{pembilang}/{penyebut}</div>
        </div>
        <div className="rounded-xl bg-sky-50 p-3">
          <div className="text-xs text-sky-700">Desimal</div>
          <div className="text-lg font-extrabold text-sky-700 tnum">{nilai.toFixed(2)}</div>
        </div>
        <div className="rounded-xl bg-emerald-50 p-3">
          <div className="text-xs text-emerald-700">Persen</div>
          <div className="text-lg font-extrabold text-emerald-700 tnum">{(nilai * 100).toFixed(0)}%</div>
        </div>
      </div>

      <p className="mt-3 text-xs text-ink-faint">
        Ketiganya bernilai sama. Pecahan a/b berarti a dibagi b, dan persen adalah desimal dikali 100. Aturan ini muncul setelah kamu melihat polanya sendiri.
      </p>
    </div>
  );
}
