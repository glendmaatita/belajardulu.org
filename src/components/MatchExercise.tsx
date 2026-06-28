import { useMemo, useState } from "react";

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export function MatchExercise({
  prompt,
  pairs,
}: {
  prompt: string;
  pairs: { left: string; right: string }[];
}) {
  // right-side options shuffled & de-duplicated (supports many-to-one matching)
  const rights = useMemo(() => shuffle(Array.from(new Set(pairs.map((p) => p.right)))), [pairs]);
  const [picks, setPicks] = useState<Record<number, string>>({});
  const [checked, setChecked] = useState(false);

  const allAnswered = Object.keys(picks).length === pairs.length;
  const correctCount = pairs.filter((p, i) => picks[i] === p.right).length;

  return (
    <div className="my-6 card p-5">
      <div className="mb-3 text-sm font-bold text-brand-700">🔗 Latihan Menjodohkan</div>
      <p className="mb-4 rounded-xl bg-slate-50 p-3 text-sm text-ink-soft">{prompt}</p>

      <div className="space-y-2.5">
        {pairs.map((p, i) => {
          const picked = picks[i];
          const isCorrect = checked && picked === p.right;
          const isWrong = checked && picked && picked !== p.right;
          return (
            <div
              key={i}
              className={`grid grid-cols-1 items-center gap-2 rounded-xl border p-3 sm:grid-cols-2 ${
                isCorrect ? "border-emerald-300 bg-emerald-50" : isWrong ? "border-rose-300 bg-rose-50" : "border-slate-200"
              }`}
            >
              <div className="text-sm font-medium text-ink">
                {p.left}
                {isCorrect && <span className="ml-2 text-emerald-600">✓</span>}
                {isWrong && <span className="ml-2 text-xs text-rose-600">✗ → {p.right}</span>}
              </div>
              <select
                value={picked || ""}
                onChange={(e) => setPicks((x) => ({ ...x, [i]: e.target.value }))}
                disabled={checked}
                className="rounded-lg border border-slate-300 px-2 py-2 text-sm focus:border-brand-500 focus:outline-none disabled:bg-slate-50"
              >
                <option value="">Pilih pasangan…</option>
                {rights.map((r) => (
                  <option key={r} value={r}>
                    {r}
                  </option>
                ))}
              </select>
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
          <button
            onClick={() => {
              setPicks({});
              setChecked(false);
            }}
            className="btn-ghost"
          >
            Coba lagi 🔁
          </button>
        )}
      </div>

      {checked && (
        <div
          className={`mt-3 animate-fade-up rounded-xl px-4 py-3 text-sm font-semibold ${
            correctCount === pairs.length ? "bg-emerald-50 text-emerald-700" : "bg-amber-50 text-amber-800"
          }`}
        >
          {correctCount === pairs.length ? "🎉 Semua pasangan benar!" : `Benar ${correctCount}/${pairs.length}.`}
        </div>
      )}
    </div>
  );
}
