import { useState } from "react";

// Peta ringkas mazhab pemikiran ekonomi: era, tokoh utama, dan gagasan inti.
const SCHOOLS = [
  {
    id: "merkantilis",
    label: "Merkantilisme",
    era: "Abad 16-18",
    tokoh: "Colbert, Mun",
    inti: "Kekayaan negara diukur dari emas; dorong ekspor, batasi impor.",
    c: "border-amber-400 text-amber-700",
  },
  {
    id: "fisiokrat",
    label: "Fisiokrat",
    era: "Abad 18",
    tokoh: "Quesnay, Turgot",
    inti: "Sumber kekayaan adalah pertanian/alam; biarkan berjalan (laissez-faire).",
    c: "border-lime-400 text-lime-700",
  },
  {
    id: "klasik",
    label: "Klasik",
    era: "1776-1870",
    tokoh: "Smith, Ricardo, Mill",
    inti: "Pasar bebas, tangan tak tampak, pembagian kerja, keunggulan komparatif.",
    c: "border-emerald-400 text-emerald-700",
  },
  {
    id: "marxis",
    label: "Marxis",
    era: "Sejak 1867",
    tokoh: "Marx, Engels",
    inti: "Kritik kapitalisme, nilai lebih, perjuangan kelas.",
    c: "border-rose-400 text-rose-700",
  },
  {
    id: "neoklasik",
    label: "Neoklasik",
    era: "Sejak 1871",
    tokoh: "Jevons, Menger, Walras, Marshall",
    inti: "Nilai dari utilitas marginal; keseimbangan penawaran dan permintaan.",
    c: "border-sky-400 text-sky-700",
  },
  {
    id: "keynesian",
    label: "Keynesian",
    era: "Sejak 1936",
    tokoh: "Keynes",
    inti: "Permintaan agregat; negara perlu campur tangan saat resesi.",
    c: "border-violet-400 text-violet-700",
  },
  {
    id: "monetaris-austria",
    label: "Monetaris & Austria",
    era: "Pertengahan abad 20",
    tokoh: "Friedman, Hayek",
    inti: "Peran uang; pasar bebas; kritik atas perencanaan dan campur tangan berlebih.",
    c: "border-orange-400 text-orange-700",
  },
  {
    id: "perilaku",
    label: "Ekonomi Perilaku",
    era: "Sejak akhir abad 20",
    tokoh: "Kahneman, Thaler",
    inti: "Manusia tidak selalu rasional; bias memengaruhi keputusan ekonomi.",
    c: "border-fuchsia-400 text-fuchsia-700",
  },
];

export function TimelineMazhabEkonomi() {
  const [idx, setIdx] = useState(2);
  const s = SCHOOLS[idx];

  return (
    <div className="my-6 card p-5">
      <div className="mb-1 text-sm font-bold text-brand-700">📚 Peta Mazhab Pemikiran Ekonomi</div>
      <p className="mb-4 text-xs text-ink-faint">
        Pilih sebuah mazhab untuk melihat eranya, tokoh utamanya, dan gagasan intinya. Perhatikan bagaimana tiap
        mazhab menjawab persoalan zamannya.
      </p>

      <div className="mb-4 flex flex-wrap gap-2">
        {SCHOOLS.map((school, i) => (
          <button key={school.id} onClick={() => setIdx(i)} className={`rounded-lg px-3 py-1.5 text-xs font-semibold ${idx === i ? "bg-brand-600 text-white" : "bg-canvas text-ink-soft"}`}>
            {school.label}
          </button>
        ))}
      </div>

      <div className={`rounded-xl border-2 ${s.c.split(" ")[0]} bg-canvas p-4`}>
        <div className="flex items-baseline justify-between">
          <div className={`text-base font-extrabold ${s.c.split(" ")[1]}`}>{s.label}</div>
          <div className="text-xs font-semibold text-ink-faint">{s.era}</div>
        </div>
        <div className="mt-2 text-sm text-ink"><span className="text-ink-faint">Tokoh: </span>{s.tokoh}</div>
        <p className="mt-2 text-sm text-ink-soft">{s.inti}</p>
      </div>
      <p className="mt-3 rounded-lg bg-brand-50 px-3 py-2 text-sm text-brand-800">
        Ide-ide ekonomi berkembang sebagai rangkaian jawaban dan kritik, bukan kebenaran tunggal yang selesai.
      </p>
    </div>
  );
}
