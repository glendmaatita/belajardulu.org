import { useMemo, useState } from "react";

// PDB (pendekatan pengeluaran) = C + I + G + (X - M). Dalam triliun rupiah.
export function KalkulatorPDB() {
  const [c, setC] = useState(9000); // konsumsi
  const [i, setI] = useState(4500); // investasi
  const [g, setG] = useState(1500); // belanja pemerintah
  const [x, setX] = useState(3000); // ekspor
  const [m, setM] = useState(2800); // impor

  const r = useMemo(() => {
    const nx = x - m;
    const pdb = c + i + g + nx;
    return { nx, pdb };
  }, [c, i, g, x, m]);

  const komp = [
    { label: "Konsumsi (C)", value: c, color: "#10b981" },
    { label: "Investasi (I)", value: i, color: "#0ea5e9" },
    { label: "Pemerintah (G)", value: g, color: "#f59e0b" },
    { label: "Ekspor neto (X-M)", value: r.nx, color: "#8b5cf6" },
  ];

  const fmt = (n: number) => "Rp" + n.toLocaleString("id-ID") + " T";

  return (
    <div className="my-6 card p-5">
      <div className="mb-1 text-sm font-bold text-brand-700">🌐 Kalkulator PDB</div>
      <p className="mb-4 text-xs text-ink-faint">
        PDB pendekatan pengeluaran = Konsumsi + Investasi + Belanja Pemerintah + Ekspor neto. Atur tiap komponen (triliun rupiah).
      </p>

      <div className="grid gap-4 sm:grid-cols-2">
        <Slider label="Konsumsi (C)" value={c} set={setC} min={2000} max={15000} step={250} fmt={fmt} />
        <Slider label="Investasi (I)" value={i} set={setI} min={1000} max={10000} step={250} fmt={fmt} />
        <Slider label="Belanja Pemerintah (G)" value={g} set={setG} min={500} max={5000} step={100} fmt={fmt} />
        <Slider label="Ekspor (X)" value={x} set={setX} min={500} max={6000} step={100} fmt={fmt} />
        <Slider label="Impor (M)" value={m} set={setM} min={500} max={6000} step={100} fmt={fmt} />
      </div>

      <div className="mt-5 flex h-7 overflow-hidden rounded-lg">
        {komp.map((k, idx) => {
          const total = komp.reduce((a, b) => a + Math.max(0, b.value), 0);
          const w = (Math.max(0, k.value) / total) * 100;
          return (
            <div key={idx} className="flex items-center justify-center text-[10px] font-bold text-white" style={{ width: `${w}%`, background: k.color }}>
              {w > 10 ? k.label.split(" ")[0] : ""}
            </div>
          );
        })}
      </div>

      <div className="mt-4 rounded-xl bg-emerald-50 p-4 text-center">
        <div className="text-xs text-ink-faint">Produk Domestik Bruto (PDB)</div>
        <div className="text-3xl font-extrabold tnum text-emerald-700">{fmt(r.pdb)}</div>
        <div className="mt-1 text-xs text-ink-faint">Ekspor neto {r.nx >= 0 ? "surplus" : "defisit"}: {fmt(r.nx)}</div>
      </div>

      <p className="mt-3 text-xs text-ink-faint">
        Konsumsi rumah tangga biasanya komponen terbesar. Bila impor melebihi ekspor, ekspor neto negatif dan mengurangi PDB.
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
