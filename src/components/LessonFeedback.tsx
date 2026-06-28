import { useEffect, useState } from "react";
import { useAuth } from "../lib/auth";

type Vote = "up" | "down";
interface Summary {
  up: number;
  down: number;
  mine: Vote | null;
}

const LOCAL_KEY = "belajaryuk.feedback.v1";

function readLocalVotes(): Record<string, Vote> {
  try {
    return JSON.parse(localStorage.getItem(LOCAL_KEY) || "{}");
  } catch {
    return {};
  }
}

function writeLocalVote(lessonKey: string, vote: Vote) {
  const all = readLocalVotes();
  all[lessonKey] = vote;
  localStorage.setItem(LOCAL_KEY, JSON.stringify(all));
}

export function LessonFeedback({ lessonKey }: { lessonKey: string }) {
  const { user } = useAuth();
  const [summary, setSummary] = useState<Summary>({ up: 0, down: 0, mine: null });
  const [voting, setVoting] = useState(false);

  // Improvement form state
  const [formOpen, setFormOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  // Load counts; for anonymous users, fall back to the local vote record.
  useEffect(() => {
    let cancelled = false;
    fetch(`/api/feedback?lessonKey=${encodeURIComponent(lessonKey)}`, { credentials: "include" })
      .then((r) => (r.ok ? r.json() : null))
      .then((d: Summary | null) => {
        if (cancelled || !d) return;
        const mine = user ? d.mine : readLocalVotes()[lessonKey] ?? null;
        setSummary({ up: d.up, down: d.down, mine });
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, [lessonKey, user]);

  const lockedAnon = !user && summary.mine !== null; // anonymous can vote once

  function vote(value: Vote) {
    if (voting || lockedAnon || summary.mine === value) return;
    setVoting(true);
    fetch("/api/feedback", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({ lessonKey, value }),
    })
      .then((r) => (r.ok ? r.json() : null))
      .then((d: Summary | null) => {
        if (!d) return;
        setSummary({ up: d.up, down: d.down, mine: user ? d.mine : value });
        if (!user) writeLocalVote(lessonKey, value);
      })
      .catch(() => {})
      .finally(() => setVoting(false));
  }

  function submitSuggestion(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    if (message.trim().length < 3) {
      setError("Tuliskan usulan minimal beberapa kata.");
      return;
    }
    setSending(true);
    fetch("/api/suggestion", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({ lessonKey, message: message.trim(), email: email.trim() || undefined }),
    })
      .then((r) => (r.ok ? r.json() : Promise.reject(new Error("gagal"))))
      .then(() => {
        setSent(true);
        setMessage("");
        setEmail("");
      })
      .catch(() => setError("Maaf, gagal mengirim. Coba lagi sebentar."))
      .finally(() => setSending(false));
  }

  const btn = (value: Vote, icon: string, label: string) => {
    const active = summary.mine === value;
    const count = value === "up" ? summary.up : summary.down;
    const activeColor = value === "up" ? "bg-emerald-500 text-white border-emerald-500" : "bg-rose-500 text-white border-rose-500";
    return (
      <button
        onClick={() => vote(value)}
        disabled={voting || lockedAnon || active}
        aria-pressed={active}
        title={label}
        className={`flex items-center gap-2 rounded-xl border px-4 py-2 text-sm font-bold transition disabled:cursor-not-allowed ${
          active ? activeColor : "border-slate-200 bg-white text-ink-soft hover:border-slate-300 hover:bg-slate-50"
        }`}
      >
        <span className="text-base">{icon}</span>
        <span className="tnum">{count}</span>
      </button>
    );
  };

  return (
    <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-5">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="text-sm font-bold text-ink">Materi ini membantu?</div>
          <p className="mt-0.5 text-xs text-ink-faint">
            {lockedAnon
              ? "Terima kasih atas penilaianmu."
              : summary.mine
              ? "Penilaianmu tersimpan. Kamu bisa mengubahnya."
              : "Beri penilaian cepat untuk membantu kami menilai kualitas materi."}
          </p>
        </div>
        <div className="flex gap-2">
          {btn("up", "👍", "Membantu")}
          {btn("down", "👎", "Belum membantu")}
        </div>
      </div>

      <hr className="my-4 border-slate-100" />

      {sent ? (
        <div className="rounded-xl bg-emerald-50 p-3 text-sm text-emerald-800">
          ✓ Terima kasih! Usulanmu sudah kami terima dan akan dipertimbangkan.
        </div>
      ) : formOpen ? (
        <form onSubmit={submitSuggestion} className="space-y-3">
          <div className="text-sm font-bold text-ink">Usulkan perbaikan materi</div>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={4}
            maxLength={4000}
            placeholder="Contoh: penjelasan di bagian X kurang jelas, atau ada data yang perlu diperbarui..."
            className="w-full rounded-xl border border-slate-200 p-3 text-sm text-ink outline-none focus:border-brand-400"
          />
          {!user && (
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email (opsional, jika ingin kami hubungi)"
              className="w-full rounded-xl border border-slate-200 p-3 text-sm text-ink outline-none focus:border-brand-400"
            />
          )}
          {error && <div className="text-xs font-medium text-rose-600">{error}</div>}
          <div className="flex gap-2">
            <button type="submit" disabled={sending} className="btn-primary disabled:opacity-60">
              {sending ? "Mengirim..." : "Kirim usulan"}
            </button>
            <button
              type="button"
              onClick={() => {
                setFormOpen(false);
                setError("");
              }}
              className="btn bg-slate-100 text-ink-soft hover:bg-slate-200"
            >
              Batal
            </button>
          </div>
        </form>
      ) : (
        <button
          onClick={() => setFormOpen(true)}
          className="text-sm font-semibold text-brand-600 hover:text-brand-700"
        >
          ✏️ Usulkan perbaikan untuk materi ini
        </button>
      )}
    </section>
  );
}
