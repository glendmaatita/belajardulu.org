import { useMemo, useState } from "react";

// Simulasi kebijakan moneter: arah BI Rate menentukan ekspansif/kontraktif dan dampaknya.
export function SimulatorKebijakanMoneter() {
  const [biRateLama, setBiRateLama] = useState(6);
  const [biRateBaru, setBiRateBaru] = useState(5.5);

  const r = useMemo(() => {
    const delta = biRateBaru - biRateLama;
    let arah = "Netral", efek = "Tidak ada perubahan signifikan.";
    if (delta < -0.01) {
      arah = "Ekspansif (longgar)";
      efek = "Suku bunga turun: kredit lebih murah, konsumsi & investasi naik, pertumbuhan didorong, tetapi inflasi & tekanan rupiah bisa naik.";
    } else if (delta > 0.01) {
      arah = "Kontraktif (ketat)";
      efek = "Suku bunga naik: menabung lebih menarik, kredit mahal, permintaan & inflasi ditekan, rupiah cenderung menguat, tetapi pertumbuhan melambat.";
    }
    return { delta, arah, efek };
  }, [biRateLama, biRateBaru]);

  const ekspansif = r.delta < 0;

  return (
    <div className="my-6 card p-5">
      <div className="mb-1 text-sm font-bold text-brand-700">🎛️ Simulator Kebijakan Moneter</div>
      <p className="mb-4 text-xs text-ink-faint">
        Ubah suku bunga acuan (BI Rate) dan lihat arah kebijakan serta dampaknya pada ekonomi.
      </p>

      <div className="grid gap-4 sm:grid-cols-2">
        <Slider label="BI Rate sebelumnya" value={biRateLama} set={setBiRateLama} min={3} max={9} step={0.25} fmt={(v) => `${v}%`} />
        <Slider label="BI Rate baru" value={biRateBaru} set={setBiRateBaru} min={3} max={9} step={0.25} fmt={(v) => `${v}%`} />
      </div>

      <div className={`mt-5 rounded-xl p-4 text-center ${r.delta === 0 ? "bg-canvas" : ekspansif ? "bg-emerald-50" : "bg-rose-50"}`}>
        <div className="text-xs text-ink-faint">Perubahan {r.delta > 0 ? "+" : ""}{r.delta.toFixed(2)} poin</div>
        <div className={`text-2xl font-extrabold ${r.delta === 0 ? "text-ink" : ekspansif ? "text-emerald-700" : "text-rose-700"}`}>{r.arah}</div>
      </div>

      <p className="mt-3 text-sm text-ink-soft">{r.efek}</p>
      <p className="mt-2 text-xs text-ink-faint">
        Bank Indonesia menaikkan bunga saat inflasi tinggi atau rupiah tertekan, dan menurunkannya saat ekonomi perlu didorong. Selalu ada trade-off antara mengendalikan inflasi dan menjaga pertumbuhan.
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
