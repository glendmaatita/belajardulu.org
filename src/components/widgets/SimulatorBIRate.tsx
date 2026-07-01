import { useMemo, useState } from "react";

// Arah dampak perubahan suku bunga acuan (BI-Rate) terhadap inflasi,
// pertumbuhan, dan nilai tukar. Model kualitatif yang menyederhanakan transmisi.
export function SimulatorBIRate() {
  const [rate, setRate] = useState(6); // BI-Rate (%)
  const baseline = 6;

  const r = useMemo(() => {
    const delta = rate - baseline;
    // arah: rate naik -> inflasi turun, pertumbuhan melambat, rupiah menguat
    const inflasi = delta > 0 ? "Menekan inflasi" : delta < 0 ? "Mendorong inflasi" : "Netral";
    const pertumbuhan = delta > 0 ? "Melambat" : delta < 0 ? "Terdorong" : "Netral";
    const rupiah = delta > 0 ? "Cenderung menguat" : delta < 0 ? "Cenderung melemah" : "Stabil";
    const stance = delta > 0 ? "Kontraktif (mengerem)" : delta < 0 ? "Ekspansif (memacu)" : "Netral";
    return { delta, inflasi, pertumbuhan, rupiah, stance };
  }, [rate]);

  return (
    <div className="my-6 card p-5">
      <div className="mb-1 text-sm font-bold text-brand-700">🎛️ Simulator Suku Bunga Acuan (BI-Rate)</div>
      <p className="mb-4 text-xs text-ink-faint">
        Suku bunga acuan adalah instrumen utama. Geser dari titik acuan 6% untuk melihat arah dampaknya pada inflasi,
        pertumbuhan, dan nilai tukar rupiah. Ini gambaran arah, bukan angka pasti.
      </p>

      <div className="mb-4">
        <div className="mb-1 flex items-center justify-between">
          <span className="text-sm font-semibold text-ink-soft">BI-Rate</span>
          <span className="tnum text-sm font-bold text-ink">{rate.toFixed(2)}%</span>
        </div>
        <input type="range" min={2} max={12} step={0.25} value={rate} onChange={(e) => setRate(Number(e.target.value))} className="h-2 w-full cursor-pointer appearance-none rounded-full bg-line accent-brand-600" />
        <div className="mt-1 text-right text-xs text-ink-faint">{r.stance}</div>
      </div>

      <div className="grid gap-3 sm:grid-cols-3">
        <Box label="Inflasi" value={r.inflasi} color="text-rose-700" />
        <Box label="Pertumbuhan" value={r.pertumbuhan} color="text-sky-700" />
        <Box label="Nilai tukar rupiah" value={r.rupiah} color="text-emerald-700" />
      </div>
      <p className="mt-3 rounded-lg bg-brand-50 px-3 py-2 text-sm text-brand-800">
        Menaikkan suku bunga meredam inflasi dan menarik modal masuk (rupiah menguat), tetapi memperlambat ekonomi.
        Bank sentral selalu menimbang kedua sisi ini.
      </p>
    </div>
  );
}

function Box({ label, value, color }: { label: string; value: string; color: string }) {
  return (
    <div className="rounded-xl bg-canvas p-4">
      <div className="text-xs text-ink-faint">{label}</div>
      <div className={`text-sm font-extrabold ${color}`}>{value}</div>
    </div>
  );
}
