import { useMemo, useState } from "react";

// Identifikasi bentuk argumen kondisional dan apakah valid.
const BENTUK = ["Modus Ponens", "Modus Tollens", "Menegaskan akibat", "Menyangkal sebab"] as const;
type Bentuk = (typeof BENTUK)[number];

const SOAL: { premis: string[]; bentuk: Bentuk; valid: boolean; ket: string }[] = [
  {
    premis: ["Jika hujan, jalan basah.", "Hujan.", "Maka: jalan basah."],
    bentuk: "Modus Ponens",
    valid: true,
    ket: "Menegaskan sebab (p), menyimpulkan akibat (q). Bentuk valid.",
  },
  {
    premis: ["Jika hujan, jalan basah.", "Jalan tidak basah.", "Maka: tidak hujan."],
    bentuk: "Modus Tollens",
    valid: true,
    ket: "Menyangkal akibat (q salah), menyimpulkan sebab salah (p salah). Valid.",
  },
  {
    premis: ["Jika hujan, jalan basah.", "Jalan basah.", "Maka: pasti hujan."],
    bentuk: "Menegaskan akibat",
    valid: false,
    ket: "Menegaskan akibat (q) lalu menyimpulkan sebab (p). Sesat: jalan basah bisa sebab lain.",
  },
  {
    premis: ["Jika belajar, lulus.", "Tidak belajar.", "Maka: tidak lulus."],
    bentuk: "Menyangkal sebab",
    valid: false,
    ket: "Menyangkal sebab (p salah) lalu menyimpulkan akibat salah (q salah). Sesat: bisa lulus lewat jalan lain.",
  },
  {
    premis: ["Jika lampu merah, mobil berhenti.", "Lampu merah.", "Maka: mobil berhenti."],
    bentuk: "Modus Ponens",
    valid: true,
    ket: "Menegaskan sebab, menyimpulkan akibat. Bentuk valid.",
  },
  {
    premis: ["Jika ia dokter, ia kuliah kedokteran.", "Ia tidak kuliah kedokteran.", "Maka: ia bukan dokter."],
    bentuk: "Modus Tollens",
    valid: true,
    ket: "Menyangkal akibat untuk menyangkal sebab. Bentuk valid.",
  },
];

export function IdentifikasiModus() {
  const [idx, setIdx] = useState(0);
  const [pilih, setPilih] = useState<Bentuk | null>(null);
  const s = SOAL[idx];
  const benar = useMemo(() => pilih !== null && pilih === s.bentuk, [pilih, s]);

  function lanjut() {
    setPilih(null);
    setIdx((i) => (i + 1) % SOAL.length);
  }

  return (
    <div className="my-6 card p-5">
      <div className="mb-1 text-sm font-bold text-brand-700">🧭 Identifikasi Bentuk Argumen</div>
      <p className="mb-4 text-xs text-ink-faint">Baca argumen kondisional ini, lalu tentukan bentuknya. Perhatikan mana yang valid dan mana yang sesat.</p>

      <div className="space-y-1.5 rounded-xl bg-slate-50 p-4">
        {s.premis.map((p, i) => (
          <div key={i} className={`text-sm ${i === s.premis.length - 1 ? "font-bold text-ink" : "text-ink-soft"}`}>{p}</div>
        ))}
      </div>

      <div className="mt-3 grid grid-cols-2 gap-2">
        {BENTUK.map((b) => (
          <button
            key={b}
            onClick={() => pilih === null && setPilih(b)}
            disabled={pilih !== null}
            className={`rounded-lg py-2 text-sm font-bold transition ${
              pilih !== null && b === s.bentuk
                ? "bg-emerald-500 text-white"
                : pilih === b
                ? "bg-rose-400 text-white"
                : "bg-slate-100 text-ink-soft hover:bg-slate-200"
            }`}
          >
            {b}
          </button>
        ))}
      </div>

      {pilih !== null && (
        <div className={`mt-3 rounded-lg p-3 text-sm ${benar ? "bg-emerald-50 text-emerald-800" : "bg-amber-50 text-amber-800"}`}>
          <span className="font-bold">{s.valid ? "Bentuk VALID. " : "Bentuk SESAT. "}</span>
          {s.ket}
          <button onClick={lanjut} className="ml-2 rounded-md bg-brand-600 px-3 py-1 text-xs font-bold text-white">Soal berikutnya</button>
        </div>
      )}
    </div>
  );
}
