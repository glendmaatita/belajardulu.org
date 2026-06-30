import { useMemo, useState } from "react";

// Meniru struktur Indeks Demokrasi: lima dimensi dinilai 0-10, lalu dirata-rata
// untuk menentukan kategori rezim.
const DIM = [
  { key: "pemilu", label: "Proses pemilu & pluralisme" },
  { key: "pemerintah", label: "Fungsi pemerintahan" },
  { key: "partisipasi", label: "Partisipasi politik" },
  { key: "budaya", label: "Budaya politik" },
  { key: "kebebasan", label: "Kebebasan sipil" },
] as const;

export function SimulatorIndeksDemokrasi() {
  const [v, setV] = useState<Record<string, number>>({ pemilu: 8, pemerintah: 6.5, partisipasi: 7, budaya: 5.5, kebebasan: 7 });

  const r = useMemo(() => {
    const arr = DIM.map((d) => v[d.key]);
    const skor = arr.reduce((s, x) => s + x, 0) / DIM.length;
    const kategori = skor >= 8
      ? { t: "Demokrasi penuh", c: "text-emerald-700", bg: "bg-emerald-50" }
      : skor >= 6
      ? { t: "Demokrasi cacat", c: "text-lime-700", bg: "bg-lime-50" }
      : skor >= 4
      ? { t: "Rezim hibrida", c: "text-amber-700", bg: "bg-amber-50" }
      : { t: "Rezim otoriter", c: "text-rose-700", bg: "bg-rose-50" };
    return { skor, kategori };
  }, [v]);

  return (
    <div className="my-6 card p-5">
      <div className="mb-1 text-sm font-bold text-brand-700">🌡️ Simulator Indeks Demokrasi</div>
      <p className="mb-4 text-xs text-ink-faint">
        Demokrasi diukur lebih dari sekadar ada-tidaknya pemilu. Nilai lima dimensi ini (0-10) dan lihat kategori rezimnya. Indonesia umumnya tergolong demokrasi cacat.
      </p>

      <div className="space-y-3">
        {DIM.map((d) => (
          <div key={d.key}>
            <div className="mb-1 flex items-center justify-between">
              <span className="text-sm font-semibold text-ink-soft">{d.label}</span>
              <span className="tnum text-sm font-bold text-ink">{v[d.key].toFixed(1)}</span>
            </div>
            <input type="range" min={0} max={10} step={0.5} value={v[d.key]} onChange={(e) => setV((s) => ({ ...s, [d.key]: Number(e.target.value) }))} className="h-2 w-full cursor-pointer appearance-none rounded-full bg-line accent-brand-600" />
          </div>
        ))}
      </div>

      <div className={`mt-5 rounded-xl p-4 text-center ${r.kategori.bg}`}>
        <div className="text-xs text-ink-faint">Skor rata-rata indeks demokrasi</div>
        <div className={`text-4xl font-extrabold tnum ${r.kategori.c}`}>{r.skor.toFixed(2)}</div>
        <div className={`mt-1 text-sm font-semibold ${r.kategori.c}`}>{r.kategori.t}</div>
      </div>
      <p className="mt-2 text-xs text-ink-faint">Ambang kategori meniru pendekatan yang umum dipakai lembaga pemeringkat demokrasi internasional.</p>
    </div>
  );
}
