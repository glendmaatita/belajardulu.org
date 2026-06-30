import { useMemo, useState } from "react";
import { rupiah } from "../../lib/format";

// Analisis ABC: urutkan item dari nilai terbesar, lalu kelompokkan A/B/C
// berdasarkan kontribusi kumulatif terhadap total nilai pemakaian.
const ITEMS = [
  { nama: "Mesin pompa", nilai: 480_000_000 },
  { nama: "Panel kontrol", nilai: 250_000_000 },
  { nama: "Motor listrik", nilai: 150_000_000 },
  { nama: "Bearing", nilai: 60_000_000 },
  { nama: "Selang hidrolik", nilai: 28_000_000 },
  { nama: "Filter", nilai: 14_000_000 },
  { nama: "Baut & mur", nilai: 9_000_000 },
  { nama: "Pelumas", nilai: 6_000_000 },
  { nama: "Lakban", nilai: 2_000_000 },
  { nama: "Sarung tangan", nilai: 1_000_000 },
];

export function SimulatorABCInventory() {
  const [batasA, setBatasA] = useState(80); // ambang kumulatif kelas A (%)
  const [batasB, setBatasB] = useState(95); // ambang kumulatif kelas B (%)

  const rows = useMemo(() => {
    const sorted = [...ITEMS].sort((a, b) => b.nilai - a.nilai);
    const total = sorted.reduce((s, x) => s + x.nilai, 0);
    let kum = 0;
    return sorted.map((x) => {
      kum += x.nilai;
      const kumPct = (kum / total) * 100;
      const kelas = kumPct <= batasA ? "A" : kumPct <= batasB ? "B" : "C";
      return { ...x, kumPct, kelas };
    });
  }, [batasA, batasB]);

  const ringkas = useMemo(() => {
    const g: Record<string, { jumlah: number; nilai: number }> = { A: { jumlah: 0, nilai: 0 }, B: { jumlah: 0, nilai: 0 }, C: { jumlah: 0, nilai: 0 } };
    rows.forEach((r) => { g[r.kelas].jumlah++; g[r.kelas].nilai += r.nilai; });
    const total = rows.reduce((s, x) => s + x.nilai, 0);
    return { g, total };
  }, [rows]);

  const warna: Record<string, string> = { A: "bg-rose-500", B: "bg-amber-500", C: "bg-emerald-500" };
  const warnaBg: Record<string, string> = { A: "bg-rose-50 text-rose-700", B: "bg-amber-50 text-amber-700", C: "bg-emerald-50 text-emerald-700" };

  return (
    <div className="my-6 card p-5">
      <div className="mb-1 text-sm font-bold text-brand-700">🔠 Simulator Analisis ABC</div>
      <p className="mb-4 text-xs text-ink-faint">
        Geser ambang kelas dan lihat bagaimana sedikit item bernilai besar (kelas A) layak kontrol paling ketat.
      </p>

      <div className="grid gap-4 sm:grid-cols-2">
        <Slider label="Ambang kelas A (kumulatif)" value={batasA} set={(v) => setBatasA(Math.min(v, batasB - 1))} min={50} max={90} step={5} fmt={(v) => `${v}%`} />
        <Slider label="Ambang kelas B (kumulatif)" value={batasB} set={(v) => setBatasB(Math.max(v, batasA + 1))} min={85} max={99} step={1} fmt={(v) => `${v}%`} />
      </div>

      <div className="mt-5 space-y-1">
        {rows.map((r) => (
          <div key={r.nama} className="flex items-center gap-2 text-sm">
            <span className={`grid h-6 w-6 shrink-0 place-items-center rounded text-xs font-extrabold text-white ${warna[r.kelas]}`}>{r.kelas}</span>
            <span className="w-32 shrink-0 truncate text-ink-soft">{r.nama}</span>
            <div className="h-3 flex-1 overflow-hidden rounded-full bg-canvas">
              <div className={`h-full ${warna[r.kelas]}`} style={{ width: `${(r.nilai / rows[0].nilai) * 100}%` }} />
            </div>
            <span className="tnum w-28 shrink-0 text-right text-xs font-bold text-ink">{rupiah(r.nilai)}</span>
          </div>
        ))}
      </div>

      <div className="mt-4 grid grid-cols-3 gap-2">
        {(["A", "B", "C"] as const).map((k) => (
          <div key={k} className={`rounded-xl p-3 text-center ${warnaBg[k]}`}>
            <div className="text-lg font-extrabold">Kelas {k}</div>
            <div className="tnum text-xs">{ringkas.g[k].jumlah} item</div>
            <div className="tnum text-sm font-bold">{((ringkas.g[k].nilai / ringkas.total) * 100).toFixed(0)}% nilai</div>
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
