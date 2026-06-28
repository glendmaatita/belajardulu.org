import { useMemo, useState } from "react";
import { rupiah } from "../../lib/format";

// Trade finance: eksportir bisa mempercepat kas lewat factoring (menjual piutang dengan diskon)
// atau menanggung biaya LC. Bandingkan kas diterima vs biaya pembiayaan.
type Mode = "Factoring" | "Letter of Credit";

export function KalkulatorTradeFinance() {
  const [mode, setMode] = useState<Mode>("Factoring");
  const [nilai, setNilai] = useState(1_000_000_000); // nilai invoice/LC
  const [diskon, setDiskon] = useState(4); // % diskon factoring atau biaya LC
  const [tenor, setTenor] = useState(90); // hari tempo

  const r = useMemo(() => {
    const biaya = nilai * (diskon / 100);
    const kasDiterima = nilai - biaya;
    const biayaSetara = (biaya / nilai) * (365 / tenor) * 100; // biaya tahunan setara %
    return { biaya, kasDiterima, biayaSetara };
  }, [nilai, diskon, tenor]);

  return (
    <div className="my-6 card p-5">
      <div className="mb-1 text-sm font-bold text-brand-700">💼 Kalkulator Trade Finance</div>
      <p className="mb-4 text-xs text-ink-faint">
        Trade finance membantu arus kas: factoring menjual piutang lebih awal, LC memberi jaminan bank dengan biaya. Lihat biayanya.
      </p>

      <div className="mb-4 flex rounded-lg bg-slate-100 p-1 text-sm font-bold">
        {(["Factoring", "Letter of Credit"] as Mode[]).map((m) => (
          <button key={m} onClick={() => setMode(m)} className={`flex-1 rounded-md py-2 transition ${mode === m ? "bg-brand-600 text-white" : "text-ink-soft"}`}>
            {m}
          </button>
        ))}
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        <Slider label={mode === "Factoring" ? "Nilai piutang" : "Nilai LC"} value={nilai} set={setNilai} min={100_000_000} max={10_000_000_000} step={100_000_000} fmt={(v) => rupiah(v)} />
        <Slider label={mode === "Factoring" ? "Diskon factoring" : "Biaya LC"} value={diskon} set={setDiskon} min={0.5} max={10} step={0.5} fmt={(v) => `${v}%`} />
        <Slider label="Tenor" value={tenor} set={setTenor} min={30} max={180} step={15} fmt={(v) => `${v} hari`} />
      </div>

      <div className="mt-5 grid gap-3 sm:grid-cols-3">
        <Stat label="Biaya pembiayaan" value={rupiah(Math.round(r.biaya))} tone="rose" />
        <Stat label="Kas diterima sekarang" value={rupiah(Math.round(r.kasDiterima))} tone="emerald" />
        <Stat label="Biaya setara per tahun" value={`${r.biayaSetara.toFixed(1)}%`} tone="violet" />
      </div>

      <p className="mt-3 text-xs text-ink-faint">
        {mode === "Factoring"
          ? "Factoring menukar sebagian nilai piutang dengan kas segera, berguna saat arus kas ketat. Perhatikan biaya setara tahunannya."
          : "LC memberi kepastian pembayaran lewat jaminan bank, dengan biaya yang sepadan untuk transaksi berisiko atau bernilai besar."}
      </p>
    </div>
  );
}

function Stat({ label, value, tone }: { label: string; value: string; tone: "rose" | "emerald" | "violet" }) {
  const map = { rose: "text-rose-700", emerald: "text-emerald-700", violet: "text-violet-700" };
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
