import { useState } from "react";

export function CalcExercise({
  prompt,
  answer,
  tolerance = 0,
  prefix,
  suffix,
  solution,
  hint,
}: {
  prompt: string;
  answer: number;
  tolerance?: number;
  prefix?: string;
  suffix?: string;
  solution: string;
  hint?: string;
}) {
  const [value, setValue] = useState("");
  const [status, setStatus] = useState<"idle" | "correct" | "wrong">("idle");
  const [showHint, setShowHint] = useState(false);
  const [showSolution, setShowSolution] = useState(false);

  function check() {
    const num = Number(value.replace(/[^0-9.-]/g, ""));
    if (Number.isNaN(num) || value.trim() === "") {
      setStatus("wrong");
      return;
    }
    const ok = Math.abs(num - answer) <= tolerance;
    setStatus(ok ? "correct" : "wrong");
    if (ok) setShowSolution(true);
  }

  return (
    <div className="my-6 card p-5">
      <div className="mb-3 text-sm font-bold text-brand-700">🧮 Latihan Hitung</div>
      <p className="mb-4 rounded-xl bg-slate-50 p-3 text-sm text-ink-soft" dangerouslySetInnerHTML={{ __html: prompt }} />

      <div className="flex flex-wrap items-center gap-2">
        <div className="flex items-center overflow-hidden rounded-xl border border-slate-300 focus-within:border-brand-500 focus-within:ring-2 focus-within:ring-brand-100">
          {prefix && <span className="bg-slate-50 px-3 py-2.5 text-sm font-semibold text-ink-faint">{prefix}</span>}
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
            className="w-44 px-3 py-2.5 text-right text-sm tnum focus:outline-none"
          />
          {suffix && <span className="bg-slate-50 px-3 py-2.5 text-sm font-semibold text-ink-faint">{suffix}</span>}
        </div>
        <button onClick={check} className="btn-primary">
          Periksa
        </button>
        {hint && (
          <button onClick={() => setShowHint((s) => !s)} className="btn-ghost">
            💡 Petunjuk
          </button>
        )}
        <button onClick={() => setShowSolution((s) => !s)} className="btn-ghost">
          {showSolution ? "Tutup" : "Lihat"} pembahasan
        </button>
      </div>

      {showHint && hint && (
        <div className="mt-3 animate-fade-up rounded-xl bg-amber-50 px-4 py-3 text-sm text-amber-800">{hint}</div>
      )}
      {status === "correct" && (
        <div className="mt-3 animate-fade-up rounded-xl bg-emerald-50 px-4 py-3 text-sm font-semibold text-emerald-700">
          🎉 Benar!
        </div>
      )}
      {status === "wrong" && (
        <div className="mt-3 animate-fade-up rounded-xl bg-rose-50 px-4 py-3 text-sm text-rose-700">
          Belum tepat, periksa lagi perhitunganmu. Coba petunjuk atau buka pembahasan.
        </div>
      )}
      {showSolution && (
        <div
          className="mt-3 animate-fade-up rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm leading-relaxed text-ink-soft [&_b]:font-semibold [&_b]:text-ink [&_strong]:font-semibold [&_strong]:text-ink"
          dangerouslySetInnerHTML={{ __html: `<strong>Pembahasan:</strong> ${solution}` }}
        />
      )}
    </div>
  );
}
