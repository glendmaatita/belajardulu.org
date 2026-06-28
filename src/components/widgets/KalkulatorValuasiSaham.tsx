import { useMemo, useState } from "react";
import { rupiah } from "../../lib/format";

// Valuasi saham: model pertumbuhan dividen (Gordon) dan berbasis P/E.
export function KalkulatorValuasiSaham() {
  const [div, setDiv] = useState(200); // dividen per saham (D0), Rp
  const [growth, setGrowth] = useState(6); // pertumbuhan g %
  const [req, setReq] = useState(12); // imbal hasil diminta r %
  const [eps, setEps] = useState(500); // laba per saham, Rp
  const [pe, setPe] = useState(15); // target P/E
  const [harga, setHarga] = useState(6000); // harga pasar saat ini

  const r = useMemo(() => {
    const g = growth / 100;
    const rr = req / 100;
    const gordon = rr > g ? (div * (1 + g)) / (rr - g) : NaN;
    const peVal = eps * pe;
    const fair = Number.isNaN(gordon) ? peVal : (gordon + peVal) / 2;
    const verdict = harga < fair * 0.95 ? "undervalued" : harga > fair * 1.05 ? "overvalued" : "wajar";
    return { gordon, peVal, fair, verdict };
  }, [div, growth, req, eps, pe, harga]);

  return (
    <div className="my-6 card p-5">
      <div className="mb-1 text-sm font-bold text-brand-700">💹 Kalkulator Valuasi Saham</div>
      <p className="mb-4 text-xs text-ink-faint">
        Berapa nilai wajar sebuah saham? Bandingkan model dividen (Gordon Growth) dan berbasis P/E, lalu cek apakah
        harga pasarnya murah atau mahal.
      </p>

      <div className="grid gap-4 sm:grid-cols-3">
        <Slider label="Dividen/saham (D0)" value={div} set={setDiv} min={0} max={1000} step={10} fmt={(v) => rupiah(v)} />
        <Slider label="Pertumbuhan (g)" value={growth} set={setGrowth} min={0} max={15} step={0.5} fmt={(v) => `${v}%`} />
        <Slider label="Imbal hasil diminta (r)" value={req} set={setReq} min={5} max={25} step={0.5} fmt={(v) => `${v}%`} />
        <Slider label="Laba/saham (EPS)" value={eps} set={setEps} min={0} max={2000} step={50} fmt={(v) => rupiah(v)} />
        <Slider label="Target P/E" value={pe} set={setPe} min={3} max={40} step={1} fmt={(v) => `${v}x`} />
        <Slider label="Harga pasar saat ini" value={harga} set={setHarga} min={500} max={20000} step={100} fmt={(v) => rupiah(v)} />
      </div>

      <div className="mt-5 grid gap-3 sm:grid-cols-3">
        <Card label="Nilai (Gordon)" value={Number.isNaN(r.gordon) ? "n/a (r ≤ g)" : rupiah(Math.round(r.gordon))} accent="text-sky-700" />
        <Card label="Nilai (P/E)" value={rupiah(Math.round(r.peVal))} accent="text-violet-700" />
        <Card label="Nilai wajar (rata-rata)" value={rupiah(Math.round(r.fair))} accent="text-emerald-700" />
      </div>
      <p className={`mt-3 rounded-lg px-3 py-2 text-sm ${r.verdict === "undervalued" ? "bg-emerald-50 text-emerald-800" : r.verdict === "overvalued" ? "bg-rose-50 text-rose-700" : "bg-slate-100 text-ink-soft"}`}>
        Harga pasar {rupiah(harga)} vs nilai wajar {rupiah(Math.round(r.fair))}: saham terlihat{" "}
        <b>{r.verdict === "undervalued" ? "murah (undervalued)" : r.verdict === "overvalued" ? "mahal (overvalued)" : "wajar"}</b>.
        Ingat: valuasi sangat sensitif terhadap asumsi g dan r.
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

function Card({ label, value, accent }: { label: string; value: string; accent: string }) {
  return (
    <div className="rounded-xl bg-slate-50 p-3">
      <div className="text-xs text-ink-faint">{label}</div>
      <div className={`text-lg font-extrabold tnum ${accent}`}>{value}</div>
    </div>
  );
}
