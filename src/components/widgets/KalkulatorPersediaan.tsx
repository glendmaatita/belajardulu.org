import { useMemo, useState } from "react";
import { rupiah, angka } from "../../lib/format";

interface Tx {
  id: number;
  tipe: "Beli" | "Jual";
  qty: number;
  harga: number; // harga beli per unit (untuk Beli)
}

const initial: Tx[] = [
  { id: 1, tipe: "Beli", qty: 100, harga: 10_000 },
  { id: 2, tipe: "Beli", qty: 100, harga: 12_000 },
  { id: 3, tipe: "Jual", qty: 120, harga: 0 },
  { id: 4, tipe: "Beli", qty: 50, harga: 15_000 },
  { id: 5, tipe: "Jual", qty: 80, harga: 0 },
];

export function KalkulatorPersediaan() {
  const [txs, setTxs] = useState<Tx[]>(initial);
  const [nextId, setNextId] = useState(6);

  const result = useMemo(() => compute(txs), [txs]);

  function update(id: number, patch: Partial<Tx>) {
    setTxs((t) => t.map((x) => (x.id === id ? { ...x, ...patch } : x)));
  }
  function remove(id: number) {
    setTxs((t) => t.filter((x) => x.id !== id));
  }
  function add() {
    setTxs((t) => [...t, { id: nextId, tipe: "Beli", qty: 10, harga: 10_000 }]);
    setNextId((n) => n + 1);
  }

  return (
    <div className="my-6 card p-5">
      <div className="mb-4 text-sm font-bold text-violet-700">📦 Kalkulator Persediaan: FIFO vs Rata-rata</div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="text-xs text-ink-faint">
            <tr>
              <th className="px-2 py-1 text-left">Transaksi</th>
              <th className="px-2 py-1 text-right">Qty</th>
              <th className="px-2 py-1 text-right">Harga Beli/unit</th>
              <th className="px-2 py-1"></th>
            </tr>
          </thead>
          <tbody>
            {txs.map((tx) => (
              <tr key={tx.id} className="border-t border-slate-100">
                <td className="px-2 py-1.5">
                  <select
                    value={tx.tipe}
                    onChange={(e) => update(tx.id, { tipe: e.target.value as Tx["tipe"] })}
                    className="rounded-md border border-slate-300 px-2 py-1 text-sm"
                  >
                    <option>Beli</option>
                    <option>Jual</option>
                  </select>
                </td>
                <td className="px-2 py-1.5 text-right">
                  <input
                    type="number"
                    value={tx.qty}
                    min={0}
                    onChange={(e) => update(tx.id, { qty: Math.max(0, Number(e.target.value)) })}
                    className="w-20 rounded-md border border-slate-300 px-2 py-1 text-right text-sm tnum"
                  />
                </td>
                <td className="px-2 py-1.5 text-right">
                  {tx.tipe === "Beli" ? (
                    <input
                      type="number"
                      value={tx.harga}
                      min={0}
                      step={500}
                      onChange={(e) => update(tx.id, { harga: Math.max(0, Number(e.target.value)) })}
                      className="w-28 rounded-md border border-slate-300 px-2 py-1 text-right text-sm tnum"
                    />
                  ) : (
                    <span className="text-ink-faint">-</span>
                  )}
                </td>
                <td className="px-2 py-1.5 text-right">
                  <button onClick={() => remove(tx.id)} className="text-rose-400 hover:text-rose-600" title="Hapus">
                    ✕
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button onClick={add} className="btn-ghost mt-3 text-xs">
        + Tambah transaksi
      </button>

      {result.error ? (
        <div className="mt-4 rounded-xl bg-rose-50 p-3 text-sm text-rose-600">⚠️ {result.error}</div>
      ) : (
        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          <ResultCard
            title="FIFO"
            accent="text-emerald-700 bg-emerald-50"
            cogs={result.fifoCogs}
            ending={result.fifoEnding}
            units={result.endUnits}
          />
          <ResultCard
            title="Rata-rata Tertimbang"
            accent="text-blue-700 bg-blue-50"
            cogs={result.avgCogs}
            ending={result.avgEnding}
            units={result.endUnits}
          />
        </div>
      )}
      <p className="mt-3 text-xs text-ink-faint">
        Total unit dibeli: {angka(result.boughtUnits)} · terjual: {angka(result.soldUnits)} · sisa: {angka(result.endUnits)}
      </p>
    </div>
  );
}

function ResultCard({
  title,
  accent,
  cogs,
  ending,
  units,
}: {
  title: string;
  accent: string;
  cogs: number;
  ending: number;
  units: number;
}) {
  return (
    <div className="overflow-hidden rounded-xl border border-slate-200">
      <div className={`px-3 py-2 text-sm font-bold ${accent}`}>{title}</div>
      <dl className="divide-y divide-slate-100 text-sm">
        <Row label="HPP (barang terjual)" value={rupiah(Math.round(cogs))} />
        <Row label={`Persediaan akhir (${angka(units)} unit)`} value={rupiah(Math.round(ending))} />
      </dl>
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between px-3 py-2">
      <dt className="text-ink-faint">{label}</dt>
      <dd className="font-bold tnum">{value}</dd>
    </div>
  );
}

function compute(txs: Tx[]) {
  const boughtUnits = txs.filter((t) => t.tipe === "Beli").reduce((s, t) => s + t.qty, 0);
  const soldUnits = txs.filter((t) => t.tipe === "Jual").reduce((s, t) => s + t.qty, 0);
  const endUnits = boughtUnits - soldUnits;
  const base = { boughtUnits, soldUnits, endUnits };

  if (soldUnits > boughtUnits) {
    return { ...base, error: "Unit terjual melebihi unit tersedia. Kurangi penjualan.", fifoCogs: 0, fifoEnding: 0, avgCogs: 0, avgEnding: 0 };
  }

  // FIFO with layers
  const layers: { qty: number; harga: number }[] = [];
  let fifoCogs = 0;
  for (const tx of txs) {
    if (tx.tipe === "Beli") {
      layers.push({ qty: tx.qty, harga: tx.harga });
    } else {
      let need = tx.qty;
      while (need > 0 && layers.length) {
        const layer = layers[0];
        const take = Math.min(need, layer.qty);
        fifoCogs += take * layer.harga;
        layer.qty -= take;
        need -= take;
        if (layer.qty === 0) layers.shift();
      }
    }
  }
  const fifoEnding = layers.reduce((s, l) => s + l.qty * l.harga, 0);

  // Weighted average (periodic)
  const totalCost = txs.filter((t) => t.tipe === "Beli").reduce((s, t) => s + t.qty * t.harga, 0);
  const avgUnit = boughtUnits > 0 ? totalCost / boughtUnits : 0;
  const avgCogs = avgUnit * soldUnits;
  const avgEnding = avgUnit * endUnits;

  return { ...base, error: "", fifoCogs, fifoEnding, avgCogs, avgEnding };
}
