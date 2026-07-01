import { useMemo, useState } from "react";
import { rupiah } from "../../lib/format";

const MINIMUM = 0.15; // pajak minimum global 15% (Pilar Dua / GloBE)

// Pilar Dua: grup multinasional besar harus membayar pajak efektif minimal 15%
// di tiap yurisdiksi. Jika ETR di bawah 15%, ada top-up tax sampai 15%.
export function KalkulatorPilarDua() {
  const [laba, setLaba] = useState(20_000_000_000); // laba GloBE di satu yurisdiksi
  const [pajak, setPajak] = useState(1_600_000_000); // pajak tercakup yang dibayar

  const r = useMemo(() => {
    const etr = laba > 0 ? pajak / laba : 0;
    const kurang = Math.max(0, MINIMUM - etr);
    const topUp = kurang * laba;
    return { etr, kurang, topUp };
  }, [laba, pajak]);

  const dibawah = r.etr < MINIMUM;

  return (
    <div className="my-6 card p-5">
      <div className="mb-1 text-sm font-bold text-brand-700">🏛️ Kalkulator Pilar Dua (Pajak Minimum 15%)</div>
      <p className="mb-4 text-xs text-ink-faint">
        Untuk grup multinasional dengan omzet konsolidasi besar, jika tarif pajak efektif (ETR) di sebuah yurisdiksi
        di bawah 15%, dikenakan pajak tambahan (top-up tax) hingga mencapai 15%.
      </p>

      <Slider label="Laba GloBE di yurisdiksi" value={laba} min={1_000_000_000} max={100_000_000_000} step={1_000_000_000} onChange={setLaba} />
      <Slider label="Pajak tercakup yang dibayar" value={pajak} min={0} max={laba * 0.3} step={100_000_000} onChange={setPajak} />

      <div className="mt-5 grid gap-3 sm:grid-cols-3">
        <div className={`rounded-xl p-4 ${dibawah ? "bg-rose-50" : "bg-emerald-50"}`}>
          <div className="text-xs text-ink-faint">Tarif pajak efektif (ETR)</div>
          <div className={`text-xl font-extrabold tnum ${dibawah ? "text-rose-700" : "text-emerald-700"}`}>{(r.etr * 100).toFixed(1)}%</div>
        </div>
        <Box label="Selisih ke minimum 15%" value={`${(r.kurang * 100).toFixed(1)}%`} color="text-amber-700" />
        <Box label="Top-up tax" value={rupiah(Math.round(r.topUp))} color="text-rose-700" />
      </div>
      <p className="mt-3 rounded-lg bg-brand-50 px-3 py-2 text-sm text-brand-800">
        {dibawah
          ? "ETR di bawah 15%: insentif yang menurunkan pajak terlalu jauh kini dapat tergerus top-up tax di tingkat grup."
          : "ETR sudah mencapai 15% atau lebih: tidak ada top-up tax."}
      </p>
    </div>
  );
}

function Box({ label, value, color }: { label: string; value: string; color: string }) {
  return (
    <div className="rounded-xl bg-canvas p-4">
      <div className="text-xs text-ink-faint">{label}</div>
      <div className={`text-lg font-extrabold tnum ${color}`}>{value}</div>
    </div>
  );
}

function Slider({ label, value, min, max, step, onChange }: { label: string; value: number; min: number; max: number; step: number; onChange: (n: number) => void }) {
  return (
    <div className="mb-3">
      <div className="mb-1 flex items-center justify-between">
        <span className="text-sm font-semibold text-ink-soft">{label}</span>
        <span className="tnum text-sm font-bold text-ink">{rupiah(value)}</span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="h-2 w-full cursor-pointer appearance-none rounded-full bg-line accent-brand-600"
      />
    </div>
  );
}
