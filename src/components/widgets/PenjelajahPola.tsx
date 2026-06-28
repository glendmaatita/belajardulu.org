import { useMemo, useState } from "react";

// Petualangan pola: temukan suku berikutnya, lalu lihat aturannya.
const SOAL = [
  { deret: [2, 4, 6, 8], pilihan: [9, 10, 12], jawab: 10, aturan: "Bertambah 2 tiap langkah (barisan aritmetika)." },
  { deret: [3, 6, 12, 24], pilihan: [36, 48, 30], jawab: 48, aturan: "Dikali 2 tiap langkah (barisan geometri)." },
  { deret: [1, 1, 2, 3, 5], pilihan: [7, 8, 10], jawab: 8, aturan: "Tiap suku adalah jumlah dua suku sebelumnya (Fibonacci)." },
  { deret: [1, 4, 9, 16], pilihan: [20, 25, 24], jawab: 25, aturan: "Bilangan kuadrat: 1², 2², 3², 4², 5²." },
  { deret: [100, 90, 81, 73], pilihan: [66, 64, 65], jawab: 66, aturan: "Selisihnya mengecil 10, 9, 8, 7, jadi berkurang 7." },
];

export function PenjelajahPola() {
  const [idx, setIdx] = useState(0);
  const [pilih, setPilih] = useState<number | null>(null);
  const s = SOAL[idx];
  const benar = useMemo(() => pilih !== null && pilih === s.jawab, [pilih, s]);

  function lanjut() {
    setPilih(null);
    setIdx((i) => (i + 1) % SOAL.length);
  }

  return (
    <div className="my-6 card p-5">
      <div className="mb-1 text-sm font-bold text-brand-700">🧭 Penjelajah Pola</div>
      <p className="mb-4 text-xs text-ink-faint">Jangan cari rumus dulu. Amati deret, tebak suku berikutnya, baru kita temukan aturannya.</p>

      <div className="flex flex-wrap items-center justify-center gap-2 rounded-xl bg-canvas p-4">
        {s.deret.map((n, i) => (
          <span key={i} className="rounded-lg bg-white px-3 py-2 text-lg font-bold text-ink tnum">{n}</span>
        ))}
        <span className="px-1 text-lg font-bold text-ink-faint">,</span>
        <span className="rounded-lg border-2 border-dashed border-brand-300 px-3 py-2 text-lg font-bold text-brand-500">?</span>
      </div>

      <div className="mt-3 flex justify-center gap-2">
        {s.pilihan.map((p) => (
          <button
            key={p}
            onClick={() => pilih === null && setPilih(p)}
            disabled={pilih !== null}
            className={`rounded-lg px-5 py-2 text-sm font-bold transition tnum ${
              pilih !== null && p === s.jawab
                ? "bg-emerald-500 text-white"
                : pilih === p
                ? "bg-rose-400 text-white"
                : "bg-canvas text-ink-soft hover:bg-line"
            }`}
          >
            {p}
          </button>
        ))}
      </div>

      {pilih !== null && (
        <div className={`mt-3 rounded-lg p-3 text-sm ${benar ? "bg-emerald-50 text-emerald-800" : "bg-amber-50 text-amber-800"}`}>
          <span className="font-bold">{benar ? "Tepat! " : `Belum tepat, jawabannya ${s.jawab}. `}</span>
          Aturan yang baru kita temukan: {s.aturan}
          <button onClick={lanjut} className="ml-2 rounded-md bg-brand-600 px-3 py-1 text-xs font-bold text-white">Pola berikutnya</button>
        </div>
      )}
    </div>
  );
}
