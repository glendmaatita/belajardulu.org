import { Link } from "react-router-dom";
import type { Topic } from "../types";
import {
  topics,
  orderedLessons,
  progressKey,
  getCategoryForTopic,
} from "../topics";
import { useProgress } from "../lib/progress";
import { useAuth } from "../lib/auth";
import { AuthGate } from "../components/AuthGate";
import { Icon, type IconName } from "../components/Icon";

interface TopicProgress {
  topic: Topic;
  total: number;
  done: number;
  pct: number;
  nextLessonId: string | null;
  category: ReturnType<typeof getCategoryForTopic>;
}

export function Dashboard() {
  const { user, ready } = useAuth();
  const { isDone, completedCount } = useProgress();

  if (!ready) {
    return (
      <div className="mx-auto grid max-w-3xl place-items-center px-4 py-32 text-ink-faint">
        <span className="flex items-center gap-2 text-sm">
          <Icon name="loading" spin /> Memuat…
        </span>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-16">
        <AuthGate
          title="Masuk untuk melihat progres belajarmu"
          description="Halaman ini menampilkan materi yang kamu ikuti dan sejauh mana progresmu. Masuk dengan Google untuk mulai."
        />
      </div>
    );
  }

  // Hitung progres per topik
  const all: TopicProgress[] = topics.map((topic) => {
    const ordered = orderedLessons(topic);
    const total = ordered.length;
    const done = ordered.filter((l) => isDone(progressKey(topic.id, l.id))).length;
    const next = ordered.find((l) => !isDone(progressKey(topic.id, l.id)));
    return {
      topic,
      total,
      done,
      pct: total ? Math.round((done / total) * 100) : 0,
      nextLessonId: next?.id ?? null,
      category: getCategoryForTopic(topic.id),
    };
  });

  const started = all.filter((t) => t.done > 0).sort((a, b) => b.pct - a.pct || b.done - a.done);
  const inProgress = started.filter((t) => t.pct < 100);
  const finished = started.filter((t) => t.pct === 100);
  const resume = inProgress[0] ?? null;

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-slate-200 bg-gradient-to-br from-brand-600 via-brand-700 to-indigo-800 text-white">
        <div className="mx-auto max-w-5xl px-4 py-12">
          <div className="flex items-center gap-4">
            {user.picture ? (
              <img
                src={user.picture}
                alt={user.name ?? user.email}
                referrerPolicy="no-referrer"
                className="h-14 w-14 rounded-full border-2 border-white/40"
              />
            ) : (
              <span className="grid h-14 w-14 place-items-center rounded-full bg-white/20 text-xl font-bold">
                {(user.name ?? user.email).charAt(0).toUpperCase()}
              </span>
            )}
            <div>
              <h1 className="text-2xl font-extrabold sm:text-3xl">
                Halo, {user.name ?? user.email.split("@")[0]}!
              </h1>
              <p className="text-sm text-white/85">Ini progres belajarmu sejauh ini.</p>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
            <Stat icon="check-circle" n={completedCount} label="Pelajaran selesai" />
            <Stat icon="book" n={started.length} label="Topik diikuti" />
            <Stat icon="fire" n={inProgress.length} label="Sedang berjalan" />
            <Stat icon="trophy" n={finished.length} label="Topik tuntas" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-10">
        {started.length === 0 ? (
          <EmptyState />
        ) : (
          <>
            {/* Lanjutkan belajar */}
            {resume && (
              <div className="mb-10">
                <h2 className="mb-3 flex items-center gap-2 text-lg font-bold text-ink">
                  <Icon name="play-circle" className="text-brand-600" /> Lanjutkan belajar
                </h2>
                <Link
                  to={`/${resume.topic.id}/pelajaran/${resume.nextLessonId}`}
                  className="group flex flex-col gap-4 overflow-hidden rounded-2xl border border-brand-200 bg-gradient-to-br from-brand-50 to-emerald-50/50 p-6 transition-all hover:-translate-y-0.5 hover:shadow-md sm:flex-row sm:items-center"
                >
                  <span className="text-4xl">{resume.topic.icon}</span>
                  <div className="min-w-0 flex-1">
                    <div className="text-lg font-bold text-ink">{resume.topic.title}</div>
                    <div className="mt-2 flex items-center gap-3">
                      <div className="h-2 flex-1 overflow-hidden rounded-full bg-white">
                        <div className="h-full bg-emerald-500 transition-all" style={{ width: `${resume.pct}%` }} />
                      </div>
                      <span className="tnum shrink-0 text-xs font-semibold text-ink-faint">
                        {resume.done}/{resume.total} · {resume.pct}%
                      </span>
                    </div>
                  </div>
                  <span className="btn-primary shrink-0">
                    Lanjut <Icon name="arrow-right" className="transition-transform group-hover:translate-x-0.5" />
                  </span>
                </Link>
              </div>
            )}

            {/* Sedang berjalan */}
            {inProgress.length > 0 && (
              <div className="mb-10">
                <h2 className="mb-3 flex items-center gap-2 text-lg font-bold text-ink">
                  <Icon name="route" className="text-brand-600" /> Sedang kamu ikuti
                </h2>
                <div className="grid gap-3 sm:grid-cols-2">
                  {inProgress.map((p) => (
                    <ProgressCard key={p.topic.id} p={p} />
                  ))}
                </div>
              </div>
            )}

            {/* Tuntas */}
            {finished.length > 0 && (
              <div>
                <h2 className="mb-3 flex items-center gap-2 text-lg font-bold text-ink">
                  <Icon name="trophy" className="text-amber-500" /> Sudah tuntas
                </h2>
                <div className="grid gap-3 sm:grid-cols-2">
                  {finished.map((p) => (
                    <ProgressCard key={p.topic.id} p={p} />
                  ))}
                </div>
              </div>
            )}
          </>
        )}
      </section>
    </>
  );
}

function Stat({ icon, n, label }: { icon: IconName; n: number; label: string }) {
  return (
    <div className="flex items-center gap-3 rounded-2xl bg-white/10 p-3">
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white/15 text-lg">
        <Icon name={icon} />
      </span>
      <div>
        <div className="tnum text-2xl font-extrabold leading-none">{n}</div>
        <div className="mt-1 text-[11px] uppercase tracking-wide text-white/80">{label}</div>
      </div>
    </div>
  );
}

function ProgressCard({ p }: { p: TopicProgress }) {
  const finished = p.pct === 100;
  const target = finished ? `/${p.topic.id}` : `/${p.topic.id}/pelajaran/${p.nextLessonId}`;
  return (
    <Link
      to={target}
      className="group flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-4 transition-colors hover:border-brand-300 hover:bg-brand-50/30"
    >
      <span className="text-3xl">{p.topic.icon}</span>
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2">
          <span className="truncate font-bold text-ink group-hover:text-brand-700">{p.topic.title}</span>
          {finished && <Icon name="check-circle" className="shrink-0 text-emerald-500" />}
        </div>
        {p.category && (
          <span className="mt-0.5 inline-flex items-center gap-1.5 text-xs text-ink-faint">
            <Icon name={p.category.icon} /> {p.category.title}
          </span>
        )}
        <div className="mt-2.5 flex items-center gap-3">
          <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-slate-200">
            <div
              className={`h-full transition-all ${finished ? "bg-emerald-500" : "bg-brand-500"}`}
              style={{ width: `${p.pct}%` }}
            />
          </div>
          <span className="tnum shrink-0 text-xs font-semibold text-ink-faint">
            {p.done}/{p.total}
          </span>
        </div>
      </div>
    </Link>
  );
}

function EmptyState() {
  return (
    <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-12 text-center">
      <span className="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-slate-100 text-2xl text-ink-faint">
        <Icon name="bookmark" />
      </span>
      <h2 className="mt-4 text-xl font-bold text-ink">Belum ada materi yang kamu ikuti</h2>
      <p className="mx-auto mt-2 max-w-md text-sm text-ink-soft">
        Pilih topik mana pun dan selesaikan pelajaran pertamamu. Progresmu akan muncul di sini.
      </p>
      <Link to="/" className="btn-primary mt-6">
        <Icon name="compass" /> Jelajahi materi
      </Link>
    </div>
  );
}
