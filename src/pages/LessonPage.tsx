import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getTopic, getLesson, adjacentLessons, progressKey } from "../topics";
import { BlockRenderer } from "../components/blocks";
import { useProgress } from "../lib/progress";
import { useAuth } from "../lib/auth";

export function LessonPage() {
  const { topicId = "", id = "" } = useParams();
  const topic = getTopic(topicId);
  const lesson = topic ? getLesson(topic, id) : undefined;
  const { isDone, toggle } = useProgress();
  const { user } = useAuth();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [topicId, id]);

  if (!topic || !lesson) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-20 text-center">
        <h1 className="text-2xl font-bold">Pelajaran tidak ditemukan</h1>
        <Link to="/" className="btn-primary mt-4">
          ← Kembali ke daftar topik
        </Link>
      </div>
    );
  }

  const level = topic.levels.find((l) => l.id === lesson.levelId);
  const { prev, next } = adjacentLessons(topic, lesson.id);
  const key = progressKey(topic.id, lesson.id);
  const done = isDone(key);

  return (
    <article className="mx-auto max-w-3xl px-4 py-8">
      {/* Breadcrumb */}
      <div className="mb-4 flex flex-wrap items-center gap-1.5 text-sm text-ink-faint">
        <Link to="/" className="hover:text-brand-600">Topik</Link>
        <span>/</span>
        <Link to={`/${topic.id}`} className="hover:text-brand-600">{topic.title}</Link>
        {level && (
          <>
            <span>/</span>
            <Link to={`/${topic.id}#kurikulum`} className="hover:text-brand-600">{level.subtitle}</Link>
          </>
        )}
      </div>

      <div className="mb-2 flex flex-wrap gap-2">
        {lesson.tags.map((t) => (
          <span key={t} className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-ink-faint">
            #{t}
          </span>
        ))}
      </div>

      <h1 className="text-3xl font-extrabold leading-tight text-ink">{lesson.title}</h1>
      <p className="mt-2 text-lg text-ink-faint">{lesson.summary}</p>
      <div className="mt-3 text-sm text-ink-faint">⏱ Estimasi {lesson.durationMin} menit</div>

      <hr className="my-6 border-slate-200" />

      {/* Body */}
      <div>
        {lesson.blocks.map((block, i) => (
          <BlockRenderer key={i} block={block} />
        ))}
      </div>

      {/* Complete toggle */}
      <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-5 text-center">
        <button
          onClick={() => toggle(key)}
          className={done ? "btn bg-emerald-500 text-white hover:bg-emerald-600" : "btn-primary"}
        >
          {done ? "✓ Sudah diselesaikan" : "Tandai sebagai selesai"}
        </button>
        <p className="mt-2 text-xs text-ink-faint">
          {user
            ? `Progres tersimpan ke akun ${user.email} (sinkron di semua perangkat).`
            : "Progres tersimpan di perangkat ini. Masuk dengan Google untuk menyimpan ke akun."}
        </p>
      </div>

      {/* Prev / Next */}
      <nav className="mt-8 grid gap-3 sm:grid-cols-2">
        {prev ? (
          <Link to={`/${topic.id}/pelajaran/${prev.id}`} className="card flex flex-col p-4 transition-colors hover:border-brand-300">
            <span className="text-xs text-ink-faint">← Sebelumnya</span>
            <span className="mt-1 font-semibold text-ink">{prev.title}</span>
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link
            to={`/${topic.id}/pelajaran/${next.id}`}
            className="card flex flex-col p-4 text-right transition-colors hover:border-brand-300"
          >
            <span className="text-xs text-ink-faint">Selanjutnya →</span>
            <span className="mt-1 font-semibold text-ink">{next.title}</span>
          </Link>
        ) : (
          <Link to={`/${topic.id}`} className="card flex flex-col p-4 text-right transition-colors hover:border-brand-300">
            <span className="text-xs text-ink-faint">Selesai 🎉</span>
            <span className="mt-1 font-semibold text-ink">Kembali ke kurikulum {topic.title}</span>
          </Link>
        )}
      </nav>
    </article>
  );
}
