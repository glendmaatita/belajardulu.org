import { useMemo, useState } from "react";

// Kuis singkat: jawab beberapa pertanyaan, cocokkan dengan aliran filsafat yang dominan.
const PERTANYAAN = [
  { q: "Sumber pengetahuan paling andal?", a: ["Akal & penalaran", "Pengalaman indra"], skor: ["rasionalisme", "empirisme"] },
  { q: "Apa yang menentukan tindakan benar?", a: ["Hasil/akibatnya", "Kewajiban & prinsip"], skor: ["utilitarian", "deontologi"] },
  { q: "Makna hidup itu...", a: ["Kita ciptakan sendiri", "Sudah ada/diberikan"], skor: ["eksistensialisme", "esensialisme"] },
];

const DESKRIPSI: Record<string, string> = {
  rasionalisme: "Kamu condong rasionalis: percaya akal sebagai sumber utama kebenaran (ala Descartes).",
  empirisme: "Kamu condong empiris: percaya pengalaman dan bukti indrawi (ala Locke, Hume).",
  utilitarian: "Dalam etika kamu condong utilitarian: menilai dari hasil dan kebahagiaan terbesar.",
  deontologi: "Dalam etika kamu condong deontologis: prinsip dan kewajiban di atas hasil (ala Kant).",
  eksistensialisme: "Kamu condong eksistensialis: makna diciptakan lewat pilihan bebas (ala Sartre).",
  esensialisme: "Kamu condong esensialis: ada tujuan/esensi yang mendahului keberadaan.",
};

export function PencocokAliranFilsafat() {
  const [jawaban, setJawaban] = useState<(number | null)[]>([null, null, null]);

  const hasil = useMemo(() => {
    return PERTANYAAN.map((p, i) => (jawaban[i] === null ? null : p.skor[jawaban[i] as number]));
  }, [jawaban]);

  const selesai = jawaban.every((j) => j !== null);

  return (
    <div className="my-6 card p-5">
      <div className="mb-1 text-sm font-bold text-brand-700">🦉 Pencocok Aliran Filsafat</div>
      <p className="mb-4 text-xs text-ink-faint">
        Jawab tiga pertanyaan berikut untuk melihat aliran filsafat mana yang paling dekat dengan caramu berpikir. Ini perkenalan, bukan label mutlak.
      </p>

      <div className="space-y-4">
        {PERTANYAAN.map((p, i) => (
          <div key={i}>
            <div className="mb-2 text-sm font-semibold text-ink">{i + 1}. {p.q}</div>
            <div className="flex gap-2">
              {p.a.map((opt, j) => (
                <button key={j} onClick={() => setJawaban((prev) => prev.map((x, k) => (k === i ? j : x)))} className={`flex-1 rounded-lg px-3 py-2 text-sm font-semibold transition ${jawaban[i] === j ? "bg-brand-600 text-white" : "bg-slate-100 text-ink-soft hover:bg-slate-200"}`}>
                  {opt}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      {selesai && (
        <div className="mt-4 space-y-2 rounded-xl bg-amber-50 p-4">
          <div className="text-sm font-bold text-amber-800">Kecenderunganmu:</div>
          {hasil.map((h, i) => h && <div key={i} className="text-sm text-ink-soft">{DESKRIPSI[h]}</div>)}
        </div>
      )}

      <p className="mt-3 text-xs text-ink-faint">
        Banyak filsuf besar memadukan beberapa aliran. Tujuan latihan ini adalah mengenali pijakan berpikirmu, lalu mengujinya lebih dalam.
      </p>
    </div>
  );
}
