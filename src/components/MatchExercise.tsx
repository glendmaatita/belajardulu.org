import { useEffect, useMemo, useRef, useState } from "react";
import { useActivity } from "../lib/activity";
import { Icon } from "./Icon";

// Saved state keyed by stable left label (pairs render in a fixed order, but
// keying by label keeps it robust if the content shifts).
interface MatchSaved {
  picks: Record<string, string>;
  checked: boolean;
}

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
  exerciseKey,
}: {
  prompt: string;
  pairs: { left: string; right: string }[];
  exerciseKey?: string;
}) {
  const { getExercise, saveExercise } = useActivity();
  // right-side options shuffled & de-duplicated (supports many-to-one matching)
  const rights = useMemo(() => shuffle(Array.from(new Set(pairs.map((p) => p.right)))), [pairs]);
  const [picks, setPicks] = useState<Record<number, string>>({});
  const [checked, setChecked] = useState(false);
  const hydrated = useRef(false);

  const allAnswered = Object.keys(picks).length === pairs.length;
  const correctCount = pairs.filter((p, i) => picks[i] === p.right).length;

  // Rehydrate previous picks (survives page refresh), mapping stable left label
  // back onto the current pair order.
  const stored = exerciseKey ? getExercise<MatchSaved>(exerciseKey) : undefined;
  useEffect(() => {
    if (hydrated.current || !stored) return;
    hydrated.current = true;
    if (Object.keys(picks).length === 0 && !checked) {
      const restored: Record<number, string> = {};
      pairs.forEach((p, i) => {
        const r = stored.picks[p.left];
        if (r) restored[i] = r;
      });
      setPicks(restored);
      setChecked(stored.checked);
    }
  }, [stored, pairs, picks, checked]);

  function persist(nextPicks: Record<number, string>, nextChecked: boolean) {
    if (!exerciseKey) return;
    const byLabel: Record<string, string> = {};
    pairs.forEach((p, i) => {
      if (nextPicks[i]) byLabel[p.left] = nextPicks[i];
    });
    saveExercise(exerciseKey, { picks: byLabel, checked: nextChecked } satisfies MatchSaved);
  }

  function setPick(i: number, right: string) {
    hydrated.current = true;
    setPicks((x) => {
      const next = { ...x, [i]: right };
      persist(next, false);
      return next;
    });
  }

  function check() {
    hydrated.current = true;
    setChecked(true);
    persist(picks, true);
  }

  function reset() {
    hydrated.current = true;
    setPicks({});
    setChecked(false);
    if (exerciseKey) saveExercise(exerciseKey, { picks: {}, checked: false } satisfies MatchSaved);
  }

  return (
    <div className="my-6 card p-5">
      <div className="mb-3 flex items-center gap-2 text-sm font-bold text-brand-700">
        <Icon name="puzzle" /> Latihan Menjodohkan
      </div>
      <p className="mb-4 rounded-xl bg-canvas p-3 text-sm text-ink-soft">{prompt}</p>

      <div className="space-y-2.5">
        {pairs.map((p, i) => {
          const picked = picks[i];
          const isCorrect = checked && picked === p.right;
          const isWrong = checked && picked && picked !== p.right;
          return (
            <div
              key={i}
              className={`grid grid-cols-1 items-center gap-2 rounded-xl border p-3 sm:grid-cols-2 ${
                isCorrect ? "border-emerald-300 bg-emerald-50" : isWrong ? "border-rose-300 bg-rose-50" : "border-line"
              }`}
            >
              <div className="text-sm font-medium text-ink">
                {p.left}
                {isCorrect && <Icon name="check-circle" className="ml-2 text-emerald-600" />}
                {isWrong && (
                  <span className="ml-2 inline-flex items-center gap-1 text-xs text-rose-600">
                    <Icon name="arrow-right" /> {p.right}
                  </span>
                )}
              </div>
              <select
                value={picked || ""}
                onChange={(e) => setPick(i, e.target.value)}
                disabled={checked}
                className="rounded-lg border border-line-strong px-2 py-2 text-sm focus:border-brand-500 focus:outline-none disabled:bg-canvas"
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
          <button onClick={check} disabled={!allAnswered} className="btn-primary">
            Periksa Jawaban
          </button>
        ) : (
          <button onClick={reset} className="btn-ghost">
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
