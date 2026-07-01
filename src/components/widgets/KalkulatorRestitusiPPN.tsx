import { useMemo, useState } from "react";
import { rupiah } from "../../lib/format";

const TARIF_PPN = 0.11; // PPN 11%

// PPN yang disetor = pajak keluaran - pajak masukan. Jika masukan lebih besar
// (mis. eksportir atau perusahaan padat investasi), terjadi lebih bayar yang
// dapat direstitusi atau dikompensasi ke masa berikutnya.
export function KalkulatorRestitusiPPN() {
  const [penjualan, setPenjualan] = useState(2_000_000_000); // DPP penjualan kena PPN
  const [pembelian, setPembelian] = useState(1_500_000_000); // DPP pembelian dengan faktur masukan
  const [tarifEkspor, setTarifEkspor] = useState(false); // penjualan ekspor (PPN 0%)

  const r = useMemo(() => {
    const keluaran = tarifEkspor ? 0 : penjualan * TARIF_PPN; // ekspor dikenai 0%
    const masukan = pembelian * TARIF_PPN;
    const selisih = keluaran - masukan; // positif = kurang bayar, negatif = lebih bayar
    return { keluaran, masukan, selisih };
  }, [penjualan, pembelian, tarifEkspor]);

  const lebihBayar = r.selisih < 0;

  return (
    <div className="my-6 card p-5">
      <div className="mb-1 text-sm font-bold text-brand-700">🧾 Kalkulator PPN & Restitusi</div>
      <p className="mb-4 text-xs text-ink-faint">
        PPN yang disetor = pajak keluaran (atas penjualan) dikurangi pajak masukan (atas pembelian). Jika masukan
        lebih besar, ada lebih bayar yang bisa direstitusi atau dikompensasi.
      </p>

      <Slider label="DPP penjualan setahun" value={penjualan} min={100_000_000} max={10_000_000_000} step={100_000_000} onChange={setPenjualan} />
      <Slider label="DPP pembelian (ada faktur masukan)" value={pembelian} min={0} max={10_000_000_000} step={100_000_000} onChange={setPembelian} />

      <label className="mb-4 flex cursor-pointer items-center gap-2 text-sm font-semibold text-ink-soft">
        <input type="checkbox" checked={tarifEkspor} onChange={(e) => setTarifEkspor(e.target.checked)} className="h-4 w-4 accent-brand-600" />
        Penjualan berupa ekspor (PPN 0%)
      </label>

      <div className="grid gap-3 sm:grid-cols-3">
        <Box label="Pajak keluaran" value={rupiah(Math.round(r.keluaran))} color="text-sky-700" />
        <Box label="Pajak masukan" value={rupiah(Math.round(r.masukan))} color="text-violet-700" />
        <div className={`rounded-xl p-4 ${lebihBayar ? "bg-emerald-50" : "bg-canvas"}`}>
          <div className="text-xs text-ink-faint">{lebihBayar ? "Lebih bayar (restitusi)" : "Kurang bayar (disetor)"}</div>
          <div className={`text-lg font-extrabold tnum ${lebihBayar ? "text-emerald-700" : "text-rose-700"}`}>{rupiah(Math.round(Math.abs(r.selisih)))}</div>
        </div>
      </div>
      <p className="mt-3 rounded-lg bg-brand-50 px-3 py-2 text-sm text-brand-800">
        {lebihBayar
          ? "Lebih bayar dapat diminta kembali (restitusi) atau dikompensasi. Eksportir sering berposisi lebih bayar karena keluarannya 0%."
          : "Kurang bayar disetor ke kas negara sebelum batas waktu pelaporan SPT Masa PPN."}
      </p>
    </div>
  );
}

function Box({ label, value, color }: { label: string; value: string; color: string }) {
  return (
    <div className="rounded-xl bg-canvas p-4">
      <div className="text-xs text-ink-faint">{label}</div>
      <div className={`text-lg font-extrabold tnum ${color}`}>{value}</div>
    </div>
  );
}

function Slider({ label, value, min, max, step, onChange }: { label: string; value: number; min: number; max: number; step: number; onChange: (n: number) => void }) {
  return (
    <div className="mb-3">
      <div className="mb-1 flex items-center justify-between">
        <span className="text-sm font-semibold text-ink-soft">{label}</span>
        <span className="tnum text-sm font-bold text-ink">{rupiah(value)}</span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="h-2 w-full cursor-pointer appearance-none rounded-full bg-line accent-brand-600"
      />
    </div>
  );
}
