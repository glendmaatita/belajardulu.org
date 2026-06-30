import { useMemo, useState } from "react";

// Spektrum dari pasar bebas (0) sampai ekonomi terencana penuh (100).
// Ilustrasi trade-off: pasar cenderung efisien tapi kurang merata; negara sebaliknya.
export function SimulatorSpektrumEkonomi() {
  const [pos, setPos] = useState(35); // 0 = pasar bebas, 100 = terencana penuh

  const r = useMemo(() => {
    // Efisiensi tertinggi di pasar yang condong bebas namun tetap diatur sedikit; terlalu ke kanan menurun.
    const efisiensi = Math.max(10, 95 - Math.abs(pos - 25) * 0.9);
    // Pemerataan naik seiring peran negara, tapi melandai di ujung.
    const pemerataan = Math.min(95, 25 + pos * 0.7);
    let label = "Ekonomi campuran";
    if (pos < 15) label = "Pasar bebas (laissez-faire)";
    else if (pos < 45) label = "Ekonomi campuran";
    else if (pos < 75) label = "Negara kesejahteraan";
    else label = "Ekonomi terencana (komando)";
    return { efisiensi, pemerataan, label };
  }, [pos]);

  return (
    <div className="my-6 card p-5">
      <div className="mb-1 text-sm font-bold text-brand-700">🎚️ Simulator Spektrum Ekonomi</div>
      <p className="mb-4 text-xs text-ink-faint">
        Geser dari pasar bebas murni ke ekonomi terencana penuh. Tidak ada titik sempurna; tiap posisi menukar efisiensi dengan pemerataan.
      </p>

      <Slider label="Peran negara dalam ekonomi" value={pos} set={setPos} min={0} max={100} step={5} fmt={(v) => (v < 50 ? "lebih ke pasar" : "lebih ke negara")} />

      <div className="mt-4 rounded-xl bg-brand-50 p-3 text-center">
        <div className="text-xs text-ink-faint">Posisi sistem</div>
        <div className="text-xl font-extrabold text-brand-700">{r.label}</div>
      </div>

      <div className="mt-4 space-y-3">
        <Meter label="Efisiensi & inovasi" value={r.efisiensi} color="bg-blue-500" />
        <Meter label="Pemerataan & jaring pengaman" value={r.pemerataan} color="bg-emerald-500" />
      </div>
      <p className="mt-3 text-xs text-ink-faint">Hampir semua negara nyata berada di tengah, bukan di kutub ekstrem. Indonesia menganut ekonomi campuran berdasar Pasal 33 UUD 1945.</p>
    </div>
  );
}

function Meter({ label, value, color }: { label: string; value: number; color: string }) {
  return (
    <div>
      <div className="mb-1 flex items-center justify-between text-sm">
        <span className="font-semibold text-ink-soft">{label}</span>
        <span className="tnum font-bold text-ink">{Math.round(value)}/100</span>
      </div>
      <div className="h-3 w-full overflow-hidden rounded-full bg-canvas">
        <div className={`h-full rounded-full ${color}`} style={{ width: `${value}%` }} />
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
