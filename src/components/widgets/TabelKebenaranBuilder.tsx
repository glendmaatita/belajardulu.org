import { useMemo, useState } from "react";

// Pembangun tabel kebenaran: pilih operator, lihat hasilnya untuk semua kombinasi p dan q.
type Op = "DAN (and)" | "ATAU (or)" | "JIKA-MAKA (implikasi)" | "XOR (salah satu)";

function evalOp(op: Op, p: boolean, q: boolean): boolean {
  switch (op) {
    case "DAN (and)": return p && q;
    case "ATAU (or)": return p || q;
    case "JIKA-MAKA (implikasi)": return !p || q;
    case "XOR (salah satu)": return p !== q;
  }
}

const OPS: Op[] = ["DAN (and)", "ATAU (or)", "JIKA-MAKA (implikasi)", "XOR (salah satu)"];
const COMBO = [
  [true, true],
  [true, false],
  [false, true],
  [false, false],
] as const;

export function TabelKebenaranBuilder() {
  const [op, setOp] = useState<Op>("DAN (and)");

  const rows = useMemo(() => COMBO.map(([p, q]) => ({ p, q, r: evalOp(op, p, q) })), [op]);
  const benarCount = rows.filter((r) => r.r).length;
  const sifat = benarCount === 4 ? "Tautologi (selalu benar)" : benarCount === 0 ? "Kontradiksi (selalu salah)" : "Kontingen (tergantung)";

  return (
    <div className="my-6 card p-5">
      <div className="mb-1 text-sm font-bold text-brand-700">🔣 Pembangun Tabel Kebenaran</div>
      <p className="mb-4 text-xs text-ink-faint">
        Pilih operator logika, lalu lihat nilai benar (B) atau salah (S) untuk semua kombinasi proposisi p dan q.
      </p>

      <div className="mb-4 flex flex-wrap gap-2">
        {OPS.map((o) => (
          <button key={o} onClick={() => setOp(o)} className={`rounded-lg px-3 py-1.5 text-xs font-bold transition ${op === o ? "bg-brand-600 text-white" : "bg-slate-100 text-ink-soft hover:bg-slate-200"}`}>
            {o}
          </button>
        ))}
      </div>

      <div className="overflow-hidden rounded-xl border border-slate-200">
        <div className="flex bg-slate-100 text-sm font-bold text-ink">
          <div className="flex-1 p-2 text-center">p</div>
          <div className="flex-1 p-2 text-center">q</div>
          <div className="flex-[2] p-2 text-center">p {op.split(" ")[0]} q</div>
        </div>
        {rows.map((r, i) => (
          <div key={i} className={`flex text-sm ${i % 2 ? "bg-slate-50" : ""}`}>
            <Cell v={r.p} />
            <Cell v={r.q} />
            <div className={`flex-[2] p-2 text-center font-bold ${r.r ? "text-emerald-600" : "text-rose-500"}`}>{r.r ? "B" : "S"}</div>
          </div>
        ))}
      </div>

      <div className="mt-3 rounded-xl bg-slate-50 p-3 text-center text-sm">
        Hasil benar pada <b>{benarCount}</b> dari 4 baris. Sifat: <b className="text-brand-700">{sifat}</b>.
      </div>

      <p className="mt-3 text-xs text-ink-faint">
        Perhatikan implikasi (jika-maka): hanya salah ketika p benar tetapi q salah. Inilah yang sering bertentangan dengan intuisi sehari-hari.
      </p>
    </div>
  );
}

function Cell({ v }: { v: boolean }) {
  return <div className="flex-1 p-2 text-center font-semibold text-ink-soft">{v ? "B" : "S"}</div>;
}
