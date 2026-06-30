import { useMemo, useState } from "react";
import { rupiah } from "../../lib/format";

// EOQ = akar(2 D S / H). Jumlah pesan yang meminimalkan total biaya pesan + simpan.
export function KalkulatorEOQ() {
  const [demand, setDemand] = useState(12000); // kebutuhan per tahun (unit)
  const [biayaPesan, setBiayaPesan] = useState(300000); // biaya sekali pesan (Rp)
  const [biayaSimpan, setBiayaSimpan] = useState(6000); // biaya simpan per unit per tahun (Rp)

  const r = useMemo(() => {
    const eoq = Math.sqrt((2 * demand * biayaPesan) / biayaSimpan);
    const frekuensi = demand / eoq; // berapa kali pesan per tahun
    const totalPesan = frekuensi * biayaPesan;
    const totalSimpan = (eoq / 2) * biayaSimpan;
    const totalBiaya = totalPesan + totalSimpan;
    return { eoq, frekuensi, totalPesan, totalSimpan, totalBiaya };
  }, [demand, biayaPesan, biayaSimpan]);

  return (
    <div className="my-6 card p-5">
      <div className="mb-1 text-sm font-bold text-brand-700">📦 Kalkulator EOQ</div>
      <p className="mb-4 text-xs text-ink-faint">
        Hitung jumlah pesan paling hemat: titik temu biaya memesan dan biaya menyimpan.
      </p>

      <div className="grid gap-4 sm:grid-cols-2">
        <Slider label="Kebutuhan per tahun" value={demand} set={setDemand} min={1000} max={60000} step={1000} fmt={(v) => `${v.toLocaleString("id-ID")} unit`} />
        <Slider label="Biaya sekali pesan" value={biayaPesan} set={setBiayaPesan} min={50000} max={1000000} step={50000} fmt={(v) => rupiah(v)} />
        <Slider label="Biaya simpan / unit / tahun" value={biayaSimpan} set={setBiayaSimpan} min={1000} max={20000} step={500} fmt={(v) => rupiah(v)} />
      </div>

      <div className="mt-5 rounded-xl bg-emerald-50 p-4 text-center">
        <div className="text-xs text-ink-faint">Jumlah pesan optimal (EOQ)</div>
        <div className="text-3xl font-extrabold tnum text-emerald-700">{Math.round(r.eoq).toLocaleString("id-ID")} unit</div>
        <div className="mt-1 text-xs text-ink-faint">Memesan sekitar {r.frekuensi.toFixed(1)} kali per tahun.</div>
      </div>

      <div className="mt-3 space-y-1.5 rounded-xl bg-canvas p-4 text-sm">
        <Row label="Total biaya pesan per tahun" value={rupiah(Math.round(r.totalPesan))} />
        <Row label="Total biaya simpan per tahun" value={rupiah(Math.round(r.totalSimpan))} />
        <div className="my-1 border-t border-line" />
        <Row label="Total biaya persediaan minimum" value={rupiah(Math.round(r.totalBiaya))} />
      </div>
      <p className="mt-2 text-xs text-ink-faint">Pada titik EOQ, biaya pesan dan biaya simpan kira-kira seimbang.</p>
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
