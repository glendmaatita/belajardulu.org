import { useMemo, useState } from "react";

// Rules of Origin: barang memenuhi syarat tarif preferensi jika Regional Value Content (RVC)
// mencapai ambang (umumnya 40% untuk ASEAN). RVC = (harga - bahan impor non-asal) / harga.
export function SimulatorRulesOfOrigin() {
  const [harga, setHarga] = useState(100); // harga FOB (indeks)
  const [bahanImpor, setBahanImpor] = useState(50); // nilai bahan dari luar wilayah FTA (indeks)
  const [ambang, setAmbang] = useState(40); // ambang RVC %

  const r = useMemo(() => {
    const lokal = Math.max(0, harga - bahanImpor);
    const rvc = harga > 0 ? (lokal / harga) * 100 : 0;
    const lolos = rvc >= ambang;
    return { lokal, rvc, lolos };
  }, [harga, bahanImpor, ambang]);

  return (
    <div className="my-6 card p-5">
      <div className="mb-1 text-sm font-bold text-brand-700">🌐 Simulator Rules of Origin (RVC)</div>
      <p className="mb-4 text-xs text-ink-faint">
        Agar dapat tarif preferensi FTA, barang harus cukup "berasal" dari wilayah perjanjian. Salah satu ujinya: Regional Value Content (RVC) memenuhi ambang.
      </p>

      <div className="grid gap-4 sm:grid-cols-3">
        <Slider label="Harga FOB (indeks)" value={harga} set={setHarga} min={50} max={200} step={5} fmt={(v) => `${v}`} />
        <Slider label="Nilai bahan impor non-asal" value={bahanImpor} set={setBahanImpor} min={0} max={harga} step={5} fmt={(v) => `${v}`} />
        <Slider label="Ambang RVC" value={ambang} set={setAmbang} min={30} max={60} step={5} fmt={(v) => `${v}%`} />
      </div>

      <div className="mt-5 flex h-7 overflow-hidden rounded-lg">
        <div className="flex items-center justify-center bg-emerald-500 text-xs font-bold text-white" style={{ width: `${r.rvc}%` }}>
          {r.rvc > 16 ? `Kandungan lokal ${r.rvc.toFixed(0)}%` : ""}
        </div>
        <div className="flex items-center justify-center bg-slate-400 text-xs font-bold text-white" style={{ width: `${100 - r.rvc}%` }}>
          {100 - r.rvc > 16 ? "Bahan impor" : ""}
        </div>
      </div>

      <div className={`mt-4 rounded-xl p-4 text-center ${r.lolos ? "bg-emerald-50" : "bg-rose-50"}`}>
        <div className="text-xs text-ink-faint">Regional Value Content</div>
        <div className={`text-3xl font-extrabold tnum ${r.lolos ? "text-emerald-700" : "text-rose-700"}`}>{r.rvc.toFixed(1)}%</div>
        <div className={`mt-1 text-sm font-bold ${r.lolos ? "text-emerald-700" : "text-rose-700"}`}>
          {r.lolos ? `Lolos (>= ${ambang}%): berhak COO & tarif preferensi` : `Belum lolos (< ${ambang}%): kena tarif MFN penuh`}
        </div>
      </div>

      <p className="mt-3 text-xs text-ink-faint">
        Makin banyak nilai tambah dibuat di dalam wilayah FTA, makin tinggi RVC. Menambah komponen lokal bisa membuat produk memenuhi syarat tarif preferensi.
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
      <input type="range" min={min} max={max} step={step} value={value} onChange={(e) => set(Number(e.target.value))} className="h-2 w-full cursor-pointer appearance-none rounded-full bg-slate-200 accent-brand-600" />
    </div>
  );
}
