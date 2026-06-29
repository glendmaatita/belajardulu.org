import { useEffect, useRef, useState } from "react";
import type { QuizQuestion } from "../types";
import { useActivity } from "../lib/activity";
import { Icon } from "./Icon";

export function Quiz({ questions, quizKey }: { questions: QuizQuestion[]; quizKey?: string }) {
  const { getQuiz, saveQuiz } = useActivity();
  const [answers, setAnswers] = useState<(number | null)[]>(() => questions.map(() => null));
  const hydrated = useRef(false);

  // Rehydrate previously saved answers (survives page refresh). Only fills in
  // while the attempt is untouched, so late-arriving server data never
  // overwrites answers in progress.
  const stored = quizKey ? getQuiz(quizKey) : undefined;
  useEffect(() => {
    if (hydrated.current || !stored) return;
    if (stored.answers.length !== questions.length) return;
    const untouched = answers.every((a) => a === null);
    hydrated.current = true;
    if (untouched) setAnswers(stored.answers);
  }, [stored, questions.length, answers]);

  function choose(qi: number, oi: number) {
    if (answers[qi] !== null) return; // lock after answering
    const next = [...answers];
    next[qi] = oi;
    setAnswers(next);
    hydrated.current = true;
    if (quizKey) {
      const score = next.filter((v, i) => v === questions[i].answer).length;
      saveQuiz(quizKey, { score, total: questions.length, answers: next });
    }
  }

  const answered = answers.filter((a) => a !== null).length;
  const correct = answers.filter((a, i) => a === questions[i].answer).length;

  return (
    <div className="my-6 card overflow-hidden">
      <div className="flex items-center justify-between border-b border-line bg-canvas px-5 py-3">
        <span className="flex items-center gap-2 text-sm font-bold text-brand-700">
          <Icon name="list-check" /> Kuis Pemahaman
        </span>
        {answered > 0 && (
          <span className="flex items-center gap-1.5 text-xs font-semibold text-ink-faint">
            <Icon name="check-circle" className="text-emerald-500" /> Benar {correct}/{questions.length}
          </span>
        )}
      </div>

      <div className="divide-y divide-line">
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
                  let cls = "border-line hover:border-brand-300 hover:bg-brand-50/40";
                  if (locked) {
                    if (isCorrect) cls = "border-emerald-400 bg-emerald-50 text-emerald-800";
                    else if (isChosen) cls = "border-rose-300 bg-rose-50 text-rose-700";
                    else cls = "border-line opacity-60";
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
                      {locked && isCorrect && <Icon name="check-circle" className="ml-auto mt-0.5 text-emerald-600" />}
                      {locked && isChosen && !isCorrect && <Icon name="warn" className="ml-auto mt-0.5 text-rose-500" />}
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
