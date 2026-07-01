import { useMemo, useState } from "react";
import { rupiah } from "../../lib/format";

const TARIF = 0.22;

type Mode = "none" | "holiday" | "allowance" | "super";

// Bandingkan beban pajak tanpa insentif dengan tiga insentif utama:
// - Tax holiday: pembebasan PPh Badan selama periode tertentu.
// - Tax allowance: pengurangan penghasilan neto 30% dari investasi (dicicil),
//   di sini disederhanakan sebagai tambahan pengurang neto per tahun.
// - Super deduction: pengurangan tambahan atas biaya (mis. vokasi/litbang).
export function SimulatorInsentifPajak() {
  const [laba, setLaba] = useState(10_000_000_000);
  const [mode, setMode] = useState<Mode>("holiday");
  const [biayaQualifying, setBiayaQualifying] = useState(2_000_000_000); // untuk super deduction

  const r = useMemo(() => {
    const tanpa = laba * TARIF;
    let dengan = tanpa;
    let catatan = "";
    if (mode === "none") {
      dengan = tanpa;
      catatan = "Tanpa insentif: pajak penuh 22%.";
    } else if (mode === "holiday") {
      dengan = 0;
      catatan = "Tax holiday: PPh Badan dibebaskan 100% selama masa fasilitas.";
    } else if (mode === "allowance") {
      // pengurangan neto 30% nilai investasi, dicicil 5 tahun = 6% per tahun dari laba (disederhanakan)
      const pengurang = laba * 0.06;
      dengan = Math.max(0, laba - pengurang) * TARIF;
      catatan = "Tax allowance: pengurangan penghasilan neto 5% per tahun selama 6 tahun (di sini 6%).";
    } else {
      // super deduction: tambahan pengurang 100% dari biaya qualifying (mis. vokasi)
      dengan = Math.max(0, laba - biayaQualifying) * TARIF;
      catatan = "Super deduction: biaya qualifying boleh dikurangkan lebih dari sekali.";
    }
    const hemat = tanpa - dengan;
    return { tanpa, dengan, hemat, catatan };
  }, [laba, mode, biayaQualifying]);

  return (
    <div className="my-6 card p-5">
      <div className="mb-1 text-sm font-bold text-brand-700">🎁 Simulator Insentif Pajak</div>
      <p className="mb-4 text-xs text-ink-faint">
        Pemerintah menawarkan insentif untuk mendorong investasi dan kegiatan tertentu. Lihat bagaimana tiap insentif
        menekan beban PPh Badan dibanding tarif penuh.
      </p>

      <Slider label="Laba kena pajak setahun" value={laba} min={1_000_000_000} max={50_000_000_000} step={500_000_000} fmt={rupiah} onChange={setLaba} />

      <div className="mb-4 flex flex-wrap gap-2">
        {([
          ["none", "Tanpa insentif"],
          ["holiday", "Tax holiday"],
          ["allowance", "Tax allowance"],
          ["super", "Super deduction"],
        ] as [Mode, string][]).map(([m, lbl]) => (
          <button
            key={m}
            onClick={() => setMode(m)}
            className={`rounded-lg px-3 py-1.5 text-xs font-semibold ${mode === m ? "bg-brand-600 text-white" : "bg-canvas text-ink-soft"}`}
          >
            {lbl}
          </button>
        ))}
      </div>

      {mode === "super" && (
        <Slider label="Biaya qualifying (mis. vokasi/litbang)" value={biayaQualifying} min={0} max={laba} step={250_000_000} fmt={rupiah} onChange={setBiayaQualifying} />
      )}

      <div className="mt-5 grid gap-3 sm:grid-cols-3">
        <Box label="Pajak tanpa insentif" value={rupiah(Math.round(r.tanpa))} color="text-ink" />
        <Box label="Pajak dengan insentif" value={rupiah(Math.round(r.dengan))} color="text-brand-700" />
        <Box label="Penghematan" value={rupiah(Math.round(r.hemat))} color="text-emerald-700" />
      </div>
      <p className="mt-3 rounded-lg bg-brand-50 px-3 py-2 text-sm text-brand-800">{r.catatan}</p>
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
