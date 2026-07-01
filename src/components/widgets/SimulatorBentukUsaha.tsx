import { useMemo, useState } from "react";
import { rupiah } from "../../lib/format";

const TARIF_BADAN = 0.22;
const TARIF_DIVIDEN = 0.1; // PPh final dividen ke orang pribadi dalam negeri (UU HPP), bila tidak diinvestasikan

// Bandingkan total pajak bila usaha berbentuk PT vs CV/Firma, dengan laba sama.
// PT: laba kena PPh Badan, lalu dividen ke pemilik orang pribadi kena 10% final
// (kecuali diinvestasikan kembali). CV/Firma: laba kena PPh Badan, tetapi bagian
// laba yang dibagikan ke sekutu BUKAN objek pajak.
export function SimulatorBentukUsaha() {
  const [laba, setLaba] = useState(2_000_000_000);
  const [bagiDividen, setBagiDividen] = useState(100); // % laba setelah pajak yang dibagikan

  const r = useMemo(() => {
    const pphBadan = laba * TARIF_BADAN;
    const labaSetelahPajak = laba - pphBadan;
    const dibagikan = labaSetelahPajak * (bagiDividen / 100);
    // PT
    const pajakDividenPT = dibagikan * TARIF_DIVIDEN;
    const totalPT = pphBadan + pajakDividenPT;
    // CV: bagian laba sekutu bukan objek
    const totalCV = pphBadan;
    const etrPT = laba > 0 ? (totalPT / laba) * 100 : 0;
    const etrCV = laba > 0 ? (totalCV / laba) * 100 : 0;
    return { pphBadan, dibagikan, pajakDividenPT, totalPT, totalCV, etrPT, etrCV, selisih: totalPT - totalCV };
  }, [laba, bagiDividen]);

  return (
    <div className="my-6 card p-5">
      <div className="mb-1 text-sm font-bold text-brand-700">🏗️ Simulator Pemilihan Bentuk Usaha</div>
      <p className="mb-4 text-xs text-ink-faint">
        Dengan laba sama, total pajak bisa berbeda. PT berpotensi kena lapis kedua saat membagi dividen ke pemilik
        orang pribadi, sedangkan pembagian laba ke sekutu CV bukan objek pajak.
      </p>

      <Slider label="Laba sebelum pajak" value={laba} min={200_000_000} max={10_000_000_000} step={100_000_000} fmt={rupiah} onChange={setLaba} />
      <Slider label="Porsi laba setelah pajak yang dibagikan" value={bagiDividen} min={0} max={100} step={5} fmt={(n) => `${n}%`} onChange={setBagiDividen} />

      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        <div className="rounded-xl bg-canvas p-4">
          <div className="text-sm font-bold text-ink-soft">PT (Perseroan)</div>
          <div className="mt-1 text-lg font-extrabold tnum text-rose-700">{rupiah(Math.round(r.totalPT))}</div>
          <div className="text-[11px] text-ink-faint">PPh Badan + dividen {TARIF_DIVIDEN * 100}% final. ETR {r.etrPT.toFixed(1)}%</div>
        </div>
        <div className="rounded-xl bg-emerald-50 p-4">
          <div className="text-sm font-bold text-ink-soft">CV / Firma</div>
          <div className="mt-1 text-lg font-extrabold tnum text-emerald-700">{rupiah(Math.round(r.totalCV))}</div>
          <div className="text-[11px] text-ink-faint">Hanya PPh Badan, bagian sekutu bukan objek. ETR {r.etrCV.toFixed(1)}%</div>
        </div>
      </div>
      <p className="mt-3 rounded-lg bg-brand-50 px-3 py-2 text-sm text-brand-800">
        Selisih pajak: {rupiah(Math.round(r.selisih))}. Tetapi PT punya keunggulan lain (tanggung jawab terbatas,
        akses modal). Keputusan bentuk usaha menimbang pajak dan non-pajak. Catatan: dividen ke orang pribadi bisa
        bebas pajak bila diinvestasikan kembali sesuai syarat UU HPP.
      </p>
    </div>
  );
}

function Slider({ label, value, min, max, step, fmt, onChange }: { label: string; value: number; min: number; max: number; step: number; fmt: (n: number) => string; onChange: (n: number) => void }) {
  return (
    <div className="mb-3">
      <div className="mb-1 flex items-center justify-between">
        <span className="text-sm font-semibold text-ink-soft">{label}</span>
        <span className="tnum text-sm font-bold text-ink">{fmt(value)}</span>
      </div>
      <input type="range" min={min} max={max} step={step} value={value} onChange={(e) => onChange(Number(e.target.value))} className="h-2 w-full cursor-pointer appearance-none rounded-full bg-line accent-brand-600" />
    </div>
  );
}
