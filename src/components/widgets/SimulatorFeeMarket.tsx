import { useMemo, useState } from "react";

type Tx = { id: string; fee: number; size: number };

// Beberapa preset antrian transaksi (mempool). Indeks dipilih lewat state, bukan Math.random.
const PRESETS: Tx[][] = [
  [
    { id: "tx-A", fee: 12, size: 1 },
    { id: "tx-B", fee: 45, size: 1 },
    { id: "tx-C", fee: 8, size: 1 },
    { id: "tx-D", fee: 30, size: 1 },
    { id: "tx-E", fee: 22, size: 1 },
    { id: "tx-F", fee: 60, size: 1 },
    { id: "tx-G", fee: 15, size: 1 },
  ],
  [
    { id: "tx-A", fee: 5, size: 1 },
    { id: "tx-B", fee: 7, size: 1 },
    { id: "tx-C", fee: 90, size: 1 },
    { id: "tx-D", fee: 11, size: 1 },
    { id: "tx-E", fee: 9, size: 1 },
    { id: "tx-F", fee: 6, size: 1 },
    { id: "tx-G", fee: 40, size: 1 },
  ],
  [
    { id: "tx-A", fee: 25, size: 1 },
    { id: "tx-B", fee: 25, size: 1 },
    { id: "tx-C", fee: 50, size: 1 },
    { id: "tx-D", fee: 18, size: 1 },
    { id: "tx-E", fee: 70, size: 1 },
    { id: "tx-F", fee: 33, size: 1 },
    { id: "tx-G", fee: 10, size: 1 },
  ],
];

// Pasar biaya / mempool: penambang memilih transaksi dengan fee tertinggi sampai blok penuh.
export function SimulatorFeeMarket() {
  const [presetIdx, setPresetIdx] = useState(0);
  const [kapasitas, setKapasitas] = useState(4); // berapa transaksi muat dalam satu blok

  const txs = PRESETS[presetIdx];

  const r = useMemo(() => {
    const urut = [...txs].sort((a, b) => b.fee - a.fee);
    const masukIds = new Set(urut.slice(0, kapasitas).map((t) => t.id));
    const totalFee = urut.slice(0, kapasitas).reduce((s, t) => s + t.fee, 0);
    const feeBatas = urut[Math.min(kapasitas, urut.length) - 1]?.fee ?? 0;
    return { urut, masukIds, totalFee, feeBatas };
  }, [txs, kapasitas]);

  const maxFee = Math.max(...txs.map((t) => t.fee));

  return (
    <div className="my-6 card p-5">
      <div className="mb-1 text-sm font-bold text-brand-700">Simulator Pasar Biaya (Mempool)</div>
      <p className="mb-4 text-xs text-ink-faint">
        Transaksi yang belum dikonfirmasi menunggu di mempool. Penambang memilih yang menawarkan fee per vByte tertinggi
        lebih dulu, sampai kapasitas blok penuh. Saat jaringan ramai, fee tinggi diprioritaskan.
      </p>

      <div className="grid gap-4 sm:grid-cols-2">
        <Slider label="Kapasitas blok" value={kapasitas} set={setKapasitas} min={1} max={txs.length} step={1} fmt={(v) => `${v} transaksi`} />
        <div className="flex items-end">
          <button
            type="button"
            onClick={() => setPresetIdx((i) => (i + 1) % PRESETS.length)}
            className="rounded-full bg-brand-600 px-4 py-2 text-sm font-bold text-white"
          >
            Transaksi baru
          </button>
        </div>
      </div>

      <div className="mt-5 space-y-2">
        {r.urut.map((t) => {
          const masuk = r.masukIds.has(t.id);
          return (
            <div key={t.id} className="flex items-center gap-3">
              <span className="w-12 text-xs font-semibold text-ink-soft">{t.id}</span>
              <div className="h-6 flex-1 overflow-hidden rounded-lg bg-line">
                <div
                  className={`flex h-full items-center justify-end rounded-lg px-2 text-xs font-bold text-white ${masuk ? "bg-emerald-500" : "bg-slate-400"}`}
                  style={{ width: `${(t.fee / maxFee) * 100}%` }}
                >
                  {t.fee} sat/vB
                </div>
              </div>
              <span className={`w-24 text-right text-xs font-bold ${masuk ? "text-emerald-700" : "text-ink-faint"}`}>
                {masuk ? "Masuk blok" : "Menunggu"}
              </span>
            </div>
          );
        })}
      </div>

      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        <div className="rounded-xl border border-line bg-canvas p-3 text-center">
          <div className="text-xs text-ink-faint">Total fee yang dipungut penambang</div>
          <div className="text-lg font-bold tnum text-emerald-700">{r.totalFee} sat/vB</div>
        </div>
        <div className="rounded-xl border border-line bg-canvas p-3 text-center">
          <div className="text-xs text-ink-faint">Fee minimum agar masuk blok</div>
          <div className="text-lg font-bold tnum text-amber-700">{r.feeBatas} sat/vB</div>
        </div>
      </div>

      <p className="mt-3 text-xs text-ink-faint">
        Naikkan kapasitas blok dan lihat transaksi fee rendah ikut masuk. Bila blok sempit, hanya penawar fee tertinggi
        yang lolos, sisanya tetap menunggu di mempool.
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
