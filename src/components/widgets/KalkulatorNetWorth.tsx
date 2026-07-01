import { useMemo, useState } from "react";
import { rupiah } from "../../lib/format";

// Kekayaan bersih (net worth) = total aset dikurangi total utang. Ini adalah
// "skor" kesehatan keuangan yang paling mendasar dan sebaiknya tumbuh dari tahun
// ke tahun.
export function KalkulatorNetWorth() {
  const [kas, setKas] = useState(20_000_000); // kas & tabungan
  const [investasi, setInvestasi] = useState(50_000_000); // reksa dana, saham, emas
  const [asetPakai, setAsetPakai] = useState(300_000_000); // rumah, kendaraan
  const [utangKPR, setUtangKPR] = useState(200_000_000);
  const [utangLain, setUtangLain] = useState(15_000_000); // kartu kredit, pinjol

  const r = useMemo(() => {
    const totalAset = kas + investasi + asetPakai;
    const totalUtang = utangKPR + utangLain;
    const netWorth = totalAset - totalUtang;
    return { totalAset, totalUtang, netWorth };
  }, [kas, investasi, asetPakai, utangKPR, utangLain]);

  return (
    <div className="my-6 card p-5">
      <div className="mb-1 text-sm font-bold text-brand-700">🧾 Kalkulator Kekayaan Bersih (Net Worth)</div>
      <p className="mb-4 text-xs text-ink-faint">
        Kekayaan bersih adalah total aset dikurangi total utang. Ini gambaran paling jujur kondisi keuanganmu.
        Targetnya sederhana: angka ini tumbuh dari tahun ke tahun.
      </p>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-xl bg-canvas p-3">
          <div className="mb-2 text-sm font-bold text-emerald-700">Aset (yang dimiliki)</div>
          <Slider label="Kas & tabungan" value={kas} min={0} max={500_000_000} step={5_000_000} onChange={setKas} />
          <Slider label="Investasi (reksa dana, emas, dll)" value={investasi} min={0} max={1_000_000_000} step={10_000_000} onChange={setInvestasi} />
          <Slider label="Aset pakai (rumah, kendaraan)" value={asetPakai} min={0} max={3_000_000_000} step={25_000_000} onChange={setAsetPakai} />
        </div>
        <div className="rounded-xl bg-canvas p-3">
          <div className="mb-2 text-sm font-bold text-rose-700">Utang (yang wajib dibayar)</div>
          <Slider label="Sisa KPR" value={utangKPR} min={0} max={2_000_000_000} step={25_000_000} onChange={setUtangKPR} />
          <Slider label="Utang lain (kartu kredit, pinjol)" value={utangLain} min={0} max={200_000_000} step={5_000_000} onChange={setUtangLain} />
        </div>
      </div>

      <div className="mt-4 grid gap-3 sm:grid-cols-3">
        <Box label="Total aset" value={rupiah(r.totalAset)} color="text-emerald-700" />
        <Box label="Total utang" value={rupiah(r.totalUtang)} color="text-rose-700" />
        <div className={`rounded-xl p-4 ${r.netWorth >= 0 ? "bg-emerald-50" : "bg-rose-50"}`}>
          <div className="text-xs text-ink-faint">Kekayaan bersih</div>
          <div className={`text-lg font-extrabold tnum ${r.netWorth >= 0 ? "text-emerald-700" : "text-rose-700"}`}>{rupiah(r.netWorth)}</div>
        </div>
      </div>
      <p className="mt-3 rounded-lg bg-brand-50 px-3 py-2 text-sm text-brand-800">
        Kekayaan bersih negatif (utang lebih besar dari aset) adalah sinyal untuk fokus melunasi utang lebih dulu.
        Catat angka ini setiap tahun untuk melihat kemajuanmu.
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
    <div className="mb-2">
      <div className="mb-1 flex items-center justify-between">
        <span className="text-xs font-semibold text-ink-soft">{label}</span>
        <span className="tnum text-xs font-bold text-ink">{rupiah(value)}</span>
      </div>
      <input type="range" min={min} max={max} step={step} value={value} onChange={(e) => onChange(Number(e.target.value))} className="h-2 w-full cursor-pointer appearance-none rounded-full bg-line accent-brand-600" />
    </div>
  );
}
