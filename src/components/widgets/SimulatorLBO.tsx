import { useMemo, useState } from "react";
import { rupiah, angka } from "../../lib/format";

// Leveraged Buyout sederhana: berapa imbal hasil ekuitas (MOIC & IRR)?
export function SimulatorLBO() {
  const [ebitda, setEbitda] = useState(100); // Rp miliar
  const [entryMult, setEntryMult] = useState(8); // x EBITDA
  const [debtPct, setDebtPct] = useState(60); // % dari EV dibiayai utang
  const [growth, setGrowth] = useState(8); // % pertumbuhan EBITDA/tahun
  const [exitMult, setExitMult] = useState(9); // x EBITDA
  const [tahun, setTahun] = useState(5);

  const r = useMemo(() => {
    const entryEV = ebitda * entryMult;
    const debt = entryEV * (debtPct / 100);
    const equityIn = entryEV - debt;
    const exitEbitda = ebitda * Math.pow(1 + growth / 100, tahun);
    const exitEV = exitEbitda * exitMult;
    // asumsi: 40% laba dipakai melunasi sebagian utang (sederhana)
    const debtPaid = Math.min(debt, ebitda * 0.4 * tahun);
    const debtExit = debt - debtPaid;
    const equityOut = Math.max(0, exitEV - debtExit);
    const moic = equityIn > 0 ? equityOut / equityIn : 0;
    const irr = moic > 0 ? Math.pow(moic, 1 / tahun) - 1 : -1;
    return { entryEV, debt, equityIn, exitEV, equityOut, moic, irr };
  }, [ebitda, entryMult, debtPct, growth, exitMult, tahun]);

  return (
    <div className="my-6 card p-5">
      <div className="mb-1 text-sm font-bold text-brand-700">💼 Simulator LBO (Leveraged Buyout)</div>
      <p className="mb-4 text-xs text-ink-faint">
        Private equity membeli perusahaan dengan banyak utang, memperbaikinya, lalu menjual. Lihat bagaimana leverage
        dan pertumbuhan memengaruhi imbal hasil ekuitas.
      </p>

      <div className="grid gap-4 sm:grid-cols-3">
        <Slider label="EBITDA awal" value={ebitda} set={setEbitda} min={10} max={500} step={10} fmt={(v) => `Rp${angka(v)} M`} />
        <Slider label="Multiple masuk" value={entryMult} set={setEntryMult} min={3} max={15} step={0.5} fmt={(v) => `${v}x`} />
        <Slider label="Porsi utang" value={debtPct} set={setDebtPct} min={0} max={85} step={5} fmt={(v) => `${v}%`} />
        <Slider label="Pertumbuhan EBITDA" value={growth} set={setGrowth} min={0} max={25} step={1} fmt={(v) => `${v}%/th`} />
        <Slider label="Multiple keluar" value={exitMult} set={setExitMult} min={3} max={15} step={0.5} fmt={(v) => `${v}x`} />
        <Slider label="Lama investasi" value={tahun} set={setTahun} min={1} max={10} step={1} fmt={(v) => `${v} th`} />
      </div>

      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        <Card label="Ekuitas disetor (masuk)" value={rupiah(r.equityIn * 1e9)} accent="text-sky-700" />
        <Card label="Ekuitas diterima (keluar)" value={rupiah(Math.round(r.equityOut) * 1e9)} accent="text-emerald-700" />
        <Card label="MOIC (kelipatan modal)" value={`${r.moic.toFixed(2)}x`} accent="text-violet-700" />
        <Card label="IRR (per tahun)" value={`${(r.irr * 100).toFixed(1)}%`} accent="text-brand-700" />
      </div>
      <p className="mt-3 text-xs text-ink-faint">
        Makin besar porsi utang, makin sedikit ekuitas yang disetor, sehingga imbal hasil ekuitas bisa terungkit naik,
        tetapi risikonya juga meningkat. Itulah inti dan bahaya leverage.
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

function Card({ label, value, accent }: { label: string; value: string; accent: string }) {
  return (
    <div className="rounded-xl bg-canvas p-3">
      <div className="text-xs text-ink-faint">{label}</div>
      <div className={`text-lg font-extrabold tnum ${accent}`}>{value}</div>
    </div>
  );
}
