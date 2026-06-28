import { useMemo, useState } from "react";

// Subsidi vs bansos: trade-off antara subsidi harga (nikmati semua, termasuk mampu) dan
// bantuan langsung yang lebih tepat sasaran.
export function SimulatorSubsidiBansos() {
  const [anggaran, setAnggaran] = useState(300); // triliun
  const [modelSubsidi, setModelSubsidi] = useState(true); // true = subsidi harga, false = bansos tertarget

  const r = useMemo(() => {
    // ilustrasi: subsidi harga, 50% dinikmati kelompok mampu (kurang tepat sasaran)
    // bansos tertarget, 90% sampai ke kelompok miskin/rentan
    const ketepatan = modelSubsidi ? 0.5 : 0.9;
    const sampaiSasaran = anggaran * ketepatan;
    const bocor = anggaran - sampaiSasaran;
    return { ketepatan, sampaiSasaran, bocor };
  }, [anggaran, modelSubsidi]);

  return (
    <div className="my-6 card p-5">
      <div className="mb-1 text-sm font-bold text-brand-700">🎯 Simulator Subsidi vs Bansos</div>
      <p className="mb-4 text-xs text-ink-faint">
        Subsidi harga (mis. BBM) dinikmati semua orang, termasuk yang mampu. Bantuan langsung tertarget lebih tepat sasaran. Bandingkan dampaknya.
      </p>

      <Slider label="Anggaran" value={anggaran} set={setAnggaran} min={50} max={600} step={10} fmt={(v) => `Rp${v.toLocaleString("id-ID")} T`} />

      <div className="mt-4 flex rounded-lg bg-slate-100 p-1 text-sm font-bold">
        <button onClick={() => setModelSubsidi(true)} className={`flex-1 rounded-md py-2 transition ${modelSubsidi ? "bg-amber-500 text-white" : "text-ink-soft"}`}>
          Subsidi harga
        </button>
        <button onClick={() => setModelSubsidi(false)} className={`flex-1 rounded-md py-2 transition ${!modelSubsidi ? "bg-emerald-500 text-white" : "text-ink-soft"}`}>
          Bansos tertarget
        </button>
      </div>

      <div className="mt-4 flex h-7 overflow-hidden rounded-lg">
        <div className="flex items-center justify-center bg-emerald-500 text-[11px] font-bold text-white" style={{ width: `${r.ketepatan * 100}%` }}>
          Tepat sasaran
        </div>
        <div className="flex items-center justify-center bg-slate-400 text-[11px] font-bold text-white" style={{ width: `${(1 - r.ketepatan) * 100}%` }}>
          Bocor
        </div>
      </div>

      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        <div className="rounded-xl bg-emerald-50 p-4 text-center">
          <div className="text-xs text-ink-faint">Sampai ke sasaran ({(r.ketepatan * 100).toFixed(0)}%)</div>
          <div className="text-xl font-extrabold tnum text-emerald-700">Rp{Math.round(r.sampaiSasaran).toLocaleString("id-ID")} T</div>
        </div>
        <div className="rounded-xl bg-amber-50 p-4 text-center">
          <div className="text-xs text-ink-faint">Bocor ke yang tidak berhak</div>
          <div className="text-xl font-extrabold tnum text-amber-700">Rp{Math.round(r.bocor).toLocaleString("id-ID")} T</div>
        </div>
      </div>

      <p className="mt-3 text-xs text-ink-faint">
        Subsidi harga mudah dinikmati tetapi sering salah sasaran karena orang mampu ikut menikmati. Bansos tertarget (mis. lewat data DTKS) lebih efisien, tetapi butuh data penerima yang akurat.
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
      <input type="range" min={min} max={max} step={step} value={value} onChange={(e) => set(Number(e.target.value))} className="h-2 w-full cursor-pointer appearance-none rounded-full bg-slate-200 accent-brand-600" />
    </div>
  );
}
