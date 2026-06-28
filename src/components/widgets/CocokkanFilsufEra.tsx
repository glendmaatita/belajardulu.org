import { useMemo, useState } from "react";

// Cocokkan filsuf dengan era tempat ia hidup.
const ERA = ["Kuno", "Abad Pertengahan", "Modern", "Kontemporer"] as const;
type Era = (typeof ERA)[number];

const SOAL: { tokoh: string; era: Era; ket: string }[] = [
  { tokoh: "Aristoteles", era: "Kuno", ket: "Hidup di Yunani sekitar abad ke-4 SM, murid Plato." },
  { tokoh: "Thomas Aquinas", era: "Abad Pertengahan", ket: "Hidup pada abad ke-13, memadukan iman dan akal." },
  { tokoh: "Descartes", era: "Modern", ket: "Abad ke-17, bapak filsafat modern dan rasionalisme." },
  { tokoh: "Nietzsche", era: "Kontemporer", ket: "Akhir abad ke-19, mengkritik nilai-nilai mapan." },
  { tokoh: "Socrates", era: "Kuno", ket: "Yunani abad ke-5 SM, guru Plato." },
  { tokoh: "Kant", era: "Modern", ket: "Abad ke-18, menyatukan rasionalisme dan empirisme." },
  { tokoh: "Agustinus", era: "Abad Pertengahan", ket: "Hidup sekitar abad ke-4 sampai ke-5 M." },
  { tokoh: "Sartre", era: "Kontemporer", ket: "Abad ke-20, tokoh eksistensialisme." },
];

export function CocokkanFilsufEra() {
  const [idx, setIdx] = useState(0);
  const [pilih, setPilih] = useState<Era | null>(null);
  const s = SOAL[idx];
  const benar = useMemo(() => pilih !== null && pilih === s.era, [pilih, s]);

  function lanjut() {
    setPilih(null);
    setIdx((i) => (i + 1) % SOAL.length);
  }

  return (
    <div className="my-6 card p-5">
      <div className="mb-1 text-sm font-bold text-brand-700">🗂️ Cocokkan Filsuf & Era</div>
      <p className="mb-4 text-xs text-ink-faint">Tentukan di era mana filsuf berikut hidup dan berkarya.</p>

      <div className="rounded-xl bg-canvas p-4 text-center text-lg font-bold text-ink">{s.tokoh}</div>

      <div className="mt-3 grid grid-cols-2 gap-2">
        {ERA.map((e) => (
          <button
            key={e}
            onClick={() => pilih === null && setPilih(e)}
            disabled={pilih !== null}
            className={`rounded-lg py-2 text-sm font-bold transition ${
              pilih !== null && e === s.era
                ? "bg-emerald-500 text-white"
                : pilih === e
                ? "bg-rose-400 text-white"
                : "bg-canvas text-ink-soft hover:bg-line"
            }`}
          >
            {e}
          </button>
        ))}
      </div>

      {pilih !== null && (
        <div className={`mt-3 rounded-lg p-3 text-sm ${benar ? "bg-emerald-50 text-emerald-800" : "bg-amber-50 text-amber-800"}`}>
          {benar ? "Tepat! " : `Belum tepat. Era ${s.era}. `}
          {s.ket}
          <button onClick={lanjut} className="ml-2 rounded-md bg-brand-600 px-3 py-1 text-xs font-bold text-white">Soal berikutnya</button>
        </div>
      )}
    </div>
  );
}
