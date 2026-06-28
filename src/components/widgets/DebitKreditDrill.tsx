import { useMemo, useState } from "react";

interface Q {
  text: string;
  answer: "debit" | "kredit";
  why: string;
}

const BANK: Q[] = [
  { text: "Kas BERTAMBAH", answer: "debit", why: "Aset bertambah → debit." },
  { text: "Utang Usaha BERTAMBAH", answer: "kredit", why: "Kewajiban bertambah → kredit." },
  { text: "Beban Gaji BERTAMBAH", answer: "debit", why: "Beban bertambah → debit." },
  { text: "Pendapatan Jasa BERTAMBAH", answer: "kredit", why: "Pendapatan bertambah → kredit." },
  { text: "Modal Pemilik BERTAMBAH", answer: "kredit", why: "Ekuitas bertambah → kredit." },
  { text: "Peralatan BERTAMBAH", answer: "debit", why: "Aset bertambah → debit." },
  { text: "Kas BERKURANG", answer: "kredit", why: "Aset berkurang → kredit." },
  { text: "Utang Bank BERKURANG", answer: "debit", why: "Kewajiban berkurang → debit." },
  { text: "Prive (pengambilan pemilik) BERTAMBAH", answer: "debit", why: "Prive mengurangi ekuitas, bertambah di debit." },
  { text: "Piutang Usaha BERTAMBAH", answer: "debit", why: "Aset bertambah → debit." },
  { text: "Pendapatan Diterima Dimuka BERTAMBAH", answer: "kredit", why: "Ini kewajiban → bertambah di kredit." },
  { text: "Perlengkapan BERKURANG (terpakai)", answer: "kredit", why: "Aset berkurang → kredit." },
];

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export function DebitKreditDrill() {
  const [deck, setDeck] = useState(() => shuffle(BANK).slice(0, 8));
  const [i, setI] = useState(0);
  const [picked, setPicked] = useState<"debit" | "kredit" | null>(null);
  const [score, setScore] = useState(0);
  const q = deck[i];
  const done = i >= deck.length;

  const accuracy = useMemo(() => (deck.length ? Math.round((score / deck.length) * 100) : 0), [score, deck.length]);

  function pick(choice: "debit" | "kredit") {
    if (picked) return;
    setPicked(choice);
    if (choice === q.answer) setScore((s) => s + 1);
  }
  function next() {
    setPicked(null);
    setI((x) => x + 1);
  }
  function restart() {
    setDeck(shuffle(BANK).slice(0, 8));
    setI(0);
    setScore(0);
    setPicked(null);
  }

  if (done) {
    return (
      <div className="my-6 card p-6 text-center">
        <div className="text-3xl">{accuracy >= 75 ? "🎉" : "💪"}</div>
        <h3 className="mt-2 text-lg font-bold">Selesai! Skor {score}/{deck.length} ({accuracy}%)</h3>
        <p className="mt-1 text-sm text-ink-faint">
          {accuracy >= 75 ? "Mantap, refleks debit-kreditmu sudah bagus!" : "Ulangi lagi untuk memperkuat ingatan."}
        </p>
        <button onClick={restart} className="btn-primary mt-4">
          Ulangi Drill 🔁
        </button>
      </div>
    );
  }

  return (
    <div className="my-6 card p-6">
      <div className="mb-3 flex items-center justify-between text-xs font-semibold text-ink-faint">
        <span>⚡ Drill Debit-Kredit</span>
        <span>
          Soal {i + 1}/{deck.length} · Skor {score}
        </span>
      </div>
      <div className="h-1.5 w-full overflow-hidden rounded-full bg-canvas">
        <div className="h-full bg-brand-500 transition-all" style={{ width: `${(i / deck.length) * 100}%` }} />
      </div>

      <div className="my-6 rounded-xl bg-canvas py-8 text-center text-xl font-bold text-ink">
        {q.text}
      </div>

      <div className="grid grid-cols-2 gap-3">
        {(["debit", "kredit"] as const).map((choice) => {
          const isAns = choice === q.answer;
          const isPicked = picked === choice;
          let cls = "border-line bg-white hover:bg-canvas";
          if (picked) {
            if (isAns) cls = "border-emerald-500 bg-emerald-50 text-emerald-700";
            else if (isPicked) cls = "border-rose-400 bg-rose-50 text-rose-600";
            else cls = "border-line bg-white opacity-60";
          }
          return (
            <button
              key={choice}
              onClick={() => pick(choice)}
              disabled={!!picked}
              className={`rounded-xl border-2 py-4 text-lg font-bold uppercase transition-colors ${cls}`}
            >
              {choice}
            </button>
          );
        })}
      </div>

      {picked && (
        <div className="mt-4 animate-fade-up rounded-xl bg-brand-50 p-3 text-sm text-brand-800">
          {picked === q.answer ? "✅ Benar! " : "❌ Belum tepat. "}
          {q.why}
        </div>
      )}
      {picked && (
        <button onClick={next} className="btn-primary mt-4 w-full">
          {i + 1 === deck.length ? "Lihat Hasil" : "Soal Berikutnya →"}
        </button>
      )}
    </div>
  );
}
