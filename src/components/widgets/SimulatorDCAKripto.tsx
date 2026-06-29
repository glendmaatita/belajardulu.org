import { useMemo, useState } from "react";
import { rupiah, angka } from "../../lib/format";

// Dollar Cost Averaging (DCA): beli rutin dengan nominal tetap meratakan harga beli di pasar yang fluktuatif.
const SKENARIO: { nama: string; harga: number[] }[] = [
  { nama: "Naik turun lalu pulih", harga: [100, 80, 120, 70, 90, 110, 85, 100] },
  { nama: "Tren turun (bear)", harga: [100, 95, 85, 80, 70, 65, 55, 50] },
  { nama: "Tren naik (bull)", harga: [50, 60, 70, 85, 95, 110, 130, 150] },
  { nama: "Sangat fluktuatif", harga: [100, 140, 60, 130, 50, 120, 70, 110] },
];

export function SimulatorDCAKripto() {
  const [nominal, setNominal] = useState(500_000); // rupiah per periode
  const [skenarioIdx, setSkenarioIdx] = useState(0);

  const skenario = SKENARIO[skenarioIdx];
  // harga preset berskala indeks, kalikan agar terasa seperti harga koin (ribuan rupiah)
  const harga = useMemo(() => skenario.harga.map((h) => h * 1000), [skenario]);

  const r = useMemo(() => {
    let totalUnit = 0;
    for (const h of harga) {
      totalUnit += nominal / h; // tiap periode beli senilai nominal
    }
    const totalInvestasi = nominal * harga.length;
    const hargaRataDibayar = totalInvestasi / totalUnit; // average cost per unit
    const hargaAkhir = harga[harga.length - 1];
    const nilaiAkhir = totalUnit * hargaAkhir;

    // strategi lump sum: seluruh dana dibelikan di periode pertama
    const hargaAwal = harga[0];
    const unitLumpSum = totalInvestasi / hargaAwal;
    const nilaiLumpSum = unitLumpSum * hargaAkhir;

    return { totalUnit, totalInvestasi, hargaRataDibayar, hargaAkhir, nilaiAkhir, nilaiLumpSum };
  }, [harga, nominal]);

  const maxHarga = Math.max(...harga, 1);
  const untungDCA = r.nilaiAkhir - r.totalInvestasi;
  const dcaLebihBaik = r.nilaiAkhir >= r.nilaiLumpSum;

  return (
    <div className="my-6 card p-5">
      <div className="mb-1 text-sm font-bold text-brand-700">📈 Simulator DCA Kripto</div>
      <p className="mb-4 text-xs text-ink-faint">
        Dollar Cost Averaging berarti membeli dengan nominal tetap secara rutin, tanpa menebak waktu terbaik. Saat harga turun kamu dapat lebih banyak unit, saat harga naik kamu dapat sedikit. Bandingkan hasilnya dengan beli sekaligus (lump sum) di awal.
      </p>

      <div className="mb-4">
        <div className="mb-1 flex items-center justify-between">
          <span className="text-sm font-semibold text-ink-soft">Nominal beli per periode</span>
          <span className="tnum text-sm font-bold text-ink">{rupiah(nominal)}</span>
        </div>
        <input type="range" min={100_000} max={2_000_000} step={100_000} value={nominal} onChange={(e) => setNominal(Number(e.target.value))} className="h-2 w-full cursor-pointer appearance-none rounded-full bg-line accent-brand-600" />
      </div>

      <div className="mb-4">
        <div className="mb-2 text-sm font-semibold text-ink-soft">Skenario harga (8 periode)</div>
        <div className="flex flex-wrap gap-2">
          {SKENARIO.map((s, i) => (
            <button key={i} onClick={() => setSkenarioIdx(i)} className={`rounded-xl border px-3 py-1.5 text-xs font-bold ${i === skenarioIdx ? "border-brand-400 bg-brand-50 text-brand-700" : "border-line bg-canvas text-ink-soft"}`}>
              {s.nama}
            </button>
          ))}
        </div>
      </div>

      <div className="mb-4">
        <div className="mb-2 text-xs font-semibold text-ink-soft">Harga per periode</div>
        <div className="flex items-end gap-1.5" style={{ height: "96px" }}>
          {harga.map((h, i) => (
            <div key={i} className="flex flex-1 flex-col items-center justify-end">
              <div className={`w-full rounded-t ${i === harga.length - 1 ? "bg-blue-500" : "bg-blue-300"}`} style={{ height: `${(h / maxHarga) * 100}%` }} />
              <div className="mt-1 text-[10px] text-ink-faint">{i + 1}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        <div className="rounded-xl bg-canvas p-4">
          <div className="text-xs text-ink-faint">Total unit terkumpul</div>
          <div className="text-lg font-extrabold tnum text-ink">{r.totalUnit.toFixed(2)} unit</div>
          <div className="mt-2 text-xs text-ink-faint">Harga rata-rata yang dibayar</div>
          <div className="text-base font-bold tnum text-ink-soft">{rupiah(Math.round(r.hargaRataDibayar))} / unit</div>
        </div>
        <div className="rounded-xl bg-canvas p-4">
          <div className="text-xs text-ink-faint">Total investasi</div>
          <div className="text-lg font-extrabold tnum text-ink">{rupiah(Math.round(r.totalInvestasi))}</div>
          <div className="mt-2 text-xs text-ink-faint">Nilai akhir (di harga periode 8)</div>
          <div className={`text-base font-bold tnum ${untungDCA >= 0 ? "text-emerald-700" : "text-rose-600"}`}>{rupiah(Math.round(r.nilaiAkhir))}</div>
        </div>
      </div>

      <div className="mt-3 rounded-xl bg-canvas p-4">
        <div className="flex items-center justify-between text-sm">
          <span className="font-semibold text-ink-soft">Strategi DCA</span>
          <span className="tnum font-bold text-violet-700">{rupiah(Math.round(r.nilaiAkhir))}</span>
        </div>
        <div className="mt-1 flex items-center justify-between text-sm">
          <span className="font-semibold text-ink-soft">Beli sekaligus (lump sum) di periode 1</span>
          <span className="tnum font-bold text-amber-600">{rupiah(Math.round(r.nilaiLumpSum))}</span>
        </div>
      </div>

      <p className="mt-3 text-xs text-ink-faint">
        Dengan total investasi {rupiah(Math.round(r.totalInvestasi))}, kamu mengumpulkan {angka(Math.round(r.totalUnit))} unit pada harga rata-rata {rupiah(Math.round(r.hargaRataDibayar))}.{" "}
        {dcaLebihBaik
          ? "Di skenario ini DCA mengungguli beli sekaligus, sebab kamu memborong lebih banyak unit saat harga sempat murah."
          : "Di skenario ini beli sekaligus lebih unggul, sebab harga awal kebetulan rendah lalu terus naik. DCA tidak selalu menang, tetapi mengurangi risiko salah waktu."}
      </p>
    </div>
  );
}
