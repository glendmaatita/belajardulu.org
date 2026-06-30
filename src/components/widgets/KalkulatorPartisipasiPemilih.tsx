import { useMemo, useState } from "react";

// Tingkat partisipasi (turnout) = suara sah dibanding pemilih terdaftar.
// Partisipasi rendah dapat menggerus legitimasi hasil pemilu.
export function KalkulatorPartisipasiPemilih() {
  const [terdaftar, setTerdaftar] = useState(204000000); // pemilih terdaftar
  const [hadir, setHadir] = useState(82); // % yang hadir memilih
  const [rusak, setRusak] = useState(3); // % surat suara tidak sah dari yang hadir

  const r = useMemo(() => {
    const yangHadir = terdaftar * (hadir / 100);
    const golput = terdaftar - yangHadir;
    const suaraSah = yangHadir * (1 - rusak / 100);
    const turnoutSah = (suaraSah / terdaftar) * 100;
    return { yangHadir, golput, suaraSah, turnoutSah };
  }, [terdaftar, hadir, rusak]);

  const legit = r.turnoutSah >= 70 ? { t: "Legitimasi kuat", c: "bg-emerald-50 text-emerald-700" } : r.turnoutSah >= 50 ? { t: "Legitimasi cukup", c: "bg-amber-50 text-amber-700" } : { t: "Legitimasi lemah", c: "bg-rose-50 text-rose-700" };

  const juta = (n: number) => `${(n / 1_000_000).toFixed(1)} juta`;

  return (
    <div className="my-6 card p-5">
      <div className="mb-1 text-sm font-bold text-brand-700">📥 Kalkulator Partisipasi Pemilih</div>
      <p className="mb-4 text-xs text-ink-faint">
        Seberapa banyak rakyat yang benar-benar ikut memilih? Partisipasi tinggi memperkuat legitimasi pemimpin terpilih.
      </p>

      <div className="grid gap-4 sm:grid-cols-3">
        <Slider label="Pemilih terdaftar" value={terdaftar} set={setTerdaftar} min={1_000_000} max={210_000_000} step={1_000_000} fmt={(v) => juta(v)} />
        <Slider label="Hadir memilih" value={hadir} set={setHadir} min={30} max={100} step={1} fmt={(v) => `${v}%`} />
        <Slider label="Surat suara tidak sah" value={rusak} set={setRusak} min={0} max={15} step={0.5} fmt={(v) => `${v}%`} />
      </div>

      <div className={`mt-5 rounded-xl p-4 text-center ${legit.c}`}>
        <div className="text-xs text-ink-faint">Partisipasi suara sah (turnout)</div>
        <div className="text-4xl font-extrabold tnum">{r.turnoutSah.toFixed(1)}%</div>
        <div className="text-sm font-semibold">{legit.t}</div>
      </div>

      <div className="mt-3 grid grid-cols-2 gap-3 text-sm">
        <div className="rounded-xl bg-canvas p-3 text-center">
          <div className="text-xs text-ink-faint">Suara sah</div>
          <div className="tnum font-bold text-ink">{juta(r.suaraSah)}</div>
        </div>
        <div className="rounded-xl bg-canvas p-3 text-center">
          <div className="text-xs text-ink-faint">Tidak hadir (golput)</div>
          <div className="tnum font-bold text-ink">{juta(r.golput)}</div>
        </div>
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
