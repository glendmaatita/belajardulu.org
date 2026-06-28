import { useState } from "react";

// Jumlah Riemann: makin banyak persegi panjang, makin tepat luas di bawah y = x.
// Luas sejati di bawah y = x dari 0 sampai 4 adalah segitiga = 8.
export function SimulatorIntegral() {
  const [n, setN] = useState(4);
  const a = 0, b = 4;
  const dx = (b - a) / n;
  // gunakan titik kanan: sum f(x_i)*dx, f(x)=x
  let approx = 0;
  const bars: { x: number; h: number }[] = [];
  for (let i = 1; i <= n; i++) {
    const x = a + i * dx;
    approx += x * dx;
    bars.push({ x, h: x });
  }
  const exact = 8;

  const W = 240, H = 160, scaleX = W / b, scaleY = (H - 20) / b;

  return (
    <div className="my-6 card p-5">
      <div className="mb-1 text-sm font-bold text-brand-700">📐 Simulator Integral (Jumlah Riemann)</div>
      <p className="mb-4 text-xs text-ink-faint">Hampiri luas di bawah garis y = x (dari 0 sampai 4) dengan persegi panjang. Tambah jumlahnya dan amati menuju luas sejati.</p>

      <label className="block text-xs font-bold text-ink-faint">Jumlah persegi panjang: <span className="tnum">{n}</span></label>
      <input type="range" min={1} max={40} value={n} onChange={(e) => setN(Number(e.target.value))} className="w-full" />

      <div className="mt-2 flex justify-center">
        <svg width={W} height={H} className="rounded-lg bg-slate-50">
          {bars.map((bar, i) => (
            <rect key={i} x={(a + i * dx) * scaleX} y={H - bar.h * scaleY} width={dx * scaleX - 1} height={bar.h * scaleY} fill="rgba(96,165,250,0.5)" stroke="#60a5fa" />
          ))}
          <line x1="0" y1={H} x2={b * scaleX} y2={H - b * scaleY} stroke="#6366f1" strokeWidth="2.5" />
        </svg>
      </div>

      <div className="mt-2 grid grid-cols-2 gap-2 text-center">
        <div className="rounded-xl bg-sky-50 p-3"><div className="text-xs text-sky-700">Hampiran</div><div className="text-lg font-extrabold text-sky-700 tnum">{approx.toFixed(2)}</div></div>
        <div className="rounded-xl bg-emerald-50 p-3"><div className="text-xs text-emerald-700">Luas sejati</div><div className="text-lg font-extrabold text-emerald-700 tnum">{exact}</div></div>
      </div>

      <p className="mt-3 text-xs text-ink-faint">
        Makin banyak persegi panjang (makin tipis), hampiran makin mendekati 8. Limit penjumlahan tak hingga ini adalah integral, yaitu luas sejati di bawah kurva.
      </p>
    </div>
  );
}
