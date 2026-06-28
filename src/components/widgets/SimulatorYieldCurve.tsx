import { useMemo, useState } from "react";

// Bentuk kurva imbal hasil ditentukan selisih yield tenor pendek dan panjang.
// Normal (panjang > pendek), datar, atau terbalik (inverted, sinyal risiko resesi).
export function SimulatorYieldCurve() {
  const [pendek, setPendek] = useState(5.5); // yield tenor 1 tahun
  const [panjang, setPanjang] = useState(7.0); // yield tenor 10 tahun

  const r = useMemo(() => {
    const spread = panjang - pendek;
    let bentuk = "Normal";
    let narasi = "Tenor panjang memberi yield lebih tinggi sebagai kompensasi risiko waktu. Lazim saat ekonomi tumbuh sehat.";
    let warna = "text-emerald-700";
    if (spread <= -0.1) {
      bentuk = "Terbalik (inverted)";
      narasi = "Yield pendek melebihi panjang. Sering dianggap sinyal pasar memperkirakan perlambatan atau penurunan suku bunga ke depan.";
      warna = "text-rose-700";
    } else if (spread < 0.5) {
      bentuk = "Datar (flat)";
      narasi = "Selisih tipis. Pasar tidak yakin arah ekonomi; sering masa transisi kebijakan.";
      warna = "text-amber-700";
    }
    // titik kurva interpolasi 1,2,3,5,10 th
    const tenor = [1, 2, 3, 5, 10];
    const pts = tenor.map((t) => pendek + (panjang - pendek) * ((t - 1) / 9));
    return { spread, bentuk, narasi, warna, tenor, pts };
  }, [pendek, panjang]);

  const maxY = Math.max(...r.pts, panjang) + 0.5;
  const minY = Math.min(...r.pts, pendek) - 0.5;

  return (
    <div className="my-6 card p-5">
      <div className="mb-1 text-sm font-bold text-brand-700">🧮 Simulator Kurva Imbal Hasil</div>
      <p className="mb-4 text-xs text-ink-faint">
        Atur yield tenor pendek dan panjang, lihat bentuk kurva dan apa artinya bagi ekonomi.
      </p>

      <div className="grid gap-4 sm:grid-cols-2">
        <Slider label="Yield tenor pendek (1 th)" value={pendek} set={setPendek} min={2} max={12} step={0.1} fmt={(v) => `${v.toFixed(1)}%`} />
        <Slider label="Yield tenor panjang (10 th)" value={panjang} set={setPanjang} min={2} max={12} step={0.1} fmt={(v) => `${v.toFixed(1)}%`} />
      </div>

      <div className="mt-4 flex items-end justify-between gap-2" style={{ height: 120 }}>
        {r.pts.map((v, i) => {
          const h = ((v - minY) / (maxY - minY)) * 100;
          return (
            <div key={i} className="flex flex-1 flex-col items-center justify-end">
              <div className="mb-1 text-[10px] font-bold tnum text-ink-soft">{v.toFixed(1)}%</div>
              <div className="w-full rounded-t bg-sky-500" style={{ height: `${Math.max(h, 3)}%` }} />
              <div className="mt-1 text-[10px] text-ink-faint">{r.tenor[i]}th</div>
            </div>
          );
        })}
      </div>

      <div className={`mt-3 rounded-xl bg-slate-50 p-4 text-center`}>
        <div className="text-xs text-ink-faint">Bentuk kurva (spread {r.spread.toFixed(1)}%)</div>
        <div className={`text-xl font-extrabold ${r.warna}`}>{r.bentuk}</div>
      </div>
      <p className="mt-2 text-xs text-ink-faint">{r.narasi}</p>
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
