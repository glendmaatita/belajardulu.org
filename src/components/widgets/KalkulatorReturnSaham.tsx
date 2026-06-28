import { useMemo, useState } from "react";

// Total return saham = capital gain (selisih harga) + dividend yield. Dalam persen.
export function KalkulatorReturnSaham() {
  const [hargaBeli, setHargaBeli] = useState(5000);
  const [hargaJual, setHargaJual] = useState(6000);
  const [dividen, setDividen] = useState(200); // dividen per saham selama dipegang
  const [lot, setLot] = useState(10); // 1 lot = 100 lembar

  const r = useMemo(() => {
    const lembar = lot * 100;
    const capitalGainPerSaham = hargaJual - hargaBeli;
    const capitalGainPct = (capitalGainPerSaham / hargaBeli) * 100;
    const dividendYield = (dividen / hargaBeli) * 100;
    const totalReturnPct = capitalGainPct + dividendYield;
    const modal = hargaBeli * lembar;
    const labaRupiah = (capitalGainPerSaham + dividen) * lembar;
    return { capitalGainPct, dividendYield, totalReturnPct, modal, labaRupiah, lembar };
  }, [hargaBeli, hargaJual, dividen, lot]);

  const fmt = (n: number) => "Rp" + Math.round(n).toLocaleString("id-ID");

  return (
    <div className="my-6 card p-5">
      <div className="mb-1 text-sm font-bold text-brand-700">📈 Kalkulator Return Saham</div>
      <p className="mb-4 text-xs text-ink-faint">
        Imbal hasil saham datang dari dua sumber: kenaikan harga (capital gain) dan dividen. Hitung total return-nya.
      </p>

      <div className="grid gap-4 sm:grid-cols-2">
        <Slider label="Harga beli" value={hargaBeli} set={setHargaBeli} min={100} max={20000} step={100} fmt={fmt} />
        <Slider label="Harga jual" value={hargaJual} set={setHargaJual} min={100} max={30000} step={100} fmt={fmt} />
        <Slider label="Dividen per saham" value={dividen} set={setDividen} min={0} max={2000} step={25} fmt={fmt} />
        <Slider label="Jumlah lot (1 lot = 100 lembar)" value={lot} set={setLot} min={1} max={500} step={1} fmt={(v) => `${v} lot`} />
      </div>

      <div className="mt-5 grid gap-3 sm:grid-cols-3">
        <Stat label="Capital gain" value={`${r.capitalGainPct.toFixed(1)}%`} tone="sky" />
        <Stat label="Dividend yield" value={`${r.dividendYield.toFixed(1)}%`} tone="violet" />
        <Stat label="Total return" value={`${r.totalReturnPct.toFixed(1)}%`} tone="emerald" />
      </div>

      <div className="mt-3 rounded-xl bg-canvas p-4 text-center text-sm">
        Modal {fmt(r.modal)} untuk {r.lembar.toLocaleString("id-ID")} lembar, laba total <b className="text-emerald-700">{fmt(r.labaRupiah)}</b>.
      </div>

      <p className="mt-3 text-xs text-ink-faint">
        Investor jangka panjang sering menghitung total return, bukan hanya kenaikan harga, karena dividen yang diinvestasikan ulang berkontribusi besar dalam jangka panjang.
      </p>
    </div>
  );
}

function Stat({ label, value, tone }: { label: string; value: string; tone: "sky" | "violet" | "emerald" }) {
  const map = { sky: "text-sky-700", violet: "text-violet-700", emerald: "text-emerald-700" };
  return (
    <div className="rounded-xl bg-canvas p-3 text-center">
      <div className="text-xs text-ink-faint">{label}</div>
      <div className={`text-xl font-extrabold tnum ${map[tone]}`}>{value}</div>
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
