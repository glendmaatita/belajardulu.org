import { useMemo, useState } from "react";
import { rupiah } from "../../lib/format";

// Aturan anggaran 50/30/20: 50% penghasilan untuk kebutuhan, 30% keinginan,
// 20% tabungan dan bayar utang. Panduan sederhana untuk pemula.
export function KalkulatorAnggaran() {
  const [gaji, setGaji] = useState(6_000_000);

  const r = useMemo(() => {
    return {
      kebutuhan: gaji * 0.5,
      keinginan: gaji * 0.3,
      tabungan: gaji * 0.2,
    };
  }, [gaji]);

  return (
    <div className="my-6 card p-5">
      <div className="mb-1 text-sm font-bold text-brand-700">🧮 Kalkulator Anggaran 50/30/20</div>
      <p className="mb-4 text-xs text-ink-faint">
        Aturan sederhana membagi penghasilan bulanan: 50% untuk kebutuhan pokok, 30% untuk keinginan, dan 20% untuk
        menabung serta membayar utang. Cocok untuk pemula yang baru mulai mengatur uang.
      </p>

      <div className="mb-4">
        <div className="mb-1 flex items-center justify-between">
          <span className="text-sm font-semibold text-ink-soft">Penghasilan bersih per bulan</span>
          <span className="tnum text-sm font-bold text-ink">{rupiah(gaji)}</span>
        </div>
        <input type="range" min={1_500_000} max={50_000_000} step={500_000} value={gaji} onChange={(e) => setGaji(Number(e.target.value))} className="h-2 w-full cursor-pointer appearance-none rounded-full bg-line accent-brand-600" />
      </div>

      <div className="grid gap-3 sm:grid-cols-3">
        <Box label="Kebutuhan (50%)" sub="Makan, sewa, transport, tagihan" value={rupiah(Math.round(r.kebutuhan))} color="text-sky-700" />
        <Box label="Keinginan (30%)" sub="Hiburan, jajan, langganan" value={rupiah(Math.round(r.keinginan))} color="text-amber-700" />
        <Box label="Tabungan & utang (20%)" sub="Dana darurat, investasi, cicilan" value={rupiah(Math.round(r.tabungan))} color="text-emerald-700" />
      </div>
      <p className="mt-3 rounded-lg bg-brand-50 px-3 py-2 text-sm text-brand-800">
        Kalau kebutuhan pokokmu melebihi 50%, itu tanda perlu menekan biaya atau menambah penghasilan. Porsi 20% untuk
        menabung adalah minimal, makin besar makin baik.
      </p>
    </div>
  );
}

function Box({ label, sub, value, color }: { label: string; sub: string; value: string; color: string }) {
  return (
    <div className="rounded-xl bg-canvas p-4">
      <div className="text-xs font-semibold text-ink-soft">{label}</div>
      <div className={`mt-1 text-lg font-extrabold tnum ${color}`}>{value}</div>
      <div className="text-[11px] text-ink-faint">{sub}</div>
    </div>
  );
}
