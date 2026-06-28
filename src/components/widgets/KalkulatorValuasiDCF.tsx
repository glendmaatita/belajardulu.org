import { useMemo, useState } from "react";
import { rupiah } from "../../lib/format";

// Valuasi DCF sederhana: proyeksikan FCF 5 tahun (tumbuh g), diskon dengan WACC,
// tambahkan terminal value (Gordon growth), lalu jumlahkan jadi enterprise value.
export function KalkulatorValuasiDCF() {
  const [fcf0, setFcf0] = useState(10_000_000_000); // FCF tahun terakhir
  const [growth, setGrowth] = useState(8); // % pertumbuhan FCF 5 tahun
  const [wacc, setWacc] = useState(12); // % discount rate
  const [terminalG, setTerminalG] = useState(3); // % pertumbuhan terminal

  const r = useMemo(() => {
    const g = growth / 100;
    const w = wacc / 100;
    const tg = Math.min(terminalG / 100, w - 0.005); // jaga tg < wacc
    let pvSum = 0;
    let fcf = fcf0;
    const rows: { th: number; fcf: number; pv: number }[] = [];
    for (let t = 1; t <= 5; t++) {
      fcf = fcf * (1 + g);
      const pv = fcf / Math.pow(1 + w, t);
      pvSum += pv;
      rows.push({ th: t, fcf, pv });
    }
    const fcf6 = fcf * (1 + tg);
    const terminal = fcf6 / (w - tg);
    const pvTerminal = terminal / Math.pow(1 + w, 5);
    const ev = pvSum + pvTerminal;
    return { rows, pvSum, pvTerminal, ev };
  }, [fcf0, growth, wacc, terminalG]);

  return (
    <div className="my-6 card p-5">
      <div className="mb-1 text-sm font-bold text-brand-700">🧮 Kalkulator Valuasi DCF</div>
      <p className="mb-4 text-xs text-ink-faint">
        Estimasi nilai perusahaan (enterprise value) dengan mendiskon arus kas bebas masa depan dan terminal value. Dipakai luas dalam M&A.
      </p>

      <div className="grid gap-4 sm:grid-cols-2">
        <Slider label="FCF tahun terakhir" value={fcf0} set={setFcf0} min={1_000_000_000} max={100_000_000_000} step={1_000_000_000} fmt={(v) => rupiah(v)} />
        <Slider label="Pertumbuhan FCF (5 th)" value={growth} set={setGrowth} min={0} max={25} step={1} fmt={(v) => `${v}%`} />
        <Slider label="WACC (discount rate)" value={wacc} set={setWacc} min={5} max={25} step={1} fmt={(v) => `${v}%`} />
        <Slider label="Pertumbuhan terminal" value={terminalG} set={setTerminalG} min={0} max={6} step={1} fmt={(v) => `${v}%`} />
      </div>

      <div className="mt-5 overflow-hidden rounded-xl bg-slate-50 p-3 text-sm">
        <div className="mb-1 flex justify-between text-xs font-bold text-ink-faint">
          <span>Tahun</span>
          <span>FCF</span>
          <span>Nilai kini (PV)</span>
        </div>
        {r.rows.map((row) => (
          <div key={row.th} className="flex justify-between border-t border-slate-200 py-1">
            <span className="text-ink-soft">Tahun {row.th}</span>
            <span className="tnum text-ink-soft">{rupiah(Math.round(row.fcf))}</span>
            <span className="tnum font-semibold text-ink">{rupiah(Math.round(row.pv))}</span>
          </div>
        ))}
      </div>

      <div className="mt-3 grid gap-3 sm:grid-cols-2">
        <Stat label="PV arus kas 5 tahun" value={rupiah(Math.round(r.pvSum))} tone="sky" />
        <Stat label="PV terminal value" value={rupiah(Math.round(r.pvTerminal))} tone="violet" />
      </div>

      <div className="mt-3 rounded-xl bg-emerald-50 p-4 text-center">
        <div className="text-xs text-ink-faint">Enterprise Value (estimasi nilai perusahaan)</div>
        <div className="text-3xl font-extrabold tnum text-emerald-700">{rupiah(Math.round(r.ev))}</div>
      </div>

      <p className="mt-3 text-xs text-ink-faint">
        Perhatikan: kenaikan kecil pada WACC atau pertumbuhan terminal sangat memengaruhi nilai. Itulah mengapa DCF harus diuji dengan analisis sensitivitas.
      </p>
    </div>
  );
}

function Stat({ label, value, tone }: { label: string; value: string; tone: "sky" | "violet" }) {
  const map = { sky: "text-sky-700", violet: "text-violet-700" };
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
