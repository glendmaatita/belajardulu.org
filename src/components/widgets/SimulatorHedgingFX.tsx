import { useMemo, useState } from "react";
import { rupiah } from "../../lib/format";

// Hedging FX: importir punya kewajiban USD di masa depan. Forward mengunci kurs.
// Bandingkan biaya rupiah jika di-hedge vs dibiarkan terbuka saat kurs berubah.
export function SimulatorHedgingFX() {
  const [exposure, setExposure] = useState(100_000); // kewajiban USD
  const [forward, setForward] = useState(16_000); // kurs forward yang dikunci
  const [spot, setSpot] = useState(16_800); // kurs spot saat jatuh tempo

  const r = useMemo(() => {
    const biayaHedge = exposure * forward; // pasti
    const biayaTerbuka = exposure * spot; // tergantung pasar
    const selisih = biayaTerbuka - biayaHedge; // >0 berarti hedge menghemat
    return { biayaHedge, biayaTerbuka, selisih };
  }, [exposure, forward, spot]);

  const hedgeUntung = r.selisih > 0;

  return (
    <div className="my-6 card p-5">
      <div className="mb-1 text-sm font-bold text-brand-700">🛡️ Simulator Hedging Nilai Tukar</div>
      <p className="mb-4 text-xs text-ink-faint">
        Sebuah importir harus membayar dalam USD di masa depan. Lihat dampak mengunci kurs lewat forward dibanding membiarkannya terbuka.
      </p>

      <div className="grid gap-4 sm:grid-cols-3">
        <Slider label="Kewajiban (USD)" value={exposure} set={setExposure} min={10_000} max={1_000_000} step={10_000} fmt={(v) => `$${(v / 1000).toFixed(0)}rb`} />
        <Slider label="Kurs forward (dikunci)" value={forward} set={setForward} min={14_000} max={18_000} step={100} fmt={(v) => rupiah(v)} />
        <Slider label="Kurs spot saat jatuh tempo" value={spot} set={setSpot} min={14_000} max={19_000} step={100} fmt={(v) => rupiah(v)} />
      </div>

      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        <div className="rounded-xl bg-emerald-50 p-4 text-center">
          <div className="text-xs text-ink-faint">Dengan hedge (terkunci)</div>
          <div className="text-xl font-extrabold tnum text-emerald-700">{rupiah(Math.round(r.biayaHedge))}</div>
          <div className="text-xs text-ink-faint">biaya pasti</div>
        </div>
        <div className="rounded-xl bg-amber-50 p-4 text-center">
          <div className="text-xs text-ink-faint">Tanpa hedge (ikut spot)</div>
          <div className="text-xl font-extrabold tnum text-amber-700">{rupiah(Math.round(r.biayaTerbuka))}</div>
          <div className="text-xs text-ink-faint">biaya tidak pasti</div>
        </div>
      </div>

      <div className={`mt-3 rounded-xl p-4 text-sm ${hedgeUntung ? "bg-emerald-50 text-emerald-800" : "bg-rose-50 text-rose-800"}`}>
        {hedgeUntung ? (
          <>Kurs naik di atas forward, sehingga hedging <b>menghemat {rupiah(Math.round(r.selisih))}</b> dibanding membiarkan terbuka.</>
        ) : (
          <>Kurs ternyata turun, sehingga hedging <b>lebih mahal {rupiah(Math.abs(Math.round(r.selisih)))}</b>. Namun tujuan hedging adalah kepastian, bukan menebak arah kurs.</>
        )}
      </div>

      <p className="mt-3 text-xs text-ink-faint">
        Hedging menukar potensi untung kurs dengan kepastian biaya. Perusahaan yang tidak ingin bertaruh pada kurs memilih kepastian agar margin terjaga.
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
      <input type="range" min={min} max={max} step={step} value={value} onChange={(e) => set(Number(e.target.value))} className="h-2 w-full cursor-pointer appearance-none rounded-full bg-slate-200 accent-brand-600" />
    </div>
  );
}
