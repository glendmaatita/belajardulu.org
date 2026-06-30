import { useMemo, useState } from "react";

// Ambang batas parlemen (parliamentary threshold): partai di bawah ambang tidak dapat
// kursi, suaranya "terbuang", dan kursinya dibagi ke partai yang lolos.
const PARTAI = [
  { nama: "Partai A", suara: 28, warna: "bg-blue-500" },
  { nama: "Partai B", suara: 22, warna: "bg-amber-500" },
  { nama: "Partai C", suara: 15, warna: "bg-rose-500" },
  { nama: "Partai D", suara: 9, warna: "bg-emerald-500" },
  { nama: "Partai E", suara: 5, warna: "bg-violet-500" },
  { nama: "Partai F", suara: 3.5, warna: "bg-cyan-500" },
  { nama: "Partai G", suara: 2.5, warna: "bg-pink-500" },
];

export function SimulatorAmbangParlemen() {
  const [ambang, setAmbang] = useState(4);

  const r = useMemo(() => {
    const lolos = PARTAI.filter((p) => p.suara >= ambang);
    const gugur = PARTAI.filter((p) => p.suara < ambang);
    const terbuang = gugur.reduce((s, p) => s + p.suara, 0);
    const totalLolos = lolos.reduce((s, p) => s + p.suara, 0) || 1;
    const kursi = lolos.map((p) => ({ ...p, kursi: Math.round((p.suara / totalLolos) * 100) }));
    return { lolos, gugur, terbuang, kursi };
  }, [ambang]);

  return (
    <div className="my-6 card p-5">
      <div className="mb-1 text-sm font-bold text-brand-700">🚧 Simulator Ambang Batas Parlemen</div>
      <p className="mb-4 text-xs text-ink-faint">
        Ambang batas menyederhanakan parlemen, tetapi membuang suara pemilih partai kecil. Geser ambangnya dan lihat dampaknya. Indonesia memakai ambang 4%.
      </p>

      <Slider label="Ambang batas parlemen" value={ambang} set={setAmbang} min={0} max={10} step={0.5} fmt={(v) => `${v}%`} />

      <div className="mt-5 space-y-1.5">
        {PARTAI.map((p) => {
          const lolos = p.suara >= ambang;
          return (
            <div key={p.nama} className={`flex items-center gap-2 ${lolos ? "" : "opacity-40"}`}>
              <span className="w-16 shrink-0 text-xs font-semibold text-ink-soft">{p.nama}</span>
              <div className="h-4 flex-1 overflow-hidden rounded bg-canvas">
                <div className={`h-full ${lolos ? p.warna : "bg-slate-400"}`} style={{ width: `${p.suara * 3}%` }} />
              </div>
              <span className="tnum w-24 shrink-0 text-right text-xs font-bold text-ink">{p.suara}% {lolos ? "lolos" : "gugur"}</span>
            </div>
          );
        })}
      </div>

      <div className="mt-4 grid grid-cols-2 gap-3">
        <div className="rounded-xl bg-rose-50 p-3 text-center">
          <div className="text-xs text-ink-faint">Suara terbuang</div>
          <div className="tnum text-2xl font-extrabold text-rose-700">{r.terbuang.toFixed(1)}%</div>
          <div className="text-xs text-ink-faint">{r.gugur.length} partai gugur</div>
        </div>
        <div className="rounded-xl bg-emerald-50 p-3 text-center">
          <div className="text-xs text-ink-faint">Partai di parlemen</div>
          <div className="tnum text-2xl font-extrabold text-emerald-700">{r.lolos.length}</div>
          <div className="text-xs text-ink-faint">membagi 100 kursi</div>
        </div>
      </div>
      <p className="mt-2 text-xs text-ink-faint">Ambang tinggi membuat parlemen stabil tetapi kurang mewakili; ambang rendah lebih mewakili tetapi rawan terpecah.</p>
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
