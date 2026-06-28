import { useMemo, useState } from "react";

// Harga eceran tertinggi (ceiling) & harga dasar (floor): hitung kelangkaan atau surplus yang muncul.
// Qd = 100 - P, Qs = 10 + P, keseimbangan di P=45, Q=55.
export function SimulatorIntervensiHarga() {
  const [jenis, setJenis] = useState<"ceiling" | "floor">("ceiling");
  const [harga, setHarga] = useState(30);

  const r = useMemo(() => {
    const pEq = 45;
    const qd = Math.max(0, 100 - harga);
    const qs = Math.max(0, 10 + harga);
    const efektif = jenis === "ceiling" ? harga < pEq : harga > pEq;
    const selisih = jenis === "ceiling" ? qd - qs : qs - qd; // ceiling -> kelangkaan; floor -> surplus
    return { pEq, qd, qs, efektif, selisih: Math.max(0, selisih) };
  }, [jenis, harga]);

  return (
    <div className="my-6 card p-5">
      <div className="mb-1 text-sm font-bold text-brand-700">🚧 Simulator Intervensi Harga</div>
      <p className="mb-4 text-xs text-ink-faint">
        Permintaan Qd = 100 - P, penawaran Qs = 10 + P (keseimbangan di harga 45). Tetapkan batas harga dan lihat kelangkaan atau surplus yang muncul.
      </p>

      <div className="mb-4 flex rounded-lg bg-slate-100 p-1 text-sm font-bold">
        <button onClick={() => setJenis("ceiling")} className={`flex-1 rounded-md py-2 transition ${jenis === "ceiling" ? "bg-rose-500 text-white" : "text-ink-soft"}`}>
          Harga Eceran Tertinggi
        </button>
        <button onClick={() => setJenis("floor")} className={`flex-1 rounded-md py-2 transition ${jenis === "floor" ? "bg-amber-500 text-white" : "text-ink-soft"}`}>
          Harga Dasar
        </button>
      </div>

      <Slider label="Harga ditetapkan" value={harga} set={setHarga} min={10} max={80} step={1} fmt={(v) => `Rp${v}`} />

      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        <div className="rounded-xl bg-sky-50 p-3 text-center">
          <div className="text-xs text-ink-faint">Jumlah diminta (Qd)</div>
          <div className="text-lg font-extrabold tnum text-sky-700">{r.qd}</div>
        </div>
        <div className="rounded-xl bg-emerald-50 p-3 text-center">
          <div className="text-xs text-ink-faint">Jumlah ditawarkan (Qs)</div>
          <div className="text-lg font-extrabold tnum text-emerald-700">{r.qs}</div>
        </div>
      </div>

      <div className={`mt-3 rounded-xl p-4 text-center ${r.efektif ? (jenis === "ceiling" ? "bg-rose-50" : "bg-amber-50") : "bg-slate-100"}`}>
        {r.efektif ? (
          <>
            <div className="text-xs text-ink-faint">{jenis === "ceiling" ? "Kelangkaan (Qd > Qs)" : "Surplus (Qs > Qd)"}</div>
            <div className={`text-2xl font-extrabold tnum ${jenis === "ceiling" ? "text-rose-700" : "text-amber-700"}`}>{r.selisih} unit</div>
          </>
        ) : (
          <div className="text-sm font-bold text-ink-soft">
            Batas harga tidak mengikat (di {jenis === "ceiling" ? "atas" : "bawah"} keseimbangan), pasar tetap di titik keseimbangan.
          </div>
        )}
      </div>

      <p className="mt-3 text-xs text-ink-faint">
        Ceiling (mis. HET) di bawah keseimbangan menimbulkan kelangkaan dan antrean. Floor (mis. UMR, harga dasar gabah) di atas keseimbangan menimbulkan surplus (kelebihan pasokan atau pengangguran).
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
