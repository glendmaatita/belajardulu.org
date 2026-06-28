import { useState } from "react";
import type { JournalLine } from "../types";
import { rupiah } from "../lib/format";
import { Icon } from "./Icon";

interface Row {
  account: string;
  debit: string;
  credit: string;
}

export function JournalExercise({
  prompt,
  accounts,
  answer,
  hint,
}: {
  prompt: string;
  accounts: string[];
  answer: JournalLine[];
  hint?: string;
}) {
  const [rows, setRows] = useState<Row[]>(() =>
    Array.from({ length: answer.length }, () => ({ account: "", debit: "", credit: "" }))
  );
  const [status, setStatus] = useState<"idle" | "correct" | "wrong">("idle");
  const [showHint, setShowHint] = useState(false);
  const [revealed, setRevealed] = useState(false);

  function update(i: number, patch: Partial<Row>) {
    setRows((r) => r.map((x, idx) => (idx === i ? { ...x, ...patch } : x)));
    setStatus("idle");
  }

  const totalDebit = rows.reduce((s, r) => s + (Number(r.debit) || 0), 0);
  const totalCredit = rows.reduce((s, r) => s + (Number(r.credit) || 0), 0);
  const balanced = totalDebit === totalCredit && totalDebit > 0;

  function check() {
    const norm = (line: { account: string; debit?: number; credit?: number }) =>
      `${line.account}|${line.debit || 0}|${line.credit || 0}`;
    const want = new Set(answer.map(norm));
    const got = rows
      .filter((r) => r.account)
      .map((r) => norm({ account: r.account, debit: Number(r.debit) || 0, credit: Number(r.credit) || 0 }));
    const ok =
      got.length === answer.length && got.every((g) => want.has(g)) && new Set(got).size === got.length;
    setStatus(ok ? "correct" : "wrong");
  }

  return (
    <div className="my-6 card p-5">
      <div className="mb-3 flex items-center gap-2 text-sm font-bold text-brand-700">
        <Icon name="edit" /> Latihan Membuat Jurnal
      </div>
      <p className="mb-4 rounded-xl bg-canvas p-3 text-sm text-ink-soft">{prompt}</p>

      <div className="space-y-2">
        <div className="grid grid-cols-12 gap-2 px-1 text-xs font-semibold text-ink-faint">
          <div className="col-span-6">Akun</div>
          <div className="col-span-3 text-right">Debit</div>
          <div className="col-span-3 text-right">Kredit</div>
        </div>
        {rows.map((r, i) => (
          <div key={i} className="grid grid-cols-12 items-center gap-2">
            <select
              value={r.account}
              onChange={(e) => update(i, { account: e.target.value })}
              className="col-span-6 rounded-lg border border-line-strong px-2 py-2 text-sm focus:border-brand-500 focus:outline-none"
            >
              <option value="">Pilih akun dulu…</option>
              {accounts.map((a) => (
                <option key={a} value={a}>
                  {a}
                </option>
              ))}
            </select>
            <input
              type="number"
              placeholder="0"
              value={r.debit}
              onChange={(e) => update(i, { debit: e.target.value, credit: "" })}
              className="col-span-3 rounded-lg border border-line-strong px-2 py-2 text-right text-sm tnum focus:border-brand-500 focus:outline-none"
            />
            <input
              type="number"
              placeholder="0"
              value={r.credit}
              onChange={(e) => update(i, { credit: e.target.value, debit: "" })}
              className="col-span-3 rounded-lg border border-line-strong px-2 py-2 text-right text-sm tnum focus:border-brand-500 focus:outline-none"
            />
          </div>
        ))}
      </div>

      <div className="mt-3 flex items-center justify-between text-xs">
        <span className={balanced ? "inline-flex items-center gap-1.5 font-semibold text-emerald-600" : "text-ink-faint"}>
          Total Debit {rupiah(totalDebit)} · Kredit {rupiah(totalCredit)}
          {balanced && <><Icon name="check-circle" /> seimbang</>}
        </span>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        <button onClick={check} className="btn-primary">
          <Icon name="check" /> Periksa Jawaban
        </button>
        {hint && (
          <button onClick={() => setShowHint((s) => !s)} className="btn-ghost">
            <Icon name="lightbulb" className="text-amber-500" /> {showHint ? "Sembunyikan" : "Petunjuk"}
          </button>
        )}
        <button onClick={() => setRevealed((s) => !s)} className="btn-ghost">
          <Icon name="key" /> {revealed ? "Tutup kunci" : "Lihat kunci"}
        </button>
      </div>

      {showHint && hint && (
        <div className="mt-3 animate-fade-up rounded-xl bg-amber-50 px-4 py-3 text-sm text-amber-800">{hint}</div>
      )}

      {status === "correct" && (
        <div className="mt-3 animate-fade-up rounded-xl bg-emerald-50 px-4 py-3 text-sm font-semibold text-emerald-700">
          🎉 Benar! Jurnalmu sudah tepat dan seimbang.
        </div>
      )}
      {status === "wrong" && (
        <div className="mt-3 animate-fade-up rounded-xl bg-rose-50 px-4 py-3 text-sm text-rose-700">
          Belum tepat. Periksa lagi akun & posisi debit/kredit. Coba petunjuk atau lihat kunci.
        </div>
      )}

      {revealed && (
        <div className="mt-3 animate-fade-up overflow-hidden rounded-xl border border-line">
          <div className="bg-canvas px-3 py-2 text-xs font-bold text-ink-faint">Kunci Jawaban</div>
          <table className="w-full text-sm">
            <tbody>
              {answer.map((l, i) => (
                <tr key={i} className="border-t border-line">
                  <td className={`px-3 py-2 ${l.credit ? "pl-8 text-ink-soft" : "font-medium"}`}>{l.account}</td>
                  <td className="px-3 py-2 text-right tnum">{l.debit ? rupiah(l.debit) : ""}</td>
                  <td className="px-3 py-2 text-right tnum">{l.credit ? rupiah(l.credit) : ""}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
