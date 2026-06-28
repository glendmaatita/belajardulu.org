import { useMemo, useState } from "react";
import { rupiah } from "../../lib/format";

// Landed cost impor: dari harga barang (FOB) sampai total biaya barang tiba di gudang.
// Komponen: CIF -> Bea Masuk -> PPN Impor -> PPh 22 Impor.
export function KalkulatorLandedCost() {
  const [fob, setFob] = useState(100_000_000); // nilai barang (FOB) dalam rupiah
  const [freight, setFreight] = useState(8_000_000); // ongkos angkut
  const [asuransi, setAsuransi] = useState(1_500_000); // premi asuransi
  const [beaMasuk, setBeaMasuk] = useState(10); // tarif bea masuk %
  const [punyaApi, setPunyaApi] = useState(true); // punya API => PPh 22 lebih rendah

  const r = useMemo(() => {
    const cif = fob + freight + asuransi;
    const bm = cif * (beaMasuk / 100);
    const dasarPajak = cif + bm; // nilai impor sebagai dasar PPN & PPh
    const ppn = dasarPajak * 0.11; // PPN impor 11%
    const tarifPph = punyaApi ? 0.025 : 0.075; // PPh 22: 2,5% (punya API) vs 7,5%
    const pph = dasarPajak * tarifPph;
    const totalPungutan = bm + ppn + pph;
    const landed = cif + totalPungutan;
    return { cif, bm, dasarPajak, ppn, pph, tarifPph, totalPungutan, landed };
  }, [fob, freight, asuransi, beaMasuk, punyaApi]);

  return (
    <div className="my-6 card p-5">
      <div className="mb-1 text-sm font-bold text-brand-700">📦 Kalkulator Landed Cost Impor</div>
      <p className="mb-4 text-xs text-ink-faint">
        Hitung total biaya barang impor sampai tiba: dari harga barang, ongkos angkut, asuransi, sampai bea masuk dan pajak impor.
      </p>

      <div className="grid gap-4 sm:grid-cols-2">
        <Slider label="Nilai barang (FOB)" value={fob} set={setFob} min={10_000_000} max={1_000_000_000} step={10_000_000} fmt={(v) => rupiah(v)} />
        <Slider label="Ongkos angkut (freight)" value={freight} set={setFreight} min={0} max={100_000_000} step={1_000_000} fmt={(v) => rupiah(v)} />
        <Slider label="Asuransi" value={asuransi} set={setAsuransi} min={0} max={50_000_000} step={500_000} fmt={(v) => rupiah(v)} />
        <Slider label="Tarif Bea Masuk" value={beaMasuk} set={setBeaMasuk} min={0} max={40} step={1} fmt={(v) => `${v}%`} />
      </div>

      <label className="mt-4 flex cursor-pointer items-center gap-2 text-sm">
        <input type="checkbox" checked={punyaApi} onChange={(e) => setPunyaApi(e.target.checked)} className="h-4 w-4 accent-brand-600" />
        <span className="font-semibold text-ink-soft">Punya API (Angka Pengenal Impor) &rarr; PPh 22 tarif lebih rendah</span>
      </label>

      <div className="mt-5 space-y-1.5 rounded-xl bg-slate-50 p-4 text-sm">
        <Row label="Nilai Pabean (CIF = FOB + Freight + Asuransi)" value={rupiah(Math.round(r.cif))} />
        <Row label={`Bea Masuk (${beaMasuk}% dari CIF)`} value={rupiah(Math.round(r.bm))} />
        <Row label="Dasar pengenaan PPN & PPh (CIF + Bea Masuk)" value={rupiah(Math.round(r.dasarPajak))} muted />
        <Row label="PPN Impor (11%)" value={rupiah(Math.round(r.ppn))} />
        <Row label={`PPh Pasal 22 Impor (${(r.tarifPph * 100).toFixed(1)}%)`} value={rupiah(Math.round(r.pph))} />
        <div className="my-1 border-t border-slate-200" />
        <Row label="Total pungutan negara (BM + PPN + PPh)" value={rupiah(Math.round(r.totalPungutan))} />
      </div>

      <div className="mt-3 rounded-xl bg-emerald-50 p-4 text-center">
        <div className="text-xs text-ink-faint">Total Landed Cost (barang siap di gudang)</div>
        <div className="text-3xl font-extrabold tnum text-emerald-700">{rupiah(Math.round(r.landed))}</div>
        <div className="mt-1 text-xs text-ink-faint">
          Pungutan negara sebesar {((r.totalPungutan / r.cif) * 100).toFixed(1)}% dari nilai pabean.
        </div>
      </div>
    </div>
  );
}

function Row({ label, value, muted }: { label: string; value: string; muted?: boolean }) {
  return (
    <div className="flex items-center justify-between">
      <span className={muted ? "text-ink-faint" : "text-ink-soft"}>{label}</span>
      <span className={`tnum font-bold ${muted ? "text-ink-faint" : "text-ink"}`}>{value}</span>
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
