import { useMemo, useState } from "react";

// Dua cara kapital menambah nilai lebih menurut Marx:
// - Absolut: memperpanjang hari kerja (lebih banyak jam kerja lebih).
// - Relatif: menaikkan produktivitas sehingga kerja perlu (penutup upah) memendek.
export function KalkulatorNilaiLebihAbsolutRelatif() {
  const [jamKerja, setJamKerja] = useState(10);
  const [jamPerlu, setJamPerlu] = useState(5); // jam untuk menutup upah pada produktivitas awal
  const [kenaikanProduktivitas, setKenaikanProduktivitas] = useState(0); // % naik -> jam perlu turun

  const r = useMemo(() => {
    // jam perlu efektif setelah produktivitas naik
    const jamPerluEfektif = jamPerlu / (1 + kenaikanProduktivitas / 100);
    const jamLebih = Math.max(0, jamKerja - jamPerluEfektif);
    const tingkat = jamPerluEfektif > 0 ? (jamLebih / jamPerluEfektif) * 100 : 0;
    return { jamPerluEfektif, jamLebih, tingkat };
  }, [jamKerja, jamPerlu, kenaikanProduktivitas]);

  const pctPerlu = (r.jamPerluEfektif / jamKerja) * 100;

  return (
    <div className="my-6 card p-5">
      <div className="mb-1 text-sm font-bold text-brand-700">⏱️ Kalkulator Nilai Lebih Absolut vs Relatif</div>
      <p className="mb-4 text-xs text-ink-faint">
        Nilai lebih absolut diperoleh dengan memperpanjang hari kerja. Nilai lebih relatif diperoleh dengan menaikkan
        produktivitas, sehingga jam kerja perlu (penutup upah) memendek dan jam kerja lebih bertambah.
      </p>

      <Slider label="Panjang hari kerja (absolut)" value={jamKerja} min={6} max={16} step={1} fmt={(n) => `${n} jam`} onChange={setJamKerja} />
      <Slider label="Jam kerja perlu awal" value={jamPerlu} min={2} max={10} step={1} fmt={(n) => `${n} jam`} onChange={setJamPerlu} />
      <Slider label="Kenaikan produktivitas (relatif)" value={kenaikanProduktivitas} min={0} max={150} step={10} fmt={(n) => `+${n}%`} onChange={setKenaikanProduktivitas} />

      <div className="mt-4 h-7 w-full overflow-hidden rounded-full bg-line">
        <div className="flex h-full">
          <div className="flex h-full items-center justify-center bg-emerald-500 text-[11px] font-bold text-white" style={{ width: `${pctPerlu}%` }}>
            Kerja perlu
          </div>
          <div className="flex h-full items-center justify-center bg-rose-500 text-[11px] font-bold text-white" style={{ width: `${100 - pctPerlu}%` }}>
            Kerja lebih
          </div>
        </div>
      </div>

      <div className="mt-4 grid gap-3 sm:grid-cols-3">
        <Box label="Jam kerja perlu efektif" value={`${r.jamPerluEfektif.toFixed(1)} jam`} color="text-emerald-700" />
        <Box label="Jam kerja lebih" value={`${r.jamLebih.toFixed(1)} jam`} color="text-rose-700" />
        <Box label="Tingkat nilai lebih" value={`${r.tingkat.toFixed(0)}%`} color="text-brand-700" />
      </div>
      <p className="mt-3 rounded-lg bg-brand-50 px-3 py-2 text-sm text-brand-800">
        Memperpanjang hari kerja (absolut) ada batas fisiknya. Karena itu kapitalisme modern, kata Marx, lebih
        mengandalkan nilai lebih relatif lewat mesin dan teknologi.
      </p>
    </div>
  );
}

function Box({ label, value, color }: { label: string; value: string; color: string }) {
  return (
    <div className="rounded-xl bg-canvas p-4">
      <div className="text-xs text-ink-faint">{label}</div>
      <div className={`text-lg font-extrabold tnum ${color}`}>{value}</div>
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
