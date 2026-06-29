import { useMemo, useState } from "react";

// Imbalan staking: bandingkan hasil tanpa dan dengan auto-compound.
export function SimulatorStaking() {
  const [pokok, setPokok] = useState(1_000); // jumlah token di-stake
  const [apr, setApr] = useState(8); // APR (%)
  const [bulan, setBulan] = useState(12); // lama (bulan)
  const [compound, setCompound] = useState(true); // auto-compound bulanan

  const r = useMemo(() => {
    const aprDec = apr / 100;
    const tahun = bulan / 12;
    const imbalanSimple = pokok * aprDec * tahun;
    const imbalanCompound = pokok * Math.pow(1 + aprDec / 12, bulan) - pokok;
    const imbalan = compound ? imbalanCompound : imbalanSimple;
    const totalAkhir = pokok + imbalan;
    const efekCompound = imbalanCompound - imbalanSimple;
    return { imbalan, totalAkhir, efekCompound };
  }, [pokok, apr, bulan, compound]);

  const fmtTok = (v: number) => `${v.toLocaleString("id-ID", { maximumFractionDigits: 2 })} token`;

  return (
    <div className="my-6 card p-5">
      <div className="mb-1 text-sm font-bold text-brand-700">Simulator Imbalan Staking</div>
      <p className="mb-4 text-xs text-ink-faint">
        Staking mengunci token untuk mengamankan jaringan dan mendapat imbalan. Dengan auto-compound, imbalan ikut
        di-stake ulang tiap bulan sehingga tumbuh majemuk.
      </p>

      <div className="grid gap-4 sm:grid-cols-2">
        <Slider label="Token di-stake" value={pokok} set={setPokok} min={100} max={50_000} step={100} fmt={(v) => v.toLocaleString("id-ID")} />
        <Slider label="APR" value={apr} set={setApr} min={1} max={30} step={1} fmt={(v) => `${v}%`} />
        <Slider label="Lama staking" value={bulan} set={setBulan} min={1} max={60} step={1} fmt={(v) => `${v} bulan`} />
        <div>
          <span className="mb-1 block text-sm font-semibold text-ink-soft">Auto-compound bulanan</span>
          <button
            type="button"
            onClick={() => setCompound((c) => !c)}
            className={`rounded-full px-4 py-2 text-sm font-bold ${compound ? "bg-emerald-100 text-emerald-700" : "bg-line text-ink-soft"}`}
          >
            {compound ? "Aktif" : "Nonaktif"}
          </button>
        </div>
      </div>

      <div className="mt-5 rounded-xl bg-canvas p-4 text-center">
        <div className="text-xs text-ink-faint">Total token setelah {bulan} bulan</div>
        <div className="text-3xl font-extrabold tnum text-emerald-700">{fmtTok(r.totalAkhir)}</div>
        <div className="mt-1 text-xs text-ink-faint">Imbalan: <b>{fmtTok(r.imbalan)}</b></div>
      </div>

      <div className="mt-3 rounded-xl border border-line bg-canvas p-3 text-center">
        <div className="text-xs text-ink-faint">Selisih efek auto-compound (vs bunga sederhana)</div>
        <div className="text-lg font-bold tnum text-violet-700">+{fmtTok(r.efekCompound)}</div>
      </div>

      <div className="mt-4 rounded-xl bg-amber-50 p-3 text-xs text-amber-800">
        <b>Ingat risikonya.</b> Token biasanya terkunci (lock-up) selama periode tertentu sehingga tidak bisa langsung
        dijual. Bila validator melanggar aturan, sebagian token bisa hangus karena slashing. APR juga dapat berubah.
      </div>
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
