import { useMemo, useState } from "react";
import { rupiah } from "../../lib/format";

// Paylater dan pinjol terasa ringan karena dicicil, tetapi menumpuk cepat dan
// menggerus penghasilan. Simulasi total cicilan beberapa barang sekaligus.
export function SimulatorPaylater() {
  const [penghasilan, setPenghasilan] = useState(5_000_000);
  const [barang, setBarang] = useState(3); // jumlah barang dicicil paylater
  const [cicilanPerBarang, setCicilanPerBarang] = useState(400_000);
  const [bungaBulan, setBungaBulan] = useState(3); // % per bulan (ilustrasi paylater)

  const r = useMemo(() => {
    const totalCicilan = barang * cicilanPerBarang;
    const rasio = penghasilan > 0 ? (totalCicilan / penghasilan) * 100 : 0;
    // ilustrasi total bunga setahun bila cicilan mengandung bunga bulanan
    const bungaSetahun = totalCicilan * (bungaBulan / 100) * 12;
    return { totalCicilan, rasio, bungaSetahun };
  }, [penghasilan, barang, cicilanPerBarang, bungaBulan]);

  const bahaya = r.rasio > 30;

  return (
    <div className="my-6 card p-5">
      <div className="mb-1 text-sm font-bold text-brand-700">📱 Simulator Jebakan Paylater</div>
      <p className="mb-4 text-xs text-ink-faint">
        Paylater dan pinjol membuat belanja terasa ringan karena dicicil. Tetapi bila menumpuk, cicilannya bisa
        melahap sebagian besar penghasilan dan bunganya besar. Lihat efek gabungannya.
      </p>

      <Slider label="Penghasilan per bulan" value={penghasilan} min={2_000_000} max={20_000_000} step={500_000} fmt={rupiah} onChange={setPenghasilan} />
      <Slider label="Jumlah barang dicicil paylater" value={barang} min={1} max={10} step={1} fmt={(n) => `${n} barang`} onChange={setBarang} />
      <Slider label="Rata-rata cicilan per barang" value={cicilanPerBarang} min={100_000} max={2_000_000} step={50_000} fmt={rupiah} onChange={setCicilanPerBarang} />
      <Slider label="Bunga/biaya per bulan (ilustrasi)" value={bungaBulan} min={0} max={6} step={0.5} fmt={(n) => `${n}%`} onChange={setBungaBulan} />

      <div className="mt-5 grid gap-3 sm:grid-cols-3">
        <Box label="Total cicilan per bulan" value={rupiah(Math.round(r.totalCicilan))} color="text-brand-700" />
        <div className={`rounded-xl p-4 ${bahaya ? "bg-rose-50" : "bg-emerald-50"}`}>
          <div className="text-xs text-ink-faint">Porsi dari penghasilan</div>
          <div className={`text-lg font-extrabold tnum ${bahaya ? "text-rose-700" : "text-emerald-700"}`}>{r.rasio.toFixed(0)}%</div>
        </div>
        <Box label="Perkiraan bunga setahun" value={rupiah(Math.round(r.bungaSetahun))} color="text-rose-700" />
      </div>
      <p className="mt-3 rounded-lg bg-brand-50 px-3 py-2 text-sm text-brand-800">
        {bahaya
          ? "Cicilan sudah melebihi 30% penghasilan, tanda bahaya. Rem belanja paylater dan lunasi yang ada dulu."
          : "Masih terkendali, tetapi ingat: paylater paling aman dipakai hanya untuk yang benar-benar perlu dan bisa dilunasi."}
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
