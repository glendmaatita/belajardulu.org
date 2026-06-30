import { useMemo, useState } from "react";

// Gelembung & keruntuhan: makin tinggi euforia dan utang, makin besar gelembung
// dan makin dalam jatuhnya saat kepercayaan pecah.
export function SimulatorBoomBust() {
  const [euforia, setEuforia] = useState(60); // optimisme spekulatif (%)
  const [utang, setUtang] = useState(50); // tingkat utang/leverage (%)

  const r = useMemo(() => {
    const dasar = 100;
    const puncak = dasar * (1 + (euforia / 100) * 1.5 * (1 + utang / 100));
    const jatuh = puncak * (0.35 + (euforia / 100) * 0.4); // makin tinggi gelembung makin dalam koreksi
    const dasarBaru = puncak - jatuh;
    const seri = [dasar, dasar * 1.1, puncak * 0.8, puncak, dasarBaru, dasarBaru * 1.05];
    return { puncak, dasarBaru, seri, koreksi: (jatuh / puncak) * 100 };
  }, [euforia, utang]);

  const maks = Math.max(...r.seri);
  const fase = ["Tenang", "Optimis", "Euforia", "Puncak", "Panik", "Pulih"];

  return (
    <div className="my-6 card p-5">
      <div className="mb-1 text-sm font-bold text-brand-700">🎈 Simulator Boom & Bust</div>
      <p className="mb-4 text-xs text-ink-faint">
        Siklus gelembung: harga melonjak karena euforia dan utang, lalu runtuh saat kepercayaan pecah. Atur kedua pemicunya.
      </p>

      <div className="grid gap-4 sm:grid-cols-2">
        <Slider label="Euforia spekulatif" value={euforia} set={setEuforia} min={10} max={100} step={5} fmt={(v) => `${v}%`} />
        <Slider label="Tingkat utang (leverage)" value={utang} set={setUtang} min={0} max={100} step={5} fmt={(v) => `${v}%`} />
      </div>

      <div className="mt-5 flex items-end gap-2" style={{ height: 150 }}>
        {r.seri.map((v, i) => (
          <div key={i} className="flex flex-1 flex-col items-center justify-end gap-1">
            <div className={`w-full rounded-t ${i === 3 ? "bg-amber-500" : i === 4 ? "bg-rose-500" : "bg-brand-400"}`} style={{ height: `${(v / maks) * 100}%` }} />
            <span className="text-[10px] text-ink-faint">{fase[i]}</span>
          </div>
        ))}
      </div>

      <div className="mt-4 rounded-xl bg-rose-50 p-3 text-center text-sm text-rose-700">
        Saat pecah, harga jatuh sekitar <strong>{r.koreksi.toFixed(0)}%</strong> dari puncak. Makin besar gelembung, makin menyakitkan koreksinya.
      </div>
      <p className="mt-2 text-xs text-ink-faint">Pola ini berulang sepanjang sejarah: tulip 1637, saham 1929, properti AS 2008.</p>
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
