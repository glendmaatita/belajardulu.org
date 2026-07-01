import { useMemo, useState } from "react";
import { rupiah } from "../../lib/format";

// Rumus nilai komoditas Marx: W = c + v + s.
// c = modal konstan (mesin, bahan), v = modal variabel (upah), s = nilai lebih.
// Tingkat nilai lebih (eksploitasi) = s/v. Tingkat laba = s/(c+v).
export function KalkulatorTingkatEksploitasi() {
  const [c, setC] = useState(600); // modal konstan (juta)
  const [v, setV] = useState(200); // modal variabel / upah (juta)
  const [s, setS] = useState(200); // nilai lebih (juta)

  const r = useMemo(() => {
    const nilaiKomoditas = c + v + s;
    const tingkatEksploitasi = v > 0 ? (s / v) * 100 : 0;
    const tingkatLaba = c + v > 0 ? (s / (c + v)) * 100 : 0;
    const komposisiOrganik = v > 0 ? c / v : 0;
    return { nilaiKomoditas, tingkatEksploitasi, tingkatLaba, komposisiOrganik };
  }, [c, v, s]);

  return (
    <div className="my-6 card p-5">
      <div className="mb-1 text-sm font-bold text-brand-700">📐 Kalkulator Nilai Komoditas (c + v + s)</div>
      <p className="mb-4 text-xs text-ink-faint">
        Marx merumuskan nilai komoditas sebagai W = c + v + s: modal konstan (mesin, bahan), modal variabel (upah),
        dan nilai lebih. Dari sini lahir tingkat eksploitasi (s/v) dan tingkat laba (s/(c+v)).
      </p>

      <Slider label="Modal konstan c (mesin, bahan)" value={c} min={0} max={2000} step={50} onChange={setC} />
      <Slider label="Modal variabel v (upah)" value={v} min={50} max={1000} step={25} onChange={setV} />
      <Slider label="Nilai lebih s" value={s} min={0} max={1000} step={25} onChange={setS} />

      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        <Box label="Nilai komoditas (c+v+s)" value={`Rp${r.nilaiKomoditas} juta`} color="text-sky-700" />
        <Box label="Tingkat eksploitasi (s/v)" value={`${r.tingkatEksploitasi.toFixed(0)}%`} color="text-rose-700" />
        <Box label="Tingkat laba (s/(c+v))" value={`${r.tingkatLaba.toFixed(1)}%`} color="text-brand-700" />
        <Box label="Komposisi organik (c/v)" value={`${r.komposisiOrganik.toFixed(2)}`} color="text-violet-700" />
      </div>
      <p className="mt-3 rounded-lg bg-brand-50 px-3 py-2 text-sm text-brand-800">
        Perhatikan: menaikkan modal konstan c (lebih banyak mesin) cenderung menurunkan tingkat laba meski eksploitasi
        tetap. Inilah dasar tesis Marx tentang kecenderungan penurunan tingkat laba.
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
        <span className="tnum text-sm font-bold text-ink">{rupiah(value * 1_000_000)}</span>
      </div>
      <input type="range" min={min} max={max} step={step} value={value} onChange={(e) => onChange(Number(e.target.value))} className="h-2 w-full cursor-pointer appearance-none rounded-full bg-line accent-brand-600" />
    </div>
  );
}
