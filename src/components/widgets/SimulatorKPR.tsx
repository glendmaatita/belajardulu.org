import { useMemo, useState } from "react";
import { rupiah } from "../../lib/format";

// Simulasi cicilan KPR dengan metode anuitas (cicilan tetap). Juga menampilkan
// perbandingan dengan KPR syariah (murabahah) yang marginnya dikunci di awal.
export function SimulatorKPR() {
  const [harga, setHarga] = useState(500_000_000);
  const [dpPersen, setDpPersen] = useState(20);
  const [tenor, setTenor] = useState(15); // tahun
  const [bunga, setBunga] = useState(10); // % per tahun (KPR konvensional)

  const r = useMemo(() => {
    const dp = harga * (dpPersen / 100);
    const pokok = harga - dp;
    const i = bunga / 100 / 12; // bunga per bulan
    const n = tenor * 12;
    // anuitas
    const cicilan = i > 0 ? (pokok * i) / (1 - Math.pow(1 + i, -n)) : pokok / n;
    const totalBayar = cicilan * n;
    const totalBunga = totalBayar - pokok;
    return { dp, pokok, cicilan, totalBayar, totalBunga };
  }, [harga, dpPersen, tenor, bunga]);

  return (
    <div className="my-6 card p-5">
      <div className="mb-1 text-sm font-bold text-brand-700">🏠 Simulator KPR</div>
      <p className="mb-4 text-xs text-ink-faint">
        Hitung cicilan Kredit Pemilikan Rumah dengan metode anuitas (cicilan tetap). Uang muka (DP) mengurangi pokok
        yang dicicil. Perhatikan betapa besar total bunga pada tenor panjang.
      </p>

      <Slider label="Harga rumah" value={harga} min={100_000_000} max={3_000_000_000} step={25_000_000} fmt={rupiah} onChange={setHarga} />
      <Slider label="Uang muka (DP)" value={dpPersen} min={0} max={50} step={5} fmt={(n) => `${n}%`} onChange={setDpPersen} />
      <Slider label="Tenor" value={tenor} min={5} max={30} step={1} fmt={(n) => `${n} tahun`} onChange={setTenor} />
      <Slider label="Suku bunga per tahun" value={bunga} min={5} max={16} step={0.5} fmt={(n) => `${n}%`} onChange={setBunga} />

      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        <Box label="Uang muka (DP)" value={rupiah(Math.round(r.dp))} color="text-sky-700" />
        <Box label="Pokok pinjaman" value={rupiah(Math.round(r.pokok))} color="text-ink" />
        <Box label="Cicilan per bulan" value={rupiah(Math.round(r.cicilan))} color="text-brand-700" />
        <Box label="Total bunga selama tenor" value={rupiah(Math.round(r.totalBunga))} color="text-rose-700" />
      </div>
      <p className="mt-3 rounded-lg bg-brand-50 px-3 py-2 text-sm text-brand-800">
        Panduan umum: cicilan sebaiknya di bawah 30% penghasilan. Pada KPR syariah (murabahah), harga jual dan
        marginnya dikunci di awal sehingga cicilan tetap tanpa risiko bunga mengambang.
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
