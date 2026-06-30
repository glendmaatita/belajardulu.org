import { useMemo, useState } from "react";
import { rupiah } from "../../lib/format";

// ROI otomasi gudang: investasi robot/konveyor dibayar kembali oleh penghematan
// tenaga kerja. Payback = investasi / penghematan tahunan.
export function KalkulatorOtomasiGudang() {
  const [investasi, setInvestasi] = useState(5_000_000_000); // Rp
  const [pekerja, setPekerja] = useState(40); // jumlah pekerja sebelum otomasi
  const [pengurangan, setPengurangan] = useState(40); // % pekerja yang dihemat
  const [gajiTahun, setGajiTahun] = useState(60_000_000); // Rp per pekerja per tahun

  const r = useMemo(() => {
    const pekerjaHemat = Math.round(pekerja * (pengurangan / 100));
    const hematTahun = pekerjaHemat * gajiTahun;
    const payback = hematTahun > 0 ? investasi / hematTahun : Infinity;
    return { pekerjaHemat, hematTahun, payback };
  }, [investasi, pekerja, pengurangan, gajiTahun]);

  return (
    <div className="my-6 card p-5">
      <div className="mb-1 text-sm font-bold text-brand-700">🤖 Kalkulator ROI Otomasi Gudang</div>
      <p className="mb-4 text-xs text-ink-faint">
        Otomasi mahal di depan, tapi memangkas biaya tenaga kerja. Berapa lama investasi kembali (payback period)?
      </p>

      <div className="grid gap-4 sm:grid-cols-2">
        <Slider label="Investasi otomasi" value={investasi} set={setInvestasi} min={1_000_000_000} max={20_000_000_000} step={500_000_000} fmt={(v) => rupiah(v)} />
        <Slider label="Jumlah pekerja saat ini" value={pekerja} set={setPekerja} min={10} max={150} step={5} fmt={(v) => `${v} orang`} />
        <Slider label="Pekerja yang dihemat" value={pengurangan} set={setPengurangan} min={10} max={70} step={5} fmt={(v) => `${v}%`} />
        <Slider label="Biaya per pekerja / tahun" value={gajiTahun} set={setGajiTahun} min={40_000_000} max={120_000_000} step={5_000_000} fmt={(v) => rupiah(v)} />
      </div>

      <div className="mt-5 space-y-1.5 rounded-xl bg-canvas p-4 text-sm">
        <Row label="Pekerja yang digantikan" value={`${r.pekerjaHemat} orang`} />
        <Row label="Penghematan biaya per tahun" value={rupiah(r.hematTahun)} />
      </div>

      <div className={`mt-3 rounded-xl p-4 text-center ${r.payback <= 3 ? "bg-emerald-50 text-emerald-700" : r.payback <= 6 ? "bg-amber-50 text-amber-700" : "bg-rose-50 text-rose-700"}`}>
        <div className="text-xs text-ink-faint">Periode balik modal (payback)</div>
        <div className="text-3xl font-extrabold tnum">{Number.isFinite(r.payback) ? `${r.payback.toFixed(1)} tahun` : "-"}</div>
        <div className="mt-1 text-sm">{r.payback <= 3 ? "Cepat balik modal, sangat menarik." : r.payback <= 6 ? "Layak dipertimbangkan bila volume stabil." : "Lambat balik modal, tinjau ulang skala dan asumsi."}</div>
      </div>
      <p className="mt-2 text-xs text-ink-faint">Selain upah, otomasi juga menambah akurasi dan kecepatan, manfaat yang tak selalu masuk hitungan sederhana ini.</p>
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
