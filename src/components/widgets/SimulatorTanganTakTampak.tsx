import { useMemo, useState } from "react";

// Tangan tak tampak: pada harga di atas keseimbangan muncul surplus (barang menumpuk),
// di bawahnya muncul kelangkaan (antre). Pasar mendorong harga menuju titik seimbang.
export function SimulatorTanganTakTampak() {
  const [harga, setHarga] = useState(10); // ribu rupiah

  const r = useMemo(() => {
    const qd = Math.max(0, 100 - 2 * harga); // permintaan turun saat harga naik
    const qs = Math.max(0, 10 + 3 * harga); // penawaran naik saat harga naik
    const eqP = 18; // 100-2p = 10+3p -> p=18
    const selisih = qs - qd; // + surplus, - kelangkaan
    return { qd, qs, eqP, selisih };
  }, [harga]);

  const status = Math.abs(r.selisih) <= 4
    ? { t: "Mendekati keseimbangan", c: "bg-emerald-50 text-emerald-700", arah: "Harga sudah pas, pasar tenang." }
    : r.selisih > 0
    ? { t: "Surplus (barang menumpuk)", c: "bg-amber-50 text-amber-700", arah: "Penjual menurunkan harga untuk menghabiskan stok." }
    : { t: "Kelangkaan (antre)", c: "bg-rose-50 text-rose-700", arah: "Pembeli berebut, harga terdorong naik." };

  const maks = 130;
  return (
    <div className="my-6 card p-5">
      <div className="mb-1 text-sm font-bold text-brand-700">🤝 Simulator Tangan Tak Tampak</div>
      <p className="mb-4 text-xs text-ink-faint">
        Atur harga sebuah barang. Lihat bagaimana kelebihan atau kekurangan mendorong harga kembali ke titik keseimbangan, tanpa ada yang memerintah.
      </p>

      <Slider label="Harga yang ditetapkan" value={harga} set={setHarga} min={2} max={40} step={1} fmt={(v) => `Rp${v}.000`} />

      <div className="mt-5 space-y-2">
        <Bar label="Permintaan (Qd)" value={r.qd} maks={maks} color="bg-brand-500" />
        <Bar label="Penawaran (Qs)" value={r.qs} maks={maks} color="bg-amber-500" />
      </div>

      <div className={`mt-4 rounded-xl p-3 text-center text-sm ${status.c}`}>
        <div className="font-bold">{status.t}</div>
        <div className="mt-1">{status.arah}</div>
        <div className="mt-1 text-xs text-ink-faint">Harga keseimbangan ada di sekitar Rp{r.eqP}.000 (Qd = Qs).</div>
      </div>
    </div>
  );
}

function Bar({ label, value, maks, color }: { label: string; value: number; maks: number; color: string }) {
  return (
    <div className="flex items-center gap-3">
      <span className="w-32 shrink-0 text-xs font-semibold text-ink-soft">{label}</span>
      <div className="h-6 flex-1 overflow-hidden rounded-lg bg-canvas">
        <div className={`h-full rounded-lg ${color}`} style={{ width: `${(value / maks) * 100}%` }} />
      </div>
      <span className="tnum w-12 shrink-0 text-right text-sm font-bold text-ink">{Math.round(value)}</span>
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
