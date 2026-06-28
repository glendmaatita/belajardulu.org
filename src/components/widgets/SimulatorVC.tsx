import { useMemo, useState } from "react";
import { rupiah, angka } from "../../lib/format";

// Venture Capital: kepemilikan, dilusi, dan imbal hasil saat exit.
export function SimulatorVC() {
  const [investasi, setInvestasi] = useState(10); // Rp miliar
  const [preMoney, setPreMoney] = useState(40); // Rp miliar valuasi pra-pendanaan
  const [dilusi, setDilusi] = useState(30); // % dilusi dari ronde berikutnya
  const [exitVal, setExitVal] = useState(500); // Rp miliar valuasi exit

  const r = useMemo(() => {
    const postMoney = preMoney + investasi;
    const ownAwal = postMoney > 0 ? investasi / postMoney : 0;
    const ownExit = ownAwal * (1 - dilusi / 100);
    const nilaiExit = exitVal * ownExit;
    const moic = investasi > 0 ? nilaiExit / investasi : 0;
    return { postMoney, ownAwal, ownExit, nilaiExit, moic };
  }, [investasi, preMoney, dilusi, exitVal]);

  return (
    <div className="my-6 card p-5">
      <div className="mb-1 text-sm font-bold text-brand-700">🚀 Simulator Venture Capital</div>
      <p className="mb-4 text-xs text-ink-faint">
        VC membeli sebagian kepemilikan startup, lalu berharap exit besar. Lihat bagaimana valuasi, dilusi, dan exit
        menentukan imbal hasil.
      </p>

      <div className="grid gap-4 sm:grid-cols-2">
        <Slider label="Investasi VC" value={investasi} set={setInvestasi} min={1} max={100} step={1} fmt={(v) => `Rp${angka(v)} M`} />
        <Slider label="Valuasi pra-pendanaan (pre-money)" value={preMoney} set={setPreMoney} min={5} max={500} step={5} fmt={(v) => `Rp${angka(v)} M`} />
        <Slider label="Dilusi ronde berikutnya" value={dilusi} set={setDilusi} min={0} max={70} step={5} fmt={(v) => `${v}%`} />
        <Slider label="Valuasi saat exit" value={exitVal} set={setExitVal} min={10} max={5000} step={10} fmt={(v) => `Rp${angka(v)} M`} />
      </div>

      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        <Card label="Kepemilikan awal" value={`${(r.ownAwal * 100).toFixed(1)}%`} accent="text-sky-700" />
        <Card label="Kepemilikan setelah dilusi" value={`${(r.ownExit * 100).toFixed(1)}%`} accent="text-violet-700" />
        <Card label="Nilai saat exit" value={rupiah(Math.round(r.nilaiExit) * 1e9)} accent="text-emerald-700" />
        <Card label="MOIC (kelipatan modal)" value={`${r.moic.toFixed(1)}x`} accent="text-brand-700" />
      </div>
      <p className="mt-3 text-xs text-ink-faint">
        Kepemilikan = investasi / post-money ({rupiah(r.postMoney * 1e9)}). Dilusi dari ronde lanjutan menggerus porsi
        VC, tetapi exit yang besar tetap bisa memberi imbal hasil berkali lipat. Banyak startup gagal, jadi VC mengejar
        sedikit pemenang besar.
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

function Card({ label, value, accent }: { label: string; value: string; accent: string }) {
  return (
    <div className="rounded-xl bg-slate-50 p-3">
      <div className="text-xs text-ink-faint">{label}</div>
      <div className={`text-lg font-extrabold tnum ${accent}`}>{value}</div>
    </div>
  );
}
