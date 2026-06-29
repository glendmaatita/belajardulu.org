import { useState } from "react";

// Automated Market Maker dengan rumus produk konstan x*y=k: harga bergerak otomatis mengikuti rasio kolam.
export function SimulatorAMM() {
  const x0 = 1000; // TokenA di kolam
  const y0 = 1000; // TokenB di kolam
  const k = x0 * y0; // 1.000.000
  const [dx, setDx] = useState(50); // jumlah TokenA yang dijual

  const xBaru = x0 + dx;
  const yBaru = k / xBaru;
  const diterima = y0 - yBaru; // TokenB yang keluar dari kolam

  const hargaSpotSebelum = y0 / x0; // harga TokenA dalam TokenB
  const hargaSpotSesudah = yBaru / xBaru;
  const hargaEfektif = diterima / dx; // rata-rata harga yang benar-benar didapat
  const priceImpact = (1 - hargaSpotSesudah / hargaSpotSebelum) * 100;

  return (
    <div className="my-6 card p-5">
      <div className="mb-1 text-sm font-bold text-brand-700">🔄 Simulator Automated Market Maker</div>
      <p className="mb-4 text-xs text-ink-faint">
        Tidak ada buku pesanan. Harga ditentukan rumus produk konstan x x y = k. Makin besar order, makin jauh harga bergeser (slippage).
      </p>

      <div className="mb-4 rounded-xl bg-canvas p-3 text-center text-xs text-ink-faint">
        Kolam awal: <b className="text-ink">{x0} TokenA</b> dan <b className="text-ink">{y0} TokenB</b>, sehingga <b className="text-ink">k = {k.toLocaleString("id-ID")}</b>
      </div>

      <Slider label="Jumlah TokenA yang dijual" value={dx} set={setDx} min={1} max={500} step={1} fmt={(v) => `${v} TokenA`} />

      <div className="mt-5 rounded-xl bg-emerald-50 p-4 text-center">
        <div className="text-xs text-emerald-700">TokenB yang kamu terima</div>
        <div className="text-3xl font-extrabold tnum text-emerald-700">{diterima.toFixed(2)}</div>
        <div className="mt-1 text-xs text-emerald-700">Harga efektif: {hargaEfektif.toFixed(4)} TokenB per TokenA</div>
      </div>

      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        <div className="rounded-xl bg-canvas p-4">
          <div className="mb-2 text-xs font-bold text-ink-soft">Kolam sebelum</div>
          <Row label="TokenA" value={x0.toFixed(2)} />
          <Row label="TokenB" value={y0.toFixed(2)} />
          <Row label="Harga spot" value={hargaSpotSebelum.toFixed(4)} />
        </div>
        <div className="rounded-xl bg-canvas p-4">
          <div className="mb-2 text-xs font-bold text-ink-soft">Kolam sesudah</div>
          <Row label="TokenA" value={xBaru.toFixed(2)} />
          <Row label="TokenB" value={yBaru.toFixed(2)} />
          <Row label="Harga spot" value={hargaSpotSesudah.toFixed(4)} />
        </div>
      </div>

      <div className="mt-4 rounded-xl bg-amber-50 p-4 text-center">
        <div className="text-xs text-amber-700">Price impact (pergeseran harga spot)</div>
        <div className="text-2xl font-extrabold tnum text-amber-700">{priceImpact.toFixed(2)}%</div>
      </div>

      <p className="mt-3 text-xs text-ink-faint">
        Order kecil hampir tidak menggeser harga. Order besar menguras satu sisi kolam, harga spot melonjak, dan kamu menerima lebih sedikit per token. Itulah slippage.
      </p>
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between py-0.5 text-sm">
      <span className="text-ink-faint">{label}</span>
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
