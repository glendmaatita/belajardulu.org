import { useMemo, useState } from "react";
import { rupiah } from "../../lib/format";

// Nilai pabean = nilai transaksi + biaya yang harus ditambahkan (Pasal pembentuk nilai pabean).
// Metode utama: Transaction Value (CIF). Royalti & assist menambah nilai pabean bila relevan.
export function KalkulatorNilaiPabean() {
  const [hargaBarang, setHargaBarang] = useState(100_000_000); // harga yang dibayar (FOB)
  const [freight, setFreight] = useState(8_000_000);
  const [asuransi, setAsuransi] = useState(1_500_000);
  const [royalti, setRoyalti] = useState(0); // royalti sebagai syarat jual beli
  const [assist, setAssist] = useState(0); // barang/jasa yang dipasok pembeli (cetakan, desain)

  const r = useMemo(() => {
    const nilaiPabean = hargaBarang + freight + asuransi + royalti + assist;
    return { nilaiPabean };
  }, [hargaBarang, freight, asuransi, royalti, assist]);

  const komponen = [
    { label: "Harga barang (FOB)", value: hargaBarang, warna: "#0ea5e9" },
    { label: "Freight (angkut)", value: freight, warna: "#10b981" },
    { label: "Asuransi", value: asuransi, warna: "#6366f1" },
    { label: "Royalti", value: royalti, warna: "#f59e0b" },
    { label: "Assist", value: assist, warna: "#ef4444" },
  ].filter((k) => k.value > 0);

  return (
    <div className="my-6 card p-5">
      <div className="mb-1 text-sm font-bold text-brand-700">⚖️ Kalkulator Nilai Pabean</div>
      <p className="mb-4 text-xs text-ink-faint">
        Nilai pabean memakai metode nilai transaksi (CIF) ditambah biaya tertentu seperti royalti dan assist. Ini menjadi dasar perhitungan bea masuk.
      </p>

      <div className="grid gap-4 sm:grid-cols-2">
        <Slider label="Harga barang (FOB)" value={hargaBarang} set={setHargaBarang} min={10_000_000} max={1_000_000_000} step={10_000_000} fmt={(v) => rupiah(v)} />
        <Slider label="Freight (angkut)" value={freight} set={setFreight} min={0} max={100_000_000} step={1_000_000} fmt={(v) => rupiah(v)} />
        <Slider label="Asuransi" value={asuransi} set={setAsuransi} min={0} max={50_000_000} step={500_000} fmt={(v) => rupiah(v)} />
        <Slider label="Royalti (syarat jual beli)" value={royalti} set={setRoyalti} min={0} max={100_000_000} step={1_000_000} fmt={(v) => rupiah(v)} />
        <Slider label="Assist (dipasok pembeli)" value={assist} set={setAssist} min={0} max={100_000_000} step={1_000_000} fmt={(v) => rupiah(v)} />
      </div>

      <div className="mt-5 flex h-7 overflow-hidden rounded-lg">
        {komponen.map((k, i) => {
          const w = (k.value / r.nilaiPabean) * 100;
          return (
            <div key={i} className="flex items-center justify-center text-[10px] font-bold text-white" style={{ width: `${w}%`, background: k.warna }}>
              {w > 12 ? k.label.split(" ")[0] : ""}
            </div>
          );
        })}
      </div>

      <div className="mt-4 rounded-xl bg-emerald-50 p-4 text-center">
        <div className="text-xs text-ink-faint">Nilai Pabean (dasar perhitungan bea masuk)</div>
        <div className="text-3xl font-extrabold tnum text-emerald-700">{rupiah(Math.round(r.nilaiPabean))}</div>
      </div>

      <p className="mt-3 text-xs text-ink-faint">
        Catatan: royalti dan assist hanya ditambahkan bila menjadi syarat jual beli barang impor. Salah menghilangkan komponen ini dapat dianggap kurang bayar saat audit pabean.
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
      <input type="range" min={min} max={max} step={step} value={value} onChange={(e) => set(Number(e.target.value))} className="h-2 w-full cursor-pointer appearance-none rounded-full bg-slate-200 accent-brand-600" />
    </div>
  );
}
