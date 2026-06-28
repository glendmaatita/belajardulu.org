import { useMemo, useState } from "react";

// Cocokkan penalaran moral dengan aliran etika yang mendasarinya.
const ALIRAN = ["Utilitarianisme", "Deontologi", "Etika Keutamaan"] as const;
type Aliran = (typeof ALIRAN)[number];

const SOAL: { kasus: string; aliran: Aliran; ket: string }[] = [
  {
    kasus: "\"Pilih tindakan yang menghasilkan kebahagiaan terbesar bagi paling banyak orang.\"",
    aliran: "Utilitarianisme",
    ket: "Menilai benar-salah dari hasil atau konsekuensinya (Bentham, Mill).",
  },
  {
    kasus: "\"Berbohong itu salah, apa pun akibatnya, karena melanggar kewajiban moral.\"",
    aliran: "Deontologi",
    ket: "Menilai dari kewajiban dan aturan, bukan akibat (Kant).",
  },
  {
    kasus: "\"Jadilah orang yang jujur dan berani, sebab karakter baik itulah inti hidup bermoral.\"",
    aliran: "Etika Keutamaan",
    ket: "Fokus pada pembentukan karakter dan keutamaan (Aristoteles).",
  },
  {
    kasus: "\"Korbankan satu demi menyelamatkan lima karena total nyawa terselamatkan lebih besar.\"",
    aliran: "Utilitarianisme",
    ket: "Keputusan didasarkan pada hasil bersih terbaik.",
  },
  {
    kasus: "\"Tepati janji karena menepati janji adalah kewajiban, bukan karena untung-rugi.\"",
    aliran: "Deontologi",
    ket: "Mengikuti prinsip kewajiban tanpa memandang konsekuensi.",
  },
  {
    kasus: "\"Latih kebiasaan murah hati agar menjadi pribadi yang utuh dan bijak.\"",
    aliran: "Etika Keutamaan",
    ket: "Menekankan pembiasaan keutamaan demi karakter yang baik.",
  },
];

export function KuisAliranEtika() {
  const [idx, setIdx] = useState(0);
  const [pilih, setPilih] = useState<Aliran | null>(null);
  const s = SOAL[idx];
  const benar = useMemo(() => pilih !== null && pilih === s.aliran, [pilih, s]);

  function lanjut() {
    setPilih(null);
    setIdx((i) => (i + 1) % SOAL.length);
  }

  return (
    <div className="my-6 card p-5">
      <div className="mb-1 text-sm font-bold text-brand-700">⚖️ Kuis Aliran Etika</div>
      <p className="mb-4 text-xs text-ink-faint">Tentukan aliran etika yang mendasari setiap penalaran moral berikut.</p>

      <div className="rounded-xl bg-canvas p-4 text-sm text-ink">{s.kasus}</div>

      <div className="mt-3 grid grid-cols-3 gap-2">
        {ALIRAN.map((a) => (
          <button
            key={a}
            onClick={() => pilih === null && setPilih(a)}
            disabled={pilih !== null}
            className={`rounded-lg py-2 text-xs font-bold transition ${
              pilih !== null && a === s.aliran
                ? "bg-emerald-500 text-white"
                : pilih === a
                ? "bg-rose-400 text-white"
                : "bg-canvas text-ink-soft hover:bg-line"
            }`}
          >
            {a}
          </button>
        ))}
      </div>

      {pilih !== null && (
        <div className={`mt-3 rounded-lg p-3 text-sm ${benar ? "bg-emerald-50 text-emerald-800" : "bg-amber-50 text-amber-800"}`}>
          {benar ? "Tepat! " : `Belum tepat. Jawabannya ${s.aliran}. `}
          {s.ket}
          <button onClick={lanjut} className="ml-2 rounded-md bg-brand-600 px-3 py-1 text-xs font-bold text-white">Kasus berikutnya</button>
        </div>
      )}
    </div>
  );
}
