import { useMemo, useState } from "react";
import { rupiah } from "../../lib/format";

// Kelompok harta berwujud bukan bangunan sesuai Pasal 11 UU PPh:
// masa manfaat menentukan tarif garis lurus (GL) dan saldo menurun (SM).
const KELOMPOK = [
  { id: "1", label: "Kelompok 1 (4 tahun)", masa: 4, gl: 0.25, sm: 0.5 },
  { id: "2", label: "Kelompok 2 (8 tahun)", masa: 8, gl: 0.125, sm: 0.25 },
  { id: "3", label: "Kelompok 3 (16 tahun)", masa: 16, gl: 0.0625, sm: 0.125 },
  { id: "4", label: "Kelompok 4 (20 tahun)", masa: 20, gl: 0.05, sm: 0.1 },
];

// Simulator penyusutan fiskal: bandingkan garis lurus vs saldo menurun.
export function SimulatorPenyusutanFiskal() {
  const [harga, setHarga] = useState(800_000_000);
  const [kel, setKel] = useState("2");

  const data = useMemo(() => {
    const k = KELOMPOK.find((x) => x.id === kel)!;
    // garis lurus: beban tetap tiap tahun
    const gl = harga * k.gl;
    // saldo menurun: tarif x nilai sisa buku, tahun terakhir disusutkan sekaligus
    const rows: { th: number; sl: number; sm: number }[] = [];
    let sisa = harga;
    for (let t = 1; t <= k.masa; t++) {
      let smBeban: number;
      if (t === k.masa) smBeban = sisa; // tahun terakhir habiskan nilai buku
      else smBeban = sisa * k.sm;
      rows.push({ th: t, sl: gl, sm: smBeban });
      sisa -= smBeban;
    }
    return { k, gl, rows };
  }, [harga, kel]);

  return (
    <div className="my-6 card p-5">
      <div className="mb-1 text-sm font-bold text-brand-700">📉 Simulator Penyusutan Fiskal</div>
      <p className="mb-4 text-xs text-ink-faint">
        Metode saldo menurun memberi beban penyusutan lebih besar di awal sehingga pajak tahun-tahun awal lebih kecil
        (penundaan pajak). Total beban sepanjang umur aset tetap sama dengan harga perolehan.
      </p>

      <div className="mb-3">
        <div className="mb-1 flex items-center justify-between">
          <span className="text-sm font-semibold text-ink-soft">Harga perolehan aset</span>
          <span className="tnum text-sm font-bold text-ink">{rupiah(harga)}</span>
        </div>
        <input
          type="range"
          min={100_000_000}
          max={5_000_000_000}
          step={50_000_000}
          value={harga}
          onChange={(e) => setHarga(Number(e.target.value))}
          className="h-2 w-full cursor-pointer appearance-none rounded-full bg-line accent-brand-600"
        />
      </div>

      <div className="mb-4 flex flex-wrap gap-2">
        {KELOMPOK.map((k) => (
          <button
            key={k.id}
            onClick={() => setKel(k.id)}
            className={`rounded-lg px-3 py-1.5 text-xs font-semibold ${kel === k.id ? "bg-brand-600 text-white" : "bg-canvas text-ink-soft"}`}
          >
            {k.label}
          </button>
        ))}
      </div>

      <div className="overflow-hidden rounded-xl border border-line">
        <table className="w-full text-sm">
          <thead className="bg-canvas text-ink-faint">
            <tr>
              <th className="px-3 py-2 text-left">Tahun</th>
              <th className="px-3 py-2 text-right">Garis lurus</th>
              <th className="px-3 py-2 text-right">Saldo menurun</th>
            </tr>
          </thead>
          <tbody>
            {data.rows.slice(0, 6).map((r) => (
              <tr key={r.th} className="border-t border-line">
                <td className="px-3 py-1.5">Tahun {r.th}</td>
                <td className="px-3 py-1.5 text-right tnum">{rupiah(Math.round(r.sl))}</td>
                <td className="px-3 py-1.5 text-right tnum font-semibold text-brand-700">{rupiah(Math.round(r.sm))}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-3 rounded-lg bg-brand-50 px-3 py-2 text-sm text-brand-800">
        Beban tahun 1 saldo menurun ({rupiah(Math.round(data.rows[0].sm))}) lebih besar daripada garis lurus
        ({rupiah(Math.round(data.gl))}), memberi penghematan pajak lebih awal.
      </p>
    </div>
  );
}
