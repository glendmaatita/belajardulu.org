import { useState } from "react";

// Playground operator logika: atur nilai p dan q, pilih operator, lihat hasilnya.
type Op = "and" | "or" | "imp" | "iff" | "xor";

const OPS: { id: Op; sym: string; nama: string; eval: (p: boolean, q: boolean) => boolean; jelas: string }[] = [
  { id: "and", sym: "p ∧ q", nama: "Konjungsi (DAN)", eval: (p, q) => p && q, jelas: "Benar hanya jika p dan q dua-duanya benar." },
  { id: "or", sym: "p ∨ q", nama: "Disjungsi (ATAU)", eval: (p, q) => p || q, jelas: "Benar jika minimal salah satu benar." },
  { id: "imp", sym: "p → q", nama: "Implikasi (JIKA-MAKA)", eval: (p, q) => !p || q, jelas: "Salah hanya saat p benar tetapi q salah." },
  { id: "iff", sym: "p ↔ q", nama: "Biimplikasi (JIKA DAN HANYA JIKA)", eval: (p, q) => p === q, jelas: "Benar jika nilai p sama dengan nilai q." },
  { id: "xor", sym: "p ⊕ q", nama: "XOR (ATAU eksklusif)", eval: (p, q) => p !== q, jelas: "Benar jika nilai p berbeda dengan nilai q." },
];

export function SimulatorOperatorLogika() {
  const [p, setP] = useState(true);
  const [q, setQ] = useState(false);
  const [op, setOp] = useState<Op>("and");
  const cur = OPS.find((o) => o.id === op)!;
  const hasil = cur.eval(p, q);

  const Toggle = ({ val, set, label }: { val: boolean; set: (b: boolean) => void; label: string }) => (
    <button
      onClick={() => set(!val)}
      className={`flex-1 rounded-lg py-2.5 text-sm font-bold transition ${val ? "bg-emerald-500 text-white" : "bg-rose-400 text-white"}`}
    >
      {label} = {val ? "BENAR" : "SALAH"}
    </button>
  );

  return (
    <div className="my-6 card p-5">
      <div className="mb-1 text-sm font-bold text-brand-700">🔣 Playground Operator Logika</div>
      <p className="mb-4 text-xs text-ink-faint">Atur nilai p dan q, lalu pilih operator. Lihat bagaimana nilai kebenarannya dihitung.</p>

      <div className="flex gap-2">
        <Toggle val={p} set={setP} label="p" />
        <Toggle val={q} set={setQ} label="q" />
      </div>

      <div className="mt-3 flex flex-wrap gap-2">
        {OPS.map((o) => (
          <button
            key={o.id}
            onClick={() => setOp(o.id)}
            className={`rounded-lg px-3 py-1.5 text-sm font-bold transition ${op === o.id ? "bg-brand-600 text-white" : "bg-canvas text-ink-soft hover:bg-line"}`}
          >
            {o.sym}
          </button>
        ))}
      </div>

      <div className="mt-4 rounded-xl bg-canvas p-4 text-center">
        <div className="text-xs font-bold text-ink-faint">{cur.nama}</div>
        <div className="mt-1 font-mono text-lg text-ink">
          {cur.sym.replace("p", p ? "B" : "S").replace("q", q ? "B" : "S")} ={" "}
          <span className={hasil ? "font-extrabold text-emerald-600" : "font-extrabold text-rose-500"}>{hasil ? "BENAR" : "SALAH"}</span>
        </div>
      </div>

      <div className="mt-3 rounded-lg bg-amber-50 p-3 text-sm text-amber-800">{cur.jelas}</div>
    </div>
  );
}
