import { useMemo, useState } from "react";

// Evaluator proposisi majemuk: set nilai p, q, r lalu lihat hasil beberapa ekspresi logika.
export function EvaluatorProposisi() {
  const [p, setP] = useState(true);
  const [q, setQ] = useState(false);
  const [rr, setRr] = useState(true);

  const ekspresi = useMemo(
    () => [
      { teks: "p DAN q", nilai: p && q },
      { teks: "p ATAU q", nilai: p || q },
      { teks: "BUKAN p", nilai: !p },
      { teks: "jika p maka q", nilai: !p || q },
      { teks: "(p DAN q) ATAU r", nilai: (p && q) || rr },
      { teks: "p DAN (q ATAU r)", nilai: p && (q || rr) },
    ],
    [p, q, rr]
  );

  return (
    <div className="my-6 card p-5">
      <div className="mb-1 text-sm font-bold text-brand-700">🧮 Evaluator Proposisi Majemuk</div>
      <p className="mb-4 text-xs text-ink-faint">
        Atur nilai kebenaran p, q, dan r, lalu lihat hasil berbagai ekspresi logika. Perhatikan bagaimana tanda kurung mengubah hasil.
      </p>

      <div className="flex flex-wrap gap-3">
        <Toggle label="p" value={p} set={setP} />
        <Toggle label="q" value={q} set={setQ} />
        <Toggle label="r" value={rr} set={setRr} />
      </div>

      <div className="mt-4 grid gap-2 sm:grid-cols-2">
        {ekspresi.map((e, i) => (
          <div key={i} className="flex items-center justify-between rounded-lg bg-slate-50 px-3 py-2">
            <span className="text-sm text-ink-soft">{e.teks}</span>
            <span className={`rounded-md px-2 py-0.5 text-xs font-bold ${e.nilai ? "bg-emerald-100 text-emerald-700" : "bg-rose-100 text-rose-600"}`}>
              {e.nilai ? "BENAR" : "SALAH"}
            </span>
          </div>
        ))}
      </div>

      <p className="mt-3 text-xs text-ink-faint">
        Bandingkan "(p DAN q) ATAU r" dengan "p DAN (q ATAU r)". Dengan nilai p, q, r yang sama, keduanya bisa berbeda hasil. Urutan operasi dan kurung sangat menentukan.
      </p>
    </div>
  );
}

function Toggle({ label, value, set }: { label: string; value: boolean; set: (b: boolean) => void }) {
  return (
    <button onClick={() => set(!value)} className={`flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-bold transition ${value ? "bg-emerald-500 text-white" : "bg-rose-400 text-white"}`}>
      {label} = {value ? "BENAR" : "SALAH"}
    </button>
  );
}
