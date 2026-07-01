import { useMemo, useState } from "react";
import { rupiah } from "../../lib/format";

// PPh 22 dipungut atas transaksi tertentu. Untuk impor: 2,5% dari nilai impor
// bila punya Angka Pengenal Impor (API), 7,5% bila tanpa API. Untuk pembelian
// oleh bendahara pemerintah: 1,5%. Bersifat tidak final (jadi kredit pajak).
const JENIS = [
  { id: "impor-api", label: "Impor (ber-API)", tarif: 0.025, ket: "2,5% nilai impor" },
  { id: "impor-nonapi", label: "Impor (tanpa API)", tarif: 0.075, ket: "7,5% nilai impor" },
  { id: "bendahara", label: "Penjualan ke bendahara", tarif: 0.015, ket: "1,5% nilai pembelian" },
];

export function KalkulatorPPh22() {
  const [nilai, setNilai] = useState(1_000_000_000);
  const [jenis, setJenis] = useState("impor-api");

  const r = useMemo(() => {
    const j = JENIS.find((x) => x.id === jenis)!;
    const pph22 = nilai * j.tarif;
    return { j, pph22 };
  }, [nilai, jenis]);

  return (
    <div className="my-6 card p-5">
      <div className="mb-1 text-sm font-bold text-brand-700">🚢 Kalkulator PPh 22</div>
      <p className="mb-4 text-xs text-ink-faint">
        PPh 22 dipungut di muka atas impor dan transaksi tertentu. Tarif impor lebih ringan bila importir punya Angka
        Pengenal Impor (API). PPh 22 menjadi kredit pajak yang mengurangi PPh terutang akhir tahun.
      </p>

      <div className="mb-3">
        <div className="mb-1 flex items-center justify-between">
          <span className="text-sm font-semibold text-ink-soft">Nilai transaksi/impor</span>
          <span className="tnum text-sm font-bold text-ink">{rupiah(nilai)}</span>
        </div>
        <input type="range" min={100_000_000} max={10_000_000_000} step={100_000_000} value={nilai} onChange={(e) => setNilai(Number(e.target.value))} className="h-2 w-full cursor-pointer appearance-none rounded-full bg-line accent-brand-600" />
      </div>

      <div className="mb-4 flex flex-wrap gap-2">
        {JENIS.map((j) => (
          <button key={j.id} onClick={() => setJenis(j.id)} className={`rounded-lg px-3 py-1.5 text-xs font-semibold ${jenis === j.id ? "bg-brand-600 text-white" : "bg-canvas text-ink-soft"}`}>
            {j.label}
          </button>
        ))}
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        <Box label={`Tarif (${r.j.ket})`} value={`${(r.j.tarif * 100).toFixed(1)}%`} color="text-sky-700" />
        <Box label="PPh 22 dipungut" value={rupiah(Math.round(r.pph22))} color="text-brand-700" />
      </div>
      <p className="mt-3 rounded-lg bg-brand-50 px-3 py-2 text-sm text-brand-800">
        Mengurus API menurunkan tarif impor dari 7,5% ke 2,5%, sebuah penghematan arus kas yang nyata bagi importir
        rutin. PPh 22 ini tetap bisa dikreditkan di SPT.
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
