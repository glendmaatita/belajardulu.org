import { useMemo, useState } from "react";
import { rupiah } from "../../lib/format";

// Demurrage (kontainer terlalu lama di pelabuhan) & detention (telat kembalikan ke pelayaran).
// Keduanya sering bertarif progresif: makin lama makin mahal per hari.
export function KalkulatorDemurrage() {
  const [bebas, setBebas] = useState(5); // free time (hari)
  const [totalHari, setTotalHari] = useState(12); // total hari pemakaian
  const [tarifAwal, setTarifAwal] = useState(500_000); // tarif/hari tier 1
  const [tarifLanjut, setTarifLanjut] = useState(1_000_000); // tarif/hari setelah beberapa hari

  const r = useMemo(() => {
    const hariKena = Math.max(0, totalHari - bebas);
    // tier: 4 hari pertama tarif awal, sisanya tarif lanjut
    const tier1 = Math.min(hariKena, 4);
    const tier2 = Math.max(0, hariKena - 4);
    const biaya = tier1 * tarifAwal + tier2 * tarifLanjut;
    return { hariKena, tier1, tier2, biaya };
  }, [bebas, totalHari, tarifAwal, tarifLanjut]);

  return (
    <div className="my-6 card p-5">
      <div className="mb-1 text-sm font-bold text-brand-700">⏱️ Kalkulator Demurrage & Detention</div>
      <p className="mb-4 text-xs text-ink-faint">
        Kontainer yang terlalu lama tertahan menimbulkan biaya yang sering progresif. Lihat berapa besar bila clearance terlambat.
      </p>

      <div className="grid gap-4 sm:grid-cols-2">
        <Slider label="Free time (bebas biaya)" value={bebas} set={setBebas} min={0} max={10} step={1} fmt={(v) => `${v} hari`} />
        <Slider label="Total hari pemakaian" value={totalHari} set={setTotalHari} min={1} max={30} step={1} fmt={(v) => `${v} hari`} />
        <Slider label="Tarif 4 hari pertama" value={tarifAwal} set={setTarifAwal} min={100_000} max={2_000_000} step={100_000} fmt={(v) => rupiah(v)} />
        <Slider label="Tarif hari berikutnya" value={tarifLanjut} set={setTarifLanjut} min={200_000} max={4_000_000} step={100_000} fmt={(v) => rupiah(v)} />
      </div>

      <div className="mt-5 space-y-1.5 rounded-xl bg-canvas p-4 text-sm">
        <Row label="Hari kena biaya (total - free time)" value={`${r.hariKena} hari`} />
        <Row label={`Tier 1 (${r.tier1} hari)`} value={rupiah(r.tier1 * tarifAwal)} />
        <Row label={`Tier 2 (${r.tier2} hari)`} value={rupiah(r.tier2 * tarifLanjut)} />
      </div>

      <div className="mt-3 rounded-xl bg-rose-50 p-4 text-center">
        <div className="text-xs text-ink-faint">Total biaya demurrage/detention</div>
        <div className="text-2xl font-extrabold tnum text-rose-700">{rupiah(Math.round(r.biaya))}</div>
      </div>

      <p className="mt-3 text-xs text-ink-faint">
        Biaya ini bisa membengkak diam-diam. Importir yang menyiapkan dokumen lengkap dan mempercepat clearance menghindari pungutan yang tidak perlu ini.
      </p>
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-ink-soft">{label}</span>
      <span className="tnum font-bold text-ink">{value}</span>
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
