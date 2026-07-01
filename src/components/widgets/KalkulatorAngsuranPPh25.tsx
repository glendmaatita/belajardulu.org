import { useMemo, useState } from "react";
import { rupiah } from "../../lib/format";

// Angsuran PPh 25 = (PPh terutang SPT tahun lalu - kredit pajak yang dipotong
// pihak lain seperti PPh 22/23/24) dibagi 12 bulan. Mencicil pajak tahun berjalan.
export function KalkulatorAngsuranPPh25() {
  const [pphTerutang, setPphTerutang] = useState(1_200_000_000); // dari SPT tahun lalu
  const [kreditPajak, setKreditPajak] = useState(240_000_000); // PPh 22/23/24

  const r = useMemo(() => {
    const dasar = Math.max(0, pphTerutang - kreditPajak);
    const angsuran = dasar / 12;
    return { dasar, angsuran };
  }, [pphTerutang, kreditPajak]);

  return (
    <div className="my-6 card p-5">
      <div className="mb-1 text-sm font-bold text-brand-700">📅 Kalkulator Angsuran PPh 25</div>
      <p className="mb-4 text-xs text-ink-faint">
        Perusahaan mencicil pajak tahun berjalan lewat angsuran PPh 25 setiap bulan. Dasarnya PPh terutang tahun lalu
        dikurangi kredit pajak yang sudah dipotong pihak lain, lalu dibagi 12.
      </p>

      <Slider label="PPh terutang SPT tahun lalu" value={pphTerutang} min={0} max={10_000_000_000} step={100_000_000} onChange={setPphTerutang} />
      <Slider label="Kredit pajak (PPh 22/23/24)" value={kreditPajak} min={0} max={pphTerutang} step={20_000_000} onChange={setKreditPajak} />

      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        <div className="rounded-xl bg-canvas p-4">
          <div className="text-xs text-ink-faint">Dasar angsuran setahun</div>
          <div className="text-lg font-extrabold tnum text-brand-700">{rupiah(Math.round(r.dasar))}</div>
        </div>
        <div className="rounded-xl bg-emerald-50 p-4">
          <div className="text-xs text-ink-faint">Angsuran per bulan</div>
          <div className="text-lg font-extrabold tnum text-emerald-700">{rupiah(Math.round(r.angsuran))}</div>
        </div>
      </div>
      <p className="mt-3 rounded-lg bg-brand-50 px-3 py-2 text-sm text-brand-800">
        Angsuran PPh 25 yang sudah disetor menjadi kredit pajak yang mengurangi PPh terutang di SPT akhir tahun, jadi
        bukan beban tambahan, melainkan cicilan.
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
      <input type="range" min={min} max={max} step={step} value={value} onChange={(e) => onChange(Number(e.target.value))} className="h-2 w-full cursor-pointer appearance-none rounded-full bg-line accent-brand-600" />
    </div>
  );
}
