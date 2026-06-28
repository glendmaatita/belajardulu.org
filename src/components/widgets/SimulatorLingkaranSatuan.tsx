import { useState } from "react";

// Geser sudut pada lingkaran satuan, amati tanda dan nilai cos (x) dan sin (y).
export function SimulatorLingkaranSatuan() {
  const [deg, setDeg] = useState(45);
  const rad = (deg * Math.PI) / 180;
  const cos = Math.cos(rad);
  const sin = Math.sin(rad);
  const kuadran = deg < 90 ? "I" : deg < 180 ? "II" : deg < 270 ? "III" : "IV";

  const cx = 110, cy = 110, r = 90;
  const px = cx + r * cos;
  const py = cy - r * sin;

  return (
    <div className="my-6 card p-5">
      <div className="mb-1 text-sm font-bold text-brand-700">⭕ Simulator Lingkaran Satuan</div>
      <p className="mb-4 text-xs text-ink-faint">Putar sudut mengelilingi lingkaran. Koordinat titik adalah (cos, sin). Amati kapan nilainya positif atau negatif.</p>

      <label className="block text-xs font-bold text-ink-faint">Sudut: <span className="tnum">{deg}°</span> (Kuadran {kuadran})</label>
      <input type="range" min={0} max={360} value={deg} onChange={(e) => setDeg(Number(e.target.value))} className="w-full" />

      <div className="mt-2 flex justify-center">
        <svg width="220" height="220">
          <circle cx={cx} cy={cy} r={r} fill="none" stroke="#60a5fa" strokeWidth="2.5" />
          <line x1="10" y1={cy} x2="210" y2={cy} stroke="#d9cdb6" strokeWidth="1" />
          <line x1={cx} y1="10" x2={cx} y2="210" stroke="#d9cdb6" strokeWidth="1" />
          <line x1={cx} y1={cy} x2={px} y2={py} stroke="#6366f1" strokeWidth="2.5" />
          <circle cx={px} cy={py} r="6" fill="#f59e0b" />
        </svg>
      </div>

      <div className="grid grid-cols-2 gap-2 text-center">
        <div className="rounded-xl bg-sky-50 p-3">
          <div className="text-xs text-sky-700">cos {deg}° (x)</div>
          <div className={`text-lg font-extrabold tnum ${cos < 0 ? "text-rose-500" : "text-sky-700"}`}>{cos.toFixed(2)}</div>
        </div>
        <div className="rounded-xl bg-emerald-50 p-3">
          <div className="text-xs text-emerald-700">sin {deg}° (y)</div>
          <div className={`text-lg font-extrabold tnum ${sin < 0 ? "text-rose-500" : "text-emerald-700"}`}>{sin.toFixed(2)}</div>
        </div>
      </div>

      <p className="mt-3 text-xs text-ink-faint">
        Tanda cos dan sin berubah tiap kuadran karena titiknya pindah ke kiri/bawah. Inilah cara trigonometri diperluas ke semua sudut.
      </p>
    </div>
  );
}
