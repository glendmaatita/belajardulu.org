import { useMemo, useState } from "react";

// Tiga rasio keuangan pribadi yang sederhana: rasio menabung, rasio cicilan
// utang terhadap penghasilan, dan cakupan dana darurat.
export function KalkulatorRasioPribadi() {
  const [penghasilan, setPenghasilan] = useState(8_000_000);
  const [menabung, setMenabung] = useState(1_200_000);
  const [cicilan, setCicilan] = useState(2_400_000);
  const [pengeluaran, setPengeluaran] = useState(5_000_000);
  const [danaDarurat, setDanaDarurat] = useState(15_000_000);

  const r = useMemo(() => {
    const rasioMenabung = penghasilan > 0 ? (menabung / penghasilan) * 100 : 0;
    const rasioCicilan = penghasilan > 0 ? (cicilan / penghasilan) * 100 : 0;
    const bulanDarurat = pengeluaran > 0 ? danaDarurat / pengeluaran : 0;
    return { rasioMenabung, rasioCicilan, bulanDarurat };
  }, [penghasilan, menabung, cicilan, pengeluaran, danaDarurat]);

  return (
    <div className="my-6 card p-5">
      <div className="mb-1 text-sm font-bold text-brand-700">📊 Kalkulator Rasio Keuangan Pribadi</div>
      <p className="mb-4 text-xs text-ink-faint">
        Rasio ini seperti cek kesehatan keuangan. Tiga yang paling penting: berapa persen kamu menabung, seberapa
        berat cicilan utang, dan berapa bulan dana daruratmu bertahan.
      </p>

      <Slider label="Penghasilan per bulan" value={penghasilan} min={2_000_000} max={50_000_000} step={500_000} onChange={setPenghasilan} />
      <Slider label="Menabung/investasi per bulan" value={menabung} min={0} max={penghasilan} step={100_000} onChange={setMenabung} />
      <Slider label="Total cicilan utang per bulan" value={cicilan} min={0} max={penghasilan} step={100_000} onChange={setCicilan} />
      <Slider label="Pengeluaran wajib per bulan" value={pengeluaran} min={1_000_000} max={penghasilan} step={100_000} onChange={setPengeluaran} />
      <Slider label="Dana darurat terkumpul" value={danaDarurat} min={0} max={200_000_000} step={1_000_000} onChange={setDanaDarurat} />

      <div className="mt-5 grid gap-3 sm:grid-cols-3">
        <Rasio label="Rasio menabung" value={`${r.rasioMenabung.toFixed(0)}%`} ok={r.rasioMenabung >= 20} target="Ideal >= 20%" />
        <Rasio label="Rasio cicilan utang" value={`${r.rasioCicilan.toFixed(0)}%`} ok={r.rasioCicilan <= 35} target="Sehat <= 35%" />
        <Rasio label="Cakupan dana darurat" value={`${r.bulanDarurat.toFixed(1)} bln`} ok={r.bulanDarurat >= 3} target="Minimal 3 bln" />
      </div>
      <p className="mt-3 rounded-lg bg-brand-50 px-3 py-2 text-sm text-brand-800">
        Jika rasio cicilan di atas 35% penghasilan, keuanganmu rawan. Prioritaskan melunasi utang dan membangun dana
        darurat sebelum mengejar investasi agresif.
      </p>
    </div>
  );
}

function Rasio({ label, value, ok, target }: { label: string; value: string; ok: boolean; target: string }) {
  return (
    <div className={`rounded-xl p-4 ${ok ? "bg-emerald-50" : "bg-rose-50"}`}>
      <div className="text-xs text-ink-faint">{label}</div>
      <div className={`text-lg font-extrabold tnum ${ok ? "text-emerald-700" : "text-rose-700"}`}>{value}</div>
      <div className="text-[11px] text-ink-faint">{target}</div>
    </div>
  );
}

function Slider({ label, value, min, max, step, onChange }: { label: string; value: number; min: number; max: number; step: number; onChange: (n: number) => void }) {
  return (
    <div className="mb-3">
      <div className="mb-1 flex items-center justify-between">
        <span className="text-sm font-semibold text-ink-soft">{label}</span>
        <span className="tnum text-sm font-bold text-ink">{new Intl.NumberFormat("id-ID").format(value)}</span>
      </div>
      <input type="range" min={min} max={max} step={step} value={value} onChange={(e) => onChange(Number(e.target.value))} className="h-2 w-full cursor-pointer appearance-none rounded-full bg-line accent-brand-600" />
    </div>
  );
}
