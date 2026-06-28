import { useMemo, useState } from "react";
import { rupiah } from "../../lib/format";

// Fasilitas fiskal (KITE / Kawasan Berikat): bea masuk & PDRI atas bahan baku impor
// ditangguhkan/dibebaskan jika hasilnya diekspor. Bandingkan biaya dengan vs tanpa fasilitas.
export function SimulatorFasilitasFiskal() {
  const [cif, setCif] = useState(100_000_000); // nilai impor bahan baku
  const [beaMasuk, setBeaMasuk] = useState(10); // tarif bea masuk %
  const [porsiEkspor, setPorsiEkspor] = useState(80); // % hasil yang diekspor

  const r = useMemo(() => {
    const bm = cif * (beaMasuk / 100);
    const ppn = (cif + bm) * 0.11;
    const pdri = ppn; // sederhana: PDRI = PPN impor
    const tanpaFasilitas = bm + pdri;
    // dengan fasilitas: pungutan atas porsi yang diekspor dibebaskan; sisanya (dijual lokal) tetap kena
    const porsiLokal = 1 - porsiEkspor / 100;
    const denganFasilitas = tanpaFasilitas * porsiLokal;
    const hemat = tanpaFasilitas - denganFasilitas;
    return { bm, pdri, tanpaFasilitas, denganFasilitas, hemat };
  }, [cif, beaMasuk, porsiEkspor]);

  return (
    <div className="my-6 card p-5">
      <div className="mb-1 text-sm font-bold text-brand-700">🏭 Simulator Fasilitas Fiskal (KITE / Kawasan Berikat)</div>
      <p className="mb-4 text-xs text-ink-faint">
        Eksportir bisa membebaskan bea masuk & pajak impor atas bahan baku yang diolah lalu diekspor. Lihat penghematannya.
      </p>

      <div className="grid gap-4 sm:grid-cols-3">
        <Slider label="Nilai impor bahan baku (CIF)" value={cif} set={setCif} min={10_000_000} max={1_000_000_000} step={10_000_000} fmt={(v) => rupiah(v)} />
        <Slider label="Tarif bea masuk" value={beaMasuk} set={setBeaMasuk} min={0} max={30} step={1} fmt={(v) => `${v}%`} />
        <Slider label="Porsi hasil diekspor" value={porsiEkspor} set={setPorsiEkspor} min={0} max={100} step={5} fmt={(v) => `${v}%`} />
      </div>

      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        <div className="rounded-xl bg-amber-50 p-4 text-center">
          <div className="text-xs text-ink-faint">Tanpa fasilitas (bayar penuh)</div>
          <div className="text-xl font-extrabold tnum text-amber-700">{rupiah(Math.round(r.tanpaFasilitas))}</div>
        </div>
        <div className="rounded-xl bg-emerald-50 p-4 text-center">
          <div className="text-xs text-ink-faint">Dengan fasilitas</div>
          <div className="text-xl font-extrabold tnum text-emerald-700">{rupiah(Math.round(r.denganFasilitas))}</div>
        </div>
      </div>

      <div className="mt-3 rounded-xl bg-canvas p-4 text-center">
        <div className="text-xs text-ink-faint">Penghematan pungutan impor</div>
        <div className="text-2xl font-extrabold tnum text-emerald-700">{rupiah(Math.round(r.hemat))}</div>
      </div>

      <p className="mt-3 text-xs text-ink-faint">
        Makin besar porsi yang diekspor, makin besar penghematannya. Bagian yang dijual ke pasar lokal tetap dikenai bea dan pajak. Fasilitas ini menuntut pencatatan (IT Inventory) yang rapi.
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
