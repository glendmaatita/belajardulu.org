import { useMemo, useState } from "react";

// Transfer ke Daerah (TKD): DAU, DAK, DBH, Dana Desa. Hitung porsi dan total untuk sebuah daerah.
export function KalkulatorTransferDaerah() {
  const [dau, setDau] = useState(800); // miliar
  const [dak, setDak] = useState(300);
  const [dbh, setDbh] = useState(250);
  const [danaDesa, setDanaDesa] = useState(150);
  const [padDaerah, setPadDaerah] = useState(200); // PAD: pendapatan asli daerah

  const r = useMemo(() => {
    const totalTransfer = dau + dak + dbh + danaDesa;
    const totalPendapatan = totalTransfer + padDaerah;
    const ketergantungan = (totalTransfer / totalPendapatan) * 100; // makin tinggi, makin bergantung pusat
    return { totalTransfer, totalPendapatan, ketergantungan };
  }, [dau, dak, dbh, danaDesa, padDaerah]);

  const komp = [
    { label: "DAU", value: dau, color: "#10b981" },
    { label: "DAK", value: dak, color: "#0ea5e9" },
    { label: "DBH", value: dbh, color: "#f59e0b" },
    { label: "Dana Desa", value: danaDesa, color: "#8b5cf6" },
  ];

  return (
    <div className="my-6 card p-5">
      <div className="mb-1 text-sm font-bold text-brand-700">🏘️ Kalkulator Transfer ke Daerah</div>
      <p className="mb-4 text-xs text-ink-faint">
        Pemerintah pusat mentransfer dana ke daerah lewat DAU, DAK, DBH, dan Dana Desa. Lihat total dan seberapa bergantung daerah pada transfer pusat.
      </p>

      <div className="grid gap-4 sm:grid-cols-2">
        <Slider label="DAU (Dana Alokasi Umum)" value={dau} set={setDau} min={0} max={2000} step={50} fmt={(v) => `Rp${v} M`} />
        <Slider label="DAK (Dana Alokasi Khusus)" value={dak} set={setDak} min={0} max={1000} step={25} fmt={(v) => `Rp${v} M`} />
        <Slider label="DBH (Dana Bagi Hasil)" value={dbh} set={setDbh} min={0} max={1000} step={25} fmt={(v) => `Rp${v} M`} />
        <Slider label="Dana Desa" value={danaDesa} set={setDanaDesa} min={0} max={500} step={25} fmt={(v) => `Rp${v} M`} />
        <Slider label="PAD (Pendapatan Asli Daerah)" value={padDaerah} set={setPadDaerah} min={0} max={2000} step={50} fmt={(v) => `Rp${v} M`} />
      </div>

      <div className="mt-5 flex h-7 overflow-hidden rounded-lg">
        {komp.map((k, i) => (
          <div key={i} className="flex items-center justify-center text-[10px] font-bold text-white" style={{ width: `${(k.value / r.totalTransfer) * 100}%`, background: k.color }}>
            {(k.value / r.totalTransfer) > 0.12 ? k.label : ""}
          </div>
        ))}
      </div>

      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        <div className="rounded-xl bg-emerald-50 p-4 text-center">
          <div className="text-xs text-ink-faint">Total transfer ke daerah</div>
          <div className="text-xl font-extrabold tnum text-emerald-700">Rp{r.totalTransfer.toLocaleString("id-ID")} M</div>
        </div>
        <div className={`rounded-xl p-4 text-center ${r.ketergantungan > 70 ? "bg-amber-50" : "bg-sky-50"}`}>
          <div className="text-xs text-ink-faint">Ketergantungan pada pusat</div>
          <div className={`text-xl font-extrabold tnum ${r.ketergantungan > 70 ? "text-amber-700" : "text-sky-700"}`}>{r.ketergantungan.toFixed(0)}%</div>
        </div>
      </div>

      <p className="mt-3 text-xs text-ink-faint">
        Ketergantungan tinggi pada transfer pusat (PAD kecil) menandakan kemandirian fiskal daerah rendah. Salah satu tujuan desentralisasi fiskal adalah mendorong daerah meningkatkan PAD-nya.
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
