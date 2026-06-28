import { useMemo, useState } from "react";
import { angka } from "../../lib/format";

// DSCR = CFADS / Debt Service. Ukuran kunci kelayakan utang project finance.
export function KalkulatorDSCR() {
  const [cfads, setCfads] = useState(150); // Rp miliar (Cash Flow Available for Debt Service)
  const [pokok, setPokok] = useState(80); // Rp miliar cicilan pokok/tahun
  const [bunga, setBunga] = useState(35); // Rp miliar bunga/tahun
  const minDSCR = 1.3;

  const r = useMemo(() => {
    const ds = pokok + bunga;
    const dscr = ds > 0 ? cfads / ds : Infinity;
    return { ds, dscr, bankable: dscr >= minDSCR };
  }, [cfads, pokok, bunga]);

  return (
    <div className="my-6 card p-5">
      <div className="mb-1 text-sm font-bold text-brand-700">🏗️ Kalkulator DSCR (Project Finance)</div>
      <p className="mb-4 text-xs text-ink-faint">
        DSCR (Debt Service Coverage Ratio) mengukur seberapa nyaman arus kas proyek menutup cicilan utang. Pemberi
        pinjaman biasanya minta DSCR minimal sekitar 1,3x.
      </p>

      <div className="grid gap-4 sm:grid-cols-3">
        <Slider label="CFADS (arus kas tersedia)" value={cfads} set={setCfads} min={0} max={400} step={5} />
        <Slider label="Cicilan pokok / tahun" value={pokok} set={setPokok} min={0} max={300} step={5} />
        <Slider label="Bunga / tahun" value={bunga} set={setBunga} min={0} max={150} step={5} />
      </div>

      <div className="mt-5 rounded-xl bg-canvas p-4 text-center">
        <div className="text-xs text-ink-faint">DSCR</div>
        <div className={`text-3xl font-extrabold tnum ${r.bankable ? "text-emerald-700" : "text-rose-600"}`}>{Number.isFinite(r.dscr) ? `${r.dscr.toFixed(2)}x` : "-"}</div>
        <div className={`text-sm font-semibold ${r.bankable ? "text-emerald-600" : "text-rose-500"}`}>
          {r.bankable ? "✓ Bankable (di atas 1,3x)" : "✗ Belum bankable (di bawah 1,3x)"}
        </div>
        <div className="mt-1 text-xs text-ink-faint">
          Total debt service = Rp{angka(r.ds)} miliar (pokok + bunga). DSCR 1,30 berarti arus kas 30% lebih besar dari
          kewajiban utang, jadi ada bantalan jika pendapatan turun.
        </div>
      </div>
    </div>
  );
}

function Slider({ label, value, set, min, max, step }: { label: string; value: number; set: (n: number) => void; min: number; max: number; step: number }) {
  return (
    <div>
      <div className="mb-1 flex items-center justify-between">
        <span className="text-sm font-semibold text-ink-soft">{label}</span>
        <span className="tnum text-sm font-bold text-ink">Rp{angka(value)} M</span>
      </div>
      <input type="range" min={min} max={max} step={step} value={value} onChange={(e) => set(Number(e.target.value))} className="h-2 w-full cursor-pointer appearance-none rounded-full bg-line accent-brand-600" />
    </div>
  );
}
