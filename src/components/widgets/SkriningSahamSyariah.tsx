import { useMemo, useState } from "react";

// Penyaringan (screening) saham syariah mengikuti kriteria OJK/DSN-MUI:
// (1) usaha inti halal; (2) rasio total utang berbasis bunga terhadap total
// aset tidak lebih dari 45%; (3) rasio pendapatan non-halal terhadap total
// pendapatan tidak lebih dari 10%.
export function SkriningSahamSyariah() {
  const [usahaHalal, setUsahaHalal] = useState(true);
  const [utang, setUtang] = useState(30); // % utang berbunga / total aset
  const [nonHalal, setNonHalal] = useState(3); // % pendapatan non-halal / total pendapatan

  const r = useMemo(() => {
    const lolosUsaha = usahaHalal;
    const lolosUtang = utang <= 45;
    const lolosPendapatan = nonHalal <= 10;
    const lolos = lolosUsaha && lolosUtang && lolosPendapatan;
    return { lolosUsaha, lolosUtang, lolosPendapatan, lolos };
  }, [usahaHalal, utang, nonHalal]);

  return (
    <div className="my-6 card p-5">
      <div className="mb-1 text-sm font-bold text-brand-700">🔎 Skrining Saham Syariah</div>
      <p className="mb-4 text-xs text-ink-faint">
        Sebuah saham masuk daftar efek syariah bila usahanya halal dan lolos dua rasio keuangan (kriteria OJK/DSN-MUI):
        utang berbunga terhadap aset maksimal 45%, dan pendapatan non-halal terhadap total pendapatan maksimal 10%.
      </p>

      <label className="mb-4 flex cursor-pointer items-center gap-2 text-sm font-semibold text-ink-soft">
        <input type="checkbox" checked={usahaHalal} onChange={(e) => setUsahaHalal(e.target.checked)} className="h-4 w-4 accent-brand-600" />
        Usaha inti halal (bukan riba, judi, minuman keras, dll)
      </label>
      <Slider label="Utang berbunga / total aset" value={utang} min={0} max={80} step={1} onChange={setUtang} />
      <Slider label="Pendapatan non-halal / total pendapatan" value={nonHalal} min={0} max={25} step={1} onChange={setNonHalal} />

      <div className="mt-5 space-y-2">
        <Check ok={r.lolosUsaha} label="Usaha inti halal" />
        <Check ok={r.lolosUtang} label={`Utang/aset maksimal 45% (kini ${utang}%)`} />
        <Check ok={r.lolosPendapatan} label={`Pendapatan non-halal maksimal 10% (kini ${nonHalal}%)`} />
      </div>

      <div className={`mt-4 rounded-xl p-4 text-center ${r.lolos ? "bg-emerald-50" : "bg-rose-50"}`}>
        <div className={`text-lg font-extrabold ${r.lolos ? "text-emerald-700" : "text-rose-700"}`}>
          {r.lolos ? "Lolos: masuk saham syariah" : "Tidak lolos kriteria syariah"}
        </div>
      </div>
      <p className="mt-3 rounded-lg bg-brand-50 px-3 py-2 text-sm text-brand-800">
        Daftar saham syariah yang lolos dihimpun dalam Daftar Efek Syariah (DES) dan indeks seperti ISSI dan JII.
      </p>
    </div>
  );
}

function Check({ ok, label }: { ok: boolean; label: string }) {
  return (
    <div className="flex items-center gap-2 rounded-lg bg-canvas px-3 py-2">
      <span className={`text-lg ${ok ? "text-emerald-600" : "text-rose-600"}`}>{ok ? "✓" : "✗"}</span>
      <span className="text-sm text-ink-soft">{label}</span>
    </div>
  );
}

function Slider({ label, value, min, max, step, onChange }: { label: string; value: number; min: number; max: number; step: number; onChange: (n: number) => void }) {
  return (
    <div className="mb-3">
      <div className="mb-1 flex items-center justify-between">
        <span className="text-sm font-semibold text-ink-soft">{label}</span>
        <span className="tnum text-sm font-bold text-ink">{value}%</span>
      </div>
      <input type="range" min={min} max={max} step={step} value={value} onChange={(e) => onChange(Number(e.target.value))} className="h-2 w-full cursor-pointer appearance-none rounded-full bg-line accent-brand-600" />
    </div>
  );
}
