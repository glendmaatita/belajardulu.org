import { useMemo, useState } from "react";
import { rupiah } from "../../lib/format";

// Laba sebagai insentif kapitalisme: laba = pendapatan - biaya.
// Margin laba = laba / pendapatan. Imbal hasil modal (ROC) = laba / modal.
export function KalkulatorLabaModal() {
  const [pendapatan, setPendapatan] = useState(500_000_000);
  const [biaya, setBiaya] = useState(380_000_000);
  const [modal, setModal] = useState(800_000_000);

  const r = useMemo(() => {
    const laba = pendapatan - biaya;
    const margin = pendapatan > 0 ? (laba / pendapatan) * 100 : 0;
    const roc = modal > 0 ? (laba / modal) * 100 : 0;
    return { laba, margin, roc };
  }, [pendapatan, biaya, modal]);

  return (
    <div className="my-6 card p-5">
      <div className="mb-1 text-sm font-bold text-brand-700">💵 Kalkulator Laba & Imbal Hasil Modal</div>
      <p className="mb-4 text-xs text-ink-faint">
        Laba adalah sinyal dan pendorong utama dalam kapitalisme. Lihat bagaimana pendapatan, biaya, dan modal menentukan untung dan daya tariknya bagi investor.
      </p>

      <div className="grid gap-4 sm:grid-cols-3">
        <Slider label="Pendapatan setahun" value={pendapatan} set={setPendapatan} min={50_000_000} max={2_000_000_000} step={50_000_000} fmt={(v) => rupiah(v)} />
        <Slider label="Total biaya setahun" value={biaya} set={setBiaya} min={20_000_000} max={2_000_000_000} step={20_000_000} fmt={(v) => rupiah(v)} />
        <Slider label="Modal yang ditanam" value={modal} set={setModal} min={100_000_000} max={3_000_000_000} step={100_000_000} fmt={(v) => rupiah(v)} />
      </div>

      <div className={`mt-5 rounded-xl p-4 text-center ${r.laba >= 0 ? "bg-emerald-50" : "bg-rose-50"}`}>
        <div className="text-xs text-ink-faint">Laba (pendapatan − biaya)</div>
        <div className={`text-3xl font-extrabold tnum ${r.laba >= 0 ? "text-emerald-700" : "text-rose-700"}`}>{rupiah(r.laba)}</div>
      </div>

      <div className="mt-3 grid grid-cols-2 gap-3">
        <div className="rounded-xl bg-canvas p-3 text-center">
          <div className="text-xs text-ink-faint">Margin laba</div>
          <div className="tnum text-2xl font-extrabold text-ink">{r.margin.toFixed(1)}%</div>
        </div>
        <div className="rounded-xl bg-canvas p-3 text-center">
          <div className="text-xs text-ink-faint">Imbal hasil modal (ROC)</div>
          <div className={`tnum text-2xl font-extrabold ${r.roc >= 10 ? "text-emerald-700" : "text-amber-700"}`}>{r.roc.toFixed(1)}%</div>
        </div>
      </div>
      <p className="mt-2 text-xs text-ink-faint">Bila ROC lebih tinggi dari bunga bank, modal cenderung mengalir ke usaha ini. Inilah cara laba mengarahkan sumber daya.</p>
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
