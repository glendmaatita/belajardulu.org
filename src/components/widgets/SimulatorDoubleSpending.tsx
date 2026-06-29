import { useMemo, useState } from "react";

// Makin banyak konfirmasi blok, makin sulit serangan double-spend berhasil.
export function SimulatorDoubleSpending() {
  const [konfirmasi, setKonfirmasi] = useState(3); // jumlah blok konfirmasi
  const [hashrate, setHashrate] = useState(25); // % kekuatan penyerang

  const r = useMemo(() => {
    const q = hashrate / 100; // porsi penyerang
    const p = 1 - q; // porsi jaringan jujur
    // Rumus ilustratif: bila penyerang lebih lemah (q < p), peluang menyusul
    // turun secara eksponensial terhadap jumlah konfirmasi.
    let peluang: number;
    if (q >= p) {
      peluang = 1; // penyerang sama kuat atau lebih kuat: hampir pasti bisa
    } else {
      peluang = Math.pow(q / p, konfirmasi);
    }
    const persen = Math.min(100, Math.max(0, peluang * 100));
    return { persen };
  }, [konfirmasi, hashrate]);

  const status =
    r.persen >= 5
      ? { label: "Berisiko", warna: "text-rose-700", bg: "bg-rose-100" }
      : r.persen >= 0.5
        ? { label: "Cukup Aman", warna: "text-amber-700", bg: "bg-amber-100" }
        : { label: "Sangat Aman", warna: "text-emerald-700", bg: "bg-emerald-100" };

  return (
    <div className="my-6 card p-5">
      <div className="mb-1 text-sm font-bold text-brand-700">🛡️ Simulator Double Spending</div>
      <p className="mb-4 text-xs text-ink-faint">
        Saat sebuah transaksi tertimbun lebih banyak blok konfirmasi, penyerang harus menambang ulang lebih banyak blok untuk
        membatalkannya. Lihat bagaimana peluang serangan anjlok seiring bertambahnya konfirmasi.
      </p>

      <div className="grid gap-4 sm:grid-cols-2">
        <Slider label="Jumlah konfirmasi" value={konfirmasi} set={setKonfirmasi} min={0} max={6} step={1} fmt={(v) => `${v} blok`} />
        <Slider label="Kekuatan penyerang" value={hashrate} set={setHashrate} min={10} max={45} step={1} fmt={(v) => `${v}%`} />
      </div>

      <div className="mt-5 rounded-xl bg-canvas p-4 text-center">
        <div className="text-xs text-ink-faint">Perkiraan peluang serangan berhasil</div>
        <div className="text-3xl font-extrabold tnum text-rose-700">{r.persen < 0.01 ? "< 0,01" : r.persen.toFixed(2)}%</div>
      </div>

      <div className="mt-3 flex items-center justify-center">
        <span className={`rounded-full px-4 py-1.5 text-sm font-bold ${status.bg} ${status.warna}`}>{status.label}</span>
      </div>

      <p className="mt-4 text-xs text-ink-faint">
        Dengan penyerang menguasai <b>{hashrate}%</b> kekuatan komputasi, menunggu <b>{konfirmasi} konfirmasi</b> membuat peluang
        pembatalan menjadi <b>{r.persen < 0.01 ? "< 0,01" : r.persen.toFixed(2)}%</b>. Inilah sebabnya bursa biasanya menunggu
        beberapa konfirmasi sebelum menganggap dana benar-benar masuk. Angka ini ilustratif untuk membangun intuisi.
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
