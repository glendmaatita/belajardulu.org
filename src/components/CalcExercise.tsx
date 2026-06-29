import { useEffect, useRef, useState } from "react";
import { useActivity } from "../lib/activity";
import { Icon } from "./Icon";

interface CalcSaved {
  value: string;
  status: "correct" | "wrong";
}

export function CalcExercise({
  prompt,
  answer,
  tolerance = 0,
  prefix,
  suffix,
  solution,
  hint,
  exerciseKey,
}: {
  prompt: string;
  answer: number;
  tolerance?: number;
  prefix?: string;
  suffix?: string;
  solution: string;
  hint?: string;
  exerciseKey?: string;
}) {
  const { getExercise, saveExercise } = useActivity();
  const [value, setValue] = useState("");
  const [status, setStatus] = useState<"idle" | "correct" | "wrong">("idle");
  const [showHint, setShowHint] = useState(false);
  const [showSolution, setShowSolution] = useState(false);
  const hydrated = useRef(false);

  // Rehydrate a previously checked answer (survives page refresh).
  const stored = exerciseKey ? getExercise<CalcSaved>(exerciseKey) : undefined;
  useEffect(() => {
    if (hydrated.current || !stored) return;
    hydrated.current = true;
    if (value.trim() === "" && status === "idle") {
      setValue(stored.value);
      setStatus(stored.status);
      if (stored.status === "correct") setShowSolution(true);
    }
  }, [stored, value, status]);

  function check() {
    const num = Number(value.replace(/[^0-9.-]/g, ""));
    if (Number.isNaN(num) || value.trim() === "") {
      setStatus("wrong");
      return;
    }
    const ok = Math.abs(num - answer) <= tolerance;
    setStatus(ok ? "correct" : "wrong");
    if (ok) setShowSolution(true);
    hydrated.current = true;
    if (exerciseKey) saveExercise(exerciseKey, { value, status: ok ? "correct" : "wrong" } satisfies CalcSaved);
  }

  return (
    <div className="my-6 card p-5">
      <div className="mb-3 flex items-center gap-2 text-sm font-bold text-brand-700">
        <Icon name="flask" /> Latihan Hitung
      </div>
      <p className="mb-4 rounded-xl bg-canvas p-3 text-sm text-ink-soft" dangerouslySetInnerHTML={{ __html: prompt }} />

      <div className="flex flex-wrap items-center gap-2">
        <div className="flex w-full items-center overflow-hidden rounded-xl border border-line-strong focus-within:border-brand-500 focus-within:ring-2 focus-within:ring-brand-100 sm:w-auto">
          {prefix && <span className="bg-canvas px-3 py-2.5 text-sm font-semibold text-ink-faint">{prefix}</span>}
          <input
            type="text"
            inputMode="numeric"
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
              setStatus("idle");
            }}
            onKeyDown={(e) => e.key === "Enter" && check()}
            placeholder="Ketik jawabanmu…"
            className="w-full min-w-0 px-3 py-2.5 text-right text-sm tnum focus:outline-none sm:w-44"
          />
          {suffix && <span className="bg-canvas px-3 py-2.5 text-sm font-semibold text-ink-faint">{suffix}</span>}
        </div>
        <button onClick={check} className="btn-primary">
          <Icon name="check" /> Periksa
        </button>
        {hint && (
          <button onClick={() => setShowHint((s) => !s)} className="btn-ghost">
            <Icon name="lightbulb" className="text-amber-500" /> Petunjuk
          </button>
        )}
        <button onClick={() => setShowSolution((s) => !s)} className="btn-ghost">
          <Icon name="book" /> {showSolution ? "Tutup" : "Lihat"} pembahasan
        </button>
      </div>

      {showHint && hint && (
        <div className="mt-3 animate-fade-up rounded-xl bg-amber-50 px-4 py-3 text-sm text-amber-800">{hint}</div>
      )}
      {status === "correct" && (
        <div className="mt-3 flex animate-fade-up items-center gap-2 rounded-xl bg-emerald-50 px-4 py-3 text-sm font-semibold text-emerald-700">
          <Icon name="check-circle" /> Benar!
        </div>
      )}
      {status === "wrong" && (
        <div className="mt-3 animate-fade-up rounded-xl bg-rose-50 px-4 py-3 text-sm text-rose-700">
          Belum tepat, periksa lagi perhitunganmu. Coba petunjuk atau buka pembahasan.
        </div>
      )}
      {showSolution && (
        <div
          className="mt-3 animate-fade-up rounded-xl border border-line bg-white px-4 py-3 text-sm leading-relaxed text-ink-soft [&_b]:font-semibold [&_b]:text-ink [&_strong]:font-semibold [&_strong]:text-ink"
          dangerouslySetInnerHTML={{ __html: `<strong>Pembahasan:</strong> ${solution}` }}
        />
      )}
    </div>
  );
}
