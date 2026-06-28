import { useMemo, useState } from "react";

// Pertumbuhan ekonomi majemuk: PDB tumbuh g% per tahun. Aturan 72 memperkirakan waktu menggandakan.
export function SimulatorPertumbuhanEkonomi() {
  const [pdbAwal, setPdbAwal] = useState(20000); // triliun
  const [growth, setGrowth] = useState(5); // % per tahun
  const [tahun, setTahun] = useState(20);

  const r = useMemo(() => {
    const pdbAkhir = pdbAwal * Math.pow(1 + growth / 100, tahun);
    const kali = pdbAkhir / pdbAwal;
    const waktuGanda = growth > 0 ? 72 / growth : Infinity; // rule of 72
    return { pdbAkhir, kali, waktuGanda };
  }, [pdbAwal, growth, tahun]);

  const fmt = (n: number) => "Rp" + Math.round(n).toLocaleString("id-ID") + " T";

  return (
    <div className="my-6 card p-5">
      <div className="mb-1 text-sm font-bold text-brand-700">📈 Simulator Pertumbuhan Ekonomi</div>
      <p className="mb-4 text-xs text-ink-faint">
        Pertumbuhan ekonomi bersifat majemuk. Selisih kecil dalam tingkat pertumbuhan menghasilkan perbedaan besar dalam jangka panjang.
      </p>

      <div className="grid gap-4 sm:grid-cols-3">
        <Slider label="PDB awal" value={pdbAwal} set={setPdbAwal} min={5000} max={30000} step={1000} fmt={fmt} />
        <Slider label="Pertumbuhan per tahun" value={growth} set={setGrowth} min={1} max={10} step={0.5} fmt={(v) => `${v}%`} />
        <Slider label="Jangka waktu" value={tahun} set={setTahun} min={5} max={50} step={1} fmt={(v) => `${v} tahun`} />
      </div>

      <div className="mt-5 grid gap-3 sm:grid-cols-3">
        <Stat label={`PDB setelah ${tahun} th`} value={fmt(r.pdbAkhir)} tone="emerald" />
        <Stat label="Menjadi berapa kali lipat" value={`${r.kali.toFixed(1)}x`} tone="sky" />
        <Stat label="Waktu menggandakan (aturan 72)" value={`${r.waktuGanda.toFixed(0)} tahun`} tone="violet" />
      </div>

      <p className="mt-3 text-xs text-ink-faint">
        Aturan 72: bagi 72 dengan tingkat pertumbuhan untuk memperkirakan berapa tahun PDB menggandakan. Pertumbuhan 5% menggandakan ekonomi dalam sekitar 14 tahun, 7% hanya ~10 tahun.
      </p>
    </div>
  );
}

function Stat({ label, value, tone }: { label: string; value: string; tone: "emerald" | "sky" | "violet" }) {
  const map = { emerald: "text-emerald-700", sky: "text-sky-700", violet: "text-violet-700" };
  return (
    <div className="rounded-xl bg-slate-50 p-3 text-center">
      <div className="text-xs text-ink-faint">{label}</div>
      <div className={`text-lg font-extrabold tnum ${map[tone]}`}>{value}</div>
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
