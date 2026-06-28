import { useState } from "react";

// Ubah gradien (m) dan titik potong (c), lihat grafik garis y = mx + c.
export function PlotterFungsi() {
  const [m, setM] = useState(1);
  const [c, setC] = useState(0);

  const W = 240, H = 240, cx = W / 2, cy = H / 2, unit = 22;
  const yAt = (x: number) => m * x + c;
  const sx = (x: number) => cx + x * unit;
  const sy = (y: number) => cy - y * unit;
  const x1 = -5, x2 = 5;

  return (
    <div className="my-6 card p-5">
      <div className="mb-1 text-sm font-bold text-brand-700">📈 Plotter Fungsi Linear</div>
      <p className="mb-4 text-xs text-ink-faint">Atur gradien dan titik potong, amati bagaimana garis y = mx + c berubah. Temukan arti tiap angka.</p>

      <label className="block text-xs font-bold text-ink-faint">Gradien m: <span className="tnum">{m}</span></label>
      <input type="range" min={-3} max={3} step={1} value={m} onChange={(e) => setM(Number(e.target.value))} className="w-full" />
      <label className="mt-1 block text-xs font-bold text-ink-faint">Titik potong c: <span className="tnum">{c}</span></label>
      <input type="range" min={-4} max={4} step={1} value={c} onChange={(e) => setC(Number(e.target.value))} className="w-full" />

      <div className="mt-2 flex justify-center">
        <svg width={W} height={H} className="rounded-lg bg-canvas">
          <line x1="0" y1={cy} x2={W} y2={cy} stroke="#d9cdb6" strokeWidth="1" />
          <line x1={cx} y1="0" x2={cx} y2={H} stroke="#d9cdb6" strokeWidth="1" />
          <line x1={sx(x1)} y1={sy(yAt(x1))} x2={sx(x2)} y2={sy(yAt(x2))} stroke="#6366f1" strokeWidth="3" />
          <circle cx={sx(0)} cy={sy(c)} r="5" fill="#f59e0b" />
        </svg>
      </div>

      <div className="mt-2 rounded-xl bg-canvas p-3 text-center font-mono text-base text-ink">
        y = {m}x {c >= 0 ? "+ " + c : "- " + Math.abs(c)}
      </div>
      <p className="mt-2 text-xs text-ink-faint">
        Gradien m mengatur kemiringan (positif naik, negatif turun), dan c adalah titik potong sumbu y (titik oranye). Pola ini terlihat dengan mencoba, bukan dihafal.
      </p>
    </div>
  );
}
