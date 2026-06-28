import { useMemo, useState } from "react";

// Sharpe ratio: imbal hasil di atas aset bebas risiko, per unit risiko (volatilitas).
// Sharpe = (return - risk free) / volatilitas. Makin tinggi, makin baik imbal hasil per risiko.
export function KalkulatorSharpe() {
  const [returnA, setReturnA] = useState(12); // imbal hasil portofolio A
  const [riskA, setRiskA] = useState(15); // volatilitas A
  const [returnB, setReturnB] = useState(18);
  const [riskB, setRiskB] = useState(30);
  const [rf, setRf] = useState(5); // aset bebas risiko

  const r = useMemo(() => {
    const sA = (returnA - rf) / riskA;
    const sB = (returnB - rf) / riskB;
    const lebihBaik = sA >= sB ? "A" : "B";
    return { sA, sB, lebihBaik };
  }, [returnA, riskA, returnB, riskB, rf]);

  return (
    <div className="my-6 card p-5">
      <div className="mb-1 text-sm font-bold text-brand-700">🎯 Kalkulator Sharpe Ratio</div>
      <p className="mb-4 text-xs text-ink-faint">
        Imbal hasil tinggi belum tentu lebih baik bila risikonya juga tinggi. Sharpe ratio mengukur imbal hasil per unit risiko. Bandingkan dua portofolio.
      </p>

      <Slider label="Aset bebas risiko (risk free)" value={rf} set={setRf} min={0} max={10} step={0.5} fmt={(v) => `${v}%`} />

      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <div className="rounded-xl bg-canvas p-3">
          <div className="mb-2 text-sm font-bold text-sky-700">Portofolio A</div>
          <Slider label="Imbal hasil" value={returnA} set={setReturnA} min={0} max={40} step={1} fmt={(v) => `${v}%`} />
          <Slider label="Volatilitas" value={riskA} set={setRiskA} min={1} max={50} step={1} fmt={(v) => `${v}%`} />
        </div>
        <div className="rounded-xl bg-canvas p-3">
          <div className="mb-2 text-sm font-bold text-violet-700">Portofolio B</div>
          <Slider label="Imbal hasil" value={returnB} set={setReturnB} min={0} max={40} step={1} fmt={(v) => `${v}%`} />
          <Slider label="Volatilitas" value={riskB} set={setRiskB} min={1} max={50} step={1} fmt={(v) => `${v}%`} />
        </div>
      </div>

      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        <div className={`rounded-xl p-3 text-center ${r.lebihBaik === "A" ? "bg-emerald-50" : "bg-canvas"}`}>
          <div className="text-xs text-ink-faint">Sharpe Portofolio A</div>
          <div className="text-2xl font-extrabold tnum text-sky-700">{r.sA.toFixed(2)}</div>
        </div>
        <div className={`rounded-xl p-3 text-center ${r.lebihBaik === "B" ? "bg-emerald-50" : "bg-canvas"}`}>
          <div className="text-xs text-ink-faint">Sharpe Portofolio B</div>
          <div className="text-2xl font-extrabold tnum text-violet-700">{r.sB.toFixed(2)}</div>
        </div>
      </div>

      <p className="mt-3 text-xs text-ink-faint">
        Portofolio <b>{r.lebihBaik}</b> memberi imbal hasil per unit risiko lebih baik. Imbal hasil B mungkin lebih tinggi, tetapi bila risikonya jauh lebih besar, Sharpe-nya bisa lebih rendah.
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
