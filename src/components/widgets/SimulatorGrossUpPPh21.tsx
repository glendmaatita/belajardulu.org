import { useMemo, useState } from "react";
import { rupiah } from "../../lib/format";

const TARIF_BADAN = 0.22;

// Tiga metode menanggung PPh 21 karyawan:
// - Gross: karyawan menanggung pajaknya (dipotong dari gaji).
// - Nett: perusahaan menanggung pajak, tetapi tunjangan ini TIDAK boleh
//   dikurangkan dari penghasilan bruto badan (non-deductible).
// - Gross-up: perusahaan memberi tunjangan pajak yang dihitung agar take-home
//   pas, dan tunjangan ini boleh dikurangkan (deductible) sehingga ada
//   penghematan PPh Badan.
export function SimulatorGrossUpPPh21() {
  const [gajiBruto, setGajiBruto] = useState(240_000_000); // setahun
  const [tarifPph21, setTarifPph21] = useState(15); // tarif efektif PPh 21 (%)

  const r = useMemo(() => {
    const t = tarifPph21 / 100;
    const pajakGross = gajiBruto * t; // ditanggung karyawan
    // Nett: perusahaan bayar pajak sebesar pajakGross, tetapi tidak deductible
    const pajakNett = pajakGross;
    // Gross-up: tunjangan = pajak / (1 - t) agar setelah dipotong pajak, take home utuh
    const tunjangan = (gajiBruto * t) / (1 - t);
    // tunjangan ini deductible, menghemat PPh Badan
    const hematBadan = tunjangan * TARIF_BADAN;
    return { pajakGross, pajakNett, tunjangan, hematBadan };
  }, [gajiBruto, tarifPph21]);

  return (
    <div className="my-6 card p-5">
      <div className="mb-1 text-sm font-bold text-brand-700">👔 Simulator Gross-up PPh 21</div>
      <p className="mb-4 text-xs text-ink-faint">
        Bandingkan tiga cara menanggung PPh 21 karyawan. Metode gross-up memberi tunjangan pajak yang boleh
        dikurangkan (deductible), sehingga ada penghematan PPh Badan dibanding metode nett.
      </p>

      <Slider label="Gaji bruto setahun" value={gajiBruto} min={60_000_000} max={1_000_000_000} step={10_000_000} fmt={rupiah} onChange={setGajiBruto} />
      <Slider label="Tarif efektif PPh 21" value={tarifPph21} min={5} max={30} step={1} fmt={(n) => `${n}%`} onChange={setTarifPph21} />

      <div className="mt-5 grid gap-3 sm:grid-cols-3">
        <Card title="Gross" desc="Karyawan menanggung" value={rupiah(Math.round(r.pajakGross))} sub="Take-home berkurang" color="text-ink" />
        <Card title="Nett" desc="Perusahaan, non-deductible" value={rupiah(Math.round(r.pajakNett))} sub="Tak hemat PPh Badan" color="text-rose-700" />
        <Card title="Gross-up" desc="Tunjangan deductible" value={rupiah(Math.round(r.tunjangan))} sub={`Hemat PPh Badan ${rupiah(Math.round(r.hematBadan))}`} color="text-emerald-700" />
      </div>
      <p className="mt-3 rounded-lg bg-brand-50 px-3 py-2 text-sm text-brand-800">
        Rumus tunjangan gross-up = pajak / (1 - tarif). Karena tunjangan ini boleh dibebankan, perusahaan menghemat
        PPh Badan sebesar 22% dari nilai tunjangan, hal yang tidak diperoleh metode nett.
      </p>
    </div>
  );
}

function Card({ title, desc, value, sub, color }: { title: string; desc: string; value: string; sub: string; color: string }) {
  return (
    <div className="rounded-xl bg-canvas p-4">
      <div className="text-sm font-bold text-ink-soft">{title}</div>
      <div className="text-[11px] text-ink-faint">{desc}</div>
      <div className={`mt-1 text-lg font-extrabold tnum ${color}`}>{value}</div>
      <div className="text-[11px] text-ink-faint">{sub}</div>
    </div>
  );
}

function Slider({ label, value, min, max, step, fmt, onChange }: { label: string; value: number; min: number; max: number; step: number; fmt: (n: number) => string; onChange: (n: number) => void }) {
  return (
    <div className="mb-3">
      <div className="mb-1 flex items-center justify-between">
        <span className="text-sm font-semibold text-ink-soft">{label}</span>
        <span className="tnum text-sm font-bold text-ink">{fmt(value)}</span>
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
