import { useMemo, useState } from "react";

// Keseimbangan pasar: Qd = a - bP (permintaan), Qs = c + dP (penawaran).
// Harga keseimbangan P* = (a - c) / (b + d). Geser permintaan/penawaran dan lihat dampaknya.
export function SimulatorKeseimbanganPasar() {
  const [a, setA] = useState(100); // intersep permintaan (selera/pendapatan)
  const [c, setC] = useState(20); // intersep penawaran (biaya/teknologi)
  const b = 2; // kemiringan permintaan
  const d = 3; // kemiringan penawaran

  const r = useMemo(() => {
    const pStar = (a - c) / (b + d);
    const qStar = a - b * pStar;
    return { pStar, qStar };
  }, [a, c]);

  return (
    <div className="my-6 card p-5">
      <div className="mb-1 text-sm font-bold text-brand-700">⚖️ Simulator Keseimbangan Pasar</div>
      <p className="mb-4 text-xs text-ink-faint">
        Permintaan: Qd = a - 2P. Penawaran: Qs = c + 3P. Geser faktor permintaan (a) dan penawaran (c), lihat harga & jumlah keseimbangan baru.
      </p>

      <div className="grid gap-4 sm:grid-cols-2">
        <Slider label="Faktor permintaan (a)" hint="naik = permintaan bergeser kanan" value={a} set={setA} min={40} max={160} step={5} fmt={(v) => `${v}`} />
        <Slider label="Faktor penawaran (c)" hint="naik = penawaran bertambah" value={c} set={setC} min={0} max={80} step={5} fmt={(v) => `${v}`} />
      </div>

      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        <div className="rounded-xl bg-emerald-50 p-4 text-center">
          <div className="text-xs text-ink-faint">Harga keseimbangan (P*)</div>
          <div className="text-2xl font-extrabold tnum text-emerald-700">{r.pStar.toFixed(1)}</div>
        </div>
        <div className="rounded-xl bg-sky-50 p-4 text-center">
          <div className="text-xs text-ink-faint">Jumlah keseimbangan (Q*)</div>
          <div className="text-2xl font-extrabold tnum text-sky-700">{Math.max(0, r.qStar).toFixed(1)}</div>
        </div>
      </div>

      <p className="mt-3 text-xs text-ink-faint">
        P* = (a - c) / (b + d). Saat permintaan naik (a besar), harga & jumlah keseimbangan naik. Saat penawaran bertambah (c besar), harga turun tetapi jumlah naik.
      </p>
    </div>
  );
}

function Slider({ label, hint, value, set, min, max, step, fmt }: { label: string; hint?: string; value: number; set: (n: number) => void; min: number; max: number; step: number; fmt: (v: number) => string }) {
  return (
    <div>
      <div className="mb-1 flex items-center justify-between">
        <span className="text-sm font-semibold text-ink-soft">{label}</span>
        <span className="tnum text-sm font-bold text-ink">{fmt(value)}</span>
      </div>
      <input type="range" min={min} max={max} step={step} value={value} onChange={(e) => set(Number(e.target.value))} className="h-2 w-full cursor-pointer appearance-none rounded-full bg-line accent-brand-600" />
      {hint && <div className="mt-0.5 text-[11px] text-ink-faint">{hint}</div>}
    </div>
  );
}
