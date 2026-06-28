import { useMemo, useState } from "react";

// Neraca pembayaran: transaksi berjalan + transaksi modal/finansial = neraca keseluruhan (memengaruhi cadangan devisa).
export function KalkulatorNeracaPembayaran() {
  const [eksporBarang, setEksporBarang] = useState(260); // miliar USD
  const [imporBarang, setImporBarang] = useState(240);
  const [jasaPendapatan, setJasaPendapatan] = useState(-35); // neto jasa + pendapatan primer (sering negatif)
  const [modalFinansial, setModalFinansial] = useState(25); // aliran modal masuk neto

  const r = useMemo(() => {
    const neracaDagang = eksporBarang - imporBarang;
    const transaksiBerjalan = neracaDagang + jasaPendapatan;
    const keseluruhan = transaksiBerjalan + modalFinansial;
    return { neracaDagang, transaksiBerjalan, keseluruhan };
  }, [eksporBarang, imporBarang, jasaPendapatan, modalFinansial]);

  const fmt = (n: number) => (n >= 0 ? "+" : "") + n.toFixed(0) + " M USD";

  return (
    <div className="my-6 card p-5">
      <div className="mb-1 text-sm font-bold text-brand-700">🌐 Kalkulator Neraca Pembayaran</div>
      <p className="mb-4 text-xs text-ink-faint">
        Neraca pembayaran menjumlahkan transaksi berjalan dan transaksi modal/finansial. Selisihnya memengaruhi cadangan devisa.
      </p>

      <div className="grid gap-4 sm:grid-cols-2">
        <Slider label="Ekspor barang" value={eksporBarang} set={setEksporBarang} min={150} max={350} step={5} fmt={(v) => `${v} M USD`} />
        <Slider label="Impor barang" value={imporBarang} set={setImporBarang} min={150} max={350} step={5} fmt={(v) => `${v} M USD`} />
        <Slider label="Jasa + pendapatan (neto)" value={jasaPendapatan} set={setJasaPendapatan} min={-80} max={20} step={5} fmt={(v) => `${v} M USD`} />
        <Slider label="Transaksi modal & finansial" value={modalFinansial} set={setModalFinansial} min={-30} max={80} step={5} fmt={(v) => `${v} M USD`} />
      </div>

      <div className="mt-5 space-y-1.5 rounded-xl bg-canvas p-4 text-sm">
        <Row label="Neraca perdagangan (ekspor - impor)" value={fmt(r.neracaDagang)} />
        <Row label="Transaksi berjalan" value={fmt(r.transaksiBerjalan)} tone={r.transaksiBerjalan >= 0 ? "pos" : "neg"} />
      </div>

      <div className={`mt-3 rounded-xl p-4 text-center ${r.keseluruhan >= 0 ? "bg-emerald-50" : "bg-rose-50"}`}>
        <div className="text-xs text-ink-faint">Neraca pembayaran keseluruhan</div>
        <div className={`text-2xl font-extrabold tnum ${r.keseluruhan >= 0 ? "text-emerald-700" : "text-rose-700"}`}>{fmt(r.keseluruhan)}</div>
        <div className="mt-1 text-xs text-ink-faint">
          {r.keseluruhan >= 0 ? "Surplus: cadangan devisa bertambah." : "Defisit: cadangan devisa terpakai."}
        </div>
      </div>

      <p className="mt-3 text-xs text-ink-faint">
        Indonesia sering defisit transaksi berjalan (impor tinggi) yang ditutup aliran modal masuk. Selama keseluruhan terjaga dan cadangan devisa cukup ({">"} 3 bulan impor), kondisi ini terkendali.
      </p>
    </div>
  );
}

function Row({ label, value, tone }: { label: string; value: string; tone?: "pos" | "neg" }) {
  const c = tone === "pos" ? "text-emerald-700" : tone === "neg" ? "text-rose-700" : "text-ink";
  return (
    <div className="flex items-center justify-between">
      <span className="text-ink-soft">{label}</span>
      <span className={`tnum font-bold ${c}`}>{value}</span>
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
