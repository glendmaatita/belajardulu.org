import { useMemo, useState } from "react";
import { rupiah } from "../../lib/format";

const TARIF_PPH26 = 0.2; // tarif umum PPh 26 atas WP luar negeri

// Tax treaty (P3B) menurunkan tarif pemotongan atas penghasilan ke luar negeri
// asal penerima dapat menunjukkan Surat Keterangan Domisili (SKD/DGT).
const JENIS = [
  { id: "dividen", label: "Dividen", treaty: 0.1 },
  { id: "bunga", label: "Bunga", treaty: 0.1 },
  { id: "royalti", label: "Royalti", treaty: 0.15 },
];

export function KalkulatorTaxTreaty() {
  const [bruto, setBruto] = useState(1_000_000_000);
  const [jenis, setJenis] = useState("royalti");
  const [pakaiTreaty, setPakaiTreaty] = useState(true);

  const r = useMemo(() => {
    const j = JENIS.find((x) => x.id === jenis)!;
    const tarif = pakaiTreaty ? j.treaty : TARIF_PPH26;
    const potong = bruto * tarif;
    const hemat = bruto * (TARIF_PPH26 - j.treaty);
    return { j, tarif, potong, hemat };
  }, [bruto, jenis, pakaiTreaty]);

  return (
    <div className="my-6 card p-5">
      <div className="mb-1 text-sm font-bold text-brand-700">🌐 Kalkulator Tax Treaty (PPh 26 vs P3B)</div>
      <p className="mb-4 text-xs text-ink-faint">
        Tarif umum PPh 26 atas penghasilan ke wajib pajak luar negeri adalah 20%. Dengan tax treaty (P3B) dan SKD/DGT
        yang valid, tarifnya bisa turun. Tarif treaty di sini contoh ilustratif.
      </p>

      <div className="mb-3">
        <div className="mb-1 flex items-center justify-between">
          <span className="text-sm font-semibold text-ink-soft">Penghasilan bruto ke luar negeri</span>
          <span className="tnum text-sm font-bold text-ink">{rupiah(bruto)}</span>
        </div>
        <input
          type="range"
          min={100_000_000}
          max={10_000_000_000}
          step={100_000_000}
          value={bruto}
          onChange={(e) => setBruto(Number(e.target.value))}
          className="h-2 w-full cursor-pointer appearance-none rounded-full bg-line accent-brand-600"
        />
      </div>

      <div className="mb-3 flex flex-wrap gap-2">
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

      <label className="mb-4 flex cursor-pointer items-center gap-2 text-sm font-semibold text-ink-soft">
        <input type="checkbox" checked={pakaiTreaty} onChange={(e) => setPakaiTreaty(e.target.checked)} className="h-4 w-4 accent-brand-600" />
        Gunakan tarif tax treaty (SKD/DGT valid)
      </label>

      <div className="grid gap-3 sm:grid-cols-3">
        <Box label="Tarif berlaku" value={`${(r.tarif * 100).toFixed(0)}%`} color="text-sky-700" />
        <Box label="PPh 26 dipotong" value={rupiah(Math.round(r.potong))} color="text-rose-700" />
        <Box label="Hemat vs tarif 20%" value={rupiah(Math.round(r.hemat))} color="text-emerald-700" />
      </div>
      <p className="mt-3 rounded-lg bg-brand-50 px-3 py-2 text-sm text-brand-800">
        Tanpa SKD/DGT, tetap dipotong 20%. Tax treaty hanya berlaku bila syarat administratif dan beneficial owner
        terpenuhi.
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
