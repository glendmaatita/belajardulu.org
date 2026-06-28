import { useMemo, useState } from "react";

// Order book sederhana: pasang order beli/jual, lihat apakah langsung match dengan sisi lawan.
type Order = { harga: number; lot: number };
const BIDS: Order[] = [
  { harga: 1000, lot: 30 },
  { harga: 995, lot: 80 },
  { harga: 990, lot: 150 },
];
const ASKS: Order[] = [
  { harga: 1005, lot: 40 },
  { harga: 1010, lot: 100 },
  { harga: 1015, lot: 70 },
];

export function SimulatorOrderBook() {
  const [sisi, setSisi] = useState<"beli" | "jual">("beli");
  const [harga, setHarga] = useState(1005);
  const [lot, setLot] = useState(20);

  const r = useMemo(() => {
    // beli match bila harga >= ask terendah; jual match bila harga <= bid tertinggi
    const bestAsk = ASKS[0].harga;
    const bestBid = BIDS[0].harga;
    let match = false;
    let lawan = 0;
    if (sisi === "beli") {
      match = harga >= bestAsk;
      lawan = bestAsk;
    } else {
      match = harga <= bestBid;
      lawan = bestBid;
    }
    return { match, lawan, bestAsk, bestBid, spread: bestAsk - bestBid };
  }, [sisi, harga]);

  return (
    <div className="my-6 card p-5">
      <div className="mb-1 text-sm font-bold text-brand-700">📊 Simulator Order Book</div>
      <p className="mb-4 text-xs text-ink-faint">
        Pasang order dan lihat apakah langsung tereksekusi. Order beli cocok bila harganya mencapai harga jual terendah (best ask), dan sebaliknya.
      </p>

      <div className="grid gap-3 sm:grid-cols-2">
        <div className="rounded-xl bg-emerald-50 p-3">
          <div className="mb-1 text-center text-xs font-bold text-emerald-700">BELI (Bid)</div>
          {BIDS.map((b, i) => (
            <div key={i} className="flex justify-between text-sm">
              <span className="tnum text-emerald-700">{b.harga}</span>
              <span className="tnum text-ink-faint">{b.lot} lot</span>
            </div>
          ))}
        </div>
        <div className="rounded-xl bg-rose-50 p-3">
          <div className="mb-1 text-center text-xs font-bold text-rose-700">JUAL (Ask)</div>
          {ASKS.map((a, i) => (
            <div key={i} className="flex justify-between text-sm">
              <span className="tnum text-rose-700">{a.harga}</span>
              <span className="tnum text-ink-faint">{a.lot} lot</span>
            </div>
          ))}
        </div>
      </div>

      <p className="mt-2 text-center text-xs text-ink-faint">
        Best bid <b>{r.bestBid}</b> &middot; Best ask <b>{r.bestAsk}</b> &middot; Spread <b>{r.spread}</b>
      </p>

      <div className="mt-3 flex gap-2">
        <button onClick={() => setSisi("beli")} className={`flex-1 rounded-lg py-1.5 text-sm font-bold ${sisi === "beli" ? "bg-emerald-500 text-white" : "bg-slate-100 text-ink-soft"}`}>Order Beli</button>
        <button onClick={() => setSisi("jual")} className={`flex-1 rounded-lg py-1.5 text-sm font-bold ${sisi === "jual" ? "bg-rose-500 text-white" : "bg-slate-100 text-ink-soft"}`}>Order Jual</button>
      </div>

      <div className="mt-3 grid gap-4 sm:grid-cols-2">
        <Slider label="Harga order" value={harga} set={setHarga} min={985} max={1020} step={1} fmt={(v) => `${v}`} />
        <Slider label="Jumlah lot" value={lot} set={setLot} min={1} max={200} step={1} fmt={(v) => `${v} lot`} />
      </div>

      <div className={`mt-3 rounded-xl p-4 text-center text-sm font-bold ${r.match ? "bg-emerald-50 text-emerald-800" : "bg-amber-50 text-amber-800"}`}>
        {r.match
          ? `Order langsung tereksekusi (match) di harga ${r.lawan}.`
          : `Belum match. Order masuk antrean menunggu harga ${sisi === "beli" ? "jual turun ke" : "beli naik ke"} ${harga}.`}
      </div>
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
