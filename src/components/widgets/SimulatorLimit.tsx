import { useState } from "react";

// Dekati x = 2 dari kiri dan kanan untuk f(x) = x + 2; nilai menuju 4.
export function SimulatorLimit() {
  const [step, setStep] = useState(0);
  const kiri = [1.9, 1.99, 1.999];
  const kanan = [2.1, 2.01, 2.001];
  const f = (x: number) => x + 2;
  const shown = step + 1;

  return (
    <div className="my-6 card p-5">
      <div className="mb-1 text-sm font-bold text-brand-700">🎯 Simulator Limit</div>
      <p className="mb-4 text-xs text-ink-faint">Untuk f(x) = x + 2, dekati x = 2. Tekan "Lebih dekat" dan amati ke mana nilai f(x) menuju.</p>

      <div className="grid grid-cols-2 gap-3">
        <div>
          <div className="mb-1 text-center text-xs font-bold text-ink-faint">dari kiri</div>
          {kiri.slice(0, shown).map((x, i) => (
            <div key={i} className="mb-1 flex justify-between rounded-lg bg-sky-50 px-3 py-1.5 font-mono text-sm">
              <span className="text-sky-700">x={x}</span><span className="text-emerald-700">{f(x).toFixed(3)}</span>
            </div>
          ))}
        </div>
        <div>
          <div className="mb-1 text-center text-xs font-bold text-ink-faint">dari kanan</div>
          {kanan.slice(0, shown).map((x, i) => (
            <div key={i} className="mb-1 flex justify-between rounded-lg bg-amber-50 px-3 py-1.5 font-mono text-sm">
              <span className="text-amber-700">x={x}</span><span className="text-emerald-700">{f(x).toFixed(3)}</span>
            </div>
          ))}
        </div>
      </div>

      {step < 2 ? (
        <button onClick={() => setStep((s) => s + 1)} className="btn-primary mt-3 w-full">Lebih dekat ke x = 2</button>
      ) : (
        <div className="mt-3 rounded-lg bg-emerald-50 p-3 text-center text-sm text-emerald-800">
          Dari dua arah, f(x) menuju <b className="tnum">4</b>. Maka limit f(x) saat x mendekati 2 adalah 4. Limit adalah nilai yang DIDEKATI, bukan harus dicapai.
        </div>
      )}
    </div>
  );
}
