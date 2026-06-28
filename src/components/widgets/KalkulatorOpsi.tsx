import { useMemo, useState } from "react";

// Payoff opsi saat jatuh tempo: call = max(spot - strike, 0) - premi; put = max(strike - spot, 0) - premi.
export function KalkulatorOpsi() {
  const [tipe, setTipe] = useState<"call" | "put">("call");
  const [strike, setStrike] = useState(10000);
  const [premi, setPremi] = useState(500);
  const [spot, setSpot] = useState(11000);

  const r = useMemo(() => {
    const intrinsik = tipe === "call" ? Math.max(spot - strike, 0) : Math.max(strike - spot, 0);
    const payoff = intrinsik - premi;
    // titik impas
    const bep = tipe === "call" ? strike + premi : strike - premi;
    return { intrinsik, payoff, bep };
  }, [tipe, strike, premi, spot]);

  const fmt = (n: number) => "Rp" + Math.round(n).toLocaleString("id-ID");
  const untung = r.payoff > 0;

  return (
    <div className="my-6 card p-5">
      <div className="mb-1 text-sm font-bold text-brand-700">🎲 Kalkulator Payoff Opsi</div>
      <p className="mb-4 text-xs text-ink-faint">
        Opsi memberi hak (bukan kewajiban) membeli (call) atau menjual (put) pada harga strike. Kerugian pembeli terbatas pada premi. Hitung hasilnya saat jatuh tempo.
      </p>

      <div className="mb-4 flex gap-2">
        <button onClick={() => setTipe("call")} className={`flex-1 rounded-lg py-1.5 text-sm font-bold ${tipe === "call" ? "bg-emerald-500 text-white" : "bg-slate-100 text-ink-soft"}`}>Call (taruhan naik)</button>
        <button onClick={() => setTipe("put")} className={`flex-1 rounded-lg py-1.5 text-sm font-bold ${tipe === "put" ? "bg-rose-500 text-white" : "bg-slate-100 text-ink-soft"}`}>Put (taruhan turun)</button>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        <Slider label="Harga strike" value={strike} set={setStrike} min={5000} max={20000} step={250} fmt={fmt} />
        <Slider label="Premi (biaya opsi)" value={premi} set={setPremi} min={50} max={3000} step={50} fmt={fmt} />
        <Slider label="Harga spot saat jatuh tempo" value={spot} set={setSpot} min={5000} max={25000} step={250} fmt={fmt} />
      </div>

      <div className="mt-5 grid gap-3 sm:grid-cols-3">
        <Stat label="Nilai intrinsik" value={fmt(r.intrinsik)} tone="sky" />
        <Stat label="Titik impas (BEP)" value={fmt(r.bep)} tone="violet" />
        <Stat label="Payoff bersih" value={(untung ? "+" : "") + fmt(r.payoff)} tone={untung ? "emerald" : "rose"} />
      </div>

      <p className="mt-3 text-xs text-ink-faint">
        Jika opsi berakhir tanpa nilai (out of the money), kerugian maksimum hanya sebesar premi. Potensi untung call tidak terbatas saat harga melonjak, sedangkan put menguntungkan saat harga jatuh.
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
