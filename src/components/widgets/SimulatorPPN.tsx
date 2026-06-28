import { useMemo, useState } from "react";
import { rupiah } from "../../lib/format";

const TARIF = 0.11; // PPN 11% (UU HPP)

export function SimulatorPPN() {
  const [jual, setJual] = useState(20_000_000); // penjualan kena pajak (DPP)
  const [beli, setBeli] = useState(12_000_000); // pembelian kena pajak (DPP)

  const r = useMemo(() => {
    const keluaran = jual * TARIF;
    const masukan = beli * TARIF;
    const selisih = keluaran - masukan;
    return {
      keluaran,
      masukan,
      hargaTermasuk: jual + keluaran,
      setor: Math.max(0, selisih),
      lebihBayar: Math.max(0, -selisih),
    };
  }, [jual, beli]);

  return (
    <div className="my-6 card p-5">
      <div className="mb-1 text-sm font-bold text-brand-700">🏷️ Simulator PPN (11%)</div>
      <p className="mb-4 text-xs text-ink-faint">
        PPN itu "dititipkan": kamu memungutnya dari pembeli (PPN Keluaran), lalu menyetor ke negara setelah dikurangi
        PPN yang kamu bayar saat belanja (PPN Masukan). Khusus PKP.
      </p>

      <Slider label="Penjualan bulan ini (sebelum PPN)" value={jual} set={setJual} max={100_000_000} step={1_000_000} />
      <Slider label="Pembelian/biaya kena PPN bulan ini" value={beli} set={setBeli} max={100_000_000} step={1_000_000} />

      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        <Card label="PPN Keluaran (dari pembeli)" value={rupiah(Math.round(r.keluaran))} accent="text-emerald-700" />
        <Card label="PPN Masukan (kamu bayar)" value={rupiah(Math.round(r.masukan))} accent="text-sky-700" />
      </div>

      <div className="mt-3 rounded-xl bg-slate-50 p-4">
        {r.setor > 0 ? (
          <p className="text-sm text-ink-soft">
            PPN yang harus <b>disetor ke negara</b> bulan ini ={" "}
            <b className="text-brand-700">{rupiah(Math.round(r.setor))}</b> (Keluaran − Masukan). Uang ini bukan
            milikmu, hanya numpang lewat.
          </p>
        ) : (
          <p className="text-sm text-ink-soft">
            PPN Masukan lebih besar, kamu <b>lebih bayar {rupiah(Math.round(r.lebihBayar))}</b> yang bisa dikompensasi
            ke bulan berikutnya.
          </p>
        )}
        <p className="mt-2 text-xs text-ink-faint">
          Harga jual yang ditagih ke pembeli (termasuk PPN): <b>{rupiah(Math.round(r.hargaTermasuk))}</b>.
        </p>
      </div>
    </div>
  );
}

function Slider({ label, value, set, max, step }: { label: string; value: number; set: (n: number) => void; max: number; step: number }) {
  return (
    <div className="mb-3">
      <div className="mb-1 flex items-center justify-between">
        <span className="text-sm font-semibold text-ink-soft">{label}</span>
        <span className="tnum text-sm font-bold text-ink">{rupiah(value)}</span>
      </div>
      <input
        type="range"
        min={0}
        max={max}
        step={step}
        value={value}
        onChange={(e) => set(Number(e.target.value))}
        className="h-2 w-full cursor-pointer appearance-none rounded-full bg-slate-200 accent-brand-600"
      />
    </div>
  );
}

function Card({ label, value, accent }: { label: string; value: string; accent: string }) {
  return (
    <div className="rounded-xl bg-slate-50 p-3">
      <div className="text-xs text-ink-faint">{label}</div>
      <div className={`text-lg font-extrabold tnum ${accent}`}>{value}</div>
    </div>
  );
}
