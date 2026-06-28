import { useMemo, useState } from "react";

// Susun argumen valid: pilih premis yang tepat agar kesimpulan benar-benar mengikuti.
const SOAL = [
  {
    kesimpulan: "Maka, Sokrates akan mati.",
    diketahui: "Sokrates adalah manusia.",
    opsi: [
      "Semua manusia akan mati.",
      "Sebagian manusia akan mati.",
      "Semua yang mati adalah manusia.",
    ],
    jawab: 0,
    ket: "Dengan premis universal 'Semua manusia akan mati', kesimpulan mengikuti secara valid (modus Barbara).",
  },
  {
    kesimpulan: "Maka, ikan paus bukan ikan.",
    diketahui: "Ikan paus adalah mamalia.",
    opsi: [
      "Tidak ada mamalia yang merupakan ikan.",
      "Sebagian mamalia bukan ikan.",
      "Semua ikan adalah mamalia.",
    ],
    jawab: 0,
    ket: "Premis universal negatif 'Tidak ada mamalia yang ikan' membuat kesimpulan mengikuti dengan valid.",
  },
  {
    kesimpulan: "Maka, kucing ini perlu minum.",
    diketahui: "Kucing ini adalah makhluk hidup.",
    opsi: [
      "Semua makhluk hidup perlu minum.",
      "Sebagian makhluk hidup perlu minum.",
      "Semua yang perlu minum adalah makhluk hidup.",
    ],
    jawab: 0,
    ket: "Hanya premis universal yang menjamin kesimpulan; premis partikular atau yang terbalik tidak membuat argumen valid.",
  },
  {
    kesimpulan: "Maka, bilangan ini habis dibagi 2.",
    diketahui: "Bilangan ini genap.",
    opsi: [
      "Semua bilangan genap habis dibagi 2.",
      "Sebagian bilangan genap habis dibagi 2.",
      "Semua yang habis dibagi 2 adalah bilangan genap.",
    ],
    jawab: 0,
    ket: "Premis universal afirmatif menyambungkan 'genap' ke 'habis dibagi 2' sehingga argumen valid.",
  },
];

export function PenyusunArgumen() {
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
      <div className="mb-1 text-sm font-bold text-brand-700">🧩 Penyusun Argumen Valid</div>
      <p className="mb-4 text-xs text-ink-faint">Pilih premis mayor yang membuat kesimpulan benar-benar mengikuti dari premis yang diketahui.</p>

      <div className="rounded-xl bg-slate-50 p-4 text-sm">
        <div className="text-ink-faint">Premis minor: <span className="font-medium text-ink-soft">{s.diketahui}</span></div>
        <div className="mt-2 font-bold text-ink">{s.kesimpulan}</div>
      </div>

      <p className="mt-3 text-xs font-bold text-ink-faint">Pilih premis mayor:</p>
      <div className="mt-1 space-y-2">
        {s.opsi.map((o, i) => (
          <button
            key={i}
            onClick={() => pilih === null && setPilih(i)}
            disabled={pilih !== null}
            className={`block w-full rounded-lg px-3 py-2 text-left text-sm font-medium transition ${
              pilih !== null && i === s.jawab
                ? "bg-emerald-500 text-white"
                : pilih === i
                ? "bg-rose-400 text-white"
                : "bg-slate-100 text-ink-soft hover:bg-slate-200"
            }`}
          >
            {o}
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
