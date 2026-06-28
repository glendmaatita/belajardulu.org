import { useMemo, useState } from "react";

// Dollar Cost Averaging vs Lump Sum: DCA membeli rutin nominal tetap di harga yang berfluktuasi.
// Saat harga turun, dapat lebih banyak unit, sehingga harga rata-rata bisa lebih rendah.
export function SimulatorDCA() {
  const [setoran, setSetoran] = useState(1_000_000); // per periode
  const [volatilitas, setVolatilitas] = useState(40); // % amplitudo fluktuasi harga

  const r = useMemo(() => {
    const hargaAwal = 1000;
    const v = volatilitas / 100;
    // 6 periode dengan pola harga turun lalu pulih
    const polaHarga = [1, 1 - v * 0.5, 1 - v, 1 - v * 0.5, 1, 1 + v * 0.3].map((m) => hargaAwal * m);
    let totalUnitDCA = 0;
    polaHarga.forEach((h) => (totalUnitDCA += setoran / h));
    const totalInvest = setoran * polaHarga.length;
    const hargaRataDCA = totalInvest / totalUnitDCA;

    // lump sum: semua di periode pertama
    const unitLump = totalInvest / polaHarga[0];
    const hargaAkhir = polaHarga[polaHarga.length - 1];
    const nilaiDCA = totalUnitDCA * hargaAkhir;
    const nilaiLump = unitLump * hargaAkhir;
    return { polaHarga, totalUnitDCA, hargaRataDCA, hargaAkhir, nilaiDCA, nilaiLump, totalInvest };
  }, [setoran, volatilitas]);

  const fmt = (n: number) => "Rp" + Math.round(n).toLocaleString("id-ID");

  return (
    <div className="my-6 card p-5">
      <div className="mb-1 text-sm font-bold text-brand-700">📅 Simulator Dollar Cost Averaging</div>
      <p className="mb-4 text-xs text-ink-faint">
        Investasi rutin nominal tetap selama 6 periode dengan harga berfluktuasi. Lihat bagaimana harga rata-rata terbentuk.
      </p>

      <div className="grid gap-4 sm:grid-cols-2">
        <Slider label="Setoran per periode" value={setoran} set={setSetoran} min={500_000} max={10_000_000} step={500_000} fmt={fmt} />
        <Slider label="Volatilitas harga" value={volatilitas} set={setVolatilitas} min={10} max={70} step={5} fmt={(v) => `${v}%`} />
      </div>

      <div className="mt-4 flex items-end justify-center gap-3" style={{ height: 110 }}>
        {r.polaHarga.map((h, i) => {
          const unit = setoran / h;
          const maxH = 90;
          const hh = (h / (1000 * (1 + volatilitas / 100 * 0.3))) * maxH;
          return (
            <div key={i} className="text-center">
              <div className="text-[10px] font-bold text-emerald-600">{unit.toFixed(2)}u</div>
              <div className="w-8 rounded bg-sky-500" style={{ height: Math.max(hh, 6) }} />
              <div className="text-[10px] text-ink-faint">{Math.round(h)}</div>
            </div>
          );
        })}
      </div>

      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        <div className="rounded-xl bg-emerald-50 p-3 text-center">
          <div className="text-xs text-ink-faint">Harga rata-rata DCA</div>
          <div className="text-lg font-extrabold tnum text-emerald-700">{fmt(r.hargaRataDCA)}</div>
        </div>
        <div className="rounded-xl bg-canvas p-3 text-center">
          <div className="text-xs text-ink-faint">Total unit terkumpul</div>
          <div className="text-lg font-extrabold tnum text-ink">{r.totalUnitDCA.toFixed(2)} unit</div>
        </div>
      </div>

      <p className="mt-3 text-xs text-ink-faint">
        Dengan membeli lebih banyak unit saat harga murah, harga rata-rata DCA cenderung di bawah rata-rata aritmetika harga. DCA mengurangi risiko salah waktu (timing) dan menanamkan disiplin.
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
