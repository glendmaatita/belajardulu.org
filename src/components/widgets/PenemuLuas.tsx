import { useState } from "react";

// Temukan rumus luas dengan menghitung petak satuan sebuah persegi panjang.
export function PenemuLuas() {
  const [p, setP] = useState(4);
  const [l, setL] = useState(3);
  const [reveal, setReveal] = useState(false);

  const cells = [];
  for (let r = 0; r < l; r++) for (let c = 0; c < p; c++) cells.push(r * p + c);

  const Step = ({ label, val, set }: { label: string; val: number; set: (n: number) => void }) => (
    <div className="flex items-center gap-2">
      <span className="w-16 text-xs font-bold text-ink-faint">{label}</span>
      <button onClick={() => set(Math.max(1, val - 1))} className="h-7 w-7 rounded-md bg-canvas font-bold text-ink-soft hover:bg-line">-</button>
      <span className="w-6 text-center font-bold tnum">{val}</span>
      <button onClick={() => set(Math.min(8, val + 1))} className="h-7 w-7 rounded-md bg-canvas font-bold text-ink-soft hover:bg-line">+</button>
    </div>
  );

  return (
    <div className="my-6 card p-5">
      <div className="mb-1 text-sm font-bold text-brand-700">🟦 Penemu Luas</div>
      <p className="mb-4 text-xs text-ink-faint">Atur panjang dan lebar, lalu hitung sendiri petaknya. Rumus akan muncul setelah kamu melihat polanya.</p>

      <div className="flex flex-col gap-2">
        <Step label="Panjang" val={p} set={setP} />
        <Step label="Lebar" val={l} set={setL} />
      </div>

      <div className="mt-4 flex justify-center">
        <div className="inline-grid gap-1" style={{ gridTemplateColumns: `repeat(${p}, 30px)` }}>
          {cells.map((i) => (
            <div key={i} className="grid h-[30px] place-items-center rounded bg-brand-500 text-[10px] font-bold text-white tnum">{i + 1}</div>
          ))}
        </div>
      </div>

      <div className="mt-3 text-center text-sm text-ink-soft">
        Kamu menghitung <b className="tnum">{p * l}</b> petak satuan.
      </div>

      {reveal ? (
        <div className="mt-3 rounded-lg bg-emerald-50 p-3 text-center text-sm text-emerald-800">
          Daripada menghitung satu per satu, cukup kalikan: <b className="tnum">Luas = panjang × lebar = {p} × {l} = {p * l}</b>. Rumus ini lahir dari pola yang baru kamu lihat.
        </div>
      ) : (
        <button onClick={() => setReveal(true)} className="btn-primary mt-3 w-full">Lihat rumus yang muncul</button>
      )}
    </div>
  );
}
