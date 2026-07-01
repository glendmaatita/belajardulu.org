import { useMemo, useState } from "react";
import { rupiah } from "../../lib/format";

// Jenis pemotongan/pemungutan yang umum bagi perusahaan.
const JENIS = [
  { id: "jasa", label: "Jasa (PPh 23)", tarif: 0.02, final: false, ket: "2% dari jumlah bruto jasa" },
  { id: "sewa-aset", label: "Sewa selain tanah (PPh 23)", tarif: 0.02, final: false, ket: "2% sewa peralatan/kendaraan" },
  { id: "dividen", label: "Dividen ke WP badan DN (PPh 23)", tarif: 0.15, final: false, ket: "15% (jika tak dikecualikan)" },
  { id: "sewa-tanah", label: "Sewa tanah/bangunan (PPh 4(2))", tarif: 0.1, final: true, ket: "10% final" },
  { id: "konstruksi", label: "Jasa konstruksi pelaksana kecil (PPh 4(2))", tarif: 0.0175, final: true, ket: "1,75% final" },
];

// Kalkulator withholding tax: hitung pajak yang dipotong dan jumlah yang diterima
// penyedia. Penting bagi arus kas: pajak dipotong di muka, disetor pemotong.
export function KalkulatorWithholding() {
  const [bruto, setBruto] = useState(100_000_000);
  const [jenis, setJenis] = useState("jasa");

  const r = useMemo(() => {
    const j = JENIS.find((x) => x.id === jenis)!;
    const potong = bruto * j.tarif;
    const diterima = bruto - potong;
    return { j, potong, diterima };
  }, [bruto, jenis]);

  return (
    <div className="my-6 card p-5">
      <div className="mb-1 text-sm font-bold text-brand-700">✂️ Kalkulator Withholding Tax</div>
      <p className="mb-4 text-xs text-ink-faint">
        Saat membayar pihak lain, perusahaan wajib memotong pajak dan menyetorkannya. Bagi penerima, ini kredit pajak
        (jika tidak final) atau pelunasan akhir (jika final).
      </p>

      <div className="mb-3">
        <div className="mb-1 flex items-center justify-between">
          <span className="text-sm font-semibold text-ink-soft">Nilai bruto transaksi</span>
          <span className="tnum text-sm font-bold text-ink">{rupiah(bruto)}</span>
        </div>
        <input
          type="range"
          min={5_000_000}
          max={1_000_000_000}
          step={5_000_000}
          value={bruto}
          onChange={(e) => setBruto(Number(e.target.value))}
          className="h-2 w-full cursor-pointer appearance-none rounded-full bg-line accent-brand-600"
        />
      </div>

      <div className="mb-4 flex flex-wrap gap-2">
        {JENIS.map((j) => (
          <button
            key={j.id}
            onClick={() => setJenis(j.id)}
            className={`rounded-lg px-3 py-1.5 text-xs font-semibold ${jenis === j.id ? "bg-brand-600 text-white" : "bg-canvas text-ink-soft"}`}
          >
            {j.label}
          </button>
        ))}
      </div>

      <div className="grid gap-3 sm:grid-cols-3">
        <Box label={`Tarif (${r.j.ket})`} value={`${(r.j.tarif * 100).toFixed(2)}%`} color="text-sky-700" />
        <Box label="Pajak dipotong" value={rupiah(Math.round(r.potong))} color="text-rose-700" />
        <Box label="Diterima penyedia" value={rupiah(Math.round(r.diterima))} color="text-emerald-700" />
      </div>
      <p className="mt-3 rounded-lg bg-brand-50 px-3 py-2 text-sm text-brand-800">
        {r.j.final
          ? "Bersifat final: pajak ini menjadi pelunasan akhir, tidak diperhitungkan lagi di SPT Tahunan penyedia."
          : "Tidak final: bukti potong menjadi kredit pajak yang mengurangi PPh terutang penyedia di akhir tahun."}
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
