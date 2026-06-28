import { useMemo, useState } from "react";

// Risiko vs imbal hasil: rentang hasil yang mungkin melebar seiring naiknya potensi imbal hasil.
// Ilustrasi: hasil terbaik/terburuk dalam setahun untuk modal tertentu.
type Profil = "Konservatif" | "Moderat" | "Agresif";

const DATA: Record<Profil, { ret: number; risk: number; aset: string }> = {
  Konservatif: { ret: 6, risk: 5, aset: "deposito & obligasi" },
  Moderat: { ret: 10, risk: 14, aset: "campuran saham & obligasi" },
  Agresif: { ret: 15, risk: 30, aset: "mayoritas saham" },
};

const LIST: Profil[] = ["Konservatif", "Moderat", "Agresif"];

export function SimulatorRisikoImbalHasil() {
  const [modal, setModal] = useState(100_000_000);
  const [profil, setProfil] = useState<Profil>("Moderat");

  const r = useMemo(() => {
    const d = DATA[profil];
    const ekspektasi = modal * (1 + d.ret / 100);
    // rentang +- 1 standar deviasi (ilustrasi)
    const terbaik = modal * (1 + (d.ret + d.risk) / 100);
    const terburuk = modal * (1 + (d.ret - d.risk) / 100);
    return { d, ekspektasi, terbaik, terburuk };
  }, [modal, profil]);

  const fmt = (n: number) => "Rp" + Math.round(n).toLocaleString("id-ID");

  return (
    <div className="my-6 card p-5">
      <div className="mb-1 text-sm font-bold text-brand-700">⚖️ Simulator Risiko vs Imbal Hasil</div>
      <p className="mb-4 text-xs text-ink-faint">
        Imbal hasil yang lebih tinggi datang dengan rentang hasil yang lebih lebar (risiko). Bandingkan tiga profil untuk modal yang sama.
      </p>

      <Slider label="Modal investasi" value={modal} set={setModal} min={10_000_000} max={1_000_000_000} step={10_000_000} fmt={(v) => "Rp" + v.toLocaleString("id-ID")} />

      <div className="mt-4 flex gap-2">
        {LIST.map((p) => (
          <button key={p} onClick={() => setProfil(p)} className={`flex-1 rounded-lg px-3 py-1.5 text-sm font-bold transition ${profil === p ? "bg-brand-600 text-white" : "bg-canvas text-ink-soft hover:bg-line"}`}>
            {p}
          </button>
        ))}
      </div>

      <p className="mt-3 text-center text-xs text-ink-faint">
        {profil}: ekspektasi imbal hasil <b>{r.d.ret}%</b>, volatilitas <b>{r.d.risk}%</b> ({r.d.aset})
      </p>

      <div className="mt-3 grid gap-3 sm:grid-cols-3">
        <div className="rounded-xl bg-rose-50 p-3 text-center">
          <div className="text-xs text-ink-faint">Skenario buruk (1 tahun)</div>
          <div className="text-base font-extrabold tnum text-rose-700">{fmt(r.terburuk)}</div>
        </div>
        <div className="rounded-xl bg-canvas p-3 text-center">
          <div className="text-xs text-ink-faint">Ekspektasi</div>
          <div className="text-base font-extrabold tnum text-ink">{fmt(r.ekspektasi)}</div>
        </div>
        <div className="rounded-xl bg-emerald-50 p-3 text-center">
          <div className="text-xs text-ink-faint">Skenario baik (1 tahun)</div>
          <div className="text-base font-extrabold tnum text-emerald-700">{fmt(r.terbaik)}</div>
        </div>
      </div>

      <p className="mt-3 text-xs text-ink-faint">
        Perhatikan: profil agresif menawarkan ekspektasi tertinggi, tetapi jarak antara skenario baik dan buruk juga paling lebar. Pilih sesuai tujuan dan ketahanan menghadapi fluktuasi.
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
      <input type="range" min={min} max={max} step={step} value={value} onChange={(e) => set(Number(e.target.value))} className="h-2 w-full cursor-pointer appearance-none rounded-full bg-line accent-brand-600" />
    </div>
  );
}
