import { useMemo, useState } from "react";
import { rupiah } from "../../lib/format";

// Perkiraan dana pensiun memakai aturan 4%: dana yang dibutuhkan sekitar 25 kali
// pengeluaran tahunan saat pensiun (karena menarik 4% per tahun dianggap aman).
// Pengeluaran disesuaikan inflasi sampai usia pensiun.
export function KalkulatorDanaPensiun() {
  const [usia, setUsia] = useState(30);
  const [usiaPensiun, setUsiaPensiun] = useState(56);
  const [pengeluaranBulan, setPengeluaranBulan] = useState(6_000_000);
  const [inflasi, setInflasi] = useState(4); // % per tahun

  const r = useMemo(() => {
    const tahun = Math.max(0, usiaPensiun - usia);
    // pengeluaran bulanan saat pensiun setelah disesuaikan inflasi
    const pengeluaranPensiun = pengeluaranBulan * Math.pow(1 + inflasi / 100, tahun);
    const pengeluaranTahunan = pengeluaranPensiun * 12;
    const danaDibutuhkan = pengeluaranTahunan * 25; // aturan 4%
    return { tahun, pengeluaranPensiun, danaDibutuhkan };
  }, [usia, usiaPensiun, pengeluaranBulan, inflasi]);

  return (
    <div className="my-6 card p-5">
      <div className="mb-1 text-sm font-bold text-brand-700">🏖️ Kalkulator Dana Pensiun (Aturan 4%)</div>
      <p className="mb-4 text-xs text-ink-faint">
        Perkiraan kasar dana pensiun: kalau menarik 4% per tahun dianggap aman, maka dana yang dibutuhkan sekitar 25
        kali pengeluaran tahunan saat pensiun. Pengeluaran disesuaikan inflasi sampai usia pensiun.
      </p>

      <Slider label="Usia sekarang" value={usia} min={20} max={55} step={1} fmt={(n) => `${n} tahun`} onChange={setUsia} />
      <Slider label="Usia pensiun" value={usiaPensiun} min={45} max={65} step={1} fmt={(n) => `${n} tahun`} onChange={setUsiaPensiun} />
      <Slider label="Pengeluaran per bulan (nilai sekarang)" value={pengeluaranBulan} min={2_000_000} max={40_000_000} step={500_000} fmt={rupiah} onChange={setPengeluaranBulan} />
      <Slider label="Asumsi inflasi per tahun" value={inflasi} min={2} max={8} step={0.5} fmt={(n) => `${n}%`} onChange={setInflasi} />

      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        <Box label={`Pengeluaran/bulan saat pensiun (${r.tahun} th lagi)`} value={rupiah(Math.round(r.pengeluaranPensiun))} color="text-amber-700" />
        <Box label="Dana pensiun dibutuhkan" value={rupiah(Math.round(r.danaDibutuhkan))} color="text-brand-700" />
      </div>
      <p className="mt-3 rounded-lg bg-brand-50 px-3 py-2 text-sm text-brand-800">
        Angka ini bisa dipenuhi dari berbagai sumber: JHT dan Jaminan Pensiun BPJS Ketenagakerjaan, DPLK, serta
        investasi pribadi. Makin awal mulai, makin ringan karena dibantu bunga majemuk.
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
