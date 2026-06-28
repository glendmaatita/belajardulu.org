import { useMemo, useState } from "react";
import { rupiah, angka } from "../../lib/format";

const TARIF = 0.22; // PPh Badan 22%
const FASILITAS = 4_800_000_000; // batas omzet dapat fasilitas Pasal 31E
const PLAFON_31E = 50_000_000_000; // fasilitas berlaku untuk omzet sampai Rp50 M

// Simulator PPh Badan (untuk usaha yang sudah pakai pembukuan, mis. setelah lewat skema final).
export function SimulatorPPhBadan() {
  const [omzet, setOmzet] = useState(8_000_000_000);
  const [margin, setMargin] = useState(12); // % laba

  const r = useMemo(() => {
    const laba = omzet * (margin / 100); // anggap = penghasilan kena pajak
    let pph: number;
    let mode: string;
    if (omzet <= FASILITAS) {
      // seluruh PKP dapat fasilitas 50% (tarif efektif 11%)
      pph = laba * TARIF * 0.5;
      mode = "Seluruhnya dapat fasilitas (efektif 11%)";
    } else if (omzet <= PLAFON_31E) {
      const labaFasilitas = laba * (FASILITAS / omzet);
      const labaNormal = laba - labaFasilitas;
      pph = labaFasilitas * TARIF * 0.5 + labaNormal * TARIF;
      mode = "Sebagian dapat fasilitas (Pasal 31E)";
    } else {
      pph = laba * TARIF;
      mode = "Tanpa fasilitas (tarif penuh 22%)";
    }
    return { laba, pph, mode, efektif: laba > 0 ? (pph / laba) * 100 : 0 };
  }, [omzet, margin]);

  return (
    <div className="my-6 card p-5">
      <div className="mb-1 text-sm font-bold text-brand-700">🏢 Simulator PPh Badan (22% + fasilitas)</div>
      <p className="mb-4 text-xs text-ink-faint">
        Untuk PT/CV yang memakai pembukuan. Tarif 22% dari laba, tetapi badan kecil dapat fasilitas pengurangan 50%
        atas bagian laba dari omzet sampai Rp4,8 M (Pasal 31E).
      </p>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <div className="mb-1 flex items-center justify-between">
            <span className="text-sm font-semibold text-ink-soft">Omzet setahun</span>
            <span className="tnum text-sm font-bold text-ink">{rupiah(omzet)}</span>
          </div>
          <input
            type="range"
            min={1_000_000_000}
            max={60_000_000_000}
            step={500_000_000}
            value={omzet}
            onChange={(e) => setOmzet(Number(e.target.value))}
            className="h-2 w-full cursor-pointer appearance-none rounded-full bg-line accent-brand-600"
          />
        </div>
        <div>
          <div className="mb-1 flex items-center justify-between">
            <span className="text-sm font-semibold text-ink-soft">Margin laba</span>
            <span className="tnum text-sm font-bold text-ink">{angka(margin)}%</span>
          </div>
          <input
            type="range"
            min={1}
            max={50}
            step={1}
            value={margin}
            onChange={(e) => setMargin(Number(e.target.value))}
            className="h-2 w-full cursor-pointer appearance-none rounded-full bg-line accent-brand-600"
          />
          <div className="mt-1 text-right text-xs text-ink-faint">Laba kena pajak: {rupiah(Math.round(r.laba))}</div>
        </div>
      </div>

      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        <div className="rounded-xl bg-canvas p-4">
          <div className="text-xs text-ink-faint">PPh Badan setahun</div>
          <div className="text-xl font-extrabold tnum text-brand-700">{rupiah(Math.round(r.pph))}</div>
        </div>
        <div className="rounded-xl bg-canvas p-4">
          <div className="text-xs text-ink-faint">Tarif efektif</div>
          <div className="text-xl font-extrabold tnum text-sky-700">{r.efektif.toFixed(1)}%</div>
        </div>
      </div>
      <p className="mt-3 rounded-lg bg-brand-50 px-3 py-2 text-sm text-brand-800">{r.mode}. Fasilitas Pasal 31E membuat tarif efektif badan kecil bisa di bawah 22%.</p>
    </div>
  );
}
