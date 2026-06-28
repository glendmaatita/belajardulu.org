import { useMemo, useState } from "react";

// Operasi himpunan: irisan, gabungan, selisih dari dua himpunan kecil.
type Op = "irisan" | "gabungan" | "selisih";
const A = [1, 2, 3, 4, 5];
const B = [4, 5, 6, 7];

export function SimulatorHimpunan() {
  const [op, setOp] = useState<Op>("irisan");

  const hasil = useMemo(() => {
    if (op === "irisan") return A.filter((x) => B.includes(x));
    if (op === "gabungan") return Array.from(new Set([...A, ...B])).sort((a, b) => a - b);
    return A.filter((x) => !B.includes(x));
  }, [op]);

  const ket: Record<Op, string> = {
    irisan: "Irisan (A ∩ B): anggota yang ada di KEDUA himpunan.",
    gabungan: "Gabungan (A ∪ B): semua anggota dari kedua himpunan, tanpa pengulangan.",
    selisih: "Selisih (A - B): anggota A yang TIDAK ada di B.",
  };

  return (
    <div className="my-6 card p-5">
      <div className="mb-1 text-sm font-bold text-brand-700">🔵 Simulator Himpunan</div>
      <p className="mb-4 text-xs text-ink-faint">Pilih operasi dan lihat hasilnya dari dua himpunan ini.</p>

      <div className="flex justify-center gap-3 text-sm">
        <span className="rounded-lg bg-emerald-50 px-3 py-1.5 font-mono text-emerald-700">A = &#123;{A.join(", ")}&#125;</span>
        <span className="rounded-lg bg-sky-50 px-3 py-1.5 font-mono text-sky-700">B = &#123;{B.join(", ")}&#125;</span>
      </div>

      <div className="mt-3 flex justify-center gap-2">
        {(["irisan", "gabungan", "selisih"] as Op[]).map((o) => (
          <button
            key={o}
            onClick={() => setOp(o)}
            className={`rounded-lg px-3 py-1.5 text-sm font-bold capitalize transition ${op === o ? "bg-brand-600 text-white" : "bg-slate-100 text-ink-soft hover:bg-slate-200"}`}
          >
            {o}
          </button>
        ))}
      </div>

      <div className="mt-3 rounded-xl bg-slate-50 p-4 text-center font-mono text-lg text-ink">
        Hasil = &#123;{hasil.join(", ") || " "}&#125;
      </div>
      <div className="mt-2 rounded-lg bg-amber-50 p-3 text-sm text-amber-800">{ket[op]}</div>
    </div>
  );
}
