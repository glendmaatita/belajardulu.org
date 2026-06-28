import { useMemo, useState } from "react";

// Kenali filsuf dari gagasan atau ucapan khasnya.
const SOAL = [
  {
    petunjuk: "\"Aku berpikir, maka aku ada.\" Ia meragukan segalanya untuk menemukan dasar yang pasti.",
    opsi: ["Descartes", "Aristoteles", "Nietzsche"],
    jawab: 0,
    ket: "Rene Descartes, bapak rasionalisme modern, dengan cogito ergo sum.",
  },
  {
    petunjuk: "Ia mengajarkan dunia ide yang sempurna sebagai realitas sejati di balik dunia indrawi.",
    opsi: ["Plato", "Hume", "Confucius"],
    jawab: 0,
    ket: "Plato, murid Socrates, dengan teori dunia ide.",
  },
  {
    petunjuk: "Ia menegaskan bertindaklah hanya menurut prinsip yang kau kehendaki menjadi hukum universal.",
    opsi: ["Kant", "Bentham", "Sartre"],
    jawab: 0,
    ket: "Immanuel Kant, dengan imperatif kategoris dalam etika deontologi.",
  },
  {
    petunjuk: "Ia menyatakan eksistensi mendahului esensi: manusia menentukan dirinya lewat pilihan.",
    opsi: ["Sartre", "Plato", "Aquinas"],
    jawab: 0,
    ket: "Jean-Paul Sartre, tokoh eksistensialisme.",
  },
  {
    petunjuk: "Ia mengembangkan dialektika: tesis bertemu antitesis lalu melahirkan sintesis.",
    opsi: ["Hegel", "Locke", "Socrates"],
    jawab: 0,
    ket: "G.W.F. Hegel, dengan metode dialektis yang memengaruhi banyak pemikir setelahnya.",
  },
  {
    petunjuk: "Ia menekankan keharmonisan sosial, kebajikan, dan tata krama di Tiongkok kuno.",
    opsi: ["Confucius", "Kant", "Descartes"],
    jawab: 0,
    ket: "Konfusius (Confucius), peletak dasar Konfusianisme.",
  },
];

export function TebakFilsuf() {
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
      <div className="mb-1 text-sm font-bold text-brand-700">🤔 Tebak Sang Filsuf</div>
      <p className="mb-4 text-xs text-ink-faint">Baca petunjuk gagasannya, lalu tebak siapa filsufnya.</p>

      <div className="rounded-xl bg-slate-50 p-4 text-sm italic text-ink">{s.petunjuk}</div>

      <div className="mt-3 grid grid-cols-3 gap-2">
        {s.opsi.map((o, i) => (
          <button
            key={i}
            onClick={() => pilih === null && setPilih(i)}
            disabled={pilih !== null}
            className={`rounded-lg py-2 text-sm font-bold transition ${
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
