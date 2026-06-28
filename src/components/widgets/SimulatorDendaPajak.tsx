import { useMemo, useState } from "react";
import { rupiah, angka } from "../../lib/format";

const DENDA_LAPOR: Record<string, { label: string; denda: number }> = {
  tahunanOP: { label: "SPT Tahunan Orang Pribadi", denda: 100_000 },
  tahunanBadan: { label: "SPT Tahunan Badan", denda: 1_000_000 },
  masaPPN: { label: "SPT Masa PPN", denda: 500_000 },
  masaLain: { label: "SPT Masa lainnya (mis. PPh)", denda: 100_000 },
};

const BUNGA_BULAN = 0.011; // ilustrasi ~1,1%/bulan (ditetapkan bulanan oleh Menkeu)

export function SimulatorDendaPajak() {
  const [jenis, setJenis] = useState("tahunanOP");
  const [pajak, setPajak] = useState(3_000_000); // pajak yang telat dibayar
  const [bulan, setBulan] = useState(3); // bulan keterlambatan bayar

  const r = useMemo(() => {
    const dendaLapor = DENDA_LAPOR[jenis].denda;
    const efektifBulan = Math.min(bulan, 24); // maksimal 24 bulan
    const bungaBayar = pajak * BUNGA_BULAN * efektifBulan;
    return { dendaLapor, bungaBayar, total: dendaLapor + bungaBayar, efektifBulan };
  }, [jenis, pajak, bulan]);

  return (
    <div className="my-6 card p-5">
      <div className="mb-1 text-sm font-bold text-brand-700">⏰ Simulator Denda Telat Pajak</div>
      <p className="mb-4 text-xs text-ink-faint">
        Telat itu mahal. Ada 2 jenis denda: telat <b>lapor</b> (nilai tetap) dan telat <b>bayar</b> (bunga per bulan).
      </p>

      <label className="block">
        <span className="mb-1 block text-sm font-semibold text-ink-soft">Jenis SPT yang telat dilaporkan</span>
        <select
          value={jenis}
          onChange={(e) => setJenis(e.target.value)}
          className="w-full rounded-lg border border-line-strong px-3 py-2 text-sm focus:border-brand-500 focus:outline-none"
        >
          {Object.entries(DENDA_LAPOR).map(([k, v]) => (
            <option key={k} value={k}>
              {v.label} (denda {rupiah(v.denda)})
            </option>
          ))}
        </select>
      </label>

      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <div>
          <div className="mb-1 flex items-center justify-between">
            <span className="text-sm font-semibold text-ink-soft">Pajak yang telat dibayar</span>
            <span className="tnum text-sm font-bold text-ink">{rupiah(pajak)}</span>
          </div>
          <input
            type="range"
            min={0}
            max={50_000_000}
            step={500_000}
            value={pajak}
            onChange={(e) => setPajak(Number(e.target.value))}
            className="h-2 w-full cursor-pointer appearance-none rounded-full bg-line accent-brand-600"
          />
        </div>
        <div>
          <div className="mb-1 flex items-center justify-between">
            <span className="text-sm font-semibold text-ink-soft">Lama terlambat bayar</span>
            <span className="tnum text-sm font-bold text-ink">{angka(bulan)} bulan</span>
          </div>
          <input
            type="range"
            min={0}
            max={24}
            step={1}
            value={bulan}
            onChange={(e) => setBulan(Number(e.target.value))}
            className="h-2 w-full cursor-pointer appearance-none rounded-full bg-line accent-brand-600"
          />
        </div>
      </div>

      <div className="mt-5 rounded-xl bg-canvas p-4">
        <div className="grid grid-cols-2 gap-3">
          <Card label="Denda telat lapor" value={rupiah(r.dendaLapor)} accent="text-amber-700" />
          <Card label="Bunga telat bayar" value={rupiah(Math.round(r.bungaBayar))} accent="text-rose-600" />
        </div>
        <div className="mt-3 rounded-lg bg-rose-50 px-3 py-2 text-center">
          <div className="text-xs text-rose-700">Total kerugian karena telat</div>
          <div className="text-xl font-extrabold tnum text-rose-700">{rupiah(Math.round(r.total))}</div>
        </div>
        <p className="mt-3 text-xs text-ink-faint">
          Bunga telat bayar dihitung per bulan (ilustrasi ~1,1%, tarifnya ditetapkan bulanan oleh Menteri Keuangan,
          maksimal 24 bulan). Kesimpulannya: lapor dan bayar tepat waktu jauh lebih murah.
        </p>
      </div>
    </div>
  );
}

function Card({ label, value, accent }: { label: string; value: string; accent: string }) {
  return (
    <div className="rounded-lg bg-white p-3">
      <div className="text-xs text-ink-faint">{label}</div>
      <div className={`text-lg font-extrabold tnum ${accent}`}>{value}</div>
    </div>
  );
}
