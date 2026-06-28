import { useMemo, useState } from "react";

// Latihan inferensi pada kuadrat oposisi: dari satu proposisi yang diketahui,
// tentukan nilai proposisi lain (kontradiktori, kontrari, subkontrari, subaltern).
type Nilai = "benar" | "salah" | "takpasti";

const SOAL = [
  {
    diketahui: "A benar: Semua mahasiswa rajin.",
    target: "O: Sebagian mahasiswa tidak rajin.",
    jawab: "salah" as Nilai,
    ket: "A dan O kontradiktori. Jika A benar, O pasti salah.",
  },
  {
    diketahui: "A benar: Semua mahasiswa rajin.",
    target: "E: Tidak ada mahasiswa yang rajin.",
    jawab: "salah" as Nilai,
    ket: "A dan E kontrari (tak bisa sama-sama benar). Jika A benar, E pasti salah.",
  },
  {
    diketahui: "A benar: Semua mahasiswa rajin.",
    target: "I: Sebagian mahasiswa rajin.",
    jawab: "benar" as Nilai,
    ket: "I adalah subaltern dari A. Jika A benar, I pasti benar.",
  },
  {
    diketahui: "E salah: Tidak ada burung yang bisa terbang (salah).",
    target: "I: Sebagian burung bisa terbang.",
    jawab: "benar" as Nilai,
    ket: "E dan I kontradiktori. Jika E salah, I pasti benar.",
  },
  {
    diketahui: "I benar: Sebagian dokter adalah perempuan.",
    target: "A: Semua dokter adalah perempuan.",
    jawab: "takpasti" as Nilai,
    ket: "Dari subaltern I yang benar, kita tidak bisa memastikan A. Nilai A tak pasti.",
  },
  {
    diketahui: "O benar: Sebagian logam bukan padat.",
    target: "A: Semua logam padat.",
    jawab: "salah" as Nilai,
    ket: "A dan O kontradiktori. Jika O benar, A pasti salah.",
  },
];

const OPSI: { id: Nilai; label: string }[] = [
  { id: "benar", label: "Pasti benar" },
  { id: "salah", label: "Pasti salah" },
  { id: "takpasti", label: "Tak pasti" },
];

export function LatihanKuadratOposisi() {
  const [idx, setIdx] = useState(0);
  const [pilih, setPilih] = useState<Nilai | null>(null);
  const s = SOAL[idx];
  const benar = useMemo(() => pilih !== null && pilih === s.jawab, [pilih, s]);

  function lanjut() {
    setPilih(null);
    setIdx((i) => (i + 1) % SOAL.length);
  }

  return (
    <div className="my-6 card p-5">
      <div className="mb-1 text-sm font-bold text-brand-700">🔲 Latihan Kuadrat Oposisi</div>
      <p className="mb-4 text-xs text-ink-faint">Dari proposisi yang diketahui, tentukan nilai proposisi targetnya menurut hubungan A, E, I, O.</p>

      <div className="rounded-xl bg-slate-50 p-4">
        <div className="text-sm font-bold text-ink">Diketahui: {s.diketahui}</div>
        <div className="mt-2 text-sm text-ink-soft">Target: {s.target}</div>
      </div>

      <div className="mt-3 flex gap-2">
        {OPSI.map((o) => (
          <button
            key={o.id}
            onClick={() => pilih === null && setPilih(o.id)}
            disabled={pilih !== null}
            className={`flex-1 rounded-lg py-2 text-sm font-bold transition ${
              pilih !== null && o.id === s.jawab
                ? "bg-emerald-500 text-white"
                : pilih === o.id
                ? "bg-rose-400 text-white"
                : "bg-slate-100 text-ink-soft hover:bg-slate-200"
            }`}
          >
            {o.label}
          </button>
        ))}
      </div>

      {pilih !== null && (
        <div className={`mt-3 rounded-lg p-3 text-sm ${benar ? "bg-emerald-50 text-emerald-800" : "bg-amber-50 text-amber-800"}`}>
          {benar ? "Tepat! " : "Belum tepat. "}
          {s.ket}
          <button onClick={lanjut} className="ml-2 rounded-md bg-brand-600 px-3 py-1 text-xs font-bold text-white">Soal berikutnya</button>
        </div>
      )}
    </div>
  );
}
