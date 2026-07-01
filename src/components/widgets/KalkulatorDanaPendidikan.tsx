import { useMemo, useState } from "react";
import { rupiah } from "../../lib/format";

// Biaya pendidikan naik lebih cepat dari inflasi umum. Widget menghitung biaya
// masa depan dan tabungan bulanan yang perlu disisihkan untuk mengejarnya.
export function KalkulatorDanaPendidikan() {
  const [biayaSekarang, setBiayaSekarang] = useState(100_000_000); // biaya masuk kuliah hari ini
  const [tahunLagi, setTahunLagi] = useState(15);
  const [inflasiDidik, setInflasiDidik] = useState(10); // % per tahun
  const [returnInvestasi, setReturnInvestasi] = useState(8); // % per tahun

  const r = useMemo(() => {
    const biayaMasaDepan = biayaSekarang * Math.pow(1 + inflasiDidik / 100, tahunLagi);
    // tabungan bulanan (future value anuitas)
    const iBulan = returnInvestasi / 100 / 12;
    const n = tahunLagi * 12;
    const tabunganBulanan = iBulan > 0 ? (biayaMasaDepan * iBulan) / (Math.pow(1 + iBulan, n) - 1) : biayaMasaDepan / n;
    return { biayaMasaDepan, tabunganBulanan };
  }, [biayaSekarang, tahunLagi, inflasiDidik, returnInvestasi]);

  return (
    <div className="my-6 card p-5">
      <div className="mb-1 text-sm font-bold text-brand-700">🎓 Kalkulator Dana Pendidikan Anak</div>
      <p className="mb-4 text-xs text-ink-faint">
        Biaya pendidikan naik lebih cepat dari inflasi biasa. Hitung berapa biaya di masa depan dan berapa yang perlu
        ditabung atau diinvestasikan tiap bulan untuk mengejarnya.
      </p>

      <Slider label="Biaya pendidikan (nilai hari ini)" value={biayaSekarang} min={10_000_000} max={1_000_000_000} step={10_000_000} fmt={rupiah} onChange={setBiayaSekarang} />
      <Slider label="Berapa tahun lagi dibutuhkan" value={tahunLagi} min={1} max={20} step={1} fmt={(n) => `${n} tahun`} onChange={setTahunLagi} />
      <Slider label="Inflasi biaya pendidikan" value={inflasiDidik} min={5} max={15} step={1} fmt={(n) => `${n}%`} onChange={setInflasiDidik} />
      <Slider label="Perkiraan hasil investasi" value={returnInvestasi} min={4} max={15} step={1} fmt={(n) => `${n}%`} onChange={setReturnInvestasi} />

      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        <Box label="Biaya di masa depan" value={rupiah(Math.round(r.biayaMasaDepan))} color="text-rose-700" />
        <Box label="Perlu ditabung per bulan" value={rupiah(Math.round(r.tabunganBulanan))} color="text-brand-700" />
      </div>
      <p className="mt-3 rounded-lg bg-brand-50 px-3 py-2 text-sm text-brand-800">
        Karena horizonnya panjang, dana pendidikan cocok ditumbuhkan lewat investasi (mis. reksa dana) agar tidak
        tergerus inflasi. Mulai sedini mungkin agar cicilan bulanannya ringan.
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

function Slider({ label, value, min, max, step, fmt, onChange }: { label: string; value: number; min: number; max: number; step: number; fmt: (n: number) => string; onChange: (n: number) => void }) {
  return (
    <div className="mb-3">
      <div className="mb-1 flex items-center justify-between">
        <span className="text-sm font-semibold text-ink-soft">{label}</span>
        <span className="tnum text-sm font-bold text-ink">{fmt(value)}</span>
      </div>
      <input type="range" min={min} max={max} step={step} value={value} onChange={(e) => onChange(Number(e.target.value))} className="h-2 w-full cursor-pointer appearance-none rounded-full bg-line accent-brand-600" />
    </div>
  );
}
