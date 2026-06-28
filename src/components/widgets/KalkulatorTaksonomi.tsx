import { useMemo, useState } from "react";

// Kalkulator keselarasan taksonomi: berapa persen aktivitas/pendapatan yang selaras taksonomi hijau.
// Disederhanakan: aktivitas selaras jika berkontribusi pada tujuan iklim DAN tidak melanggar DNSH DAN memenuhi safeguard.
export function KalkulatorTaksonomi() {
  const [pendapatanHijau, setPendapatanHijau] = useState(40); // % pendapatan dari aktivitas berkontribusi
  const [kontribusi, setKontribusi] = useState(true); // berkontribusi pada tujuan lingkungan
  const [dnsh, setDnsh] = useState(true); // Do No Significant Harm terpenuhi
  const [safeguard, setSafeguard] = useState(true); // safeguard sosial minimum terpenuhi

  const r = useMemo(() => {
    const lolos = kontribusi && dnsh && safeguard;
    const selaras = lolos ? pendapatanHijau : 0;
    return { lolos, selaras };
  }, [pendapatanHijau, kontribusi, dnsh, safeguard]);

  return (
    <div className="my-6 card p-5">
      <div className="mb-1 text-sm font-bold text-brand-700">🧭 Kalkulator Keselarasan Taksonomi</div>
      <p className="mb-4 text-xs text-ink-faint">
        Aktivitas selaras taksonomi hanya jika lolos TIGA syarat sekaligus: berkontribusi pada tujuan lingkungan, tidak merugikan tujuan lain (DNSH), dan memenuhi safeguard sosial.
      </p>

      <Slider label="Porsi pendapatan dari aktivitas terkait" value={pendapatanHijau} set={setPendapatanHijau} min={0} max={100} step={5} fmt={(v) => `${v}%`} />

      <div className="mt-4 space-y-2">
        <Toggle label="Berkontribusi pada tujuan lingkungan (mis. mitigasi)" value={kontribusi} set={setKontribusi} />
        <Toggle label="Tidak merugikan tujuan lingkungan lain (DNSH)" value={dnsh} set={setDnsh} />
        <Toggle label="Memenuhi safeguard sosial minimum" value={safeguard} set={setSafeguard} />
      </div>

      <div className={`mt-4 rounded-xl p-4 text-center ${r.lolos ? "bg-emerald-50" : "bg-rose-50"}`}>
        <div className="text-xs text-ink-faint">Pendapatan selaras taksonomi (taxonomy-aligned)</div>
        <div className={`text-3xl font-extrabold tnum ${r.lolos ? "text-emerald-700" : "text-rose-700"}`}>{r.selaras}%</div>
        <div className="mt-1 text-xs text-ink-faint">
          {r.lolos ? "Ketiga syarat terpenuhi, porsi pendapatan dihitung selaras." : "Satu syarat gagal, sehingga keselarasan menjadi 0% walau pendapatannya besar."}
        </div>
      </div>

      <p className="mt-3 text-xs text-ink-faint">
        Inilah inti taksonomi: gagal satu syarat saja membuat aktivitas tidak bisa diklaim hijau. Ini mencegah pelabelan asal-asalan.
      </p>
    </div>
  );
}

function Toggle({ label, value, set }: { label: string; value: boolean; set: (b: boolean) => void }) {
  return (
    <label className="flex cursor-pointer items-center justify-between rounded-lg bg-canvas px-3 py-2">
      <span className="text-sm text-ink-soft">{label}</span>
      <input type="checkbox" checked={value} onChange={(e) => set(e.target.checked)} className="h-4 w-4 accent-emerald-500" />
    </label>
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
