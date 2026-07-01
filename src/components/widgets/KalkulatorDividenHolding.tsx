import { useMemo, useState } from "react";
import { rupiah } from "../../lib/format";

const TARIF_LAMA = 0.15; // dahulu dividen antarperusahaan tertentu dipotong PPh 23 15%

// UU HPP: dividen dari dalam negeri yang diterima Wajib Pajak badan dalam negeri
// DIKECUALIKAN dari objek pajak. Struktur holding memanfaatkan ini agar laba
// anak usaha mengalir ke induk tanpa lapisan pajak tambahan.
export function KalkulatorDividenHolding() {
  const [dividen, setDividen] = useState(2_000_000_000);
  const [pakaiPengecualian, setPakaiPengecualian] = useState(true);

  const r = useMemo(() => {
    const pajak = pakaiPengecualian ? 0 : dividen * TARIF_LAMA;
    const diterima = dividen - pajak;
    const hemat = dividen * TARIF_LAMA;
    return { pajak, diterima, hemat };
  }, [dividen, pakaiPengecualian]);

  return (
    <div className="my-6 card p-5">
      <div className="mb-1 text-sm font-bold text-brand-700">🏢 Kalkulator Dividen Antarperusahaan</div>
      <p className="mb-4 text-xs text-ink-faint">
        Sejak UU HPP, dividen dari dalam negeri yang diterima Wajib Pajak badan dikecualikan dari objek pajak.
        Struktur holding memakai aturan ini agar laba anak usaha naik ke induk tanpa pajak tambahan.
      </p>

      <div className="mb-3">
        <div className="mb-1 flex items-center justify-between">
          <span className="text-sm font-semibold text-ink-soft">Dividen dari anak usaha</span>
          <span className="tnum text-sm font-bold text-ink">{rupiah(dividen)}</span>
        </div>
        <input type="range" min={100_000_000} max={20_000_000_000} step={100_000_000} value={dividen} onChange={(e) => setDividen(Number(e.target.value))} className="h-2 w-full cursor-pointer appearance-none rounded-full bg-line accent-brand-600" />
      </div>

      <label className="mb-4 flex cursor-pointer items-center gap-2 text-sm font-semibold text-ink-soft">
        <input type="checkbox" checked={pakaiPengecualian} onChange={(e) => setPakaiPengecualian(e.target.checked)} className="h-4 w-4 accent-brand-600" />
        Dividen dikecualikan dari objek pajak (aturan UU HPP)
      </label>

      <div className="grid gap-3 sm:grid-cols-3">
        <Box label="Pajak atas dividen" value={rupiah(Math.round(r.pajak))} color={r.pajak > 0 ? "text-rose-700" : "text-emerald-700"} />
        <Box label="Dividen diterima induk" value={rupiah(Math.round(r.diterima))} color="text-brand-700" />
        <Box label="Hemat vs aturan lama 15%" value={rupiah(Math.round(r.hemat))} color="text-emerald-700" />
      </div>
      <p className="mt-3 rounded-lg bg-brand-50 px-3 py-2 text-sm text-brand-800">
        Pengecualian ini mencegah pajak berlapis pada satu rupiah laba yang sama saat berpindah antarperusahaan satu
        grup, menjadikan struktur holding efisien secara pajak.
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
