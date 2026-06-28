import { useMemo, useState } from "react";
import { rupiah } from "../../lib/format";

// Kebijakan dividen: payout ratio membagi laba menjadi dividen & laba ditahan.
// Laba ditahan mendanai pertumbuhan: g = ROE x (1 - payout) (sustainable growth).
export function SimulatorDividen() {
  const [laba, setLaba] = useState(100_000_000_000); // laba bersih
  const [saham, setSaham] = useState(1_000_000_000); // jumlah saham beredar
  const [payout, setPayout] = useState(40); // % payout ratio
  const [roe, setRoe] = useState(18); // % return on equity

  const r = useMemo(() => {
    const dividenTotal = laba * (payout / 100);
    const ditahan = laba - dividenTotal;
    const dps = dividenTotal / saham; // dividen per saham
    const eps = laba / saham;
    const retention = 1 - payout / 100;
    const growth = (roe / 100) * retention * 100; // sustainable growth %
    return { dividenTotal, ditahan, dps, eps, growth, retention };
  }, [laba, saham, payout, roe]);

  return (
    <div className="my-6 card p-5">
      <div className="mb-1 text-sm font-bold text-brand-700">💵 Simulator Kebijakan Dividen</div>
      <p className="mb-4 text-xs text-ink-faint">
        Atur payout ratio dan lihat pembagian laba menjadi dividen vs laba ditahan, serta dampaknya pada potensi pertumbuhan.
      </p>

      <div className="grid gap-4 sm:grid-cols-2">
        <Slider label="Laba bersih" value={laba} set={setLaba} min={10_000_000_000} max={500_000_000_000} step={10_000_000_000} fmt={(v) => rupiah(v)} />
        <Slider label="Saham beredar" value={saham} set={setSaham} min={100_000_000} max={5_000_000_000} step={100_000_000} fmt={(v) => `${(v / 1_000_000_000).toFixed(1)} miliar lbr`} />
        <Slider label="Payout ratio" value={payout} set={setPayout} min={0} max={100} step={5} fmt={(v) => `${v}%`} />
        <Slider label="ROE" value={roe} set={setRoe} min={1} max={35} step={1} fmt={(v) => `${v}%`} />
      </div>

      <div className="mt-5 flex h-7 overflow-hidden rounded-lg">
        <div className="flex items-center justify-center bg-emerald-500 text-xs font-bold text-white" style={{ width: `${payout}%` }}>
          {payout > 14 ? "Dividen" : ""}
        </div>
        <div className="flex items-center justify-center bg-amber-500 text-xs font-bold text-white" style={{ width: `${100 - payout}%` }}>
          {100 - payout > 14 ? "Laba ditahan" : ""}
        </div>
      </div>

      <div className="mt-4 grid gap-3 sm:grid-cols-3">
        <Stat label="Total dividen" value={rupiah(Math.round(r.dividenTotal))} tone="emerald" />
        <Stat label="Dividen per saham (DPS)" value={rupiah(Math.round(r.dps))} tone="sky" />
        <Stat label="Potensi pertumbuhan (g)" value={`${r.growth.toFixed(1)}%`} tone="violet" />
      </div>

      <p className="mt-3 text-xs text-ink-faint">
        Dengan menahan {(r.retention * 100).toFixed(0)}% laba dan ROE {roe}%, perusahaan berpotensi tumbuh sekitar <b>{r.growth.toFixed(1)}%</b> per tahun (g = ROE x retensi).
        Payout tinggi memberi kas ke pemegang saham tetapi menyisakan lebih sedikit dana untuk tumbuh.
      </p>
    </div>
  );
}

function Stat({ label, value, tone }: { label: string; value: string; tone: "emerald" | "sky" | "violet" }) {
  const map = { emerald: "text-emerald-700", sky: "text-sky-700", violet: "text-violet-700" };
  return (
    <div className="rounded-xl bg-canvas p-3 text-center">
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
      <input type="range" min={min} max={max} step={step} value={value} onChange={(e) => set(Number(e.target.value))} className="h-2 w-full cursor-pointer appearance-none rounded-full bg-line accent-brand-600" />
    </div>
  );
}
