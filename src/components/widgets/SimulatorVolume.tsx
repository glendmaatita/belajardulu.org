import { useState } from "react";

// Temukan volume balok dengan menumpuk kubus satuan.
export function SimulatorVolume() {
  const [p, setP] = useState(4);
  const [l, setL] = useState(3);
  const [t, setT] = useState(2);
  const [reveal, setReveal] = useState(false);

  const Step = ({ label, val, set }: { label: string; val: number; set: (n: number) => void }) => (
    <div className="flex items-center gap-2">
      <span className="w-20 text-xs font-bold text-ink-faint">{label}</span>
      <button onClick={() => set(Math.max(1, val - 1))} className="h-7 w-7 rounded-md bg-canvas font-bold text-ink-soft hover:bg-line">-</button>
      <span className="w-6 text-center font-bold tnum">{val}</span>
      <button onClick={() => set(Math.min(6, val + 1))} className="h-7 w-7 rounded-md bg-canvas font-bold text-ink-soft hover:bg-line">+</button>
    </div>
  );

  const layers = Array.from({ length: t }, (_, i) => i);
  const rows = Array.from({ length: l }, (_, i) => i);
  const cols = Array.from({ length: p }, (_, i) => i);

  return (
    <div className="my-6 card p-5">
      <div className="mb-1 text-sm font-bold text-brand-700">🧊 Simulator Volume</div>
      <p className="mb-4 text-xs text-ink-faint">Atur panjang, lebar, tinggi. Hitung dulu kubus satuannya, rumus volume muncul setelahnya.</p>

      <div className="flex flex-col gap-2">
        <Step label="Panjang" val={p} set={setP} />
        <Step label="Lebar" val={l} set={setL} />
        <Step label="Tinggi" val={t} set={setT} />
      </div>

      <div className="mt-4 flex flex-wrap justify-center gap-3">
        {layers.map((ly) => (
          <div key={ly} className="flex flex-col gap-0.5">
            {rows.map((r) => (
              <div key={r} className="flex gap-0.5">
                {cols.map((c) => (
                  <div key={c} className="h-4 w-4 rounded-sm" style={{ background: ly % 2 ? "#34d399" : "#60a5fa" }} />
                ))}
              </div>
            ))}
          </div>
        ))}
      </div>

      <div className="mt-3 text-center text-sm text-ink-soft">
        Tiap lapis {p} × {l} = {p * l} kubus, sebanyak {t} lapis. Total <b className="tnum">{p * l * t}</b> kubus.
      </div>

      {reveal ? (
        <div className="mt-3 rounded-lg bg-emerald-50 p-3 text-center text-sm text-emerald-800">
          Daripada menghitung satu per satu: <b className="tnum">Volume = panjang × lebar × tinggi = {p} × {l} × {t} = {p * l * t}</b>.
        </div>
      ) : (
        <button onClick={() => setReveal(true)} className="btn-primary mt-3 w-full">Lihat rumus volumenya</button>
      )}
    </div>
  );
}
