import { useMemo, useState } from "react";
import { angka } from "../../lib/format";

// Bridge antar blockchain: pola lock-and-mint. Token dikunci di chain asal, wrapped token dicetak di chain tujuan.
export function SimulatorBridge() {
  const SALDO_AWAL = 100;
  const [jumlah, setJumlah] = useState(20); // jumlah token yang ingin di-bridge
  const [terkunci, setTerkunci] = useState(0); // token terkunci di Chain A
  const [wrapped, setWrapped] = useState(0); // wrapped token beredar di Chain B

  const saldoBebasA = SALDO_AWAL - terkunci; // token bebas di Chain A
  const invarianOk = terkunci === wrapped;

  const bridgeKeB = () => {
    if (jumlah <= 0 || jumlah > saldoBebasA) return;
    setTerkunci((v) => v + jumlah);
    setWrapped((v) => v + jumlah);
  };

  const bridgeBalikKeA = () => {
    if (jumlah <= 0 || jumlah > wrapped) return;
    setWrapped((v) => v - jumlah);
    setTerkunci((v) => v - jumlah);
  };

  const reset = () => {
    setTerkunci(0);
    setWrapped(0);
  };

  const bisaKeB = jumlah > 0 && jumlah <= saldoBebasA;
  const bisaKeA = jumlah > 0 && jumlah <= wrapped;

  const maxBar = useMemo(() => Math.max(SALDO_AWAL, 1), []);

  return (
    <div className="my-6 card p-5">
      <div className="mb-1 text-sm font-bold text-brand-700">🌉 Simulator Bridge Antar Chain</div>
      <p className="mb-4 text-xs text-ink-faint">
        Bridge memindahkan nilai antar blockchain dengan pola lock-and-mint. Token asli dikunci di chain asal, lalu wrapped token dicetak 1:1 di chain tujuan. Jumlah terkunci selalu sama dengan jumlah wrapped yang beredar.
      </p>

      <div className="mb-4">
        <div className="mb-1 flex items-center justify-between">
          <span className="text-sm font-semibold text-ink-soft">Jumlah token di-bridge</span>
          <span className="tnum text-sm font-bold text-ink">{angka(jumlah)} token</span>
        </div>
        <input type="range" min={1} max={SALDO_AWAL} step={1} value={jumlah} onChange={(e) => setJumlah(Number(e.target.value))} className="h-2 w-full cursor-pointer appearance-none rounded-full bg-line accent-brand-600" />
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        <div className="rounded-xl border border-line bg-canvas p-4">
          <div className="text-xs font-bold text-blue-700">Chain A (asal)</div>
          <div className="mt-2 text-xs text-ink-faint">Saldo bebas</div>
          <div className="text-xl font-extrabold tnum text-ink">{angka(saldoBebasA)} token</div>
          <div className="mt-2 text-xs text-ink-faint">Terkunci di kontrak</div>
          <div className="text-lg font-bold tnum text-amber-600">{angka(terkunci)} token</div>
          <div className="mt-2 h-3 overflow-hidden rounded-full bg-line">
            <div className="h-full bg-amber-500" style={{ width: `${(terkunci / maxBar) * 100}%` }} />
          </div>
        </div>
        <div className="rounded-xl border border-line bg-canvas p-4">
          <div className="text-xs font-bold text-violet-700">Chain B (tujuan)</div>
          <div className="mt-2 text-xs text-ink-faint">Wrapped token beredar</div>
          <div className="text-xl font-extrabold tnum text-violet-700">{angka(wrapped)} token</div>
          <div className="mt-2 text-xs text-ink-faint">Mewakili token asli di Chain A</div>
          <div className="mt-2 h-3 overflow-hidden rounded-full bg-line">
            <div className="h-full bg-violet-500" style={{ width: `${(wrapped / maxBar) * 100}%` }} />
          </div>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        <button onClick={bridgeKeB} disabled={!bisaKeB} className="rounded-xl bg-violet-600 px-4 py-2 text-sm font-bold text-white disabled:opacity-40">
          Bridge ke B (kunci &amp; mint)
        </button>
        <button onClick={bridgeBalikKeA} disabled={!bisaKeA} className="rounded-xl bg-blue-600 px-4 py-2 text-sm font-bold text-white disabled:opacity-40">
          Bridge balik ke A (burn &amp; buka kunci)
        </button>
        <button onClick={reset} className="rounded-xl border border-line bg-canvas px-4 py-2 text-sm font-bold text-ink-soft">
          Reset
        </button>
      </div>

      <div className={`mt-4 rounded-xl p-3 text-sm font-semibold ${invarianOk ? "bg-emerald-50 text-emerald-700" : "bg-rose-50 text-rose-700"}`}>
        Invarian 1:1 &rarr; terkunci ({angka(terkunci)}) {invarianOk ? "==" : "!="} wrapped ({angka(wrapped)}){" "}
        {invarianOk ? "Aman, setiap wrapped token dijamin satu token asli." : "Tidak seimbang."}
      </div>

      <p className="mt-3 text-xs text-ink-faint">
        Wrapped token hanya berharga karena ada token asli yang dikunci sebagai jaminan. Jika kamu burn wrapped di Chain B, kontrak baru membuka kunci token aslimu di Chain A. Inilah mengapa keamanan kontrak bridge sangat krusial.
      </p>
    </div>
  );
}
