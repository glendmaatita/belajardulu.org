import { useMemo, useState } from "react";
import { rupiah } from "../../lib/format";

const ETH_KE_RUPIAH = 50_000_000; // ilustrasi: asumsi 1 ETH = Rp50.000.000
const GWEI_PER_ETH = 1_000_000_000;

const PRESET = [
  { nama: "Transfer", gas: 21_000 },
  { nama: "Swap", gas: 150_000 },
  { nama: "Mint NFT", gas: 280_000 },
];

// Biaya gas Ethereum = gas units x gas price (gwei), dikonversi ke ETH dan rupiah.
export function KalkulatorGasFee() {
  const [gasUnits, setGasUnits] = useState(21_000);
  const [gasPrice, setGasPrice] = useState(30); // gwei

  const r = useMemo(() => {
    const feeGwei = gasUnits * gasPrice;
    const feeEth = feeGwei / GWEI_PER_ETH;
    const feeRupiah = feeEth * ETH_KE_RUPIAH;
    return { feeGwei, feeEth, feeRupiah };
  }, [gasUnits, gasPrice]);

  return (
    <div className="my-6 card p-5">
      <div className="mb-1 text-sm font-bold text-brand-700">⛽ Kalkulator Biaya Gas Ethereum</div>
      <p className="mb-4 text-xs text-ink-faint">
        Setiap aksi di Ethereum butuh "gas". Biayanya = jumlah gas dikali harga gas (gwei). Transaksi sederhana murah, interaksi
        smart contract lebih mahal karena memerlukan lebih banyak gas.
      </p>

      <div className="mb-4 flex flex-wrap gap-2">
        {PRESET.map((p) => (
          <button
            key={p.nama}
            onClick={() => setGasUnits(p.gas)}
            className={`rounded-lg border px-3 py-1.5 text-xs font-bold ${gasUnits === p.gas ? "border-brand-500 bg-brand-50 text-brand-700" : "border-line bg-white text-ink-soft hover:bg-canvas"}`}
          >
            {p.nama} ({p.gas.toLocaleString("id-ID")})
          </button>
        ))}
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Slider label="Gas units" value={gasUnits} set={setGasUnits} min={21_000} max={500_000} step={1_000} fmt={(v) => v.toLocaleString("id-ID")} />
        <Slider label="Gas price" value={gasPrice} set={setGasPrice} min={1} max={200} step={1} fmt={(v) => `${v} gwei`} />
      </div>

      <div className="mt-5 grid gap-3 sm:grid-cols-3">
        <div className="rounded-xl bg-canvas p-4 text-center">
          <div className="text-xs text-ink-faint">Biaya (gwei)</div>
          <div className="text-xl font-extrabold tnum text-blue-700">{r.feeGwei.toLocaleString("id-ID")}</div>
        </div>
        <div className="rounded-xl bg-canvas p-4 text-center">
          <div className="text-xs text-ink-faint">Biaya (ETH)</div>
          <div className="text-xl font-extrabold tnum text-violet-700">{r.feeEth.toFixed(6)}</div>
        </div>
        <div className="rounded-xl bg-canvas p-4 text-center">
          <div className="text-xs text-ink-faint">Estimasi rupiah (ilustrasi)</div>
          <div className="text-xl font-extrabold tnum text-emerald-700">{rupiah(Math.round(r.feeRupiah))}</div>
        </div>
      </div>

      <p className="mt-4 text-xs text-ink-faint">
        Dengan harga gas yang sama, transfer biasa (21.000 gas) jauh lebih murah daripada swap (150.000) atau mint NFT (280.000),
        karena smart contract menjalankan lebih banyak perhitungan. Kurs Rp50.000.000 per ETH hanya ilustrasi.
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
