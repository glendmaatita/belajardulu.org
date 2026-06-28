import { useMemo, useState } from "react";
import { rupiah, angka } from "../../lib/format";

const PROYEK = [
  { id: "redd", nama: "REDD+ (lindungi hutan)", harga: 75_000, integritas: 70 },
  { id: "restorasi", nama: "Restorasi mangrove", harga: 130_000, integritas: 88 },
  { id: "energi", nama: "Energi terbarukan (PLTS)", harga: 50_000, integritas: 60 },
  { id: "cookstove", nama: "Kompor efisien", harga: 90_000, integritas: 55 },
];

export function SimulatorOffset() {
  const [proyek, setProyek] = useState(PROYEK[0].id);
  const [volume, setVolume] = useState(10_000); // tCO2e
  const [additionality, setAdditionality] = useState(true);
  const [permanence, setPermanence] = useState(true);

  const p = PROYEK.find((x) => x.id === proyek)!;
  const r = useMemo(() => {
    let mutu = p.integritas;
    if (!additionality) mutu -= 35;
    if (!permanence) mutu -= 20;
    mutu = Math.max(5, mutu);
    const nilai = volume * p.harga;
    const label = mutu >= 75 ? "Tinggi" : mutu >= 50 ? "Sedang" : "Rendah (berisiko greenwashing)";
    const warna = mutu >= 75 ? "#10b981" : mutu >= 50 ? "#f59e0b" : "#ef4444";
    return { mutu, nilai, label, warna };
  }, [p, volume, additionality, permanence]);

  return (
    <div className="my-6 card p-5">
      <div className="mb-4 text-sm font-bold text-emerald-700">🌳 Simulator Proyek Carbon Offset</div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1 block text-sm font-semibold text-ink-soft">Jenis proyek</span>
          <select
            value={proyek}
            onChange={(e) => setProyek(e.target.value)}
            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-emerald-500 focus:outline-none"
          >
            {PROYEK.map((x) => (
              <option key={x.id} value={x.id}>
                {x.nama}
              </option>
            ))}
          </select>
          <span className="mt-1 block text-xs text-ink-faint">Harga acuan: {rupiah(p.harga)}/tCO2e</span>
        </label>

        <div>
          <div className="mb-1 flex items-center justify-between">
            <span className="text-sm font-semibold text-ink-soft">Volume kredit</span>
            <span className="tnum text-sm font-bold text-ink">{angka(volume)} tCO2e</span>
          </div>
          <input
            type="range"
            min={1000}
            max={100_000}
            step={1000}
            value={volume}
            onChange={(e) => setVolume(Number(e.target.value))}
            className="h-2 w-full cursor-pointer appearance-none rounded-full bg-slate-200 accent-emerald-600"
          />
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-4">
        <Toggle label="Additionality terbukti" checked={additionality} set={setAdditionality} />
        <Toggle label="Permanen (tahan lama)" checked={permanence} set={setPermanence} />
      </div>

      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        <div className="rounded-xl bg-slate-50 p-4">
          <div className="text-xs text-ink-faint">Nilai transaksi</div>
          <div className="text-xl font-extrabold tnum text-emerald-700">{rupiah(r.nilai)}</div>
        </div>
        <div className="rounded-xl bg-slate-50 p-4">
          <div className="mb-1 flex items-center justify-between text-xs text-ink-faint">
            <span>Skor integritas kredit</span>
            <span className="font-bold" style={{ color: r.warna }}>
              {r.mutu}/100 · {r.label}
            </span>
          </div>
          <div className="h-3 overflow-hidden rounded-full bg-slate-200">
            <div className="h-full rounded-full transition-all" style={{ width: `${r.mutu}%`, background: r.warna }} />
          </div>
        </div>
      </div>
      <p className="mt-3 text-xs text-ink-faint">
        Tanpa <b>additionality</b> (proyek tetap terjadi walau tanpa dana karbon) dan <b>permanence</b> (karbon tidak
        lepas lagi, mis. hutan terbakar), kredit kehilangan kredibilitas dan dianggap <b>greenwashing</b> meski harganya
        sama.
      </p>
    </div>
  );
}

function Toggle({ label, checked, set }: { label: string; checked: boolean; set: (b: boolean) => void }) {
  return (
    <button
      onClick={() => set(!checked)}
      className={`flex items-center gap-2 rounded-lg border px-3 py-2 text-sm font-medium transition-colors ${
        checked ? "border-emerald-400 bg-emerald-50 text-emerald-700" : "border-slate-200 bg-white text-ink-faint"
      }`}
    >
      <span className={`grid h-4 w-4 place-items-center rounded ${checked ? "bg-emerald-500 text-white" : "bg-slate-200"}`}>
        {checked ? "✓" : ""}
      </span>
      {label}
    </button>
  );
}
