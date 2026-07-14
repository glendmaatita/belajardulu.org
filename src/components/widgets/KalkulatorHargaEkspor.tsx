import { useMemo, useState } from "react";
import { rupiah } from "../../lib/format";

// Menyusun harga ekspor untuk eksportir non-produsen: mulai dari harga beli ke
// produsen lokal, tambah biaya ekspor lokal dan margin (jadi harga FOB), lalu
// tambah freight + asuransi untuk mendapat harga CIF. Ditampilkan per unit,
// total, dan setara USD memakai kurs.
export function KalkulatorHargaEkspor() {
  const [hargaBeli, setHargaBeli] = useState(40_000); // harga beli per unit dari produsen (Rp)
  const [jumlah, setJumlah] = useState(1_000); // jumlah unit
  const [biayaLokal, setBiayaLokal] = useState(6_000); // biaya ekspor lokal per unit (packing, trucking, dokumen)
  const [margin, setMargin] = useState(20); // margin eksportir %
  const [freightAsuransi, setFreightAsuransi] = useState(9_000_000); // freight + asuransi total (Rp) untuk CIF
  const [kurs, setKurs] = useState(16_000); // kurs Rp per USD

  const r = useMemo(() => {
    const modalPerUnit = hargaBeli + biayaLokal;
    const fobPerUnit = modalPerUnit * (1 + margin / 100);
    const marginPerUnit = fobPerUnit - modalPerUnit;
    const fobTotal = fobPerUnit * jumlah;
    const cifTotal = fobTotal + freightAsuransi;
    return { modalPerUnit, fobPerUnit, marginPerUnit, fobTotal, cifTotal };
  }, [hargaBeli, jumlah, biayaLokal, margin, freightAsuransi]);

  const usd = (rp: number) => `US$ ${(rp / kurs).toLocaleString("id-ID", { maximumFractionDigits: 0 })}`;

  return (
    <div className="my-6 card p-5">
      <div className="mb-1 text-sm font-bold text-brand-700">🏷️ Kalkulator Harga Ekspor</div>
      <p className="mb-4 text-xs text-ink-faint">
        Kamu membeli dari produsen lokal, bukan memproduksi sendiri. Susun harga: harga beli + biaya ekspor + margin menjadi harga FOB, lalu tambah freight dan asuransi menjadi harga CIF.
      </p>

      <div className="grid gap-4 sm:grid-cols-2">
        <Slider label="Harga beli ke produsen / unit" value={hargaBeli} set={setHargaBeli} min={5_000} max={500_000} step={1_000} fmt={(v) => rupiah(v)} />
        <Slider label="Jumlah unit" value={jumlah} set={setJumlah} min={50} max={20_000} step={50} fmt={(v) => `${v.toLocaleString("id-ID")} unit`} />
        <Slider label="Biaya ekspor lokal / unit" value={biayaLokal} set={setBiayaLokal} min={0} max={50_000} step={500} fmt={(v) => rupiah(v)} />
        <Slider label="Margin eksportir" value={margin} set={setMargin} min={0} max={60} step={1} fmt={(v) => `${v}%`} />
        <Slider label="Freight + asuransi (total)" value={freightAsuransi} set={setFreightAsuransi} min={0} max={80_000_000} step={500_000} fmt={(v) => rupiah(v)} />
        <Slider label="Kurs (Rp per US$)" value={kurs} set={setKurs} min={13_000} max={18_000} step={100} fmt={(v) => rupiah(v)} />
      </div>

      <div className="mt-5 space-y-1.5 rounded-xl bg-canvas p-4 text-sm">
        <Row label="Modal per unit (beli + biaya lokal)" value={rupiah(Math.round(r.modalPerUnit))} />
        <Row label={`Margin per unit (${margin}%)`} value={rupiah(Math.round(r.marginPerUnit))} />
        <div className="my-1 border-t border-line" />
        <Row label="Harga FOB / unit" value={`${rupiah(Math.round(r.fobPerUnit))}  (${usd(r.fobPerUnit)})`} />
        <Row label="Nilai FOB total" value={`${rupiah(Math.round(r.fobTotal))}  (${usd(r.fobTotal)})`} />
        <Row label="Nilai CIF total (FOB + freight + asuransi)" value={`${rupiah(Math.round(r.cifTotal))}  (${usd(r.cifTotal)})`} bold />
      </div>

      <p className="mt-3 text-xs text-ink-faint">
        FOB = harga sampai di atas kapal di pelabuhan Indonesia. CIF = FOB ditambah ongkos angkut dan asuransi sampai pelabuhan tujuan. Buyer biasanya membandingkan harga dalam term yang sama, jadi sebut Incoterm saat menawarkan harga.
      </p>
    </div>
  );
}

function Row({ label, value, bold }: { label: string; value: string; bold?: boolean }) {
  return (
    <div className="flex items-center justify-between gap-3">
      <span className={bold ? "font-semibold text-ink" : "text-ink-soft"}>{label}</span>
      <span className={`tnum whitespace-nowrap font-bold ${bold ? "text-emerald-700" : "text-ink"}`}>{value}</span>
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
