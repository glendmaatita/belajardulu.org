import { useMemo, useState } from "react";
import { rupiah } from "../../lib/format";

// Laba maksimum tercapai saat penerimaan marginal (MR) = biaya marginal (MC).
// Model sederhana: harga tetap (P), MC naik linear. Produksi optimal saat MC = P.
export function SimulatorLabaMaksimum() {
  const [harga, setHarga] = useState(50_000); // harga jual (= MR pada pasar persaingan)
  const [fc, setFc] = useState(5_000_000); // biaya tetap
  const [mcAwal, setMcAwal] = useState(20_000); // MC unit pertama
  const [kenaikanMc, setKenaikanMc] = useState(100); // kenaikan MC per unit

  const r = useMemo(() => {
    // MC(q) = mcAwal + kenaikanMc*(q-1). Optimal saat MC <= harga.
    // qOpt: harga = mcAwal + kenaikanMc*(q-1) => q = (harga - mcAwal)/kenaikanMc + 1
    const qOpt = Math.max(0, Math.floor((harga - mcAwal) / kenaikanMc) + 1);
    // total VC = sum of MC dari 1..qOpt (deret aritmetika)
    const vc = qOpt > 0 ? qOpt * mcAwal + kenaikanMc * ((qOpt - 1) * qOpt) / 2 : 0;
    const revenue = harga * qOpt;
    const laba = revenue - vc - fc;
    return { qOpt, vc, revenue, laba };
  }, [harga, fc, mcAwal, kenaikanMc]);

  const untung = r.laba >= 0;

  return (
    <div className="my-6 card p-5">
      <div className="mb-1 text-sm font-bold text-brand-700">🎯 Simulator Laba Maksimum (MR = MC)</div>
      <p className="mb-4 text-xs text-ink-faint">
        Perusahaan menambah produksi selama penerimaan marginal (harga) masih di atas biaya marginal. Laba maksimum tepat saat MR = MC.
      </p>

      <div className="grid gap-4 sm:grid-cols-2">
        <Slider label="Harga jual (MR)" value={harga} set={setHarga} min={20_000} max={120_000} step={5_000} fmt={(v) => rupiah(v)} />
        <Slider label="Biaya tetap (FC)" value={fc} set={setFc} min={0} max={20_000_000} step={1_000_000} fmt={(v) => rupiah(v)} />
        <Slider label="Biaya marginal unit ke-1" value={mcAwal} set={setMcAwal} min={5_000} max={60_000} step={5_000} fmt={(v) => rupiah(v)} />
        <Slider label="Kenaikan MC per unit" value={kenaikanMc} set={setKenaikanMc} min={20} max={500} step={20} fmt={(v) => rupiah(v)} />
      </div>

      <div className="mt-5 grid gap-3 sm:grid-cols-3">
        <Stat label="Produksi optimal (Q*)" value={`${r.qOpt} unit`} tone="sky" />
        <Stat label="Penerimaan" value={rupiah(r.revenue)} tone="violet" />
        <Stat label="Laba maksimum" value={(untung ? "+" : "") + rupiah(Math.round(r.laba))} tone={untung ? "emerald" : "rose"} />
      </div>

      <p className="mt-3 text-xs text-ink-faint">
        Memproduksi melebihi Q* justru menambah unit yang biayanya melebihi harga, sehingga laba berkurang. Inilah aturan emas MR = MC.
      </p>
    </div>
  );
}

function Stat({ label, value, tone }: { label: string; value: string; tone: "sky" | "violet" | "emerald" | "rose" }) {
  const map = { sky: "text-sky-700", violet: "text-violet-700", emerald: "text-emerald-700", rose: "text-rose-700" };
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
