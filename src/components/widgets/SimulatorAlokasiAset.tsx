import { useMemo, useState } from "react";

// Alokasi aset berdasarkan toleransi risiko: saham, obligasi, kas.
export function SimulatorAlokasiAset() {
  const [risk, setRisk] = useState(50); // toleransi risiko 0..100

  const r = useMemo(() => {
    const saham = Math.round(risk);
    const kas = Math.round(Math.max(5, 25 - risk * 0.2));
    const obligasi = Math.max(0, 100 - saham - kas);
    // perkiraan return & risiko tertimbang (ilustrasi: saham 12/20, obligasi 7/8, kas 4/1)
    const ret = (saham * 12 + obligasi * 7 + kas * 4) / 100;
    const rsk = (saham * 20 + obligasi * 8 + kas * 1) / 100;
    const profil = risk < 34 ? "Konservatif" : risk < 67 ? "Moderat" : "Agresif";
    return { saham, obligasi, kas, ret, rsk, profil };
  }, [risk]);

  return (
    <div className="my-6 card p-5">
      <div className="mb-1 text-sm font-bold text-brand-700">🧩 Simulator Alokasi Aset</div>
      <p className="mb-4 text-xs text-ink-faint">
        Alokasi aset (berapa porsi saham, obligasi, kas) adalah penentu terbesar hasil investasi jangka panjang. Sesuaikan
        dengan toleransi risikomu.
      </p>

      <div className="mb-1 flex items-center justify-between">
        <span className="text-sm font-semibold text-ink-soft">Toleransi risiko</span>
        <span className="tnum text-sm font-bold text-ink">{r.profil}</span>
      </div>
      <input type="range" min={0} max={100} step={5} value={risk} onChange={(e) => setRisk(Number(e.target.value))} className="h-2 w-full cursor-pointer appearance-none rounded-full bg-line accent-brand-600" />

      <div className="mt-5 flex h-9 overflow-hidden rounded-lg">
        <Seg pct={r.saham} color="#ef4444" label="Saham" />
        <Seg pct={r.obligasi} color="#0ea5e9" label="Obligasi" />
        <Seg pct={r.kas} color="#10b981" label="Kas" />
      </div>
      <div className="mt-2 flex justify-between text-xs text-ink-faint">
        <span>🔴 Saham {r.saham}%</span>
        <span>🔵 Obligasi {r.obligasi}%</span>
        <span>🟢 Kas {r.kas}%</span>
      </div>

      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        <Card label="Perkiraan imbal hasil/tahun" value={`${r.ret.toFixed(1)}%`} accent="text-emerald-700" />
        <Card label="Perkiraan risiko (volatilitas)" value={`${r.rsk.toFixed(1)}%`} accent="text-rose-600" />
      </div>
      <p className="mt-3 text-xs text-ink-faint">
        Profil <b>{r.profil}</b>: makin tinggi porsi saham, makin besar potensi imbal hasil sekaligus fluktuasinya.
        Pilih yang sesuai jangka waktu dan kenyamananmu menghadapi naik-turun nilai. (angka ilustrasi)
      </p>
    </div>
  );
}

function Seg({ pct, color, label }: { pct: number; color: string; label: string }) {
  return (
    <div className="flex items-center justify-center text-xs font-bold text-white" style={{ width: `${pct}%`, background: color }}>
      {pct >= 12 ? `${label}` : ""}
    </div>
  );
}

function Card({ label, value, accent }: { label: string; value: string; accent: string }) {
  return (
    <div className="rounded-xl bg-canvas p-4">
      <div className="text-xs text-ink-faint">{label}</div>
      <div className={`text-2xl font-extrabold tnum ${accent}`}>{value}</div>
    </div>
  );
}
