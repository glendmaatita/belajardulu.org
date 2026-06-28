import { useMemo, useState } from "react";
import { rupiah } from "../../lib/format";

// Analisis skenario iklim: dampak terhadap nilai portofolio bergantung pada skenario pemanasan
// dan seberapa besar eksposur ke aset karbon-intensif.
type Skenario = "1,5 derajat (transisi cepat)" | "2 derajat (tertib)" | "3 derajat (tanpa aksi)";

// faktor dampak terhadap aset hijau vs aset karbon-intensif per skenario
const FAKTOR: Record<Skenario, { hijau: number; coklat: number; narasi: string }> = {
  "1,5 derajat (transisi cepat)": {
    hijau: 0.25,
    coklat: -0.45,
    narasi: "Regulasi & pajak karbon ketat. Aset hijau melonjak, aset fosil anjlok (banyak jadi stranded).",
  },
  "2 derajat (tertib)": {
    hijau: 0.12,
    coklat: -0.2,
    narasi: "Transisi bertahap dan terprediksi. Aset hijau tumbuh moderat, aset fosil tertekan ringan.",
  },
  "3 derajat (tanpa aksi)": {
    hijau: -0.05,
    coklat: -0.3,
    narasi: "Aksi iklim gagal. Risiko fisik (banjir, badai, gagal panen) memukul hampir semua aset.",
  },
};

const LIST: Skenario[] = ["1,5 derajat (transisi cepat)", "2 derajat (tertib)", "3 derajat (tanpa aksi)"];

export function SimulatorAnalisisSkenario() {
  const [nilai, setNilai] = useState(1_000_000_000_000); // total portofolio
  const [porsiCoklat, setPorsiCoklat] = useState(40); // % aset karbon-intensif
  const [skenario, setSkenario] = useState<Skenario>("2 derajat (tertib)");

  const r = useMemo(() => {
    const f = FAKTOR[skenario];
    const coklat = nilai * (porsiCoklat / 100);
    const hijau = nilai - coklat;
    const dampakCoklat = coklat * f.coklat;
    const dampakHijau = hijau * f.hijau;
    const total = dampakCoklat + dampakHijau;
    const nilaiBaru = nilai + total;
    const pct = (total / nilai) * 100;
    return { dampakCoklat, dampakHijau, total, nilaiBaru, pct, narasi: f.narasi };
  }, [nilai, porsiCoklat, skenario]);

  const positif = r.total >= 0;

  return (
    <div className="my-6 card p-5">
      <div className="mb-1 text-sm font-bold text-brand-700">🌡️ Simulator Analisis Skenario Iklim</div>
      <p className="mb-4 text-xs text-ink-faint">
        Uji ketahanan portofolio terhadap tiga skenario iklim. Atur porsi aset karbon-intensif dan lihat dampaknya.
      </p>

      <div className="grid gap-4 sm:grid-cols-2">
        <Slider label="Nilai portofolio" value={nilai} set={setNilai} min={100_000_000_000} max={5_000_000_000_000} step={100_000_000_000} fmt={(v) => rupiah(v)} />
        <Slider label="Porsi aset karbon-intensif" value={porsiCoklat} set={setPorsiCoklat} min={0} max={100} step={5} fmt={(v) => `${v}%`} />
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {LIST.map((s) => (
          <button key={s} onClick={() => setSkenario(s)} className={`rounded-lg px-3 py-1.5 text-xs font-bold transition ${skenario === s ? "bg-brand-600 text-white" : "bg-canvas text-ink-soft hover:bg-line"}`}>
            {s}
          </button>
        ))}
      </div>

      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        <div className="rounded-xl bg-emerald-50 p-3 text-center">
          <div className="text-xs text-ink-faint">Dampak ke aset hijau</div>
          <div className="text-lg font-extrabold tnum text-emerald-700">{r.dampakHijau >= 0 ? "+" : ""}{rupiah(Math.round(r.dampakHijau))}</div>
        </div>
        <div className="rounded-xl bg-amber-50 p-3 text-center">
          <div className="text-xs text-ink-faint">Dampak ke aset karbon-intensif</div>
          <div className="text-lg font-extrabold tnum text-amber-700">{rupiah(Math.round(r.dampakCoklat))}</div>
        </div>
      </div>

      <div className={`mt-3 rounded-xl p-4 text-center ${positif ? "bg-emerald-50" : "bg-rose-50"}`}>
        <div className="text-xs text-ink-faint">Perubahan nilai portofolio</div>
        <div className={`text-2xl font-extrabold tnum ${positif ? "text-emerald-700" : "text-rose-700"}`}>
          {positif ? "+" : ""}{rupiah(Math.round(r.total))} ({r.pct.toFixed(1)}%)
        </div>
      </div>

      <p className="mt-3 text-xs text-ink-faint">{r.narasi}</p>
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
