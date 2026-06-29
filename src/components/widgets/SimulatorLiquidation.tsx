import { useMemo, useState } from "react";

const THRESHOLD = 0.8; // ambang likuidasi tetap 80%

// Kesehatan posisi pinjaman DeFi: pantau health factor agar jaminan tidak dilikuidasi.
export function SimulatorLiquidation() {
  const [jaminanAwal, setJaminanAwal] = useState(10_000); // nilai jaminan awal (USD)
  const [pinjaman, setPinjaman] = useState(5_000); // jumlah dipinjam (USD)
  const [hargaRelatif, setHargaRelatif] = useState(100); // harga jaminan sekarang relatif (% dari awal)

  const r = useMemo(() => {
    const nilaiSekarang = jaminanAwal * (hargaRelatif / 100);
    const healthFactor = pinjaman > 0 ? (nilaiSekarang * THRESHOLD) / pinjaman : Infinity;
    // Titik likuidasi: harga relatif saat health factor = 1.
    const hargaLikuidasiPct = jaminanAwal > 0 ? (pinjaman / (jaminanAwal * THRESHOLD)) * 100 : 0;
    return { nilaiSekarang, healthFactor, hargaLikuidasiPct };
  }, [jaminanAwal, pinjaman, hargaRelatif]);

  const status =
    r.healthFactor < 1
      ? { label: "DILIKUIDASI", cls: "bg-rose-100 text-rose-700", bar: "bg-rose-500" }
      : r.healthFactor <= 1.3
        ? { label: "Berisiko", cls: "bg-amber-100 text-amber-700", bar: "bg-amber-500" }
        : { label: "Aman", cls: "bg-emerald-100 text-emerald-700", bar: "bg-emerald-500" };

  const hfDisplay = isFinite(r.healthFactor) ? r.healthFactor.toFixed(2) : "tak terhingga";
  const barWidth = Math.min(100, isFinite(r.healthFactor) ? (r.healthFactor / 2) * 100 : 100);

  return (
    <div className="my-6 card p-5">
      <div className="mb-1 text-sm font-bold text-brand-700">Simulator Likuidasi Pinjaman DeFi</div>
      <p className="mb-4 text-xs text-ink-faint">
        Di DeFi kamu meminjam dengan menaruh jaminan (collateral). Bila harga jaminan jatuh, posisimu bisa dilikuidasi.
        Geser harga jaminan dan lihat health factor-nya bergerak.
      </p>

      <div className="grid gap-4 sm:grid-cols-2">
        <Slider label="Nilai jaminan awal" value={jaminanAwal} set={setJaminanAwal} min={1_000} max={50_000} step={500} fmt={(v) => `$${v.toLocaleString("id-ID")}`} />
        <Slider label="Jumlah dipinjam" value={pinjaman} set={setPinjaman} min={500} max={40_000} step={500} fmt={(v) => `$${v.toLocaleString("id-ID")}`} />
        <Slider label="Harga jaminan sekarang" value={hargaRelatif} set={setHargaRelatif} min={30} max={150} step={1} fmt={(v) => `${v}% dari awal`} />
        <div className="flex items-end">
          <p className="text-xs text-ink-faint">
            Ambang likuidasi (liquidation threshold) tetap <b>{Math.round(THRESHOLD * 100)}%</b>.
          </p>
        </div>
      </div>

      <div className="mt-5 rounded-xl bg-canvas p-4 text-center">
        <div className="text-xs text-ink-faint">Health factor</div>
        <div className="text-3xl font-extrabold tnum text-ink">{hfDisplay}</div>
        <div className={`mt-2 inline-block rounded-full px-3 py-1 text-xs font-bold ${status.cls}`}>{status.label}</div>
      </div>

      <div className="mt-3 h-3 w-full overflow-hidden rounded-full bg-line">
        <div className={`h-full rounded-full ${status.bar}`} style={{ width: `${barWidth}%` }} />
      </div>
      <p className="mt-1 text-center text-xs text-ink-faint">Health factor 1,00 adalah garis batas likuidasi.</p>

      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        <div className="rounded-xl border border-line bg-canvas p-3 text-center">
          <div className="text-xs text-ink-faint">Nilai jaminan sekarang</div>
          <div className="text-lg font-bold tnum text-ink">${Math.round(r.nilaiSekarang).toLocaleString("id-ID")}</div>
        </div>
        <div className="rounded-xl border border-line bg-canvas p-3 text-center">
          <div className="text-xs text-ink-faint">Titik likuidasi (harga jaminan)</div>
          <div className="text-lg font-bold tnum text-rose-700">{r.hargaLikuidasiPct.toFixed(0)}% dari awal</div>
        </div>
      </div>

      <p className="mt-3 text-xs text-ink-faint">
        Saat harga jaminan turun ke <b>{r.hargaLikuidasiPct.toFixed(0)}%</b> dari nilai awal, health factor menyentuh 1,00 dan
        posisi mulai dilikuidasi. Pinjam lebih sedikit dari jaminan agar punya bantalan terhadap penurunan harga.
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
