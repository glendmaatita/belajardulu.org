import { useState } from "react";

// Selesaikan proporsi a/b = c/x dengan menjaga rasio tetap.
export function SimulatorProporsi() {
  const [a, setA] = useState(2);
  const [b, setB] = useState(6000);
  const [c, setC] = useState(5);
  const [reveal, setReveal] = useState(false);

  const x = (b * c) / a;
  const fmt = (n: number) => n.toLocaleString("id-ID");

  const Step = ({ label, val, set, step }: { label: string; val: number; set: (n: number) => void; step: number }) => (
    <div className="flex items-center gap-2">
      <span className="w-32 text-xs font-bold text-ink-faint">{label}</span>
      <button onClick={() => set(Math.max(step, val - step))} className="h-7 w-7 rounded-md bg-slate-100 font-bold text-ink-soft hover:bg-slate-200">-</button>
      <span className="w-16 text-center font-bold tnum">{fmt(val)}</span>
      <button onClick={() => set(val + step)} className="h-7 w-7 rounded-md bg-slate-100 font-bold text-ink-soft hover:bg-slate-200">+</button>
    </div>
  );

  return (
    <div className="my-6 card p-5">
      <div className="mb-1 text-sm font-bold text-brand-700">⚖️ Simulator Proporsi</div>
      <p className="mb-4 text-xs text-ink-faint">Jika {a} pensil seharga Rp{fmt(b)}, berapa harga {c} pensil? Atur angkanya, lalu temukan cara mencari nilai yang hilang.</p>

      <div className="flex flex-col gap-2">
        <Step label="Jumlah awal (a)" val={a} set={setA} step={1} />
        <Step label="Harga awal (b)" val={b} set={setB} step={1000} />
        <Step label="Jumlah baru (c)" val={c} set={setC} step={1} />
      </div>

      <div className="mt-4 rounded-xl bg-slate-50 p-4 text-center">
        <div className="font-mono text-base text-ink">{a} / {fmt(b)} = {c} / <span className="font-extrabold text-brand-600">?</span></div>
        <div className="mt-2 text-sm text-ink-soft">Harga {c} pensil = <b className="tnum">Rp{fmt(x)}</b></div>
      </div>

      {reveal ? (
        <div className="mt-3 rounded-lg bg-emerald-50 p-3 text-sm text-emerald-800">
          Karena dua rasio setara, kita pakai kali silang: x = (b × c) ÷ a = ({fmt(b)} × {c}) ÷ {a} = <b className="tnum">Rp{fmt(x)}</b>. Itulah <b>a/b = c/x</b>, rumus yang lahir dari menjaga perbandingan.
        </div>
      ) : (
        <button onClick={() => setReveal(true)} className="btn-primary mt-3 w-full">Bagaimana cara mencari nilai hilang?</button>
      )}
    </div>
  );
}
