import { useMemo, useState } from "react";
import { rupiah } from "../../lib/format";

// Mudharabah: pemilik modal dan pengelola berbagi laba sesuai nisbah. Bila rugi
// (bukan karena kelalaian pengelola), kerugian ditanggung pemilik modal,
// sedangkan pengelola kehilangan jerih payahnya.
export function SimulatorBagiHasil() {
  const [modal, setModal] = useState(100_000_000);
  const [laba, setLaba] = useState(30_000_000); // laba usaha (bisa negatif = rugi)
  const [nisbahPemodal, setNisbahPemodal] = useState(60); // % laba untuk pemilik modal

  const r = useMemo(() => {
    const rugi = laba < 0;
    const bagianPemodal = rugi ? laba : laba * (nisbahPemodal / 100); // rugi ditanggung pemodal penuh
    const bagianPengelola = rugi ? 0 : laba * (1 - nisbahPemodal / 100);
    return { rugi, bagianPemodal, bagianPengelola };
  }, [laba, nisbahPemodal]);

  return (
    <div className="my-6 card p-5">
      <div className="mb-1 text-sm font-bold text-brand-700">🤝 Simulator Bagi Hasil (Mudharabah)</div>
      <p className="mb-4 text-xs text-ink-faint">
        Laba dibagi sesuai nisbah yang disepakati. Jika usaha rugi (bukan karena kelalaian pengelola), kerugian
        finansial ditanggung pemilik modal, sedangkan pengelola kehilangan waktu dan tenaganya.
      </p>

      <Slider label="Modal (dari pemilik modal)" value={modal} min={10_000_000} max={1_000_000_000} step={10_000_000} fmt={rupiah} onChange={setModal} />
      <Slider label="Hasil usaha (negatif = rugi)" value={laba} min={-50_000_000} max={200_000_000} step={5_000_000} fmt={rupiah} onChange={setLaba} />
      <Slider label="Nisbah untuk pemilik modal" value={nisbahPemodal} min={10} max={90} step={5} fmt={(n) => `${n}% : ${100 - n}%`} onChange={setNisbahPemodal} />

      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        <div className="rounded-xl bg-canvas p-4">
          <div className="text-xs text-ink-faint">Bagian pemilik modal</div>
          <div className={`text-lg font-extrabold tnum ${r.bagianPemodal < 0 ? "text-rose-700" : "text-emerald-700"}`}>{rupiah(Math.round(r.bagianPemodal))}</div>
        </div>
        <div className="rounded-xl bg-canvas p-4">
          <div className="text-xs text-ink-faint">Bagian pengelola</div>
          <div className="text-lg font-extrabold tnum text-sky-700">{rupiah(Math.round(r.bagianPengelola))}</div>
        </div>
      </div>
      <p className="mt-3 rounded-lg bg-brand-50 px-3 py-2 text-sm text-brand-800">
        {r.rugi
          ? "Karena rugi, kerugian ditanggung pemilik modal; pengelola tidak menanggung kerugian uang, tetapi tidak mendapat imbalan."
          : "Berbeda dari bunga yang pasti, imbal hasil di sini bergantung pada hasil usaha nyata."}
      </p>
    </div>
  );
}

function Slider({ label, value, min, max, step, fmt, onChange }: { label: string; value: number; min: number; max: number; step: number; fmt: (n: number) => string; onChange: (n: number) => void }) {
  return (
    <div className="mb-3">
      <div className="mb-1 flex items-center justify-between">
        <span className="text-sm font-semibold text-ink-soft">{label}</span>
        <span className="tnum text-sm font-bold text-ink">{fmt(value)}</span>
      </div>
      <input type="range" min={min} max={max} step={step} value={value} onChange={(e) => onChange(Number(e.target.value))} className="h-2 w-full cursor-pointer appearance-none rounded-full bg-line accent-brand-600" />
    </div>
  );
}
