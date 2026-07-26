import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getTopic, getLesson, adjacentLessons, progressKey, loadTopic } from "../topics";
import type { ContentBlock } from "../types";
import { BlockRenderer } from "../components/blocks";
import { LessonFeedback } from "../components/LessonFeedback";
import { AuthGate } from "../components/AuthGate";
import { useProgress } from "../lib/progress";
import { useActivity } from "../lib/activity";
import { useAuth } from "../lib/auth";
import { Icon } from "../components/Icon";

export function LessonPage() {
  const { topicId = "", id = "" } = useParams();
  const topic = getTopic(topicId);
  const lesson = topic ? getLesson(topic, id) : undefined;
  const { isDone, toggle } = useProgress();
  const { markStarted } = useActivity();
  const { user, ready } = useAuth();

  // Isi pelajaran (blocks) dimuat lazy per-topik: null = sedang memuat.
  const [blocks, setBlocks] = useState<ContentBlock[] | null>(null);
  useEffect(() => {
    let alive = true;
    setBlocks(null);
    loadTopic(topicId).then((full) => {
      if (!alive) return;
      setBlocks(full?.lessons.find((l) => l.id === id)?.blocks ?? []);
    });
    return () => {
      alive = false;
    };
  }, [topicId, id]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [topicId, id]);

  // Record that this lesson has been opened (so it shows up in "Materi Saya").
  useEffect(() => {
    if (topic && lesson) markStarted(progressKey(topic.id, lesson.id));
  }, [topic, lesson, markStarted]);

  if (!topic || !lesson) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-20 text-center">
        <h1 className="text-2xl font-bold">Pelajaran tidak ditemukan</h1>
        <Link to="/" className="btn-primary mt-4">
          <Icon name="arrow-left" /> Kembali ke daftar topik
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
      <div className="mb-5 flex flex-wrap items-center gap-1.5 text-sm text-ink-faint">
        <Link to="/" className="hover:text-brand-700">Topik</Link>
        <Icon name="chevron-right" className="text-[10px] text-line-strong" />
        <Link to={`/${topic.id}`} className="hover:text-brand-700">{topic.title}</Link>
        {level && (
          <>
            <Icon name="chevron-right" className="text-[10px] text-line-strong" />
            <Link to={`/${topic.id}#kurikulum`} className="hover:text-brand-700">{level.subtitle}</Link>
          </>
        )}
      </div>

      <div className="mb-3 flex flex-wrap gap-2">
        {lesson.tags.map((t) => (
          <span key={t} className="chip">
            <Icon name="hashtag" className="text-[9px] text-accent-500" />
            {t}
          </span>
        ))}
      </div>

      <h1 className="display text-[2.1rem] leading-[1.1] text-ink sm:text-4xl">{lesson.title}</h1>
      <p className="mt-3 text-lg leading-relaxed text-ink-soft">{lesson.summary}</p>
      <div className="mt-3 flex items-center gap-2 text-sm text-ink-faint">
        <Icon name="clock" className="text-accent-500" /> Estimasi {lesson.durationMin} menit
      </div>

      <div className="my-6 flex items-center gap-3">
        <span className="rule" />
        <span className="h-px flex-1 bg-line" />
      </div>

      {/* Body (gated: hanya pengguna login yang bisa melihat isi materi) */}
      {!ready ? (
        <div className="grid h-64 place-items-center text-ink-faint">
          <span className="flex items-center gap-2 text-sm">
            <Icon name="loading" spin /> Memuat materi…
          </span>
        </div>
      ) : !user ? (
        <AuthGate
          title="Materi ini terkunci"
          description={`Untuk membuka isi "${lesson.title}", masuk dulu dengan Google. Gratis, dan progres belajarmu akan tersimpan otomatis.`}
        />
      ) : blocks === null ? (
        <div className="grid h-64 place-items-center text-ink-faint">
          <span className="flex items-center gap-2 text-sm">
            <Icon name="loading" spin /> Memuat materi…
          </span>
        </div>
      ) : (
        <>
          <div>
            {blocks.map((block, i) => (
              <BlockRenderer key={`${key}#${i}`} block={block} lessonKey={key} index={i} />
            ))}
          </div>

          {/* Complete toggle */}
          <div className="card-ruled mt-10 p-6 text-center">
            <button
              onClick={() => toggle(key)}
              className={done ? "btn bg-emerald-500 text-white shadow-card hover:bg-emerald-600 active:translate-y-px" : "btn-primary"}
            >
              <Icon name={done ? "check-circle" : "flag"} />
              {done ? "Sudah diselesaikan" : "Tandai sebagai selesai"}
            </button>
            <p className="mt-2 text-xs text-ink-faint">
              {`Progres tersimpan ke akun ${user.email} (sinkron di semua perangkat).`}
            </p>
          </div>

          {/* Review (thumbs) + improvement proposal */}
          <LessonFeedback lessonKey={key} />
        </>
      )}

      {/* Prev / Next */}
      <nav className="mt-8 grid gap-3 sm:grid-cols-2">
        {prev ? (
          <Link to={`/${topic.id}/pelajaran/${prev.id}`} className="group card flex flex-col p-4 transition-colors hover:border-brand-300">
            <span className="flex items-center gap-1.5 text-xs text-ink-faint">
              <Icon name="arrow-left" className="transition-transform group-hover:-translate-x-0.5" /> Sebelumnya
            </span>
            <span className="mt-1 font-semibold text-ink">{prev.title}</span>
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link
            to={`/${topic.id}/pelajaran/${next.id}`}
            className="group card flex flex-col p-4 text-right transition-colors hover:border-brand-300"
          >
            <span className="flex items-center justify-end gap-1.5 text-xs text-ink-faint">
              Selanjutnya <Icon name="arrow-right" className="transition-transform group-hover:translate-x-0.5" />
            </span>
            <span className="mt-1 font-semibold text-ink">{next.title}</span>
          </Link>
        ) : (
          <Link to={`/${topic.id}`} className="card flex flex-col p-4 text-right transition-colors hover:border-brand-300">
            <span className="flex items-center justify-end gap-1.5 text-xs text-ink-faint">
              <Icon name="trophy" className="text-amber-500" /> Selesai
            </span>
            <span className="mt-1 font-semibold text-ink">Kembali ke kurikulum {topic.title}</span>
          </Link>
        )}
      </nav>
    </article>
  );
}
