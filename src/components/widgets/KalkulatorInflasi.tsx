import { useMemo, useState } from "react";

// Inflasi = persentase perubahan Indeks Harga Konsumen (IHK). Tunjukkan juga erosi daya beli.
export function KalkulatorInflasi() {
  const [ihkAwal, setIhkAwal] = useState(100);
  const [ihkAkhir, setIhkAkhir] = useState(106);
  const [uang, setUang] = useState(10_000_000); // nominal uang yang diamati

  const r = useMemo(() => {
    const inflasi = ihkAwal > 0 ? ((ihkAkhir - ihkAwal) / ihkAwal) * 100 : 0;
    const dayaBeli = ihkAkhir > 0 ? uang * (ihkAwal / ihkAkhir) : uang;
    const erosi = uang - dayaBeli;
    let kategori = "Rendah & sehat";
    if (inflasi >= 10) kategori = "Tinggi (waspada)";
    else if (inflasi >= 5) kategori = "Sedang";
    else if (inflasi < 0) kategori = "Deflasi (harga turun)";
    return { inflasi, dayaBeli, erosi, kategori };
  }, [ihkAwal, ihkAkhir, uang]);

  const fmt = (n: number) => "Rp" + Math.round(n).toLocaleString("id-ID");
  const warna = r.inflasi >= 10 ? "text-rose-700" : r.inflasi >= 5 ? "text-amber-700" : r.inflasi < 0 ? "text-sky-700" : "text-emerald-700";
  const bg = r.inflasi >= 10 ? "bg-rose-50" : r.inflasi >= 5 ? "bg-amber-50" : r.inflasi < 0 ? "bg-sky-50" : "bg-emerald-50";

  return (
    <div className="my-6 card p-5">
      <div className="mb-1 text-sm font-bold text-brand-700">🔥 Kalkulator Inflasi & Daya Beli</div>
      <p className="mb-4 text-xs text-ink-faint">
        Inflasi adalah persentase kenaikan Indeks Harga Konsumen (IHK). Lihat juga bagaimana daya beli uangmu tergerus.
      </p>

      <div className="grid gap-4 sm:grid-cols-3">
        <Slider label="IHK awal" value={ihkAwal} set={setIhkAwal} min={80} max={150} step={1} fmt={(v) => `${v}`} />
        <Slider label="IHK akhir" value={ihkAkhir} set={setIhkAkhir} min={80} max={180} step={1} fmt={(v) => `${v}`} />
        <Slider label="Uang diamati" value={uang} set={setUang} min={1_000_000} max={100_000_000} step={1_000_000} fmt={fmt} />
      </div>

      <div className={`mt-5 rounded-xl ${bg} p-4 text-center`}>
        <div className="text-xs text-ink-faint">Tingkat inflasi</div>
        <div className={`text-3xl font-extrabold tnum ${warna}`}>{r.inflasi.toFixed(1)}%</div>
        <div className={`mt-1 text-sm font-bold ${warna}`}>{r.kategori}</div>
      </div>

      <div className="mt-3 rounded-xl bg-canvas p-4 text-center text-sm">
        Nilai riil uangmu menjadi <b className="text-ink">{fmt(r.dayaBeli)}</b>, tergerus <b className="text-rose-700">{fmt(r.erosi)}</b> oleh inflasi.
      </div>

      <p className="mt-3 text-xs text-ink-faint">
        Bank Indonesia menargetkan inflasi rendah dan stabil. Inflasi terlalu tinggi menggerus tabungan; deflasi berkepanjangan juga berbahaya karena menahan konsumsi.
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
