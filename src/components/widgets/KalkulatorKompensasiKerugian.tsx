import { useMemo, useState } from "react";
import { rupiah } from "../../lib/format";

const TARIF = 0.22;

// Kompensasi kerugian fiskal: rugi satu tahun boleh dikompensasikan ke laba
// 5 tahun berikutnya (Pasal 6 ayat 2 UU PPh). Sisa rugi yang belum terpakai
// setelah 5 tahun hangus.
export function KalkulatorKompensasiKerugian() {
  const [rugi, setRugi] = useState(2_000_000_000); // rugi tahun 2024
  const [labaTahunan, setLabaTahunan] = useState(500_000_000); // laba per tahun berikut

  const r = useMemo(() => {
    let sisaRugi = rugi;
    const rows: { th: number; laba: number; dipakai: number; pkp: number; pph: number }[] = [];
    for (let t = 1; t <= 5; t++) {
      const dipakai = Math.min(sisaRugi, labaTahunan);
      const pkp = labaTahunan - dipakai;
      sisaRugi -= dipakai;
      rows.push({ th: 2024 + t, laba: labaTahunan, dipakai, pkp, pph: pkp * TARIF });
    }
    const totalDipakai = rugi - sisaRugi;
    const hangus = sisaRugi;
    const hemat = totalDipakai * TARIF;
    return { rows, totalDipakai, hangus, hemat };
  }, [rugi, labaTahunan]);

  return (
    <div className="my-6 card p-5">
      <div className="mb-1 text-sm font-bold text-brand-700">🔄 Kalkulator Kompensasi Kerugian</div>
      <p className="mb-4 text-xs text-ink-faint">
        Rugi fiskal tahun 2024 dapat dikurangkan dari laba 5 tahun berikutnya (2025 sampai 2029). Sisa rugi yang
        belum terpakai setelah lima tahun hangus dan tidak bisa dipakai lagi.
      </p>

      <Slider label="Rugi fiskal tahun 2024" value={rugi} min={200_000_000} max={6_000_000_000} step={100_000_000} onChange={setRugi} />
      <Slider label="Laba fiskal per tahun (2025-2029)" value={labaTahunan} min={0} max={3_000_000_000} step={50_000_000} onChange={setLabaTahunan} />

      <div className="mt-4 overflow-hidden rounded-xl border border-line">
        <table className="w-full text-sm">
          <thead className="bg-canvas text-ink-faint">
            <tr>
              <th className="px-3 py-2 text-left">Tahun</th>
              <th className="px-3 py-2 text-right">Rugi dipakai</th>
              <th className="px-3 py-2 text-right">PKP</th>
              <th className="px-3 py-2 text-right">PPh 22%</th>
            </tr>
          </thead>
          <tbody>
            {r.rows.map((row) => (
              <tr key={row.th} className="border-t border-line">
                <td className="px-3 py-1.5">{row.th}</td>
                <td className="px-3 py-1.5 text-right tnum text-emerald-700">{rupiah(Math.round(row.dipakai))}</td>
                <td className="px-3 py-1.5 text-right tnum">{rupiah(Math.round(row.pkp))}</td>
                <td className="px-3 py-1.5 text-right tnum">{rupiah(Math.round(row.pph))}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        <div className="rounded-xl bg-canvas p-4">
          <div className="text-xs text-ink-faint">Penghematan pajak dari kompensasi</div>
          <div className="text-lg font-extrabold tnum text-emerald-700">{rupiah(Math.round(r.hemat))}</div>
        </div>
        <div className="rounded-xl bg-canvas p-4">
          <div className="text-xs text-ink-faint">Rugi hangus (kedaluwarsa)</div>
          <div className="text-lg font-extrabold tnum text-rose-700">{rupiah(Math.round(r.hangus))}</div>
        </div>
      </div>
      <p className="mt-3 rounded-lg bg-brand-50 px-3 py-2 text-sm text-brand-800">
        Makin cepat perusahaan kembali untung, makin banyak rugi yang terkompensasi sebelum kedaluwarsa.
      </p>
    </div>
  );
}

function Slider({ label, value, min, max, step, onChange }: { label: string; value: number; min: number; max: number; step: number; onChange: (n: number) => void }) {
  return (
    <div className="mb-3">
      <div className="mb-1 flex items-center justify-between">
        <span className="text-sm font-semibold text-ink-soft">{label}</span>
        <span className="tnum text-sm font-bold text-ink">{rupiah(value)}</span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="h-2 w-full cursor-pointer appearance-none rounded-full bg-line accent-brand-600"
      />
    </div>
  );
}
