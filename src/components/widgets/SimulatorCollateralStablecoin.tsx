import { useState } from "react";
import { angka } from "../../lib/format";

// Stablecoin beragunan kripto (model CDP): jaminan harus jauh lebih besar dari stablecoin yang dicetak.
export function SimulatorCollateralStablecoin() {
  const [eth, setEth] = useState(10); // jumlah ETH jaminan
  const [hargaEth, setHargaEth] = useState(2000); // harga ETH (USD)
  const [dicetak, setDicetak] = useState(8000); // stablecoin dicetak (USD)

  const nilaiCollateral = eth * hargaEth;
  const ratio = dicetak > 0 ? (nilaiCollateral / dicetak) * 100 : 0;
  const ambangLikuidasi = 150; // %
  const hargaLikuidasi = eth > 0 ? (dicetak * (ambangLikuidasi / 100)) / eth : 0;

  let badge = { label: "Aman", tone: "bg-emerald-100 text-emerald-700" };
  if (ratio < ambangLikuidasi) badge = { label: "Akan dilikuidasi", tone: "bg-rose-100 text-rose-700" };
  else if (ratio < 200) badge = { label: "Hati-hati", tone: "bg-amber-100 text-amber-700" };

  return (
    <div className="my-6 card p-5">
      <div className="mb-1 text-sm font-bold text-brand-700">🛡️ Simulator Stablecoin Beragunan Kripto</div>
      <p className="mb-4 text-xs text-ink-faint">
        Untuk mencetak stablecoin, kamu mengunci jaminan kripto yang lebih besar nilainya. Jika harga jaminan jatuh, posisi bisa dilikuidasi.
      </p>

      <div className="grid gap-4 sm:grid-cols-2">
        <Slider label="Jaminan ETH" value={eth} set={setEth} min={1} max={50} step={1} fmt={(v) => `${v} ETH`} />
        <Slider label="Harga ETH" value={hargaEth} set={setHargaEth} min={500} max={5000} step={50} fmt={(v) => `$${angka(v)}`} />
        <Slider label="Stablecoin dicetak" value={dicetak} set={setDicetak} min={1000} max={60000} step={500} fmt={(v) => `$${angka(v)}`} />
      </div>

      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        <div className="rounded-xl bg-canvas p-4 text-center">
          <div className="text-xs text-ink-faint">Nilai jaminan</div>
          <div className="text-2xl font-extrabold tnum text-ink">${angka(nilaiCollateral)}</div>
        </div>
        <div className="rounded-xl bg-canvas p-4 text-center">
          <div className="text-xs text-ink-faint">Collateralization ratio</div>
          <div className="text-2xl font-extrabold tnum text-brand-700">{ratio.toFixed(0)}%</div>
          <span className={`mt-1 inline-block rounded-full px-3 py-0.5 text-xs font-bold ${badge.tone}`}>{badge.label}</span>
        </div>
      </div>

      <div className="mt-4 rounded-xl bg-rose-50 p-4 text-center">
        <div className="text-xs text-rose-700">Harga likuidasi ETH (saat ratio menyentuh {ambangLikuidasi}%)</div>
        <div className="text-2xl font-extrabold tnum text-rose-700">${angka(Math.round(hargaLikuidasi))}</div>
        <div className="mt-1 text-xs text-rose-700">
          Jika harga ETH turun ke angka ini, jaminanmu otomatis dijual untuk melunasi stablecoin.
        </div>
      </div>

      <p className="mt-3 text-xs text-ink-faint">
        Aturan main: pertahankan ratio jauh di atas {ambangLikuidasi}%. Makin tinggi rasio jaminan, makin tahan posisimu terhadap penurunan harga.
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
