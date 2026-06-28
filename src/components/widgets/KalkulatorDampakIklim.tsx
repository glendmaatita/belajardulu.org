import { useMemo, useState } from "react";
import { rupiah } from "../../lib/format";

// Kalkulator dampak proyek iklim: emisi yang dihindari & biaya per ton CO2e (cost-effectiveness).
export function KalkulatorDampakIklim() {
  const [investasi, setInvestasi] = useState(50_000_000_000); // total investasi proyek
  const [emisiPerTahun, setEmisiPerTahun] = useState(8_000); // ton CO2e dihindari per tahun
  const [umur, setUmur] = useState(20); // umur proyek (tahun)

  const r = useMemo(() => {
    const totalEmisi = emisiPerTahun * umur;
    const biayaPerTon = totalEmisi > 0 ? investasi / totalEmisi : 0;
    return { totalEmisi, biayaPerTon };
  }, [investasi, emisiPerTahun, umur]);

  // benchmark sederhana untuk konteks
  const efektif = r.biayaPerTon <= 500_000;

  return (
    <div className="my-6 card p-5">
      <div className="mb-1 text-sm font-bold text-brand-700">🌿 Kalkulator Dampak & Efektivitas Iklim</div>
      <p className="mb-4 text-xs text-ink-faint">
        Ukur dampak proyek hijau: total emisi yang dihindari dan berapa biaya untuk setiap ton CO2e. Ini membantu membandingkan proyek.
      </p>

      <div className="grid gap-4 sm:grid-cols-3">
        <Slider label="Total investasi" value={investasi} set={setInvestasi} min={1_000_000_000} max={500_000_000_000} step={1_000_000_000} fmt={(v) => rupiah(v)} />
        <Slider label="Emisi dihindari / tahun" value={emisiPerTahun} set={setEmisiPerTahun} min={500} max={100_000} step={500} fmt={(v) => `${v.toLocaleString("id-ID")} tCO2e`} />
        <Slider label="Umur proyek" value={umur} set={setUmur} min={5} max={40} step={1} fmt={(v) => `${v} tahun`} />
      </div>

      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        <div className="rounded-xl bg-sky-50 p-4 text-center">
          <div className="text-xs text-ink-faint">Total emisi dihindari (umur proyek)</div>
          <div className="text-2xl font-extrabold tnum text-sky-700">{r.totalEmisi.toLocaleString("id-ID")} tCO2e</div>
        </div>
        <div className={`rounded-xl p-4 text-center ${efektif ? "bg-emerald-50" : "bg-amber-50"}`}>
          <div className="text-xs text-ink-faint">Biaya per ton CO2e</div>
          <div className={`text-2xl font-extrabold tnum ${efektif ? "text-emerald-700" : "text-amber-700"}`}>{rupiah(Math.round(r.biayaPerTon))}</div>
        </div>
      </div>

      <p className="mt-3 text-xs text-ink-faint">
        Makin rendah biaya per ton CO2e, makin efektif proyek menurunkan emisi per rupiah. Indikator ini memudahkan membandingkan proyek hijau yang berbeda skala.
      </p>
    </div>
  );
}

function Slider({ label, value, set, min, max, step, fmt }: { label: string; value: number; set: (n: number) => void; min: number; max: number; step: number; fmt: (v: number) => string }) {
  return (
    <div>
      <div className="mb-1 flex items-center justify-between">
        <span className="text-sm font-semibold text-ink-soft">{label}</span>
        <span className="tnum text-sm font-bold text-ink">{fmt(value)}</span>
      </div>
      <input type="range" min={min} max={max} step={step} value={value} onChange={(e) => set(Number(e.target.value))} className="h-2 w-full cursor-pointer appearance-none rounded-full bg-line accent-brand-600" />
    </div>
  );
}
