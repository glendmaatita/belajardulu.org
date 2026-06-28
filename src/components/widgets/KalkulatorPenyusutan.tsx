import { useMemo, useState } from "react";
import { rupiah } from "../../lib/format";

export function KalkulatorPenyusutan() {
  const [cost, setCost] = useState(50_000_000);
  const [residu, setResidu] = useState(5_000_000);
  const [umur, setUmur] = useState(5);

  const { straight, ddb } = useMemo(() => {
    const n = Math.max(1, Math.floor(umur));
    const sl = (cost - residu) / n;
    const straight = Array.from({ length: n }, (_, i) => ({
      tahun: i + 1,
      beban: sl,
      akumulasi: sl * (i + 1),
      nilaiBuku: cost - sl * (i + 1),
    }));

    // Double declining balance
    const rate = 2 / n;
    const ddb: { tahun: number; beban: number; akumulasi: number; nilaiBuku: number }[] = [];
    let book = cost;
    let akum = 0;
    for (let i = 0; i < n; i++) {
      let beban = book * rate;
      // jangan turun di bawah nilai residu
      if (book - beban < residu) beban = book - residu;
      akum += beban;
      book -= beban;
      ddb.push({ tahun: i + 1, beban, akumulasi: akum, nilaiBuku: book });
    }
    return { straight, ddb };
  }, [cost, residu, umur]);

  return (
    <div className="my-6 card p-5">
      <div className="mb-4 text-sm font-bold text-amber-700">🏭 Kalkulator Penyusutan</div>

      <div className="grid gap-4 sm:grid-cols-3">
        <Field label="Harga Perolehan" value={cost} onChange={setCost} step={1_000_000} />
        <Field label="Nilai Residu" value={residu} onChange={setResidu} step={500_000} />
        <Field label="Umur Manfaat (tahun)" value={umur} onChange={setUmur} step={1} max={20} plain />
      </div>

      <div className="mt-6 grid gap-5 lg:grid-cols-2">
        <Table title="Garis Lurus" rows={straight} accent="text-emerald-600" />
        <Table title="Saldo Menurun Ganda" rows={ddb} accent="text-blue-600" />
      </div>
      <p className="mt-3 text-xs text-ink-faint">
        Perhatikan: saldo menurun membebankan lebih besar di tahun-tahun awal, lalu mengecil.
      </p>
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
  step,
  max,
  plain,
}: {
  label: string;
  value: number;
  onChange: (v: number) => void;
  step: number;
  max?: number;
  plain?: boolean;
}) {
  return (
    <label className="block">
      <span className="mb-1 block text-xs font-semibold text-ink-soft">{label}</span>
      <input
        type="number"
        value={value}
        step={step}
        max={max}
        min={0}
        onChange={(e) => onChange(Math.max(0, Number(e.target.value)))}
        className="w-full rounded-lg border border-line-strong px-3 py-2 text-sm tnum focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-100"
      />
      {!plain && <span className="mt-1 block text-xs text-ink-faint">{rupiah(value)}</span>}
    </label>
  );
}

function Table({
  title,
  rows,
  accent,
}: {
  title: string;
  rows: { tahun: number; beban: number; akumulasi: number; nilaiBuku: number }[];
  accent: string;
}) {
  return (
    <div className="overflow-hidden rounded-xl border border-line">
      <div className={`bg-canvas px-3 py-2 text-sm font-bold ${accent}`}>{title}</div>
      <table className="w-full text-right text-xs tnum">
        <thead className="bg-canvas text-ink-faint">
          <tr>
            <th className="px-2 py-1.5 text-left">Thn</th>
            <th className="px-2 py-1.5">Beban</th>
            <th className="px-2 py-1.5">Nilai Buku</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.tahun} className="border-t border-line">
              <td className="px-2 py-1.5 text-left font-semibold">{r.tahun}</td>
              <td className="px-2 py-1.5">{rupiah(Math.round(r.beban))}</td>
              <td className="px-2 py-1.5 text-ink-faint">{rupiah(Math.round(r.nilaiBuku))}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
