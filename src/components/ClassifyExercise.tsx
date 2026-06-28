import { useMemo, useState } from "react";
import { Icon } from "./Icon";

interface Item {
  text: string;
  bucket: string;
}

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export function ClassifyExercise({
  prompt,
  buckets,
  items,
}: {
  prompt: string;
  buckets: string[];
  items: Item[];
}) {
  const ordered = useMemo(() => shuffle(items), [items]);
  const [picks, setPicks] = useState<Record<number, string>>({});
  const [checked, setChecked] = useState(false);

  const allAnswered = Object.keys(picks).length === ordered.length;
  const correctCount = ordered.filter((it, i) => picks[i] === it.bucket).length;

  function setPick(i: number, bucket: string) {
    if (checked) return;
    setPicks((p) => ({ ...p, [i]: bucket }));
  }

  function reset() {
    setPicks({});
    setChecked(false);
  }

  return (
    <div className="my-6 card p-5">
      <div className="mb-3 flex items-center gap-2 text-sm font-bold text-brand-700">
        <Icon name="layers" /> Latihan Klasifikasi
      </div>
      <p className="mb-4 rounded-xl bg-canvas p-3 text-sm text-ink-soft">{prompt}</p>

      <div className="space-y-2.5">
        {ordered.map((it, i) => {
          const picked = picks[i];
          const isCorrect = checked && picked === it.bucket;
          const isWrong = checked && picked && picked !== it.bucket;
          return (
            <div
              key={i}
              className={`rounded-xl border p-3 ${
                isCorrect ? "border-emerald-300 bg-emerald-50" : isWrong ? "border-rose-300 bg-rose-50" : "border-line"
              }`}
            >
              <div className="mb-2 flex items-center gap-2 text-sm font-medium text-ink">
                <span>{it.text}</span>
                {isCorrect && <Icon name="check-circle" className="text-emerald-600" />}
                {isWrong && (
                  <span className="flex items-center gap-1 text-xs text-rose-600">
                    <Icon name="warn" /> seharusnya: {it.bucket}
                  </span>
                )}
              </div>
              <div className="flex flex-wrap gap-1.5">
                {buckets.map((b) => (
                  <button
                    key={b}
                    onClick={() => setPick(i, b)}
                    disabled={checked}
                    className={`rounded-lg border px-2.5 py-1 text-xs font-semibold transition-colors ${
                      picked === b
                        ? "border-brand-500 bg-brand-600 text-white"
                        : "border-line bg-white text-ink-soft hover:bg-canvas"
                    }`}
                  >
                    {b}
                  </button>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-2">
        {!checked ? (
          <button onClick={() => setChecked(true)} disabled={!allAnswered} className="btn-primary">
            Periksa Jawaban
          </button>
        ) : (
          <button onClick={reset} className="btn-ghost">
            Coba lagi 🔁
          </button>
        )}
        {!allAnswered && !checked && (
          <span className="text-xs text-ink-faint">Klasifikasikan semua item dulu.</span>
        )}
      </div>

      {checked && (
        <div
          className={`mt-3 animate-fade-up rounded-xl px-4 py-3 text-sm font-semibold ${
            correctCount === ordered.length ? "bg-emerald-50 text-emerald-700" : "bg-amber-50 text-amber-800"
          }`}
        >
          {correctCount === ordered.length ? "🎉 Sempurna! Semua benar." : `Benar ${correctCount}/${ordered.length}. Perhatikan yang ditandai merah.`}
        </div>
      )}
    </div>
  );
}
