import { useMemo, useState } from "react";
import { rupiah, angka } from "../../lib/format";

// Faktor emisi (perkiraan, untuk ilustrasi edukatif)
const EF = {
  listrik: 0.85, // kgCO2e / kWh (grid Indonesia)
  bensin: 2.31, // kgCO2e / liter
  terbang: 90, // kgCO2e / jam penerbangan
};

export function KalkulatorJejakKarbon() {
  const [listrik, setListrik] = useState(300); // kWh/bulan
  const [bensin, setBensin] = useState(80); // liter/bulan
  const [terbang, setTerbang] = useState(6); // jam/tahun
  const [harga, setHarga] = useState(60_000); // Rp/tCO2e

  const { perKategori, totalTon, biaya } = useMemo(() => {
    const lis = listrik * 12 * EF.listrik;
    const ben = bensin * 12 * EF.bensin;
    const ter = terbang * EF.terbang;
    const totalKg = lis + ben + ter;
    const totalTon = totalKg / 1000;
    return {
      perKategori: [
        { label: "Listrik", kg: lis, color: "#0ea5e9" },
        { label: "Kendaraan", kg: ben, color: "#f59e0b" },
        { label: "Penerbangan", kg: ter, color: "#8b5cf6" },
      ],
      totalKg,
      totalTon,
      biaya: totalTon * harga,
    };
  }, [listrik, bensin, terbang, harga]);

  const maxKg = Math.max(...perKategori.map((k) => k.kg), 1);

  return (
    <div className="my-6 card p-5">
      <div className="mb-4 text-sm font-bold text-emerald-700">🌍 Kalkulator Jejak Karbon Pribadi</div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Slider label="Pemakaian listrik" value={listrik} set={setListrik} min={0} max={1500} step={10} unit="kWh/bulan" />
        <Slider label="Konsumsi bensin" value={bensin} set={setBensin} min={0} max={400} step={5} unit="liter/bulan" />
        <Slider label="Penerbangan" value={terbang} set={setTerbang} min={0} max={100} step={1} unit="jam/tahun" />
        <Slider label="Harga karbon (offset)" value={harga} set={setHarga} min={10_000} max={200_000} step={5_000} unit="Rp/tCO2e" money />
      </div>

      <div className="mt-5 rounded-xl bg-slate-50 p-4">
        <div className="mb-3 space-y-2">
          {perKategori.map((k) => (
            <div key={k.label}>
              <div className="mb-0.5 flex justify-between text-xs">
                <span className="text-ink-soft">{k.label}</span>
                <span className="tnum font-semibold">{angka(Math.round(k.kg))} kg</span>
              </div>
              <div className="h-2.5 overflow-hidden rounded-full bg-slate-200">
                <div className="h-full rounded-full transition-all" style={{ width: `${(k.kg / maxKg) * 100}%`, background: k.color }} />
              </div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-3 border-t border-slate-200 pt-3">
          <Result label="Total emisi / tahun" value={`${totalTon.toLocaleString("id-ID", { maximumFractionDigits: 2 })} tCO2e`} accent="text-emerald-700" />
          <Result label="Biaya offset" value={rupiah(Math.round(biaya))} accent="text-sky-700" />
        </div>
        <p className="mt-3 text-xs text-ink-faint">
          Artinya untuk menjadi <b>carbon neutral</b>, kamu perlu membeli sekitar{" "}
          <b>{totalTon.toLocaleString("id-ID", { maximumFractionDigits: 2 })} ton</b> carbon credit senilai{" "}
          <b>{rupiah(Math.round(biaya))}</b> per tahun.
        </p>
      </div>
    </div>
  );
}

function Slider({
  label,
  value,
  set,
  min,
  max,
  step,
  unit,
  money,
}: {
  label: string;
  value: number;
  set: (n: number) => void;
  min: number;
  max: number;
  step: number;
  unit: string;
  money?: boolean;
}) {
  return (
    <div>
      <div className="mb-1 flex items-center justify-between">
        <span className="text-sm font-semibold text-ink-soft">{label}</span>
        <span className="tnum text-sm font-bold text-ink">
          {money ? rupiah(value) : angka(value)} <span className="text-xs font-normal text-ink-faint">{!money && unit}</span>
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => set(Number(e.target.value))}
        className="h-2 w-full cursor-pointer appearance-none rounded-full bg-slate-200 accent-emerald-600"
      />
      {money && <div className="mt-0.5 text-right text-[11px] text-ink-faint">{unit}</div>}
    </div>
  );
}

function Result({ label, value, accent }: { label: string; value: string; accent: string }) {
  return (
    <div>
      <div className="text-xs text-ink-faint">{label}</div>
      <div className={`text-lg font-extrabold tnum ${accent}`}>{value}</div>
    </div>
  );
}
