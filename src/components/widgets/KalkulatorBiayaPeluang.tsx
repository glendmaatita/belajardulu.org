import { useMemo, useState } from "react";
import { rupiah } from "../../lib/format";

// Biaya peluang: nilai dari alternatif terbaik yang dikorbankan saat membuat pilihan.
export function KalkulatorBiayaPeluang() {
  const [pilihan, setPilihan] = useState(5_000_000); // hasil dari pilihan yang diambil
  const [alternatif, setAlternatif] = useState(7_000_000); // hasil alternatif terbaik yang dilepas
  const [biayaLangsung, setBiayaLangsung] = useState(1_000_000); // biaya eksplisit pilihan

  const r = useMemo(() => {
    const biayaPeluang = alternatif; // nilai alternatif terbaik yang dikorbankan
    const biayaTotalEkonomi = biayaLangsung + biayaPeluang; // biaya eksplisit + implisit
    const labaEkonomi = pilihan - biayaTotalEkonomi;
    return { biayaPeluang, biayaTotalEkonomi, labaEkonomi };
  }, [pilihan, alternatif, biayaLangsung]);

  const layak = r.labaEkonomi >= 0;

  return (
    <div className="my-6 card p-5">
      <div className="mb-1 text-sm font-bold text-brand-700">🔀 Kalkulator Biaya Peluang</div>
      <p className="mb-4 text-xs text-ink-faint">
        Setiap pilihan punya biaya peluang: nilai alternatif terbaik yang kamu lepas. Bandingkan untuk menilai apakah pilihanmu rasional secara ekonomi.
      </p>

      <div className="grid gap-4 sm:grid-cols-3">
        <Slider label="Hasil pilihan diambil" value={pilihan} set={setPilihan} min={0} max={20_000_000} step={500_000} fmt={(v) => rupiah(v)} />
        <Slider label="Hasil alternatif terbaik" value={alternatif} set={setAlternatif} min={0} max={20_000_000} step={500_000} fmt={(v) => rupiah(v)} />
        <Slider label="Biaya langsung pilihan" value={biayaLangsung} set={setBiayaLangsung} min={0} max={10_000_000} step={250_000} fmt={(v) => rupiah(v)} />
      </div>

      <div className="mt-5 space-y-1.5 rounded-xl bg-canvas p-4 text-sm">
        <Row label="Biaya peluang (alternatif dikorbankan)" value={rupiah(r.biayaPeluang)} />
        <Row label="Biaya ekonomi total (langsung + peluang)" value={rupiah(r.biayaTotalEkonomi)} />
      </div>

      <div className={`mt-3 rounded-xl p-4 text-center ${layak ? "bg-emerald-50" : "bg-rose-50"}`}>
        <div className="text-xs text-ink-faint">Laba ekonomi (hasil - biaya ekonomi)</div>
        <div className={`text-2xl font-extrabold tnum ${layak ? "text-emerald-700" : "text-rose-700"}`}>
          {layak ? "+" : ""}{rupiah(r.labaEkonomi)}
        </div>
        <div className="mt-1 text-xs text-ink-faint">
          {layak ? "Pilihan ini menguntungkan walau biaya peluang diperhitungkan." : "Alternatif yang dilepas lebih bernilai; pertimbangkan kembali."}
        </div>
      </div>

      <p className="mt-3 text-xs text-ink-faint">
        Ekonom menghitung laba ekonomi (memasukkan biaya peluang), bukan hanya laba akuntansi (hanya biaya eksplisit). Inilah inti berpikir seperti ekonom.
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
