import { useMemo, useState } from "react";
import { rupiah } from "../../lib/format";

// Asuransi kargo: premi = tarif x nilai pertanggungan (umumnya 110% nilai barang).
// Klaim dibayar sampai nilai pertanggungan, dikurangi deductible (own risk).
export function KalkulatorAsuransiKargo() {
  const [nilaiBarang, setNilaiBarang] = useState(500_000_000);
  const [tarifPremi, setTarifPremi] = useState(0.3); // % dari nilai pertanggungan
  const [kerugian, setKerugian] = useState(200_000_000); // nilai klaim kerusakan
  const [deductible, setDeductible] = useState(10_000_000); // own risk

  const r = useMemo(() => {
    const pertanggungan = nilaiBarang * 1.1; // 110%
    const premi = pertanggungan * (tarifPremi / 100);
    const dibayar = Math.max(0, Math.min(kerugian, pertanggungan) - deductible);
    return { pertanggungan, premi, dibayar };
  }, [nilaiBarang, tarifPremi, kerugian, deductible]);

  return (
    <div className="my-6 card p-5">
      <div className="mb-1 text-sm font-bold text-brand-700">🛟 Kalkulator Asuransi Kargo</div>
      <p className="mb-4 text-xs text-ink-faint">
        Hitung premi marine cargo dan estimasi pembayaran klaim. Nilai pertanggungan lazimnya 110% dari nilai barang.
      </p>

      <div className="grid gap-4 sm:grid-cols-2">
        <Slider label="Nilai barang" value={nilaiBarang} set={setNilaiBarang} min={50_000_000} max={5_000_000_000} step={50_000_000} fmt={(v) => rupiah(v)} />
        <Slider label="Tarif premi" value={tarifPremi} set={setTarifPremi} min={0.1} max={2} step={0.1} fmt={(v) => `${v}%`} />
        <Slider label="Nilai kerugian (klaim)" value={kerugian} set={setKerugian} min={0} max={5_500_000_000} step={50_000_000} fmt={(v) => rupiah(v)} />
        <Slider label="Deductible (own risk)" value={deductible} set={setDeductible} min={0} max={100_000_000} step={5_000_000} fmt={(v) => rupiah(v)} />
      </div>

      <div className="mt-5 grid gap-3 sm:grid-cols-3">
        <Stat label="Nilai pertanggungan (110%)" value={rupiah(Math.round(r.pertanggungan))} tone="sky" />
        <Stat label="Premi dibayar" value={rupiah(Math.round(r.premi))} tone="violet" />
        <Stat label="Klaim diterima" value={rupiah(Math.round(r.dibayar))} tone="emerald" />
      </div>

      <p className="mt-3 text-xs text-ink-faint">
        Premi yang relatif kecil melindungi dari kerugian besar. Klaim dibayar hingga nilai pertanggungan dan dikurangi deductible yang menjadi tanggungan tertanggung.
      </p>
    </div>
  );
}

function Stat({ label, value, tone }: { label: string; value: string; tone: "sky" | "violet" | "emerald" }) {
  const map = { sky: "text-sky-700", violet: "text-violet-700", emerald: "text-emerald-700" };
  return (
    <div className="rounded-xl bg-slate-50 p-3 text-center">
      <div className="text-xs text-ink-faint">{label}</div>
      <div className={`text-lg font-extrabold tnum ${map[tone]}`}>{value}</div>
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
