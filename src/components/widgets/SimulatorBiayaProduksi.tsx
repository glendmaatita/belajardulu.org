import { useMemo, useState } from "react";
import { rupiah } from "../../lib/format";

// Biaya produksi: total = biaya tetap + biaya variabel. Hitung biaya rata-rata (ATC) per unit.
export function SimulatorBiayaProduksi() {
  const [fc, setFc] = useState(10_000_000); // biaya tetap
  const [vcPerUnit, setVcPerUnit] = useState(20_000); // biaya variabel per unit
  const [q, setQ] = useState(500); // jumlah produksi

  const r = useMemo(() => {
    const vc = vcPerUnit * q;
    const tc = fc + vc;
    const atc = q > 0 ? tc / q : 0;
    const afc = q > 0 ? fc / q : 0;
    const avc = vcPerUnit;
    return { vc, tc, atc, afc, avc };
  }, [fc, vcPerUnit, q]);

  return (
    <div className="my-6 card p-5">
      <div className="mb-1 text-sm font-bold text-brand-700">🏭 Simulator Biaya Produksi</div>
      <p className="mb-4 text-xs text-ink-faint">
        Total biaya = biaya tetap + biaya variabel. Saat produksi naik, biaya tetap tersebar ke lebih banyak unit sehingga biaya rata-rata turun (skala ekonomi).
      </p>

      <div className="grid gap-4 sm:grid-cols-3">
        <Slider label="Biaya tetap (FC)" value={fc} set={setFc} min={1_000_000} max={50_000_000} step={1_000_000} fmt={(v) => rupiah(v)} />
        <Slider label="Biaya variabel / unit" value={vcPerUnit} set={setVcPerUnit} min={5_000} max={100_000} step={5_000} fmt={(v) => rupiah(v)} />
        <Slider label="Jumlah produksi (Q)" value={q} set={setQ} min={50} max={3000} step={50} fmt={(v) => `${v} unit`} />
      </div>

      <div className="mt-5 space-y-1.5 rounded-xl bg-canvas p-4 text-sm">
        <Row label="Biaya variabel total (VC)" value={rupiah(r.vc)} />
        <Row label="Biaya total (TC = FC + VC)" value={rupiah(r.tc)} />
        <Row label="Biaya tetap rata-rata (AFC)" value={rupiah(Math.round(r.afc))} />
        <Row label="Biaya variabel rata-rata (AVC)" value={rupiah(Math.round(r.avc))} />
      </div>

      <div className="mt-3 rounded-xl bg-emerald-50 p-4 text-center">
        <div className="text-xs text-ink-faint">Biaya rata-rata per unit (ATC)</div>
        <div className="text-2xl font-extrabold tnum text-emerald-700">{rupiah(Math.round(r.atc))}</div>
        <div className="mt-1 text-xs text-ink-faint">ATC = AFC + AVC, turun saat produksi membesar (skala ekonomi).</div>
      </div>

      <p className="mt-3 text-xs text-ink-faint">
        Harga jual harus di atas ATC agar perusahaan untung. Naikkan Q dan perhatikan ATC menurun karena biaya tetap dibagi lebih banyak unit.
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
