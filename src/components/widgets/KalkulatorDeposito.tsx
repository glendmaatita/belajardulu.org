import { useMemo, useState } from "react";
import { rupiah } from "../../lib/format";

// Deposito: instrumen pasar uang. Bunga dikenai pajak final 20% (di atas saldo tertentu).
// Hitung bunga bersih dan nilai akhir bila diperpanjang (roll over) beberapa periode.
export function KalkulatorDeposito() {
  const [pokok, setPokok] = useState(100_000_000);
  const [bunga, setBunga] = useState(6); // % per tahun
  const [bulan, setBulan] = useState(12); // tenor per periode
  const [periode, setPeriode] = useState(3); // berapa kali roll over

  const r = useMemo(() => {
    const pajak = 0.2;
    const perTahun = bunga / 100;
    let saldo = pokok;
    for (let i = 0; i < periode; i++) {
      const bungaKotor = saldo * perTahun * (bulan / 12);
      const bungaBersih = bungaKotor * (1 - pajak);
      saldo += bungaBersih;
    }
    const totalBersih = saldo - pokok;
    const bungaKotor1 = pokok * perTahun * (bulan / 12);
    const bungaBersih1 = bungaKotor1 * (1 - pajak);
    return { saldo, totalBersih, bungaKotor1, bungaBersih1 };
  }, [pokok, bunga, bulan, periode]);

  return (
    <div className="my-6 card p-5">
      <div className="mb-1 text-sm font-bold text-brand-700">🏦 Kalkulator Deposito</div>
      <p className="mb-4 text-xs text-ink-faint">
        Deposito adalah instrumen pasar uang berisiko rendah. Bunganya dikenai pajak final 20%. Lihat hasil bersihnya, termasuk bila diperpanjang otomatis.
      </p>

      <div className="grid gap-4 sm:grid-cols-2">
        <Slider label="Pokok deposito" value={pokok} set={setPokok} min={10_000_000} max={2_000_000_000} step={10_000_000} fmt={(v) => rupiah(v)} />
        <Slider label="Bunga per tahun" value={bunga} set={setBunga} min={1} max={10} step={0.25} fmt={(v) => `${v}%`} />
        <Slider label="Tenor per periode" value={bulan} set={setBulan} min={1} max={24} step={1} fmt={(v) => `${v} bulan`} />
        <Slider label="Jumlah perpanjangan" value={periode} set={setPeriode} min={1} max={10} step={1} fmt={(v) => `${v}x`} />
      </div>

      <div className="mt-5 space-y-1.5 rounded-xl bg-canvas p-4 text-sm">
        <Row label="Bunga kotor 1 periode" value={rupiah(Math.round(r.bungaKotor1))} />
        <Row label="Pajak final 20%" value={`- ${rupiah(Math.round(r.bungaKotor1 * 0.2))}`} />
        <Row label="Bunga bersih 1 periode" value={rupiah(Math.round(r.bungaBersih1))} />
      </div>

      <div className="mt-3 rounded-xl bg-emerald-50 p-4 text-center">
        <div className="text-xs text-ink-faint">Nilai akhir setelah {periode} periode</div>
        <div className="text-2xl font-extrabold tnum text-emerald-700">{rupiah(Math.round(r.saldo))}</div>
        <div className="mt-1 text-xs text-ink-faint">Total bunga bersih {rupiah(Math.round(r.totalBersih))}</div>
      </div>

      <p className="mt-3 text-xs text-ink-faint">
        Deposito menjaga nilai dan likuiditas, tetapi imbal hasil bersihnya sering hanya sedikit di atas inflasi. Cocok untuk dana darurat atau tujuan jangka pendek.
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
