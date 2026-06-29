import { useState } from "react";
import { angka } from "../../lib/format";

// Proof of Work vs Proof of Stake: bagaimana hak menambahkan blok ditentukan dan berapa energinya.
export function SimulatorPoWvsPoS() {
  const [mode, setMode] = useState<"pow" | "pos">("pow");
  const [hashrate, setHashrate] = useState(8); // % dari total hashrate jaringan
  const [stake, setStake] = useState(8); // % dari total token yang di-stake

  // Angka energi bersifat ilustratif untuk menggambarkan perbedaan skala yang besar.
  const energiPerBlokPoW = 1_100_000; // kWh per blok (sangat boros)
  const energiPerBlokPoS = 0.7; // kWh per blok (sangat hemat)
  const hematPersen = (1 - energiPerBlokPoS / energiPerBlokPoW) * 100;

  const isPoW = mode === "pow";
  const share = isPoW ? hashrate : stake;

  return (
    <div className="my-6 card p-5">
      <div className="mb-1 text-sm font-bold text-brand-700">⛓️ Simulator Proof of Work vs Proof of Stake</div>
      <p className="mb-4 text-xs text-ink-faint">
        Dua cara jaringan blockchain memilih siapa yang berhak menambahkan blok berikutnya. Bandingkan peluang dan biaya energinya.
      </p>

      <div className="mb-4 grid grid-cols-2 gap-2">
        <button
          onClick={() => setMode("pow")}
          className={`rounded-xl border px-3 py-2 text-sm font-bold ${isPoW ? "border-amber-400 bg-amber-50 text-amber-700" : "border-line bg-canvas text-ink-faint"}`}
        >
          Proof of Work
        </button>
        <button
          onClick={() => setMode("pos")}
          className={`rounded-xl border px-3 py-2 text-sm font-bold ${!isPoW ? "border-emerald-400 bg-emerald-50 text-emerald-700" : "border-line bg-canvas text-ink-faint"}`}
        >
          Proof of Stake
        </button>
      </div>

      {isPoW ? (
        <Slider label="Hashrate penambangmu" value={hashrate} set={setHashrate} min={1} max={50} step={1} fmt={(v) => `${v}% jaringan`} />
      ) : (
        <Slider label="Token yang kamu stake" value={stake} set={setStake} min={1} max={50} step={1} fmt={(v) => `${v}% jaringan`} />
      )}

      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        <div className="rounded-xl bg-canvas p-4 text-center">
          <div className="text-xs text-ink-faint">Peluang menambang blok berikutnya</div>
          <div className="text-3xl font-extrabold tnum text-brand-700">{share}%</div>
          <div className="mt-1 text-xs text-ink-faint">
            {isPoW ? "Sebanding dengan daya komputasi (hashrate)." : "Sebanding dengan jumlah token yang dikunci."}
          </div>
        </div>
        <div className={`rounded-xl p-4 text-center ${isPoW ? "bg-amber-50" : "bg-emerald-50"}`}>
          <div className={`text-xs ${isPoW ? "text-amber-700" : "text-emerald-700"}`}>Energi per blok</div>
          <div className={`text-2xl font-extrabold tnum ${isPoW ? "text-amber-700" : "text-emerald-700"}`}>
            {isPoW ? `${angka(energiPerBlokPoW)} kWh` : `${energiPerBlokPoS} kWh`}
          </div>
          <div className={`mt-1 text-xs ${isPoW ? "text-amber-700" : "text-emerald-700"}`}>
            {isPoW ? "Boros: ribuan rumah tangga bisa hidup sehari." : "Hemat: setara mengisi daya ponsel."}
          </div>
        </div>
      </div>

      <div className="mt-4 rounded-xl bg-canvas p-4">
        <div className="mb-2 text-xs font-bold text-ink-soft">Perbandingan energi per blok (skala log)</div>
        <div className="mb-1 flex items-center gap-2">
          <span className="w-14 text-xs text-amber-700">PoW</span>
          <div className="h-4 flex-1 overflow-hidden rounded-full bg-line">
            <div className="h-full rounded-full bg-amber-500" style={{ width: "100%" }} />
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-14 text-xs text-emerald-700">PoS</span>
          <div className="h-4 flex-1 overflow-hidden rounded-full bg-line">
            <div className="h-full rounded-full bg-emerald-500" style={{ width: "1%" }} />
          </div>
        </div>
        <p className="mt-3 text-xs text-ink-faint">
          Proof of Stake memangkas konsumsi energi sekitar <b>{hematPersen.toFixed(2)}%</b> dibanding Proof of Work, karena tidak ada perlombaan tebak angka yang memboroskan listrik.
        </p>
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
      <input type="range" min={min} max={max} step={step} value={value} onChange={(e) => set(Number(e.target.value))} className="h-2 w-full cursor-pointer appearance-none rounded-full bg-line accent-brand-600" />
    </div>
  );
}
