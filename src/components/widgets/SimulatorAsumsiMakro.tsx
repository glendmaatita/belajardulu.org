import { useMemo, useState } from "react";

// Asumsi makro APBN: perubahan kurs, harga minyak (ICP), dan pertumbuhan menggeser postur APBN.
export function SimulatorAsumsiMakro() {
  const [kurs, setKurs] = useState(16000); // Rp/USD, asumsi 15.500
  const [icp, setIcp] = useState(80); // USD/barel, asumsi 80
  const [growth, setGrowth] = useState(5.2); // %, asumsi 5,2

  const r = useMemo(() => {
    const kursAsumsi = 15500;
    const icpAsumsi = 80;
    const growthAsumsi = 5.2;
    // ilustrasi sensitivitas (triliun rupiah dampak ke saldo APBN)
    const dampakKurs = ((kurs - kursAsumsi) / 100) * 1.2; // tiap Rp100 pelemahan menambah ~Rp1,2 T beban neto (bunga utang valas)
    const dampakIcp = (icp - icpAsumsi) * 0.8; // tiap USD1 ICP naik: penerimaan migas naik tapi subsidi juga; neto +0,8 T
    const dampakGrowth = (growth - growthAsumsi) * 40; // tiap 0,1% pertumbuhan: ~Rp4 T penerimaan
    const totalDampak = -dampakKurs + dampakIcp + dampakGrowth;
    return { dampakKurs: -dampakKurs, dampakIcp, dampakGrowth, totalDampak };
  }, [kurs, icp, growth]);

  const fmt = (n: number) => (n >= 0 ? "+" : "") + n.toFixed(1) + " T";

  return (
    <div className="my-6 card p-5">
      <div className="mb-1 text-sm font-bold text-brand-700">🎛️ Simulator Asumsi Makro APBN</div>
      <p className="mb-4 text-xs text-ink-faint">
        APBN disusun atas asumsi dasar ekonomi makro. Saat realisasi meleset dari asumsi, postur APBN bergeser. Ubah asumsi dan lihat perkiraan dampaknya (ilustrasi).
      </p>

      <div className="grid gap-4 sm:grid-cols-3">
        <Slider label="Nilai tukar (asumsi 15.500)" value={kurs} set={setKurs} min={14000} max={18000} step={100} fmt={(v) => `Rp${v.toLocaleString("id-ID")}`} />
        <Slider label="Harga minyak ICP (asumsi 80)" value={icp} set={setIcp} min={50} max={120} step={1} fmt={(v) => `$${v}`} />
        <Slider label="Pertumbuhan (asumsi 5,2%)" value={growth} set={setGrowth} min={3} max={7} step={0.1} fmt={(v) => `${v}%`} />
      </div>

      <div className="mt-5 space-y-1.5 rounded-xl bg-canvas p-4 text-sm">
        <Row label="Dampak nilai tukar" value={fmt(r.dampakKurs)} />
        <Row label="Dampak harga minyak (ICP)" value={fmt(r.dampakIcp)} />
        <Row label="Dampak pertumbuhan ekonomi" value={fmt(r.dampakGrowth)} />
      </div>

      <div className={`mt-3 rounded-xl p-4 text-center ${r.totalDampak >= 0 ? "bg-emerald-50" : "bg-rose-50"}`}>
        <div className="text-xs text-ink-faint">Perkiraan dampak neto ke saldo APBN</div>
        <div className={`text-2xl font-extrabold tnum ${r.totalDampak >= 0 ? "text-emerald-700" : "text-rose-700"}`}>{fmt(r.totalDampak)}</div>
      </div>

      <p className="mt-3 text-xs text-ink-faint">
        Pertumbuhan yang lebih tinggi menambah penerimaan pajak; rupiah yang melemah menambah beban bunga utang valas dan impor. Angka di sini ilustratif untuk memahami arah sensitivitas, bukan proyeksi resmi.
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
