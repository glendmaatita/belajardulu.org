import { useMemo, useState } from "react";
import { rupiah, angka } from "../../lib/format";

const ANNUITY = 6.7; // faktor nilai kini ~10 tahun pada diskonto ~8% (ilustrasi)

// Simulasi risiko transisi: nilai aset padat karbon tergerus saat harga karbon naik.
export function SimulatorRisikoTransisi() {
  const [nilai, setNilai] = useState(1000); // Rp miliar nilai aset
  const [emisi, setEmisi] = useState(2_000_000); // tCO2e per tahun
  const [harga, setHarga] = useState(0); // Rp per tCO2e (mulai 0)

  const r = useMemo(() => {
    const nilaiRp = nilai * 1_000_000_000;
    const biayaTahun = emisi * harga;
    const bebanPV = Math.min(nilaiRp, biayaTahun * ANNUITY);
    const nilaiBaru = nilaiRp - bebanPV;
    const turunPct = nilaiRp > 0 ? (bebanPV / nilaiRp) * 100 : 0;
    return { nilaiRp, biayaTahun, bebanPV, nilaiBaru, turunPct };
  }, [nilai, emisi, harga]);

  return (
    <div className="my-6 card p-5">
      <div className="mb-1 text-sm font-bold text-brand-700">⚠️ Simulator Risiko Transisi (Stranded Asset)</div>
      <p className="mb-4 text-xs text-ink-faint">
        Aset padat emisi (mis. PLTU, tambang batu bara) bisa kehilangan nilai saat kebijakan iklim mengetat dan harga
        karbon naik. Geser harga karbon dan amati dampaknya.
      </p>

      <Slider label="Nilai aset saat ini" value={nilai} set={setNilai} min={100} max={5000} step={100} fmt={(v) => `Rp${angka(v)} miliar`} />
      <Slider label="Emisi aset per tahun" value={emisi} set={setEmisi} min={0} max={5_000_000} step={100_000} fmt={(v) => `${angka(v)} tCO2e`} />
      <Slider label="Harga karbon (kebijakan)" value={harga} set={setHarga} min={0} max={300_000} step={10_000} fmt={(v) => `${rupiah(v)}/ton`} />

      <div className="mt-5">
        <div className="mb-1 flex justify-between text-xs">
          <span className="font-semibold text-ink-soft">Nilai aset setelah memperhitungkan biaya karbon</span>
          <span className="tnum font-bold">{rupiah(Math.round(r.nilaiBaru))}</span>
        </div>
        <div className="flex h-7 overflow-hidden rounded-lg bg-slate-200">
          <div className="bg-emerald-500" style={{ width: `${100 - r.turunPct}%` }} />
          <div className="bg-rose-500" style={{ width: `${r.turunPct}%` }} />
        </div>
        <div className="mt-1 flex justify-between text-[11px] text-ink-faint">
          <span>🟢 nilai tersisa</span>
          <span>🔴 tergerus {r.turunPct.toFixed(0)}%</span>
        </div>
      </div>

      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        <Card label="Biaya karbon / tahun" value={rupiah(Math.round(r.biayaTahun))} accent="text-rose-600" />
        <Card label="Nilai yang berisiko hilang" value={rupiah(Math.round(r.bebanPV))} accent="text-amber-700" />
      </div>
      <p className="mt-3 text-xs text-ink-faint">
        {r.turunPct > 60
          ? "Aset ini sangat rentan menjadi stranded asset jika kebijakan iklim mengetat."
          : harga === 0
          ? "Pada harga karbon Rp0, belum ada tekanan. Naikkan harga untuk melihat risikonya."
          : "Makin tinggi harga karbon, makin besar nilai aset yang tergerus."}
      </p>
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
  fmt,
}: {
  label: string;
  value: number;
  set: (n: number) => void;
  min: number;
  max: number;
  step: number;
  fmt: (v: number) => string;
}) {
  return (
    <div className="mb-3">
      <div className="mb-1 flex items-center justify-between">
        <span className="text-sm font-semibold text-ink-soft">{label}</span>
        <span className="tnum text-sm font-bold text-ink">{fmt(value)}</span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => set(Number(e.target.value))}
        className="h-2 w-full cursor-pointer appearance-none rounded-full bg-slate-200 accent-brand-600"
      />
    </div>
  );
}

function Card({ label, value, accent }: { label: string; value: string; accent: string }) {
  return (
    <div className="rounded-xl bg-slate-50 p-3">
      <div className="text-xs text-ink-faint">{label}</div>
      <div className={`text-lg font-extrabold tnum ${accent}`}>{value}</div>
    </div>
  );
}
