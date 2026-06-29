import { useMemo, useState } from "react";
import { angka } from "../../lib/format";

const BLOK_PER_ERA = 210_000;
const BATAS_MAKS = 21_000_000;

// Tiap era halving, block reward separuh dari era sebelumnya (50, 25, 12.5, ...).
export function SimulatorHalvingBitcoin() {
  const [era, setEra] = useState(2);

  const r = useMemo(() => {
    const reward = 50 / Math.pow(2, era);
    let total = 0;
    const kumulatif: number[] = [];
    for (let k = 0; k <= era; k++) {
      total += BLOK_PER_ERA * (50 / Math.pow(2, k));
      kumulatif.push(total);
    }
    const sisa = BATAS_MAKS - total;
    return { reward, total, sisa, kumulatif };
  }, [era]);

  return (
    <div className="my-6 card p-5">
      <div className="mb-1 text-sm font-bold text-brand-700">📉 Simulator Halving Bitcoin</div>
      <p className="mb-4 text-xs text-ink-faint">
        Setiap sekitar empat tahun (210.000 blok), imbalan menambang Bitcoin dipotong setengah. Geser era halving dan amati
        pasokan baru melambat sambil mendekati batas 21 juta BTC.
      </p>

      <Slider label="Era halving" value={era} set={setEra} min={0} max={6} step={1} fmt={(v) => `Era ${v}`} />

      <div className="mt-5 grid gap-3 sm:grid-cols-3">
        <div className="rounded-xl bg-canvas p-4 text-center">
          <div className="text-xs text-ink-faint">Imbalan per blok</div>
          <div className="text-2xl font-extrabold tnum text-amber-700">{r.reward} BTC</div>
        </div>
        <div className="rounded-xl bg-canvas p-4 text-center">
          <div className="text-xs text-ink-faint">Total sudah ditambang</div>
          <div className="text-2xl font-extrabold tnum text-emerald-700">{angka(Math.round(r.total))}</div>
        </div>
        <div className="rounded-xl bg-canvas p-4 text-center">
          <div className="text-xs text-ink-faint">Sisa menuju 21 juta</div>
          <div className="text-2xl font-extrabold tnum text-violet-700">{angka(Math.round(r.sisa))}</div>
        </div>
      </div>

      <div className="mt-5 space-y-1.5">
        <div className="text-xs font-semibold text-ink-faint">Pasokan kumulatif tiap era</div>
        {r.kumulatif.map((nilai, i) => (
          <div key={i} className="flex items-center gap-2">
            <span className="w-12 shrink-0 text-xs text-ink-faint">Era {i}</span>
            <div className="h-5 flex-1 overflow-hidden rounded bg-line">
              <div className="flex h-full items-center justify-end rounded bg-amber-500 pr-1.5 text-[10px] font-bold text-white" style={{ width: `${(nilai / BATAS_MAKS) * 100}%` }}>
                {(nilai / BATAS_MAKS) * 100 > 30 ? `${((nilai / BATAS_MAKS) * 100).toFixed(0)}%` : ""}
              </div>
            </div>
          </div>
        ))}
      </div>

      <p className="mt-4 text-xs text-ink-faint">
        Karena imbalan terus dipotong setengah, jumlah BTC baru menyusut tiap era. Deret ini menjumlah menuju, tetapi tidak
        pernah melewati, 21 juta keping. Inilah dasar kelangkaan Bitcoin.
      </p>
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
