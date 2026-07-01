import { useMemo, useState } from "react";
import { rupiah } from "../../lib/format";

const TARIF = 0.22;

// Effective Tax Rate (ETR) = total beban pajak / laba sebelum pajak. Tax planning
// yang sehat menurunkan ETR lewat instrumen sah (fasilitas, insentif, koreksi
// negatif), bukan lewat manipulasi. Simulator menunjukkan ETR turun dari 22%.
export function SimulatorEffectiveTaxRate() {
  const [laba, setLaba] = useState(10_000_000_000); // laba sebelum pajak
  const [penghasilanFinal, setPenghasilanFinal] = useState(1_000_000_000); // sudah kena final, koreksi negatif
  const [insentif, setInsentif] = useState(1_500_000_000); // pengurang dari insentif/super deduction

  const r = useMemo(() => {
    const pkp = Math.max(0, laba - penghasilanFinal - insentif);
    const pphBadan = pkp * TARIF;
    // pajak final diasumsikan 1% dari penghasilan final (ilustrasi)
    const pajakFinal = penghasilanFinal * 0.01;
    const totalPajak = pphBadan + pajakFinal;
    const etr = laba > 0 ? (totalPajak / laba) * 100 : 0;
    return { pkp, pphBadan, pajakFinal, totalPajak, etr };
  }, [laba, penghasilanFinal, insentif]);

  return (
    <div className="my-6 card p-5">
      <div className="mb-1 text-sm font-bold text-brand-700">📊 Simulator Effective Tax Rate (ETR)</div>
      <p className="mb-4 text-xs text-ink-faint">
        ETR mengukur berapa persen laba yang benar-benar menjadi pajak. Tarif statutori 22%, tetapi dengan instrumen
        sah (penghasilan final, insentif), ETR bisa lebih rendah. Inilah ukuran keberhasilan tax planning.
      </p>

      <Slider label="Laba sebelum pajak" value={laba} min={1_000_000_000} max={50_000_000_000} step={500_000_000} onChange={setLaba} />
      <Slider label="Penghasilan kena pajak final (koreksi negatif)" value={penghasilanFinal} min={0} max={laba * 0.5} step={100_000_000} onChange={setPenghasilanFinal} />
      <Slider label="Pengurang dari insentif/super deduction" value={insentif} min={0} max={laba * 0.5} step={100_000_000} onChange={setInsentif} />

      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        <div className="rounded-xl bg-canvas p-4">
          <div className="text-xs text-ink-faint">Total beban pajak</div>
          <div className="text-xl font-extrabold tnum text-brand-700">{rupiah(Math.round(r.totalPajak))}</div>
        </div>
        <div className="rounded-xl bg-emerald-50 p-4">
          <div className="text-xs text-ink-faint">Tarif efektif (ETR)</div>
          <div className="text-xl font-extrabold tnum text-emerald-700">{r.etr.toFixed(1)}%</div>
          <div className="text-[11px] text-ink-faint">dari tarif statutori 22%</div>
        </div>
      </div>
      <p className="mt-3 rounded-lg bg-brand-50 px-3 py-2 text-sm text-brand-800">
        Menurunkan ETR secara sah berarti membayar pajak lebih kecil tanpa melanggar aturan. ETR yang janggal jauh di
        bawah 22% justru bisa memicu pemeriksaan.
      </p>
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
