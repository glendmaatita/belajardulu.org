import { useMemo, useState } from "react";

// ESG rating: skor gabungan dari tiga pilar (Environment, Social, Governance) dengan bobot.
export function SimulatorESGRating() {
  const [e, setE] = useState(70);
  const [s, setS] = useState(60);
  const [g, setG] = useState(80);
  const [wE, setWE] = useState(40); // bobot E %
  const [wS, setWS] = useState(30); // bobot S %
  // bobot G = 100 - wE - wS

  const r = useMemo(() => {
    const wG = Math.max(0, 100 - wE - wS);
    const skor = (e * wE + s * wS + g * wG) / 100;
    let band = "CCC";
    if (skor >= 85) band = "AAA";
    else if (skor >= 75) band = "AA";
    else if (skor >= 65) band = "A";
    else if (skor >= 55) band = "BBB";
    else if (skor >= 45) band = "BB";
    else if (skor >= 35) band = "B";
    return { wG, skor, band };
  }, [e, s, g, wE, wS]);

  const warna = r.skor >= 65 ? "text-emerald-700" : r.skor >= 45 ? "text-amber-700" : "text-rose-700";
  const bg = r.skor >= 65 ? "bg-emerald-50" : r.skor >= 45 ? "bg-amber-50" : "bg-rose-50";

  return (
    <div className="my-6 card p-5">
      <div className="mb-1 text-sm font-bold text-brand-700">📊 Simulator ESG Rating</div>
      <p className="mb-4 text-xs text-ink-faint">
        Rating ESG menggabungkan skor tiga pilar dengan bobot tertentu. Lihat bagaimana bobot memengaruhi peringkat akhir.
      </p>

      <div className="grid gap-4 sm:grid-cols-3">
        <Slider label="Skor Environment" value={e} set={setE} min={0} max={100} step={1} fmt={(v) => `${v}`} />
        <Slider label="Skor Social" value={s} set={setS} min={0} max={100} step={1} fmt={(v) => `${v}`} />
        <Slider label="Skor Governance" value={g} set={setG} min={0} max={100} step={1} fmt={(v) => `${v}`} />
        <Slider label="Bobot E" value={wE} set={setWE} min={0} max={100} step={5} fmt={(v) => `${v}%`} />
        <Slider label="Bobot S" value={wS} set={setWS} min={0} max={100} step={5} fmt={(v) => `${v}%`} />
      </div>

      <p className="mt-2 text-xs text-ink-faint">
        Bobot Governance otomatis = {r.wG}% (sisa dari 100%).
      </p>

      <div className="mt-3 flex h-6 overflow-hidden rounded-lg text-[10px] font-bold text-white">
        <div className="flex items-center justify-center bg-emerald-500" style={{ width: `${wE}%` }}>{wE > 12 ? `E ${wE}%` : ""}</div>
        <div className="flex items-center justify-center bg-sky-500" style={{ width: `${wS}%` }}>{wS > 12 ? `S ${wS}%` : ""}</div>
        <div className="flex items-center justify-center bg-violet-500" style={{ width: `${r.wG}%` }}>{r.wG > 12 ? `G ${r.wG}%` : ""}</div>
      </div>

      <div className={`mt-4 rounded-xl ${bg} p-4 text-center`}>
        <div className="text-xs text-ink-faint">Skor ESG gabungan</div>
        <div className={`text-3xl font-extrabold tnum ${warna}`}>{r.skor.toFixed(1)}</div>
        <div className={`mt-1 text-lg font-bold ${warna}`}>Rating: {r.band}</div>
      </div>

      <p className="mt-3 text-xs text-ink-faint">
        Karena bobot tiap lembaga rating berbeda, satu perusahaan bisa mendapat rating berbeda dari penyedia berbeda. Pahami metodologinya, jangan hanya melihat hurufnya.
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
