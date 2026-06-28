import { useMemo, useState } from "react";

// Simulasi kebijakan fiskal: kombinasi belanja & pajak menentukan ekspansif/kontraktif
// dan dampaknya pada permintaan agregat serta keseimbangan anggaran.
export function SimulatorKebijakanFiskal() {
  const [belanja, setBelanja] = useState(2500); // triliun
  const [pajak, setPajak] = useState(2300); // triliun penerimaan

  const r = useMemo(() => {
    const saldo = pajak - belanja; // > 0 surplus, < 0 defisit
    // arah kebijakan relatif terhadap kondisi netral (belanja=pajak)
    let arah = "Netral";
    if (belanja - pajak > 100) arah = "Ekspansif (mendorong ekonomi)";
    else if (pajak - belanja > 100) arah = "Kontraktif (meredam ekonomi)";
    // dampak ke AD sederhana: belanja menambah AD, pajak mengurangi (lewat konsumsi)
    const dampakAD = (belanja - 2300) - 0.7 * (pajak - 2300);
    return { saldo, arah, dampakAD };
  }, [belanja, pajak]);

  const surplus = r.saldo >= 0;

  return (
    <div className="my-6 card p-5">
      <div className="mb-1 text-sm font-bold text-brand-700">🎛️ Simulator Kebijakan Fiskal</div>
      <p className="mb-4 text-xs text-ink-faint">
        Atur belanja negara dan penerimaan pajak (triliun rupiah). Lihat arah kebijakan, keseimbangan anggaran, dan dampaknya ke permintaan agregat.
      </p>

      <div className="grid gap-4 sm:grid-cols-2">
        <Slider label="Belanja negara" value={belanja} set={setBelanja} min={1500} max={3500} step={50} fmt={(v) => `Rp${v.toLocaleString("id-ID")} T`} />
        <Slider label="Penerimaan pajak" value={pajak} set={setPajak} min={1500} max={3500} step={50} fmt={(v) => `Rp${v.toLocaleString("id-ID")} T`} />
      </div>

      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        <div className={`rounded-xl p-4 text-center ${surplus ? "bg-emerald-50" : "bg-amber-50"}`}>
          <div className="text-xs text-ink-faint">Saldo anggaran</div>
          <div className={`text-xl font-extrabold tnum ${surplus ? "text-emerald-700" : "text-amber-700"}`}>
            {surplus ? "Surplus " : "Defisit "}Rp{Math.abs(r.saldo).toLocaleString("id-ID")} T
          </div>
        </div>
        <div className="rounded-xl bg-sky-50 p-4 text-center">
          <div className="text-xs text-ink-faint">Dampak ke permintaan agregat</div>
          <div className={`text-xl font-extrabold tnum ${r.dampakAD >= 0 ? "text-emerald-700" : "text-rose-700"}`}>
            {r.dampakAD >= 0 ? "+" : ""}{r.dampakAD.toFixed(0)} T
          </div>
        </div>
      </div>

      <div className="mt-3 rounded-xl bg-canvas p-3 text-center text-sm font-bold text-ink">Arah kebijakan: {r.arah}</div>

      <p className="mt-3 text-xs text-ink-faint">
        Saat resesi: belanja dinaikkan dan/atau pajak diturunkan (ekspansif, sering defisit) untuk mendorong permintaan. Saat ekonomi memanas: kebalikannya untuk meredam inflasi.
      </p>
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
