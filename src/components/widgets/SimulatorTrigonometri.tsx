import { useState } from "react";

// Pilih sudut istimewa, lihat nilai sin, cos, tan dari perbandingan sisi.
const SUDUT = [
  { deg: 30, sin: "1/2", cos: "√3/2", tan: "1/√3", sinN: 0.5, cosN: 0.866, tanN: 0.577 },
  { deg: 45, sin: "√2/2", cos: "√2/2", tan: "1", sinN: 0.707, cosN: 0.707, tanN: 1 },
  { deg: 60, sin: "√3/2", cos: "1/2", tan: "√3", sinN: 0.866, cosN: 0.5, tanN: 1.732 },
];

export function SimulatorTrigonometri() {
  const [idx, setIdx] = useState(1);
  const s = SUDUT[idx];

  return (
    <div className="my-6 card p-5">
      <div className="mb-1 text-sm font-bold text-brand-700">🔺 Simulator Trigonometri</div>
      <p className="mb-4 text-xs text-ink-faint">Pilih sudut istimewa pada segitiga siku-siku, lalu amati nilai perbandingan sisinya.</p>

      <div className="flex justify-center gap-2">
        {SUDUT.map((su, i) => (
          <button
            key={su.deg}
            onClick={() => setIdx(i)}
            className={`rounded-lg px-4 py-2 text-sm font-bold transition ${idx === i ? "bg-brand-600 text-white" : "bg-canvas text-ink-soft hover:bg-line"}`}
          >
            {su.deg}°
          </button>
        ))}
      </div>

      <div className="mt-3 flex justify-center">
        <svg width="200" height="120">
          <polygon points="20,100 180,100 180,20" fill="rgba(96,165,250,0.15)" stroke="#60a5fa" strokeWidth="2.5" />
          <text x="100" y="116" fill="#7c756a" fontSize="12" textAnchor="middle">samping</text>
          <text x="192" y="62" fill="#7c756a" fontSize="12" textAnchor="middle" transform="rotate(90 192 62)">depan</text>
          <text x="36" y="96" fill="#6366f1" fontSize="13" fontWeight="700">{s.deg}°</text>
        </svg>
      </div>

      <div className="mt-2 grid grid-cols-3 gap-2 text-center">
        <div className="rounded-xl bg-emerald-50 p-3">
          <div className="text-xs text-emerald-700">sin {s.deg}°</div>
          <div className="font-mono text-base font-extrabold text-emerald-700">{s.sin}</div>
          <div className="text-[11px] text-ink-faint tnum">≈ {s.sinN}</div>
        </div>
        <div className="rounded-xl bg-sky-50 p-3">
          <div className="text-xs text-sky-700">cos {s.deg}°</div>
          <div className="font-mono text-base font-extrabold text-sky-700">{s.cos}</div>
          <div className="text-[11px] text-ink-faint tnum">≈ {s.cosN}</div>
        </div>
        <div className="rounded-xl bg-amber-50 p-3">
          <div className="text-xs text-amber-700">tan {s.deg}°</div>
          <div className="font-mono text-base font-extrabold text-amber-700">{s.tan}</div>
          <div className="text-[11px] text-ink-faint tnum">≈ {s.tanN}</div>
        </div>
      </div>

      <p className="mt-3 text-xs text-ink-faint">
        sin = depan ÷ miring, cos = samping ÷ miring, tan = depan ÷ samping. Nilai ini tetap untuk sudut yang sama, berapa pun ukuran segitiganya.
      </p>
    </div>
  );
}
