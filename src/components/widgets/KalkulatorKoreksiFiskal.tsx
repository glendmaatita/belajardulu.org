import { useMemo, useState } from "react";
import { rupiah } from "../../lib/format";

const TARIF = 0.22;

// Menghitung penghasilan kena pajak (PKP) dan PPh Badan dari laba komersial
// setelah koreksi fiskal positif (menambah PKP) dan negatif (mengurangi PKP).
export function KalkulatorKoreksiFiskal() {
  const [laba, setLaba] = useState(5_000_000_000); // laba komersial sebelum pajak
  const [positif, setPositif] = useState(600_000_000); // biaya non-deductible, dll
  const [negatif, setNegatif] = useState(300_000_000); // penghasilan final/non-objek

  const r = useMemo(() => {
    const pkp = Math.max(0, laba + positif - negatif);
    const pph = pkp * TARIF;
    const efektif = laba > 0 ? (pph / laba) * 100 : 0;
    return { pkp, pph, efektif };
  }, [laba, positif, negatif]);

  return (
    <div className="my-6 card p-5">
      <div className="mb-1 text-sm font-bold text-brand-700">🧮 Kalkulator Koreksi Fiskal</div>
      <p className="mb-4 text-xs text-ink-faint">
        Laba komersial (akuntansi) belum tentu sama dengan laba fiskal. Koreksi positif menambah penghasilan kena
        pajak (mis. biaya yang tidak boleh dikurangkan), koreksi negatif menguranginya (mis. penghasilan yang sudah
        kena pajak final).
      </p>

      <Slider label="Laba komersial sebelum pajak" value={laba} min={500_000_000} max={20_000_000_000} step={100_000_000} onChange={setLaba} />
      <Slider label="Koreksi positif (menambah)" value={positif} min={0} max={3_000_000_000} step={50_000_000} onChange={setPositif} />
      <Slider label="Koreksi negatif (mengurangi)" value={negatif} min={0} max={3_000_000_000} step={50_000_000} onChange={setNegatif} />

      <div className="mt-5 grid gap-3 sm:grid-cols-3">
        <Box label="Penghasilan kena pajak" value={rupiah(Math.round(r.pkp))} color="text-brand-700" />
        <Box label="PPh Badan (22%)" value={rupiah(Math.round(r.pph))} color="text-rose-700" />
        <Box label="Tarif efektif" value={`${r.efektif.toFixed(1)}%`} color="text-sky-700" />
      </div>
      <p className="mt-3 rounded-lg bg-brand-50 px-3 py-2 text-sm text-brand-800">
        PKP = laba komersial + koreksi positif - koreksi negatif. Makin besar koreksi positif, makin besar pajak yang
        harus dibayar.
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
