import { useMemo, useState } from "react";

// Pasar valas: konversi mata uang memakai kurs jual/beli bank (ada spread),
// dan dampak pergerakan kurs terhadap nilai aset/utang dalam USD.
export function SimulatorValas() {
  const [usd, setUsd] = useState(10_000); // jumlah USD
  const [kursTengah, setKursTengah] = useState(16_000);
  const [spread, setSpread] = useState(1.5); // % spread jual-beli
  const [perubahan, setPerubahan] = useState(3); // % pergerakan kurs

  const r = useMemo(() => {
    const kursJual = kursTengah * (1 + spread / 200); // bank jual USD (kita beli) lebih mahal
    const kursBeli = kursTengah * (1 - spread / 200); // bank beli USD (kita jual) lebih murah
    const biayaBeli = usd * kursJual; // rupiah untuk membeli USD
    const terimaJual = usd * kursBeli; // rupiah bila menjual USD sekarang
    const biayaSpread = biayaBeli - terimaJual;
    // dampak bila kurs bergerak
    const kursBaru = kursTengah * (1 + perubahan / 100);
    const nilaiBaru = usd * kursBaru;
    const selisihKurs = usd * (kursBaru - kursTengah);
    return { kursJual, kursBeli, biayaBeli, terimaJual, biayaSpread, kursBaru, nilaiBaru, selisihKurs };
  }, [usd, kursTengah, spread, perubahan]);

  const fmt = (n: number) => "Rp" + Math.round(n).toLocaleString("id-ID");

  return (
    <div className="my-6 card p-5">
      <div className="mb-1 text-sm font-bold text-brand-700">🌐 Simulator Pasar Valas</div>
      <p className="mb-4 text-xs text-ink-faint">
        Tukar mata uang selalu kena selisih kurs jual-beli (spread). Lihat juga dampak pergerakan kurs terhadap nilai aset USD-mu.
      </p>

      <div className="grid gap-4 sm:grid-cols-2">
        <Slider label="Jumlah (USD)" value={usd} set={setUsd} min={1000} max={500_000} step={1000} fmt={(v) => `$${v.toLocaleString("id-ID")}`} />
        <Slider label="Kurs tengah (USD/IDR)" value={kursTengah} set={setKursTengah} min={14_000} max={18_000} step={50} fmt={(v) => fmt(v)} />
        <Slider label="Spread jual-beli" value={spread} set={setSpread} min={0.2} max={4} step={0.1} fmt={(v) => `${v}%`} />
        <Slider label="Pergerakan kurs" value={perubahan} set={setPerubahan} min={-15} max={15} step={1} fmt={(v) => `${v > 0 ? "+" : ""}${v}%`} />
      </div>

      <div className="mt-5 space-y-1.5 rounded-xl bg-slate-50 p-4 text-sm">
        <Row label={`Kurs jual bank (kamu beli USD)`} value={fmt(r.kursJual)} />
        <Row label={`Kurs beli bank (kamu jual USD)`} value={fmt(r.kursBeli)} />
        <Row label="Biaya spread bila beli lalu jual lagi" value={fmt(r.biayaSpread)} />
      </div>

      <div className={`mt-3 rounded-xl p-4 text-center ${r.selisihKurs >= 0 ? "bg-emerald-50" : "bg-rose-50"}`}>
        <div className="text-xs text-ink-faint">Dampak pergerakan kurs {perubahan > 0 ? "+" : ""}{perubahan}% atas ${usd.toLocaleString("id-ID")}</div>
        <div className={`text-2xl font-extrabold tnum ${r.selisihKurs >= 0 ? "text-emerald-700" : "text-rose-700"}`}>
          {r.selisihKurs >= 0 ? "+" : ""}{fmt(r.selisihKurs)}
        </div>
        <div className="mt-1 text-xs text-ink-faint">Nilai aset menjadi {fmt(r.nilaiBaru)}</div>
      </div>

      <p className="mt-3 text-xs text-ink-faint">
        Rupiah melemah (kurs naik) menguntungkan pemegang USD dan eksportir, tetapi memberatkan importir dan pemilik utang USD. Spread adalah biaya tetap setiap kali menukar.
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
      <input type="range" min={min} max={max} step={step} value={value} onChange={(e) => set(Number(e.target.value))} className="h-2 w-full cursor-pointer appearance-none rounded-full bg-slate-200 accent-brand-600" />
    </div>
  );
}
