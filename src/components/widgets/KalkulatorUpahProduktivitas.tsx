import { useMemo, useState } from "react";

// Decoupling: bila produktivitas naik lebih cepat daripada upah riil, hasil tambahan
// lebih banyak mengalir ke pemilik modal daripada ke pekerja. Salah satu kritik kapitalisme.
export function KalkulatorUpahProduktivitas() {
  const [prod, setProd] = useState(60); // pertumbuhan produktivitas kumulatif (%)
  const [upah, setUpah] = useState(20); // pertumbuhan upah riil kumulatif (%)

  const r = useMemo(() => {
    const gap = prod - upah;
    // porsi nilai tambah yang tidak diterima pekerja (ilustratif)
    const keModal = prod > 0 ? Math.max(0, (gap / prod) * 100) : 0;
    return { gap, keModal };
  }, [prod, upah]);

  return (
    <div className="my-6 card p-5">
      <div className="mb-1 text-sm font-bold text-brand-700">⚖️ Kalkulator Upah vs Produktivitas</div>
      <p className="mb-4 text-xs text-ink-faint">
        Jika pekerja menghasilkan lebih banyak tapi upah tak ikut naik secepat itu, ke mana selisihnya pergi? Inilah inti perdebatan pembagian hasil.
      </p>

      <div className="grid gap-4 sm:grid-cols-2">
        <Slider label="Pertumbuhan produktivitas" value={prod} set={setProd} min={0} max={120} step={5} fmt={(v) => `+${v}%`} />
        <Slider label="Pertumbuhan upah riil" value={upah} set={(v) => setUpah(Math.min(v, prod))} min={0} max={120} step={5} fmt={(v) => `+${v}%`} />
      </div>

      <div className="mt-5 flex items-end gap-6" style={{ height: 140 }}>
        <Col label="Produktivitas" value={prod} maks={120} color="bg-blue-500" />
        <Col label="Upah riil" value={upah} maks={120} color="bg-emerald-500" />
      </div>

      <div className={`mt-4 rounded-xl p-3 text-center text-sm ${r.gap <= 5 ? "bg-emerald-50 text-emerald-700" : r.gap <= 30 ? "bg-amber-50 text-amber-700" : "bg-rose-50 text-rose-700"}`}>
        Selisih (gap) = <strong>{r.gap} poin persen</strong>. Sekitar {r.keModal.toFixed(0)}% dari kenaikan produktivitas tidak mengalir ke kenaikan upah.
      </div>
      <p className="mt-2 text-xs text-ink-faint">Di banyak negara sejak 1980-an, produktivitas naik jauh lebih cepat daripada upah median, memicu perdebatan ketimpangan.</p>
    </div>
  );
}

function Col({ label, value, maks, color }: { label: string; value: number; maks: number; color: string }) {
  return (
    <div className="flex flex-1 flex-col items-center justify-end gap-1" style={{ height: "100%" }}>
      <span className="tnum text-xs font-bold text-ink">+{value}%</span>
      <div className={`w-16 rounded-t ${color}`} style={{ height: `${(value / maks) * 100}%` }} />
      <span className="text-xs text-ink-faint">{label}</span>
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
