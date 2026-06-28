import { useState } from "react";
import type { QuizQuestion } from "../types";

export function Quiz({ questions }: { questions: QuizQuestion[] }) {
  const [answers, setAnswers] = useState<(number | null)[]>(() => questions.map(() => null));

  function choose(qi: number, oi: number) {
    setAnswers((a) => {
      if (a[qi] !== null) return a; // lock after answering
      const next = [...a];
      next[qi] = oi;
      return next;
    });
  }

  const answered = answers.filter((a) => a !== null).length;
  const correct = answers.filter((a, i) => a === questions[i].answer).length;

  return (
    <div className="my-6 card overflow-hidden">
      <div className="flex items-center justify-between border-b border-slate-100 bg-slate-50 px-5 py-3">
        <span className="text-sm font-bold text-brand-700">📝 Kuis Pemahaman</span>
        {answered > 0 && (
          <span className="text-xs font-semibold text-ink-faint">
            Benar {correct}/{questions.length}
          </span>
        )}
      </div>

      <div className="divide-y divide-slate-100">
        {questions.map((q, qi) => {
          const chosen = answers[qi];
          const locked = chosen !== null;
          return (
            <div key={qi} className="p-5">
              <p className="mb-3 font-semibold text-ink">
                {qi + 1}. {q.q}
              </p>
              <div className="space-y-2">
                {q.options.map((opt, oi) => {
                  const isCorrect = oi === q.answer;
                  const isChosen = oi === chosen;
                  let cls = "border-slate-200 hover:border-brand-300 hover:bg-brand-50/40";
                  if (locked) {
                    if (isCorrect) cls = "border-emerald-400 bg-emerald-50 text-emerald-800";
                    else if (isChosen) cls = "border-rose-300 bg-rose-50 text-rose-700";
                    else cls = "border-slate-200 opacity-60";
                  }
                  return (
                    <button
                      key={oi}
                      onClick={() => choose(qi, oi)}
                      disabled={locked}
                      className={`flex w-full items-start gap-3 rounded-xl border px-4 py-2.5 text-left text-sm transition-colors ${cls}`}
                    >
                      <span className="mt-0.5 font-bold text-ink-faint">
                        {String.fromCharCode(65 + oi)}.
                      </span>
                      <span>{opt}</span>
                      {locked && isCorrect && <span className="ml-auto">✓</span>}
                      {locked && isChosen && !isCorrect && <span className="ml-auto">✗</span>}
                    </button>
                  );
                })}
              </div>
              {locked && (
                <div className="mt-3 animate-fade-up rounded-xl bg-brand-50 px-4 py-3 text-sm text-brand-900">
                  <strong>{chosen === q.answer ? "Tepat! " : "Pembahasan: "}</strong>
                  {q.explain}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
