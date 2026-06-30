import { useMemo, useState } from "react";

// Membandingkan hasil kursi: sistem proporsional (kursi sebanding suara) vs
// sistem distrik/pluralitas yang cenderung memperbesar partai pemenang.
export function SimulatorSistemPemilu() {
  const [a, setA] = useState(40);
  const [b, setB] = useState(30);
  const [c, setC] = useState(18);
  // partai D = sisa

  const r = useMemo(() => {
    const d = Math.max(0, 100 - a - b - c);
    const suara = [a, b, c, d];
    const total = suara.reduce((s, x) => s + x, 0) || 1;
    const share = suara.map((s) => s / total);
    // Proporsional: kursi sebanding suara (100 kursi, pembulatan).
    const prop = share.map((s) => Math.round(s * 100));
    // Distrik/pluralitas: perbesar partai besar (eksponen ~2,5), kecilkan partai kecil.
    const w = share.map((s) => Math.pow(s, 2.5));
    const wsum = w.reduce((x, y) => x + y, 0) || 1;
    const dist = w.map((x) => Math.round((x / wsum) * 100));
    return { suara, prop, dist };
  }, [a, b, c]);

  const nama = ["Partai A", "Partai B", "Partai C", "Partai D"];
  const warna = ["bg-blue-500", "bg-amber-500", "bg-rose-500", "bg-emerald-500"];

  return (
    <div className="my-6 card p-5">
      <div className="mb-1 text-sm font-bold text-brand-700">🗳️ Simulator Sistem Pemilu</div>
      <p className="mb-4 text-xs text-ink-faint">
        Suara yang sama bisa menghasilkan komposisi kursi yang sangat berbeda, tergantung sistem pemilunya. Atur perolehan suara tiap partai (100 kursi).
      </p>

      <div className="grid gap-3 sm:grid-cols-3">
        <Slider label="Suara Partai A" value={a} set={(v) => setA(Math.min(v, 100 - b - c))} min={5} max={80} step={1} fmt={(v) => `${v}%`} />
        <Slider label="Suara Partai B" value={b} set={(v) => setB(Math.min(v, 100 - a - c))} min={5} max={80} step={1} fmt={(v) => `${v}%`} />
        <Slider label="Suara Partai C" value={c} set={(v) => setC(Math.min(v, 100 - a - b))} min={1} max={80} step={1} fmt={(v) => `${v}%`} />
      </div>
      <div className="mt-2 text-xs text-ink-faint">Partai D otomatis mendapat sisa: {Math.max(0, 100 - a - b - c)}%.</div>

      <div className="mt-5 grid grid-cols-2 gap-4">
        <SeatCol title="Proporsional" seats={r.prop} nama={nama} warna={warna} />
        <SeatCol title="Distrik / pluralitas" seats={r.dist} nama={nama} warna={warna} />
      </div>
      <p className="mt-3 text-xs text-ink-faint">Sistem distrik memberi bonus kursi pada partai pemenang dan sering menyingkirkan partai kecil; proporsional lebih mencerminkan suara tetapi parlemen lebih terpecah.</p>
    </div>
  );
}

function SeatCol({ title, seats, nama, warna }: { title: string; seats: number[]; nama: string[]; warna: string[] }) {
  return (
    <div className="rounded-xl bg-canvas p-3">
      <div className="mb-2 text-center text-sm font-bold text-ink">{title}</div>
      <div className="space-y-1.5">
        {seats.map((s, i) => (
          <div key={i} className="flex items-center gap-2">
            <span className="w-16 shrink-0 text-xs text-ink-soft">{nama[i]}</span>
            <div className="h-4 flex-1 overflow-hidden rounded bg-line">
              <div className={`h-full ${warna[i]}`} style={{ width: `${s}%` }} />
            </div>
            <span className="tnum w-10 shrink-0 text-right text-xs font-bold text-ink">{s}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function Slider({ label, value, set, min, max, step, fmt }: { label: string; value: number; set: (n: number) => void; min: number; max: number; step: number; fmt: (v: number) => string }) {
  return (
    <div>
      <div className="mb-1 flex items-center justify-between">
        <span className="text-sm font-semibold text-ink-soft">{label}</span>
        <span className="tnum text-sm font-bold text-ink">{fmt(value)}</span>
      </div>
      <input type="range" min={min} max={max} step={step} value={value} onChange={(e) => set(Number(e.target.value))} className="h-2 w-full cursor-pointer appearance-none rounded-full bg-line accent-brand-600" />
    </div>
  );
}
